define(['util', 'gamestatus', 'el', 'gamelauncher', 'setting'], function (util, gamestatus, el, gamelauncher,setting) {

	return {
		createNew : function () {
			require.undef('setting');
			require(['setting']);
			var win;
			var intervalId;
			var timecount = 0;
			var _this;
			var appScore = 0;
			var game = {
				initEl : function () {
					_this = this;
					console.log(setting);
					//require.undef('setting');

					appScore = gamestatus.score;
					el.scrollview.style.width = setting.scWidth + 'px';
					el.scrollview.style.height = setting.scHeight + 'px';
					el.scrollview.style.border = '10px solid #f0f0f0';
					// document.body.scrollTop = rd(0, setting.scHeight - setting.bxHeight);
					// var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
					//scrollTop= rd(0, setting.scHeight - setting.bxHeight);
					// scrollTop= '500px';
					//document.body.scrollTop = rd(0, setting.scWidth - setting.bxWidth);

					//console.log(document.body.scrollTop);
					win = _this.getViewport();

					el.box.style.width = setting.bxWidth + 'px';
					el.box.style.height = setting.bxHeight + 'px';
					//el.box.style.left = util.rd(win.width + setting.bxWidth, setting.scWidth - setting.bxWidth) + 'px';
					//el.box.style.top = util.rd(win.height + setting.bxHeight, setting.scHeight - setting.bxHeight) + 'px';
					el.box.style.display = 'block';
					el.box.style.backgroundColor = setting.boxColor;

					el.level.innerHTML = '第' + setting.level + '关';

					_this.babyBoxJoin();
					//console.log(rd(win.width + setting.bxWidth, setting.vpWidth - setting.bxWidth));

					//console.log(this);

				},
				initEvent : function () {
					document.body.addEventListener('scroll', _this.getCurPos, false);
					document.body.addEventListener('touchstart', _this.touchStartEvent, false);
					document.body.addEventListener('touchend', _this.touchEndEvent, false);

					el.box.addEventListener('click', _this.youFindMeSuccess, false);

					window.addEventListener('resize', _this.resizeEvent, false);
					intervalId = _this.intervalTrigger();

				},
				clean : function () {
					//el.box.style.display='none';
					document.body.removeEventListener('scroll', _this.getCurPos, false);
					document.body.removeEventListener('touchstart', _this.touchStartEvent, false);
					document.body.removeEventListener('touchend', _this.touchEndEvent, false);
					el.box.removeEventListener('click', _this.youFindMeSuccess, false);
					window.removeEventListener('resize', _this.resizeEvent, false);
					window.clearInterval(intervalId);
					util.removeElementsByClass('babybox');
				},
				getViewport : function () {

					var e = window,
					a = 'inner';
					if (!('innerWidth' in window)) {
						a = 'client';
						e = document.documentElement || body;
					}
					return {
						width : e[a + 'Width'],
						height : e[a + 'Height']
					};
				},

				getCurPos : function () {
					var pos = el.box.getBoundingClientRect();
					//el.lb.innerHTML = '(' + Math.ceil(pos.width) + ',' + Math.ceil(pos.height) + ')';
					//console.log(pos);
					if (pos.top > win.height) {
						el.info.innerText = '我在下面';
					} else if (pos.bottom < 0) {
						el.info.innerText = '我在上面';
					} else if (pos.left > win.width) {
						el.info.innerText = '我在右边';
					} else if (pos.right < 0) {
						el.info.innerText = '我在左边';
					} else {
						el.info.innerText = '快点我！';

					}

				},
				resizeEvent : function () {
					win = _this.getViewport();
					　
					_this.getCurPos();
				},
				intervalTrigger : function () {
					return window.setInterval(function () {
						setting.totalTime--;
						appScore++;
						el.timecount.innerText = '剩余时间' + setting.totalTime + 's';
						el.lb.innerHTML = '总用时' + appScore + 's';
						if (setting.totalTime <= 0) {
							_this.youFindMeFail();

						}

					}, 1000);
				},
				youFindMeSuccess : function () {
					el.info.innerText = '你找到我了！';

					_this.clean();
					playdiv.style.display = 'block';

					if (setting.level >= setting.maxLevel) {
						el.playButton.innerText = '好咯，你赢了咯!!'; //+'用了'+appScore+'秒玩到了第'+setting.level+'关';

						el.playButton.removeEventListener('click', require('gamelauncher').playButtonGameStart, false);

					} else {
						gamestatus.levelIndex++;

						el.playButton.innerText = '来!下一关！！';
						gamestatus.score = appScore;
					}
				},
				youFindMeFail : function () {
					el.info.innerText = '你居然找不到我！T_T';
					_this.clean();
					el.playdiv.style.display = 'block';
					el.playButton.innerText = '重新开始！！';
				},

				touchStartEvent : function () {
					//el.info.innerText = '滚啊滚！！';
				},
				touchEndEvent : function () {
					//el.info.innerText = '滚啊滚！！';
				},
				babyBoxJoin : function () {
					for (var i = 0; i < setting.babyBoxCount; i++) {
						var babybox = document.createElement("div");
						babybox.style.width = setting.babyBoxWidth + 'px';
						babybox.style.height = setting.babyBoxHeight + 'px';
						babybox.style.backgroundColor = setting.babyBoxColor;
						babybox.style.left = util.rd(0, setting.scWidth - setting.babyBoxWidth) + 'px';
						babybox.style.top = util.rd(0, setting.scHeight - setting.babyBoxHeight) + 'px';
						babybox.classList.add('babybox');
						el.scrollview.appendChild(babybox);
					}

				}

			};
			return game;
		}
	};
});
