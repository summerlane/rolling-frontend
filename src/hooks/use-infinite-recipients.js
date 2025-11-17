import { useState, useCallback } from "react";
import { getRecipientMessages } from "@/api/rolling-page-api";

/**
 * 무한 스크롤을 위한 수신자 메시지 조회 커스텀 훅
 * 책임: 메시지 무한 스크롤 데이터 관리
 */
export function useInfiniteRecipientMessages(recipientId, isEditMode = false) {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const limit = 6; // 이후 로드할 메시지 개수
    const initialLimit = isEditMode ? 6 : 5; // 뷰어 모드는 추가하기 카드 때문에 5개

    // 초기 데이터 로드
    const fetchInitialData = useCallback(async () => {
        if (!recipientId) return;

        setLoading(true);
        setError(null);
        setOffset(0);

        try {
            const data = await getRecipientMessages(recipientId, {
                limit: initialLimit,
                offset: 0
            });
            // results는 이미 최신순으로 정렬되어 있음
            setMessages(data.results || []);
            setHasMore(data.next !== null);
            setOffset(initialLimit);
        } catch (err) {
            setError(err.message || "메시지를 불러오는데 실패했습니다.");
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    }, [recipientId, initialLimit]);

    // 더 많은 데이터 로드 (무한 스크롤)
    const fetchMoreData = useCallback(async () => {
        if (loading || !hasMore) return;

        setLoading(true);

        try {
            const data = await getRecipientMessages(recipientId, { limit, offset });

            // 기존 메시지에 새 메시지 추가
            setMessages((prev) => [...prev, ...(data.results || [])]);
            setHasMore(data.next !== null);
            setOffset((prev) => prev + limit);
        } catch (err) {
            setError(err.message || "추가 메시지를 불러오는데 실패했습니다.");
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    }, [loading, hasMore, offset, recipientId]);

    const refresh = useCallback(() => {
        setMessages([]);
        setOffset(0);
        setHasMore(true);
        fetchInitialData();
    }, [fetchInitialData]);

    return {
        messages,
        loading,
        error,
        hasMore,
        fetchInitialData,
        fetchMoreData,
        refresh,
    };
}

export default useInfiniteRecipientMessages;
