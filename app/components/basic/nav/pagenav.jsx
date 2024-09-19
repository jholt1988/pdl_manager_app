'use client'
import React from 'react';
import { Paper, Box, } from '@mui/material';
import styles from '@/app/tenant/page.module.css';
import { usePathname} from 'next/navigation';
import Link from 'next/link';
import { useSelector } from 'react-redux';
export default function pageNav ({links}) {
    const pathname = usePathname()
    return (
        <>
        <Paper>
            <ul>
            {links.map((link) => (
                <li key={link.key}>
              <Link  className={`${styles.link} ${pathname ===`${link.href}` ? styles.active: "" }`} href={link.href}>{link.label}</Link>
              </li>
            )
        )
    }
    </ul>
        </Paper>

        </>
    )
}