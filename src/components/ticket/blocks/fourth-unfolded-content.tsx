import React, { useCallback } from "react"
import styled from "styled-components"
import { Button } from "~/components/button"
import { MOBILE_SCREEN_THRESHOLD } from "~/core/constants"
import { useMediaQuery } from "~/core/hooks/use-media-query"
import type { Ticket } from "~/features/app/domain"

export type FourthUnfoldedContentProps = {
  ticket: Ticket
}

export function FourthUnfoldedContent({ ticket }: FourthUnfoldedContentProps) {
  const {
    totalPrice: { currency, value },
  } = ticket

  const isMobile = useMediaQuery(MOBILE_SCREEN_THRESHOLD)

  const onBuyClick = useCallback((evt: React.MouseEvent) => {
    evt.stopPropagation()
    window.alert("Payments page is coming soon!")
  }, [])

  return (
    <Wrapper>
      <Button size={isMobile ? "md" : "sm"} fluid onClick={onBuyClick} children={"Buy for " + currency + value} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
