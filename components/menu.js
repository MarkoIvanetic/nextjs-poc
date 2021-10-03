// import { useState } from 'react'

import { signIn, signOut, useSession } from 'next-auth/client'

import { AppBar, Box, Toolbar, Typography, IconButton, Button, Grid } from '@mui/material'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'

import { styled } from '@mui/material/styles'

const ProfilePicture = styled('img')({
    borderRadius: '50%'
})
export default function MenuAppBar() {
    const [session, loading] = useSession()

    console.log('menu:', session, loading)

    const handleSignIn = () => {
        signIn('github')
    }

    const handleSignOut = () => {
        signOut()
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={0} position="fixed">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                         <Link href="/">Home</Link>
                    </Typography>
                    {loading ? (
                        <p>loading...</p>
                    ) : (
                        <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
                            <Grid item>
                                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                                    {session && (session.user.name || session.user.email)}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {session ? (
                                    <ProfilePicture src={session.user.image} width={35} />
                                ) : (
                                    <AccountCircle fontSize="large" />
                                )}
                            </Grid>
                            <Grid item>
                                {!session ? (
                                    <Button color="inherit" onClick={handleSignIn}>
                                        Login
                                    </Button>
                                ) : (
                                    <Button color="inherit" onClick={handleSignOut}>
                                        Logout
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
