import React, { useEffect } from 'react'
import './ConnectThree.css'
import { startAll } from './ConnectThree'

const ConnectThree = () => {
  useEffect(() => {
    startAll()
  }, [])

  return (
    <>
      <div id="large-header" className="large-header">
        <canvas id="demo-canvas"></canvas>
        <h1 className="main-title">Connect <span className="thin">Three</span></h1>
      </div>
    </>
  )
}

export default ConnectThree
