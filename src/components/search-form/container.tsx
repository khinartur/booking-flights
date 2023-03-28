import React, { useCallback } from "react"
import { searchTickets } from "~/features/search"
import { SearchFormState } from "~/features/search/domain"
import { useAppDispatch } from "~/store/hooks"
import { SearchForm } from "./search-form"

export function SearchFormContainer() {
  const dispatch = useAppDispatch()

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

  return <SearchForm onSubmit={onSubmit} />
}
