import React from "react"
import styled from "styled-components"
import { Header } from "~/components/header"
import { PopularCitiesContainer } from "~/components/popular-cities/container"
import { SearchFormContainer } from "~/components/search-form/container"
import { TicketsList } from "~/components/tickets-list"
import { selectSearchCurrent, selectSearchLoading } from "~/features/search"
import { useAppSelector } from "~/store/hooks"

export function MainPage() {
  const ticketsLoading = useAppSelector(selectSearchLoading)
  const tickets = useAppSelector(selectSearchCurrent)

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
`

const TicketsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1140px;
  margin-top: 16px;
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
  font-size: 32px;
  line-height: 130%;
  color: ${p => p.theme.colors.text};
`
