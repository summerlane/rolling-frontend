import { useState } from "react";

/**
 * 이모지 관리 커스텀 훅
 * 책임: 이모지 상태 관리 및 비즈니스 로직 처리
 */
export default function useEmojiManager(initialEmojis = []) {
  const [selectedEmojis, setSelectedEmojis] = useState(initialEmojis);

  const handleEmojiSelect = (emoji) => {
    const existingEmojiIndex = selectedEmojis.findIndex(
      (item) => item.emoji === emoji
    );

    if (existingEmojiIndex !== -1) {
      // 이미 존재하는 이모지면 카운트 증가
      const updatedEmojis = [...selectedEmojis];
      updatedEmojis[existingEmojiIndex].count += 1;
      setSelectedEmojis(updatedEmojis);
    } else {
      // 새로운 이모지면 추가
      setSelectedEmojis([...selectedEmojis, { emoji, count: 1 }]);
    }
  };

  // 카운트 순으로 정렬
  const getSortedEmojis = () => {
    return [...selectedEmojis].sort((a, b) => b.count - a.count);
  };

  // 상위 N개 추출
  const getTopEmojis = (count) => {
    return getSortedEmojis().slice(0, count);
  };

  return {
    selectedEmojis,
    handleEmojiSelect,
    getSortedEmojis,
    getTopEmojis,
  };
}
