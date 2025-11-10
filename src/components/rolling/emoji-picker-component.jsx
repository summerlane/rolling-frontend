import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';

const EmojiPickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const EmojiPickerWrapper = styled.div`
  position: fixed;
  transform: translate(-60%, 2%);
  z-index: 1000;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid ${colors.gray[300]};
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
 * 이모지 선택기 컴포넌트
 * 책임: 이모지 피커 UI 렌더링 및 이모지 선택 이벤트 처리
 */
export default function EmojiPickerComponent({ isOpen, onClose, onEmojiSelect, children }) {
    const handleEmojiClick = (emojiData) => {
        onEmojiSelect(emojiData.emoji);
        onClose();
    };

    return (
        <EmojiPickerContainer>
            {children}
            {isOpen && (
                <>
                    <Overlay onClick={onClose} />
                    <EmojiPickerWrapper>
                        <EmojiPicker
                            onEmojiClick={handleEmojiClick}
                            width={320}
                            searchPlaceholder="search"
                            skinTonesDisabled={true}
                            searchDisabled={false}
                            autoFocusSearch={false}
                        />
                    </EmojiPickerWrapper>
                </>
            )}
        </EmojiPickerContainer>
    );
}

