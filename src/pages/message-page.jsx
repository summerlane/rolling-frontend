import React from "react";
import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import Button from "@/components/common/button";
import DropDown from "@/components/message/drop-down";
import FromInput from "@/components/message/from-input";
import { useMessageForm } from "@/hooks/use-message-form";
import RichTextEditor from "@/components/message/reach-text-editor";
import ProfileImageSelector from "@/components/message/profile-image-selector";

export const FormInputStyle = css`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${colors.gray[300]};
  ${font.regular16};
  outline: none;
  ${colors.gray[900]};
  background-color: #fff;

  &:focus {
    border-color: ${colors.gray[500]};
  }
`;

export const PageContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 47px 24px 60px 24px;
`;

export const MessageFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
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
  ${colors.gray[900]};
  margin: 0;
  padding: 0;
`;

export const InputField = styled.input`
  ${FormInputStyle}

  &:focus {
    border-color: ${colors.gray[500]};
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.error};
  font-size: 14px;
  margin-top: -8px;
`;

const FullWidthButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;

function MessagePage() {
  const {
    fromInput,
    relationshipDropdown,
    fontDropdown,
    editorContent,
    setEditorContent,
    isFormValid,
    handleSubmit,
    RELATIONSHIP_OPTIONS,
    FONT_OPTIONS,
    selectedProfileImageId,
    handleImageSelect,
    selectableImages,
    isLoading,
    error,
  } = useMessageForm();

  return (
    <PageContainer>
      <MessageFormBox onSubmit={handleSubmit}>
        {/* From. 입력 필드 */}
        <FormField>
          <FormLabel htmlFor="fromInput">From.</FormLabel>
          <FromInput
            id="fromInput"
            name="from"
            placeholder="이름을 입력해 주세요."
            value={fromInput.value}
            onChange={fromInput.handleChange}
            onBlur={fromInput.handleBlur}
            hasError={fromInput.hasError}
            errorMessage="값을 입력해 주세요."
          />
        </FormField>

        {/* 프로필 이미지 선택 */}
        <ProfileImageSelector
          selectedId={selectedProfileImageId}
          onImageSelect={handleImageSelect}
          selectableImages={selectableImages}
          isLoading={isLoading}
          error={error}
        />

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

        <FormField>
          <FormLabel as="p">내용을 입력해 주세요</FormLabel>
          <RichTextEditor value={editorContent} onChange={setEditorContent} />
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
