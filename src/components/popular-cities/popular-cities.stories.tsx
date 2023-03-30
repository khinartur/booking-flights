import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"
import { PopularCities } from "./popular-cities"
import { getMockedPopularDestinations } from "~/mocks/utils/get-mocked-popular-destinations"

const stories = storiesOf("Popular cities carousel", module)

const onCityChoose = (city: string, date: string) => {}

stories.add("Default", () => (
  <PopularCities
    loading={boolean("loading", false)}
    from="Amsterdam"
    destinations={getMockedPopularDestinations("Schiphol International Airport", "Feb 18")}
    onCityChoose={onCityChoose}
  />
))
