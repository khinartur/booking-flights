import React, { useEffect } from "react"
import styled from "styled-components"
import { Header } from "~/components/header"
import { PopularCitiesContainer } from "~/components/popular-cities/container"
import { SearchFormContainer } from "~/components/search-form/container"
import { TicketsList } from "~/components/tickets-list"
import { selectSearchCurrent, selectSearchLoading, setUserCity } from "~/features/search"
import { useAppDispatch, useAppSelector } from "~/store/hooks"

export function MainPage() {
  const dispatch = useAppDispatch()
  const ticketsLoading = useAppSelector(selectSearchLoading)
  const tickets = useAppSelector(selectSearchCurrent)

  useEffect(() => {
    // @todo: add user location search
    dispatch(setUserCity("Amsterdam"))
  }, [])

  const caption = !tickets ? "Searching for the best results..." : `Showing ${tickets.length} results`

  return (
    <>
      <Header />
      <SearchFormContainer />
      <Wrapper>
        {ticketsLoading || tickets ? (
          <TicketsContent>
            <Caption children={caption} />
            <TicketsList loading={ticketsLoading} tickets={tickets} />
          </TicketsContent>
        ) : (
          <PopularCitiesContent>
            <PopularCitiesContainer />
          </PopularCitiesContent>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 200px;
`

const TicketsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 80px;
  width: 100%;
  max-width: 1300px;
  box-sizing: border-box;
  margin-top: 16px;

  @media (max-width: ${p => p.theme.breakpoints.laptop}) {
    padding: 0 20px;
    gap: 16px;
  }
`

const PopularCitiesContent = styled.div`
  padding: 0 80px;
  width: 100%;
  max-width: 1300px;
  box-sizing: border-box;
  margin-top: 32px;

  @media (max-width: ${p => p.theme.breakpoints.laptop}) {
    padding: 0 20px;
  }
`

const Caption = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: ${p => p.theme.colors.text};

  @media (max-width: ${p => p.theme.breakpoints.laptop}) {
    font-size: 18px;
  }
`
