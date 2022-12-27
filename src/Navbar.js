import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar,closeSubMenu,openSubMenu}=useGlobalContext();


const displaySubmenu=(e)=>{
  const page=e.target.textContent;
  const BtnInfo=e.target.getBoundingClientRect()
  // console.log(BtnInfo)
  const center=(BtnInfo.left+BtnInfo.right)/2;
  const bottom=BtnInfo.bottom-3;

  
  openSubMenu(page,{center,bottom})
}

const handleSubmenu=(e)=>{
 if(!e.target.classList.contains('link-btn')){
  closeSubMenu()
 }
}


  return <>
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt='stripe-logo' className='nav-logo'/>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
      <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>




  </>
}

export default Navbar
