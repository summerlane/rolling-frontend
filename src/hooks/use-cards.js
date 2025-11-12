import { useMemo } from 'react';


/**
 * 카드 섹션 컴포넌트
 * 책임: 카드 데이터를 처리하고 표시
 */
export default function useCards(cards, maxVisible = 6) {
    const processedData = useMemo(() => {
        if (!cards || cards.length === 0) {
            return {
                visibleCards: [],
                overflowCount: 0,
                totalCount: 0,
                hasOverflow: false,
            };
        }

        const totalCount = cards.length;
        const hasOverflow = totalCount > maxVisible;

        const visibleCount = hasOverflow ? maxVisible - 1 : maxVisible;
        const visibleCards = cards.slice(0, visibleCount);
        const overflowCount = hasOverflow ? totalCount - visibleCount : 0;

        return {
            visibleCards,
            overflowCount,
            totalCount,
            hasOverflow,
        };
    }, [cards, maxVisible]);

    return processedData;
}

