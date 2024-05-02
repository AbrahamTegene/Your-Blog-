import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Avater1 from '../images/avatar1.jpg'
import Avater2 from '../images/avatar2.jpg'
import Avater3 from '../images/avatar3.jpg'
import Avater4 from '../images/avatar4.jpg'
import Avater5 from '../images/avatar5.jpg'

const authorsData =[
  {id:1, avatar:Avater1, name:'Afro Hikers Blogs', posts:3},
  {id:2, avatar:Avater2, name:'Jone Bloger', posts:1},
  {id:3, avatar:Avater3, name:'Abysinia Bloger', posts:0},
  {id:4, avatar:Avater4, name:'Jamila Blog', posts:2},
  {id:5, avatar:Avater5, name:'Infulencer Blog', posts:9}
  
]

const Authors = () => {
  const [authors,setAuthors] = useState(authorsData)

  return (
  <section className="authors">
    {authors.length > 0 ?<div className="container authors__container">
      {
        authors.map(({id,avatar,name,posts}) => {
          return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
          </Link>
        })
      }
    </div> : <h2 className='center'>No Users/Authors found.</h2>}
  </section>  )
}

export default Authors