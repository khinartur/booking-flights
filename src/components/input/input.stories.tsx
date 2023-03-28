import React from "react"
import { storiesOf } from "@storybook/react"
import { Input } from "."
import styled from "styled-components"
import { Icon } from "../icon"
import { boolean } from "@storybook/addon-knobs"
import { noop } from "~/core/utils/noop"
import { UseFormRegister } from "react-hook-form"

const stories = storiesOf("Input", module)

stories.add("Default", () => (
  <Wrapper>
    <Input error={boolean("error", false)} />
  </Wrapper>
))

stories.add("With icon", () => (
  <Wrapper>
    <Input left={<Icon type="calendar" />} error={boolean("error", false)} />
  </Wrapper>
))

const Wrapper = styled.div`
  padding: 50px;
  background-color: gray;
`
