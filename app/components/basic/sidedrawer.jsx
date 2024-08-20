'use client'
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import SideMenu from '@/app/components/menu';
import { MenuOutlined} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import styles from '@/app/styles/layout.module.css'

export default function Sidedrawer (props) {
    const [anchorEl, setAnchorEl] = useState(null)
    const [toggleOpen, setToggleOpen] = useState(false)
    const toggleDrawer = () => {
        if(toggleOpen === true){
        
         setToggleOpen(false)
    
        }
        if(toggleOpen === false){
        
         setToggleOpen(true)
         
        }
    }
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        toggleDrawer()
    }
    const handleClose = () => {
        setAnchorEl(null)
        toggleDrawer()
    }
    return (
        <div className={styles.nav}> 
        <IconButton onClick={handleClick} ><MenuOutlined/> </IconButton>
        <Drawer
          variant="persistent"
          anchor="left"
          open={toggleOpen}
          
        >
            <SideMenu open={toggleOpen} onClose={handleClose} anchorEl={anchorEl}/>
          
        </Drawer>
        
        </div>
    )
}