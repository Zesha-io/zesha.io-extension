import React from 'react'
import ShareIcon from '../Icons/ShareIcon'

const Header = () => {
  return (
    <div className='header'>
        <img src='/images/Logomain.svg' width={80} height={30} />

        <button className='share-btn'><ShareIcon/></button>
    </div>
  )
}

export default Header