import React, { useCallback } from "react"
import { searchTickets, selectSearchUserCity } from "~/features/search"
import { SearchFormState } from "~/features/search/domain"
import { useAppDispatch, useAppSelector } from "~/store/hooks"
import { SearchForm } from "./search-form"

export function SearchFormContainer() {
  const dispatch = useAppDispatch()
  const userCity = useAppSelector(selectSearchUserCity)

  const onSubmit = useCallback(
    (data: SearchFormState) => {
      dispatch(
        searchTickets({
          from: data.from,
          to: data.to,
          departureDate: data.departureDate,
          returnDate: data.returnDate,
        }),
      )
    },
    [dispatch],
  )

  // @todo: add user city searching states
  if (!userCity) {
    return null
  }

  return <SearchForm userCity={userCity} onSubmit={onSubmit} />
}
