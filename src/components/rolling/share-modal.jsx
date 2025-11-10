import React from 'react';
import styled from 'styled-components';

import ShareButtonGroup from './share-button-group';
import useKakaoSdk from '@/hooks/use-kakao-sdk';
import useShareActions from '@/hooks/use-share-actions';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 999;
`;

/**
 * 공유 모달 컴포넌트
 * 책임: 공유 모달 UI 및 공유 액션 연결
 */
export default function ShareModal({ isOpen, onClose, shareUrl }) {
  // 카카오 SDK 초기화
  useKakaoSdk();

  // 공유 기능 훅
  const { copyToClipboard, shareToKakao } = useShareActions();

  // URL 복사 핸들러
  const handleCopyUrl = async () => {
    const success = await copyToClipboard(shareUrl);
    if (success) {
      onClose();
    }
  };

  // 카카오톡 공유 핸들러
  const handleKakaoShare = () => {
    shareToKakao(shareUrl);
  };

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ShareButtonGroup
        onClick={(e) => e.stopPropagation()}
        onKakaoShare={handleKakaoShare}
        onCopyUrl={handleCopyUrl}
      />
    </>
  );
}

