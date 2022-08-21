import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <nav>
        <div>Image</div>
        <ul>
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
        </ul>
        <ul>
          <li>login</li>
          <li>signup</li>
        </ul>
      </nav>

      <div className="container">
        <div id="hero"></div>
      </div>
    </div>
  );
};

export default Home;
