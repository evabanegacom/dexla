import React from 'react'
import './App.css';
import vector from './assets/Vector.svg'
import designJson from './design.json';

const Page = () => {
  return (
    <>
      <div className='container__image-div'>
        <img src={vector} alt='vector' />
      </div>
      <p className='container__text-one'>{designJson.document.children[0].children[0].children[1].children[0].name}</p>
      <p className='container__text-two'>{designJson.document.children[0].children[0].children[1].children[1].name}</p>
    </>
  )
}

export default Page