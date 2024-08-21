/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useTrail, a } from '@react-spring/web'

import '../module.css'

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={'trailsText'} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export const LoginImage = ({ texts }) => {
  const [localState, setLocalState] = useState(texts)
  useEffect(() => {
    set((state) => !state)
    setTimeout(() => setLocalState(texts), 1000)
  }, [texts])

  const [open, set] = useState(true)
  return (
    <div className={'container'} onClick={() => set((state) => !state)}>
      <Trail open={open}>
        {localState?.map((el, i) => (
          <span key={i}>{el}</span>
        ))}
      </Trail>
    </div>
  )
}
