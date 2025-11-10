import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import ShareIcon from "@/assets/icons/share.svg";
import media from "@/styles/media";


//최상단헤더 컨테이너
export const RollingHeaderContainer = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 13px 20px;
  height: 68px;
  background-color: rgba(255, 255, 255, 1);
  gap: 20px;
  
  ${media.large`
    width: 1200px;
    height: 68px;
    margin: 0 auto;
    padding: 13px 20px;

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

export const RollingHeaderUserDefaultImage = styled(RollingHeaderUserPeopleImage)``;

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
export const RollingHeaderImojiContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

`;

export const RollingHeaderImojiIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 8px 12px;
  text-align: center;
  border-radius: 32px;
  background: rgba(153, 153, 153, 1);
  gap: 2px;

  ${media.small`
    padding: 4px 8px;
  `}

`;

export const RollingHeaderImojiIcon = styled.div`
  
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 1);

  ${media.small`
    width: 20px;
    height: 24px;
  `}

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
  ${media.small`
    width: 36px;
    height: 32px;
  `}
`;

export const RollingHeaderImojiEditButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const RollingHeaderImojiEditButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const RollingHeaderImojiEditButtonText = styled.span`
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




export const RollingPageContainer = styled.div`
background-color: ${colors.blue[100]};
width: 100%;
margin: 0 auto;
padding: 20px;
height: 100vh;
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