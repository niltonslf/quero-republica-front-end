import React from 'react'

import './styles.css'

export default function Search() {
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
            placeholder="Digite nome da sua cidade"
          />
          <button class="btn">Pesquisar</button>
        </form>
      </section>
    </div>
  )
}
