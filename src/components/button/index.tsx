import React from "react"
import styled, { css, StyledComponent } from "styled-components"
import { AppTheme } from "~/theming/types"

type ButtonSkin = "primary" | "secondary"
type ButtonSize = "lg" | "md" | "sm"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  skin?: ButtonSkin
  size?: ButtonSize
  left?: React.ReactNode
  fluid?: boolean
}

export function Button({ skin = "primary", size = "lg", left, fluid = false, children, ...rest }: ButtonProps) {
  return (
    <ButtonBase skin={skin} size={size} fluid={fluid} {...rest}>
      {left}
      {children}
    </ButtonBase>
  )
}

const ButtonBase = styled.button<{ skin: ButtonSkin; size: ButtonSize; fluid: boolean }>`
  /* disable appearance */
  background-color: ${p => p.theme.colors.primary};
  border: none;
  cursor: pointer;
  line-height: normal;

  /* common */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  min-width: 110px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  line-height: 130%;

  & > *:first-child {
    margin-right: 8px;
  }

  /* primary large */
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  height: 56px;

  /* medium */
  ${p =>
    p.size &&
    p.size === "md" &&
    css`
      height: 48px;
    `}

  /* small */
  ${p =>
    p.size &&
    p.size === "sm" &&
    css`
      height: 36px;
    `}

  /* sescondary */
  ${p =>
    p.skin &&
    p.skin === "secondary" &&
    css`
      background-color: transparent;
      color: ${p => p.theme.colors.primary};
      border: 1px solid ${p => p.theme.colors.primary};

      &:hover {
        background-color: ${p => p.theme.colors.primaryHover};
      }
    `}

  /* fluid */
  ${p =>
    p.fluid &&
    css`
      width: 100%;
    `}
` as StyledComponent<"button", AppTheme, ButtonProps>
