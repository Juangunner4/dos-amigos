import { useRef, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

function Header() {

      const [openDrawer, toggleDrawer] = useState(false);

      const drawerRef = useRef(null);
      
      useEffect(() => {
        /* Close the drawer when the user clicks outside of it */
        const closeDrawer = event => {
          if (drawerRef.current && drawerRef.current.contains(event.target)) {
            return;
          }

          toggleDrawer(false);
        };

        document.addEventListener("mousedown", closeDrawer);
        return () => document.removeEventListener("mousedown", closeDrawer);
      }, []);
      return (
        <Styles.Wrapper>
          <CSSReset />
    
          <Navbar.Wrapper>
            <Navbar.Logo> <img className="Logo" src={require("../images/ColorLogo.jpg")} alt="Logo" /></Navbar.Logo>
    
            <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
              <HamburgerButton.Lines />
            </HamburgerButton.Wrapper>
    
            <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
              <Navbar.Item><li><a href="#contact">(540)-860-0699</a></li></Navbar.Item>
              <Navbar.Item><li><a href="#home">Home</a></li></Navbar.Item>
              <Navbar.Item><li><a href="#about">About Us</a></li></Navbar.Item>
              <Navbar.Item><li><a href="#services">Services</a></li></Navbar.Item> 
              <Navbar.Item><li><a href="#location">Location</a></li></Navbar.Item> 
              <Navbar.Item><li><a href="#hours">Hours</a></li></Navbar.Item> 
              <Navbar.Item><li><a href="#contact">Contact Us</a></li></Navbar.Item>
            </Navbar.Items>
          </Navbar.Wrapper>
        </Styles.Wrapper>
      );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
  `
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #494949;

    // 40em == 640px
    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw;
      bottom: 0;
    }
  `,
  Logo: styled.h1`
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 40em) {
      position: fixed;
      right: 0;
      top: 0;

      height: 100%;

      flex-direction: column;

      background-color: #494949;
      padding: 1rem 2rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;

    @media only screen and (max-width: 40em) {
      padding: 1rem 0;
    }
    `,
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 40em) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: #000;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;      
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;

export default Header;