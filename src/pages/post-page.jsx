import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import media from "@/styles/media";
import Toggle from "@/components/common/toggle";
import { useState } from "react";
import Button from "@/components/common/button";
import axios from "axios";
import { useNavigate } from "react-router";

const Container = styled.div`
  min-width: 380px;
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 40px;
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

const CustomButton = styled(Button)`
  width: 100%;
  height: 56px;
`;

export default function PostPage() {
  const [name, setName] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  const bgColors = [
    colors.beige[200],
    colors.purple[200],
    colors.blue[200],
    colors.green[200],
  ];

  const [isSelectDiv, setIsSelectDiv] = useState(bgColors[0]);
  const [isSelectImg, setIsSelectImg] = useState(null);

  const navigate = useNavigate();

  const handleInputName = (e) => {
    setName(e.target.value);

    setButtonActive(e.target.value.length > 0 ? true : false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const colorChangeToString = () => {
      if (isSelectDiv === "#FFE2AD") {
        return "beige";
      }

      if (isSelectDiv === "#ECD9FF") {
        return "purple";
      }

      if (isSelectDiv === "#B1E4FF") {
        return "blue";
      }

      if (isSelectDiv === "#D0F5C3") {
        return "green";
      }
    };

    axios
      .post("https://rolling-api.vercel.app/20-1/recipients/", {
        name: name,
        backgroundColor: colorChangeToString(),
        backgroundImageURL: isSelectImg,
      })
      .then((response) => {
        console.log(response.data);
        alert("전송을 성공하였습니다.");

        const getId = response.data.id;
        navigate(`/post/${getId}`);
      })
      .catch((error) => {
        console.error("전송에 실패하였습니다.", error);
      });

    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <InputSection>
          <InputSectionTitle>To.</InputSectionTitle>
          <Input
            value={name}
            onChange={handleInputName}
            placeholder="받는 사람 이름을 입력해 주세요"
          />
        </InputSection>
        <Toggle
          bgColors={bgColors}
          isSelectDiv={isSelectDiv}
          setIsSelectDiv={setIsSelectDiv}
          isSelectImg={isSelectImg}
          setIsSelectImg={setIsSelectImg}
        />
        <CustomButton
          variant="primary"
          size="large"
          disabled={!buttonActive}
          type="submit"
        >
          생성하기
        </CustomButton>
      </Container>
    </form>
  );
}
