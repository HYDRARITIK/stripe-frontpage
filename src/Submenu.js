import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {showSubMenu,location,page:{page,links}}=useGlobalContext();
  const cont_ref=useRef(null);
  const [cols,setCols]=useState('col-2')
  useEffect(()=>{
    setCols('col-2')
    const submenu=cont_ref.current;
    const {center,bottom}=location;
    // submenu.style={
    //   left:`${center}px`,
    //   top:`${bottom}px`
    // }
    submenu.style.left=`${center}px`
    submenu.style.top=`${bottom}px`

    if(links.length===3){
      setCols('cols-3')
    }
    if(links.length>3){
      setCols('cols-4')
    }

  },[location,links])

  return <>
    <aside className={`${showSubMenu?'submenu show':'sidebar-wrapper'}`} ref={cont_ref}>
      <h4>{page}</h4>
      <div className={`submenu-center ${cols}`}>
        {
          links.map((link,index)=>{
            const {label,icon,url}=link;
            return <a key={index} href={url}>{icon}{label}</a>
          })
        }
      </div>
    </aside>
  </>
}

export default Submenu
