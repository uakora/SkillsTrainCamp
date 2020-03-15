import _ from 'lodash';
import './style.css';
import cat from './cat.jpg';


function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Lee'], ' ');

    element.classList.add('hello');

    var catIcon = new Image();
    catIcon.src = cat;
    catIcon.height = 150;   

    element.appendChild(catIcon);

    return element;
    
}

document.body.appendChild(component());