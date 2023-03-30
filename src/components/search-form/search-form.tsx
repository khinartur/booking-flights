import React, { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { MOBILE_SCREEN_THRESHOLD } from "~/core/constants"
import { useMediaQuery } from "~/core/hooks/use-media-query"
import { SearchFormState } from "~/features/search/domain"
import { Button } from "../button"
import { CalendarInput } from "../calendar-input"
import { Checkbox } from "../checkbox"
import { Input } from "../input"
import { Radio } from "../radio"

export type SearchFormProps = {
  userCity: string
  onSubmit: (data: SearchFormState) => void
}

export function SearchForm({ userCity, onSubmit }: SearchFormProps) {
  const [showReturnDate, setShowReturnDate] = useState(false)

  const isMobile = useMediaQuery(MOBILE_SCREEN_THRESHOLD)

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<SearchFormState>({
    defaultValues: {
      from: userCity,
      to: "",
      departureDate: undefined,
      returnDate: undefined,
    },
  })

  useEffect(() => {
    register("departureDate", { required: true })
    register("returnDate")
  }, [])

  const onTripTypeChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setShowReturnDate(value === "round-trip")
  }, [])

  const setDepartureDate = useCallback(
    (date: Date | undefined) => {
      setValue("departureDate", date)
    },
    [setValue],
  )

  const setReturnDate = useCallback(
    (date: Date | undefined) => {
      setValue("returnDate", date)
    },
    [setValue],
  )

  const uiSize = isMobile ? "md" : "lg"

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Content>
        <Stops>
          <Radio name="route-type" value="round-trip" label="Round-trip" onChange={onTripTypeChange} />
          <Radio defaultChecked name="route-type" value="one-way" label="One-way" onChange={onTripTypeChange} />
        </Stops>
        <Details>
          <Input
            uiSize={uiSize}
            {...register("from", { required: true })}
            error={!!errors.from}
            placeholder="Where from?"
          />
          <Input uiSize={uiSize} {...register("to", { required: true })} error={!!errors.to} placeholder="Where to?" />
          <CalendarInput uiSize={uiSize} onChoose={setDepartureDate} error={!!errors.departureDate} />
          {showReturnDate && <CalendarInput uiSize={uiSize} onChoose={setReturnDate} error={!!errors.returnDate} />}
          <Button type="submit" size={uiSize} children="Search" />
        </Details>
        <Checkbox label="Direct flights only" />
      </Content>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  background-color: ${p => p.theme.colors.backgroundSecondary};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 26px 80px;
  width: 100%;
  max-width: 1300px;
  box-sizing: border-box;

  @media (max-width: ${p => p.theme.breakpoints.laptop}) {
    padding: 16px 20px;
  }
`

const Stops = styled.div`
  display: flex;
  gap: 16px;
`

const Details = styled.div`
  display: flex;
  gap: 4px;
  position: relative;
  background-color: ${p => p.theme.colors.accent};
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px ${p => p.theme.colors.border};

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`
