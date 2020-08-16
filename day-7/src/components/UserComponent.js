module.exports = function UserComponent(users) {
  const userLis = users.map((user) => `<li>${user.name} : ${user.age}</li>`).join("")
  return `<ul>${userLis}</ul>`
}
