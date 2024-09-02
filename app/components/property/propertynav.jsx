'use client'
import React from 'react';
import { Paper, Box, } from '@mui/material';

import { usePathname} from 'next/navigation';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import PageNav from '@/app/components/basic/nav/pagenav';

export default function Propertynav (props) {
    const links = [
        {
        href: '/property', 
        label:'Property Dashboard'
         }, 
         {
           href:'/property/propertyinfo' ,
           label: 'Property Info' 
         }, 
         {
            href:'/property/addproperty', 
            label: 'Add Property'
         }, 
         {
            href:'/property/editproperty', 
            label:'Edit Property'
         }

]

    return (
        <>
        <PageNav links={links}/>

        </>
    )
}