import React from 'react'
import './Container.css'

const Container: React.FC = ({ children }) => {
  return <main className="Container">{children}</main>
}

export default Container
