
// 音乐播放器
var musicNode = document.getElementsByClassName('music')[0];
var mlist = document.getElementsByClassName('mlist')[0];
var lis = document.getElementsByTagName('li');//
var len = lis.length;


//"https://music.163.com/song/media/outer/url?id=xxx.mp3",
var musicsrc = [
    //1Ultimate Grammy Collection - Contemporary Rock(16-1)
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
    // "https://music.163.com/song/media/outer/url?id=5159460.mp3",//In My Place(无）
    "https://music.163.com/song/media/outer/url?id=5159461.mp3",
    "https://music.163.com/song/media/outer/url?id=5159462.mp3",
    "https://music.163.com/song/media/outer/url?id=5159463.mp3",

    "https://music.163.com/song/media/outer/url?id=5159464.mp3",


    //2The Essential Clash(41)
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
   
   //3Never Mind The Bollocks, Here’s The *** Pistols(12)
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
   
   //4In The Court Of The Crimson King (40th Anniversary Series Deluxe Edition)(47)
   "https://music.163.com/song/media/outer/url?id=4143634.mp3",//21st Century Schizoid Man (2009 Stereo Mix)
   "https://music.163.com/song/media/outer/url?id=4143638.mp3",//I Talk To The Wind (2009 Stereo Mix)
   "https://music.163.com/song/media/outer/url?id=4143641.mp3",//Epitaph (2009 Stereo Mix)
   "https://music.163.com/song/media/outer/url?id=4143645.mp3",//Moonchild (2009 Stereo Mix)
   "https://music.163.com/song/media/outer/url?id=4143648.mp3",//The Court Of The Crimson King (2009 Stereo Mix)
   
   "https://music.163.com/song/media/outer/url?id=4143651.mp3",//Moonchild(Full Version)
   "https://music.163.com/song/media/outer/url?id=4143654.mp3",//I Talk To The Wind(Duo version)
   "https://music.163.com/song/media/outer/url?id=4143657.mp3",//I Talk To The Wind(Alternate mix)
   "https://music.163.com/song/media/outer/url?id=4143661.mp3",//Epitaph(Backing Track)
   "https://music.163.com/song/media/outer/url?id=4143664.mp3",//Wind Session

   "https://music.163.com/song/media/outer/url?id=4143667.mp3",//21st Century Schizoid Man (Original Master Edition 2004)
   "https://music.163.com/song/media/outer/url?id=4143670.mp3",//I Talk To The Wind (Original Master Edition 2004)
   "https://music.163.com/song/media/outer/url?id=4143673.mp3",//Epitaph (Original Master Edition 2004)
   "https://music.163.com/song/media/outer/url?id=4143676.mp3",//Moonchild (Original Master Edition 2004)
   "https://music.163.com/song/media/outer/url?id=4143681.mp3",//The Court Of The Crimson King (Original Master Edition 2004)

   "https://music.163.com/song/media/outer/url?id=4143684.mp3",
   "https://music.163.com/song/media/outer/url?id=4143688.mp3",
   "https://music.163.com/song/media/outer/url?id=4143692.mp3",
   "https://music.163.com/song/media/outer/url?id=4143695.mp3",
   "https://music.163.com/song/media/outer/url?id=4143699.mp3",

   "https://music.163.com/song/media/outer/url?id=4143702.mp3",
   "https://music.163.com/song/media/outer/url?id=4143704.mp3",
   "https://music.163.com/song/media/outer/url?id=4143707.mp3",
   "https://music.163.com/song/media/outer/url?id=4143709.mp3",
   "https://music.163.com/song/media/outer/url?id=4143712.mp3",

   "https://music.163.com/song/media/outer/url?id=4143715.mp3",
   "https://music.163.com/song/media/outer/url?id=4143719.mp3",
   "https://music.163.com/song/media/outer/url?id=4143723.mp3",
   "https://music.163.com/song/media/outer/url?id=4143727.mp3",
   "https://music.163.com/song/media/outer/url?id=4143731.mp3",

   "https://music.163.com/song/media/outer/url?id=4143735.mp3",
   "https://music.163.com/song/media/outer/url?id=4143739.mp3",
   "https://music.163.com/song/media/outer/url?id=4143743.mp3",
   "https://music.163.com/song/media/outer/url?id=4143746.mp3",
   "https://music.163.com/song/media/outer/url?id=4143749.mp3",

   "https://music.163.com/song/media/outer/url?id=4143752.mp3",
   "https://music.163.com/song/media/outer/url?id=4143756.mp3",
   "https://music.163.com/song/media/outer/url?id=4143759.mp3",
   "https://music.163.com/song/media/outer/url?id=4143762.mp3",
   "https://music.163.com/song/media/outer/url?id=4143765.mp3",

   "https://music.163.com/song/media/outer/url?id=4143769.mp3",
   "https://music.163.com/song/media/outer/url?id=4143772.mp3",
   "https://music.163.com/song/media/outer/url?id=4143775.mp3",
   "https://music.163.com/song/media/outer/url?id=4143778.mp3",
   "https://music.163.com/song/media/outer/url?id=4143781.mp3",

   "https://music.163.com/song/media/outer/url?id=4143783.mp3",
   "https://music.163.com/song/media/outer/url?id=4143785.mp3",
  

    //5The Bends(12)
    "https://music.163.com/song/media/outer/url?id=18795416.mp3",
    "https://music.163.com/song/media/outer/url?id=18795418.mp3",
    "https://music.163.com/song/media/outer/url?id=18795421.mp3",
    "https://music.163.com/song/media/outer/url?id=18795423.mp3",
    "https://music.163.com/song/media/outer/url?id=18795425.mp3",
   
    "https://music.163.com/song/media/outer/url?id=18795427.mp3",
    "https://music.163.com/song/media/outer/url?id=18795429.mp3",
    "https://music.163.com/song/media/outer/url?id=18795431.mp3",
    "https://music.163.com/song/media/outer/url?id=18795433.mp3",
    "https://music.163.com/song/media/outer/url?id=18795434.mp3",

    "https://music.163.com/song/media/outer/url?id=18795435.mp3",
    "https://music.163.com/song/media/outer/url?id=18795436.mp3",
    

    //6To Pimp a Butterfly(16-3)
    "https://music.163.com/song/media/outer/url?id=31010333.mp3",
    "https://music.163.com/song/media/outer/url?id=31010332.mp3",
    "https://music.163.com/song/media/outer/url?id=31010334.mp3",
    "https://music.163.com/song/media/outer/url?id=31010335.mp3",
    // "https://music.163.com/song/media/outer/url?id=31010338.mp3",//These Walls(无)

    "https://music.163.com/song/media/outer/url?id=31010337.mp3",
    // "https://music.163.com/song/media/outer/url?id=31010336.mp3",//Alright(无)
    // "https://music.163.com/song/media/outer/url?id=31010339.mp3",//For Sale? (Interlude)(无)
    "https://music.163.com/song/media/outer/url?id=31010343.mp3",
    "https://music.163.com/song/media/outer/url?id=31010340.mp3",

    "https://music.163.com/song/media/outer/url?id=31010342.mp3",
    "https://music.163.com/song/media/outer/url?id=31010341.mp3",
    "https://music.163.com/song/media/outer/url?id=31010345.mp3",
    "https://music.163.com/song/media/outer/url?id=31010344.mp3",
    "https://music.163.com/song/media/outer/url?id=31010346.mp3",

    "https://music.163.com/song/media/outer/url?id=31010347.mp3",


    //7그때 그 날들, 지금 이 순간（8）
    "https://music.163.com/song/media/outer/url?id=32683078.mp3",
    "https://music.163.com/song/media/outer/url?id=32683079.mp3",
    "https://music.163.com/song/media/outer/url?id=32683080.mp3",
    "https://music.163.com/song/media/outer/url?id=32683081.mp3",
    "https://music.163.com/song/media/outer/url?id=32683082.mp3",

    "https://music.163.com/song/media/outer/url?id=32683083.mp3",
    "https://music.163.com/song/media/outer/url?id=32683084.mp3",
    "https://music.163.com/song/media/outer/url?id=32683085.mp3",

    //8Rock Symphonies(19)
    "https://music.163.com/song/media/outer/url?id=1220190.mp3",
    "https://music.163.com/song/media/outer/url?id=1220195.mp3",
    "https://music.163.com/song/media/outer/url?id=1220199.mp3",//The 5th
    "https://music.163.com/song/media/outer/url?id=1220202.mp3",
    "https://music.163.com/song/media/outer/url?id=1220204.mp3",

    "https://music.163.com/song/media/outer/url?id=1220208.mp3",
    "https://music.163.com/song/media/outer/url?id=1220212.mp3",
    "https://music.163.com/song/media/outer/url?id=1220218.mp3",
    "https://music.163.com/song/media/outer/url?id=1220223.mp3",
    "https://music.163.com/song/media/outer/url?id=1220228.mp3",

    "https://music.163.com/song/media/outer/url?id=1220233.mp3",
    "https://music.163.com/song/media/outer/url?id=1220238.mp3",
    "https://music.163.com/song/media/outer/url?id=1220241.mp3",
    "https://music.163.com/song/media/outer/url?id=1220247.mp3",
    "https://music.163.com/song/media/outer/url?id=1220253.mp3",

    "https://music.163.com/song/media/outer/url?id=1220258.mp3",
    "https://music.163.com/song/media/outer/url?id=1220263.mp3",
    "https://music.163.com/song/media/outer/url?id=1220266.mp3",
    "https://music.163.com/song/media/outer/url?id=1220270.mp3",
    
    //9Pike 65: Hold Me Forever (In Memory Of My Mom Nancy York Carroll)(6)
    "https://music.163.com/song/media/outer/url?id=28733479.mp3",
    "https://music.163.com/song/media/outer/url?id=28733480.mp3",
    "https://music.163.com/song/media/outer/url?id=28733481.mp3",
    "https://music.163.com/song/media/outer/url?id=28733482.mp3",
    "https://music.163.com/song/media/outer/url?id=28733483.mp3",
    
    "https://music.163.com/song/media/outer/url?id=28733484.mp3",
    
   //10Imaginaerum(25)
   "https://music.163.com/song/media/outer/url?id=21311952.mp3",
   "https://music.163.com/song/media/outer/url?id=21311953.mp3",
   "https://music.163.com/song/media/outer/url?id=21311954.mp3",
   "https://music.163.com/song/media/outer/url?id=21311955.mp3",
   "https://music.163.com/song/media/outer/url?id=21311956.mp3",

   "https://music.163.com/song/media/outer/url?id=21311957.mp3",
   "https://music.163.com/song/media/outer/url?id=21311958.mp3",
   "https://music.163.com/song/media/outer/url?id=21311959.mp3",
   "https://music.163.com/song/media/outer/url?id=21311960.mp3",
   "https://music.163.com/song/media/outer/url?id=21311961.mp3",

   "https://music.163.com/song/media/outer/url?id=21311962.mp3",
   "https://music.163.com/song/media/outer/url?id=21311963.mp3",
   "https://music.163.com/song/media/outer/url?id=21311964.mp3",
   "https://music.163.com/song/media/outer/url?id=479642106.mp3",
   "https://music.163.com/song/media/outer/url?id=479642105.mp3",

   "https://music.163.com/song/media/outer/url?id=479296201.mp3",
   "https://music.163.com/song/media/outer/url?id=479296200.mp3",
   "https://music.163.com/song/media/outer/url?id=479296199.mp3",
   "https://music.163.com/song/media/outer/url?id=479296198.mp3",
   "https://music.163.com/song/media/outer/url?id=479296197.mp3",

   "https://music.163.com/song/media/outer/url?id=479296196.mp3",
   "https://music.163.com/song/media/outer/url?id=479296195.mp3",
   "https://music.163.com/song/media/outer/url?id=479296194.mp3",
   "https://music.163.com/song/media/outer/url?id=479296193.mp3",
   "https://music.163.com/song/media/outer/url?id=479296192.mp3",
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




  
