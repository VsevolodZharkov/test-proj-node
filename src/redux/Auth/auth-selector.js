export const getIsLoggedIn = state => state.auth.isLogin;
export const getToken = state => state.auth.token;
export const getLoading = state => state.auth.isLoading;
export const getEmail = state => state.auth.user?.email;
export const getAvatarURL = state => state.auth.user?.avatarURL;
export const getVerify = state => state.auth.user?.verify;
