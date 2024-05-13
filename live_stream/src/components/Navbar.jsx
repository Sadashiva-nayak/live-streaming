import React from "react";
import styled from "styled-components";
import {Menu, PersonRounded} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const NavBArDiv = styled.div`
  display: flex;
  gap: 30px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.bgLight};
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
    @media (max-width: 768px) {
        padding:16px;
    }
`;

const ButtonDiv = styled.div`
font-size: 14px;
cursor: pointer;
max-width: 100px;
display: flex;
gap: 8px;
padding: 8px 7px;
border-radius: 12px;
align-items: center;
color: ${({ theme }) => theme.primary};
border:1px solid ${({ theme }) => theme.primary};
`;

const Iconbutton= styled(IconButton)`
color: ${({ theme }) => theme.text_secondary} !important;
`
const Navbar = ({menuopen,setmenuopen}) => {
  return <NavBArDiv>
    <Iconbutton onClick={()=>setmenuopen(!menuopen)}>
    <Menu/>
    </Iconbutton>
    <ButtonDiv>
        <PersonRounded/>
        Login
    </ButtonDiv>
    </NavBArDiv>;
};

export default Navbar;
