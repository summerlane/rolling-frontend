import React from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { font } from '@/styles/font';

const ButtonGroup = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 140px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  border: 1px solid ${colors.gray[300]};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  padding: 10px 0px;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: transparent;
  width: 100%;
  height: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  ${font.regular16}
  color: ${colors.gray[900]};
  
  &:hover {
    background: ${colors.gray[200]};
    border-color: ${colors.gray[400]};
    
  }

  &:active {
    transform: scale(0.98);
  }
`;

const KakaoButton = styled(ShareButton)`
  background: #fee500;
  border-color: #fee500;
  color: #000000;

  &:hover {
    background: #fdd835;
    border-color: #fdd835;
  }
`;

/**
 * 공유 버튼 그룹 컴포넌트
 * 책임: 공유 방법별 버튼 UI 렌더링
 */
export default function ShareButtonGroup({ onKakaoShare, onCopyUrl }) {
  return (
    <ButtonGroup>
      <ShareButton onClick={onKakaoShare}>카카오톡 공유</ShareButton>
      <ShareButton onClick={onCopyUrl}>URL 복사</ShareButton>
    </ButtonGroup>
  );
}

