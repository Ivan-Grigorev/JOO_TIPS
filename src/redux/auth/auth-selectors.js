export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUserName = (state) => state.auth.user.name;

export const selectUserEmail = (state) => state.auth.user.email;

export const selectUserPhone = (state) => state.auth.user.phone;

export const selectUserAvatar = (state) => state.auth.user.avatar;

export const selectUser = (state) => state.auth.user;

export const selectUserErrors = (state) => state.auth.error;

export const selectUserProfileInfo = (state) => state.auth.profile;
