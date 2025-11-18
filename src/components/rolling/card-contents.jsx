import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  CardContainer,
  Card,
  CardEditButton,
  CardContentContainer,
  CardContentStatus,
  CardContentStatusContainer,
  CardContentStatusProfileImage,
  CardContentStatusProfileName,
  CardContentStatusRelationship,
  CardContentText,
  CardContentDate,
  CardContentStatusProfileContainer,
  CardContentDeleteButton,
} from "@/styles/rolling-page-styles";
import { useInfiniteRecipientMessages } from "@/hooks/use-infinite-recipients";
import { useDeleteActions } from "@/hooks/use-delete-actions";
import CardDetailModal from "./card-detail-modal";
import DeleteConfirmModal from "./delete-confirm-modal";

/**
 * 카드 컨텐츠 컴포넌트 (무한 스크롤)
 * 책임: 메시지 카드 목록 표시 및 무한 스크롤 처리
 * @param {number} recipientId - 수신자 ID
 * @param {boolean} isEditMode - 편집 모드 여부 (true: 편집 가능, false: 뷰어)
 */
export default function CardContents({ recipientId, isEditMode = false }) {
  const navigate = useNavigate();
  const { messages, hasMore, fetchInitialData, fetchMoreData, refresh } =
    useInfiniteRecipientMessages(recipientId, isEditMode);

  // 삭제 액션 훅
  const { handleDeleteMessage } = useDeleteActions();

  // 모달 상태 관리
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);

  // 초기 데이터 로드
  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  // 카드 클릭 핸들러
  const handleCardClick = (message) => {
    setSelectedMessage(message);
    setIsDetailModalOpen(true);
  };

  const handleCardEditClick = () => {
    navigate(`/post/${recipientId}/message`);
  };

  // 상세 모달 닫기
  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedMessage(null);
  };

  // 삭제 확인 모달 열기
  const handleOpenDeleteModal = (message) => {
    setMessageToDelete(message);
    setIsDeleteModalOpen(true);
  };

  // 삭제 확인 모달 닫기
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setMessageToDelete(null);
  };

  // 메시지 삭제 실행
  const handleConfirmDelete = async () => {
    if (!messageToDelete) return;

    const success = await handleDeleteMessage(messageToDelete.id, () => {
      refresh(); // 목록 갱신
    });

    if (success) {
      handleCloseDeleteModal();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\. /g, ".")
      .replace(/\.$/, ""); // 마지막 점만 제거
  };

  // 관계 라벨 매핑
  const relationshipMap = {
    친구: "friend",
    가족: "family",
    동료: "colleague",
    지인: "acquaintance",
  };

  return (
    <>
      <InfiniteScroll
        dataLength={messages.length}
        next={fetchMoreData}
        hasMore={hasMore}
        endMessage={
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            <b>모든 메시지를 확인했습니다</b>
          </p>
        }
      >
        <CardContainer>
          {/* 뷰어 모드일 때만 카드 추가 버튼 표시 */}
          {!isEditMode && (
            <Card>
              <CardEditButton
                onClick={() => handleCardEditClick(recipientId)}
              />
            </Card>
          )}

          {messages.map((message) => (
            <Card key={message.id} onClick={() => handleCardClick(message)}>
              <CardContentContainer>
                <CardContentStatus>
                  <CardContentStatusContainer>
                    <CardContentStatusProfileImage
                      src={message.profileImageURL}
                      alt={message.sender}
                    />
                    <CardContentStatusProfileContainer>
                      <CardContentStatusProfileName>
                        From. <strong>{message.sender}</strong>
                      </CardContentStatusProfileName>
                      <CardContentStatusRelationship
                        $relationship={relationshipMap[message.relationship]}
                      >
                        {message.relationship}
                      </CardContentStatusRelationship>
                    </CardContentStatusProfileContainer>
                  </CardContentStatusContainer>

                  {/* 편집 모드일 때만 카드 삭제 버튼 표시 */}
                  {isEditMode && (
                    <CardContentDeleteButton
                      onClick={(e) => {
                        e.stopPropagation(); // 카드 클릭 이벤트 방지
                        handleOpenDeleteModal(message);
                      }}
                    />
                  )}
                </CardContentStatus>
                <CardContentText
                  className="ql-editor"
                  dangerouslySetInnerHTML={{ __html: message.content }}
                />
                <CardContentDate>
                  {formatDate(message.createdAt)}
                </CardContentDate>
              </CardContentContainer>
            </Card>
          ))}
        </CardContainer>
      </InfiniteScroll>

      {/* 카드 상세 모달 */}
      <CardDetailModal
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetailModal}
        message={selectedMessage}
      />

      {/* 삭제 확인 모달 */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        title="메시지 삭제"
        message={`${messageToDelete?.sender}님의 메시지를 삭제하시겠습니까?`}
      />
    </>
  );
}
