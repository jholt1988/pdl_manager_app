'use client'
import React from 'react';
import { Paper, Box, } from '@mui/material';
import styles from '../../tenant/page.module.css'
import { usePathname} from 'next/navigation';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import PageNav from '@/app/components/basic/nav/pagenav'
export default function Tenantnav (props) {
    const links = [
        {
        href: '/tenant', 
        label:'Tenant Dashboard'
         }, 
         {
           href:'/tenant/tenantinfo' ,
           label: 'Tenant Info' 
         }, 
         {
            href:'/tenant/addTenant', 
            label: 'Add Tenant'
         }, 
         {
            href:'/tenant/edittenant', 
            label:'Edit Tenant'
         }

]

    return (
        <>
        <PageNav links={links}/>

        </>
    )
}