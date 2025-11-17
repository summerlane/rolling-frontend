import React, { useState, useEffect } from "react";
import ShareModal from "@/components/rolling/share-modal";
import EmojiDisplayList from "@/components/rolling/emoji-display-list";
import EmojiDropdown from "@/components/rolling/emoji-dropdown";
import HeaderActionButtons from "@/components/rolling/header-action-buttons";
import useEmojiManager from "@/hooks/use-emoji-manager";
import { useReactions } from "@/hooks/use-reactions";
import { RollingHeaderEmojiContainer } from "@/styles/rolling-page-styles";

/**
 * 롤링 페이지 헤더 컴포넌트
 * 책임: 전체 헤더 구성 요소 조합 및 상태 관리
 */
export default function RollingPageHeader({
  recipientId,
  topReactions = [],
  ArrowDownIcon,
  AddEmojiIcon,
  ShareIcon,
}) {
  // UI 상태 관리
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isEmojiDropdownOpen, setIsEmojiDropdownOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [allReactions, setAllReactions] = useState([]);

  // API의 topReactions를 이모지 형태로 변환
  const initialEmojis = topReactions.map((reaction) => ({
    emoji: reaction.emoji,
    count: reaction.count,
  }));

  const { handleEmojiSelect, getSortedEmojis, getTopEmojis } = useEmojiManager(initialEmojis);

  // 리액션 API 훅
  const { reactions, fetchReactions, toggleReaction } = useReactions(recipientId);

  // 드롭다운 열릴 때 전체 리액션 불러오기
  useEffect(() => {
    if (isEmojiDropdownOpen && reactions.length === 0) {
      fetchReactions();
    }
  }, [isEmojiDropdownOpen, reactions.length, fetchReactions]);

  // 전체 리액션 데이터 변환
  useEffect(() => {
    if (reactions.length > 0) {
      const converted = reactions.map((r) => ({
        emoji: r.emoji,
        count: r.count,
      }));
      setAllReactions(converted);
    }
  }, [reactions]);

  // 이모지 선택 시 API 호출
  const handleEmojiAdd = async (emoji) => {
    try {
      await toggleReaction(emoji, "increase");
      handleEmojiSelect(emoji);
    } catch (err) {
      console.error("이모지 추가 실패", err);
    }
  };

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

  // 드롭다운에 표시할 데이터: allReactions가 있으면 사용, 없으면 sortedEmojis 사용
  const dropdownEmojis = allReactions.length > 0 ? allReactions : sortedEmojis;

  // 현재 페이지 URL
  const currentUrl = window.location.href;

  return (
    <RollingHeaderEmojiContainer>
      {/* 상위 3개 이모지 표시 */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <EmojiDisplayList emojis={topThreeEmojis} />
        {dropdownEmojis.length > 0 && (
          <EmojiDropdown
            emojis={dropdownEmojis}
            isOpen={isEmojiDropdownOpen}
            onToggle={toggleEmojiDropdown}
            onClose={closeEmojiDropdown}
            arrowDownIcon={ArrowDownIcon}
          />
        )}
      </div>


      {/* 이모지 추가 및 공유 버튼 */}
      <HeaderActionButtons
        isEmojiPickerOpen={isEmojiPickerOpen}
        onToggleEmojiPicker={toggleEmojiPicker}
        onCloseEmojiPicker={closeEmojiPicker}
        onEmojiSelect={handleEmojiAdd}
        onShareClick={openShareModal}
        addEmojiIcon={AddEmojiIcon}
        shareIcon={ShareIcon}
        shareModalComponent={
          <ShareModal isOpen={isShareModalOpen} onClose={closeShareModal} shareUrl={currentUrl} />
        }
      />
    </RollingHeaderEmojiContainer>
  );
}
