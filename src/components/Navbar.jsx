import React , {useState}  from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Bio} from "../data/constants"
import {MenuRounded} from "@mui/icons-material"



const MobileContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;


const Nav = styled.div`

  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;

`;



const NavbarContainer=styled.div`
  width: 100%;
  max-width:1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: spaace-between;
  font-size: 1rem;

`;


const Navbarlogo=styled(LinkR) `
  width: 80%;
  padding: 0 19px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;


const NavItems=styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

`;

const Navlink=styled.a`
  color: ${({theme})=> theme.text_primary};
  font-weight: 500;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover{ ${({theme})=> theme.primary};
  }


`;


const ButtonContainer=styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  
`;


const GithubButton = styled.a`
  border: 1px solid  ${({theme})=> theme.primary};
  justify-content:center;
  display:flex;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size:16px;
  font-weight:500;
  color: ${({theme})=> theme.primary};
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover{
  background-color: ${({theme})=> theme.primary};
  color: ${({theme})=> theme.text_primary};
  }
`;





const Navbar = () => {

  const [isopen, setisopen] = useState(false)



  return (
    <Nav>
    <NavbarContainer>
        <Navbarlogo to="/">
            <a href="">Rizwan Hussain</a>
        </Navbarlogo>


        <MobileContainer>
          <MenuRounded style={{color:"inherit"}} />
        </MobileContainer>


        <NavItems>
          <Navlink href="#About">About</Navlink>
          <Navlink href="#Skills">Skills</Navlink>
          <Navlink href="#Experience">Experience</Navlink>
          <Navlink href="#Projects">Projects</Navlink>
          <Navlink href="#Education">Education</Navlink>
        </NavItems>


      <ButtonContainer>
        <GithubButton href={Bio.github} target="_Blank" >Github Profile</GithubButton>
      </ButtonContainer>


    </NavbarContainer>
    </Nav>
  )
}

export default Navbar
