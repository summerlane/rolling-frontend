import React, { useState } from 'react';
import ShareModal from '@/components/rolling/share-modal';
import EmojiDisplayList from '@/components/rolling/emoji-display-list';
import EmojiDropdown from '@/components/rolling/emoji-dropdown';
import HeaderActionButtons from '@/components/rolling/header-action-buttons';
import useEmojiManager from '@/hooks/use-emoji-manager';
import { RollingHeaderImojiContainer } from '@/styles/rolling-page-styles';

/**
 * 롤링 페이지 헤더 컴포넌트
 * 책임: 전체 헤더 구성 요소 조합 및 상태 관리
 */
export default function RollingPageHeader({
  ArrowDownIcon,
  AddEmojiIcon,
  ShareIcon
}) {
  // UI 상태 관리
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isEmojiDropdownOpen, setIsEmojiDropdownOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // 이모지 상태 및 로직 관리
  const initialEmojis = [
    { emoji: '😘', count: 12 },
    { emoji: '😍', count: 8 },
    { emoji: '👍', count: 15 },
    { emoji: '🎉', count: 5 },
    { emoji: '❤️', count: 20 },
    { emoji: '😂', count: 3 },
    { emoji: '🔥', count: 7 }
  ];

  const { handleEmojiSelect, getSortedEmojis, getTopEmojis } = useEmojiManager(initialEmojis);

  // 이모지 피커 핸들러
  const toggleEmojiPicker = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  };

  const closeEmojiPicker = () => {
    setIsEmojiPickerOpen(false);
  };

  // 이모지 드롭다운 핸들러
  const toggleEmojiDropdown = () => {
    setIsEmojiDropdownOpen(!isEmojiDropdownOpen);
  };

  const closeEmojiDropdown = () => {
    setIsEmojiDropdownOpen(false);
  };

  // 공유 모달 핸들러
  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  // 정렬된 이모지 및 상위 3개 추출
  const sortedEmojis = getSortedEmojis();
  const topThreeEmojis = getTopEmojis(3);
  const hasMoreEmojis = sortedEmojis.length > 3;

  // 현재 페이지 URL
  const currentUrl = window.location.href;

  return (
    <RollingHeaderImojiContainer>
      {/* 상위 3개 이모지 표시 */}
      <EmojiDisplayList emojis={topThreeEmojis} />

      {/* 더 많은 이모지가 있을 경우 드롭다운 */}
      {hasMoreEmojis && (
        <EmojiDropdown
          emojis={sortedEmojis}
          isOpen={isEmojiDropdownOpen}
          onToggle={toggleEmojiDropdown}
          onClose={closeEmojiDropdown}
          arrowDownIcon={ArrowDownIcon}
        />
      )}

      {/* 이모지 추가 및 공유 버튼 */}
      <HeaderActionButtons
        isEmojiPickerOpen={isEmojiPickerOpen}
        onToggleEmojiPicker={toggleEmojiPicker}
        onCloseEmojiPicker={closeEmojiPicker}
        onEmojiSelect={handleEmojiSelect}
        onShareClick={openShareModal}
        addEmojiIcon={AddEmojiIcon}
        shareIcon={ShareIcon}
        shareModalComponent={
          <ShareModal
            isOpen={isShareModalOpen}
            onClose={closeShareModal}
            shareUrl={currentUrl}
          />
        }
      />
    </RollingHeaderImojiContainer>
  );
}