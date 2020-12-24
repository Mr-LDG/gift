var app = new Vue({
    el: '#app',
    data: {
        index: 0,
        showVideo: false,
        keyword: '',
        keywordList: [
            "보이는라디오",
            "통화후에",
            "선물의시작",
            "컨디션안좋은날",
            "사무실에서",
            "출근길에서",
            "광주에서",
            "포항에서",
            "아쉬운날",
            "니가생각나",
            "100일기념"
        ],
        urlList: [
            "u_mXnkhOQhQ",
            "N4Veq6zg1M0",
            "lA0I4nr7lpI",
            "JRrfiQW193I",
            "0_dhVBA1o0s",
            "rPX01rC91lU",
            "FiK49Vr_b-s",
            "83tAsoHQFd4",
            "8oocBTP2uR4",
            "F-AheCHlz1o",
            "mY56r_fGntw"
        ]   
    },
    methods: {
        checkKeyword: function() {
            var _index = this.keywordList.findIndex(keywordUnit => {
                return keywordUnit == this.keyword;
            })
            this.setVideo(_index);
        },
        setVideo: function(index){
            if(index === -1) {
                alert("키워드가 틀렸어용 ㅠ");
                return;
            }
            this.playVideo(index);
        },
        playVideo: function(index) {
            this.showVideo = true;
            srcUrl = this.urlList[index];
            tag.src = "https://www.youtube.com/iframe_api";
        }
    }
})


// YOUTUBE API
var tag = document.createElement('script');

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var srcUrl;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: srcUrl,
    events: {
        'onReady': onPlayerReady
    }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}
