import './style.css';
import { createLayout } from './components/Layout.js';
import { createVideoSection } from './components/VideoSection.js';
import { createSaveTheDate } from './components/SaveTheDate.js';
import { createGallery } from './components/Gallery.js';
import { createImageSection } from './components/ImageSection.js';

const content = `  
  ${createVideoSection()}
  ${createImageSection()}
  ${createSaveTheDate()}
  ${createGallery()}
`;

document.querySelector('#app').innerHTML = createLayout(content);