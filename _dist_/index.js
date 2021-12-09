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
      image.className = 'w-32 rounded-full'

      const title = document.createElement('h2');
      title.textContent = item.name;
      title.className = 'text-xl font-black text-purple-600';

      const price = document.createElement('div');
      price.textContent = formatPrice(item.price);
      price.className = 'font-bold ';

      const container = document.createElement('div');
      container.className = 'flex-col flex-wrap container mx-auto w-80 bg-gray-100 rounded-2xl flex-initial p-2 m-4'

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