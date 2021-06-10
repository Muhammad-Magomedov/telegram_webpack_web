const getRandomChannels = () => {
  const container = document.querySelector('#container');
  document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3004/')
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        const title = document.createElement('div');
        const name = document.createElement('div');
        const text = document.createElement('div');
        const button = document.createElement('button');
        const a = document.createElement('a');
        // zagolovok.classList.add('block');
        // // name.classList.add('block');
        // // text.classList.add('block');
        title.append(data[i].title);
        name.append(data[i].name);
        text.append(data[i].text);
        a.textContent = 'Подписаться';
        a.href = '/channels/:id';
        button.prepend(a);
        container.append(title);
        container.append(name);
        container.append(text);
        container.append(button);
      }
    })
  })
}

module.exports = getRandomChannels