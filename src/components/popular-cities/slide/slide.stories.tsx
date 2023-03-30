import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"
import { Slide } from "."
import { getMockedPopularDestinations } from "~/mocks/utils/get-mocked-popular-destinations"

const stories = storiesOf("Popular city slide", module)

const onClick = (city: string, date: string) => {}

stories.add("Default", () => (
  <Wrapper>
    <Slide
      destination={getMockedPopularDestinations("Schiphol International Airport", "Feb 18")[0]}
      loading={boolean("loading", false)}
      onClick={onClick}
    />
  </Wrapper>
))

const Wrapper = styled.div`
  width: 260px;
`
