 import _ from 'lodash';
 import './style.scss';
 import QuietPlease from './quiet-please.jpg';

  function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack <br/><br/>'], ' ');
    element.classList.add('hello');

    var addImage = new Image();
    addImage.src = QuietPlease;

    element.appendChild(addImage);


    return element;
  }

  document.body.appendChild(component());