import styled, { keyframes } from "styled-components";
import completedIcon from "@/assets/icons/completed.svg";
import deletedRedIcon from "@/assets/icons/deleted-red.svg";
import closeIcon from "@/assets/icons/close.svg";
import { font } from "@/styles/font";
import media from "@/styles/media";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const ToastStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 19px 30px;
  border-radius: 8px;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s
    ease-in-out forwards;
  ${font.regular16}

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: auto;
  }

  ${media.large`
      width: 524px;
      left: calc(50% - 262px);
      bottom: 70px;
    `}

  ${media.medium`
      width: 524px;
      left: calc(50% - 262px);
      bottom: 50px;
    `}

  ${media.small`
      width: 320px;
      left: calc(50% - 160px);
      bottom: 88px;
    `}
`;

export default function Toast({ children, type, isClosing, onClose }) {
  return (
    <ToastStyle isClosing={isClosing}>
      <img
        src={type === "delete" ? deletedRedIcon : completedIcon}
        alt={type === "delete" ? "삭제" : "성공"}
      />
      {children}
      <button onClick={onClose}>
        <img src={closeIcon} alt="닫기" />
      </button>
    </ToastStyle>
  );
}
