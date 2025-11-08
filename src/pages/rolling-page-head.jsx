import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import media from '@/styles/media';
import { font } from '@/styles/font';
import ShareModal from '@/components/common/share-modal';
import {
  RollingHeaderImojiContainer,
  RollingHeaderImojiIconContainer,
  RollingHeaderImojiText,
  RollingHeaderImojiIcon,
  RollingHeaderImojiEditButtonContainer,
  RollingHeaderImojiEditButton,
  RollingHeaderImojiEditButtonIcon,
  RollingHeaderImojiEditButtonText,
  RollingHeaderArrowDown,
  PerpendicularLineSecond,
  RollingHeaderLinkShareButton,
} from '@/styles/rolling-page-styles';

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

  background: transparent;
  z-index: 999;
`;

// 이모지 드롭다운 관련 스타일
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

const EmojiDropdownIcon = styled.div`
`;

const EmojiDropdownCount = styled.span`
  ${font.regular16}
  color: rgba(255, 255, 255, 1)
`;

// 이모지 피커 컴포넌트
function EmojiPickerComponent({ isOpen, onClose, onEmojiSelect, children }) {
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

// 롤링 페이지 헤더 컴포넌트
export default function RollingPageHeader({
  ArrowDownIcon,
  AddEmojiIcon,
  ShareIcon
}) {
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isEmojiDropdownOpen, setIsEmojiDropdownOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [selectedEmojis, setSelectedEmojis] = useState([
    { emoji: '😘', count: 12 },
    { emoji: '😍', count: 8 },
    { emoji: '👍', count: 15 },
    { emoji: '🎉', count: 5 },
    { emoji: '❤️', count: 20 },
    { emoji: '😂', count: 3 },
    { emoji: '🔥', count: 7 }
  ]);

  const handleEmojiSelect = (emoji) => {
    const existingEmojiIndex = selectedEmojis.findIndex(item => item.emoji === emoji);

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

  const toggleEmojiPicker = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  };

  const closeEmojiPicker = () => {
    setIsEmojiPickerOpen(false);
  };

  const toggleEmojiDropdown = () => {
    setIsEmojiDropdownOpen(!isEmojiDropdownOpen);
  };

  const closeEmojiDropdown = () => {
    setIsEmojiDropdownOpen(false);
  };

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  // 카운트 순으로 정렬하여 상위 3개만 추출
  const sortedEmojis = [...selectedEmojis].sort((a, b) => b.count - a.count);
  const topThreeEmojis = sortedEmojis.slice(0, 3);
  const hasMoreEmojis = selectedEmojis.length > 3;

  // 현재 페이지 URL 가져오기
  const currentUrl = window.location.href;

  return (
    <RollingHeaderImojiContainer>
      {topThreeEmojis.map((emojiData, index) => (
        <RollingHeaderImojiIconContainer key={index}>
          <RollingHeaderImojiIcon>{emojiData.emoji}</RollingHeaderImojiIcon>
          <RollingHeaderImojiText>{emojiData.count}</RollingHeaderImojiText>
        </RollingHeaderImojiIconContainer>
      ))}

      {hasMoreEmojis && (
        <EmojiDropdownContainer>
          <RollingHeaderArrowDown
            src={ArrowDownIcon}
            onClick={toggleEmojiDropdown}
          />
          {isEmojiDropdownOpen && (
            <>
              <Overlay onClick={closeEmojiDropdown} />
              <EmojiDropdownWrapper>
                <EmojiDropdownGrid>
                  {sortedEmojis.map((emojiData, index) => (
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
      )}

      <RollingHeaderImojiEditButtonContainer>
        <EmojiPickerComponent
          isOpen={isEmojiPickerOpen}
          onClose={closeEmojiPicker}
          onEmojiSelect={handleEmojiSelect}
        >
          <RollingHeaderImojiEditButton onClick={toggleEmojiPicker}>
            <RollingHeaderImojiEditButtonIcon src={AddEmojiIcon} />
            <RollingHeaderImojiEditButtonText>추가</RollingHeaderImojiEditButtonText>
          </RollingHeaderImojiEditButton>
        </EmojiPickerComponent>
        <PerpendicularLineSecond />
        <RollingHeaderLinkShareButton
          src={ShareIcon}
          onClick={openShareModal}
          style={{ cursor: 'pointer' }}
        />
      </RollingHeaderImojiEditButtonContainer>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={closeShareModal}
        shareUrl={currentUrl}
      />
    </RollingHeaderImojiContainer>
  );
}