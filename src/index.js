import Sidebar from './modules/Sidebar';
import Main from './modules/Main';

import './styles/main.css'

let body = document.querySelector('body');

const [sidebarDom, debug] = Sidebar();

body.appendChild(sidebarDom());
body.appendChild(Main());

debug();