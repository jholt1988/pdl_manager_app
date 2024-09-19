'use client'
import React from 'react';

import PageNav from '@/app/components/basic/nav/pagenav';

export default function Propertynav (props) {
    const links = [
        {
        key:'prop_base',
        href: '/property', 
        label:'Property Dashboard'
         }, 
         {
            key:'prop_info',
           href:'/property/propertyinfo' ,
           label: 'Property Info' 
         }, 
         {
            key:'prop_add',
            href:'/property/addproperty', 
            label: 'Add Property'
         }, 
         { key:'prop_edit',
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