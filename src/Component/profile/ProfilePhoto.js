import React from 'react'
import img from '../../imagee/myself.jpg'
const ProfilePhoto = () => {
  return (
    <div>
        <img className="myphoto" src={img} alt="profile photo" />
    </div>
  )
}

export default ProfilePhoto
