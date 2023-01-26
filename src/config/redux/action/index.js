import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getDatabase, push, ref } from "firebase/database";

export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Pardana" });
  }, 2000);
};

export const registerUserAPI = (data) => (dispatch) => {
  return new Promise((resolved, reject) => {
    dispatch({ type: "CHANGE_LOADING", value: true });

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        // Signed in
        console.log("success: ", res);
        dispatch({ type: "CHANGE_LOADING", value: false });
        resolved(true);
        alert("Register Anda Berhasil!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        reject(false);
        alert("Register Anda Gagal!");
      });
  });
};

export const loginUserAPI = (data) => (dispatch) => {
  return new Promise((resolved, reject) => {
    dispatch({ type: "CHANGE_LOGIN", value: true });

    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        // Signed in
        // console.log("success: ", res);

        const dataUser = {
          uid: res.user.uid,
          email: res.user.email,
          emailVerified: res.user.emailVerified,
          refreshToken: res.user.refreshToken,
        };

        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: dataUser });
        resolved(dataUser);
        alert("Login Anda Berhasil!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: false });
        reject(false);
        alert("Login Anda Gagal!");
      });
  });
};

export const addDataToAPI = (data) => (dispatch) => {
  const db = getDatabase();
  push(ref(db, "notes/" + data.userId), {
    title: data.title,
    content: data.content,
    date: data.date,
  });
};
