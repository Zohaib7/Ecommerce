import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container=styled.div `
    height:50px;
`
const Wrapper=styled.div`
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content:space-between;
`
const Left=styled.div`
    flex:1;
    display: flex;
    align-items:center;
`
const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items:center;
    margin-Left: 25px;
    padding: 5px;
`


const Language=styled.span`
    cursor:pointer;
    font-size:14px;
`

const Input=styled.input`
    border:none;
`

const Center=styled.div`
      flex:1;
`
const Logo=styled.h1`
        font-weight:bold;
        text-align:center;
`

const Right=styled.div`
        flex:1;
        display: flex;
        align-items:center;
        justify-content:flex-end;
`
const MenuItem=styled.div`
     cursor:pointer;
     font-size:14px;
     margin-Left: 25px;
`


export const Navbar = () => {
    return (
        <div>
            <Container>
            <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input/>
                            <SearchIcon style={{color:'grey',fontSize:16}}/>
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Logo>Zohaib.</Logo>
                    </Center>
                    <Right>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color='primary'>
                                <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </MenuItem>
                    </Right>
            </Wrapper>
            </Container>
        </div>
    )
}
