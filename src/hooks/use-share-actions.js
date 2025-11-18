import { useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

/**
 * 공유 기능 커스텀 훅
 * 책임: URL 복사 및 카카오톡 공유 비즈니스 로직 처리
 */
export default function useShareActions() {
  const showToast = useToast();

  /**
   * URL을 클립보드에 복사
   */
  const copyToClipboard = useCallback(
    async (url) => {
      try {
        await navigator.clipboard.writeText(url);
        showToast.success("URL이 복사되었습니다.");
        return true;
      } catch (err) {
        console.error("URL 복사 실패:", err);
        return false;
      }
    },
    [showToast]
  );

  /**
   * 카카오톡으로 공유
   */
  const shareToKakao = useCallback(
    (url, recipientName = "롤링 페이퍼") => {
      if (!window.Kakao) {
        return false;
      }

      try {
        window.Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: `${recipientName}`,
            description: '소중한 사람들의 마음을 모아보세요!',
            imageUrl: 'https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png', // 기본 이미지
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
          buttons: [
            {
              title: '롤링 페이퍼 보기',
              link: {
                mobileWebUrl: url,
                webUrl: url,
              },
            },
          ],
        });
        showToast.success("카카오톡으로 공유되었습니다.");

        return true;
      } catch (err) {
        console.error("카카오톡 공유 실패:", err);
        return false;
      }
    },
    [showToast]
  );

  return {
    copyToClipboard,
    shareToKakao,
  };
}
