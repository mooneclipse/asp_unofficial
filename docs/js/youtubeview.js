// API読み込み
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
// API読み込み後にプレーヤーの設定
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player");
}

// ボタンクリック時の操作
document.getElementById("play").addEventListener("click", function() {
  player.playVideo();
}, false);
 
// ボタンクリック時の操作
let targets = document.getElementsByClassName("chapter");
for(let i = 0; i < targets.length; i++){
  targets[i].addEventListener("click",() => {
    var chapter = targets[i].text();
    alert("CLASS: btn02がクリックされました。");
    var hours = parseInt(chapter.split(":")[0]);
    var mins = parseInt(chapter.split(":")[1]);
    var secs = parseInt(chapter.split(":")[2]);
    mins += hours * 60;
    secs += mins * 60;
    
    player.seekTo(secs,true);
  }, false);
}

