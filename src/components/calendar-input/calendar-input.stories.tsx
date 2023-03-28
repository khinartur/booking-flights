import React from "react"
import { storiesOf } from "@storybook/react"
import { CalendarInput } from "."
import styled from "styled-components"

const stories = storiesOf("Calendar input", module)

stories.add("Default", () => (
  <Wrapper>
    <CalendarInput />
  </Wrapper>
))

const Wrapper = styled.div`
  padding: 50px;
  background-color: gray;
`
