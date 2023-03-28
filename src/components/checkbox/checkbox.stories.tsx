import React from "react"
import { storiesOf } from "@storybook/react"
import { Checkbox } from "."

const stories = storiesOf("Checkbox", module)

stories.add("Default", () => <Checkbox label="Direct flights only" />)
