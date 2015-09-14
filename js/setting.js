define(['settingmap', 'gamestatus'], function (settingMap, gamestatus) {
/*
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
*/


var setting = {};

// Extend this list to all the fields that follow the pattern.
var fields = ["scWidth", "scHeight",'bxWidth','bxHeight','totalTime','level','boxColor','babyBoxColor','babyBoxHeight','babyBoxWidth','babyBoxCount'];

for (var i = 0, field; (field = fields[i]); ++i) {
    (function (field) {
        Object.defineProperty(setting, field, {
            get: function () {
                return settingMap[field][gamestatus.levelIndex];
            }
        });
    })(field);
}




	return setting;

});
