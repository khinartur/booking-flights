import { Luggage } from "~/features/app/domain";

export function formatLuggageToStr(luggage: Luggage[]): string {
  let res = ""

  luggage.forEach(l => {
    const s = l.weightKgs + "kg"
    res += (res && " + ") + s
  })

  return res || "No luggage"
}
