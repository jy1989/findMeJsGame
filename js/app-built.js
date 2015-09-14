define("util",[],function(){return{gE:function(e){return document.getElementById(e)},rd:function(e,t){var n=t-e+1;return Math.floor(Math.random()*n+e)},removeElementsByClass:function(e){var t=document.getElementsByClassName(e);while(t.length>0)t[0].parentNode.removeChild(t[0])}}}),define("el",["util"],function(e){var t={info:e.gE("info"),scrollview:e.gE("scrollview"),box:e.gE("box"),timecount:e.gE("timecount"),level:e.gE("level"),lb:e.gE("lb"),playButton:e.gE("playbutton"),playdiv:e.gE("playdiv")};return t}),define("settingmap",["require"],function(e){var t={scWidth:[4e3,6e3,8e3],scHeight:[5e3,7e3,9e3],bxWidth:[100,90,80],bxHeight:[100,90,80],totalTime:[50,40,30],level:[1,2,3],boxColor:["yellow","green","blue"],babyBoxColor:["green","red","orange"],babyBoxHeight:[50,60,70],babyBoxWidth:[50,60,70],babyBoxCount:[50,100,150]};return t}),define("gamestatus",[],function(){return{score:0,levelIndex:0}}),define("game",["util","gamestatus","el","gamelauncher"],function(e,t,n,r){return{createNew:function(r){var i,s,o=0,u,a=0,f={initEl:function(){u=this,a=t.score,n.scrollview.style.width=r.scWidth+"px",n.scrollview.style.height=r.scHeight+"px",n.scrollview.style.border="10px solid #f0f0f0",i=u.getViewport(),n.box.style.width=r.bxWidth+"px",n.box.style.height=r.bxHeight+"px",n.box.style.left=e.rd(i.width+r.bxWidth,r.scWidth-r.bxWidth)+"px",n.box.style.top=e.rd(i.height+r.bxHeight,r.scHeight-r.bxHeight)+"px",n.box.style.display="block",n.box.style.backgroundColor=r.boxColor,n.level.innerHTML="第"+r.level+"关",u.babyBoxJoin()},initEvent:function(){document.body.addEventListener("scroll",u.getCurPos,!1),document.body.addEventListener("touchstart",u.touchStartEvent,!1),document.body.addEventListener("touchend",u.touchEndEvent,!1),n.box.addEventListener("click",u.youFindMeSuccess,!1),window.addEventListener("resize",u.resizeEvent,!1),s=u.intervalTrigger()},clean:function(){document.body.removeEventListener("scroll",u.getCurPos,!1),document.body.removeEventListener("touchstart",u.touchStartEvent,!1),document.body.removeEventListener("touchend",u.touchEndEvent,!1),n.box.removeEventListener("click",u.youFindMeSuccess,!1),window.removeEventListener("resize",u.resizeEvent,!1),window.clearInterval(s),e.removeElementsByClass("babybox")},getViewport:function(){var e=window,t="inner";return"innerWidth"in window||(t="client",e=document.documentElement||body),{width:e[t+"Width"],height:e[t+"Height"]}},getCurPos:function(){var e=n.box.getBoundingClientRect();e.top>i.height?n.info.innerText="我在下面":e.bottom<0?n.info.innerText="我在上面":e.left>i.width?n.info.innerText="我在右边":e.right<0?n.info.innerText="我在左边":n.info.innerText="快点我！"},resizeEvent:function(){i=u.getViewport(),u.getCurPos()},intervalTrigger:function(){return window.setInterval(function(){r.totalTime--,a++,n.timecount.innerText="剩余时间"+r.totalTime+"s",n.lb.innerHTML="总用时"+a+"s",r.totalTime<=0&&u.youFindMeFail()},1e3)},youFindMeSuccess:function(){n.info.innerText="你找到我了！",u.clean(),playdiv.style.display="block",r.level>=r.maxLevel?(n.playButton.innerText="好咯，你赢了咯!!",n.playButton.removeEventListener("click",require("gamelauncher").playButtonGameStart,!1)):(t.levelIndex++,n.playButton.innerText="来!下一关！！",t.score=a)},youFindMeFail:function(){n.info.innerText="你居然找不到我！T_T",u.clean(),n.playdiv.style.display="block",n.playButton.innerText="重新开始！！"},touchStartEvent:function(){},touchEndEvent:function(){},babyBoxJoin:function(){for(var t=0;t<r.babyBoxCount;t++){var i=document.createElement("div");i.style.width=r.babyBoxWidth+"px",i.style.height=r.babyBoxHeight+"px",i.style.backgroundColor=r.babyBoxColor,i.style.left=e.rd(0,r.scWidth-r.babyBoxWidth)+"px",i.style.top=e.rd(0,r.scHeight-r.babyBoxHeight)+"px",i.classList.add("babybox"),n.scrollview.appendChild(i)}}};return f}}}),define("gamelauncher",["settingmap","el","game","gamestatus"],function(e,t,n,r){function i(i){t.playdiv.style.display="none";var s={scWidth:e.scWidth[r.levelIndex],scHeight:e.scHeight[r.levelIndex],bxWidth:e.bxWidth[r.levelIndex],bxHeight:e.bxHeight[r.levelIndex],totalTime:e.totalTime[r.levelIndex],level:e.level[r.levelIndex],maxLevel:e.level.length,boxColor:e.boxColor[r.levelIndex],babyBoxColor:e.babyBoxColor[r.levelIndex],babyBoxHeight:e.babyBoxHeight[r.levelIndex],babyBoxWidth:e.babyBoxWidth[r.levelIndex],babyBoxCount:e.babyBoxCount[r.levelIndex]},o=n.createNew(s);o.initEl(),o.initEvent()}return{playButtonGameStart:function(){i(r.levelIndex)}}}),require.config({baseUrl:"./js"}),requirejs(["el","gamelauncher"],function(e,t){var n=navigator.userAgent.toLowerCase();if(n.match(/msie ([\d.]+)/))e.playButton.innerHTML="你还用IE!?";else{e.playButton.addEventListener("click",t.playButtonGameStart,!1);if(/android/i.test(n)||/iphone/i.test(n)){var r="body::-webkit-scrollbar {width: 0 !important;height: 0 !important; }",i=document.createElement("style");i.innerHTML=r,document.getElementsByTagName("head")[0].appendChild(i)}else e.playButton.innerHTML="话说，这个小游戏不是给电脑玩的",e.playButton.style.width="400px"}}),define("app",function(){});