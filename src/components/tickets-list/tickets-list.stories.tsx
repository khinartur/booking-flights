import React from "react"
import { storiesOf } from "@storybook/react"
import { TicketsList } from "."
import { boolean } from "@storybook/addon-knobs"
import { mockTicket } from "~/mocks/ticket"

const stories = storiesOf("Tickets list", module)

const tickets = [
  mockTicket,
  mockTicket,
  mockTicket,
  mockTicket,
  mockTicket,
]

stories.add("Default", () => <TicketsList tickets={tickets} loading={boolean("loading", false)} />)
