import React from 'react'
import { TbNorthStar } from 'react-icons/tb'
import { CgOptions } from 'react-icons/cg'

const Navbar = () => {
  return (
    <div id="navbar">
      <TbNorthStar className="logo" size={36} />
      <button className="settings-btn">
        <CgOptions size={24} />
      </button>
    </div>
  )
}
export default Navbar
