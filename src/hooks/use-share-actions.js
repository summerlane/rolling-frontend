import { useCallback } from 'react';
import useToast from '@/hooks/use-toast';

/**
 * 공유 기능 커스텀 훅
 * 책임: URL 복사 및 카카오톡 공유 비즈니스 로직 처리
 */
export default function useShareActions() {
    const { showToast } = useToast();

    /**
     * URL을 클립보드에 복사
     */
    const copyToClipboard = useCallback(async (url) => {
        try {
            await navigator.clipboard.writeText(url);
            showToast('URL이 복사되었습니다.', 'success');
            return true;
        } catch (err) {
            console.error('URL 복사 실패:', err);
            showToast('URL 복사에 실패했습니다.', 'delete');
            return false;
        }
    }, [showToast]);

    /**
     * 카카오톡으로 공유
     */
    const shareToKakao = useCallback((url) => {
        if (!window.Kakao) {
            showToast('카카오톡 SDK가 로드되지 않았습니다.', 'delete');
            return false;
        }

        try {
            window.Kakao.Share.sendScrap({
                requestUrl: url,
            });
            return true;
        } catch (err) {
            console.error('카카오톡 공유 실패:', err);
            showToast('카카오톡 공유에 실패했습니다.', 'delete');
            return false;
        }
    }, [showToast]);

    return {
        copyToClipboard,
        shareToKakao,
    };
}

