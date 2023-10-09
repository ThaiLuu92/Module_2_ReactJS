// Dữ liệu truyền lên local
export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Dữ liệu lấy trên local
export function getLocalStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

// Điều hướng
export function navigationParam(url: string, param: string) {
  location.href = `${url}/${param}`;
}

export function navigation(pathname: string) {
  location.pathname = pathname;
}
