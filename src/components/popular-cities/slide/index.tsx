import React from "react"
import styled from "styled-components"
import { Image } from "~/components/image"
import { Skeleton } from "~/components/skeleton"
import { PopularDestination } from "~/features/app/domain"

// @todo: make advanced type
export type SlideProps = {
  loading?: boolean
  destination?: PopularDestination
  onClick?: (city: string, date: string) => void
}

export function Slide({ loading = false, destination, onClick }: SlideProps) {
  if (loading) {
    return <SlideSkeleton />
  }

  if (!destination) {
    return null
  }

  const { city, image, departureAirport, date, tripType } = destination

  return (
    <Container onClick={() => onClick && onClick(city, date)}>
      <Image src={image} height={200} radius={8} />
      <Footer>
        <City children={city} />
        <Text children={`Flights from ${departureAirport}`} />
        <Text children={`${date} · ${tripType === "one-way" ? "One-way trip" : "Return trip"}`} />
      </Footer>
    </Container>
  )
}

function SlideSkeleton() {
  return (
    <Container>
      <Skeleton width="100%" height={200} />
      <Footer>
        <Skeleton width="100%" height={21} />
        <Skeleton width="100%" height={21} />
        <Skeleton width="100%" height={21} />
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  margin: 0 8px;
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

const City = styled.span`
  font-size: 16px;
  line-height: 1.3;
  font-weight: 600;
`

const Text = styled.span`
  font-size: 14px;
  line-height: 1.3;
`
