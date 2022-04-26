import React from 'react'
import '../App.css';
function Card({numCards, current, data}) {
    let name = data[current].name;
    let fullname = `${name.first} ${name.last}`;
  return (
    <div className='cardSection'>
        <h1 className='elementIndex'>{current + 1}/{numCards}</h1>
        <h1 className='elementName'>{fullname}</h1>
        <section className='infoSection'>
          <h3>From:</h3>
          <p> {data[current].city}, {data[current].country}</p>
        </section>
        <section className='infoSection'>
          <h3>Job Title: </h3>
          <p> {data[current].title}</p>
        </section>
        <section className='infoSection'>
          <h3>Employer: </h3>
          <p> {data[current].employer}</p>
        </section>
        <section className="infoSection">
          <ol>
            <h3>Favorite Movies: </h3>
            {data[current].favoriteMovies.map((movie, index) => <li key={index}>{movie}</li>)}
          </ol>
        </section>
      </div>
  )
}

export default Card