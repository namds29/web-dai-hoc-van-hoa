import { useEffect, useState } from "react";
import styles from "./login-form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { sha256 } from "js-sha256";
import AuthService from "src/services/auth/authServices";

const LoginForm = () => {
  type User = {
    username: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<User>();
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<User> = async ({
    username,
    password,
  }: User) => {
    try {
      const res = await AuthService.login({ userID: username, password: sha256(password) });
      console.log(res)
      if (res?.message === "success") {
        AuthService.setToken(res.data.accessToken);
        navigate("/admin");
      }
    } catch (error: any) {
      if (error) {
        setErrorMsg(true);
      }
      console.log(error);
    }
  };

  
  return (
    <div className={styles.container}>
      <p className="text-2xl font-bold">Login</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {errorMsg && (
          <p className="text-red-500 text-center py-4">
            Your username or password is incorrect
          </p>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className={styles.input}
            {...register("username", { required: "Username is required" })}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            {...register("password", { required: "Password is required" })}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
