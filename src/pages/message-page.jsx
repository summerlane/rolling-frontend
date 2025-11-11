import React from "react";
import styled, { css } from "styled-components";

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
  font-size: 16px;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  color: #181818;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #555;
  }
`;

export const ErrorMessage = styled.p`
  color: #dc3545; /* 빨간색 계열 */
  font-size: 14px;
  margin-top: -8px; /* 위쪽 갭 조정 */
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
  flex-shrink: 0; /* 크기 고정 */
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
  padding: 4px 0; /* 스크롤바를 위한 패딩 */
  -webkit-overflow-scrolling: touch; /* iOS에서 부드러운 스크롤 */
  list-style: none;
  margin: 0;
`;

export const SelectableImageItem = styled.li`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0; /* 크기 고정 */
  transition: transform 0.2s, border 0.2s;

  border: 2px solid transparent;
  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: #3f60ff; /* 선택된 이미지 하이라이트 색상 */
      transform: scale(1.05);
    `}

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #fff;
  appearance: none; /* 기본 드롭다운 화살표 숨기기 */
  outline: none;
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

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 0;
  margin-top: 20px;
  border-radius: 12px;
  background-color: #3f60ff; /* Primary Color */
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: #2e4bc0;
  }
`;

function MessagePage() {
  const isFormValid = false;
  const hasError = true;

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
        {/* 프로필 이미지 선택창 */}
        <ProfileWrapper>
          <FormLabel as="p">프로필 이미지</FormLabel>
          <ProfileSelectorContainer>
            <ProfileDefaultBox>
              <img src={DEFAULT_ICON_URL} alt="기본 프로필 이미지" />
            </ProfileDefaultBox>

            <SelectableImagesList>
              {selectableImages.map((image) => (
                <SelectableImageItem
                  key={image.id}
                  isSelected={image.isSelected}
                >
                  <img src={image.url} alt={`프로필 ${image.id}`} />
                </SelectableImageItem>
              ))}
            </SelectableImagesList>
          </ProfileSelectorContainer>
        </ProfileWrapper>

        {/* 상대와의 관계 드롭다운*/}
        <FormField>
          <FormLabel htmlFor="relationshipSelect">상대와의 관계</FormLabel>
          <SelectField
            id="relationshipSelect"
            name="relationship"
            defaultValue="지인"
          >
            <option value="지인">지인</option>
            <option value="친구">친구</option>
            <option value="동료">동료</option>
            <option value="가족">가족</option>
          </SelectField>
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
          <SelectField id="fontSelect" name="font" defaultValue="Noto Sans">
            <option value="Noto Sans">Noto Sans</option>
            {/* 추가 폰트 옵션 추가 예정 */}
          </SelectField>
        </FormField>

        {/* 생성하기 버튼 */}
        <SubmitButton type="submit" disabled={!isFormValid}>
          생성하기
        </SubmitButton>
      </MessageFormBox>
    </PageContainer>
  );
}

export default MessagePage;
