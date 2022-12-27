import React, { useState, useContext, Children } from 'react'
import sublinks from './data'


const AppContext=React.createContext();

export const AppProvider=({children})=>{

    const [showSidebar,setShowSidebar]=useState(false)
    const [showSubMenu,setShowSubMenu]=useState(false)
    const [location,setLocation]=useState({})
    const [page,setPage]=useState({
        page:'',
        links:[]
    })

    const openSidebar=()=>{
        setShowSidebar(true)
    }
    const closeSidebar=()=>{
        setShowSidebar(false)
    }
    const openSubMenu=(text,coordinates)=>{
        const page=sublinks.find((link)=>{
            return link.page===text
        })
        setPage(page)

        setLocation(coordinates)
        setShowSubMenu(true)
    }
    const closeSubMenu=()=>{
        setShowSubMenu(false)
    }


const globalThings={showSubMenu,
    showSidebar,openSubMenu,
    openSidebar,closeSubMenu
,closeSidebar,location,page}






    return <AppContext.Provider value={globalThings}>
        {children}
    </AppContext.Provider>
}

//custom hook

export const useGlobalContext=()=>{
    return useContext(AppContext)
}





