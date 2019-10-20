import React from 'react'
import './styles.css'

export default function Card(props) {
  return (
    <article className="card">
      <img src={props.data.picture} alt={props.data.name} />
      <div className="card__body">
        <h2>{props.data.name}</h2>
        <p>R$ {props.data.price}</p>
        <p>
          {props.data.city} - {props.data.state}
        </p>
      </div>
    </article>
  )
}
