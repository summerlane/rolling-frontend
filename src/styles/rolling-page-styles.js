import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import ShareIcon from "@/assets/icons/share.svg";
//최상단헤더 컨테이너
export const RollingHeaderContainer = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 13px 20px;
  height: 65px;
  background-color: background: rgba(255, 255, 255, 1);

`;

//유저 정보 컨테이너 TO. Ashley Kim
export const RollingHeaderUserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 227px;
  height: 42px;
  line-height: 42px;
  letter-spacing: -1%;
  ${font.bold28}
  color: ${colors.gray[800]};
`;


export const RollingHeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;



//유저 이미지 컨테이너 프로필 사진들과, 몇명이 작성중인지 표시
export const RollingHeaderUserPeopleContainer = styled.div`
  width: 228px;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

//유저 이미지 프로필 사진들
export const RollingHeaderUserPeopleImages = styled.div`
  width: 76px;
  height: 28px;
  position: relative;
  cursor: pointer;

`;

export const RollingHeaderUserPeopleImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 140px;
  border: 1.4px solid #000;
  position: relative;
  margin-left: -10px;
`;

export const RollingHeaderUserDefaultImage = styled(RollingHeaderUserPeopleImage)``;

//몇명이 작성중인지
export const RollingHeaderUserPeopleState = styled.div`
  width: 160px;
  height: 27px;
  line-height: 27px;
  ${font.bold18}
  color: ${colors.gray[900]};
  text-align: center;
`;

//이모지 컨테이너 드롭박스 포함, 추가 버튼 포함
export const RollingHeaderImojiContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RollingHeaderImojiIconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 36px;
  padding: 8px 12px;
  text-align: center;
  border-radius: 32px;
  background: rgba(153, 153, 153, 1);

`;

export const RollingHeaderImojiIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 1);
`;

export const RollingHeaderImojiText = styled.span`
  ${font.regular16}
  color: rgba(255, 255, 255, 1)
`;

export const RollingHeaderImojiEditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 88px;
  height: 36px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid ${colors.gray[300]};
  cursor: pointer;
`;

export const RollingHeaderImojiEditButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const RollingHeaderImojiEditButtonText = styled.span`
  ${font.regular16}
  color: ${colors.gray[900]};
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

`;

export const RollingHeaderArrowDown = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PerpendicularLine = styled.div`
  border-left : 1px solid ${colors.gray[200]};
  height: 28px;
`;



export const RollingPageContainer = styled.div`
  background-color: ${colors.blue[100]};
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
`;