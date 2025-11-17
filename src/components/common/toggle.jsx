import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import media from "@/styles/media";
import { useEffect, useState } from "react";
import axios from "axios";

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
  background-color: ${(props) => (props.$active ? "transparent" : "#ffffff")};
  color: ${(props) => (props.$active ? colors.gray[900] : colors.purple[600])};
  border: ${(props) =>
    props.$active ? null : `2px solid ${colors.purple[600]}`};
  ${(props) => (props.$active ? `${font.regular16}` : `${font.bold16}`)};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ToggleButtonDisable = styled.div`
  width: 122px;
  height: 40px;
  background-color: ${(props) => (props.$active ? "transparent" : "#ffffff")};
  color: ${(props) => (props.$active ? colors.gray[900] : colors.purple[600])};
  border: ${(props) =>
    props.$active ? null : `2px solid ${colors.purple[600]}`};
  ${(props) => (props.$active ? `${font.regular16}` : `${font.bold16}`)};
  border-radius: 6px;
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
  background-image: ${(props) =>
    props.$active ? "url(./src/assets/images/select-circle.webp)" : null};
  background-repeat: no-repeat;
  background-size: 44px 44px;
  background-position: center;

  ${media.small`
    flex: 1 1 40%; 
  `}

  ${media.medium`
    flex: 1 1 40%;
  `};
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
  background-image: ${(props) =>
      props.$active
        ? "url(./src/assets/images/select-circle.webp)"
        : "url(${$bgImgs})"},
    url(${(props) => props.$bgImgs});
  background-repeat: no-repeat;
  background-size: 44px 44px, 180%;
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

export default function Toggle({
  bgColors,
  isSelectDiv,
  setIsSelectDiv,
  isSelectImg,
  setIsSelectImg,
}) {
  // const bgColors = [
  //   colors.beige[200],
  //   colors.purple[200],
  //   colors.blue[200],
  //   colors.green[200],
  // ];

  const [imgs, setImgs] = useState([]);
  const [toggle, setToggle] = useState(false);
  // const [isSelectDiv, setIsSelectDiv] = useState(bgColors[0]);
  // const [isSelectImg, setIsSelectImg] = useState(imgs[0]);

  useEffect(() => {
    axios
      .get("https://rolling-api.vercel.app/background-images/")
      .then((response) => {
        setImgs(response.data.imageUrls);

        if (response.data.imageUrls.length > 0) {
          setIsSelectImg(response.data.imageUrls[0]);
        }
      })
      .catch((error) => {
        console.error("배경 이미지 가져오기에 실패했습니다.", error);
      });
  }, [setIsSelectImg]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClickDiv = (bgColor) => {
    setIsSelectDiv(bgColor);
  };

  const handleClickImg = (bgImg) => {
    setIsSelectImg(bgImg);
  };

  return (
    <>
      <ToggleSection>
        <ToggleTitle>배경화면을 선택해 주세요.</ToggleTitle>
        <ToggleTitleSmall>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </ToggleTitleSmall>
        <ToggleButtonContainer onClick={handleToggle}>
          <ToggleButton $active={toggle}>컬러</ToggleButton>
          <ToggleButtonDisable $active={!toggle}>이미지</ToggleButtonDisable>
        </ToggleButtonContainer>
        {toggle === false ? (
          <ToggleDivContainer>
            {bgColors.map((bgColor) => (
              <ToggleDiv
                key={bgColor}
                onClick={() => handleClickDiv(bgColor)}
                $active={isSelectDiv === bgColor}
                $bgColor={bgColor}
              />
            ))}
          </ToggleDivContainer>
        ) : (
          <ToggleImgContainer>
            {imgs.map((bgImg) => (
              <ToggleImg
                key={bgImg}
                onClick={() => handleClickImg(bgImg)}
                $active={isSelectImg === bgImg}
                $bgImgs={bgImg}
              />
            ))}
            {/* <ToggleImg>{isSelectImg === 1 && <ImgSelect />}</ToggleImg>
            <ToggleImg $active={isSelectImg === 1} /> */}
          </ToggleImgContainer>
        )}
      </ToggleSection>
    </>
  );
}
