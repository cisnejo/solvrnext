import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Navbar = styled.nav`
  display: inline-flex;
  width: 100%;
  height: 3rem;
  background-color: white;
  #logo_container {
    width: 25%;
  }
`;


const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
  background-color: #43aa43;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
  li {
    a {
      cursor: pointer;
    }
  }
  
  #nav_list {
    width: 70%;
  }
  #login_list {
    justify-content: space-around;
    flex: 1;
  }
`;

const Home: NextPage = () => {
  return (
    // <div>
    <Navbar>
      <div id="logo_container">
        <div>Image</div>
      </div>
      <ListContainer>
        <ul id="nav_list">
          <li>
            <a>Proflie</a>
          </li>
          <li>
            <a>Examples</a>
          </li>
          <li>
            <a>Forms</a>
          </li>
        </ul>
        <ul id="login_list">
          <li>
            <a>login</a>
          </li>
        </ul>
      </ListContainer>
    </Navbar>

    /* <div className="container">
        <div id="hero"></div>
      </div>
    </div> */
  );
};

export default Home;
