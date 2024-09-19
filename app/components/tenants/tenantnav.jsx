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
        label:'Tenant Dashboard', 
        key:'tenant_base'
         }, 
         {
           href:'/tenant/tenantinfo' ,
           label: 'Tenant Info' ,
           key:'tenant_info'
         }, 
         {
            href:'/tenant/addTenant', 
            label: 'Add Tenant', 
            key:'tenant_add'
         }, 
         {
            href:'/tenant/edittenant', 
            label:'Edit Tenant',
            key: 'tenant_edit'
         }

]

    return (
        <>
        <PageNav links={links}/>

        </>
    )
}