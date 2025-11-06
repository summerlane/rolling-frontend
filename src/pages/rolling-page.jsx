import {
  RollingHeaderContainer,
  RollingHeaderUserInfo,
  RollingHeaderRightContainer,
  RollingHeaderUserPeopleContainer,
  RollingHeaderUserPeopleImages,
  RollingHeaderUserPeopleImage,
  RollingHeaderUserDefaultImage,
  RollingHeaderUserPeopleState,
  RollingHeaderImojiContainer,
  RollingHeaderArrowDown,
  PerpendicularLine,
  RollingHeaderImojiIconContainer,
  RollingHeaderImojiText,
  RollingHeaderImojiIcon,
  RollingHeaderImojiEditButton,
  RollingHeaderImojiEditButtonIcon,
  RollingHeaderImojiEditButtonText,
  RollingHeaderLinkShareButton,
  RollingPageContainer,
} from "@/styles/rolling-page-styles";
import HeadNav from "@/components/head-nav";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import AddEmojiIcon from "@/assets/icons/add-emoji.svg";
import ShareIcon from "@/assets/icons/share.svg";

export default function RollingPage() {
  return (
    <>
      <HeadNav />
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

          <PerpendicularLine />
          <RollingHeaderImojiContainer>
            {/* //여기에서 함수를 불러와서 처리해야함 */}
            <RollingHeaderImojiIconContainer>
              <RollingHeaderImojiIcon>😘</RollingHeaderImojiIcon>
              <RollingHeaderImojiText>12</RollingHeaderImojiText>
            </RollingHeaderImojiIconContainer>
            <RollingHeaderImojiIconContainer>
              <RollingHeaderImojiIcon>😘</RollingHeaderImojiIcon>
              <RollingHeaderImojiText>12</RollingHeaderImojiText>
            </RollingHeaderImojiIconContainer>
            <RollingHeaderImojiIconContainer>
              <RollingHeaderImojiIcon>😘</RollingHeaderImojiIcon>
              <RollingHeaderImojiText>12</RollingHeaderImojiText>
            </RollingHeaderImojiIconContainer>
            <RollingHeaderArrowDown src={ArrowDownIcon} />
            <RollingHeaderImojiEditButton >
              <RollingHeaderImojiEditButtonIcon src={AddEmojiIcon} />
              <RollingHeaderImojiEditButtonText>추가</RollingHeaderImojiEditButtonText>
            </RollingHeaderImojiEditButton>
          </RollingHeaderImojiContainer>
          <PerpendicularLine />
          <RollingHeaderLinkShareButton src={ShareIcon} />

        </RollingHeaderRightContainer>
      </RollingHeaderContainer >

      <RollingPageContainer>

      </RollingPageContainer>

    </>
  );
}


