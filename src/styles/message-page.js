import React from "react";
import styled from "styled-components";

const COLOR_PRIMARY = "#954aff";
const COLOR_GRAY_BORDER = "#ddd";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;
  min-height: 100vh;
  background-color: white;
`;

export const MessageFormBox = styled.form`
  width: 720px;
  padding: 40px;
  background-color: white;
`;

export const FormField = styled.div`
  margin-bottom: 32px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #1c1c1c;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${COLOR_GRAY_BORDER};
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: ${COLOR_PRIMARY};
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #ff5050; /* 예시 에러 색상 */
`;

export const ProfileWrapper = styled(FormField)`
  /* FormField 스타일 상속 */
`;

export const ProfileSelectorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileDefaultBox = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 16px;
  border: 1px solid ${COLOR_GRAY_BORDER};
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SelectableImagesList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  gap: 8px;
`;

export const SelectableImageItem = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid
    ${(props) => (props.isSelected ? COLOR_PRIMARY : "transparent")};
  transition: border 0.2s;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${COLOR_GRAY_BORDER};
  border-radius: 8px;
  font-size: 16px;
  appearance: none; /* 기본 화살표 제거 */
  background-image: url("data:image/svg+xml;utf8,<svg ...>"); /* 커스텀 화살표 SVG */
  background-repeat: no-repeat;
  background-position: right 16px center;
  &:focus {
    outline: none;
    border-color: ${COLOR_PRIMARY};
  }
`;

export const EditorPlaceholder = styled.div`
  min-height: 200px;
  border: 1px solid ${COLOR_GRAY_BORDER};
  border-radius: 8px;
  padding: 16px;
  line-height: 1.5;
  color: #888;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 18px 0;
  margin-top: 40px;
  background-color: ${COLOR_PRIMARY};
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #8335f0;
  }

  &:disabled {
    background-color: #cccccc; /* 비활성화 색상 */
    cursor: not-allowed;
  }
`;
