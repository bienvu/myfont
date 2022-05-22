import React from 'react'
import { useStore, actions } from '../../store'
import './tabs.scss'

export default function Tabs() {
  const [state, dispatch] = useStore()
  const { types, tabs } = state

  return (
    <div className="cpnFont__header">
      <h2 className="title">Please select one font</h2>
      <ul className="tablist">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={types === tab.content_endpoint ? 'is-active' : ''}
          >
            <a
              href={tab.content_endpoint}
              onClick={(e) => {
                dispatch(actions.switchTabs(tab.content_endpoint))
                e.preventDefault()
              }}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
