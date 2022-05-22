import {
  FETCH_API_TABS,
  FETCH_FONT_TABS,
  SWITCH_TABS,
  SELECT_FONT,
} from './constants'

export const fetchApiTab = (payload) => ({
  type: FETCH_API_TABS,
  payload,
})

export const fetchFontTabs = (payload) => ({
  type: FETCH_FONT_TABS,
  payload,
})

export const switchTabs = (payload) => ({
  type: SWITCH_TABS,
  payload,
})

export const selectFont = (payload) => ({
  type: SELECT_FONT,
  payload,
})
