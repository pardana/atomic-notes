export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Pardana" });
  }, 2000);
};
