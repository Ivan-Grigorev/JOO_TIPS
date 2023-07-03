export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUserName = (state) => state.auth.user.name;

export const selectUserEmail = (state) => state.auth.user.email;

export const selectUserAvatar = (state) => state.auth.user.avatar;

export const selectUser = (state) => state.auth.user;

export const selectUserError = (state) => state.auth.error;
