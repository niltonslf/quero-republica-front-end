import React, { useState, useEffect } from 'react'

import DashboardService from '../../services/DashboardService'

import Card from '../../components/Card'
import Header from '../../components/Header'
import Search from '../../components/Search'

import './styles.css'

export default function Dashboard() {
  const [republics, setRepublics] = useState([])

  useEffect(() => {
    fetchRepublics()
  }, [])

  async function fetchRepublics() {
    const res = await DashboardService.fetchAll()
    setRepublics(res.body)
  }

  async function handleSearch(term) {
    console.log('term:', term)
    if (!term.length) fetchRepublics()
    const res = await DashboardService.filter(term)

    setRepublics(res)
  }

  return (
    <div className="container-wrap">
      <Header />
      <div className="container-body">
        <Search handleSearch={handleSearch} />

        <div className="cards container">
          {republics.length === 0 ? (
            <div className="alert">
              Opps!! nenhuma república foi encontrada :/
            </div>
          ) : null}

          {republics.map((republic, index) => (
            <Card key={index} data={republic} />
          ))}
        </div>
      </div>
    </div>
  )
}
