export function setCookie(
  key: string,
  value: string,
  path: string = "/"
): void {
  document.cookie = `${key}=${value};path=${path}`;
  return;
}

export function getCookie(key: string): any {
  const cookieData = document.cookie.split(";");

  for (let i = 0; i < cookieData.length; i++) {
    let cookiePair = cookieData[i].split("=");

    if (key === cookiePair[0].trim()) return cookiePair[1];
  }
  /** if not found, return null */
  return null;
}

export function clearAllCookie(path: string = "/") {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, `=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`);
  });
  return;
}

export function setLocalStorage(key: string, value: string | boolean) {
  window.localStorage.setItem(key, JSON.stringify(value));
  return;
}

export function getLocalStorage(key: string) {
  return JSON.parse(window.localStorage.getItem(key)!);
}

export function removeLocalStorage(key: string) {
  window.localStorage.removeItem(key);
  return;
}

export function clearAllLocalStorage() {
  window.localStorage.clear();
  return;
}
