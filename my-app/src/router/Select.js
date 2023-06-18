
// 기본 react 파일

import styles from "./Select.module.css"

import Counselor from "../components/Counselor"; //Counselor components 파일

import img from "../img/person.png" // 더미 사진 데이터

function Select() {

  return (
    <div className={styles.parent}> 
      <Counselor 
        name = "name1" 
        img = {img}
        profile = "..."
        id = '1'
        /> {/*더미 데이터 Counselor components로 props 넘겨주기*/}
      {/*json 파일 받아오게 되면 await 사용해서 받아온 뒤 map으로 구현할 예정*/}
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