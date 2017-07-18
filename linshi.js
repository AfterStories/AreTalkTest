接口 每个等级取题数：









var testBox = '<div class="swiper-slide stop-swiping"><div class="testBox">      </div></div>'



                
var testTitle = '<div class="title">'+题目标题'+</div>'   //1加入到testBox

var testContentBox = '<div class="testMain"> </div>'//2 加入到testBox
 




var TestContent = '<div class="TestContent">'+题目文字内容+' </div>'    //3加入到testContentBox


//4 如果有题目音频的话  加入到testContentBox
var AudioTemp = '<img src="src/img/audioICON.png" class="audioICON" ><audio class="testaudio"><source src='+音频资源+' type="audio/mpeg"></audio>'

//4 如果有题目图片的话 加入到testContentBox
var ImgTemp = '<img src="src/img/TestIMG.jpeg" class="testImg">'                




//如果是 文字选项 5加入到testBox
 
var textOption =  '<div class="options" ><div class="answer" ><span class="mark">A</span>'+选项内容1+'</div><div class="answer" ><span class="mark">B</span>'+选项内容2+'</div><div class="answer" ><span class="mark">C</span>'+选项内容3+'</div><div class="answer" ><span class="mark">D</span>'+选项内容4+'</div><div class="ADTest submitBtn" TrueAnswer='+正确答案+'>提交</div></div>'
                
            
//如果是 图片选项 5加入到testBox

var ImgOption =  '<div class="IMGoptions"><div class="IMGanswer"><div class="IMGmark">A</div><img class="OptionsIMG" src='+选项图片地址+'></div><div class="IMGanswer"><div class="IMGmark">B</div><img class="OptionsIMG" src='+选项图片地址+'></div><div class="IMGanswer"><div class="IMGmark">C</div><img class="OptionsIMG" src='+选项图片地址+'></div><div class="IMGanswer"><div class="IMGmark">D</div><img class="OptionsIMG" src='+选项图片地址+'></div><div class="clear"></div><div class="ADTest ani submitBtn" TrueAnswer="c">提交</div></div>'