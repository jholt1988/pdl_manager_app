import React from 'react';
import Menu from '@mui/material/Menu'
import { MenuItem, MenuList } from '@mui/material';
import Link from 'next/link';
import {GroupOutlined} from '@mui/icons-material/GroupOutlined'

export default function Menu (props) {
    return (
        <>
            <Menu id="side_menu" anchorEl={} keepMounted open={Boolean()} onClose={}>
                <MenuList>
                    <MenuItem>
                    <Link href='./tenants'>
                    <GroupOutlined />
                    </Link>
                    </MenuItem>
                </MenuList>
              
            </Menu>
            <h1> { props.title } </h1>
        </>
    )
}