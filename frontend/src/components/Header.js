
import React, { useState } from 'react'
// import "./Header.css"
import Search from "./Search"
import {Link} from 'react-router-dom'
import { AppBar, Box, InputBase, Toolbar, Typography, Button, Grid } from "@mui/material"
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

export default function Header({search, setSearch, activeUser}) {
  
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#080808" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link to='/'><Button variant="contained" sx={{ background: "#080808" }}>Home</Button></Link>
          <Search search={search} setSearch={setSearch}/>
          <Link to='/collections'><Button variant="contained" sx={{ background: "#080808" }}>My Library</Button></Link>
          { activeUser ? <Link to='/profile'><Button variant="contained" sx={{ background: "#080808" }}>My Profile</Button></Link> :
          <Link to='/login'><Button variant="contained" sx={{ background: "#080808" }}>Login</Button></Link>}
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}
