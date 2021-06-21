<!--[4,64,98] published at 2019-12-25 15:33:43 from #202 by 33-->
 (function(){

			function setCookie(name,value){   
			  var   Days   =   365;  
			  var   exp     =   new   Date();   
			  exp.setTime(exp.getTime()+Days*24*60*60*1000);      
			  document.cookie=name+ "="+ escape(value)   +";expires="+exp.toGMTString() + ";domain=" + document.domain+";path=/";   
			} 

			function getCookie(name){
				var result = null;
				var myCookie = ""+document.cookie+";"; 
				var searchName = ""+name+"=";
				var startOfCookie = myCookie.indexOf(searchName);
				var endOfCookie;
				if(startOfCookie != -1){
					startOfCookie += searchName.length;
					endOfCookie = myCookie.indexOf(";",startOfCookie);
					result = (myCookie.substring(startOfCookie,endOfCookie));
				}
				return result;
			 } 

  	   		var reg=/[#|\?|&].*/g;
			var cnsservice_u = window.location.href;
			cnsservice_u=cnsservice_u.replace(reg,"");
			var r = window.document.referrer;
			r=r.replace(reg,""); 
			var t = window.document.title;
			var pid = 0;
			var tid = 0;
			var did = 0;

			var uid = "cnsuuid";
			var hostworkname = getCookie(uid);

			var nowday = new Date();

			if(hostworkname==null){
				var guid = "";
				for (var i = 1; i <= 32; i++) {
					var n = Math.floor(Math.random() * 16.0).toString(16);
					guid += n;
					if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) 
						guid += "-";
				}
				guid+=Math.random()*16000+"_"+(new Date().getTime());
				guid += "";
				hostworkname = guid;
				setCookie(uid,hostworkname);
			}

			var cnsservice_url = 'http://lc.chinanews.com:8090/rpc/p.jsp?';
			cnsservice_url = cnsservice_url + "pid="+pid ;
			cnsservice_url = cnsservice_url + "&did=" + did;
			cnsservice_url = cnsservice_url + "&t=" + encodeURIComponent(t);
                        //cnsservice_url = cnsservice_url + "&t=" + encodeURIComponent(encodeURIComponent(t));
			cnsservice_url = cnsservice_url + "&u=" + cnsservice_u;
			cnsservice_url = cnsservice_url + "&r=" + r;
			cnsservice_url = cnsservice_url + "&hostworkname=" + hostworkname;
			cnsservice_url = cnsservice_url + "&aj=" +encodeURI( Math.random()+ (new Date()));
			var s2;
			s2 = document.createElement("script");
			s2.type = "text/javascript";
			s2.src = cnsservice_url;
			//var cnsservice_head = document.getElementsByTagName('script')[0];
            //cnsservice_head.parentNode.insertBefore(s2,cnsservice_head);
  	   })();

