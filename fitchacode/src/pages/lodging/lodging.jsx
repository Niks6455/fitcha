import React from "react";
import styles from "./lodging.module.scss";
import Layout from "../../component/Layout/Layout";
import Headers from "../../component/header/header";
function Lodging() {
  return (
   
    <Layout> 
    <Headers></Headers>
      <div className={styles.lodging}>


      </div>
    </Layout>
  );
}
export default Lodging;
