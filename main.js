import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { BreakingBad } from './src/breakingbad/breakingbad-app'
import { UsersApp } from './src/users/users-app'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="app-title">CRUD JAVASCRIPT VANILLA</h1>
    <div class="card">
    </div>
  </div>
`

const element = document.querySelector('.card');
//BreakingBad(element);
UsersApp(element);