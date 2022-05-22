import React from 'react'
import { useStore, actions } from '../../store'
import './tabcontent.scss'

export default function TabsContent() {
  const [state, dispatch] = useStore()
  const { fontData, active } = state

  return (
    <div className="cpnFont__content">
      {fontData.type === 'Text' && fontData.content}
      {fontData.type === 'Font selection' &&
        fontData.content.map((item) => (
          <a
            href={item.abbr}
            key={item.id}
            className={active === item.id ? 'fontList is-active' : 'fontList'}
            onClick={(e) => {
              dispatch(actions.selectFont(item.id))
              const keyID = JSON.stringify(item.id)
              localStorage.setItem('active', keyID)
              e.preventDefault()
            }}
          >
            <span className="fontList__key">
              <span style={{ backgroundColor: item.color }}>{item.abbr} </span>
            </span>
            <span className="fontList__text">{item.label} </span>
          </a>
        ))}
    </div>
  )
}
