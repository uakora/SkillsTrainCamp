import _ from 'lodash';

console.log(`Current ENV: ${process.env.NODE_ENV}`);

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join([
        'Hello Lee！', 
        `Current ENV: ${process.env.NODE_ENV}`
    ], '<br>');

    return element;
}

document.body.appendChild(component());
