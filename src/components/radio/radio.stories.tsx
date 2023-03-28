import React from "react"
import { storiesOf } from "@storybook/react"
import { Radio } from "."
import styled from "styled-components"

const stories = storiesOf("Radio", module)

stories.add("Default", () => (
  <Wrapper>
    <Radio name="route" label="Round-trip" />
    <Radio name="route" label="One-way" />
  </Wrapper>
))

const Wrapper = styled.div`
  display: flex;

  & > * {
    margin-right: 12px;
  }
`
