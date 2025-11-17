import React from "react";

import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import ShareIcon from "@/assets/icons/share.svg";
import media from "@/styles/media";
import EditIcon from "@/assets/icons/plus.svg";
import DeleteIcon from "@/assets/icons/deleted.svg";

//최상단헤더 컨테이너
export const RollingHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  height: 68px;
  background-color: rgba(255, 255, 255, 1);
  gap: 20px;

  ${media.large`
    width: 1200px;
    height: 68px;
    margin: 0 auto;
    padding: 13px 0px;

    gap: 20px;
  `}

  ${media.medium`
    width: 100%;
    height: 68px;
    margin: 0;
    padding: 13px 20px;

    gap: 10px;
  `}

  ${media.small`
    flex-direction: column;
    align-items: center;
    
    height: auto;
    width: 100%;
    padding: 0px;
    gap: 0px;
   
  `}
`;

//유저 정보 컨테이너 TO. Ashley Kim
export const RollingHeaderUserInfo = styled.div`
  display: flex;
  align-items: center;
  min-width: 227px;
  height: 42px;
  line-height: 42px;
  letter-spacing: -1%;
  ${font.bold28}
  color: ${colors.gray[800]};
  flex-shrink: 0;

  ${media.medium`
    min-width: 150px;
    height: 42px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}

  ${media.small`
    width: 100%;
    min-width: auto;
    height: auto;
    padding: 12px 20px;
    border-bottom: 1px solid ${colors.gray[200]};
  `}
`;

export const RollingHeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 1;
  min-width: 0;

  ${media.medium`
    gap: 8px;
    flex-shrink: 1;
    min-width: 0;
  
  `}

  ${media.small`  
    width: 100%;
    padding: 8px 20px;
    

  `}
`;

//유저 이미지 컨테이너 프로필 사진들과, 몇명이 작성중인지 표시
export const RollingHeaderUserPeopleContainer = styled.div`
  width: 228px;
  display: flex;
  align-items: center;

  ${media.medium`
    display: none;
  `}

  ${media.small`
    display: none;
  `}
`;

//유저 이미지 프로필 사진들
export const RollingHeaderUserPeopleImages = styled.div`
  display: flex;
  width: 76px;
  height: 28px;
  position: relative;

  cursor: pointer;
  ${media.medium`
    
    display: none;
  `}

  ${media.small`
   
    display: none;
  `}
`;

export const RollingHeaderUserPeopleImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 140px;
  border: 1.4px solid #fff;
  position: relative;
  margin-left: -10px;
`;

export const RollingHeaderUserDefaultImage = styled(
  RollingHeaderUserPeopleImage
)``;

//몇명이 작성중인지
export const RollingHeaderUserPeopleState = styled.div`
  width: 160px;
  height: 27px;
  line-height: 27px;
  ${font.bold18}
  color: ${colors.gray[900]};
  text-align: center;
  ${media.medium`
    
    display: none;
  `}

  ${media.small`
    display: none;
  `}
`;

//이모지 컨테이너 드롭박스 포함, 추가 버튼 포함
export const RollingHeaderEmojiContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${media.small`
    gap: 4px;
  `}
`;

export const RollingHeaderEmojiIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 8px 12px;
  text-align: center;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  gap: 2px;

  ${media.small`
    padding: 6px 10px;
  `}
`;

export const RollingHeaderEmojiIcon = styled.div`
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 1);

  ${media.small`
    width: 20px;
    height: 24px;
    
  `}
`;

export const RollingHeaderEmojiText = styled.span`
  ${font.regular16}
  color: rgba(255, 255, 255, 1);

  ${media.small`
    ${font.regular14}
  `}
`;

export const RollingHeaderEmojiEditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 88px;
  height: 36px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid ${colors.gray[300]};
  cursor: pointer;
  ${media.small`
    width: 36px;
    height: 32px;
  `}
  &:hover {
    background-color: ${colors.gray[100]};
  }
`;

export const RollingHeaderEmojiEditButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const RollingHeaderEmojiEditButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const RollingHeaderEmojiEditButtonText = styled.span`
  ${font.regular16}
  color: ${colors.gray[900]};
  ${media.small`
    display: none;
  `}
`;

export const RollingHeaderLinkShareButton = styled.div`
  width: 56px;
  height: 36px;
  border-radius: 6px;
  background-image: url("${ShareIcon}");
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;
  padding: 12px 32px;
  cursor: pointer;
  border: 1px solid ${colors.gray[300]};
  &:hover {
    background-color: ${colors.gray[100]};
  }
  ${media.small`
    width: 36px;
    height: 32px;
      background-size: 20px 20px;
      padding: 8px 8px;

  `}
`;

export const RollingHeaderArrowDown = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PerpendicularLine = styled.div`
  border-left: 1px solid ${colors.gray[200]};
  height: 28px;
`;

export const PerpendicularLineFirst = styled(PerpendicularLine)`
  ${media.medium`
    display: none;
  `}

  ${media.small`
    display: none;
  `}
`;

export const PerpendicularLineSecond = styled(PerpendicularLine)``;

const RollingPageWrapper = ({
  $backgroundcolor,
  $backgroundimage,
  ...rest
}) => {
  return React.createElement("div", {
    $backgroundcolor,
    $backgroundimage,
    ...rest,
  });
};
export const RollingPageContainer = styled(RollingPageWrapper)`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.$backgroundcolor || colors.blue[100]};
  background-image: ${(props) =>
    props.$backgroundimage ? `url(${props.$backgroundimage})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 63px 216px 113px 216px;
  gap: 11px;

  ${media.medium`
    padding: 5% 2%;
  `}

  ${media.small`
    padding: 63px 20px 113px 20px;
  `}
`;

export const CardContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;

  & > :first-child {
    align-self: flex-end;
  }

  ${media.medium`
    gap: 7px;
    width: 100%;
  `}

  ${media.small`
    gap: 4px;
  `}
`;

export const CardContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: 20px;
  ${media.medium`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 16px;
  `}
  ${media.small`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 16px;

  `}
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 384px;
  height: 280px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;

  ${media.medium`
    width: 100%;
    height: auto;
  `}

  ${media.small`
    width: 100%;
    `}
`;

export const CardEditButton = styled.button`
  width: 56px;
  height: 56px;
  background-image: url("${EditIcon}");
  background-color: ${colors.gray[500]};
  border-radius: 100px;
  border: none;
  padding: 20px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray[400]};
    color: ${colors.gray[100]};
  }
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 15px;
  padding: 28px 24px;
`;

export const CardContentStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  gap: 14px;
  border-bottom: 1px solid ${colors.gray[200]};
  padding-bottom: 16px;
`;

export const CardContentStatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const CardContentStatusProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const CardContentFrom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CardContentStatusProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid ${colors.gray[300]};
`;

export const CardContentStatusProfileName = styled.div`
  ${font.regular16}
  color: ${colors.gray[900]};
`;

const relationshipColors = {
  friend: colors.blue[100],
  family: colors.green[100],
  colleague: colors.purple[100],
  acquaintance: colors.beige[100],
};

const relationshipTextColors = {
  friend: colors.blue[500],
  family: colors.green[500],
  colleague: colors.purple[600],
  acquaintance: colors.beige[500],
};

export const CardContentStatusRelationship = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  height: 20px;
  border-radius: 4px;
  ${font.regular14}
  color: ${(props) =>
    relationshipTextColors[props.$relationship] || colors.gray[500]};

  background-color: ${(props) =>
    relationshipColors[props.$relationship] || colors.gray[500]};
`;

export const CardContentText = styled.div`
  width: 100%;
  height: 40%;
  ${font.regular18}
  color: ${colors.gray[600]};
  cursor: pointer;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CardContentDate = styled.div`
  ${font.regular12}
  color: ${colors.gray[400]};
`;

export const CardContentDeleteButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("${DeleteIcon}");
  border-radius: 6px;
  border: 1px solid ${colors.gray[300]};
  padding: 20px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray[200]};
    color: ${colors.gray[100]};
  }
`;

export const CardPageDeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 39px;
  border-radius: 6px;
  border: 1px solid ${colors.gray[300]};
  background-color: ${colors.purple[600]};
  cursor: pointer;
  color: #fff;
  padding: 7px 16px;
  ${font.regular16}
  text-align: center;

  ${media.medium`
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    height: 56px;
    padding: 12px 16px;
    z-index: 1003;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.2);
  `}

  ${media.small`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    height: 56px;
    padding: 12px 16px;
    z-index: 1003;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.2);
  `}
`;
