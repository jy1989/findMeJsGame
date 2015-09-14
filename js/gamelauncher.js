define(['settingmap','el','game','gamestatus'], function (settingMap,el,game,gamestatus) {

	function startgame() {

		el.playdiv.style.display = 'none';
		var mygame=game.createNew();
		mygame.initEl();
		mygame.initEvent();

	}
	
	
	return {
	
	 playButtonGameStart:function(){
		startgame();
	 }
	};

});