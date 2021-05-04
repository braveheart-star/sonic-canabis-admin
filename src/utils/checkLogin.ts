const checkLogin = (token: string) => !!token && token.length !== 0;

export default checkLogin;
