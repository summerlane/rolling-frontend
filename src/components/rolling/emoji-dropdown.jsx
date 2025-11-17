import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import media from "@/styles/media";
import { font } from "@/styles/font";
import { RollingHeaderArrowDown } from "@/styles/rolling-page-styles";

const EmojiDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const EmojiDropdownWrapper = styled.div`
  position: fixed;
  transform: translate(-80%, 10%);
  z-index: 1000;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid ${colors.gray[300]};
  padding: 24px;
  width: auto;
  max-height: 300px;
  overflow-y: auto;
`;

const EmojiDropdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  ${media.medium`
    grid-template-columns: repeat(3, 1fr);
  `}
  ${media.small`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

const EmojiDropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 8px 12px;
  text-align: center;
  border-radius: 32px;
  background: rgba(153, 153, 153, 1);
  gap: 2px;

  ${media.small`
    padding: 4px 8px;
  `}
`;

const EmojiDropdownIcon = styled.div``;

const EmojiDropdownCount = styled.span`
  ${font.regular16}
  color: rgba(255, 255, 255, 1);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 999;
`;

/**
 * 이모지 드롭다운 컴포넌트
 * 책임: 이모지 목록을 드롭다운 형태로 표시 (API에서 이미 정렬된 상위 8개)
 */
export default function EmojiDropdown({
  emojis,
  isOpen,
  onToggle,
  onClose,
  arrowDownIcon,
}) {
  // API에서 이미 카운트 순으로 정렬되어 최대 8개만 제공됨
  const topEmojis = emojis;
  return (
    <EmojiDropdownContainer>
      <RollingHeaderArrowDown src={arrowDownIcon} onClick={onToggle} />
      {isOpen && (
        <>
          <Overlay onClick={onClose} />
          <EmojiDropdownWrapper>
            <EmojiDropdownGrid>
              {topEmojis.map((emojiData, index) => (
                <EmojiDropdownItem key={index}>
                  <EmojiDropdownIcon>{emojiData.emoji}</EmojiDropdownIcon>
                  <EmojiDropdownCount>{emojiData.count}</EmojiDropdownCount>
                </EmojiDropdownItem>
              ))}
            </EmojiDropdownGrid>
          </EmojiDropdownWrapper>
        </>
      )}
    </EmojiDropdownContainer>
  );
}
