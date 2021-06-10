// import './styles.css'

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3004/', { method: "GET" })
    .then(res => res.json())
    .then(data => {
      const container = document.querySelector('.container')
      for (let i = 0; i < data.length; i++) {
        const zagolovok = document.createElement('div');
        const name = document.createElement('div');
        const text = document.createElement('div');
        const button = document.createElement('button');
        const a = document.createElement('a');
        // zagolovok.classList.add('block');
        // // name.classList.add('block');
        // // text.classList.add('block');
        zagolovok.append(data[i].title);
        name.append(data[i].name);
        text.append(data[i].text);
        a.textContent = 'Подписаться';
        a.href = '/channels/:id';
        button.prepend(a);
        container.append(zagolovok);
        container.append(name);
        container.append(text);
        container.append(button);
        console.log(data)
      }
    })
})
