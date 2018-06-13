
import * as tf from '@tensorflow/tfjs';
import {MobileNet} from './mobilenet';
import imageURL from './mah224.png';

// for each image just processed
let captions = [];
let unsplashId = null;

let NEW_URL = 'https://marsathome.herokuapp.com/new';
let DONE_URL = 'https://marsathome.herokuapp.com/done';

const cat = document.getElementById('cat');
cat.onload = async () => {

  const resultElement = document.getElementById('result');

  resultElement.innerText = 'Loading MobileNet...';

  const mobileNet = new MobileNet();
  console.time('Loading of model');
  await mobileNet.load();
  console.timeEnd('Loading of model');

  const pixels = tf.fromPixels(cat);

  console.time('First prediction');
  let result = mobileNet.predict(pixels);
  // const topK = mobileNet.getTopKClasses(result, 5);
  const topK = mobileNet.getTopKClasses(result, 3);
  console.timeEnd('First prediction');

  resultElement.innerHTML = '';
  topK.forEach(x => {

    // truncate the label
    const TRUNCATE_LEN = 33;
    let shortLabel = x.label;
    if (x.label.length > TRUNCATE_LEN) {
      shortLabel = shortLabel.substr(0, TRUNCATE_LEN).trim();
      let lastSpace = shortLabel.lastIndexOf(' ');
      shortLabel = shortLabel.substr(0, lastSpace);
      shortLabel += '...'; // indicates that label was longer
    }

    resultElement.innerHTML += `<p>${x.value.toFixed(3)}: ${shortLabel}</p>`;

    let caption = {
      score: x.value.toFixed(3),
      label: x.label
    };
    captions.push(caption);
  });

  // console.log('Captions: ', captions);

  if (unsplashId != null) {
    saveCaptions(unsplashId, captions);

    // make empty again
    unsplashId = null;
    captions = [];
  } 
  // else {
  //   console.error('saveTask unsplashId null')
  // }

  // console.time('Subsequent predictions');
  // result = mobileNet.predict(pixels);
  // mobileNet.getTopKClasses(result, 3);
  // console.timeEnd('Subsequent predictions');
  mobileNet.dispose();
};
cat.src = imageURL;

async function saveCaptions(unsplashId, captions) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = async function() {
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("demo").innerHTML = this.responseText;

      console.log('Catpion saved: ', this.responseText);

      // increment the numProcessed count
      let numProcessed = localStorage.getItem('numProcessed');
      if (numProcessed == undefined) {
        localStorage.setItem('numProcessed', 1);
      } else {
        numProcessed = parseInt(numProcessed) + 1; // increment
        localStorage.setItem('numProcessed', numProcessed);
      }

      // once caption is saved, load a new task
      await delay(5*1000); // 5 secs
      loadTask();
    }
  };

  let excapedCaptions = JSON.stringify(captions);
  let userHash = localStorage.getItem('userHash');
  if (userHash == null) userHash = '';

  xhttp.open("POST", DONE_URL, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`userHash=${userHash}&unsplashId=${unsplashId}&captions=${excapedCaptions}`);
}

/**
* actively waits for milisecs amount of time
*/
async function delay(milisecs) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, milisecs);
  });
}

/*
* get the photo
*/
function loadTask() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("demo").innerHTML = this.responseText;

      let photo = JSON.parse(this.responseText);
      console.log('Task fetched: ', photo.unsplashId);

      // set the global unsplashId value
      unsplashId = photo.unsplashId;
      setImage(photo);

      if (photo.userHash != undefined) {
        localStorage.setItem('userHash', photo.userHash);
      }
    }
  };

  let userHash = localStorage.getItem('userHash');
  if (userHash == null) userHash = '';

  xhttp.open("POST", NEW_URL, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`userHash=${userHash}`);
}

async function setImage(object) {
  let unsplashUrl = object.full;

  if (unsplashUrl == undefined) {
    console.log('unsplashUrl: ', unsplashUrl);
    return;
  }

  // also set link to Unsplash image
  // <h4 id="nowProcessing">Now processing: </h4>
  let photoLink = `https://unsplash.com/photos/${unsplashId}`;
  let nowProcessingTag = document.getElementById('nowProcessing');
  nowProcessing.innerHTML = `Now processing: <a target="_black" href="${photoLink}">${unsplashId}</a>`;

  /*
  * replace fit, crop, w, h params with their value from url along "&".
  * then insert your own values.
  */
  unsplashUrl = unsplashUrl.replace(/&fit=[a-z]\w+/, '');
  unsplashUrl = unsplashUrl.replace(/&w=[0-9]\w+/, '');
  unsplashUrl = unsplashUrl.replace(/&h=[0-9]\w+/, '');
  unsplashUrl = unsplashUrl.replace(/&crop=[a-z]\w+/, '');

  unsplashUrl = unsplashUrl + '&h=224&w=224&fit=crop&crop=faces';

  // console.log('Unsplash refined Url: ', unsplashUrl);

  let dataUrl = await toDataURL(unsplashUrl);
  // now set this url as the image url
  let img = document.getElementById("cat");
  img.src = dataUrl;
}

/**
* funciton that converts the image to dataUrl (base64)
*/
const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }));

loadTask();
