'use client'
import React from 'react';
import PageNav from '@/app/components/basic/nav/pagenav';

export default function LeaseNav (props) {
    const links = [
        {
        key:'lease_base',
        href: '/lease', 
        label:'Lease Dashboard'
         }, 
         {
            key:'lease_info',
           href:'/lease/leaseinfo' ,
           label: 'Lease Info' 
         }, 
         {
            key:'lease_add',
            href:'/lease/addlease', 
            label: 'Add Lease'
         }, 
         { key:'lease_edit',
            href:'/lease/editlease', 
            label:'Edit Lease'
         }

]

    return (
        <>
        <PageNav links={links}/>

        </> 
    )
}