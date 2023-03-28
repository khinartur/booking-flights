import React from "react"
import styled from "styled-components"
import { Header } from "~/components/header"
import { SearchFormContainer } from "~/components/search-form/container"
import { TicketsList } from "~/components/tickets-list"
import { selectSearchCurrent, selectSearchLoading } from "~/features/search"
import { useAppSelector } from "~/store/hooks"

export function MainPage() {
  const ticketsLoading = useAppSelector(selectSearchLoading)
  const tickets = useAppSelector(selectSearchCurrent)

  console.log("TICKETS", tickets)

  return (
    <>
      <Header />
      <SearchFormContainer />
      <Wrapper>
        {ticketsLoading && (
          <Content>
            <Caption children="Searching for the best results..." />
            <TicketsList loading />
          </Content>
        )}
        {tickets && (
          <Content>
            <Caption children={`Showing ${tickets.length} results`} />
            <TicketsList tickets={tickets} />
          </Content>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1140px;
`

const Caption = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 130%;
  color: ${p => p.theme.colors.text};
`
