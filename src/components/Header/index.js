import React from 'react'

import './styles.css'
import Logo from '../../assets/logo.png'

export default function Header() {
  return (
    <div className="header-container">
      <header className="header container">
        <img src={Logo} className="header__logo" alt="Quero república" />
        <ul>
          <li className="active">Home</li>
          <li>Example 01</li>
        </ul>
      </header>
    </div>
  )
}
