const store = {
  users: [
    {
      name: "suho",
      age: 36,
    },
    {
      name: "gildong",
      age: 20,
    },
  ],
}
module.exports = {
  selectAll(table) {
    return store[table]
  },
}
