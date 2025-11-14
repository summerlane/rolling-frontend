import React from "react";
import styled, { css } from "styled-components";
import { font } from "@/styles/font";
import Button from "@/components/common/button";
import DropDown from "@/components/message/drop-down";
import useDropdown from "@/hooks/use-dropdown";

const RELATIONSHIP_OPTIONS = [
  { label: "지인", value: "지인" },
  { label: "친구", value: "친구" },
  { label: "동료", value: "동료" },
  { label: "가족", value: "가족" },
];

const FONT_OPTIONS = [{ label: "Noto Sans", value: "Noto Sans" }];

const DEFAULT_ICON_URL = "/assets/default-user.svg";
const TEMP_IMAGE_URL = "/assets/temp-profile.jpg";
const selectableImages = [
  { id: 1, url: TEMP_IMAGE_URL, isSelected: true },
  { id: 2, url: TEMP_IMAGE_URL, isSelected: false },
  { id: 3, url: TEMP_IMAGE_URL, isSelected: false },
  { id: 4, url: TEMP_IMAGE_URL, isSelected: false },
  { id: 5, url: TEMP_IMAGE_URL, isSelected: false },
  { id: 6, url: TEMP_IMAGE_URL, isSelected: false },
  { id: 7, url: TEMP_IMAGE_URL, isSelected: false },
];

const FormInputStyle = css`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  color: #181818;
  background-color: #fff;

  &:focus {
    border-color: #555;
  }
`;

export const PageContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 60px 24px;
`;

export const MessageFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormLabel = styled.label`
  ${font.bold24}
  line-height: 36px;
  letter-spacing: -0.01em;
  color: #181818;
`;

export const InputField = styled.input`
  ${FormInputStyle}

  &:focus {
    border-color: #555;
  }
`;

export const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 14px;
  margin-top: -8px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProfileSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const ProfileDefaultBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SelectableImagesList = styled.ul`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  padding: 4px 0;
  -webkit-overflow-scrolling: touch;
  list-style: none;
  margin: 0;
`;

export const SelectableImageItem = styled.li`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.2s, border 0.2s;

  border: 2px solid transparent;
  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EditorPlaceholder = styled.div`
  min-height: 200px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  font-size: 16px;
  color: #777;
`;

const FullWidthButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

function MessagePage() {
  const isFormValid = false;
  const hasError = true;

  const relationshipDropdown = useDropdown("지인");
  const fontDropdown = useDropdown("Noto Sans");

  return (
    <PageContainer>
      <MessageFormBox>
        {/* From. 입력 필드 */}
        <FormField>
          <FormLabel htmlFor="fromInput">From.</FormLabel>
          <InputField
            id="fromInput"
            name="from"
            placeholder="이름을 입력해 주세요."
          />
          {/* 에러 메시지 표시 */}
          {hasError && <ErrorMessage>"값을 입력해 주세요."</ErrorMessage>}
        </FormField>

        {/* 프로필 이미지 선택창 (생략) */}
        <ProfileWrapper>
          <FormLabel as="p">프로필 이미지</FormLabel>
          <ProfileSelectorContainer>
            <ProfileDefaultBox>
              <img src={DEFAULT_ICON_URL} alt="기본 프로필 이미지" />
            </ProfileDefaultBox>
            <SelectableImagesList>
              {selectableImages.map((image) => (
                <SelectableImageItem key={image.id}>
                  <img src={image.url} alt={`프로필 ${image.id}`} />
                </SelectableImageItem>
              ))}
            </SelectableImagesList>
          </ProfileSelectorContainer>
        </ProfileWrapper>

        {/* 상대와의 관계 드롭다운*/}
        <FormField>
          <FormLabel htmlFor="relationshipSelect">상대와의 관계</FormLabel>
          <DropDown
            id="relationshipSelect"
            name="relationship"
            defaultValue="지인"
            options={RELATIONSHIP_OPTIONS}
            value={relationshipDropdown.value}
            onChange={relationshipDropdown.handleChange}
          />
        </FormField>

        {/* 내용 입력 (Rich Text Editor 사용) */}
        <FormField>
          <FormLabel as="p">내용을 입력해 주세요</FormLabel>
          <EditorPlaceholder>
            <p>I am your reach text editor.</p>
          </EditorPlaceholder>
        </FormField>

        {/* 폰트 선택 드롭다운 */}
        <FormField>
          <FormLabel htmlFor="fontSelect">폰트 선택</FormLabel>
          <DropDown
            id="fontSelect"
            name="font"
            defaultValue="Noto Sans"
            options={FONT_OPTIONS}
            value={fontDropdown.value}
            onChange={fontDropdown.handleChange}
          />
        </FormField>

        {/* 생성하기 버튼 */}
        <FullWidthButton
          type="submit"
          $variant="primary"
          size="large"
          disabled={!isFormValid}
        >
          생성하기
        </FullWidthButton>
      </MessageFormBox>
    </PageContainer>
  );
}

export default MessagePage;
