const defaultState = {
  currentUser: {},
  isAuth: false,
};

//Создадим стейт который примит 1 параметром стейт а 2 экшин

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
