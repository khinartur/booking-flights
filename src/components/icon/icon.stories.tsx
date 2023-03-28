import React from "react"
import { storiesOf } from "@storybook/react"
import { select } from "@storybook/addon-knobs"
import { Icon } from "."

const stories = storiesOf("Icon", module)

stories.add("Default", () => (
  <Icon
    type={select("type", { landing: "landing", takeoff: "takeoff", calendar: "calendar" }, "takeoff")}
  />
))
