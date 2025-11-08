import React from 'react';
import {
  RollingHeaderContainer,
  RollingHeaderUserInfo,
  RollingHeaderRightContainer,
  RollingHeaderUserPeopleContainer,
  RollingHeaderUserPeopleImages,
  RollingHeaderUserPeopleImage,
  RollingHeaderUserDefaultImage,
  RollingHeaderUserPeopleState,
  PerpendicularLineFirst,
  RollingPageContainer,
} from "@/styles/rolling-page-styles";
import RollingPageHeader from "@/pages/rolling-page-head";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import AddEmojiIcon from "@/assets/icons/add-emoji.svg";
import ShareIcon from "@/assets/icons/share.svg";


export default function RollingPage() {
  return (
    <>
      <RollingHeaderContainer>
        <RollingHeaderUserInfo>
          To. Ashley Kim
        </RollingHeaderUserInfo>

        <RollingHeaderRightContainer>
          <RollingHeaderUserPeopleContainer>
            {/* //여기에서 함수를 불러와서 처리해야함 */}
            <RollingHeaderUserPeopleImages>
              <RollingHeaderUserPeopleImage></RollingHeaderUserPeopleImage>
              <RollingHeaderUserPeopleImage></RollingHeaderUserPeopleImage>
              <RollingHeaderUserPeopleImage></RollingHeaderUserPeopleImage>
              <RollingHeaderUserDefaultImage></RollingHeaderUserDefaultImage>
            </RollingHeaderUserPeopleImages>

            <RollingHeaderUserPeopleState>
              <strong>23</strong>명이 작성 했어요!
            </RollingHeaderUserPeopleState>

          </RollingHeaderUserPeopleContainer>

          <PerpendicularLineFirst />
          <RollingPageHeader
            ArrowDownIcon={ArrowDownIcon}
            AddEmojiIcon={AddEmojiIcon}
            ShareIcon={ShareIcon}
          />

        </RollingHeaderRightContainer>
      </RollingHeaderContainer >

      <RollingPageContainer>

      </RollingPageContainer>

    </>
  );
}


