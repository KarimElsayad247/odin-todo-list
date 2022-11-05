import Sidebar from './modules/Sidebar';
import Main from './modules/Main';

import './styles/main.css'

let body = document.querySelector('body');

body.appendChild(Sidebar());
body.appendChild(Main());