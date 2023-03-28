import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ReactDatePicker from "react-datepicker"
import "~/styles/react-datepicker.css"
import { Icon } from "../icon"
import { Input, InputProps } from "../input"
import { formatDateToDay } from "~/core/utils/date"

export type CalendarInputProps = InputProps & {
  onChoose?: (val: Date | undefined) => void
}

export function CalendarInput({ onChoose, ...rest }: CalendarInputProps) {
  const [date, setDate] = useState<Date | undefined>()

  useEffect(() => onChoose && onChoose(date), [date])

  return (
    <Container>
      <ReactDatePicker
        selected={date}
        onChange={val => val && setDate(val)}
        minDate={new Date()}
        customInput={
          <InputContainer>
            <Input
              left={<Icon type="calendar" />}
              value={date && formatDateToDay(date)}
              placeholder="Choose date"
              {...rest}
            />
          </InputContainer>
        }
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-shrink: 1;
  min-width: 180px;
`

const InputContainer = styled.div`
  display: flex;
  cursor: pointer;

  &:hover input {
    pointer-events: none;
  }
`
