let count = 1;
let nowPlaying=false;
let timer;

const src="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
const MIN=1;
const MAX=19;

function left(){
  count = count -  1;
  let url;
  if(count<MIN){
    count = MAX;
    thumbnailsElement.children[0].classList.remove("selected");
  }else {
    thumbnailsElement.children[count].classList.remove("selected");
  }
  if(count<10){
    url =src+"0"+count+".jpg";
  }else{
    url =src+count+".jpg";
  }
  mainElement.setAttribute('src',url);
  thumbnailsElement.children[count-1].classList.add("selected");
}

function right(){
  count = count +  1;
  let url;
  if(count>MAX){
    count = MIN;
    thumbnailsElement.children[MAX-1].classList.remove("selected");
  }else {
    thumbnailsElement.children[count-2].classList.remove("selected");
  }
  if(count<10){
    url =src+"0"+count+".jpg";
  }else{
    url =src+count+".jpg";
  }
  mainElement.setAttribute('src',url);
  thumbnailsElement.children[count-1].classList.add("selected");
}

function autoPlay(){
  right();
  timer = setTimeout(function(){
  autoPlay();
}, 1000);
}

function play(){
  if(!nowPlaying){
    nowPlaying=true;
    autoPlay();
  }
}

function stop(){
  clearTimeout(timer);
  nowPlaying=false;
}

function reset(){
  stop();
  console.log(count);
  thumbnailsElement.children[count-1].classList.remove("selected");
  thumbnailsElement.children[0].classList.add("selected");
  url="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg";
  mainElement.setAttribute('src',url);
  count=1;
}
