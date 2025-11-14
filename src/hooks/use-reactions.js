import { useState, useCallback } from "react";
import { getReactions, addReaction } from "@/api/rolling-page-api";

/**
 * 리액션 관리 커스텀 훅
 * 책임: 리액션 데이터 관리 및 API 호출
 */
export function useReactions(recipientId) {
    const [reactions, setReactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 모든 리액션 조회 (최대 8개)
    const fetchReactions = useCallback(async () => {
        if (!recipientId) return;

        setLoading(true);
        setError(null);

        try {
            const data = await getReactions(recipientId, { limit: 8, offset: 0 });
            setReactions(data.results || []);
        } catch (err) {
            setError(err.message || "리액션을 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    }, [recipientId]);

    // 리액션 추가/감소
    const toggleReaction = useCallback(
        async (emoji, type = "increase") => {
            if (!recipientId) return;

            try {
                const result = await addReaction(recipientId, { emoji, type });

                // 로컬 상태 업데이트
                setReactions((prev) => {
                    const existing = prev.find((r) => r.emoji === emoji);
                    if (existing) {
                        return prev.map((r) =>
                            r.emoji === emoji ? { ...r, count: result.count } : r,
                        );
                    } else {
                        return [...prev, result];
                    }
                });

                return result;
            } catch (err) {
                setError(err.message || "리액션 추가에 실패했습니다.");
                throw err;
            }
        },
        [recipientId],
    );

    return {
        reactions,
        loading,
        error,
        fetchReactions,
        toggleReaction,
    };
}

export default useReactions;

