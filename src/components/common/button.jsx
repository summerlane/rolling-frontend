import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";
import plusIcon from "@/assets/icons/plus.svg";
import deleteIcon from "@/assets/icons/deleted.svg";
import addEmojiIcon from "@/assets/icons/add-emoji.svg";

const SIZES = {
  large: css`
    padding: 14px 24px;
    border-radius: 12px;
    ${font.bold18}
  `,
  medium: css`
    padding: 7px 16px;
    border-radius: 6px;
    ${font.regular16}
  `,
  small: css`
    padding: 6px 16px;
    border-radius: 6px;
    ${font.regular16}
  `,
  tiny: css`
    padding: 2px 16px;
    border-radius: 6px;
    ${font.regular14}
  `,
  plus: css`
    padding: 16px;
    border-radius: 9999px;
  `,
  delete: css`
    padding: 6px;
    border-radius: 6px;
  `,
};

const VARIANT_STYLES = {
  primary: css`
    background-color: ${colors.purple[600]};
    color: white;
    border: none;

    &:hover {
      background-color: ${colors.purple[700]};
    }

    &:active {
      background-color: ${colors.purple[800]};
    }

    &:focus {
      background-color: ${colors.purple[900]};
    }
  `,

  secondary: css`
    background-color: white;
    color: ${colors.purple[700]};
    border: 1px solid ${colors.purple[600]};

    &:hover {
      background-color: ${colors.purple[100]};
      color: ${colors.purple[600]};
      border-color: ${colors.purple[700]};
    }

    &:active {
      background-color: ${colors.purple[100]};
      color: ${colors.purple[600]};
      border-color: ${colors.purple[800]};
    }

    &:focus {
      color: ${colors.purple[600]};
      border-color: ${colors.purple[800]};
    }
  `,

  outlined: css`
    background-color: white;
    color: ${colors.gray[900]};
    border: 1px solid ${colors.gray[300]};

    &:hover {
      background-color: ${colors.gray[100]};
    }

    &:active {
      background-color: ${colors.gray[100]};
    }

    &:focus {
      border-color: ${colors.gray[500]};
    }

    .emoji-icon {
      width: 24px;
      height: 24px;
    }
  `,

  plus: css`
    background-color: ${colors.gray[500]};
    border: 1px solid transparent;

    &:hover {
      background-color: ${colors.gray[600]};
    }

    &:active {
      background-color: ${colors.gray[700]};
    }

    &:focus {
      background-color: ${colors.gray[700]};
      border: 1px solid ${colors.gray[800]};
    }

    .plus-icon {
      width: 24px;
      height: 24px;
    }
  `,

  delete: css`
    background-color: white;
    border: 1px solid ${colors.gray[300]};

    &:hover {
      background-color: ${colors.gray[100]};
    }

    &:active {
      background-color: ${colors.gray[100]};
    }

    &:focus {
      border-color: 1px solid ${colors.gray[500]};
    }

    .delete-icon {
      width: 24px;
      height: 24px;
    }
  `,
};

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${({ $variant }) => VARIANT_STYLES[$variant] || VARIANT_STYLES.primary}
  ${({ $size }) => SIZES[$size] || SIZES.medium}

  &:disabled {
    background-color: ${colors.gray[300]};
    color: white;
    border: transparent;
    cursor: not-allowed;
  }
`;

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  emoji = "",
  ...props
}) {
  return (
    <ButtonStyle $variant={variant} $size={size} {...props}>
      {variant === "plus" ? (
        <img src={plusIcon} alt="추가" className="plus-icon" />
      ) : variant === "delete" ? (
        <img src={deleteIcon} alt="삭제" className="delete-icon" />
      ) : variant === "outlined" && emoji ? (
        <>
          <img src={addEmojiIcon} alt="이모지" className="emoji-icon" />
          {children}
        </>
      ) : (
        children
      )}
    </ButtonStyle>
  );
}
