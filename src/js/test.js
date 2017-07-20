var UserToken = GetQueryString("userToken");


var AjaxURL = 'http://192.168.1.226:8188/AreTalkServer/Web/Api/getRandQuestion.action?userToken=611608f2782e4avc9a329add1184a33a'


var mySwiper
var Right = 0;
var Sum 

function GetQueryString(name)
{
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
} 
 


$(document).ready(function(){


  $.ajax({
    type: "GET",
    url: AjaxURL,
    data: {count:2},
    success: function (data) {                        
          for (var i = 0; i < data.data.questionList.length; i++) {
                Sum = data.data.questionList.length;
                var NewQuestion = '<div class="swiper-slide stop-swiping"><div class="testBox" id="testBox'+i+'"><div class="title">'+data.data.questionList[i].title+'</div> <div class="testMain" id="testMain'+i+'"><div class="TestContent">'+data.data.questionList[i].questionDescribe+' </div>          </div> </div></div>'

                $(".swiper-wrapper").append(NewQuestion);



          if (data.data.questionList[i].mp3Url){
                //4 如果有题目音频的话  加入到testMain
                var AudioTemp = '<img src="src/img/audioICON.png" class="audioICON" ><audio class="testaudio"><source src="http://192.168.1.226:8188'+data.data.questionList[i].mp3Url+'" type="audio/mpeg"></audio>'
                  
                $("#testMain"+i).append(AudioTemp);

          }else if(data.data.questionList[i].imgUrl){
                //4 如果有题目图片的话 加入到testMain
                var ImgTemp = '<img src=http://192.168.1.226:8188'+data.data.questionList[i].mp3Url+' class="testImg">'
                $("#testMain"+i).append(ImgTemp);

          }     
                            



              if (data.data.questionList[i].answerA.substr(0, 1) == "/") {
                 console.log("图片选项题");
                  console.log(data.data.questionList[i].answerA.substr(0, 1) );
                   //如果是 图片选项 5加入到testBox
                var ImgOption =  '<div class="IMGoptions"><div class="IMGanswer"><div class="IMGmark">A</div><img class="OptionsIMG" src="http://192.168.1.226:8188'+data.data.questionList[i].answerA+'"></div><div class="IMGanswer"><div class="IMGmark">B</div><img class="OptionsIMG" src="http://192.168.1.226:8188'+data.data.questionList[i].answerB+'"></div><div class="IMGanswer"><div class="IMGmark">C</div><img class="OptionsIMG" src="http://192.168.1.226:8188'+data.data.questionList[i].answerC+'"></div><div class="IMGanswer"><div class="IMGmark">D</div><img class="OptionsIMG" src="http://192.168.1.226:8188'+data.data.questionList[i].answerD+'"></div><div class="clear"></div><div class="ADTest ani submitBtn" TrueAnswer="c">提交</div></div>'
                    $("#testBox"+i).append(ImgOption);
                    console.log($("#testBox"+i))


              }else{
                 //如果是 文字选项 5加入#
                 
                  var textOption =  '<div class="options" ><div class="answer" ><span class="mark">A</span>'+data.data.questionList[i].answerA+'</div><div class="answer" ><span class="mark">B</span>'+data.data.questionList[i].answerB+'</div><div class="answer" ><span class="mark">C</span>'+data.data.questionList[i].answerC+'</div><div class="answer" ><span class="mark">D</span>'+data.data.questionList[i].answerD+'</div><div class="ADTest submitBtn" TrueAnswer='+data.data.questionList[i].realAnswer+'>提交</div></div>'
                  $("#testBox"+i).append(textOption);
                  console.log($("#testBox"+i))
                  console.log("文字选项题");
              }




            console.log(NewQuestion)
           
              
          }//for循环结束

         
StarSwiper();




             
      
        },
    error: function (a,b,c) {

           alert("网络超时，请重试");

         }

   });


})//ready结束








function StarSwiper(){


  mySwiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',        
        allowSwipeToPrev:false,//禁止向前
        pagination: '.swiper-pagination',
        scrollbar:'.swiper-scrollbar',
        //noSwiping : true,禁止滑动
        noSwipingClass : 'stop-swiping',
        paginationType: 'fraction',
        paginationFractionRender: function (swiper, currentClassName, totalClassName) {
          return '<span class="' + currentClassName + '"></span>' +
             ' of ' +
             '<span class="' + totalClassName + '"></span>';
      },
      onSlideChangeStart: function(swiper){   
      //回调函数，swiper从当前slide开始过渡到另一个slide时执行。
      //触摸情况下，如果释放slide时没有达到过渡条件而回弹时不会触发这个函数，此时可用onTransitionStart。
      //可接受swiper实例作为参数，输出的activeIndex是过渡后的slide索引。
      console.log("题目索引"+mySwiper.realIndex);
    }
  
  })



//按钮事件绑定


$(".answer").click(function(){
    $(this).addClass('ChooseThis').siblings().removeClass('ChooseThis');
})

$(".IMGanswer").click(function(){
    $(this).addClass('ChooseThis').siblings().removeClass('ChooseThis');
})


$('.submitBtn').click(function(){

  var ChooseAnswer = $(".ChooseThis").children().html().toLowerCase(); //选择的答案
  var TrueAnswer =  $(this).attr("TrueAnswer").toLowerCase();//正确答案


 if(ChooseAnswer == TrueAnswer){
      /*alert("答对啦~")*/
      Right = Right+1;
      $(".answer").removeClass('ChooseThis');
        if (mySwiper.isEnd) {
          window.location.href = "testfinish.html?Right="+Right+"&Sum="+Sum;
        }else{

            if ($(".testMain").hasClass("testaudio")) {
                 $('.testaudio')[0].pause(); 
                  mySwiper.slideNext();//滑动到下一个          
            }else{
                  mySwiper.slideNext();//滑动到下一个
            }
            
           
        }



 }else{

/*      alert("答错啦~正确答案是"+TrueAnswer.toUpperCase())*/
      $(".answer").removeClass('ChooseThis');
        if (mySwiper.isEnd) {
          window.location.href = "testfinish.html?Right="+Right+"&Sum="+Sum;
        }else{

            if ($(".testMain").hasClass("testaudio")) {
                 $('.testaudio')[0].pause(); 
                  mySwiper.slideNext();//滑动到下一个
 
            }else{
                  mySwiper.slideNext();//滑动到下一个
            }
            
                  }
 }

})



//音频播放控制
$(".audioICON").click(function(){

//获取audio需要[0]，因为js操作获得的是audio对象，jQuery选择器获得的是jQuery对象，[0]对象的才是对应的节点对象，所以不能直接使用jQuery对象去操作。
    var music = $(this).parent().find('audio')[0];

    if(music.paused){ 
        music.play(); 
        $(this).attr("src","src/img/Pause.png"); 
    }else{ 
        music.pause();        
        $(this).attr("src","src/img/audioICON.png"); 



    } 

})




}



