import React from "react"
import Slider, { CustomArrowProps, Settings } from "react-slick"
import styled, { css } from "styled-components"
import { MOBILE_SCREEN_THRESHOLD } from "~/core/constants"
import { useMediaQuery } from "~/core/hooks/use-media-query"
import { PopularDestination } from "~/features/app/domain"
import { Icon } from "../icon"
import { Skeleton } from "../skeleton"
import { Slide } from "./slide"

// @todo: make advanced type
export type PopularCitiesProps = {
  loading: boolean
  from: string
  destinations?: PopularDestination[]
  onCityChoose: (city: string, date: string) => void
}

export function PopularCities({ loading, from, destinations, onCityChoose }: PopularCitiesProps) {
  const isMobile = useMediaQuery(MOBILE_SCREEN_THRESHOLD)
  const slidesCount = isMobile ? 2 : 4

  if (loading) {
    return <SliderSkeleton slidesCount={slidesCount} />
  }

  if (!destinations) {
    return null
  }

  const sliderSettings: Settings = {
    dots: false,
    infinite: false,
    slidesToShow: slidesCount,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrow flipped />,
    prevArrow: <SliderArrow />,
  }

  return (
    <Container>
      <Header>
        <Caption children="Trending cities" />
        <Description children={`Book flights to a destination popular with travelers from ${from}`} />
      </Header>
      <SliderView {...sliderSettings}>
        {destinations.map((destination, idx) => (
          <Slide key={idx} destination={destination} onClick={onCityChoose} />
        ))}
      </SliderView>
    </Container>
  )
}

type SliderSkeletonProps = {
  slidesCount: number
}

function SliderSkeleton({ slidesCount }: SliderSkeletonProps) {
  const sliderSettings: Settings = {
    arrows: false,
    slidesToShow: slidesCount,
  }

  return (
    <Container>
      <Header>
        <Skeleton width={175} height={31} />
        <Skeleton width={546} height={21} />
      </Header>
      <SliderView {...sliderSettings}>
        {new Array(slidesCount).fill(null).map((_, idx) => (
          <Slide loading key={idx} />
        ))}
      </SliderView>
    </Container>
  )
}

type SliderArrowProps = CustomArrowProps & {
  flipped?: boolean
}

function SliderArrow({ onClick, flipped = false }: SliderArrowProps) {
  return (
    <Arrow onClick={onClick} flipped={flipped}>
      <Icon type="chevron-left" />
    </Arrow>
  )
}

const Arrow = styled.div<{ flipped: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: ${p => p.theme.colors.white};
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 1;

  ${p =>
    p.flipped
      ? css`
          right: 0;
          transform: translateY(-50%) rotate(180deg);
        `
      : css`
          left: 0;
          transform: translateY(-50%);
        `}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  color: ${p => p.theme.colors.text};
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

const Caption = styled.span`
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
`

const Description = styled.span`
  font-size: 16px;
  line-height: 1.3;
`

const SliderView = styled(Slider)`
  margin: 0 -8px;
`
