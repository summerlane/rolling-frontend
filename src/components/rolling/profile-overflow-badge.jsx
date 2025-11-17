import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";

const OverflowBadge = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 140px;
  border: 1.4px solid ${colors.gray[300]};
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: -10px;
  ${font.regular12}
  color: ${colors.gray[700]};
`;

/**
 * 프로필 오버플로우 뱃지 컴포넌트
 * 책임: 추가 인원 수를 표시 (+N)
 */
export default function ProfileOverflowBadge({ count }) {
  if (count <= 0) {
    return null;
  }

  return <OverflowBadge>+{count}</OverflowBadge>;
}
