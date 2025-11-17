import React from "react";
import {
  RollingHeaderEmojiIconContainer,
  RollingHeaderEmojiText,
  RollingHeaderEmojiIcon,
} from "@/styles/rolling-page-styles";

/**
 * 이모지 표시 리스트 컴포넌트
 * 책임: 상위 N개의 이모지를 화면에 표시
 */
export default function EmojiDisplayList({ emojis }) {
  return (
    <>
      {emojis.map((emojiData, index) => (
        <RollingHeaderEmojiIconContainer key={index}>
          <RollingHeaderEmojiIcon>{emojiData.emoji}</RollingHeaderEmojiIcon>
          <RollingHeaderEmojiText>{emojiData.count}</RollingHeaderEmojiText>
        </RollingHeaderEmojiIconContainer>
      ))}
    </>
  );
}
