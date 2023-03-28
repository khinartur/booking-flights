import { LOCAL_STORAGE_KEY } from "~/core/constants"
import { AppState } from "~/features/app/domain"

export function getInitialAppState(defaultState: AppState): AppState {
  try {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (value) {
      const state = JSON.parse(value)
      return state as AppState
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultState))
  } catch {}

  return defaultState
}

export function saveAppStateInStorage(state: AppState) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
}
