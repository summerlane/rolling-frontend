import { useMemo } from "react";

/**
 * 프로필 이미지 데이터 처리 커스텀 훅
 * 책임: 프로필 이미지 데이터 가공 및 오버플로우 계산
 */
export default function useProfileImages(totalCount, profiles, maxVisible = 3) {
  const processedData = useMemo(() => {
    if (!profiles || profiles.length === 0) {
      return {
        visibleProfiles: [],
        overflowCount: 0,
        totalCount: 0,
        hasOverflow: false,
      };
    }

    const hasOverflow = totalCount > maxVisible;

    // 오버플로우가 있으면 마지막 자리는 +N 표시용으로 비움
    const visibleCount = 3;
    const visibleProfiles = profiles.slice(0, visibleCount);
    const overflowCount = hasOverflow ? totalCount - visibleCount : 0;

    return {
      visibleProfiles,
      overflowCount,
      totalCount,
      hasOverflow,
    };
  }, [totalCount, profiles, maxVisible]);

  return processedData;
}
