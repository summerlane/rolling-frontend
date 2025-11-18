import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  RollingHeaderContainer,
  RollingHeaderUserInfo,
  RollingHeaderRightContainer,
  PerpendicularLineFirst,
  RollingPageContainer,
  CardPageDeleteButton,
  CardContainerWrapper,
} from "@/styles/rolling-page-styles";
import RollingPageHeader from "@/components/rolling/rolling-page-header";
import ParticipantSection from "@/components/rolling/participant-section";
import CardContents from "@/components/rolling/card-contents";
import DeleteConfirmModal from "@/components/rolling/delete-confirm-modal";
import useEditMode from "@/hooks/use-edit-mode";
import { useRecipient } from "@/hooks/use-recipients";
import { useDeleteActions } from "@/hooks/use-delete-actions";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import AddEmojiIcon from "@/assets/icons/add-emoji.svg";
import ShareIcon from "@/assets/icons/share.svg";

export default function RollingPage() {
  // URL 파라미터에서 recipientId 가져오기 (/post/:id)
  const { id } = useParams();
  const recipientId = Number(id);
  const navigate = useNavigate();

  // 편집 모드 확인 (URL이 /edit으로 끝나는지)
  const isEditMode = useEditMode();

  // API에서 수신자 데이터 가져오기
  const { recipient, error } = useRecipient(recipientId);

  // 삭제 액션 훅
  const { handleDeleteRecipient } = useDeleteActions();

  // 페이지 삭제 확인 모달 상태
  const [isDeletePageModalOpen, setIsDeletePageModalOpen] = useState(false);

  // recipientId가 없거나 유효하지 않은 경우
  if (!recipientId || isNaN(recipientId)) {
    return <div>잘못된 페이지 주소입니다.</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다: {error}</div>;
  }

  if (!recipient) {
    return <div>데이터를 불러올 수 없습니다.</div>;
  }

  // recentMessages에서 프로필 데이터 추출 (최신순 3개)
  const profiles =
    recipient.recentMessages?.map((msg, index) => ({
      id: msg.id || index,
      name: msg.sender,
      profileImageURL: msg.profileImageURL,
    })) || [];

  // 페이지 삭제 핸들러
  const handleOpenDeletePageModal = () => {
    setIsDeletePageModalOpen(true);
  };

  const handleCloseDeletePageModal = () => {
    setIsDeletePageModalOpen(false);
  };

  const handleConfirmDeletePage = () => {
    handleDeleteRecipient(recipientId);
  };

  // 수정 모드로 이동
  const handleNavigateToEditMode = () => {
    navigate(`/post/${recipientId}/edit`);
  };


  return (
    <>
      <RollingHeaderContainer>
        <RollingHeaderUserInfo>To. {recipient.name}</RollingHeaderUserInfo>

        <RollingHeaderRightContainer>
          {/* 참여자 프로필 섹션 - messageCount 전달 */}
          <ParticipantSection
            profiles={profiles}
            totalCount={recipient.messageCount}
            maxVisible={3}
          />

          <PerpendicularLineFirst />

          {/* 이모지 및 공유 헤더 - topReactions 전달 */}
          <RollingPageHeader
            recipientId={recipientId}
            recipientName={recipient.name}
            topReactions={recipient.topReactions || []}
            ArrowDownIcon={ArrowDownIcon}
            AddEmojiIcon={AddEmojiIcon}
            ShareIcon={ShareIcon}
          />
        </RollingHeaderRightContainer>
      </RollingHeaderContainer>

      <RollingPageContainer
        $backgroundcolor={recipient.backgroundColor}
        $backgroundimage={recipient.backgroundImageURL}
      >
        <CardContainerWrapper>
          {isEditMode ? (
            <CardPageDeleteButton onClick={handleOpenDeletePageModal}>
              삭제하기
            </CardPageDeleteButton>
          ) : (
            <CardPageDeleteButton onClick={handleNavigateToEditMode}>
              수정하기
            </CardPageDeleteButton>
          )}

          <CardContents recipientId={recipientId} isEditMode={isEditMode} />
        </CardContainerWrapper>
      </RollingPageContainer>

      {/* 페이지 전체 삭제 확인 모달 */}
      <DeleteConfirmModal
        isOpen={isDeletePageModalOpen}
        onClose={handleCloseDeletePageModal}
        onConfirm={handleConfirmDeletePage}
        title="롤링 페이퍼 삭제"
        message={`'${recipient.name}'님의 롤링 페이퍼를 삭제하시겠습니까?\n삭제 후에는 복구할 수 없습니다.`}
      />
    </>
  );
}
