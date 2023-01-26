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
  dispatch({ type: "CHANGE_LOGIN", value: true });

  const auth = getAuth();
  return signInWithEmailAndPassword(auth, data.email, data.password)
    .then((res) => {
      // Signed in
      console.log("success: ", res);
      dispatch({ type: "CHANGE_LOADING", value: false });
      alert("Login Anda Berhasil!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch({ type: "CHANGE_LOADING", value: false });
    });
};
