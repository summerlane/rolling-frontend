import styled from "styled-components";
import Button from "@/components/common/button";
import { RollingHeaderImojiContainer } from "@/styles/rolling-page-styles";

// list-page
export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomButton = styled(Button)`
  padding: 14px 60px;
`;

// card-list
export const CardListLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 50px;
`;

export const CardListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 50px;
`;

export const CardWrapper = styled.div`
  background-color: ${(props) => {
    if (props.bgImg) return "transparent";
    if (props.bg) return props.bg;
    return "#ffffff";
  }};
  background-image: ${(props) => {
    if (props.bgImg) return `url(${props.bgImg})`;
    return "none";
  }};
  background-size: cover;
  background-position: center;
  margin-top: 50px;
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
