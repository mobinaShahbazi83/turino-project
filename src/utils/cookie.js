import Cookies from "js-cookie";

const setCookie = (tokens) => {
    document.cookie = `accessToken= ${tokens.accessToken}; max-age=${1 * 24 * 60 * 60}`;
    document.cookie = `refreshToken= ${tokens.refreshToken}; max-age=${30 * 24 * 60 * 60}`;
};
function normalizeInput(token) {
  if (typeof token === 'string') {
    return { name: token };
  }
  return token && typeof token === 'object' ? token : {};
}
function deleteCookie(name) {
  Cookies.remove(name, { path: '/' });
}

const getCookie =(token)  => {
  const input = normalizeInput(token);
  const name = input.name;
  if (!name) return null;

  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length));
    }
  }
  return null;
}


export  {setCookie, getCookie, deleteCookie};
