import React from "react";
import styled from "styled-components";
import EmojiPickerComponent from "./emoji-picker-component";
import {
  RollingHeaderEmojiEditButtonContainer,
  RollingHeaderEmojiEditButton,
  RollingHeaderEmojiEditButtonIcon,
  RollingHeaderEmojiEditButtonText,
  PerpendicularLineSecond,
  RollingHeaderLinkShareButton,
} from "@/styles/rolling-page-styles";

const ShareButtonWrapper = styled.div`
  position: relative;
`;

/**
 * 헤더 액션 버튼 컴포넌트
 * 책임: 이모지 추가 버튼과 공유 버튼 렌더링
 */
export default function HeaderActionButtons({
  isEmojiPickerOpen,
  onToggleEmojiPicker,
  onCloseEmojiPicker,
  onEmojiSelect,
  onShareClick,
  addEmojiIcon,
  shareIcon,
  shareModalComponent, // ShareModal 컴포넌트를 props로 받음
}) {
  return (
    <RollingHeaderEmojiEditButtonContainer>
      <EmojiPickerComponent
        isOpen={isEmojiPickerOpen}
        onClose={onCloseEmojiPicker}
        onEmojiSelect={onEmojiSelect}
      >
        <RollingHeaderEmojiEditButton onClick={onToggleEmojiPicker}>
          <RollingHeaderEmojiEditButtonIcon src={addEmojiIcon} />
          <RollingHeaderEmojiEditButtonText>
            추가
          </RollingHeaderEmojiEditButtonText>
        </RollingHeaderEmojiEditButton>
      </EmojiPickerComponent>
      <PerpendicularLineSecond />
      <ShareButtonWrapper>
        <RollingHeaderLinkShareButton
          src={shareIcon}
          onClick={onShareClick}
          style={{ cursor: "pointer" }}
        />
        {shareModalComponent}
      </ShareButtonWrapper>
    </RollingHeaderEmojiEditButtonContainer>
  );
}
