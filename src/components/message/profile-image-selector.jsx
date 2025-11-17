import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import { DEFAULT_IMAGE_ID } from "@/hooks/use-profile-image";
import defaultIcon from "@/assets/icons/person.svg";

const DEFAULT_ICON_URL = defaultIcon;

const FormLabel = styled.label`
  ${font.bold24}
  line-height: 36px;
  letter-spacing: -0.01em;
  color: ${colors.gray[900]};
  margin: 0;
  padding: 0;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SelectorPrompt = styled.p`
  ${font.regular16};
  color: ${colors.gray[500]};
  margin: 0;
  padding: 0;
`;

const ProfileSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
  padding: 4px 0;
`;

const SelectorRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProfileDefaultBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background-color: ${colors.gray[300]};

  border: 1px solid
    ${(props) => (props.$isSelected ? colors.purple[700] : colors.gray[200])};
  ${(props) => props.$isSelected && `border-width: 2px;`}

  cursor: pointer;
  transition: border 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    border: none;
  }
`;

const SelectableImagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0px;

  list-style: none;
  margin: 0;
  padding: 0;
`;

const SelectableImageItem = styled.li`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  transition: border 0.2s;

  border: 2px solid
    ${(props) => (props.$isSelected ? colors.purple[700] : "transparent")};

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }
`;

function ProfileImageSelector({
  selectedId,
  onImageSelect,
  selectableImages,
  isLoading,
  error,
}) {
  return (
    <ProfileWrapper>
      <FormLabel as="p">프로필 이미지</FormLabel>
      <ProfileSelectorContainer>
        <ProfileDefaultBox
          $isSelected={selectedId === DEFAULT_IMAGE_ID}
          onClick={() => onImageSelect(DEFAULT_IMAGE_ID)}
        >
          <img src={DEFAULT_ICON_URL} alt="기본 프로필 아이콘" />
        </ProfileDefaultBox>

        <SelectorRightBlock>
          <SelectorPrompt>프로필 이미지를 선택해주세요!</SelectorPrompt>
          <SelectableImagesList>
            {isLoading && <p>이미지를 불러오는 중입니다...</p>}
            {error && <p>이미지를 불러오는 데 실패했습니다.</p>}
            {!isLoading &&
              !error &&
              selectableImages.map((image) => (
                <SelectableImageItem
                  key={image.id}
                  $isSelected={selectedId === image.id}
                  onClick={() => onImageSelect(image.id)}
                >
                  <img src={image.url} alt={`프로필 ${image.id}`} />
                </SelectableImageItem>
              ))}
          </SelectableImagesList>
        </SelectorRightBlock>
      </ProfileSelectorContainer>
    </ProfileWrapper>
  );
}

export default ProfileImageSelector;
