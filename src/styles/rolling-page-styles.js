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



export const RollingPageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.blue[100]};
width: 100%;
margin: 0 auto;
padding: 20px;

`;



export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: 20px;
  ${media.medium`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  `}
  ${media.small`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
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
  padding: 16px 24px;
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

// const relationshipLabels = {
//   friend: '친구',
//   family: '가족',
//   colleague: '동료',
//   acquaintance: '지인',
// };

export const CardContentStatusRelationship = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  height: 20px;
  border-radius: 4px;
  ${font.regular14}
  color: ${props => relationshipTextColors[props.$relationship] || colors.gray[500]};
  
  background-color: ${props => relationshipColors[props.$relationship] || colors.gray[500]};
`;

export const CardContentText = styled.div`
  width: 100%;
  height: 100%;
  ${font.regular16}
  color: ${colors.gray[600]};
  padding-top: 16px;
  cursor: pointer;
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