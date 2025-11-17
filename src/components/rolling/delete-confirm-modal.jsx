import React from "react";
import styled from "styled-components";
import ModalLayout from "@/components/common/modal-layout";
import Button from "@/components/common/button";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";

const ModalContent = styled.div`
  text-align: center;
`;

const ModalMessage = styled.p`
  ${font.regular18}
  color: ${colors.gray[700]};
  margin-bottom: 32px;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

/**
 * 삭제 확인 모달 컴포넌트
 * 책임: 삭제 전 사용자 확인 받기
 */
export default function DeleteConfirmModal({ isOpen, onClose, onConfirm, title, message }) {
    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <ModalLayout isOpen={isOpen} onClose={onClose} title={title} showCloseButton={false}>
            <ModalContent>
                <ModalMessage>{message}</ModalMessage>
                <ButtonGroup>
                    <Button variant="secondary" size="medium" onClick={onClose}>
                        취소
                    </Button>
                    <Button variant="primary" size="medium" onClick={handleConfirm}>
                        삭제
                    </Button>
                </ButtonGroup>
            </ModalContent>
        </ModalLayout>
    );
}

