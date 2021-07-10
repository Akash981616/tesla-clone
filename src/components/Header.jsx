import React from "react";
import styled from "styled-components";
// import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  // const [burgerStatus, setburgerStatus] = useState(false);
  return (
    <Container  >
      <a href="/asdf">
        <img
          src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
          alt=""
        />
      </a >

      <Menu>
        <p>
          <a href="/asdf">Model S</a>
        </p>
        <p>
          <a href="/asdf">Model 3</a>
        </p>
        <p>
          <a href="/asdf">Model X</a>
        </p>
        <p>
          <a href="/asdf">Model Y</a>
        </p>
        <p>
          <a href="/asdf">Solar Roof</a>
        </p>
        <p>
          <a href="/asdf">Solar Panels</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="/asdf">SHOP</a>
        <a href="/asdf">Account</a>
        <CustomMenu>
        <a href="/asdf">Menu</a>
        </CustomMenu>
      </RightMenu>
      {/* <BurgerNav>
        <CustomClose>
          <CloseWraper>
            <CloseIcon />
          </CloseWraper>
        </CustomClose>
        <li>
          <a href="/asdf">Existing Inventory</a>
        </li>
        <li>
          <a href="/asdf">Used Inventory</a>
        </li>
        <li>
          <a href="/asdf">Trade-In</a>
        </li>
        <li>
          <a href="/asdf">Cybertruck</a>
        </li>
        <li>
          <a href="/asdf">Roadaster</a>
        </li>
        <li>
          <a href="/asdf">Existing Inventory</a>
        </li>
        <li>
          <a href="/asdf">Existing Inventory</a>
        </li>
        <li>
          <a href="/asdf">Existing Inventory</a>
        </li>
      </BurgerNav> */}
    </Container>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  margin-top: -6000px;
  justify-content: space-between;
  min-height: 160px;
  margin-top: 30px;
  margin-left: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  img {
    width: 100px;
    height: 15px;
  }
`;
const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  cursor: pointer;
  a {
    font-size: 600;
    padding: 0px 10px;
    flex-wrap: nowrap;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    transition:  width 2s;
  }
  a:hover{
    background-color: rgba(0,0,0,0.3);
   color: black;
    padding:10px;
    border-radius:20px;
    opacity:0.9;
  }
`;
const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    font-size: 600;
    padding: 0px 10px;
    flex-wrap: nowrap;
    text-transform: uppercase;
    color: black;
  }
  
`;
const CustomMenu = styled(RightMenu)`
  cursor: pointer;
`;
// const BurgerNav = styled.div`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   background-color: white;
//   width: 300px;
//   z-index: 16;
//   list-style: none;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   text-align: start;

//   a {
//     font-weight: 600;
//     text-decoration: none;
    
//   }

//   li {
//     border-bottom: 1px solid rgba(0, 0, 0, 0.2);
//     padding: 15px 0;
//     transform: ${props=>props.burgerStatus? 'translateX(100%)' :'translateX(0)'};
//   }
// `;
// const CustomClose = styled.div`
// justify-content: flex-end;
//   margin-right:0%;`;
// const CloseWraper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-right:0%;
//   cursor: pointer;
// `;
