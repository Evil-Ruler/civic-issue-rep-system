import React from 'react'
import data from './data.json'

const Dummy = () => {
    const list = data.data
  return (
    <>

      <div>
        {list.map((index) => (
            <li key={index.id}>
                <img src={index.image} alt="" />
                <span>{index.name}</span>
            </li>
        ))}
      </div>
    </>
  )
}

export default Dummy
