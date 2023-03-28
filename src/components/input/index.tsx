import React from "react"
import styled, { css } from "styled-components"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  left?: React.ReactNode
  error?: boolean
  errorMessage?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ left, error, errorMessage, ...rest }: InputProps, ref) => {
    const hasLeft = !!left

    return (
      <Container>
        {hasLeft && <Left children={left} />}
        <InputText ref={ref} withLeft={hasLeft} error={error} {...rest} />
      </Container>
    )
  },
)

const Container = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 56px;
`

const InputText = styled.input<{ withLeft: boolean; error?: boolean }>`
  width: 100%;
  height: 100%;
  border: 0px solid gray;
  box-sizing: border-box;
  border-radius: 4px;
  padding: ${p => (p.withLeft ? "0 20px 0 40px" : "0 20px")};
  font-size: 15px;

  &:hover,
  &:focus {
    outline: none;
    border-width: 1px;
  }

  ${p =>
    p.error &&
    css`
      border: 1px solid ${p => p.theme.colors.error};
    `}
`

const Left = styled.div`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
