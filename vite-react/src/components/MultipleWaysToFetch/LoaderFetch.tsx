export async function loaderExample() {
  const res = await fetch("https://api.github.com/users/xkr9");
  const data = await res.json();
  return data;
}
