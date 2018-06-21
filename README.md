<p align="center">
  <a href="https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj"><img src="./images/banner.PNG?raw=true"></a>

  **Share on:** <a href="https://news.ycombinator.com/submitlink?u=https://github.com/MarsAtHome/marsjs&t=Labeling Unsplash.com photos using Tensorflow.js in your browser"><img src="./images/hacker-news.png" width="30px;"></a>
  <a href="https://twitter.com/home?status=Using%20Deep%20Learning,%20Label%20Unsplash.com%20photos%20with%20Tensorflow.js%20in%20your%20browser%3A%20https%3A//github.com/MarsAtHome/marsjs"><img src="./images/twitter.png" width="30px;"></a>
</p>

# Marsjs - Using Tensorflow.js & Crowd Computing to label Unsplash photos in browser

Marsjs is the browser client for Mars@Home. Currently this extension labels image from [Unsplash](https://unsplash.com) in browser - using MobileNet on Tensorflow.Js. Install [Mars@Home from Chrome Store](https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj)

## Project Structure

* [`captioner`](./captioner): Contains MobileNet & TensorflowJs code for Image Labeling
* [`extension`](./extension): Contains code of Chrome Extension
* [`images`](./images): Screenshots & media files for the README
* [`logo-files`](./logo-files): Logo files for [Mars@Home](https://github.com/MarsAtHome/)

## Non-Developer quickstart
Install [Mars@Home for Google Chrome](https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj)

## Developer quickstart

Clone this project

```
$ git clone https://github.com/MarsAtHome/marsjs
```

#### In Firefox
1. Go to `about:debugging` in Firefox

2. Click `Load Temporary Add-on`, select any file from inside `extension` folder from cloned project

#### In Chrome
1. Go to `chrome://extensions/` in Chrome

2. Turn ON `Developer mode`

3. Click `LOAD UNPACKED` and select the `extension` folder from cloned project

**Check the Current task by clicking <img src="./logo-files/MarsAtHome.png?raw=true" width="24" height="24"> in your browser's url bar**

## Few Examples of Image Labeling

[![Screenshot Squirrel](./images/ss5.png?raw=true)](https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj)

[![Screenshot Rose Hands](./images/ss3.png?raw=true)](https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj)

[![Screenshot Spiral](./images/ss4.png?raw=true)](https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj)

[![Screenshot Cab](./images/ss6.png?raw=true)](https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj)

[![Screenshot Balloon](./images/ss8.png?raw=true)](https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj)

[![Screenshot Alp](./images/ss7.png?raw=true)](https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj)

[![Screenshot Pole](./images/ss2.png?raw=true)](https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj)

[![Screenshot Gazelle](./images/ss1.png?raw=true)](https://chrome.google.com/webstore/detail/marshome/dikaddifgkonkicimbgikbcbaagajjhj)


## Libraries & Model used

* [Tensorflow.js](https://github.com/tensorflow/tfjs)
* [TFJS Converter](https://github.com/tensorflow/tfjs-converter)
* [MobileNet Ported to Tensorflow.js](https://github.com/tensorflow/tfjs-converter/tree/master/demo/mobilenet)

## Learn more about Mars@Home project
Do visit → https://marsathome.org