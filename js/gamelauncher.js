define(['settingmap', 'el', 'game', 'gamestatus'], function (settingMap, el, game, gamestatus) {

	function startgame() {

		el.playdiv.style.display = 'none';

		var setting = {
			scWidth : settingMap.scWidth[gamestatus.levelIndex],
			scHeight : settingMap.scHeight[gamestatus.levelIndex],
			bxWidth : settingMap.bxWidth[gamestatus.levelIndex],
			bxHeight : settingMap.bxHeight[gamestatus.levelIndex],
			totalTime : settingMap.totalTime[gamestatus.levelIndex],
			level : settingMap.level[gamestatus.levelIndex],
			maxLevel : settingMap.level.length,
			boxColor : settingMap.boxColor[gamestatus.levelIndex],
			babyBoxColor : settingMap.babyBoxColor[gamestatus.levelIndex],
			babyBoxHeight : settingMap.babyBoxHeight[gamestatus.levelIndex],
			babyBoxWidth : settingMap.babyBoxWidth[gamestatus.levelIndex],
			babyBoxCount : settingMap.babyBoxCount[gamestatus.levelIndex]
		};

		var mygame = game.createNew(setting);
		mygame.initEl();
		mygame.initEvent();

	}

	return {

		playButtonGameStart : function () {
			startgame();
		}
	};

});
