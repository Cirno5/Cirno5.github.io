
// 音乐播放器
var musicNode = document.getElementsByClassName('music')[0];
var mlist = document.getElementsByClassName('mlist')[0];
var lis = document.getElementsByClassName('lii');//ByTagName
var len = lis.length;


//"https://music.163.com/song/media/outer/url?id=xxx.mp3",
var musicsrc = [
    //Ultimate Grammy Collection - Contemporary Rock
    "https://music.163.com/song/media/outer/url?id=5159449.mp3",
    "https://music.163.com/song/media/outer/url?id=5159450.mp3",
    "https://music.163.com/song/media/outer/url?id=5159451.mp3",
    "https://music.163.com/song/media/outer/url?id=5159452.mp3",
    "https://music.163.com/song/media/outer/url?id=5159453.mp3",
    "https://music.163.com/song/media/outer/url?id=5159454.mp3",
    "https://music.163.com/song/media/outer/url?id=5159455.mp3",
    "https://music.163.com/song/media/outer/url?id=5159456.mp3",
    "https://music.163.com/song/media/outer/url?id=5159457.mp3",
    "https://music.163.com/song/media/outer/url?id=5159458.mp3",
    "https://music.163.com/song/media/outer/url?id=5159459.mp3",
   // "https://music.163.com/song/media/outer/url?id=5159460.mp3",
    "https://music.163.com/song/media/outer/url?id=5159461.mp3",
    "https://music.163.com/song/media/outer/url?id=5159462.mp3",
    "https://music.163.com/song/media/outer/url?id=5159463.mp3",
    "https://music.163.com/song/media/outer/url?id=5159464.mp3",


    //The Essential Clash
    "https://music.163.com/song/media/outer/url?id=19576931.mp3",
    "https://music.163.com/song/media/outer/url?id=19576932.mp3",
    "https://music.163.com/song/media/outer/url?id=19576933.mp3",
    "https://music.163.com/song/media/outer/url?id=19576934.mp3",
    "https://music.163.com/song/media/outer/url?id=19576935.mp3",
    "https://music.163.com/song/media/outer/url?id=19576936.mp3",
    "https://music.163.com/song/media/outer/url?id=19576937.mp3",
    "https://music.163.com/song/media/outer/url?id=19576938.mp3",
    "https://music.163.com/song/media/outer/url?id=19576939.mp3",
    "https://music.163.com/song/media/outer/url?id=19576940.mp3",
    "https://music.163.com/song/media/outer/url?id=19576941.mp3",
    "https://music.163.com/song/media/outer/url?id=19576942.mp3",
    "https://music.163.com/song/media/outer/url?id=19576943.mp3",
    "https://music.163.com/song/media/outer/url?id=19576944.mp3",
    "https://music.163.com/song/media/outer/url?id=19576945.mp3",
    "https://music.163.com/song/media/outer/url?id=19576946.mp3",
    "https://music.163.com/song/media/outer/url?id=19576947.mp3",
    "https://music.163.com/song/media/outer/url?id=19576948.mp3",
    "https://music.163.com/song/media/outer/url?id=19576949.mp3",
    "https://music.163.com/song/media/outer/url?id=19576950.mp3",
    "https://music.163.com/song/media/outer/url?id=19576951.mp3",
    "https://music.163.com/song/media/outer/url?id=19576952.mp3",
    "https://music.163.com/song/media/outer/url?id=19576953.mp3",
    "https://music.163.com/song/media/outer/url?id=19576954.mp3",
    "https://music.163.com/song/media/outer/url?id=19576955.mp3",
    "https://music.163.com/song/media/outer/url?id=19576956.mp3",
    "https://music.163.com/song/media/outer/url?id=19576957.mp3",
    "https://music.163.com/song/media/outer/url?id=19576958.mp3",
    "https://music.163.com/song/media/outer/url?id=19576959.mp3",
    "https://music.163.com/song/media/outer/url?id=19576960.mp3",
    "https://music.163.com/song/media/outer/url?id=19576961.mp3",
    "https://music.163.com/song/media/outer/url?id=19576962.mp3",
    "https://music.163.com/song/media/outer/url?id=19576963.mp3",
    "https://music.163.com/song/media/outer/url?id=19576964.mp3",
    "https://music.163.com/song/media/outer/url?id=19576965.mp3",
    "https://music.163.com/song/media/outer/url?id=19576966.mp3",
    "https://music.163.com/song/media/outer/url?id=19576967.mp3",
    "https://music.163.com/song/media/outer/url?id=19576968.mp3",
    "https://music.163.com/song/media/outer/url?id=19576969.mp3",
    "https://music.163.com/song/media/outer/url?id=19576970.mp3",
    "https://music.163.com/song/media/outer/url?id=19576971.mp3",
   
   //Never Mind The Bollocks, Here’s The *** Pistols
   "https://music.163.com/song/media/outer/url?id=21706806.mp3",
   "https://music.163.com/song/media/outer/url?id=21706807.mp3",
   "https://music.163.com/song/media/outer/url?id=21706808.mp3",
   "https://music.163.com/song/media/outer/url?id=21706809.mp3",
   "https://music.163.com/song/media/outer/url?id=21706810.mp3",
   "https://music.163.com/song/media/outer/url?id=21706811.mp3",
   "https://music.163.com/song/media/outer/url?id=21706812.mp3",
   "https://music.163.com/song/media/outer/url?id=21706813.mp3",
   "https://music.163.com/song/media/outer/url?id=21706814.mp3",
   "https://music.163.com/song/media/outer/url?id=21706815.mp3",
   "https://music.163.com/song/media/outer/url?id=21706816.mp3",
   "https://music.163.com/song/media/outer/url?id=21706817.mp3",
    
];//
    //网易云歌的url

musicNode.src = musicsrc[0];
for (var i = 0; i < len; i++) {//单击改变playmusic
    (function (i) {
        lis[i].onclick = function () {
            musicNode.src = musicsrc[i];
            musicNode.load();
            musicNode.play();
            for (var j = 0; j < len; j++) {
                lis[j].className = '';
            }
            this.className = 'play';
        }
    })(i);
}
musicNode.onended = function () {//音乐播放完后自动下一曲
    var ended = getPlay();
    if (ended == len - 1) {//若为最后一曲则放第一曲
        musicNode.src = musicsrc[0];
        lis[0].className = 'play'
        lis[ended].className = '';
        musicNode.load();
        musicNode.play();
    } else {
        musicNode.src = musicsrc[ended + 1];
        lis[ended + 1].className = 'play';
        lis[ended].className = '';
        musicNode.load();
        musicNode.play();
    }

}
function getPlay() {//获取正在播放music的li
    for (var i = 0; i < len; i++) {
        if (lis[i].getAttribute('class') == 'play') {
            return i
        }
    }
}




  
