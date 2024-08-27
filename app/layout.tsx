'use client'
import React from "react";
import Sidedrawer from "@/app/components/basic/sidedrawer";
import SideMenu from '@/app/components/menu';
import { CopyrightOutlined } from "@mui/icons-material";
import { Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Image from "next/image";

import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

export default function RootLayout({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Sidedrawer/>


            <header className={styles.header}>
              <Image
                src="/logo3.png"
                className={styles.logo}
                alt="logo"
                width={215}
                height={215}
                priority
              />
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              <span>
              <Typography variant="subtitle2" >PDL RENTALS 2024 <CopyrightOutlined/></Typography>
              </span>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
</LocalizationProvider>
  );
}
