import styled from "styled-components";
import Button from "@/components/common/button";
import { RollingHeaderImojiContainer } from "@/styles/rolling-page-styles";
import { font } from "@/styles/font";

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

  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
  }
`;

export const CardWrapper = styled.div`
  width: 275px;
  height: 260px;
  background-color: ${(props) => {
    // if (props.bgImg) return "transparent";
    if (props.bg) return props.bg;
    return "#ffffff";
  }};
  /* background-image: ${(props) => {
    if (props.bgImg) return `url(${props.bgImg})`;
    return "none";
  }}; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  padding: 30px 24px 20px;
`;

export const CardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  img {
    width: 20px;
  }
`;

export const EmojiWrapper = styled(RollingHeaderImojiContainer)`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding: 17px 28px 0 0;
`;
