import React from "react"
import styled, { css } from "styled-components"
import { Button } from "~/components/button"
import { MOBILE_SCREEN_THRESHOLD } from "~/core/constants"
import { useMediaQuery } from "~/core/hooks/use-media-query"
import { capitalize } from "~/core/utils/capitalize"
import { formatDateStrToDayAndTime } from "~/core/utils/date"
import type { Airport, RouteType, Ticket } from "~/features/app/domain"
import { AirlineLogo } from "./airline-logo"

export type FirstFoldedContentProps = {
  ticket: Ticket
}

export function FirstFoldedContent({ ticket }: FirstFoldedContentProps) {
  const { direct, returning, totalPrice } = ticket
  const { stops, type, departureDate, from, arrivalDate, to, totalDuration } = direct
  const { airline } = stops[0]

  const isMobile = useMediaQuery(MOBILE_SCREEN_THRESHOLD)

  return (
    <Wrapper mobile={isMobile}>
      <Airline mobile={isMobile}>
        <AirlineLogo src={airline.logoAvatarUrl} />
        <AirlineName mobile={isMobile} children={airline.name} />
      </Airline>
      <Flight mobile={isMobile}>
        <Schedule
          type={type}
          departureDateStr={departureDate}
          departureAirport={from.airport}
          arrivalDateStr={arrivalDate}
          arrivalAirport={to.airport}
          duration={totalDuration}
        />
        <Bottom>
          <PriceBlock>
            <Price children={totalPrice.currency + totalPrice.value} />
            <TotalPriceLabel children={isMobile ? "Total price" : "Total price for all travelers"} />
          </PriceBlock>
          <Button skin="secondary" size="sm" children="See flight" />
        </Bottom>
      </Flight>
    </Wrapper>
  )
}

type ScheduleProps = {
  type: RouteType
  departureDateStr: string
  departureAirport: Airport
  arrivalDateStr: string
  arrivalAirport: Airport
  duration: string
}

function Schedule({
  type,
  departureDateStr,
  departureAirport,
  arrivalDateStr,
  arrivalAirport,
  duration,
}: ScheduleProps) {
  const [depDay, depTime] = formatDateStrToDayAndTime(departureDateStr)
  const [arrDay, arrTime] = formatDateStrToDayAndTime(arrivalDateStr)

  return (
    <ScheduleWrapper>
      <PointLeft>
        <Time children={depTime} />
        <AirportAndDate children={`${departureAirport.short} ∙ ${depDay}`} />
      </PointLeft>
      <Timeline>
        <Duration children={duration} />
        <Hr />
        <Type children={capitalize(type)} />
      </Timeline>
      <PointRight>
        <Time children={arrTime} />
        <AirportAndDate children={`${arrivalAirport.short} ∙ ${arrDay}`} />
      </PointRight>
    </ScheduleWrapper>
  )
}

const Wrapper = styled.div<{ mobile: boolean }>`
  display: flex;
  gap: ${p => p.mobile ? 16 : 10}px;
  width: 100%;
  height: 100%;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`

const Price = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${p => p.theme.colors.text};
`

const TotalPriceLabel = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${p => p.theme.colors.textSecondary};
`

const Airline = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  width: 100px;

  ${p =>
    p.mobile &&
    css`
      width: auto;
      justify-content: start;
      padding-top: 4px;
    `};
`

const Flight = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;

  width: 100%;
`

const AirlineName = styled.span<{ mobile: boolean }>`
  font-size: 12px;
  line-height: 1.3;

  ${p =>
    p.mobile &&
    css`
      display: none;
    `};
`

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
`

const Point = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2px;
`

const PointLeft = styled(Point)`
  align-items: flex-start;
`

const PointRight = styled(Point)`
  align-items: flex-end;
`

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 6px;
`

const Duration = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${p => p.theme.colors.text};
`

const Type = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${p => p.theme.colors.text};
`

const Time = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 130%;
  color: ${p => p.theme.colors.text};
`

const AirportAndDate = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${p => p.theme.colors.text};
`

// @todo: separate into component
const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.secondary};
`
