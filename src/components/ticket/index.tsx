import React, { useCallback, useState } from "react"
import styled from "styled-components"
import type { Ticket } from "~/features/app/domain"
import { FirstFoldedContent } from "./blocks/first-folded-content"
import { FirstFoldedSkeleton } from "./blocks/first-folded-skeleton"
import { FirstUnfoldedContent } from "./blocks/first-unfolded-content"
import { FourthUnfoldedContent } from "./blocks/fourth-unfolded-content"
import { SecondUnfoldedContent } from "./blocks/second-unfolded-content"
import { ThirdUnfoldedContent } from "./blocks/third-unfolded-content"

export type TicketProps = {
  loading?: boolean
  ticket?: Ticket
}

export function Ticket({ ticket, loading }: TicketProps) {
  const [folded, setFolded] = useState(true)

  const onClick = useCallback(() => {
    if (!loading) {
      setFolded(prev => !prev)
    }
  }, [loading])

  if (loading) {
    return (
      <Container folded loading>
        <First folded>
          <FirstFolded>
            <FirstFoldedSkeleton />
          </FirstFolded>
        </First>
      </Container>
    )
  }

  if (!ticket) {
    return null
  }

  return (
    <Container folded={folded} loading={loading} onClick={onClick}>
      <FirstUnfolded>
        <FirstUnfoldedContent ticket={ticket} />
      </FirstUnfolded>
      <First folded={folded}>
        <FirstFolded>
          <FirstFoldedContent ticket={ticket} />
        </FirstFolded>
        <SecondUnfolded>
          <SecondUnfoldedDisplay>
            <SecondUnfoldedContent ticket={ticket} />
          </SecondUnfoldedDisplay>
          <Third folded={folded}>
            <ThirdUnfoldedTop />
            <ThirdUnfolded>
              <ThirdUnfoldedDisplay>
                <ThirdUnfoldedContent ticket={ticket} />
              </ThirdUnfoldedDisplay>
              <Fourth folded={folded}>
                <FourthUnfoldedTop />
                <FourthUnfolded>
                  <FourthUnfoldedContent ticket={ticket} />
                </FourthUnfolded>
              </Fourth>
            </ThirdUnfolded>
          </Third>
        </SecondUnfolded>
      </First>
    </Container>
  )
}

const Container = styled.div<{ folded: boolean; loading?: boolean }>`
  position: relative;
  width: 100%;
  max-width: 768px;
  height: ${p => (p.folded ? 126 : 442)}px;
  cursor: ${p => (p.loading ? "auto" : "pointer")};
  transform-origin: bottom;
  transition: 0.9s;

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: ${p => (p.folded ? 110 : 390)}px;
  }
`

const FirstUnfolded = styled.div`
  width: 100%;
  height: 126px;
  position: absolute;
  padding: 16px 28px;
  box-sizing: border-box;
  background: white;
  border-radius: 8px;
  backface-visibility: hidden;
  box-shadow: 0px 0px 25px -1px rgba(0, 0, 0, 0.17);

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: 110px;
    padding: 8px 16px;
  }
`

const First = styled.div<{ folded: boolean }>`
  display: flex;
  width: 100%;
  height: 126px;
  position: absolute;
  color: #000;
  border-radius: 8px;
  transform: ${p => (p.folded ? "rotate3d(1, 0, 0, 0deg)" : "rotate3d(1, 0, 0, -180deg)")};
  transform-origin: bottom;
  transform-style: preserve-3d;
  transition: 0.5s;
  transition-delay: ${p => (p.folded ? "0.3s" : "0s")};

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: 110px;
  }
`

const FirstFolded = styled.div`
  width: 100%;
  height: 126px;
  position: absolute;
  background: #ffffff;
  backface-visibility: hidden;
  border-radius: 8px;
  padding: 16px 28px;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px 0px rgba(132, 132, 132, 0.15);

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: 110px;
    padding: 8px 16px;
  }
`

const SecondUnfolded = styled.div`
  width: 100%;
  height: 126px;
  position: absolute;
  background: #fff;
  transform-origin: center;
  transform: rotate3d(1, 0, 0, -180deg);
  backface-visibility: hidden;
  border-radius: 8px;
  border: 1px dashed #d1d1d1;
  border-left: none;
  border-right: none;

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: 110px;
  }
`

const SecondUnfoldedDisplay = styled.div`
  width: 100%;
  height: 126px;
  position: absolute;
  background: #fff;
  border-radius: 8px;
  padding: 16px 28px;
  box-sizing: border-box;
  box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: 110px;
    padding: 8px 16px;
  }
`

const Third = styled.div<{ folded: boolean }>`
  width: 100%;
  height: 126px;
  position: absolute;
  bottom: -2px;
  transform-origin: bottom;
  transform-style: preserve-3d;
  transition: 0.2s;
  border-radius: 8px;
  transform: ${p => (p.folded ? "rotate3d(1, 0, 0, 0deg)" : "rotate3d(1, 0, 0, -180deg)")};
  transition-delay: ${p => (p.folded ? "0.2s" : "0.2s")};

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: 110px;
  }
`

const ThirdUnfoldedTop = styled.div`
  width: 100%;
  height: 126px;
  position: absolute;
  background: rgb(231, 231, 231);
  backface-visibility: hidden;
  border-radius: 8px;

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: 110px;
  }
`

const ThirdUnfolded = styled.div`
  width: 100%;
  height: 126px;
  position: absolute;
  background: #fff;
  transform-origin: center;
  transform: rotate3d(1, 0, 0, -180deg);
  backface-visibility: hidden;
  border-radius: 8px;
  border: 1px dashed #d1d1d1;
  border-left: none;
  border-right: none;

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: 110px;
  }
`

const ThirdUnfoldedDisplay = styled.div`
  width: 100%;
  height: 126px;
  position: absolute;
  background: #fff;
  border-radius: 8px;
  border-bottom: 1px dashed #d1d1d1;
  padding: 16px 28px;
  box-sizing: border-box;
  box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    height: 110px;
    padding: 8px 16px;
  }
`

const Fourth = styled.div<{ folded: boolean }>`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  transform-origin: bottom;
  transform-style: preserve-3d;
  transition: 0.2s;
  border-radius: 8px;
  transform: ${p => (p.folded ? "rotate3d(1, 0, 0, 0deg)" : "rotate3d(1, 0, 0, -180deg)")};
  transition-delay: ${p => (p.folded ? "0s" : "0.4s")};
`

const FourthUnfoldedTop = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  background: rgb(190, 190, 190);
  backface-visibility: hidden;
  border-radius: 8px;
`

const FourthUnfolded = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  background: #fff;
  transform-origin: center;
  transform: rotate3d(1, 0, 0, -180deg);
  backface-visibility: hidden;
  border-radius: 8px;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0px 11px 25px -1px rgba(0, 0, 0, 0.17);
`
