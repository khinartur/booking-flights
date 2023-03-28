import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean, select } from "@storybook/addon-knobs"
import { Button } from "."

const stories = storiesOf("Button", module)

stories.add("Default", () => (
  <Button
    skin={select("skin", { primary: "primary", secondary: "secondary" }, "primary")}
    size={select("size", { lg: "lg", md: "md", sm: "sm" }, "lg")}
    fluid={boolean("fluid", false)}
    children="Button"
  />
))
