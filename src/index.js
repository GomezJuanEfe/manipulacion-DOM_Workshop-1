/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = 'https://platzi-avo.vercel.app';

// Reto con Async

// const fetchData = async (api) => {
//   try {
//     const res = await window.fetch(api);
//     const responseJson = await res.json();
//     console.log(responseJson);
//   } catch (error) {
//     console.error(error)
//   }
// }

// fetchData(url);

const appNode = document.querySelector('#app');

const formatPrice = (price) => {
  const intl = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  const newPrice = intl.format(price);
  return newPrice
}

window
  .fetch(`${baseUrl}/api/avo`)
  .then((respuesta) => respuesta.json())
  .then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach(item => {
      const image = document.createElement('img');
      image.src = `${baseUrl}${item.image}`;
      const title = document.createElement('h2');
      title.textContent = item.name;

      const price = document.createElement('div');
      price.textContent = formatPrice(item.price);

      const container = document.createElement('div');

      container.append(image, title, price);

      todosLosItems.push(container);
    })
    appNode.append(...todosLosItems);
  })

  // Funcion que se autoinvoca

! function foo(){
  console.log('function foo');
  setTimeout(() => {
    console.log('Hello world')
  }, 2000);
}();