export default async function getPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  return await response.json()
}
