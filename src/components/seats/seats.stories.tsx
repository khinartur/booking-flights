import React from "react"
import { storiesOf } from "@storybook/react"
import { Seats } from "."
import styled from "styled-components"

const stories = storiesOf("Seats", module)

stories.add("Default", () => (
  <Wrapper>
    <Seats />
  </Wrapper>
))

const Wrapper = styled.div`
  padding: 50px;
`
