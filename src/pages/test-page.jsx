import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import media from "@/styles/media";
import Button from "@/components/common/button";

const Container = styled.div`
  padding: 40px 20px;
  margin: 0 auto;
`;

const Title = styled.h1`
  ${font.bold28}
  color: ${colors.purple[600]};
  margin-bottom: 40px;
`;

const ResponsiveBox = styled.div`
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;

  ${media.small`
    background: ${colors.blue[200]};
    ${font.regular14}
  `}

  ${media.medium`
    background: ${colors.green[200]};
    ${font.regular16}
  `}

  ${media.large`
    background: ${colors.purple[200]};
    ${font.regular18}
  `}
`;

const CustomButton = styled(Button)`
  width: 100%;
  padding: 30px;
`;

export default function TestPage() {
  return (
    <Container>
      <Title>공용 스타일 & 컴포넌트 테스트</Title>
      <ResponsiveBox>
        <strong>창 크기를 조절해보세요!</strong>
        <br />
        <br />
        모바일(~599px): 파란색 배경, 작은 폰트
        <br />
        태블릿(600~1023px): 초록색 배경, 중간 폰트
        <br />
        데스크톱(1024px~): 보라색 배경, 큰 폰트
      </ResponsiveBox>
      <Button variant="primary" size="large">
        primary large
      </Button>
      <Button variant="secondary" size="medium">
        secondary medium
      </Button>
      <Button variant="outlined" size="small" emoji>
        outlined emoji
      </Button>
      <Button variant="outlined" size="small">
        outlined small
      </Button>
      <Button variant="outlined" size="tiny">
        outlined tiny
      </Button>
      <Button variant="plus" size="plus">
        plus
      </Button>
      <Button variant="delete" size="delete">
        delete
      </Button>
      <CustomButton>custom button</CustomButton>
      <CustomButton disabled>custom button</CustomButton>
    </Container>
  );
}
