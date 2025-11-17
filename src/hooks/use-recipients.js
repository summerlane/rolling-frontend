import { useState, useEffect, useCallback } from "react";
import { getRecipientById } from "@/api/rolling-page-api";


/**
 * 특정 유저 상세 조회 커스텀 훅
 * 책임: 단일 유저 데이터 관리 및 API 호출
 */
export function useRecipient(recipientId, autoFetch = true) {
  const [recipient, setRecipient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipient = useCallback(async () => {
    if (!recipientId) return;

    setLoading(true);
    setError(null);

    try {
      const data = await getRecipientById(recipientId);
      setRecipient(data);
    } catch (err) {
      setError(err.message || "수신자 정보를 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }, [recipientId]);

  useEffect(() => {
    if (autoFetch && recipientId) {
      fetchRecipient();
    }
  }, [autoFetch, recipientId, fetchRecipient]);

  const refresh = useCallback(() => {
    fetchRecipient();
  }, [fetchRecipient]);

  return {
    recipient,
    loading,
    error,
    refresh,
    fetchRecipient,
  };
}




