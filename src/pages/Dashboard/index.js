import React, { useState } from 'react'

import Card from '../../components/Card'
import Header from '../../components/Header'
import Search from '../../components/Search'

import './styles.css'

export default function Dashboard() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6])

  return (
    <div className="container-wrap">
      <Header />
      <div className="container-body">
        <Search />

        <div className="cards container">
          {items.map(item => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  )
}
