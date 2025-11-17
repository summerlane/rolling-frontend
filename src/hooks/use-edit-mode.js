import { useLocation } from "react-router";

/**
 * 편집 모드 확인 커스텀 훅
 * 책임: URL 경로를 확인하여 편집 모드 여부 판단
 */
export default function useEditMode() {
  const location = useLocation();

  // URL이 /edit으로 끝나면 편집 모드
  const isEditMode = location.pathname.endsWith("/edit");

  return isEditMode;
}
