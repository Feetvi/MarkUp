(function (){
	var d = document;
	var w = window;
	var n = navigator;
	var s = screen;

	d.cookie = 'cc=1';
	var c = (d.cookie) ? 1 : 0;
	var x = Math.random();
	var u = '' + escape(w.location.href);
	var f = (self != top) ? 1 : 0;
	var j = n.javaEnabled() ? 1 : 0;
	var tz = (new Date()).getTimezoneOffset();
	var cd = s.colorDepth ? s.colorDepth : s.pixelDepth;
	var wh = w.innerHeight ? w.innerHeight : d.documentElement.offsetHeight;
	var ww = w.innerWidth  ? w.innerWidth  : d.documentElement.offsetWidth;

	var cw = 88;
	var ch = 31;
	var it = '';
	if (typeof AC_TR != 'undefined' && AC_TR) {
		cw = 1;
		ch = 1;
		it = '1';
		AC_TR = true;
	}

	var li = 0;
	if (typeof AC_LI != 'undefined' && AC_LI) li = parseInt(AC_LI);

	var q = 'lik?rnlik='+x+'&id='+AC_ID+'&it='+it+'&d='+u+'&r='+escape(d.referrer)+'&h='+history.length+'&f='+f+'&c='+c+'&tz='+tz+'&cpu='+n.cpuClass+'&js='+13+'&wh='+wh+'&ww='+ww+'&ss='+s.width+'&ssh='+s.height+'&cd='+cd+'&j='+j+'&x='+x+'&li='+li;

	var i = new Image(cw, ch);
	i.onload = function() {
		try {
			var adiv = d.getElementById('AC_Image');
			var a    = d.createElement('a');
			a.href   = 'http://www.akavita.by/';
			a.target = '_top';
			i.style.border = '0px';
			(adiv ? adiv : document.body).appendChild(a).appendChild(i);
		} catch (e) {
		}
	}
	i.src = 'http://adlik.akavita.com/bin/' + q;
})();

