import React from 'react'
import '../App.css'
export default function Button({setTips, val, setTip}) {
  return (
    <div><button onClick={() => setTip(setTips)}>{val}</button></div>
  )
}
