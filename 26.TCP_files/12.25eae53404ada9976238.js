(window.webpackJsonp=window.webpackJsonp||[]).push([[12,31],{111:function(t,e,n){var r,o,i;o=[e,t],void 0===(i="function"==typeof(r=function(t,e){"use strict";var n,r,h="function"==typeof Map?new Map:(n=[],r=[],{has:function(t){return-1<n.indexOf(t)},get:function(t){return r[n.indexOf(t)]},set:function(t,e){-1===n.indexOf(t)&&(n.push(t),r.push(e))},delete:function(t){var e=n.indexOf(t);-1<e&&(n.splice(e,1),r.splice(e,1))}}),c=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){c=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function o(o){if(o&&o.nodeName&&"TEXTAREA"===o.nodeName&&!h.has(o)){var i=null,a=o.clientWidth,s=null,t=function(){o.clientWidth!==a&&r()},n=function(e){window.removeEventListener("resize",t,!1),o.removeEventListener("input",r,!1),o.removeEventListener("keyup",r,!1),o.removeEventListener("autosize:destroy",n,!1),o.removeEventListener("autosize:update",r,!1),Object.keys(e).forEach(function(t){o.style[t]=e[t]}),h.delete(o)}.bind(o,{height:o.style.height,resize:o.style.resize,overflowY:o.style.overflowY,overflowX:o.style.overflowX,wordWrap:o.style.wordWrap});o.addEventListener("autosize:destroy",n,!1),"onpropertychange"in o&&"oninput"in o&&o.addEventListener("keyup",r,!1),window.addEventListener("resize",t,!1),o.addEventListener("input",r,!1),o.addEventListener("autosize:update",r,!1),o.style.overflowX="hidden",o.style.wordWrap="break-word",h.set(o,{destroy:n,update:r}),"vertical"===(e=window.getComputedStyle(o,null)).resize?o.style.resize="none":"both"===e.resize&&(o.style.resize="horizontal"),i="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(i)&&(i=0),r()}var e;function u(t){var e=o.style.width;o.style.width="0px",o.offsetWidth,o.style.width=e,o.style.overflowY=t}function l(){var t=o.style.height,e=function(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}(o),n=document.documentElement&&document.documentElement.scrollTop;o.style.height="auto";var r=o.scrollHeight+i;0!==o.scrollHeight?(o.style.height=r+"px",a=o.clientWidth,e.forEach(function(t){t.node.scrollTop=t.scrollTop}),n&&(document.documentElement.scrollTop=n)):o.style.height=t}function r(){l();var t=Math.round(parseFloat(o.style.height)),e=window.getComputedStyle(o,null),n=Math.round(parseFloat(e.height));if(n!==t?"visible"!==e.overflowY&&(u("visible"),l(),n=Math.round(parseFloat(window.getComputedStyle(o,null).height))):"hidden"!==e.overflowY&&(u("hidden"),l(),n=Math.round(parseFloat(window.getComputedStyle(o,null).height))),s!==n){s=n;var r=c("autosize:resized");try{o.dispatchEvent(r)}catch(t){}}}}function i(t){var e=h.get(t);e&&e.destroy()}function a(t){var e=h.get(t);e&&e.update()}var s=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((s=function(t){return t}).destroy=function(t){return t},s.update=function(t){return t}):((s=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],function(t){return o(t)}),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],i),t},s.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],a),t}),e.exports=s})?r.apply(e,o):r)||(t.exports=i)},24:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"g",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"f",function(){return s}),n.d(e,"e",function(){return u}),n.d(e,"b",function(){return l});var r="5b30c3b351882574957a788f";function o(t,e){if(0===t)return 0;var n=i(t,isNaN(e)?1:e/10);return 0===n?0:n.toFixed(2)}function i(t,e){var n=0,r=t.toString(),o=e.toString();try{n+=r.split(".")[1].length}catch(t){}try{n+=o.split(".")[1].length}catch(t){}var i=(r=Number(r.replace(".","")))*(o=Number(o.replace(".","")))/Math.pow(10,n),a=0<e?.01:0;return Math.max(a,i)}function a(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{free:0,charge:10},e=t.free,n=t.charge;return 0<e?0:n<10?n:10}function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return[t.timeLimitDiscount,t.timeLimitDiscountFirstDay].some(function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.startUTC,n=void 0===e?null:e,r=t.endUTC,o=void 0===r?null:r,i=(t.discountCount,+new Date),a=+new Date(n),s=+new Date(o);return a<i&&i<s})}function u(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},c=t.id,d=[{title:"早鸟价",type:"timeLimitDiscountFirstDay"},{title:"限时优惠价",type:"timeLimitDiscount"}],e=t.timeLimitDiscount,n=void 0===e?{}:e,r=t.timeLimitDiscountFirstDay,o=[void 0===r?{}:r,n].map(function(t,e){var n=t.startUTC,r=void 0===n?null:n,o=t.endUTC,i=void 0===o?null:o,a=t.discountCount,s=void 0===a?10:a,u=+new Date(r),l=+new Date(i),h=s;return Object.assign({id:c},d[e],{startTime:u,endTime:l,sale:h})}),i={},a=0;a<2;a++){var s=+new Date,u=o[a],l=u.startTime,h=void 0===l?null:l,f=u.endTime,g=void 0===f?null:f,p=u.sale,v=void 0===p?10:p;if(0<=v&&v<10&&(h<s&&s<g)){i=o[a];break}}return i}function l(t,e){for(var n=[{className:"current",text:t,No:t}],r=1;r<=3;r++)1<t-r&&n.unshift({className:"",text:t-r,No:t-r}),t+r<e&&n.push({className:"",text:t+r,No:t+r});return 1<t-4&&n.unshift({className:"omit",text:"...",No:null}),1<t&&n.unshift({className:"prev",text:"上一页",No:t-1},{className:"",text:"1",No:1}),t+4<e&&n.push({className:"omit",text:"...",No:null}),t<e&&n.push({className:"",text:e,No:e},{className:"next",text:"下一页",No:t+1}),1<n.length?n:[]}},2814:function(t,e,n){t.exports=n.p+"static/img/wechat.5e2cfe7.svg"},2815:function(t,e,n){t.exports=n.p+"static/img/icon.37ca4f6.svg"},2834:function(t,e,n){t.exports=n.p+"static/img/empty-comment.40bc8a6.svg"},2835:function(t,e,n){t.exports=n.p+"static/img/wx-pay.6a911dc.svg"},2836:function(t,e,n){t.exports=n.p+"static/img/ali-pay-logo.a251946.png"},2837:function(t,e,n){t.exports=n.p+"static/img/wx-pay-logo.2a9abb4.png"},2899:function(t,e,n){t.exports=n.p+"static/img/logo.a7995ad.svg"},2900:function(t,e,n){t.exports=n.p+"static/img/qr-icon.881015a.svg"},2901:function(t,e,n){t.exports=n.p+"static/img/icon.3e69d5a.svg"},2902:function(t,e,n){t.exports=n.p+"static/img/menu.74b9add.svg"},2903:function(t,e,n){t.exports=n.p+"static/img/wx-qr.13d8b4d.png"},2904:function(t,e,n){t.exports=n.p+"static/img/prev.87ad47e.svg"},2905:function(t,e,n){t.exports=n.p+"static/img/next.54d8a35.svg"},2906:function(t,e,n){t.exports=n.p+"static/img/finished.86e7f07.svg"},2943:function(t,e,r){function n(t){this.mode=i.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;e<n;e++){var r=[],o=this.data.charCodeAt(e);65536<o?(r[0]=240|(1835008&o)>>>18,r[1]=128|(258048&o)>>>12,r[2]=128|(4032&o)>>>6,r[3]=128|63&o):2048<o?(r[0]=224|(61440&o)>>>12,r[1]=128|(4032&o)>>>6,r[2]=128|63&o):128<o?(r[0]=192|(1984&o)>>>6,r[1]=128|63&o):r[0]=o,this.parsedData.push(r)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function u(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}n.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,n=this.parsedData.length;e<n;e++)t.put(this.parsedData[e],8)}},u.prototype={addData:function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),7<=this.typeNumber&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=w.getLostPoint(this);(0==n||r<t)&&(t=r,e=n)}return e},createMovieClip:function(t,e,n){var r=t.createEmptyMovieClip(e,n);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,a=0;a<this.modules[o].length;a++){var s=1*a;this.modules[o][a]&&(r.beginFill(0,100),r.moveTo(s,i),r.lineTo(s+1,i),r.lineTo(s+1,i+1),r.lineTo(s,i+1),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=w.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],o=t[n];if(null==this.modules[r][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[r+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=w.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!t&&1==(e>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},setupTypeInfo:function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=w.getBCHTypeInfo(n),o=0;o<15;o++){var i=!t&&1==(r>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(r>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var n=-1,r=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;0<a;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[r][a-s]){var u=!1;i<t.length&&(u=1==(t[i]>>>o&1)),w.getMask(e,r,a-s)&&(u=!u),this.modules[r][a-s]=u,-1==--o&&(i++,o=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}}},u.PAD0=236,u.PAD1=17,u.createData=function(t,e,n){for(var r=b.getRSBlocks(t,e),o=new C,i=0;i<n.length;i++){var a=n[i];o.put(a.mode,4),o.put(a.getLength(),w.getLengthInBits(a.mode,t)),a.write(o)}var s=0;for(i=0;i<r.length;i++)s+=r[i].dataCount;if(o.getLengthInBits()>8*s)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*s+")");for(o.getLengthInBits()+4<=8*s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*s||(o.put(u.PAD0,8),o.getLengthInBits()>=8*s));)o.put(u.PAD1,8);return u.createBytes(o,r)},u.createBytes=function(t,e){for(var n=0,r=0,o=0,i=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var u=e[s].dataCount,l=e[s].totalCount-u;r=Math.max(r,u),o=Math.max(o,l),i[s]=new Array(u);for(var h=0;h<i[s].length;h++)i[s][h]=255&t.buffer[h+n];n+=u;var c=w.getErrorCorrectPolynomial(l),d=new L(i[s],c.getLength()-1).mod(c);a[s]=new Array(c.getLength()-1);for(h=0;h<a[s].length;h++){var f=h+d.getLength()-a[s].length;a[s][h]=0<=f?d.get(f):0}}var g=0;for(h=0;h<e.length;h++)g+=e[h].totalCount;var p=new Array(g),v=0;for(h=0;h<r;h++)for(s=0;s<e.length;s++)h<i[s].length&&(p[v++]=i[s][h]);for(h=0;h<o;h++)for(s=0;s<e.length;s++)h<a[s].length&&(p[v++]=a[s][h]);return p};for(var i={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},a=1,s=0,l=3,h=2,o=0,c=1,d=2,f=3,g=4,p=5,v=6,m=7,w={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;0<=w.getBCHDigit(e)-w.getBCHDigit(w.G15);)e^=w.G15<<w.getBCHDigit(e)-w.getBCHDigit(w.G15);return(t<<10|e)^w.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;0<=w.getBCHDigit(e)-w.getBCHDigit(w.G18);)e^=w.G18<<w.getBCHDigit(e)-w.getBCHDigit(w.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return w.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case o:return(e+n)%2==0;case c:return e%2==0;case d:return n%3==0;case f:return(e+n)%3==0;case g:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case p:return e*n%2+e*n%3==0;case v:return(e*n%2+e*n%3)%2==0;case m:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new L([1],0),n=0;n<t;n++)e=e.multiply(new L([1,y.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case i.MODE_NUMBER:return 10;case i.MODE_ALPHA_NUM:return 9;case i.MODE_8BIT_BYTE:case i.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case i.MODE_NUMBER:return 12;case i.MODE_ALPHA_NUM:return 11;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case i.MODE_NUMBER:return 14;case i.MODE_ALPHA_NUM:return 13;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(r,o),s=-1;s<=1;s++)if(!(r+s<0||e<=r+s))for(var u=-1;u<=1;u++)o+u<0||e<=o+u||0==s&&0==u||a==t.isDark(r+s,o+u)&&i++;5<i&&(n+=3+i-5)}for(r=0;r<e-1;r++)for(o=0;o<e-1;o++){var l=0;t.isDark(r,o)&&l++,t.isDark(r+1,o)&&l++,t.isDark(r,o+1)&&l++,t.isDark(r+1,o+1)&&l++,0!=l&&4!=l||(n+=3)}for(r=0;r<e;r++)for(o=0;o<e-6;o++)t.isDark(r,o)&&!t.isDark(r,o+1)&&t.isDark(r,o+2)&&t.isDark(r,o+3)&&t.isDark(r,o+4)&&!t.isDark(r,o+5)&&t.isDark(r,o+6)&&(n+=40);for(o=0;o<e;o++)for(r=0;r<e-6;r++)t.isDark(r,o)&&!t.isDark(r+1,o)&&t.isDark(r+2,o)&&t.isDark(r+3,o)&&t.isDark(r+4,o)&&!t.isDark(r+5,o)&&t.isDark(r+6,o)&&(n+=40);var h=0;for(o=0;o<e;o++)for(r=0;r<e;r++)t.isDark(r,o)&&h++;return n+=10*(Math.abs(100*h/e/e-50)/5)}},y={glog:function(t){if(t<1)throw new Error("glog("+t+")");return y.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return y.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},E=0;E<8;E++)y.EXP_TABLE[E]=1<<E;for(E=8;E<256;E++)y.EXP_TABLE[E]=y.EXP_TABLE[E-4]^y.EXP_TABLE[E-5]^y.EXP_TABLE[E-6]^y.EXP_TABLE[E-8];for(E=0;E<255;E++)y.LOG_TABLE[y.EXP_TABLE[E]]=E;function L(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}function b(t,e){this.totalCount=t,this.dataCount=e}function C(){this.buffer=[],this.length=0}L.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=y.gexp(y.glog(this.get(n))+y.glog(t.get(r)));return new L(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=y.glog(this.get(0))-y.glog(t.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<t.getLength();r++)n[r]^=y.gexp(y.glog(t.get(r))+e);return new L(n,0).mod(t)}},b.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],b.getRSBlocks=function(t,e){var n=b.getRsBlockTable(t,e);if(null==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,o=[],i=0;i<r;i++)for(var a=n[3*i+0],s=n[3*i+1],u=n[3*i+2],l=0;l<a;l++)o.push(new b(s,u));return o},b.getRsBlockTable=function(t,e){switch(e){case a:return b.RS_BLOCK_TABLE[4*(t-1)+0];case s:return b.RS_BLOCK_TABLE[4*(t-1)+1];case l:return b.RS_BLOCK_TABLE[4*(t-1)+2];case h:return b.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},C.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var k=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function D(t){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M"},"string"==typeof t&&(t={content:t}),t)for(var e in t)this.options[e]=t[e];if("string"!=typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(0<=this.options.padding))throw new Error("Expected 'padding' value to be non-negative!");if(!(0<this.options.width&&0<this.options.height))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var n=this.options.content,r=function(t,e){for(var n,r,o=(n=t,(r=encodeURI(n).toString().replace(/\%[0-9a-fA-F]{2}/g,"a")).length+(r.length!=n?3:0)),i=1,a=0,s=0,u=k.length;s<=u;s++){var l=k[s];if(!l)throw new Error("Content too long: expected "+a+" but got "+o);switch(e){case"L":a=l[0];break;case"M":a=l[1];break;case"Q":a=l[2];break;case"H":a=l[3];break;default:throw new Error("Unknwon error correction level: "+e)}if(o<=a)break;i++}if(k.length<i)throw new Error("Content too long");return i}(n,this.options.ecl),o=function(t){switch(t){case"L":return a;case"M":return s;case"Q":return l;case"H":return h;default:throw new Error("Unknwon error correction level: "+t)}}(this.options.ecl);this.qrcode=new u(r,o),this.qrcode.addData(n),this.qrcode.make()}D.prototype.svg=function(t){void 0===t&&(t={container:"svg"});for(var e=this.options,n=this.qrcode.modules,r="\r\n",o=e.width,i=e.height,a=n.length,s=o/(a+2*e.padding),u=i/(a+2*e.padding),l='<rect x="0" y="0" width="'+o+'" height="'+i+'" style="fill:'+e.background+';shape-rendering:crispEdges;"/>'+r,h=0;h<a;h++)for(var c=0;c<a;c++){if(n[c][h])l+='<rect x="'+(c*s+e.padding*s).toString()+'" y="'+(h*u+e.padding*u).toString()+'" width="'+s+'" height="'+u+'" style="fill:'+e.color+';shape-rendering:crispEdges;"/>'+r}var d="";switch(t.container){case"svg":d+='<?xml version="1.0" standalone="yes"?>\r\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+o+'" height="'+i+'">'+r,d+=l,d+="</svg>";break;case"g":d+='<g width="'+o+'" height="'+i+'">'+r,d+=l,d+="</g>";break;default:d+=l}return d},D.prototype.save=function(t,e){var n=this.svg();r(!function(){var t=new Error("Cannot find module 'fs'");throw t.code="MODULE_NOT_FOUND",t}()).writeFile(t,n,e)},t.exports=D},31:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(2943),o=n.n(r);function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"#000000",n=new o.a({content:t,color:e,padding:0,width:410,height:410,background:"#ffffff",ecl:"L"}).svg();return"data:image/svg+xml;utf8,".concat(encodeURIComponent(n))}},59:function(t,e){t.exports=function(t){if(navigator.clipboard)return navigator.clipboard.writeText(t);var e=document.createElement("span");e.textContent=t,e.style.whiteSpace="pre";var n=document.createElement("iframe");n.sandbox="allow-same-origin",document.body.appendChild(n);var r=n.contentWindow;r.document.body.appendChild(e);var o=r.getSelection();o||(r=window,o=r.getSelection(),document.body.appendChild(e));var i=r.document.createRange();o.removeAllRanges(),i.selectNode(e),o.addRange(i);var a=!1;try{a=r.document.execCommand("copy")}catch(t){}return o.removeAllRanges(),r.document.body.removeChild(e),document.body.removeChild(n),a?Promise.resolve():Promise.reject()}},72:function(t,e,n){t.exports=function(){"use strict";function u(t,e,n){var r=3<arguments.length&&void 0!==arguments[3]&&arguments[3];return t.addEventListener(e,n,r),function(){t.removeEventListener(e,n,r)}}"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var t=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},e={threshold:0,interval:200,debounce:!1,reactive:!0,eagerShowing:!1,infoGetter:null,visibleAreaGetter:null,onStateChange:null},h="__JUEJIN_LAZYLOAD";return function(){function n(t,e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,n),this.setOptions(e),this.addOrUpdateElement(t),this.initEventListener()}return t(n,[{key:"setOptions",value:function(t){this.options=r({},e,t)}},{key:"initEventListener",value:function(){var r,o,i,a,s=this;if(this.options.reactive){var t=this.options.debounce?(i=this.options.interval,a=0,function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];clearTimeout(a),a=setTimeout(function(){return function(){return s.updateState()}.apply(t,n)},i)}):(r=this.options.interval,o=0,r/=2,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];Date.now()-o>=r&&(o=Date.now(),setTimeout(function(){(function(){return s.updateState()}).apply(null,e)},r))});this.removeScrollEventListener=u(window,"scroll",t),this.removeResizeEventListener=u(window,"resize",t)}}},{key:"removeEventListener",value:function(){this.removeScrollEventListener&&this.removeScrollEventListener(),this.removeResizeEventListener&&this.removeResizeEventListener()}},{key:"addOrUpdateElement",value:function(t){var e=this.getElementList(t),n=e.filter(function(t){return!t[h]});this.elementList=(this.elementList||[]).concat(n),e.forEach(this.initElement.bind(this)),this.updateState()}},{key:"removeElement",value:function(t){var e=this.getElementList(t);this.elementList=this.elementList.filter(function(t){return-1===e.indexOf(t)}),e.forEach(this.removeInfo.bind(this))}},{key:"clean",value:function(){this.elementList.forEach(this.removeInfo.bind(this)),this.elementList=[]}},{key:"getElementList",value:function(t){return t?"string"==typeof t?[].slice.call(document.querySelectorAll(t)):"number"==typeof t.length?[].slice.call(t):[t]:[]}},{key:"initElement",value:function(t){this.attachInfo(t),this.setPlaceholder(t),this.updateElementClassByState("inited",t),this.invokeStateHook("inited",t)}},{key:"attachInfo",value:function(t){var e=this.options.infoGetter&&this.options.infoGetter(t),n=r({},e,{loading:!1});t[h]=n}},{key:"setPlaceholder",value:function(t){var e,n,r=t[h];"IMG"===t.nodeName&&r.width&&r.height&&(t.src=(e=r.width,n=r.height,["data:image/svg+xml;utf8,",'<?xml version="1.0"?>','<svg xmlns="http://www.w3.org/2000/svg" version="1.1" ','width="'+e+'" height="'+n+'"',"></svg>"].join("")))}},{key:"removeInfo",value:function(t){t[h]&&(t[h]=null)}},{key:"updateState",value:function(){var a=this;if(this.elementList.length){var s=this.getActiveArea();this.elementList.forEach(function(t){var e,n,r=t[h].loading,o=t.getBoundingClientRect(),i=(e=s,!((n=o).bottom<e.top||n.top>e.bottom||n.right<e.left||n.left>e.right));!r&&i&&a.loadIamge(t)})}}},{key:"getActiveArea",value:function(){var t=this.getVisibleArea(),e=this.options.threshold||0;return{top:t.top-e,left:t.left-e,right:t.right+e,bottom:t.bottom+e}}},{key:"getVisibleArea",value:function(){if(this.options.visibleAreaGetter)return this.options.visibleAreaGetter();var t,e=(t=document.documentElement,{width:Math.max(t.clientWidth,window.innerWidth||0),height:Math.max(t.clientHeight,window.innerHeight||0)});return{top:0,left:0,right:e.width,bottom:e.height}}},{key:"loadIamge",value:function(n){var t,e,r,o,i,a,s=this,u=n[h],l=u.url;u.loading=!0,this.updateElementClassByState("loading",n),this.invokeStateHook("loading",n),t=l,r=(e={onStart:function(t,e){s.options.eagerShowing&&s.onMetaLoaded(e,function(){n.removeAttribute("src"),n.setAttribute("src",t)})},onLoaded:function(){s.setElementWithImageUrl(l,n),s.updateElementClassByState("loaded",n),s.invokeStateHook("loaded",n),s.removeElement(n)},onError:function(){s.updateElementClassByState("error",n),s.invokeStateHook("error",n),s.removeElement(n)}}).onStart,o=e.onLoaded,i=e.onError,(a=new Image).onload=function(){o&&o(t,a)},a.onerror=function(){i&&i(t,a)},a.src=t,r&&r(t,a)}},{key:"updateElementClassByState",value:function(t,e){switch(t){case"inited":e.classList.add("inited"),e.classList.remove("loading"),e.classList.remove("loaded"),e.classList.remove("error");break;case"loading":e.classList.add("loading");break;case"loaded":e.classList.remove("loading"),e.classList.add("loaded");break;case"error":e.classList.remove("loading"),e.classList.add("error")}}},{key:"invokeStateHook",value:function(t,e){if(this.options.onStateChange){var n=e[h].url;this.options.onStateChange(t,n,e,this)}}},{key:"setElementWithImageUrl",value:function(t,e){"IMG"===e.nodeName?e.src=t:e.style.backgroundImage="url("+t+")"}},{key:"onMetaLoaded",value:function(t,e){var n=setInterval(function(){t.naturalWidth&&(r(),e())},300),r=function(){return clearInterval(n)};u(t,"load",r),u(t,"error",r)}},{key:"destroy",value:function(){this.removeEventListener(),this.clean(),this.setOptions({})}}]),n}()}()}}]);