import React from "react";
import styled from "styled-components";
import {
  CloseRounded,
  HomeRounded,
  SearchRounded,
  FavoriteRounded,
  LightModeRounded,
  LogoutRounded,
  CloudUploadRounded,
} from "@mui/icons-material";
import LogoImage from "../Images/Logo.png";
import { Link } from "react-router-dom";

const Menucontainer = styled.div`
  flex: 0.5;
  dispay: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1100px) {
    width: 100%;
    z-index: 1000;
    position: fixed;
    max-width: 250px;
    transition: 0.3s ease-in-out;
    left: ${({ menuopen }) => (menuopen ? "0" : "-100%")};
  }
`;

const Image = styled.img`
  height: 40px;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;
const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;
const Elements = styled.div`
  padding: 4px 16px;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 12px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  }
`;
const Navtext = styled.div`
  padding: 12px 0px;
`;

const HR = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.text_secondary};
  margin: 10px 0px;
`;

const Sidebar = ({ menuopen, setmenuopen, setdarkmode, darkmode }) => {
  const menuitems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <HomeRounded />,
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRounded />,
    },
    {
      link: "/favourites",
      name: "Favourites",
      icon: <FavoriteRounded />,
    },
  ];

  const button = [
    {
      fun: () => console.log("upload"),
      name: "Upload",
      icon: <CloudUploadRounded />,
    },
    {
      fun: () => setdarkmode(!darkmode),
      name: darkmode ? "light mode" : "dark mode",
      icon: <LightModeRounded />,
    },
    {
      fun: () => console.log("upload"),
      name: "Log Out",
      icon: <LogoutRounded />,
    },
  ];

  return (
    <Menucontainer menuopen={menuopen}>
      <Flex>
        <Logo>
          <Image src={LogoImage} />
          STREAMER
        </Logo>
        <Close onClick={() => setmenuopen(false)}>
          <CloseRounded />
        </Close>
      </Flex>
      {menuitems.map((item, index) => {
        return (
          <Link key={index} className=" no-underline" to={item.link}>
            <Elements>
              {item.icon}
              <Navtext>{item.name}</Navtext>
            </Elements>
          </Link>
        );
      })}
      <HR />
      {button.map((item, index) => {
        return (
          <Elements key={index} onClick={item.fun}>
            {item.icon}
            <Navtext>{item.name}</Navtext>
          </Elements>
        );
      })}
    </Menucontainer>
  );
};

export default Sidebar;
