import React from "react"
import { storiesOf } from "@storybook/react"
import { Skeleton } from "."
import styled from "styled-components"

const stories = storiesOf("Skeleton", module)

stories.add("Default", () => (
    <Skeleton width={200} height={50} />
))
