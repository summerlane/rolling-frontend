import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import media from "@/styles/media";

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  gap: 58px;

  ${media.small`
    width: calc(100% - 40px);
  `}

  ${media.medium`
    width: calc(100% - 48px);
  `}
`;

const InputSection = styled.div`
  width: 100%;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
`;

const InputSectionTitle = styled.p`
  ${font.bold24};
  color: ${colors.gray[900]};
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  min-width: 360px;
  height: 50px;
  border: 1px solid ${colors.gray[300]};
  border-radius: 8px;
  ${font.regular18};
  color: ${colors.gray[500]};
  padding: 12px 16px;
`;

const ToggleSection = styled.div`
  width: 100%;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const ToggleTitle = styled.p`
  ${font.bold24};
  color: ${colors.gray[900]};
  margin: 0;
`;

const ToggleTitleSmall = styled.p`
  ${font.regular16};
  color: ${colors.gray[600]};
  margin: 0;
`;

const ToggleButtonContainer = styled.div`
  width: 224px;
  height: 40px;
  background-color: ${colors.gray[100]};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const ToggleButton = styled.div`
  width: 122px;
  height: 40px;
  background-color: #ffffff;
  color: ${colors.purple[600]};
  ${font.bold16};
  border: 2px solid ${colors.purple[600]};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ToggleButtonDisable = styled.div`
  width: 122px;
  height: 40px;
  background-color: transparent;
  color: ${colors.gray[900]};
  ${font.regular16};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ToggleDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
`;

const ToggleDiv = styled.div`
  width: 168px;
  height: 168px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  background-color: ${(props) => props.$bgColor};
  cursor: pointer;

  ${media.small`
    flex: 1 1 40%; 
  `}

  ${media.medium`
    flex: 1 1 40%;
  `}
`;

const ToggleImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
`;

const ToggleImg = styled.div`
  width: 168px;
  height: 168px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  background-image: url(./src/assets/images/img-car.webp);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  cursor: pointer;

  ${media.small`
    flex: 1 1 40%; 
  `}

  ${media.medium`
    flex: 1 1 40%;
  `}
`;

const ImgSelect = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(./src/assets/images/select-circle.webp);
  background-repeat: no-repeat;
  background-size: 44px 44px;
  background-position: center;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  ${font.bold18};
  background-color: ${colors.purple[600]};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 12px;
  border: 0;
  cursor: pointer;

  ${media.small`
    width: 100%;
  `}

  ${media.medium`
    width: 100%;
  `}
`;

export default function PostPage() {
  return (
    <Container>
      <InputSection>
        <InputSectionTitle>To.</InputSectionTitle>
        <Input placeholder="받는 사람 이름을 입력해 주세요" />
      </InputSection>
      <ToggleSection>
        <ToggleTitle>배경화면을 선택해 주세요.</ToggleTitle>
        <ToggleTitleSmall>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </ToggleTitleSmall>
        <ToggleButtonContainer>
          <ToggleButton>컬러</ToggleButton>
          <ToggleButtonDisable>이미지</ToggleButtonDisable>
        </ToggleButtonContainer>
        <ToggleDivContainer>
          <ToggleDiv $bgColor={colors.beige[200]}>
            <ImgSelect></ImgSelect>
          </ToggleDiv>
          <ToggleDiv $bgColor={colors.purple[200]}></ToggleDiv>
          <ToggleDiv $bgColor={colors.blue[200]}></ToggleDiv>
          <ToggleDiv $bgColor={colors.green[200]}></ToggleDiv>
        </ToggleDivContainer>
        <ToggleImgContainer>
          <ToggleImg>
            <ImgSelect></ImgSelect>
          </ToggleImg>
          <ToggleImg></ToggleImg>
          <ToggleImg></ToggleImg>
          <ToggleImg></ToggleImg>
        </ToggleImgContainer>
      </ToggleSection>
      <Button>생성하기</Button>
    </Container>
  );
}
