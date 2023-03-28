import React from "react"
import styled from "styled-components"
import { Ticket as TicketType } from "~/features/app/domain"
import { Ticket } from "../ticket"

export type TicketsListProps = {
  loading?: boolean
  tickets?: TicketType[]
}

export function TicketsList({ loading, tickets = [] }: TicketsListProps) {
  return (
    <Container>
      {loading && <TicketsListPlaceholder />}
      {!loading && tickets.map((ticket, idx) => <Ticket key={idx} ticket={ticket} />)}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: ${p => p.theme.breakpoints.mobile}) {
    gap: 8px;
  }
`

const TicketsListPlaceholder = () => {
  const res = []
  for (let i = 0; i < 8; i++) {
    res.push(<Ticket loading />)
  }

  return <>{res}</>
}
