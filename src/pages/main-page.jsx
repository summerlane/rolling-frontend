import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import media from "@/styles/media";
import Button from "@/components/common/button";
import { Link } from "react-router";
import mainVisual01 from "@/assets/images/main-visual-01.webp";
import mainVisual02 from "@/assets/images/main-visual-02.webp";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  ${media.small`
    gap: 24px;
  `}
`;

const MainFlexBox = styled.div`
  width: 1200px;
  height: 324px;
  padding: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${colors.surface};
  background-image: url(${mainVisual01});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: right 7px top 60px;
  border-radius: 16px;
  margin-top: 60px;

  ${media.small`
    ${font.regular14}
    width: calc(100% - 40px);
    height: 352px;
    padding: 24px;
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: column;
    gap: 12px;
    background-position: center bottom 36px;
    background-size: 120%;
  `}

  ${media.medium`
    ${font.regular16};
    width: calc(100% - 48px);
    height: 440px;
    padding: 40px;
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: column;
    background-position: center bottom 36px;
    background-size: 100%;
  `}

  ${media.large`
    ${font.regular18}
  `}
`;

const MainFlexBoxRightPosition = styled.div`
  width: 1200px;
  height: 324px;
  padding: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${colors.surface};
  background-image: url(${mainVisual02});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: left -7px top 60px;
  border-radius: 16px;
  padding-left: 660px;

  ${media.small`
    ${font.regular14}
    width: calc(100% - 40px);
    height: 352px;
    padding: 24px;
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: column;
    gap: 12px;
    background-position: center bottom 25px;
    background-size: 120%;
  `}

  ${media.medium`
    ${font.regular16};
    width: calc(100% - 48px);
    height: 440px;
    padding: 40px;
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: column;
    background-position: center bottom 25px;
    background-size: 100%;
  `}
`;

const PointLabel = styled.div`
  width: 80px;
  height: 32px;
  background-color: ${colors.purple[600]};
  color: #ffffff;
  border-radius: 50px;
  text-align: center;
  line-height: 32px;
  ${font.bold14};
`;

const MainTitle = styled.p`
  ${font.bold24};
  width: 265px;
  color: ${colors.gray[900]};
  line-height: 36px;
  margin: 0;

  ${media.small`
    ${font.bold18};
    width: 100%;
  `}

  ${media.medium`
    width: 100%;
  `}
`;

const MainTitleSmall = styled.p`
  ${font.regular18};
  color: ${colors.gray[500]};
  margin: 0;

  ${media.small`
    ${font.regular15};
  `}

  ${media.medium`
    ${font.regular18};
    width: 100%;
  `}
`;

const CustomButton = styled(Button)`
  width: 286px;
  height: 56px;
  margin: 20px 0;

  ${media.small`
    width: calc(100% - 40px);
   `}

  ${media.medium`
     width: calc(100% - 48px);
   `}
`;

const CustomLink = styled(Link)`
  ${media.small`
    width: 100%;
    display: flex;
     justify-content: center;
   `}

  ${media.medium`
     width: 100%;
     display: flex;
     justify-content: center;
   `}
`;

export default function MainPage() {
  return (
    <Container>
      <MainFlexBox>
        <PointLabel>Point. 01</PointLabel>
        <MainTitle>
          누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
        </MainTitle>
        <MainTitleSmall>로그인 없이 자유롭게 만들어요.</MainTitleSmall>
      </MainFlexBox>
      <MainFlexBoxRightPosition>
        <PointLabel>Point. 02</PointLabel>
        <MainTitle>서로에게 이모지로 감정을 표현해보세요</MainTitle>
        <MainTitleSmall>
          롤링 페이퍼에 이모지를 추가할 수 있어요.
        </MainTitleSmall>
      </MainFlexBoxRightPosition>
      <CustomLink to="/list">
        <CustomButton variant="primary" size="large">
          구경해보기
        </CustomButton>
      </CustomLink>
    </Container>
  );
}
