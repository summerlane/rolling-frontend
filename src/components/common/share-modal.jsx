import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { font } from '@/styles/font';
import media from '@/styles/media';
import useToast from '@/hooks/use-toast';

const KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY;
console.log(KAKAO_KEY);
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ShareButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 16px;
  background: ${colors.gray[100]};
  border: 1px solid ${colors.gray[300]};
  border-radius: 8px;
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

export default function ShareModal({ isOpen, onClose, shareUrl }) {
    const { showToast } = useToast();

    // 카카오 SDK 초기화
    useEffect(() => {
        if (!window.Kakao) {
            const script = document.createElement('script');
            script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.7/kakao.min.js';
            script.integrity = 'sha384-tJkjbtDbvoxO+diRuDtwRO9JXR7pjWnfjfRn5ePUpl7e7RJCxKCwwnfqUAdXh53p';
            script.crossOrigin = 'anonymous';
            script.async = true;

            script.onload = () => {
                if (window.Kakao && !window.Kakao.isInitialized()) {
                    window.Kakao.init(KAKAO_KEY);
                }
            };

            document.head.appendChild(script);
        } else if (!window.Kakao.isInitialized()) {
            window.Kakao.init(KAKAO_KEY);
        }
    }, []);

    // URL 복사 기능
    const handleCopyUrl = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            showToast('URL이 복사되었습니다.', 'success');
            onClose();
        } catch (err) {
            console.error('URL 복사 실패:', err);
            showToast('URL 복사에 실패했습니다.', 'delete');
        }
    };

    // 카카오톡 공유 기능
    const handleKakaoShare = () => {
        if (window.Kakao) {
            try {
                window.Kakao.Share.sendScrap({
                    requestUrl: shareUrl,
                });
            } catch (err) {
                console.error('카카오톡 공유 실패:', err);
                showToast(true, '카카오톡 공유에 실패했습니다.');
            }
        } else {
            showToast(true, '카카오톡 SDK가 로드되지 않았습니다.');
        }
    };

    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <ModalTitle>공유하기</ModalTitle>
                <ShareButtonGroup>
                    <KakaoButton onClick={handleKakaoShare}>
                        <span>🗨️</span>
                        <span>카카오톡으로 공유하기</span>
                    </KakaoButton>
                    <ShareButton onClick={handleCopyUrl}>
                        <span>🔗</span>
                        <span>URL 복사하기</span>
                    </ShareButton>
                </ShareButtonGroup>
                <CloseButton onClick={onClose}>닫기</CloseButton>
            </ModalContainer>
        </Overlay>
    );
}

