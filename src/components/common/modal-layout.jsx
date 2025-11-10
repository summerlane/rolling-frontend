import React from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { font } from '@/styles/font';
import media from '@/styles/media';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  width: 480px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  ${media.medium`
    width: 400px;
    padding: 30px;
  `}

  ${media.small`
    width: 320px;
    padding: 24px;
  `}
`;

const ModalTitle = styled.h2`
  ${font.bold24}
  color: ${colors.gray[900]};
  margin-bottom: 24px;
  text-align: center;
`;

const ModalContent = styled.div`
  width: 100%;
`;

const CloseButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 6px;
  background: transparent;
  border: 1px solid ${colors.gray[300]};
  border-radius: 8px;
  cursor: pointer;
  ${font.regular16}
  color: ${colors.gray[700]};
  transition: all 0.2s;

  &:hover {
    background: ${colors.gray[50]};
  }
`;

/**
 * 공통 모달 레이아웃 컴포넌트
 * 책임: 모달의 기본 구조와 레이아웃 제공
 */
export default function ModalLayout({ isOpen, onClose, title, children, showCloseButton = true }) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {title && <ModalTitle>{title}</ModalTitle>}
        <ModalContent>{children}</ModalContent>
        {showCloseButton && (
          <CloseButton onClick={onClose}>닫기</CloseButton>
        )}
      </ModalContainer>
    </Overlay>
  );
}

