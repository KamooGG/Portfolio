import javascriptLogo from '../img/javascript.svg'
import viteLogo from '../img/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">Hola, mundo!</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <a id="toggle-button" href="#">Cambiar a modo claro</a>
    <label id="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  </div>
`
