import './style.css';
import {Pak1,Pak3,Pak2} from "./public/assets/images";
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <body>
       
    
    
    
  </body>
`;

setupCounter(document.querySelector('#counter'));
