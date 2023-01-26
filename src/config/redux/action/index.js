import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Pardana" });
  }, 2000);
};

export const registerUserAPI = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_LOADING", value: true });

  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((res) => {
      // Signed in
      console.log("success: ", res);
      dispatch({ type: "CHANGE_LOADING", value: false });
      alert("Register Anda Berhasil!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch({ type: "CHANGE_LOADING", value: false });
    });
};

export const loginUserAPI = (data) => (dispatch) => {
  return new Promise((resolved, reject) => {
    dispatch({ type: "CHANGE_LOGIN", value: true });

    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        // Signed in
        console.log("success: ", res);

        const dataUser = {
          uid: res.user.uid,
          email: res.user.email,
          emailVerified: res.user.emailVerified,
        };

        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: dataUser });
        resolved(true);
        alert("Login Anda Berhasil!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: false });
        reject(false);
      });
  });
};
