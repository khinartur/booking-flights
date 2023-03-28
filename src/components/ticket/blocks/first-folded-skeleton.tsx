import React from "react"
import styled, { css } from "styled-components"
import { Skeleton } from "~/components/skeleton"
import { MOBILE_SCREEN_THRESHOLD } from "~/core/constants"
import { useMediaQuery } from "~/core/hooks/use-media-query"

export function FirstFoldedSkeleton() {
  const mobile = useMediaQuery(MOBILE_SCREEN_THRESHOLD)

  return (
    <Wrapper mobile={mobile}>
      <Airline mobile={mobile}>
        <Skeleton width={mobile ? 35 : 70} round />
        {!mobile && <Skeleton width="100%" height={15} />}
      </Airline>
      <Flight mobile={mobile}>
        <Skeleton width="100%" height={mobile ? 35 : 43} />
        <Bottom>
          {!mobile && (
            <PriceBlock>
              <Skeleton width={54} height={24} />
              <Skeleton width={150} height={15} />
            </PriceBlock>
          )}
          {mobile && <Skeleton width={62} height={36} />}
          <Skeleton width={165} height={36} />
        </Bottom>
      </Flight>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ mobile: boolean }>`
  display: flex;
  gap: ${p => (p.mobile ? 16 : 10)}px;
  width: 100%;
  height: 100%;
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
      padding-top: 6px;
    `};
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

const Flight = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: ${p => (p.mobile ? 18 : 12)}px;

  width: 100%;
`
