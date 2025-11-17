import React from "react";
import styled from "styled-components";
import ModalLayout from "@/components/common/modal-layout";
import Button from "@/components/common/button";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";

const ProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.gray[200]};
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
`;
const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid ${colors.gray[300]};
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ProfileName = styled.div`
  ${font.regular16}
  color: ${colors.gray[900]};
`;

const RelationshipBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  height: 20px;
  border-radius: 4px;
  ${font.regular14}
  width: fit-content;
`;

const MessageContent = styled.div`
  ${font.regular18}
  color:${colors.gray[600]};
  line-height: 24px;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-y: auto;
  margin-bottom: 24px;
  padding-top: 16px;
`;

const MessageDate = styled.div`
  ${font.regular14}
  color: ${colors.gray[400]};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// 관계별 배경색 및 텍스트 색상
const relationshipColors = {
  친구: { bg: colors.blue[100], text: colors.blue[500] },
  가족: { bg: colors.green[100], text: colors.green[500] },
  동료: { bg: colors.purple[100], text: colors.purple[600] },
  지인: { bg: colors.beige[100], text: colors.beige[500] },
};

/**
 * 카드 상세 모달 컴포넌트
 * 책임: 메시지 전체 내용을 모달로 표시
 */
export default function CardDetailModal({ isOpen, onClose, message }) {
  if (!message) return null;

  const relationshipStyle = relationshipColors[message.relationship] || {
    bg: colors.gray[100],
    text: colors.gray[500],
  };

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} showCloseButton={false}>
      <ProfileSection>
        <ProfileContainer>
          <ProfileImage src={message.profileImageURL} alt={message.sender} />
          <ProfileInfo>
            <ProfileName>
              From. <strong>{message.sender}</strong>
            </ProfileName>
            <RelationshipBadge
              style={{
                backgroundColor: relationshipStyle.bg,
                color: relationshipStyle.text,
              }}
            >
              {message.relationship}
            </RelationshipBadge>
          </ProfileInfo>
        </ProfileContainer>
        <MessageDate>{formatDate(message.createdAt)}</MessageDate>

      </ProfileSection>

      <MessageContent>{message.content}</MessageContent>


      <ButtonWrapper>
        <Button variant="primary" size="medium" onClick={onClose} style={{ width: "120px", height: "40px" }}>
          확인
        </Button>
      </ButtonWrapper>
    </ModalLayout>
  );
}

