import styled from "styled-components";
import Button from "@/components/common/button";
import { RollingHeaderImojiContainer } from "@/styles/rolling-page-styles";
import { font } from "@/styles/font";
import { colors } from "@/styles/colors";

// list-page
export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;
  margin-top: 40px;
`;

export const CustomButton = styled(Button)`
  padding: 14px 60px;
`;

// card-list
export const CustomH3 = styled.div`
  ${font.bold24}
`;

export const CardListLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 50px;
  padding: 0 20px;
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

  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #dadcdf;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    color: #000000;
  }

  .swiper-button-next {
    right: -20px;
  }

  .swiper-button-prev {
    left: -20px;
  }

  .swiper-button-disabled {
    opacity: 0;
    cursor: none;
  }
`;

export const CardWrapper = styled.div`
  width: 275px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: ${(props) => {
    if (props.bgImg) return "transparent";
    if (props.bg) return props.bg;
    return "#ffffff";
  }};
  background-image: ${(props) => {
    if (props.bgImg) return `url(${props.bgImg})`;
    return "none";
  }};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  background-color: ${colors.purple[200]};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  padding: 30px 24px 20px;
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
  ${font.regular16}

  span {
    ${font.bold16}
  }
`;

export const EmojiWrapper = styled(RollingHeaderImojiContainer)`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding: 17px 28px 0 0;
`;
