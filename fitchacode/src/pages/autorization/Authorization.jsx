import React from 'react';
import { useForm} from "react-hook-form";
import styles from "./Authorization.module.scss";
import Layout from "../../component/Layout/Layout"
import logo2 from './../../img/logo/logo2.svg'
import eye from "./../../img/icon/close-ease.png"
import Footer from "../../component/footer/footer"
import { Link } from 'react-router-dom';
function Authorization() {
 window.scrollTo(0, 0);


 const {
     register,
     formState:{errors, isValid},
     handleSubmit,
     reset
  } = useForm({
     mode: "onBlur"
  });


  const onSubmit = (data) =>{ 
         alert(JSON.stringify(data));
         console.log(JSON.stringify(data));     
         reset();
     }


  const [activeCheckbox, setActiveCheckbox] = React.useState(null);

  return (
    <div className={styles.authorization}> 
         <Layout>
           <div className={styles.logo}>
              <img src={logo2}></img>
           </div>

           <div className={styles.buttonReg}>
            <Link style={{ textDecoration: 'none', color:"#000" }} to="/Register"><p className={styles.butnoactive}>Регистрация</p></Link>
                <p className={styles.buttonslash}>/</p>
             <p className={styles.butactive}>Авторизация</p>
           </div>

        <form>
           <label>
           <p className={styles.labeltext}>Логин</p>
                     <input className={styles.field} placeholder="Введите адресс электронной почты"
                         {...register("Login",{
                             required: "Обязательное поле!",
                             minLength: {
                             value: 3,
                             message: "Минимум 3 символа"
                             }
                         })}
                     />
                 </label>
                 {/* <div className={styles.marg} style={{height:20, fontSize:11,padding:2} }>
                     {errors?.firstName && <p>{errors?.firstName?.message || "Ошибка!"}</p>}
                 </div> */}



                 <label>
                  <p className={styles.labeltext}>Пароль</p>
                     <input className={styles.field} placeholder="Введите пароль"
                          {...register("FirstPassword",{
                             required: "Обязательное поле!",
                             minLength: {
                             value: 5,
                             message: "Минимум 5 символов"
                             },
                             pattern: /(?=.*[0-9])/g
                         })}
                         
                     /><div className={styles.eye_flex}>
                              <button className={styles.eye}><img src={eye}></img></button>
                     </div>
             
                 </label>
                 <div><p className={styles.zabil}>Забыли пароль?</p></div>
                 {/* <div className={styles.marg} style={{height:20, fontSize:11,padding:2} }>
                     {errors?.firstName && <p>{errors?.firstName?.message || "Ошибка!"}</p>}
                 </div> */}
          <div className={styles.button__div}>
            <button className={styles.button} >
              <input value="Продолжить" style={!isValid ? {color:"#b1acac"} : {color:"white"} } type="submit" disabled={!isValid}/>
            </button>
        </div>
        </form>
        
         </Layout>
         <Footer></Footer>
    </div>
  );
}

export default Authorization;
