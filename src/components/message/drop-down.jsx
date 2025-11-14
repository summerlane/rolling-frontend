import React, { useState, useRef, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import { colors } from "@/styles/colors";
import { font } from "@/styles/font";

import ARROW_ICON from "@/assets/icons/arrow-right.svg";

const DropDownWrapper = styled.div`
  position: relative;
  width: 320px;
`;

const DropDownTrigger = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${colors.gray[300]};
  background-color: #fff;

  ${font.regular16}
  text-align: left;

  outline: none;

  color: ${({ currentValue, defaultValue, $isInitialLoad }) => {
    if ($isInitialLoad && currentValue === defaultValue) {
      return colors.gray[500];
    }
    return colors.gray[900];
  }};

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      border: 2px solid ${colors.gray[500]};
      padding: 11px 15px;
    `}
`;

const ArrowImage = styled.img`
  width: 16px;
  height: 16px;
  transform: rotate(${({ $isOpen }) => ($isOpen ? "270deg" : "90deg")});
  transition: transform 0.2s;
`;

const DropDownMenuContainer = styled.ul`
  list-style: none;
  margin: 10px 1px;
  padding: 1px;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 320px;
  max-height: 220px;
  overflow-y: auto;

  background-color: #ffffff;
  border: 1px solid ${colors.gray[300]};
  border-radius: 8px;

  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const DropDownItem = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 12px 16px;

  ${font.regular16}
  color: ${colors.gray[900]};

  &:hover {
    background-color: ${colors.gray[100]};
  }
`;

function DropDown({ id, name, defaultValue, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentValue = value;
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleItemClick = (optionValue) => {
    onChange({ target: { name: name, value: optionValue } });
    setIsOpen(false);
    setIsInitialLoad(false);
  };

  const handleTriggerClick = () => {
    setIsOpen((prev) => !prev);
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }
  };

  const selectedOption = options.find((opt) => opt.value === currentValue) || {
    label: defaultValue,
    value: defaultValue,
  };

  return (
    <DropDownWrapper ref={dropdownRef}>
      <DropDownTrigger
        id={id}
        name={name}
        type="button"
        onClick={handleTriggerClick}
        $isOpen={isOpen}
        currentValue={currentValue}
        defaultValue={defaultValue}
        $isInitialLoad={isInitialLoad}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedOption.label}</span>
        <ArrowImage src={ARROW_ICON} alt="드롭다운 화살표" $isOpen={isOpen} />
      </DropDownTrigger>

      {isOpen && (
        <DropDownMenuContainer role="listbox" aria-labelledby={id}>
          {options.map((option) => (
            <DropDownItem
              key={option.value}
              role="option"
              aria-selected={option.value === currentValue}
              onClick={() => handleItemClick(option.value)}
            >
              {option.label}
            </DropDownItem>
          ))}
        </DropDownMenuContainer>
      )}
    </DropDownWrapper>
  );
}

export default DropDown;
