import React from "react"
import styled from "styled-components"
import { Icon } from "~/components/icon"
import type { Ticket } from "~/features/app/domain"

export type FirstUnfoldedContentProps = {
  ticket: Ticket
}

export function FirstUnfoldedContent({ ticket }: FirstUnfoldedContentProps) {
  const { direct, returning } = ticket
  const { from, to } = direct

  return (
    <Wrapper>
      <From>
        <Label children="From" />
        <AirportWrapper>
          <AirportAbbr children={from.airport.short} />
          <Icon type="takeoff" />
        </AirportWrapper>
        <AirportName children={from.airport.name} />
      </From>
      <Hr />
      <To>
        <Label children="To" />
        <AirportWrapper>
          <Icon type="landing" />
          <AirportAbbr children={to.airport.short} />
        </AirportWrapper>
        <AirportName children={to.airport.name} />
      </To>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: minmax(0, 1fr) 50% minmax(0, 1fr);
  align-items: center;
`

const Point = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 100%;
`

const From = styled(Point)`
  align-items: flex-start;
`

const To = styled(Point)`
  align-items: flex-end;
  text-align: right;
`

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.secondary};
`

const Label = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${p => p.theme.colors.text};
`

const AirportWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

const AirportAbbr = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  color: ${p => p.theme.colors.text};
`

const AirportName = styled.span`
  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${p => p.theme.colors.textSecondary};

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 10px;
  }
`
