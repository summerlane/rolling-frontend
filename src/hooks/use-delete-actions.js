import { useCallback } from "react";
import { useNavigate } from "react-router";
import { deleteRecipient } from "@/api/rolling-page-api";
import { deleteMessage } from "@/api/rolling-page-api";
import { useToast } from "@/hooks/use-toast";

/**
 * 삭제 액션 관리 커스텀 훅
 * 책임: 수신자 및 메시지 삭제 로직 처리
 */
export function useDeleteActions() {
    const navigate = useNavigate();
    const showToast = useToast();

    /**
     * 롤링 페이퍼 전체 삭제
     */
    const handleDeleteRecipient = useCallback(
        async (recipientId) => {
            try {
                await deleteRecipient(recipientId);
                showToast.delete("롤링 페이퍼가 삭제되었습니다.");

                // 삭제 후 메인 페이지로 이동
                setTimeout(() => {
                    navigate("/");
                }, 1000);

                return true;
            } catch (err) {
                console.error("롤링 페이퍼 삭제 실패:", err);
                return false;
            }
        },
        [navigate, showToast],
    );

    /**
     * 개별 메시지 삭제
     */
    const handleDeleteMessage = useCallback(
        async (messageId, onSuccess) => {
            try {
                await deleteMessage(messageId);
                showToast.delete("메시지가 삭제되었습니다.");

                // 삭제 성공 시 콜백 실행 (목록 갱신 등)
                if (onSuccess) {
                    onSuccess();
                }

                return true;
            } catch (err) {
                console.error("메시지 삭제 실패:", err);
                return false;
            }
        },
        [showToast],
    );

    return {
        handleDeleteRecipient,
        handleDeleteMessage,
    };
}

export default useDeleteActions;

