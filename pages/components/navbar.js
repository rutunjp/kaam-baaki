import React from 'react'
import { TbNorthStar } from 'react-icons/tb'
import { RiSettingsFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div id="navbar">
      <TbNorthStar className="logo" size={36} />
      <button onClick={() => console.log('btn click')} className="settings-btn">
        <RiSettingsFill size={18} />
      </button>
    </div>
  )
}
export default Navbar
