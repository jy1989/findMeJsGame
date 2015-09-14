require.config({
          baseUrl: "./src",
});

requirejs(['el','gamelauncher'],
function   (el,gamelauncher) {
   // var levelIndex = gamestatus.levelIndex;
	//var score = 0;
	
	//console.log(gamelauncher);
	var ua = navigator.userAgent.toLowerCase();
	//console.log(ua);
	if (ua.match(/msie ([\d.]+)/)) {
		el.playButton.innerHTML = '你还用IE!?';
	} else {
		el.playButton.addEventListener('click', gamelauncher.playButtonGameStart, false);
		
		if (/android/i.test(ua) || /iphone/i.test(ua)) {
				//console.log('android iphone');
			var css = "body::-webkit-scrollbar {width: 0 !important;height: 0 !important; }";//html{width:100;height:100%;overflow:scroll;-webkit-overflow-scrolling: touch;}";

			var style = document.createElement('style');
			style.innerHTML=css;

			document.getElementsByTagName('head')[0].appendChild(style);
		}else{
			el.playButton.innerHTML = '话说，这个小游戏不是给电脑玩的';
			el.playButton.style.width='400px';
		}
	}
});