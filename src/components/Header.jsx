import { AppBar, Badge, Button, IconButton, Toolbar, Typography, } from '@mui/material'
import React from 'react'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Box } from '@mui/system';

export default function Header() {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography
                    variant='h6'
                    color='inherit'
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    Economy
                </Typography>
                <Box sx={{ display: { md: 'flex' } }}>
                    <IconButton size='large' aria-label='shows cart items count' color='inherit'>
                        <Badge color='error' badgeContent={1}><ShoppingCartRoundedIcon /></Badge>
                    </IconButton>
                </Box>
                <Button variant="contained" >Login</Button>
            </Toolbar>
        </AppBar>
    )
}
