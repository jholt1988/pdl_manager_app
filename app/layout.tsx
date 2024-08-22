import Sidedrawer from "@/app/components/basic/sidedrawer";
import SideMenu from '@/app/components/menu';
import { CopyrightOutlined } from "@mui/icons-material";
import { Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Sidedrawer/>


            <header className={styles.header}>
              <Image
                src="/logo.png"
                className={styles.logo}
                alt="logo"
                width={80}
                height={80}
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
