var app = new Vue({
    el: '#app',
    data: {
        index: 0,
        showVideo: false,
        question: [
            "문제1",
            "문제2",
            "문제3"
        ],
        examples: [
            [
                "문제1의 질문1",
                "문제1의 질문2",
                "문제1의 질문3",
                "문제1의 질문4"
            ],
            [
                "문제2의 질문1",
                "문제2의 질문2",
                "문제2의 질문3",
                "문제2의 질문4"
            ],
            [
                "문제3의 질문1",
                "문제3의 질문2",
                "문제3의 질문3",
                "문제3의 질문4"
            ]
        ],
        answerList:[1,2,3]
    },
    methods: {
        goBack: function() {
            if(this.isNum(this.index)) this.index--;
        },
        isNum: function(index) {
            return index > 0;
        },
        isRight: function(answerNum) {
            if(this.answerList[this.index] == answerNum) {
                this.isEnd();
            } else {
                alert("실패 메시지");
            }
        },
        isEnd: function() {
            console.log("테스트주석", this.index, this.answerList.length);
            if(this.index >= this.answerList.length-1) {
                this.showVideo = true;
            } else {
                this.index++;
            }
        }
    }
  })