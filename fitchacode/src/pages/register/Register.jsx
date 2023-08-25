import React from 'react';
import { useForm} from "react-hook-form";
import styles from "./Register.module.scss";
import Layout from "./../../component/Layout/Layout"
import logo2 from './../../img/logo/logo2.svg'
import eye from "./../../img/icon/close-ease.png"
import Footer from "./../../component/footer/footer"
import { Link } from 'react-router-dom';
function Register() {
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
    <div className={styles.register}> 
         <Layout>
           <div className={styles.logo}>
              <img src={logo2}></img>
           </div>

           <div className={styles.buttonReg}>
              <p className={styles.butactive}>Регистрация</p>
                <p className={styles.buttonslash}>/</p>
              <Link  style={{ textDecoration: 'none', color:"#000"  }} to="/Authorization"><p className={styles.butnoactive}>Авторизация</p></Link>
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

                  <label className={styles.labelpass2}>
                  <p className={styles.labeltext}>Подтвердить пароль</p>
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

export default Register;
