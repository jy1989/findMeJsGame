define( function () {
return{
    
    gE:function (el) {
		return document.getElementById(el);
	},

	rd:function(n, m) {
		//console.log(n,m);
		var c = m - n + 1;
		return Math.floor(Math.random() * c + n);
	},

	removeElementsByClass:function (className) {
		var elements = document.getElementsByClassName(className);
		while (elements.length > 0) {
			elements[0].parentNode.removeChild(elements[0]);
		}
	}
}});