import React from "react"
import { storiesOf } from "@storybook/react"
import { Ticket } from "."
import { mockTicket } from "~/mocks/ticket"
import styled from "styled-components"
import { boolean } from "@storybook/addon-knobs"

const stories = storiesOf("Ticket", module)

stories.add("Direct", () => (
  <Wrapper>
    <Ticket ticket={mockTicket} loading={boolean("loading", false)} />
  </Wrapper>
))

const Wrapper = styled.div`
  max-width: 560px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
