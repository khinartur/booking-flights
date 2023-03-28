import React from "react"
import { storiesOf } from "@storybook/react"
import { SearchForm } from "./search-form"
import { noop } from "~/core/utils/noop"

const stories = storiesOf("Search form", module)

stories.add("Default", () => <SearchForm onSubmit={noop} />)
