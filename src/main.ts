import './style.css';
import { translateText } from './utils/logic.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div> 
      <input type="text" class='boxTranslate'></input>
    </div>
    <div>
      <button class='btnTranslate'>Перевести</button>
    </div>
    <div> 
      <p>Ниже появится твой текст! </p>
      <p class='placeForTranslate'>"HERE"</p>
    </div>
  </div>
`

translateText();

  