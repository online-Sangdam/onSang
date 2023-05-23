import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Select.module.css"
import Counselor from "../components/Counselor";
import img from "../img/person.png"

function Select() {

  return (
    <div className={styles.parent}>
      <Counselor
        name = "name1" 
        img = {img}
        profile = "..."
        id = '1'
        />
      <Counselor
        name = "name2" 
        img = {img}
        profile = "..."
        id = '2'
        />
    </div>
  )
}

export default Select;