import React from "react"
import styled from "styled-components"

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function Radio({ label, ...rest }: RadioProps) {
  return (
    <Label>
      <input type="radio" {...rest} />
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
  border-radius: 50%;
  background-color: ${p => p.theme.colors.white};

  &:after {
    display: none;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
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
    border-color: ${p => p.theme.colors.primary};
  }

  & input:checked ~ ${Checkmark}:after {
    display: block;
    background-color: ${p => p.theme.colors.primary};
  }
`
