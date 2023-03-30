import React, { useCallback, useEffect } from "react"
import { fetchPopularCities, selectPopularCitiesCurrent, selectPopularCitiesLoading } from "~/features/popular-cities"
import { useAppDispatch, useAppSelector } from "~/store/hooks"
import { PopularCities } from "./popular-cities"

export function PopularCitiesContainer() {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(selectPopularCitiesLoading)
  const destinations = useAppSelector(selectPopularCitiesCurrent)

  // @todo: move to app state
  const from = "Amsterdam"

  useEffect(() => {
    dispatch(
      fetchPopularCities({
        from,
        departureDate: new Date(),
      }),
    )
  }, [])

  const onCityClick = useCallback(() => {
    // @todo: initiate tickets search
  }, [])

  return <PopularCities loading={loading} from={from} destinations={destinations} onCityChoose={onCityClick} />
}
