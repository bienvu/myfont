import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import Context from './Context'
import reducer, { initState } from './reducer'
import { actions } from '.'

// eslint-disable-next-line react/prop-types
export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState)
  const { types } = state

  // Function fetch data.
  async function fetchData(type, callback) {
    const { data } = await axios.get(`http://json.ffwagency.md/${type}`)
    console.log(data)
    dispatch(callback(data))
  }
  // async function fetchData(type, callback) {
  //   try {
  //     const requestUrl = `http://json.ffwagency.md/${type}`
  //     const response = await fetch(requestUrl)
  //     const responseJSON = await response.json()
  //     console.log(responseJSON)
  //     dispatch(callback(responseJSON))
  //   } catch (error) {
  //     console.log('error', error.message)
  //   }
  // }

  useEffect(() => {
    // Fetch data from API
    fetchData('tabs', actions.fetchApiTab)

    // Fetch font select from Localstorage
    const fontID = JSON.parse(localStorage.getItem('active'))
    dispatch(actions.selectFont(fontID))
  }, [])

  useEffect(() => {
    fetchData(types, actions.fetchFontTabs)
  }, [types])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}
