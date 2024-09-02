'use client'
import React from 'react';
import Menu from '@mui/material/Menu'
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import Link from 'next/link';
import GroupOutlined from '@mui/icons-material/GroupOutlined'
import  ApartmentOutlined  from '@mui/icons-material/ApartmentOutlined';
import  ArticleIconOutlined from '@mui/icons-material/Article';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import styles from '@/app/styles/layout.module.css'
import { usePathname } from 'next/navigation';

export default function SideMenu (props) {
    
    const pathname = usePathname()
    return (
        <>
            <Menu id="side_menu" anchorEl={props.anchorEl} keepMounted open={props.open} onClose={props.onClose}>
                <MenuList>
                    <MenuItem key='tenant'>
                    <Link  onClick={props.onClose} className={`${styles.link} ${pathname === "/tenant" ? styles.active : ""}`} href='/tenant'>
                  <ListItemIcon><GroupOutlined /></ListItemIcon>
                  <ListItemText>Tenants</ListItemText>
                    </Link>
                    </MenuItem>
                    <MenuItem key='property'>
                    <Link  className={`${styles.link} ${pathname === "/property" ? styles.active : ""}`} href='/property'>
                     <ListItemIcon><ApartmentOutlined /></ListItemIcon>
                    <ListItemText>Properties</ListItemText>
                    </Link>
                    </MenuItem>
                    <MenuItem key='leases'>
                    <Link onClick={props.onClose}className={`${styles.link} ${pathname === "/leases" ? styles.active : ""}`} href='/properties'>
                    <ListItemIcon><ArticleIconOutlined /></ListItemIcon>
                    <ListItemText>Leases</ListItemText>
                    </Link>
                    </MenuItem>
                    <MenuItem key='work_orders'>
                    <Link onClick={props.onClose}className={`${styles.link} ${pathname === "/workorders" ? styles.active : ""}`} href='/properties'>
                    <ListItemIcon><HomeRepairServiceOutlinedIcon /></ListItemIcon>
                    <ListItemText>Repair/Maintenance Work</ListItemText>
                    </Link>
                    </MenuItem>
                    <MenuItem key='expense'>
                    <Link onClick={props.onClose}className={`${styles.link} ${pathname === "/expense" ? styles.active : ""}`} href='/properties'>
                    <ListItemIcon><AccountBalanceOutlinedIcon /></ListItemIcon>
                    <ListItemText>Expense/Payment</ListItemText>
                    </Link>
                    </MenuItem>
                    
                </MenuList>
              
            </Menu>
            
        </>
    )
}