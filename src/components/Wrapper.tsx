import React from 'react'
import '../styles/wrapper.css'

export default function Wrapper(props: any) {
  return <div className="wrapper">{props.children}</div>
}
