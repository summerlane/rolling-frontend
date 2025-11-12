import React, { useState } from 'react';
import {
  RollingHeaderContainer,
  RollingHeaderUserInfo,
  RollingHeaderRightContainer,
  PerpendicularLineFirst,
  RollingPageContainer,


} from "@/styles/rolling-page-styles";
import RollingPageHeader from "@/pages/rolling-page-head";
import ParticipantSection from "@/components/rolling/participant-section";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import AddEmojiIcon from "@/assets/icons/add-emoji.svg";
import ShareIcon from "@/assets/icons/share.svg";
import CardContents from "@/components/rolling/card-contents";

export default function RollingPage() {
  // TODO: 실제로는 API에서 받아올 데이터
  // 임시 데이터 (나중에 API 호출로 대체)
  const [profiles] = useState([
    { id: 1, name: '김철수', profileImageURL: 'https://via.placeholder.com/28' },
    { id: 2, name: '이영희', profileImageURL: 'https://via.placeholder.com/28' },
    { id: 3, name: '박민수', profileImageURL: 'https://via.placeholder.com/28' },

  ]);


  return (
    <>
      <RollingHeaderContainer>
        <RollingHeaderUserInfo>
          To. Ashley Kim
        </RollingHeaderUserInfo>

        <RollingHeaderRightContainer>
          {/* 참여자 프로필 섹션 */}
          <ParticipantSection profiles={profiles} maxVisible={4} />

          <PerpendicularLineFirst />

          {/* 이모지 및 공유 헤더 */}
          <RollingPageHeader
            ArrowDownIcon={ArrowDownIcon}
            AddEmojiIcon={AddEmojiIcon}
            ShareIcon={ShareIcon}
          />
        </RollingHeaderRightContainer>
      </RollingHeaderContainer>

      <RollingPageContainer>
        <CardContents />
      </RollingPageContainer>
    </>
  );
}


