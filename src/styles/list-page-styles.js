import styled from "styled-components";
import Button from "@/components/common/button";
import { Link } from "react-router";
import { RollingHeaderEmojiContainer } from "@/styles/rolling-page-styles";
import { font } from "@/styles/font";
import { colors } from "@/styles/colors";
import media from "@/styles/media";
import bgPatternBeige from "@/assets/images/bg-pattern-beige.svg";
import bgPatternPurple from "@/assets/images/bg-pattern-purple.svg";
import bgPatternBlue from "@/assets/images/bg-pattern-blue.svg";
import bgPatternGreen from "@/assets/images/bg-pattern-green.svg";

// list-page
export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  margin-top: 40px;

  ${media.medium`
    padding: 24px;
  `}

  ${media.small`
    padding: 24px 20px;
  `}
`;

export const ButtonLink = styled(Link)`
  display: block;
`;

export const CustomButton = styled(Button)`
  padding: 14px 60px;

  ${media.medium`
    width: 100%;
  `}

  ${media.small`
    width: 100%;
  `}
`;

// card-list 비었을 때
export const EmptySection = styled.div`
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  ${font.regular20};
  margin-top: 12px;
  padding: 80px;
  ${media.small`
    padding: 80px 30px;
    ${font.regular14}
  `}
`;

// card-list
export const Title = styled.h3`
  ${font.bold24};

  ${media.medium`
    padding-left: 20px;
  `}

  ${media.small`
    padding-left: 20px;
  `}
`;

export const ReceiverName = styled.h3`
  ${font.bold24};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${(props) => {
    return props.$bgImg ? "white" : "black";
  }};

  ${media.small`
    ${font.bold18};
  `}
`;

export const CardListLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 50px;
  padding: 0 24px;

  ${media.small`
    padding: 0;
  `}

  ${media.medium`
    padding: 0;
  `}
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  position: relative;

  .swiper-navigation-icon {
    width: 14px;
    height: 14px;
  }

  .swiper {
    position: static;
    overflow: hidden;
  }

  .swiper-slide {
    ${media.medium`
      width: 30%;
      min-width: 275px;
  `}

    ${media.small`
      width: 50%;
      min-width: 208px;
  `}
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #dadcdf;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    color: #000000;

    ${media.medium`
      display: none;
  `}

    ${media.small`
      display: none;
  `}
  }

  .swiper-button-next {
    right: -20px;
  }

  .swiper-button-prev {
    left: -20px;
  }

  .swiper-button-prev.swiper-button-disabled {
    opacity: 0;
    cursor: none;
  }

  .swiper-button-next.swiper-button-disabled {
    opacity: 1;
    cursor: pointer;
    pointer-events: auto;
  }

  &.end-of-list .swiper-button-next.swiper-button-disabled {
    opacity: 0;
    cursor: none;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // 배경 color일 때 적용(이미지 같이 내려올 시, 이미지 우선)
  background-color: ${(props) => {
    if (props.$bgImg) return "transparent";
    const colorMap = {
      beige: colors.beige[200],
      purple: colors.purple[200],
      blue: colors.blue[200],
      green: colors.green[200],
    };
    return colorMap[props.$bg] || "#ffffff";
  }};

  // 배경 이미지, null이면 color 적용
  background-image: ${(props) => {
    if (props.$bgImg) {
      return `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("${props.$bgImg}")`;
    }
    const patternMap = {
      beige: bgPatternBeige,
      purple: bgPatternPurple,
      blue: bgPatternBlue,
      green: bgPatternGreen,
    };
    if (props.$bg && patternMap[props.$bg]) {
      return `url("${patternMap[props.$bg]}")`;
    }
    return "none";
  }};

  background-size: ${(props) => {
    if (props.$bgImg) return "cover";
    if (props.$bg === "beige") return "130px";
    if (props.$bg) return "150px";
    return "cover";
  }};

  background-position: ${(props) => {
    if (props.$bgImg) return "center";
    if (props.$bg) return "bottom right";
    return "center";
  }};

  background-repeat: no-repeat;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  padding: 30px 24px 20px;
  cursor: pointer;

  ${media.small`
    background-size: ${(props) => {
      if (props.$bgImg) return "cover";
      if (props.$bg === "beige") return "110px";
      if (props.$bg) return "130px";
      return "cover";
    }};
  `}
`;

export const CardImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;

  img {
    width: 28px;
    height: 28px;
    border: 1.5px solid #ffffff;
    border-radius: 50%;
    &:not(:first-child) {
      margin-left: -14px;
    }
  }
`;

export const ProfileCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #ffffff;
  margin-left: -14px;
  padding: 5px 6px;
`;

export const WriterCountText = styled.div`
  margin-top: 12px;

  color: ${(props) => {
    return props.$bgImg ? "white" : "black";
  }};

  ${font.regular16} span {
    ${font.bold16}
  }
`;

export const EmojiWrapper = styled(RollingHeaderEmojiContainer)`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 17px;
  font-size: 14px;
`;
