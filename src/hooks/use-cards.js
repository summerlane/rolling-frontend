import { useMemo } from "react";

/**
 * 카드 데이터 처리 커스텀 훅
 * 책임: 카드 목록 데이터 가공 및 표시 개수 제한
 */
export default function useCards(cards, maxVisible = 6) {
  const processedData = useMemo(() => {
    if (!cards || cards.length === 0) {
      return {
        visibleCards: [],
        totalCount: 0,
        hasMore: false,
      };
    }

    const totalCount = cards.length;
    const hasMore = totalCount > maxVisible;
    const visibleCards = cards.slice(0, maxVisible);

    return {
      visibleCards,
      totalCount,
      hasMore,
    };
  }, [cards, maxVisible]);

  return processedData;
}
