const getChannelByCategory = (id) => {
 fetch(`http://localhost:3004/category/${id}/channels`)
 .then(res => res.json())
 .then(data => {
  const container = document.querySelector("#container")
  for(let i = 0; i < data.length; i++) {
   const mainDiv = document.createElement('div');
   const title = document.createElement('div');
   const name = document.createElement('div');
   const text = document.createElement('div');
   const button = document.createElement('button');
   const a = document.createElement('a');

   title.textContent = data[i].title;
   name.textContent = data[i].name;
   text.textContent = data[i].text;
   button.textContent = 'Подписаться';
   a.href = '#';

   button.prepend(a);
   mainDiv.prepend(button);
   mainDiv.prepend(text);
   mainDiv.prepend(name);
   mainDiv.prepend(title);
   container.prepend(mainDiv);

  }
 })
}
module.exports = getChannelByCategory