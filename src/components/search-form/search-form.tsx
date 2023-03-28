import React, { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { SearchFormState } from "~/features/search/domain"
import { Button } from "../button"
import { CalendarInput } from "../calendar-input"
import { Checkbox } from "../checkbox"
import { Input } from "../input"
import { Radio } from "../radio"

export type SearchFormProps = {
  onSubmit: (data: SearchFormState) => void
}

export function SearchForm({ onSubmit }: SearchFormProps) {
  const [showReturnDate, setShowReturnDate] = useState(false)

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<SearchFormState>({
    defaultValues: {
      from: "",
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Content>
        <Stops>
          <Radio name="route-type" value="round-trip" label="Round-trip" onChange={onTripTypeChange} />
          <Radio defaultChecked name="route-type" value="one-way" label="One-way" onChange={onTripTypeChange} />
        </Stops>
        <Details>
          <Input {...register("from", { required: true })} error={!!errors.from} placeholder="Where from?" />
          <Input {...register("to", { required: true })} error={!!errors.to} placeholder="Where to?" />
          <CalendarInput onChoose={setDepartureDate} error={!!errors.departureDate} />
          {showReturnDate && <CalendarInput onChoose={setReturnDate} error={!!errors.returnDate} />}
          <Button type="submit" children="Search" />
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
  padding: 26px 0;
  width: 100%;
  max-width: 1140px;
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
`
