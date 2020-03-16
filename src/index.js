import _ from 'lodash';


function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Lee'], ' ');

    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.innerText = 'Apple';
    ul.appendChild(li);
    var li = document.createElement('li');
    li.innerText = 'Banana';
    ul.appendChild(li);

    element.appendChild(ul);
    return element;
    
}

document.body.appendChild(component());