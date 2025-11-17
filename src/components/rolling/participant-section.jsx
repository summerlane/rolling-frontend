import React from "react";
import {
  RollingHeaderUserPeopleContainer,
  RollingHeaderUserPeopleImages,
} from "@/styles/rolling-page-styles";
import ProfileImageList from "./profile-image-list";
import ProfileOverflowBadge from "./profile-overflow-badge";
import ParticipantStats from "./participant-stats";
import useProfileImages from "@/hooks/use-profile-images";

/**
 * 참여자 섹션 컴포넌트
 * 책임: 프로필 이미지와 참여자 통계를 조합하여 표시
 * @param {Array} profiles - 표시할 프로필 목록
 * @param {number} totalCount - 전체 참여자 수 (messageCount)
 * @param {number} maxVisible - 최대 표시 개수
 */
export default function ParticipantSection({
  profiles,
  totalCount,
  maxVisible = 3,
}) {
  const { overflowCount, hasOverflow } = useProfileImages(
    totalCount,
    profiles,
    maxVisible
  );

  return (
    <RollingHeaderUserPeopleContainer>
      <RollingHeaderUserPeopleImages>
        {/* 보이는 프로필 이미지들 */}
        <ProfileImageList profiles={profiles} />

        {/* 오버플로우 뱃지 (+N) */}
        {hasOverflow && <ProfileOverflowBadge count={overflowCount} />}
      </RollingHeaderUserPeopleImages>

      {/* 참여자 통계 텍스트 - API의 messageCount 사용 */}
      <ParticipantStats count={totalCount} />
    </RollingHeaderUserPeopleContainer>
  );
}
