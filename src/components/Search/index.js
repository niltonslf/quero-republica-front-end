import React, { useState, useEffect } from 'react'

import './styles.css'

export default function Search(props) {
  const [term, setTerm] = useState('')

  useEffect(() => {})

  function search(event) {
    event.preventDefault()
    props.handleSearch(term)
  }

  return (
    <div className="search">
      <section className="search__body container">
        <h1 className="search__title">Encontre uma república massa!</h1>
        <p className="search__subtitle">
          Encontre repúblicas mais baratezas da região
        </p>
        <form>
          <input
            className="form-input"
            placeholder="Busque por cidade, nome ou estado"
            value={term}
            onChange={event => setTerm(event.target.value)}
          />
          <button className="btn" onClick={event => search(event)}>
            Pesquisar
          </button>
        </form>
      </section>
    </div>
  )
}
