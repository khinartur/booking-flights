import React from "react"
import styled from "styled-components"

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function Checkbox({ label, ...rest }: CheckboxProps) {
  return (
    <Label>
      <input type="checkbox" {...rest} />
      <Checkmark />
      {label}
    </Label>
  )
}

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  border: 1px solid ${p => p.theme.colors.secondary};
  border-radius: 4px;
  background-color: ${p => p.theme.colors.white};

  &:after {
    display: none;
    content: "";
    position: absolute;
    left: 6px;
    top: 3px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-radius: 1px;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

const Label = styled.label`
  display: flex;
  position: relative;
  height: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  padding-left: 28px;
  box-sizing: border-box;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & input:checked ~ ${Checkmark} {
    background-color: ${p => p.theme.colors.primary};
    border-color: ${p => p.theme.colors.primary};
  }

  & input:checked ~ ${Checkmark}:after {
    display: block;
  }
`
