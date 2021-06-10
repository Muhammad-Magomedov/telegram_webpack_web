const getChannelByCategory = require("./function")
const getCategories = () => {
  const sidebar = document.getElementById('sidebar');
  fetch("http://localhost:3004/categories", { method: "GET"})
  .then(res => res.json())
  .then(data => {
    for (let i=0; i < data.length; i++) {
      const button = document.createElement('button');
      const a = document.createElement('a');
      a.href = `http://localhost:3004/category/${data[i]._id}/channels`;
      a.append(data[i].name);
      a.classList.add('active')
      button.append(a)
      sidebar.append(button)
      console.log(data[i])
      a.addEventListener('click', () => {
        getChannelByCategory(data[i].category)
      })
    }
  })
}

module.exports = getCategories