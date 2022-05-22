import {
  FETCH_API_TABS,
  FETCH_FONT_TABS,
  SWITCH_TABS,
  SELECT_FONT,
} from './constants'

export const initState = {
  tabs: [],
  types: 'fonts_a',
  active: '',
  fontData: [],
}

function reducer(state, action) {
  switch (action.type) {
    case FETCH_API_TABS:
      return {
        ...state,
        tabs: action.payload,
      }
    case FETCH_FONT_TABS:
      return {
        ...state,
        fontData: action.payload,
      }
    case SWITCH_TABS:
      return {
        ...state,
        types: action.payload,
      }
    case SELECT_FONT:
      return {
        ...state,
        active: action.payload,
      }
    default:
      throw new Error('Invalid Action.')
  }
}

export default reducer
