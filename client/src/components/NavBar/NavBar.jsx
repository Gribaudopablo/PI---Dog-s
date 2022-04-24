import React, { Fragment } from "react";
import Logo from "../../img/1084875.svg";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <Fragment>
      <div className={styles.nav}>
      <div className={styles.TitleAndSearchBar}>
        <div className={styles.logoAndTitle}>
          <Link to="/home">
            <img
              id="logo"
              src={Logo}
              alt="dog"
              className={styles.logo}
            />
          </Link>
          <div>
            <h1>Doglang</h1>
          </div>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
        <div className={styles.aboutNavButton}>
          <Link to="/about"><h2>Creator</h2></Link>
        </div>
      </div>
    </Fragment>
  );
}
