
; /* Start:"a:4:{s:4:"full";s:66:"/bitrix/templates/prostroy/js/jquery-1.11.0.min.js?159757454096381";s:6:"source";s:50:"/bitrix/templates/prostroy/js/jquery-1.11.0.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/bitrix/templates/prostroy/js/jquery.mousewheel.min.js?15975745402737";s:6:"source";s:54:"/bitrix/templates/prostroy/js/jquery.mousewheel.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/bitrix/templates/prostroy/js/jquery.cookie.js?15975745403121";s:6:"source";s:46:"/bitrix/templates/prostroy/js/jquery.cookie.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:83:"/bitrix/templates/prostroy/js/jscrollpane/jquery.jscrollpane.min.js?159757454014107";s:6:"source";s:67:"/bitrix/templates/prostroy/js/jscrollpane/jquery.jscrollpane.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jScrollPane - v2.0.17 - 2013-08-17
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2013 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
!function(a,b,c){a.fn.jScrollPane=function(d){function e(d,e){function f(b){var e,h,j,l,m,n,q=!1,r=!1;if(P=b,Q===c)m=d.scrollTop(),n=d.scrollLeft(),d.css({overflow:"hidden",padding:0}),R=d.innerWidth()+tb,S=d.innerHeight(),d.width(R),Q=a('<div class="jspPane" />').css("padding",sb).append(d.children()),T=a('<div class="jspContainer" />').css({width:R+"px",height:S+"px"}).append(Q).appendTo(d);else{if(d.css("width",""),q=P.stickToBottom&&C(),r=P.stickToRight&&D(),l=d.innerWidth()+tb!=R||d.outerHeight()!=S,l&&(R=d.innerWidth()+tb,S=d.innerHeight(),T.css({width:R+"px",height:S+"px"})),!l&&ub==U&&Q.outerHeight()==V)return d.width(R),void 0;ub=U,Q.css("width",""),d.width(R),T.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Q.css("overflow","auto"),U=b.contentWidth?b.contentWidth:Q[0].scrollWidth,V=Q[0].scrollHeight,Q.css("overflow",""),W=U/R,X=V/S,Y=X>1,Z=W>1,Z||Y?(d.addClass("jspScrollable"),e=P.maintainPosition&&(ab||db),e&&(h=A(),j=B()),g(),i(),k(),e&&(y(r?U-R:h,!1),x(q?V-S:j,!1)),H(),E(),N(),P.enableKeyboardNavigation&&J(),P.clickOnTrack&&o(),L(),P.hijackInternalLinks&&M()):(d.removeClass("jspScrollable"),Q.css({top:0,left:0,width:T.width()-tb}),F(),I(),K(),p()),P.autoReinitialise&&!rb?rb=setInterval(function(){f(P)},P.autoReinitialiseDelay):!P.autoReinitialise&&rb&&clearInterval(rb),m&&d.scrollTop(0)&&x(m,!1),n&&d.scrollLeft(0)&&y(n,!1),d.trigger("jsp-initialised",[Z||Y])}function g(){Y&&(T.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'),a('<div class="jspDragBottom" />'))),a('<div class="jspCap jspCapBottom" />'))),eb=T.find(">.jspVerticalBar"),fb=eb.find(">.jspTrack"),$=fb.find(">.jspDrag"),P.showArrows&&(jb=a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",m(0,-1)).bind("click.jsp",G),kb=a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",m(0,1)).bind("click.jsp",G),P.arrowScrollOnHover&&(jb.bind("mouseover.jsp",m(0,-1,jb)),kb.bind("mouseover.jsp",m(0,1,kb))),l(fb,P.verticalArrowPositions,jb,kb)),hb=S,T.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){hb-=a(this).outerHeight()}),$.hover(function(){$.addClass("jspHover")},function(){$.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",G),$.addClass("jspActive");var c=b.pageY-$.position().top;return a("html").bind("mousemove.jsp",function(a){r(a.pageY-c,!1)}).bind("mouseup.jsp mouseleave.jsp",q),!1}),h())}function h(){fb.height(hb+"px"),ab=0,gb=P.verticalGutter+fb.outerWidth(),Q.width(R-gb-tb);try{0===eb.position().left&&Q.css("margin-left",gb+"px")}catch(a){}}function i(){Z&&(T.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'),a('<div class="jspDragRight" />'))),a('<div class="jspCap jspCapRight" />'))),lb=T.find(">.jspHorizontalBar"),mb=lb.find(">.jspTrack"),bb=mb.find(">.jspDrag"),P.showArrows&&(pb=a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",m(-1,0)).bind("click.jsp",G),qb=a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",m(1,0)).bind("click.jsp",G),P.arrowScrollOnHover&&(pb.bind("mouseover.jsp",m(-1,0,pb)),qb.bind("mouseover.jsp",m(1,0,qb))),l(mb,P.horizontalArrowPositions,pb,qb)),bb.hover(function(){bb.addClass("jspHover")},function(){bb.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",G),bb.addClass("jspActive");var c=b.pageX-bb.position().left;return a("html").bind("mousemove.jsp",function(a){t(a.pageX-c,!1)}).bind("mouseup.jsp mouseleave.jsp",q),!1}),nb=T.innerWidth(),j())}function j(){T.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){nb-=a(this).outerWidth()}),mb.width(nb+"px"),db=0}function k(){if(Z&&Y){var b=mb.outerHeight(),c=fb.outerWidth();hb-=b,a(lb).find(">.jspCap:visible,>.jspArrow").each(function(){nb+=a(this).outerWidth()}),nb-=c,S-=c,R-=b,mb.parent().append(a('<div class="jspCorner" />').css("width",b+"px")),h(),j()}Z&&Q.width(T.outerWidth()-tb+"px"),V=Q.outerHeight(),X=V/S,Z&&(ob=Math.ceil(1/W*nb),ob>P.horizontalDragMaxWidth?ob=P.horizontalDragMaxWidth:ob<P.horizontalDragMinWidth&&(ob=P.horizontalDragMinWidth),bb.width(ob+"px"),cb=nb-ob,u(db)),Y&&(ib=Math.ceil(1/X*hb),ib>P.verticalDragMaxHeight?ib=P.verticalDragMaxHeight:ib<P.verticalDragMinHeight&&(ib=P.verticalDragMinHeight),$.height(ib+"px"),_=hb-ib,s(ab))}function l(a,b,c,d){var e,f="before",g="after";"os"==b&&(b=/Mac/.test(navigator.platform)?"after":"split"),b==f?g=b:b==g&&(f=b,e=c,c=d,d=e),a[f](c)[g](d)}function m(a,b,c){return function(){return n(a,b,this,c),this.blur(),!1}}function n(b,c,d,e){d=a(d).addClass("jspActive");var f,g,h=!0,i=function(){0!==b&&vb.scrollByX(b*P.arrowButtonSpeed),0!==c&&vb.scrollByY(c*P.arrowButtonSpeed),g=setTimeout(i,h?P.initialDelay:P.arrowRepeatFreq),h=!1};i(),f=e?"mouseout.jsp":"mouseup.jsp",e=e||a("html"),e.bind(f,function(){d.removeClass("jspActive"),g&&clearTimeout(g),g=null,e.unbind(f)})}function o(){p(),Y&&fb.bind("mousedown.jsp",function(b){if(b.originalTarget===c||b.originalTarget==b.currentTarget){var d,e=a(this),f=e.offset(),g=b.pageY-f.top-ab,h=!0,i=function(){var a=e.offset(),c=b.pageY-a.top-ib/2,f=S*P.scrollPagePercent,k=_*f/(V-S);if(0>g)ab-k>c?vb.scrollByY(-f):r(c);else{if(!(g>0))return j(),void 0;c>ab+k?vb.scrollByY(f):r(c)}d=setTimeout(i,h?P.initialDelay:P.trackClickRepeatFreq),h=!1},j=function(){d&&clearTimeout(d),d=null,a(document).unbind("mouseup.jsp",j)};return i(),a(document).bind("mouseup.jsp",j),!1}}),Z&&mb.bind("mousedown.jsp",function(b){if(b.originalTarget===c||b.originalTarget==b.currentTarget){var d,e=a(this),f=e.offset(),g=b.pageX-f.left-db,h=!0,i=function(){var a=e.offset(),c=b.pageX-a.left-ob/2,f=R*P.scrollPagePercent,k=cb*f/(U-R);if(0>g)db-k>c?vb.scrollByX(-f):t(c);else{if(!(g>0))return j(),void 0;c>db+k?vb.scrollByX(f):t(c)}d=setTimeout(i,h?P.initialDelay:P.trackClickRepeatFreq),h=!1},j=function(){d&&clearTimeout(d),d=null,a(document).unbind("mouseup.jsp",j)};return i(),a(document).bind("mouseup.jsp",j),!1}})}function p(){mb&&mb.unbind("mousedown.jsp"),fb&&fb.unbind("mousedown.jsp")}function q(){a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),$&&$.removeClass("jspActive"),bb&&bb.removeClass("jspActive")}function r(a,b){Y&&(0>a?a=0:a>_&&(a=_),b===c&&(b=P.animateScroll),b?vb.animate($,"top",a,s):($.css("top",a),s(a)))}function s(a){a===c&&(a=$.position().top),T.scrollTop(0),ab=a;var b=0===ab,e=ab==_,f=a/_,g=-f*(V-S);(wb!=b||yb!=e)&&(wb=b,yb=e,d.trigger("jsp-arrow-change",[wb,yb,xb,zb])),v(b,e),Q.css("top",g),d.trigger("jsp-scroll-y",[-g,b,e]).trigger("scroll")}function t(a,b){Z&&(0>a?a=0:a>cb&&(a=cb),b===c&&(b=P.animateScroll),b?vb.animate(bb,"left",a,u):(bb.css("left",a),u(a)))}function u(a){a===c&&(a=bb.position().left),T.scrollTop(0),db=a;var b=0===db,e=db==cb,f=a/cb,g=-f*(U-R);(xb!=b||zb!=e)&&(xb=b,zb=e,d.trigger("jsp-arrow-change",[wb,yb,xb,zb])),w(b,e),Q.css("left",g),d.trigger("jsp-scroll-x",[-g,b,e]).trigger("scroll")}function v(a,b){P.showArrows&&(jb[a?"addClass":"removeClass"]("jspDisabled"),kb[b?"addClass":"removeClass"]("jspDisabled"))}function w(a,b){P.showArrows&&(pb[a?"addClass":"removeClass"]("jspDisabled"),qb[b?"addClass":"removeClass"]("jspDisabled"))}function x(a,b){var c=a/(V-S);r(c*_,b)}function y(a,b){var c=a/(U-R);t(c*cb,b)}function z(b,c,d){var e,f,g,h,i,j,k,l,m,n=0,o=0;try{e=a(b)}catch(p){return}for(f=e.outerHeight(),g=e.outerWidth(),T.scrollTop(0),T.scrollLeft(0);!e.is(".jspPane");)if(n+=e.position().top,o+=e.position().left,e=e.offsetParent(),/^body|html$/i.test(e[0].nodeName))return;h=B(),j=h+S,h>n||c?l=n-P.verticalGutter:n+f>j&&(l=n-S+f+P.verticalGutter),isNaN(l)||x(l,d),i=A(),k=i+R,i>o||c?m=o-P.horizontalGutter:o+g>k&&(m=o-R+g+P.horizontalGutter),isNaN(m)||y(m,d)}function A(){return-Q.position().left}function B(){return-Q.position().top}function C(){var a=V-S;return a>20&&a-B()<10}function D(){var a=U-R;return a>20&&a-A()<10}function E(){T.unbind(Bb).bind(Bb,function(a,b,c,d){var e=db,f=ab;return vb.scrollBy(c*P.mouseWheelSpeed,-d*P.mouseWheelSpeed,!1),e==db&&f==ab})}function F(){T.unbind(Bb)}function G(){return!1}function H(){Q.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(a){z(a.target,!1)})}function I(){Q.find(":input,a").unbind("focus.jsp")}function J(){function b(){var a=db,b=ab;switch(c){case 40:vb.scrollByY(P.keyboardSpeed,!1);break;case 38:vb.scrollByY(-P.keyboardSpeed,!1);break;case 34:case 32:vb.scrollByY(S*P.scrollPagePercent,!1);break;case 33:vb.scrollByY(-S*P.scrollPagePercent,!1);break;case 39:vb.scrollByX(P.keyboardSpeed,!1);break;case 37:vb.scrollByX(-P.keyboardSpeed,!1)}return e=a!=db||b!=ab}var c,e,f=[];Z&&f.push(lb[0]),Y&&f.push(eb[0]),Q.focus(function(){d.focus()}),d.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(d){if(d.target===this||f.length&&a(d.target).closest(f).length){var g=db,h=ab;switch(d.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:c=d.keyCode,b();break;case 35:x(V-S),c=null;break;case 36:x(0),c=null}return e=d.keyCode==c&&g!=db||h!=ab,!e}}).bind("keypress.jsp",function(a){return a.keyCode==c&&b(),!e}),P.hideFocus?(d.css("outline","none"),"hideFocus"in T[0]&&d.attr("hideFocus",!0)):(d.css("outline",""),"hideFocus"in T[0]&&d.attr("hideFocus",!1))}function K(){d.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function L(){if(location.hash&&location.hash.length>1){var b,c,d=escape(location.hash.substr(1));try{b=a("#"+d+', a[name="'+d+'"]')}catch(e){return}b.length&&Q.find(d)&&(0===T.scrollTop()?c=setInterval(function(){T.scrollTop()>0&&(z(b,!0),a(document).scrollTop(T.position().top),clearInterval(c))},50):(z(b,!0),a(document).scrollTop(T.position().top)))}}function M(){a(document.body).data("jspHijack")||(a(document.body).data("jspHijack",!0),a(document.body).delegate("a[href*=#]","click",function(c){var d,e,f,g,h,i,j=this.href.substr(0,this.href.indexOf("#")),k=location.href;if(-1!==location.href.indexOf("#")&&(k=location.href.substr(0,location.href.indexOf("#"))),j===k){d=escape(this.href.substr(this.href.indexOf("#")+1));try{e=a("#"+d+', a[name="'+d+'"]')}catch(l){return}e.length&&(f=e.closest(".jspScrollable"),g=f.data("jsp"),g.scrollToElement(e,!0),f[0].scrollIntoView&&(h=a(b).scrollTop(),i=e.offset().top,(h>i||i>h+a(b).height())&&f[0].scrollIntoView()),c.preventDefault())}}))}function N(){var a,b,c,d,e,f=!1;T.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(g){var h=g.originalEvent.touches[0];a=A(),b=B(),c=h.pageX,d=h.pageY,e=!1,f=!0}).bind("touchmove.jsp",function(g){if(f){var h=g.originalEvent.touches[0],i=db,j=ab;return vb.scrollTo(a+c-h.pageX,b+d-h.pageY),e=e||Math.abs(c-h.pageX)>5||Math.abs(d-h.pageY)>5,i==db&&j==ab}}).bind("touchend.jsp",function(){f=!1}).bind("click.jsp-touchclick",function(){return e?(e=!1,!1):void 0})}function O(){var a=B(),b=A();d.removeClass("jspScrollable").unbind(".jsp"),d.replaceWith(Ab.append(Q.children())),Ab.scrollTop(a),Ab.scrollLeft(b),rb&&clearInterval(rb)}var P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb=this,wb=!0,xb=!0,yb=!1,zb=!1,Ab=d.clone(!1,!1).empty(),Bb=a.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";"border-box"===d.css("box-sizing")?(sb=0,tb=0):(sb=d.css("paddingTop")+" "+d.css("paddingRight")+" "+d.css("paddingBottom")+" "+d.css("paddingLeft"),tb=(parseInt(d.css("paddingLeft"),10)||0)+(parseInt(d.css("paddingRight"),10)||0)),a.extend(vb,{reinitialise:function(b){b=a.extend({},P,b),f(b)},scrollToElement:function(a,b,c){z(a,b,c)},scrollTo:function(a,b,c){y(a,c),x(b,c)},scrollToX:function(a,b){y(a,b)},scrollToY:function(a,b){x(a,b)},scrollToPercentX:function(a,b){y(a*(U-R),b)},scrollToPercentY:function(a,b){x(a*(V-S),b)},scrollBy:function(a,b,c){vb.scrollByX(a,c),vb.scrollByY(b,c)},scrollByX:function(a,b){var c=A()+Math[0>a?"floor":"ceil"](a),d=c/(U-R);t(d*cb,b)},scrollByY:function(a,b){var c=B()+Math[0>a?"floor":"ceil"](a),d=c/(V-S);r(d*_,b)},positionDragX:function(a,b){t(a,b)},positionDragY:function(a,b){r(a,b)},animate:function(a,b,c,d){var e={};e[b]=c,a.animate(e,{duration:P.animateDuration,easing:P.animateEase,queue:!1,step:d})},getContentPositionX:function(){return A()},getContentPositionY:function(){return B()},getContentWidth:function(){return U},getContentHeight:function(){return V},getPercentScrolledX:function(){return A()/(U-R)},getPercentScrolledY:function(){return B()/(V-S)},getIsScrollableH:function(){return Z},getIsScrollableV:function(){return Y},getContentPane:function(){return Q},scrollToBottom:function(a){r(_,a)},hijackInternalLinks:a.noop,destroy:function(){O()}}),f(e)}return d=a.extend({},a.fn.jScrollPane.defaults,d),a.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){d[this]=d[this]||d.speed}),this.each(function(){var b=a(this),c=b.data("jsp");c?c.reinitialise(d):(a("script",b).filter('[type="text/javascript"],:not([type])').remove(),c=new e(b,d),b.data("jsp",c))})},a.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}}(jQuery,this);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/bitrix/templates/prostroy/js/jscrollpane/script.js?15975745407176";s:6:"source";s:51:"/bitrix/templates/prostroy/js/jscrollpane/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_JSPParentSelector = '.scrollp';
var RSGoPro_JSPScrollSelector = '.scroll';
var RSGoPro_JSPAllChildrensSelector = '.scrollinner';
var RSGoPro_JSPOneChildrenSelector = '.scrollitem';
var RSGoPro_JSPButtonsSelector = '.scrollbtn';
var RSGoPro_SimpleScrollScrollSpeed = 500;

(function($){
    $.fn.hasScrollBarY = function(){
        var divnode = this.get(0);
        if(divnode.scrollHeight>divnode.clientHeight)
            return true;
    }
	 $.fn.hasScrollBarX = function(){
        var divnode = this.get(0);
        if(divnode.scrollWidth>divnode.clientWidth)
            return true;
    }
})(jQuery);

function RSGoPro_JSPInit(selector)
{
	var $scroll = $(selector);
	if( $scroll.length>0 )
	{
		$scroll.parents(RSGoPro_JSPParentSelector).addClass('jsp');
		$scroll.jScrollPane({animateScroll:true,mouseWheelSpeed:30,verticalGutter:0});
		$scroll.each(function(i){
			if( $(this).hasClass('jspScrollable') )
			{
				$(this).parents(RSGoPro_JSPParentSelector).addClass('jspHasScroll');
			}
		});
	}
}
function RSGoPro_JSPReinit(selector,needDestroy)
{
	var $scroll = $(selector);
	if( $scroll.length>0 )
	{
		if( $scroll.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') )
		{
			var count=0,elemWidth=0;
			$scroll.each(function(i){
				count = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).length;
				elemWidth = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).filter(':first').outerWidth(true);
				$(this).find(RSGoPro_JSPAllChildrensSelector).css({width:(count*elemWidth)+'px'});
			});
		}
		if( needDestroy )
		{
			$scroll.data('jsp').destroy();
			RSGoPro_JSPInit(selector);
		} else {
			var pane2api;
			setTimeout(function(){ // fix for slow shit
				$scroll.parents(RSGoPro_JSPParentSelector).removeClass('jspHasScroll');
				$scroll.each(function(i){
					pane2api = $(this).data('jsp');
					pane2api.reinitialise();
					if( $(this).hasClass('jspScrollable') )
					{
						$(this).parents(RSGoPro_JSPParentSelector).addClass('jspHasScroll');
					}
				});
			},50);
		}
	}
}

function RSGoPro_SimpleScrollInit(selector)
{
	var $scroll = $(selector);
	if( $scroll.length>0 )
	{
		var count=0,elemWidth=0;
		if( $scroll.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') )
		{
			$scroll.each(function(i){
				count = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).length;
				elemSize = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).filter(':first').outerWidth(true);
				$(this).css({overflowX:'auto',overflowY:'hidden'}).find(RSGoPro_JSPAllChildrensSelector).css({width:(count*elemSize)+'px'});
				if( $(this).hasScrollBarX() )
				{
					$(this).parents(RSGoPro_JSPParentSelector).addClass('jspHasScroll');
				}
			});
		} else {
			$scroll.each(function(i){
				count = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).length;
				elemSize = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).filter(':first').outerHeight(true);
				//$(this).css({overflowX:'hidden',overflowY:'auto'}).find(RSGoPro_JSPAllChildrensSelector).css({width:(count*elemSize)+'px'});
				if( $(this).hasScrollBarY() )
				{
					$(this).parents(RSGoPro_JSPParentSelector).addClass('jspHasScroll');
				}
			});
		}
		$scroll.parents(RSGoPro_JSPParentSelector).addClass('simple');
	}
}
function RSGoPro_SimpleScrollReinit(selector)
{
	$(selector).each(function(i){
		if( $(this).hasScrollBarY() )
		{
			$(this).parents(RSGoPro_JSPParentSelector).addClass('jspHasScroll');
		}
	});
}

function RSGoPro_ScrollInit(selector)
{
	if(RSDevFunc_PHONETABLET) // this is tablet or phone
	{
		// init
		RSGoPro_SimpleScrollInit(selector);
	} else { // this is PC
		// init
		RSGoPro_JSPInit(selector);
	}
}
function RSGoPro_ScrollReinit(selector,needDestroy)
{
	if(RSDevFunc_PHONETABLET) // this is tablet or phone
	{
		// reinit
		RSGoPro_SimpleScrollReinit(selector);
	} else {
		// reinit
		RSGoPro_JSPReinit(selector,needDestroy);
	}
}
function RSGoPro_ScrollPressButton($btn)
{
	var $scroll = $btn.parents(RSGoPro_JSPParentSelector).find(RSGoPro_JSPScrollSelector);
	if( $btn.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') )
	{
		var elemSize = $scroll.find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).filter(':first').outerWidth(true);
	} else {
		var elemSize = $scroll.find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).filter(':first').outerHeight(true);
	}
	if( $btn.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') && $btn.hasClass('prev') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('jsp') )
	{
		$scroll.data('jsp').scrollByX( -(elemSize) );
	} else if( $btn.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') && $btn.hasClass('prev') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('simple') )
	{
		$scroll.stop().scrollTo( {top:'+=0px',left:'-='+(elemSize)}, RSGoPro_SimpleScrollScrollSpeed );
	} else if( $btn.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') && $btn.hasClass('next') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('jsp') )
	{
		$scroll.data('jsp').scrollByX( (elemSize) );
	} else if( $btn.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') && $btn.hasClass('next') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('simple') )
	{
		$scroll.stop().scrollTo( {top:'+=0px',left:'+='+(elemSize)}, RSGoPro_SimpleScrollScrollSpeed );
	} else if( $btn.parents(RSGoPro_JSPParentSelector).hasClass('vertical') && $btn.hasClass('prev') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('jsp') )
	{
		$scroll.data('jsp').scrollByY( -(elemSize) );
	} else if( $btn.parents(RSGoPro_JSPParentSelector).hasClass('vertical') && $btn.hasClass('prev') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('simple') )
	{
		$scroll.stop().scrollTo( {top:'-='+(elemSize),left:'+=0px'}, RSGoPro_SimpleScrollScrollSpeed );
	} else if( $btn.parents(RSGoPro_JSPParentSelector).hasClass('vertical') && $btn.hasClass('next') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('jsp') )
	{
		$scroll.data('jsp').scrollByY( (elemSize) );
	} else if( $btn.parents(RSGoPro_JSPParentSelector).hasClass('vertical') && $btn.hasClass('next') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('simple') )
	{
		$scroll.stop().scrollTo( {top:'+='+(elemSize),left:'+=0px'}, RSGoPro_SimpleScrollScrollSpeed );
	}
}
function RSGoPro_ScrollGoToElement($element)
{
	var $scroll = $element.parents(RSGoPro_JSPParentSelector).find(RSGoPro_JSPScrollSelector);
	if( $element.parents(RSGoPro_JSPParentSelector).hasClass('jsp') )
	{
		$scroll.data('jsp').scrollToElement( $element, false );
	} else if( $element.parents(RSGoPro_JSPParentSelector).hasClass('simple') ) {
		$scroll.stop().scrollTo( $element, RSGoPro_SimpleScrollScrollSpeed );
	}
}


$(document).ready(function(){
	
	// press button
	$(document).on('click',RSGoPro_JSPParentSelector+' '+RSGoPro_JSPButtonsSelector,function(){
		var $btn = $(this);
		if( $btn.parents(RSGoPro_JSPParentSelector).length>0 )
		{
			RSGoPro_ScrollPressButton($btn);
		}
		return false;
	});
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/bitrix/templates/prostroy/js/jssor/jssor.core.js?15975745407025";s:6:"source";s:49:"/bitrix/templates/prostroy/js/jssor/jssor.core.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
ï»¿/*
* Jssor.Core 14.0
* http://www.jssor.com/
* 
* TERMS OF USE - Jssor.Core
* 
* Copyright 2014 Jssor
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*! Jssor */
$Jssor$ = window.$Jssor$ = window.$Jssor$ || {};

//$Jssor$.$Ready = function () {
//    //Logic borrowed from http://www.jquery.com

//    var readyBound = false,
//        readyList = [],
//        DOMContentLoaded;

//    if (document.addEventListener) {
//        DOMContentLoaded = function() {
//            document.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);
//            ready();
//        };

//    } else if (document.attachEvent) {
//        DOMContentLoaded = function() {
//            if (document.readyState === 'complete') {
//                document.detachEvent('onreadystatechange', DOMContentLoaded);
//                ready();
//            }
//        };
//    }

//    function ready() {
//        if (!ready.$IsReady) {
//            ready.$IsReady = true;
//            for (var i = 0, j = readyList.length; i < j; i++) {
//                try {
//                    readyList[i]();
//                }
//                catch (e) { }
//            }
//        }
//    }

//    function doScrollCheck() {
//        try {
//            document.documentElement.doScroll("left");
//        } catch (e) {
//            setTimeout(doScrollCheck, 1);
//            return;
//        }
//        ready();
//    }

//    function bindReady() {
//        if (readyBound) {
//            return;
//        }
//        readyBound = true;

//        if (document.readyState === 'complete') {
//            ready.$IsReady = true;
//        } else {
//            if (document.addEventListener) {
//                document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
//                window.addEventListener('load', ready, false);
//            } else if (document.attachEvent) {
//                document.attachEvent('onreadystatechange', DOMContentLoaded);
//                window.attachEvent('onload', ready);

//                var toplevel = false;

//                try {
//                    toplevel = window.frameElement == null;
//                } catch (e) { }

//                if (document.documentElement.doScroll && toplevel) {
//                    doScrollCheck();
//                }
//            }
//        }
//    }
//    bindReady();

//    return function(callback) {
//        ready.$IsReady ? callback() : readyList.push(callback);
//    };
//}();


//$JssorDebug$
var $JssorDebug$ = new function () {

    this.$DebugMode = true;

    // Methods

    this.$Log = function (msg, important) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        } else if (debug && important) {
            alert(msg);
        }
    };

    this.$Error = function (msg, e) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.error) {
            console.error(msg);
        } else if (debug) {
            alert(msg);
        }

        if (debug) {
            // since we're debugging, fail fast by crashing
            throw e || new Error(msg);
        }
    };

    this.$Fail = function (msg) {
        throw new Error(msg);
    };

    this.$Assert = function (value, msg) {
        var debug = this.$DebugMode;
        if (debug) {
            if (!value)
                throw new Error("Assert failed " + msg || "");
        }
    };

    this.$Trace = function (msg) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        }
    };

    this.$Execute = function (func) {
        var debug = this.$DebugMode;
        if (debug)
            func();
    };

    this.$LiveStamp = function (obj, id) {
        var stamp = document.createElement("DIV");
        stamp.setAttribute("id", id);

        obj.$Live = stamp;
    };
};


//$JssorEventManager$
var $JssorEventManager$ = function () {
    var self = this;
    // Fields

    var listeners = {}; // dictionary of eventName --> array of handlers

    // Methods

    self.$On = self.addEventListener = function (eventName, handler) {
        if (typeof (handler) != "function") {
            return;
        }

        if (!listeners[eventName]) {
            listeners[eventName] = [];
        }

        listeners[eventName].push(handler);
    };

    self.$Off = self.removeEventListener = function (eventName, handler) {
        var handlers = listeners[eventName];

        if (typeof (handler) != "function") {
            return;
        } else if (!handlers) {
            return;
        }

        for (var i = 0; i < handlers.length; i++) {
            if (handler == handlers[i]) {
                handlers.splice(i, 1);
                return;
            }
        }
    };

    self.$ClearEventListeners = function (eventName) {
        if (listeners[eventName]) {
            delete listeners[eventName];
        }
    };

    self.$TriggerEvent = function (eventName) {
        var handlers = listeners[eventName];
        var args = [];

        if (!handlers) {
            return;
        }

        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        for (var i = 0; i < handlers.length; i++) {
            try {
                handlers[i].apply(window, args);
            } catch (e) {
                // handler threw an error, ignore, go on to next one
                $JssorDebug$.$Error(e.name + " while executing " + eventName +
                        " handler: " + e.message, e);
            }
        }
    };
};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/bitrix/templates/prostroy/js/jssor/jssor.utils.js?159757454089616";s:6:"source";s:50:"/bitrix/templates/prostroy/js/jssor/jssor.utils.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
ï»¿/// <reference path="Jssor.Core.js" />

/*
* Jssor.Utils 14.0
* http://www.jssor.com/
* 
* TERMS OF USE - Jssor.Utils
* 
* Copyright 2014 Jssor
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


//$JssorPoint$
var $JssorPoint$;

(function () {

    $JssorPoint$ = function (x, y) {

        // Properties

        this.x = typeof (x) == "number" ? x : 0;
        this.y = typeof (y) == "number" ? y : 0;

    };

    // Methods

    var SDPointPrototype = $JssorPoint$.prototype;

    SDPointPrototype.$Plus = function (point) {
        return new $JssorPoint$(this.x + point.x, this.y + point.y);
    };

    SDPointPrototype.$Minus = function (point) {
        return new $JssorPoint$(this.x - point.x, this.y - point.y);
    };

    SDPointPrototype.$Times = function (factor) {
        return new $JssorPoint$(this.x * factor, this.y * factor);
    };

    SDPointPrototype.$Divide = function (factor) {
        return new $JssorPoint$(this.x / factor, this.y / factor);
    };

    SDPointPrototype.$Negate = function () {
        return new $JssorPoint$(-this.x, -this.y);
    };

    SDPointPrototype.$DistanceTo = function (point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) +
                        Math.pow(this.y - point.y, 2));
    };

    SDPointPrototype.$Apply = function (func) {
        return new $JssorPoint$(func(this.x), func(this.y));
    };

    SDPointPrototype.$Equals = function (point) {
        return (point instanceof $JssorPoint$) &&
                (this.x === point.x) && (this.y === point.y);
    };

    SDPointPrototype.$ToString = function () {
        return "(" + this.x + "," + this.y + ")";
    };

})();

//$JssorEasing$
var $JssorEasing$ = window.$JssorEasing$ = {
    $EaseLinear: function (t) {
        return t;
    },
    $EaseGoBack: function (t) {
        return 1 - Math.abs((t *= 2) - 1);
    },
    $EaseSwing: function (t) {
        return -Math.cos(t * Math.PI) / 2 + .5;
    },
    $EaseInQuad: function (t) {
        return t * t;
    },
    $EaseOutQuad: function (t) {
        return -t * (t - 2);
    },
    $EaseInOutQuad: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t : -1 / 2 * (--t * (t - 2) - 1);
    },
    $EaseInCubic: function (t) {
        return t * t * t;
    },
    $EaseOutCubic: function (t) {
        return (t -= 1) * t * t + 1;
    },
    $EaseInOutCubic: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t : 1 / 2 * ((t -= 2) * t * t + 2);
    },
    $EaseInQuart: function (t) {
        return t * t * t * t;
    },
    $EaseOutQuart: function (t) {
        return -((t -= 1) * t * t * t - 1);
    },
    $EaseInOutQuart: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t : -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    $EaseInQuint: function (t) {
        return t * t * t * t * t;
    },
    $EaseOutQuint: function (t) {
        return (t -= 1) * t * t * t * t + 1;
    },
    $EaseInOutQuint: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t * t : 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    $EaseInSine: function (t) {
        return 1 - Math.cos(t * Math.PI / 2)
    },
    $EaseOutSine: function (t) {
        return Math.sin(t * Math.PI / 2);
    },
    $EaseInOutSine: function (t) {
        return -1 / 2 * (Math.cos(Math.PI * t) - 1);
    },
    $EaseInExpo: function (t) {
        return t == 0 ? 0 : Math.pow(2, 10 * (t - 1));
    },
    $EaseOutExpo: function (t) {
        return t == 1 ? 1 : -Math.pow(2, -10 * t) + 1;
    },
    $EaseInOutExpo: function (t) {
        return t == 0 || t == 1 ? t : (t *= 2) < 1 ? 1 / 2 * Math.pow(2, 10 * (t - 1)) : 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    $EaseInCirc: function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
    },
    $EaseOutCirc: function (t) {
        return Math.sqrt(1 - (t -= 1) * t);
    },
    $EaseInOutCirc: function (t) {
        return (t *= 2) < 1 ? -1 / 2 * (Math.sqrt(1 - t * t) - 1) : 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    $EaseInElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p));
    },
    $EaseOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return Math.pow(2, -10 * t) * Math.sin((t - s) * 2 * Math.PI / p) + 1;
    },
    $EaseInOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .45, s = .1125;
        return (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) : Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) * .5 + 1;
    },
    $EaseInBack: function (t) {
        var s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    $EaseOutBack: function (t) {
        var s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    $EaseInOutBack: function (t) {
        var s = 1.70158;
        return (t *= 2) < 1 ? 1 / 2 * t * t * (((s *= 1.525) + 1) * t - s) : 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    $EaseInBounce: function (t) {
        return 1 - $JssorEasing$.$EaseOutBounce(1 - t)
    },
    $EaseOutBounce: function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    $EaseInOutBounce: function (t) {
        return t < 1 / 2 ? $JssorEasing$.$EaseInBounce(t * 2) * .5 : $JssorEasing$.$EaseOutBounce(t * 2 - 1) * .5 + .5;
    },
    $EaseInWave: function (t) {
        return 1 - Math.cos(t * Math.PI * 2)
    },
    $EaseOutWave: function (t) {
        return Math.sin(t * Math.PI * 2);
    },
    $EaseOutJump: function (t) {
        return 1 - (((t *= 2) < 1) ? (t = 1 - t) * t * t : (t -= 1) * t * t);
    },
    $EaseInJump: function (t) {
        return ((t *= 2) < 1) ? t * t * t : (t = 2 - t) * t * t;
    }
};

var $JssorDirection$ = window.$JssorDirection$ = {
    $TO_LEFT: 0x0001,
    $TO_RIGHT: 0x0002,
    $TO_TOP: 0x0004,
    $TO_BOTTOM: 0x0008,
    $HORIZONTAL: 0x0003,
    $VERTICAL: 0x000C,
    $LEFTRIGHT: 0x0003,
    $TOPBOTOM: 0x000C,
    $TOPLEFT: 0x0005,
    $TOPRIGHT: 0x0006,
    $BOTTOMLEFT: 0x0009,
    $BOTTOMRIGHT: 0x000A,
    $AROUND: 0x000F,

    $GetDirectionHorizontal: function (direction) {
        return direction & 0x0003;
    },
    $GetDirectionVertical: function (direction) {
        return direction & 0x000C;
    },
    $ChessHorizontal: function (direction) {
        return (~direction & 0x0003) + (direction & 0x000C);
    },
    $ChessVertical: function (direction) {
        return (~direction & 0x000C) + (direction & 0x0003);
    },
    $IsToLeft: function (direction) {
        return (direction & 0x0003) == 0x0001;
    },
    $IsToRight: function (direction) {
        return (direction & 0x0003) == 0x0002;
    },
    $IsToTop: function (direction) {
        return (direction & 0x000C) == 0x0004;
    },
    $IsToBottom: function (direction) {
        return (direction & 0x000C) == 0x0008;
    },
    $IsHorizontal: function (direction) {
        return (direction & 0x0003) > 0;
    },
    $IsVertical: function (direction) {
        return (direction & 0x000C) > 0;
    }
};

var $JssorKeyCode$ = {
    $BACKSPACE: 8,
    $COMMA: 188,
    $DELETE: 46,
    $DOWN: 40,
    $END: 35,
    $ENTER: 13,
    $ESCAPE: 27,
    $HOME: 36,
    $LEFT: 37,
    $NUMPAD_ADD: 107,
    $NUMPAD_DECIMAL: 110,
    $NUMPAD_DIVIDE: 111,
    $NUMPAD_ENTER: 108,
    $NUMPAD_MULTIPLY: 106,
    $NUMPAD_SUBTRACT: 109,
    $PAGE_DOWN: 34,
    $PAGE_UP: 33,
    $PERIOD: 190,
    $RIGHT: 39,
    $SPACE: 32,
    $TAB: 9,
    $UP: 38
};

var $JssorAlignment$ = {
    $TopLeft: 0x11,
    $TopCenter: 0x12,
    $TopRight: 0x14,
    $MiddleLeft: 0x21,
    $MiddleCenter: 0x22,
    $MiddleRight: 0x24,
    $BottomLeft: 0x41,
    $BottomCenter: 0x42,
    $BottomRight: 0x44,

    $IsTop: function (aligment) {
        return aligment & 0x10 > 0;
    },
    $IsMiddle: function (alignment) {
        return alignment & 0x20 > 0;
    },
    $IsBottom: function (alignment) {
        return alignment & 0x40 > 0;
    },
    $IsLeft: function (alignment) {
        return alignment & 0x01 > 0;
    },
    $IsCenter: function (alignment) {
        return alignment & 0x02 > 0;
    },
    $IsRight: function (alignment) {
        return alignment & 0x04 > 0;
    }
};

var $JssorMatrix$;

var $JssorBrowser$ = {
    $UNKNOWN: 0,
    $IE: 1,
    $FIREFOX: 2,
    $SAFARI: 3,
    $CHROME: 4,
    $OPERA: 5
};

var $ROWSER_UNKNOWN$ = 0;
var $ROWSER_IE$ = 1;
var $ROWSER_FIREFOX$ = 2;
var $ROWSER_SAFARI$ = 3;
var $ROWSER_CHROME$ = 4;
var $ROWSER_OPERA$ = 5;

var $JssorAnimator$;

// $JssorUtils$ is a static class, so make it singleton instance
var $JssorUtils$ = window.$JssorUtils$ = new function () {

    // Fields

    var self = this;

    var arrActiveX = ["Msxml2.XMLHTTP", "Msxml3.XMLHTTP", "Microsoft.XMLHTTP"];
    var supportedImageFormats = {
        "bmp": false,
        "jpeg": true,
        "jpg": true,
        "png": true,
        "tif": false,
        "wdp": false
    };

    var browser = $JssorBrowser$.$UNKNOWN;
    var browserRuntimeVersion = 0;
    var browserEngineVersion = 0;
    var browserJavascriptVersion = 0;
    var webkitVersion = 0;

    var app = navigator.appName;
    var ver = navigator.appVersion;
    var ua = navigator.userAgent;

    var urlParams = {};

    function DetectBrowser() {
        if (!browser) {
            if (app == "Microsoft Internet Explorer" &&
                !!window.attachEvent && !!window.ActiveXObject) {

                var ieOffset = ua.indexOf("MSIE");
                browser = $JssorBrowser$.$IE;
                browserEngineVersion = parseFloat(ua.substring(ieOffset + 5, ua.indexOf(";", ieOffset)));

                //check IE javascript version
                /*@cc_on
                browserJavascriptVersion = @_jscript_version;
                @*/

                // update: for intranet sites and compat view list sites, IE sends
                // an IE7 User-Agent to the server to be interoperable, and even if
                // the page requests a later IE version, IE will still report the
                // IE7 UA to JS. we should be robust to self.
                //var docMode = document.documentMode;
                //if (typeof docMode !== "undefined") {
                //    browserRuntimeVersion = docMode;
                //}

                browserRuntimeVersion = document.documentMode || browserEngineVersion;

            }
            else if (app == "Netscape" && !!window.addEventListener) {

                var ffOffset = ua.indexOf("Firefox");
                var saOffset = ua.indexOf("Safari");
                var chOffset = ua.indexOf("Chrome");
                var webkitOffset = ua.indexOf("AppleWebKit");

                if (ffOffset >= 0) {
                    browser = $JssorBrowser$.$FIREFOX;
                    browserRuntimeVersion = parseFloat(ua.substring(ffOffset + 8));
                }
                else if (saOffset >= 0) {
                    var slash = ua.substring(0, saOffset).lastIndexOf("/");
                    browser = (chOffset >= 0) ? $JssorBrowser$.$CHROME : $JssorBrowser$.$SAFARI;
                    browserRuntimeVersion = parseFloat(ua.substring(slash + 1, saOffset));
                }

                if (webkitOffset >= 0)
                    webkitVersion = parseFloat(ua.substring(webkitOffset + 12));
            }
            else {
                var match = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(ua);
                if (match) {
                    browser = $JssorBrowser$.$OPERA;
                    browserRuntimeVersion = parseFloat(match[2]);
                }
            }
        }
    }

    function IsBrowserIE() {
        DetectBrowser();
        return browser == $ROWSER_IE$;
    }

    function IsBrowserIeQuirks() {

        return IsBrowserIE() && (browserRuntimeVersion < 6 || document.compatMode == "BackCompat");   //Composite to "CSS1Compat"
    }

    function IsBrowserFireFox() {
        DetectBrowser();
        return browser == $ROWSER_FIREFOX$;
    }

    function IsBrowserSafari() {
        DetectBrowser();
        return browser == $ROWSER_SAFARI$;
    }

    function IsBrowserChrome() {
        DetectBrowser();
        return browser == $ROWSER_CHROME$;
    }

    function IsBrowserOpera() {
        DetectBrowser();
        return browser == $ROWSER_OPERA$;
    }

    function IsBrowserBadTransform() {
        return IsBrowserSafari() && (webkitVersion > 534) && (webkitVersion < 535);
    }

    function IsBrowserSafeHWA() {
        return IsBrowserSafari() && (webkitVersion < 535);
    }

    function IsBrowserIe9Earlier() {

        //IE 8- and chrome 1 won't fade well
        return IsBrowserIE() && browserRuntimeVersion < 9; // || (IsBrowserChrome() && browserRuntimeVersion < 2);
    }

    var _TransformProperty;
    function GetTransformProperty(elmt) {

        if (!_TransformProperty) {
            // Note that in some versions of IE9 it is critical that
            // msTransform appear in this list before MozTransform

            each(['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'], function (property) {
                if (!self.$IsUndefined(elmt.style[property])) {
                    _TransformProperty = property;
                    return true;
                }
            });

            _TransformProperty = _TransformProperty || "transform";
        }

        return _TransformProperty;
    }

    // Constructor
    {
        //Ignore urlParams
        //        // Url parameters

        //        var query = window.location.search.substring(1);    // ignore '?'
        //        var parts = query.split('&');

        //        for (var i = 0; i < parts.length; i++) {
        //            var part = parts[i];
        //            var sep = part.indexOf('=');

        //            if (sep > 0) {
        //                urlParams[part.substring(0, sep)] =
        //                        decodeURIComponent(part.substring(sep + 1));
        //            }
        //        }

        // Browser behaviors

    }

    // Helpers
    function getOffsetParent(elmt, isFixed) {
        // IE and Opera "fixed" position elements don't have offset parents.
        // regardless, if it's fixed, its offset parent is the body.
        if (isFixed && elmt != document.body) {
            return document.body;
        } else {
            return elmt.offsetParent;
        }
    }

    function toString(obj) {
        return Object.prototype.toString.call(obj);
    }

    // [[Class]] -> type pairs
    var class2type;

    function each(object, callback) {
        if (toString(object) == "[object Array]") {
            for (var i = 0; i < object.length; i++) {
                if (callback(object[i], i, object)) {
                    break;
                }
            }
        } else {
            for (var name in object) {
                if (callback(object[name], name, object)) {
                    break;
                }
            }
        }
    }

    function GetClass2Type() {
        if (!class2type) {
            class2type = {};
            each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (name) {
                class2type["[object " + name + "]"] = name.toLowerCase();
            });
        }

        return class2type;
    }

    function type(obj) {
        return obj == null ? String(obj) : GetClass2Type()[toString(obj)] || "object";
    }

    function isPlainObject(obj) {
        // Must be an Object.
        // Because of IE, we also have to check the presence of the constructor property.
        // Make sure that DOM nodes and window objects don't pass through, as well
        if (!obj || type(obj) !== "object" || obj.nodeType || self.$IsWindow(obj)) {
            return false;
        }

        var hasOwn = Object.prototype.hasOwnProperty;

        try {
            // Not own constructor property must be Object
            if (obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        } catch (e) {
            // IE8,9 Will throw exceptions on certain host objects #9897
            return false;
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.

        var key;
        for (key in obj) { }

        return key === undefined || hasOwn.call(obj, key);
    }

    function Delay(code, delay) {
        setTimeout(code, delay || 0);
    }

    function RemoveByReg(str, reg) {
        var m = reg.exec(str);

        if (m) {
            var header = str.substr(0, m.index);
            var tailer = str.substr(m.lastIndex + 1, str.length - (m.lastIndex + 1));
            str = header + tailer;
        }

        return str;
    }

    function BuildNewCss(oldCss, removeRegs, replaceValue) {
        var css = (!oldCss || oldCss == "inherit") ? "" : oldCss;

        each(removeRegs, function (removeReg) {
            var m = removeReg.exec(css);

            if (m) {
                var header = css.substr(0, m.index);
                var tailer = css.substr(m.lastIndex + 1, css.length - (m.lastIndex + 1));
                css = header + tailer;
            }
        });

        css = replaceValue + (css.indexOf(" ") != 0 ? " " : "") + css;

        return css;
    }

    function SetStyleFilterIE(elmt, value) {
        if (browserRuntimeVersion < 9) {
            elmt.style.filter = value;
        }
    }

    function SetStyleMatrixIE(elmt, matrix, offset) {
        //matrix is not for ie9+ running in ie8- mode
        if (browserJavascriptVersion < 9) {
            var oldFilterValue = elmt.style.filter;
            var matrixReg = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g);
            var matrixValue = matrix ? "progid:DXImageTransform.Microsoft.Matrix(" + "M11=" + matrix[0][0] + ", M12=" + matrix[0][1] + ", M21=" + matrix[1][0] + ", M22=" + matrix[1][1] + ", SizingMethod='auto expand')" : "";

            var newFilterValue = BuildNewCss(oldFilterValue, [matrixReg], matrixValue);

            SetStyleFilterIE(elmt, newFilterValue);

            self.$SetStyleMarginTop(elmt, offset.y);
            self.$SetStyleMarginLeft(elmt, offset.x);
        }
    }

    // Methods

    self.$IsBrowserIE = IsBrowserIE;

    self.$IsBrowserIeQuirks = IsBrowserIeQuirks;

    self.$IsBrowserFireFox = IsBrowserFireFox;

    self.$IsBrowserSafari = IsBrowserSafari;

    self.$IsBrowserChrome = IsBrowserChrome;

    self.$IsBrowserOpera = IsBrowserOpera;

    self.$IsBrowserBadTransform = IsBrowserBadTransform;

    self.$IsBrowserSafeHWA = IsBrowserSafeHWA;

    self.$IsBrowserIe9Earlier = IsBrowserIe9Earlier;

    self.$GetBrowserVersion = function () {
        return browserRuntimeVersion;
    };

    self.$GetBrowserEngineVersion = function () {
        return browserEngineVersion || browserRuntimeVersion;
    };

    self.$GetWebKitVersion = function () {
        return webkitVersion;
    };

    self.$Delay = Delay;

    self.$GetElement = function (elmt) {
        if (self.$IsString(elmt)) {
            elmt = document.getElementById(elmt);
        }

        return elmt;
    };

    self.$GetElementPosition = function (elmt) {
        elmt = self.$GetElement(elmt);
        var result = new $JssorPoint$();

        // technique from:
        // http://www.quirksmode.org/js/findpos.html
        // with special check for "fixed" elements.

        while (elmt) {
            result.x += elmt.offsetLeft;
            result.y += elmt.offsetTop;

            var isFixed = self.$GetElementStyle(elmt).position == "fixed";

            if (isFixed) {
                result = result.$Plus(self.$GetPageScroll(window));
            }

            elmt = getOffsetParent(elmt, isFixed);
        }

        return result;
    };

    self.$GetElementSize = function (elmt) {
        elmt = self.$GetElement(elmt);
        return new $JssorPoint$(elmt.clientWidth, elmt.clientHeight);
    };

    self.$GetElementStyle = function (elmt) {
        elmt = self.$GetElement(elmt);

        if (elmt.currentStyle) {
            return elmt.currentStyle;
        } else if (window.getComputedStyle) {
            return window.getComputedStyle(elmt, "");
        } else {
            $JssorDebug$.$Fail("Unknown elmt style, no known technique.");
        }
    };

    self.$GetEvent = function (event) {
        return event ? event : window.event;
    };

    self.$GetEventSrcElement = function (event) {
        event = self.$GetEvent(event);
        return event.target || event.srcElement || document;
    };

    self.$GetEventDstElement = function (event) {
        event = self.$GetEvent(event);
        return event.relatedTarget || event.toElement;
    };

    self.$GetMousePosition = function (event) {
        event = self.$GetEvent(event);
        var result = new $JssorPoint$();

        // technique from:
        // http://www.quirksmode.org/js/events_properties.html

        if (event.type == "DOMMouseScroll" &&
                IsBrowserFireFox() && browserRuntimeVersion < 3) {
            // hack for FF2 which reports incorrect position for mouse scroll
            result.x = event.screenX;
            result.y = event.screenY;
        } else if (typeof (event.pageX) == "number") {
            result.x = event.pageX;
            result.y = event.pageY;
        } else if (typeof (event.clientX) == "number") {
            result.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            result.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        } else {
            $JssorDebug$.$Fail("Unknown event mouse position, no known technique.");
        }

        return result;
    };

    self.$GetMouseScroll = function (event) {
        event = self.$GetEvent(event);
        var delta = 0; // default value

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/10/31/javascript-tutorial-the-scroll-wheel/

        if (typeof (event.wheelDelta) == "number") {
            delta = event.wheelDelta;
        } else if (typeof (event.detail) == "number") {
            delta = event.detail * -1;
        } else {
            $JssorDebug$.$Fail("Unknown event mouse scroll, no known technique.");
        }

        // normalize value to [-1, 1]
        return delta ? delta / Math.abs(delta) : 0;
    };

    self.$GetPageScroll = function (window) {
        var result = new $JssorPoint$();
        var docElmt = window.document.documentElement || {};
        var body = window.document.body || {};

        // technique from:
        // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

        if (typeof (window.pageXOffset) == "number") {
            // most browsers
            result.x = window.pageXOffset;
            result.y = window.pageYOffset;
        } else if (body.scrollLeft || body.scrollTop) {
            // W3C spec, IE6+ in quirks mode
            result.x = body.scrollLeft;
            result.y = body.scrollTop;
        } else if (docElmt.scrollLeft || docElmt.scrollTop) {
            // IE6+ in standards mode
            result.x = docElmt.scrollLeft;
            result.y = docElmt.scrollTop;
        }

        // note: we specifically aren't testing for typeof here, because IE sets
        // the appropriate variables undefined instead of 0 under certain
        // conditions. self means we also shouldn't fail if none of the three
        // cases are hit; we'll just assume the page scroll is 0.

        return result;
    };

    self.$GetWindowSize = function (window) {
        var result = new $JssorPoint$();

        // technique from:
        // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

        // important: i originally cleaned up the second and third IE checks to
        // check if the typeof was number. but self fails for quirks mode,
        // because docElmt.clientWidth is indeed a number, but it's incorrectly
        // zero. so no longer checking typeof is number for those cases.

        //if (typeof (window.innerWidth) == 'number') {
        //    // non-IE browsers
        //    result.x = window.innerWidth;
        //    result.y = window.innerHeight;
        //}
        //else {

        //jQuery way to get window size, but support ie quirks mode
        var checkElement = (IsBrowserIeQuirks() ? window.document.body : window.document.documentElement);

        //$JssorDebug$.$Execute(function () {
        //    if (!checkElement || (!checkElement.clientWidth && !checkElement.clientHeight))
        //        $JssorDebug$.$Fail("Unknown window size, no known technique.");
        //});

        result.x = checkElement.clientWidth;
        result.y = checkElement.clientHeight;
        //}

        return result;
    };

    //self.$ImageFormatSupported = function (ext) {
    //    var ext = ext ? ext : "";
    //    return !!supportedImageFormats[ext.toLowerCase()];
    //};

    //self.$MakeCenteredNode = function (elmt) {
    //    elmt = $JssorUtils$.$GetElement(elmt);
    //    var div = self.$MakeNeutralElement("div");
    //    var html = [];

    //    // technique for vertically centering (in IE!!!) from:
    //    // http://www.jakpsatweb.cz/css/css-vertical-center-solution.html
    //    // with explicit neutralizing of styles added by me.
    //    html.push('<div style="display:table; height:100%; width:100%;');
    //    html.push('border:none; margin:0px; padding:0px;'); // neutralizing
    //    html.push('#position:relative; overflow:hidden; text-align:left;">');
    //    // the text-align:left guards against incorrect centering in IE
    //    html.push('<div style="#position:absolute; #top:50%; width:100%; ');
    //    html.push('border:none; margin:0px; padding:0px;'); // neutralizing
    //    html.push('display:table-cell; vertical-align:middle;">');
    //    html.push('<div style="#position:relative; #top:-50%; width:100%; ');
    //    html.push('border:none; margin:0px; padding:0px;'); // neutralizing
    //    html.push('text-align:center;"></div></div></div>');

    //    div.innerHTML = html.join('');
    //    div = div.firstChild;

    //    // now add the elmt as a child to the inner-most div
    //    var innerDiv = div;
    //    var innerDivs = div.getElementsByTagName("div");
    //    while (innerDivs.length > 0) {
    //        innerDiv = innerDivs[0];
    //        innerDivs = innerDiv.getElementsByTagName("div");
    //    }

    //    innerDiv.appendChild(elmt);

    //    return div;
    //};

    //self.$MakeNeutralElement = function (tagName) {
    //    var elmt = self.$CreateElement(tagName);
    //    var style = elmt.style;

    //    // TODO reset neutral elmt's style in a better way
    //    style.background = "transparent none";
    //    style.border = "none";
    //    style.margin = "0px";
    //    style.padding = "0px";
    //    style.position = "static";

    //    return elmt;
    //};

    //self.$MakeTransparentImage = function (src) {
    //    var img = self.$MakeNeutralElement("img");
    //    var elmt = null;

    //    if (IsBrowserIE() && browserRuntimeVersion < 7) {
    //        elmt = self.$MakeNeutralElement("span");
    //        elmt.style.display = "inline-block";

    //        // to size span correctly, load image and get natural size,
    //        // but don't override any user-set CSS values
    //        img.onload = function () {
    //            elmt.style.width = elmt.style.width || img.width + "px";
    //            elmt.style.height = elmt.style.height || img.height + "px";

    //            img.onload = null;
    //            img = null;     // to prevent memory leaks in IE
    //        };

    //        img.src = src;
    //        elmt.style.filter =
    //                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
    //                src + "', sizingMethod='scale')";
    //    } else {
    //        elmt = img;
    //        elmt.src = src;
    //    }

    //    return elmt;
    //};

    //self.$MakeAjaxRequest = function (url, callback) {
    //    var async = typeof (callback) == "function";
    //    var req = null;

    //    if (async) {
    //        var actual = callback;
    //        var callback = function () {
    //            Delay($JssorUtils$.$CreateCallback(null, actual, req), 1);
    //        };
    //    }

    //    if (window.ActiveXObject) {
    //        for (var i = 0; i < arrActiveX.length; i++) {
    //            try {
    //                req = new ActiveXObject(arrActiveX[i]);
    //                break;
    //            } catch (e) {
    //                continue;
    //            }
    //        }
    //    } else if (window.XMLHttpRequest) {
    //        req = new XMLHttpRequest();
    //    }

    //    if (!req) {
    //        $JssorDebug$.$Fail("Browser doesn't support XMLHttpRequest.");
    //    }

    //    if (async) {
    //        req.onreadystatechange = function () {
    //            if (req.readyState == 4) {
    //                // prevent memory leaks by breaking circular reference now
    //                req.onreadystatechange = new Function();
    //                callback();
    //            }
    //        };
    //    }

    //    try {
    //        req.open("GET", url, async);
    //        req.send(null);
    //    } catch (e) {
    //        $JssorDebug$.$Log(e.name + " while making AJAX request: " + e.message);

    //        req.onreadystatechange = null;
    //        req = null;

    //        if (async) {
    //            callback();
    //        }
    //    }

    //    return async ? null : req;
    //};

    //self.$ParseXml = function (string) {
    //    var xmlDoc = null;

    //    if (window.ActiveXObject) {
    //        try {
    //            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //            xmlDoc.async = false;
    //            xmlDoc.loadXML(string);
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (ActiveX): " + e.message);
    //        }
    //    } else if (window.DOMParser) {
    //        try {
    //            var parser = new DOMParser();
    //            xmlDoc = parser.parseFromString(string, "text/xml");
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (DOMParser): " + e.message);
    //        }
    //    } else {
    //        $JssorDebug$.$Fail("Browser doesn't support XML DOM.");
    //    }

    //    return xmlDoc;
    //};

    //self.$GetUrlParameter = function (key) {
    //    var value = urlParams[key];
    //    return value ? value : null;
    //};

    self.$GetStyleOpacity = function (elmt) {
        if (IsBrowserIE() && browserEngineVersion < 9) {
            var match = /opacity=([^)]*)/.exec(elmt.style.filter || "");
            return match ? (parseFloat(match[1]) / 100) : 1;
        }
        else
            return parseFloat(elmt.style.opacity || "1");
    };

    self.$SetStyleOpacity = self.$setElementOpacity = function (elmt, opacity, ie9EarlierForce) {

        if (IsBrowserIE() && browserEngineVersion < 9) {
            //var filterName = "filter"; // browserEngineVersion < 8 ? "filter" : "-ms-filter";
            var finalFilter = elmt.style.filter || "";

            // for CSS filter browsers (IE), remove alpha filter if it's unnecessary.
            // update: doing self always since IE9 beta seems to have broken the
            // behavior if we rely on the programmatic filters collection.
            var alphaReg = new RegExp(/[\s]*alpha\([^\)]*\)/g);

            // important: note the lazy star! self protects against
            // multiple filters; we don't want to delete the other ones.
            // update: also trimming extra whitespace around filter.

            var ieOpacity = Math.round(100 * opacity);
            var alphaFilter = "";
            if (ieOpacity < 100 || ie9EarlierForce) {
                alphaFilter = "alpha(opacity=" + ieOpacity + ") ";
                //elmt.style["-ms-filter"] = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + ieOpacity + ") ";
            }

            var newFilterValue = BuildNewCss(finalFilter, [alphaReg], alphaFilter);

            SetStyleFilterIE(elmt, newFilterValue);
        }

        //if (!IsBrowserIE() || browserEngineVersion >= 9) 
        else {
            elmt.style.opacity = opacity == 1 ? "" : Math.round(opacity * 100) / 100;
        }
    };

    function SetStyleTransformInternal(elmt, transform) {
        var rotate = transform.$Rotate || 0;
        var scale = transform.$Scale || 1;

        if (IsBrowserIe9Earlier()) {
            var matrix = self.$CreateMatrix(rotate / 180 * Math.PI, scale, scale);
            SetStyleMatrixIE(elmt, (!rotate && scale == 1) ? null : matrix, self.$GetMatrixOffset(matrix, transform.$OriginalWidth, transform.$OriginalHeight));
        }
        else {
            //rotate(15deg) scale(.5) translateZ(0)
            var transformProperty = GetTransformProperty(elmt);
            if (transformProperty) {
                var transformValue = "rotate(" + rotate % 360 + "deg) scale(" + scale + ")";
                if ($JssorUtils$.$IsBrowserChrome() && webkitVersion > 535)
                    transformValue += " perspective(2000px)";

                elmt.style[transformProperty] = transformValue;
            }
        }
    }

    self.$SetStyleTransform = function (elmt, transform) {
        if (IsBrowserBadTransform()) {
            Delay(self.$CreateCallback(null, SetStyleTransformInternal, elmt, transform));
        }
        else {
            SetStyleTransformInternal(elmt, transform);
        }
    };

    self.$SetStyleTransformOrigin = function (elmt, transformOrigin) {
        var transformProperty = GetTransformProperty(elmt);

        if (transformProperty)
            elmt.style[transformProperty + "Origin"] = transformOrigin;
    };

    self.$SetStyleScale = function (elmt, scale) {

        if (IsBrowserIE() && browserEngineVersion < 9 || (browserEngineVersion < 10 && IsBrowserIeQuirks())) {
            elmt.style.zoom = (scale == 1) ? "" : scale;
        }
        else {
            var transformProperty = GetTransformProperty(elmt);

            if (transformProperty) {
                //rotate(15deg) scale(.5)
                var transformValue = "scale(" + scale + ")";

                var oldTransformValue = elmt.style[transformProperty];
                var scaleReg = new RegExp(/[\s]*scale\(.*?\)/g);

                var newTransformValue = BuildNewCss(oldTransformValue, [scaleReg], transformValue);

                elmt.style[transformProperty] = newTransformValue;
            }
        }
    };

    self.$EnableHWA = function (elmt) {
        if (!elmt.style[GetTransformProperty(elmt)] || elmt.style[GetTransformProperty(elmt)] == "none")
            elmt.style[GetTransformProperty(elmt)] = "perspective(2000px)";
    };

    self.$DisableHWA = function (elmt) {
        //if (force || elmt.style[GetTransformProperty(elmt)] == "perspective(2000px)")
        elmt.style[GetTransformProperty(elmt)] = "none";
    };

    self.$GetStyleFloat = function (elmt) {
        return IsBrowserIE() ? elmt.style.styleFloat : elmt.style.cssFloat;
    };

    self.$SetStyleFloat = function (elmt, float) {
        if (IsBrowserIE())
            elmt.style.styleFloat = float;
        else
            elmt.style.cssFloat = float;
    };

    var ie8OffsetWidth = 0;
    var ie8OffsetHeight = 0;
    var ie8WindowResizeCallbackHandlers;
    //var ie8LastVerticalScrollbar;
    //var toggleInfo = "";

    function Ie8WindowResizeFilter(window) {

        var trigger = true;

        var checkElement = (IsBrowserIeQuirks() ? window.document.body : window.document.documentElement);
        if (checkElement) {
            //check vertical bar
            //var hasVerticalBar = checkElement.scrollHeight > checkElement.clientHeight;
            //var verticalBarToggle = hasVerticalBar != ie8LastVerticalScrollbar;
            //ie8LastVerticalScrollbar = hasVerticalBar;

            var widthChange = checkElement.offsetWidth - ie8OffsetWidth;
            var heightChange = checkElement.offsetHeight - ie8OffsetHeight;
            if (widthChange || heightChange) {

                ie8OffsetWidth += widthChange;
                ie8OffsetHeight += heightChange;
            }
            else
                trigger = false;
        }

        trigger && each(ie8WindowResizeCallbackHandlers, function (handler) {
            handler();
        });
    }

    self.$OnWindowResize = function (window, handler) {

        if (IsBrowserIE() && browserEngineVersion < 9) {
            if (!ie8WindowResizeCallbackHandlers) {
                ie8WindowResizeCallbackHandlers = [handler];
                handler = self.$CreateCallback(null, Ie8WindowResizeFilter, window);
            }
            else {
                ie8WindowResizeCallbackHandlers.push(handler);
                return;
            }
        }

        self.$AddEvent(window, "resize", handler);
    };

    self.$AddEvent = function (elmt, eventName, handler, useCapture) {
        elmt = self.$GetElement(elmt);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.addEventListener) {
            if (eventName == "mousewheel") {
                elmt.addEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to add the mousewheel -- not a mistake!
            // self is for opera, since it uses onmousewheel but needs addEventListener.
            elmt.addEventListener(eventName, handler, useCapture);
        }
        else if (elmt.attachEvent) {
            elmt.attachEvent("on" + eventName, handler);
            if (useCapture && elmt.setCapture) {
                elmt.setCapture();
            }
        }

        $JssorDebug$.$Execute(function () {
            if (!elmt.addEventListener && !elmt.attachEvent) {
                $JssorDebug$.$Fail("Unable to attach event handler, no known technique.");
            }
        });

    };

    self.$RemoveEvent = function (elmt, eventName, handler, useCapture) {
        elmt = self.$GetElement(elmt);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.removeEventListener) {
            if (eventName == "mousewheel") {
                elmt.removeEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to remove the mousewheel -- not a mistake!
            // self is for opera, since it uses onmousewheel but needs removeEventListener.
            elmt.removeEventListener(eventName, handler, useCapture);
        }
        else if (elmt.detachEvent) {
            elmt.detachEvent("on" + eventName, handler);
            if (useCapture && elmt.releaseCapture) {
                elmt.releaseCapture();
            }
        }

        $JssorDebug$.$Execute(function () {
            if (!elmt.removeEventListener && !elmt.detachEvent) {
                $JssorDebug$.$Fail("Unable to detach event handler, no known technique.");
            }
        });
    };

    self.$FireEvent = function (elmt, eventName) {
        //var document = elmt.document;

        $JssorDebug$.$Execute(function () {
            if (!document.createEvent && !document.createEventObject) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }

            if (!elmt.dispatchEvent && !elmt.fireEvent) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }
        });

        var evento;

        if (document.createEvent) {
            evento = document.createEvent("HTMLEvents");
            evento.initEvent(eventName, false, false);
            elmt.dispatchEvent(evento);
        }
        else {
            var ieEventName = "on" + eventName;
            evento = document.createEventObject();
            //event.eventType = ieEventName;
            //event.eventName = ieEventName;

            elmt.fireEvent(ieEventName, evento);
        }
    };

    self.$AddEventBrowserMouseUp = function (handler, userCapture) {
        self.$AddEvent((IsBrowserIe9Earlier()) ? document : window, "mouseup", handler, userCapture);
    };

    self.$RemoveEventBrowserMouseUp = function (handler, userCapture) {
        self.$RemoveEvent((IsBrowserIe9Earlier()) ? document : window, "mouseup", handler, userCapture);
    };

    self.$AddEventBrowserMouseDown = function (handler, userCapture) {
        self.$AddEvent((IsBrowserIe9Earlier()) ? document : window, "mousedown", handler, userCapture);
    };

    self.$RemoveEventBrowserMouseDown = function (handler, userCapture) {
        self.$RemoveEvent((IsBrowserIe9Earlier()) ? document : window, "mousedown", handler, userCapture);
    };

    self.$CancelEvent = function (event) {
        event = self.$GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.preventDefault) {
            event.preventDefault();     // W3C for preventing default
        }

        event.cancel = true;            // legacy for preventing default
        event.returnValue = false;      // IE for preventing default
    };

    self.$StopEvent = function (event) {
        event = self.$GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.stopPropagation) {
            event.stopPropagation();    // W3C for stopping propagation
        }

        event.cancelBubble = true;      // IE for stopping propagation
    };

    self.$CreateCallback = function (object, method) {
        // create callback args
        var initialArgs = [];
        for (var i = 2; i < arguments.length; i++) {
            initialArgs.push(arguments[i]);
        }

        // create closure to apply method
        var callback = function () {
            // concatenate new args, but make a copy of initialArgs first
            var args = initialArgs.concat([]);
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }

            return method.apply(object, args);
        };

        $JssorDebug$.$LiveStamp(callback, "callback_" + ($JssorUtils$.$GetNow() & 11111111));

        return callback;
    };

    var _Freeer;
    self.$FreeElement = function (elmt) {
        if (!_Freeer)
            _Freeer = self.$CreateDivElement();

        if (elmt) {
            $JssorUtils$.$AppendChild(_Freeer, elmt);
            $JssorUtils$.$ClearInnerHtml(_Freeer);
        }
    };

    self.$SetInnerText = function (elmt, text) {
        var textNode = document.createTextNode(text);
        self.$ClearInnerHtml(elmt);
        elmt.appendChild(textNode);
    };

    self.$GetInnerText = function (elmt) {
        return elmt.textContent || elmt.innerText;
    };

    self.$GetInnerHtml = function (elmt) {
        return elmt.innerHTML;
    };

    self.$SetInnerHtml = function (elmt, html) {
        elmt.innerHTML = html;
    };

    self.$ClearInnerHtml = function (elmt) {
        elmt.innerHTML = "";
    };

    self.$EncodeHtml = function (text) {
        var div = self.$CreateDivElement();
        self.$SetInnerText(div, text);
        return self.$GetInnerHtml(div);
    };

    self.$DecodeHtml = function (html) {
        var div = self.$CreateDivElement();
        self.$SetInnerHtml(div, html);
        return self.$GetInnerText(div);
    };

    self.$SelectElement = function (elmt) {
        var userSelection;
        if (window.getSelection) {
            //W3C default
            userSelection = window.getSelection();
        }
        var theRange = null;
        if (document.createRange) {
            theRange = document.createRange();
            theRange.selectNode(elmt);
        }
        else {
            theRange = document.body.createTextRange();
            theRange.moveToElementText(elmt);
            theRange.select();
        }
        //set user selection
        if (userSelection)
            userSelection.addRange(theRange);
    };

    self.$DeselectElements = function () {
        if (document.selection) {
            document.selection.empty();
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    };

    self.$GetChildren = function (elmt) {
        var children = [];

        for (var tmpEl = elmt.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
            if (tmpEl.nodeType == 1) {
                children.push(tmpEl);
            }
        }

        return children;
    };

    function FindFirstChildByAttribute(elmt, attrValue, attrName, deep) {
        if (!attrName)
            attrName = "u";

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.getAttribute(attrName) == attrValue)
                    return elmt;

                if (deep) {
                    var childRet = FindFirstChildByAttribute(elmt, attrValue, attrName, deep);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    self.$FindFirstChildByAttribute = FindFirstChildByAttribute;

    function FindChildrenByAttribute(elmt, attrValue, attrName, deep) {
        if (!attrName)
            attrName = "u";

        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.getAttribute(attrName) == attrValue)
                    ret.push(elmt);

                if (deep) {
                    var childRet = FindChildrenByAttribute(elmt, attrValue, attrName, deep);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    self.$FindChildrenByAttribute = FindChildrenByAttribute;

    function FindFirstChildByTag(elmt, tagName, deep) {

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.tagName == tagName)
                    return elmt;

                if (deep) {
                    var childRet = FindFirstChildByTag(elmt, tagName, deep);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    self.$FindFirstChildByTag = FindFirstChildByTag;

    function FindChildrenByTag(elmt, tagName, deep) {
        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (!tagName || elmt.tagName == tagName)
                    ret.push(elmt);

                if (deep) {
                    var childRet = FindChildrenByTag(elmt, tagName, true);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    self.$FindChildrenByTag = FindChildrenByTag;

    self.$GetElementsByTagName = function (elmt, tagName) {
        return elmt.getElementsByTagName(tagName);
    };

    self.$Extend = function (target) {
        for (var i = 1; i < arguments.length; i++) {

            var options = arguments[i];

            // Only deal with non-null/undefined values
            if (options) {
                // Extend the base object
                for (var name in options) {
                    target[name] = options[name];
                }
            }
        }

        // Return the modified object
        return target;
    };

    self.$Unextend = function (target, options) {
        $JssorDebug$.$Assert(options);

        var unextended = {};

        // Extend the base object
        for (var name in target) {
            if (target[name] != options[name]) {
                unextended[name] = target[name];
            }
        }

        // Return the modified object
        return unextended;
    };

    self.$IsUndefined = function (obj) {
        return type(obj) == "undefined";
    };

    self.$IsFunction = function (obj) {
        return type(obj) == "function";
    };

    self.$IsArray = Array.isArray || function (obj) {
        return type(obj) == "array";
    };

    self.$IsString = function (obj) {
        return type(obj) == "string";
    };

    self.$IsNumeric = function (obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj);
    };

    self.$IsWindow = function (obj) {
        return obj != null && obj == obj.window;
    };

    self.$Type = type;

    // args is for internal usage only
    self.$Each = each;

    self.$IsPlainObject = isPlainObject;

    self.$CreateDivElement = function (doc) {
        return self.$CreateElement("DIV", doc);
    };

    self.$CreateSpanElement = function (doc) {
        return self.$CreateElement("SPAN", doc);
    };

    self.$CreateElement = function (tagName, doc) {
        doc = doc || document;
        return doc.createElement(tagName);
    };

    self.$EmptyFunction = function () { };

    self.$GetAttribute = function (elmt, name) {
        return elmt.getAttribute(name);
    };

    self.$SetAttribute = function (elmt, name, value) {
        elmt.setAttribute(name, value);
    };

    self.$GetClassName = function (elmt) {
        return elmt.className;
    };

    self.$SetClassName = function (elmt, className) {
        elmt.className = className ? className : "";
    };

    self.$GetStyleCursor = function (elmt) {
        return elmt.style.cursor;
    };

    self.$SetStyleCursor = function (elmt, cursor) {
        elmt.style.cursor = cursor;
    };

    self.$GetStyleDisplay = function (elmt) {
        return elmt.style.display;
    };

    self.$SetStyleDisplay = function (elmt, display) {
        elmt.style.display = display || "";
    };

    self.$GetStyleOverflow = function (elmt) {
        return elmt.style.overflow;
    };

    self.$SetStyleOverflow = function (elmt, overflow) {
        elmt.style.overflow = overflow;
    };

    self.$GetStyleOverflowX = function (elmt) {
        return elmt.style.overflowX;
    };

    self.$SetStyleOverflowX = function (elmt, overflow) {
        elmt.style.overflowX = overflow;
    };

    self.$GetStyleOverflowY = function (elmt) {
        return elmt.style.overflowY;
    };

    self.$SetStyleOverflowY = function (elmt, overflow) {
        elmt.style.overflowY = overflow;
    };

    self.$GetParentNode = function (elmt) {
        return elmt.parentNode;
    };

    self.$HideElement = function (elmt) {
        self.$SetStyleDisplay(elmt, "none");
    };

    self.$HideElements = function (elmts) {
        for (var i = 0; i < elmts.length; i++) {
            self.$HideElement(elmts[i]);
        }
    };

    self.$ShowElement = function (elmt, show) {
        self.$SetStyleDisplay(elmt, show == false ? "none" : "");
    };

    self.$ShowElements = function (elmts) {
        for (var i = 0; i < elmts.length; i++) {
            self.$ShowElement(elmts[i]);
        }
    };

    self.$GetStylePosition = function (elmt) {
        return elmt.style.position;
    };

    self.$SetStylePosition = function (elmt, position) {
        elmt.style.position = position;
    };

    self.$GetStyleTop = function (elmt) {
        return parseInt(elmt.style.top, 10);
    };

    self.$SetStyleTop = function (elmt, top) {
        elmt.style.top = top + "px";
    };

    self.$GetStyleRight = function (elmt) {
        return parseInt(elmt.style.right, 10);
    };

    self.$SetStyleRight = function (elmt, right) {
        elmt.style.right = right + "px";
    };

    self.$GetStyleBottom = function (elmt) {
        return parseInt(elmt.style.bottom, 10);
    };

    self.$SetStyleBottom = function (elmt, bottom) {
        elmt.style.bottom = bottom + "px";
    };

    self.$GetStyleLeft = function (elmt) {
        return parseInt(elmt.style.left, 10);
    };

    self.$SetStyleLeft = function (elmt, left) {
        elmt.style.left = left + "px";
    };

    self.$GetStyleWidth = function (elmt) {
        return parseInt(elmt.style.width, 10);
    };

    self.$SetStyleWidth = function (elmt, width) {
        elmt.style.width = Math.max(width, 0) + "px";
    };

    self.$GetStyleHeight = function (elmt) {
        return parseInt(elmt.style.height, 10);
    };

    self.$SetStyleHeight = function (elmt, height) {
        elmt.style.height = Math.max(height, 0) + "px";
    };

    self.$GetStyleCssText = function (elmt) {
        return elmt.style.cssText;
    };

    self.$SetStyleCssText = function (elmt, cssText) {
        elmt.style.cssText = cssText;
    };

    self.$RemoveAttribute = function (elmt, attrbuteName) {
        elmt.removeAttribute(attrbuteName);
    };

    self.$GetBorderWidth = function (elmt) {
        return parseInt(elmt.style.borderWidth, 10);
    };

    self.$SetBorderWdith = function (elmt, width) {
        elmt.style.width = width + "px";
    };

    self.$GetStyleMarginLeft = function (elmt) {
        return parseInt(elmt.style.marginLeft, 10) || 0;
    };

    self.$SetStyleMarginLeft = function (elmt, marginLeft) {
        elmt.style.marginLeft = marginLeft + "px";
    };

    self.$GetStyleMarginTop = function (elmt) {
        return parseInt(elmt.style.marginTop, 10) || 0;
    };

    self.$SetStyleMarginTop = function (elmt, marginTop) {
        elmt.style.marginTop = marginTop + "px";
    };

    self.$GetStyleMarginBottom = function (elmt) {
        return parseInt(elmt.style.marginBottom, 10) || 0;
    };

    self.$SetStyleMarginBottom = function (elmt, marginBottom) {
        elmt.style.marginBottom = marginBottom + "px";
    };

    self.$GetStyleMarginRight = function (elmt) {
        return parseInt(elmt.style.marginRight, 10) || 0;
    };

    self.$SetStyleMarginRight = function (elmt, marginRight) {
        elmt.style.marginRight = marginRight + "px";
    };

    self.$GetStyleBorder = function (elmt) {
        return elmt.style.border;
    };

    self.$SetStyleBorder = function (elmt, border) {
        elmt.style.border = border;
    };

    self.$GetStyleBorderWidth = function (elmt) {
        return parseInt(elmt.style.borderWidth);
    };

    self.$SetStyleBorderWidth = function (elmt, borderWidth) {
        elmt.style.borderWidth = borderWidth + "px";
    };

    self.$GetStyleBorderStyle = function (elmt) {
        return elmt.style.borderStyle;
    };

    self.$SetStyleBorderStyle = function (elmt, borderStyle) {
        elmt.style.borderStyle = borderStyle;
    };

    self.$GetStyleBorderColor = function (elmt) {
        return elmt.style.borderColor;
    };

    self.$SetStyleBorderColor = function (elmt, borderColor) {
        elmt.style.borderColor = borderColor;
    };

    self.$GetStyleVibility = function (elmt) {
        return elmt.style.vibility;
    };

    self.$SetStyleVisibility = function (elmt, visibility) {
        elmt.style.visibility = visibility;
    };

    self.$GetStyleZIndex = function (elmt) {
        return parseInt(elmt.style.zIndex) || 0;
    };

    self.$SetStyleZIndex = function (elmt, zIndex) {
        elmt.style.zIndex = Math.ceil(zIndex);
    };

    self.$GetStyleBackgroundColor = function (elmt) {
        return elmt.style.backgroundColor;
    };

    self.$SetStyleBackgroundColor = function (elmt, backgroundColor) {
        elmt.style.backgroundColor = backgroundColor;
    };

    self.$GetStyleColor = function (elmt) {
        return elmt.style.color;
    };

    self.$SetStyleColor = function (elmt, color) {
        elmt.style.color = color;
    };

    self.$GetStyleBackgroundImage = function (elmt) {
        return elmt.style.backgroundImage;
    };

    self.$SetStyleBackgroundImage = function (elmt, backgroundImage) {
        elmt.style.backgroundImage = backgroundImage;
    };

    self.$CanClearClip = function () {
        //return !IsBrowserIE() || browserEngineVersion > 9 || (browserRuntimeVersion > 7 && !IsBrowserIeQuirks());
        return IsBrowserIE() && browserRuntimeVersion < 10;
    };

    self.$SetStyleClip = function (elmt, clip) {
        if (clip) {
            elmt.style.clip = "rect(" + Math.round(clip.$Top) + "px " + Math.round(clip.$Right) + "px " + Math.round(clip.$Bottom) + "px " + Math.round(clip.$Left) + "px)";
        }
        else {
            var cssText = self.$GetStyleCssText(elmt);
            var clipRegs = [
                new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),
                new RegExp(/[\s]*cliptop: .*?[;]?/i),
                new RegExp(/[\s]*clipright: .*?[;]?/i),
                new RegExp(/[\s]*clipbottom: .*?[;]?/i),
                new RegExp(/[\s]*clipleft: .*?[;]?/i)
            ];

            var newCssText = BuildNewCss(cssText, clipRegs, "");

            $JssorUtils$.$SetStyleCssText(elmt, newCssText);
        }
    };

    self.$GetStyleZoom = function (elmt) {
        return elmt.style.zoom;
    };

    self.$SetStyleZoom = function (elmt, zoom) {
        return elmt.style.zoom = zoom;
    };

    self.$SetStyleClear = function (elmt, clear) {
        elmt.style.clear = clear;
    };

    self.$GetNow = function () {
        return new Date().getTime();
    };

    self.$AppendChild = function (elmt, child) {
        elmt.appendChild(child);
    };

    self.$AppendChildren = function (elmt, children) {
        each(children, function (child) {
            self.$AppendChild(elmt, child);
        });
    };

    self.$InsertBefore = function (elmt, child, refObject) {
        elmt.insertBefore(child, refObject);
    };

    self.$InsertAdjacentHtml = function (elmt, where, text) {
        elmt.insertAdjacentHTML(where, text);
    };

    self.$RemoveChild = function (elmt, child) {
        elmt.removeChild(child);
    };

    self.$RemoveChildren = function (elmt, children) {
        each(children, function (child) {
            self.$RemoveChild(elmt, child);
        });
    };

    self.$ClearChildren = function (elmt) {
        self.$RemoveChildren(elmt, self.$GetChildren(elmt));
    };

    self.$ParseInt = function (str, radix) {
        return parseInt(str, radix || 10);
    };

    self.$ParseFloat = function (str) {
        return parseFloat(str);
    };

    self.$IsChild = function (elmtA, elmtB) {
        var body = document.body;
        while (elmtB && elmtA != elmtB && body != elmtB) {
            try {
                elmtB = elmtB.parentNode;
            } catch (e) {
                // Firefox sometimes fires events for XUL elements, which throws
                // a "permission denied" error. so this is not a child.
                return false;
            }
        }
        return elmtA == elmtB;
    };

    self.$ToLowerCase = function (value) {
        if (value)
            value = value.toLowerCase();

        return value;
    };

    self.$CloneNode = function (elmt, deep) {
        return elmt.cloneNode(deep);
    };

    function LoadImageCallback(callback, image, abort) {
        //$JssorDebug$.$Execute(function () {
        //    Delay(self.$CreateCallback(null, function () {
        //        callback && callback(image, abort);
        //    }), 10000);
        //});

        image.onload = null;
        image.abort = null;

        if (callback)
            callback(image, abort);
    }

    self.$LoadImage = function (src, callback) {
        if (self.$IsBrowserOpera() && browserRuntimeVersion < 11.6 || !src) {
            LoadImageCallback(callback, null);
        }
        else {
            var image = new Image();
            image.onload = self.$CreateCallback(null, LoadImageCallback, callback, image);
            image.onabort = self.$CreateCallback(null, LoadImageCallback, callback, image, true);
            image.src = src;
        }
    };

    self.$LoadImages = function (imageElmts, mainImageElmt, callback) {

        var _ImageLoading = imageElmts.length + 1;

        function LoadImageCompleteEventHandler(image, abort) {
            _ImageLoading--;
            if (mainImageElmt && image && image.src == mainImageElmt.src)
                mainImageElmt = image;
            !_ImageLoading && callback && callback(mainImageElmt);
        }

        $JssorUtils$.$Each(imageElmts, function (imageElmt) {
            $JssorUtils$.$LoadImage(imageElmt.src, LoadImageCompleteEventHandler);
        });

        LoadImageCompleteEventHandler();
    };

    self.$BuildElement = function (template, tagName, replacer, createCopy) {
        if (createCopy)
            template = $JssorUtils$.$CloneNode(template, true);

        var templateHolders = $JssorUtils$.$GetElementsByTagName(template, tagName);
        for (var j = templateHolders.length - 1; j > -1; j--) {
            var templateHolder = templateHolders[j];
            var replaceItem = $JssorUtils$.$CloneNode(replacer, true);
            $JssorUtils$.$SetClassName(replaceItem, $JssorUtils$.$GetClassName(templateHolder));
            $JssorUtils$.$SetStyleCssText(replaceItem, $JssorUtils$.$GetStyleCssText(templateHolder));

            var thumbnailPlaceHolderParent = $JssorUtils$.$GetParentNode(templateHolder);
            $JssorUtils$.$InsertBefore(thumbnailPlaceHolderParent, replaceItem, templateHolder);
            $JssorUtils$.$RemoveChild(thumbnailPlaceHolderParent, templateHolder);
        }

        return template;
    };

    var _MouseDownButtons;
    var _MouseOverButtons = [];
    function JssorButtonEx(elmt) {
        var _Self = this;

        var _OriginClassName;

        var _IsMouseDown;   //class name 'dn'
        var _IsActive;      //class name 'av'

        function Highlight() {
            var className = _OriginClassName;

            if (_IsMouseDown) {
                className += 'dn';
            }
            else if (_IsActive) {
                className += "av";
            }

            $JssorUtils$.$SetClassName(elmt, className);
        }

        function OnMouseDown(event) {
            _MouseDownButtons.push(_Self);

            _IsMouseDown = true;

            Highlight();
        }

        _Self.$MouseUp = function () {
            ///	<summary>
            ///		Internal member function, do not use it.
            ///	</summary>
            ///	<private />

            _IsMouseDown = false;

            Highlight();
        };

        _Self.$Activate = function (activate) {
            _IsActive = activate;

            Highlight();
        };

        //JssorButtonEx Constructor
        {
            elmt = self.$GetElement(elmt);

            if (!_MouseDownButtons) {
                self.$AddEventBrowserMouseUp(function () {
                    var oldMouseDownButtons = _MouseDownButtons;
                    _MouseDownButtons = [];

                    each(oldMouseDownButtons, function (button) {
                        button.$MouseUp();
                    });
                });

                _MouseDownButtons = [];
            }

            _OriginClassName = self.$GetClassName(elmt);

            $JssorUtils$.$AddEvent(elmt, "mousedown", OnMouseDown);
        }
    }

    self.$Buttonize = function (elmt) {
        return new JssorButtonEx(elmt);
    };

    var StyleGetter = {
        $Opacity: self.$GetStyleOpacity,
        $Top: self.$GetStyleTop,
        $Left: self.$GetStyleLeft,
        $Width: self.$GetStyleWidth,
        $Height: self.$GetStyleHeight,
        $Position: self.$GetStylePosition,
        $Display: self.$GetStyleDisplay,
        $ZIndex: self.$GetStyleZIndex
    };

    //For Compression Only
    var _StyleSetterReserved = {
        $Opacity: self.$SetStyleOpacity,
        $Top: self.$SetStyleTop,
        $Left: self.$SetStyleLeft,
        $Width: self.$SetStyleWidth,
        $Height: self.$SetStyleHeight,
        $Display: self.$SetStyleDisplay,
        $Clip: self.$SetStyleClip,
        $MarginLeft: self.$SetStyleMarginLeft,
        $MarginTop: self.$SetStyleMarginTop,
        $Transform: self.$SetStyleTransform,
        $Position: self.$SetStylePosition,
        $ZIndex: self.$SetStyleZIndex
    };

    function GetStyleSetter() {
        return _StyleSetterReserved;
    }

    function GetStyleSetterEx() {
        GetStyleSetter();

        _StyleSetterReserved.$Transform = _StyleSetterReserved.$Transform;

        return _StyleSetterReserved;
    }

    self.$GetStyleSetter = GetStyleSetter;

    self.$GetStyleSetterEx = GetStyleSetterEx;

    self.$GetStyles = function (elmt, originStyles) {
        GetStyleSetter();

        var styles = {};

        each(originStyles, function (value, key) {
            if (StyleGetter[key]) {
                styles[key] = StyleGetter[key](elmt);
            }
        });

        return styles;
    };

    self.$SetStyles = function (elmt, styles) {
        var styleSetter = GetStyleSetter();

        each(styles, function (value, key) {
            styleSetter[key] && styleSetter[key](elmt, value);
        });
    };

    self.$SetStylesEx = function (elmt, styles) {
        GetStyleSetterEx();

        self.$SetStyles(elmt, styles);
    };

    $JssorMatrix$ = new function () {
        var _This = this;

        function Multiply(ma, mb) {
            var acs = ma[0].length;
            var rows = ma.length;
            var cols = mb[0].length;

            var matrix = [];

            for (var r = 0; r < rows; r++) {
                var row = matrix[r] = [];
                for (var c = 0; c < cols; c++) {
                    var unitValue = 0;

                    for (var ac = 0; ac < acs; ac++) {
                        unitValue += ma[r][ac] * mb[ac][c];
                    }

                    row[c] = unitValue;
                }
            }

            return matrix;
        }

        _This.$ScaleX = function (matrix, sx) {
            return _This.$ScaleXY(matrix, sx, 0);
        };

        _This.$ScaleY = function (matrix, sy) {
            return _This.$ScaleXY(matrix, 0, sy);
        };

        _This.$ScaleXY = function (matrix, sx, sy) {
            return Multiply(matrix, [[sx, 0], [0, sy]]);
        };

        _This.$TransformPoint = function (matrix, p) {
            var pMatrix = Multiply(matrix, [[p.x], [p.y]]);

            return new $JssorPoint$(pMatrix[0][0], pMatrix[1][0]);
        };
    };

    self.$CreateMatrix = function (alpha, scaleX, scaleY) {
        var cos = Math.cos(alpha);
        var sin = Math.sin(alpha);
        //var r11 = cos;
        //var r21 = sin;
        //var r12 = -sin;
        //var r22 = cos;

        //var m11 = cos * scaleX;
        //var m12 = -sin * scaleY;
        //var m21 = sin * scaleX;
        //var m22 = cos * scaleY;

        return [[cos * scaleX, -sin * scaleY], [sin * scaleX, cos * scaleY]];
    };

    self.$GetMatrixOffset = function (matrix, width, height) {
        var p1 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(-width / 2, -height / 2));
        var p2 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(width / 2, -height / 2));
        var p3 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(width / 2, height / 2));
        var p4 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(-width / 2, height / 2));

        return new $JssorPoint$(Math.min(p1.x, p2.x, p3.x, p4.x) + width / 2, Math.min(p1.y, p2.y, p3.y, p4.y) + height / 2);
    };
};

$JssorAnimator$ = function (delay, duration, options, elmt, fromStyles, toStyles) {
    delay = delay || 0;

    var _This = this;
    var _AutoPlay;
    var _Hiden;
    var _CombineMode;
    var _PlayToPosition;
    var _PlayDirection;
    var _NoStop;
    var _TimeStampLastFrame = 0;

    var _SubEasings;
    var _SubRounds;
    var _SubDurings;
    var _Callback;

    var _Position_Current = 0;
    var _Position_Display = 0;
    var _Hooked;

    var _Position_InnerBegin = delay;
    var _Position_InnerEnd = delay + duration;
    var _Position_OuterBegin;
    var _Position_OuterEnd;
    var _LoopLength;

    var _NestedAnimators = [];
    var _StyleSetter;

    function GetPositionRange(position, begin, end) {
        var range = 0;

        if (position < begin)
            range = -1;

        else if (position > end)
            range = 1;

        return range;
    }

    function GetInnerPositionRange(position) {
        return GetPositionRange(position, _Position_InnerBegin, _Position_InnerEnd);
    }

    function GetOuterPositionRange(position) {
        return GetPositionRange(position, _Position_OuterBegin, _Position_OuterEnd);
    }

    function Shift(offset) {
        _Position_OuterBegin += offset;
        _Position_OuterEnd += offset;
        _Position_InnerBegin += offset;
        _Position_InnerEnd += offset;

        _Position_Current += offset;
        _Position_Display += offset;

        $JssorUtils$.$Each(_NestedAnimators, function (animator) {
            animator, animator.$Shift(offset);
        });
    }

    function Locate(position, relative) {
        var offset = position - _Position_OuterBegin + delay * relative;

        Shift(offset);

        //$JssorDebug$.$Execute(function () {
        //    _This.$Position_InnerBegin = _Position_InnerBegin;
        //    _This.$Position_InnerEnd = _Position_InnerEnd;
        //    _This.$Position_OuterBegin = _Position_OuterBegin;
        //    _This.$Position_OuterEnd = _Position_OuterEnd;
        //});

        return _Position_OuterEnd;
    }

    function GoToPosition(positionOuter, force) {
        var trimedPositionOuter = positionOuter;

        if (_LoopLength && (trimedPositionOuter >= _Position_OuterEnd || trimedPositionOuter <= _Position_OuterBegin)) {
            trimedPositionOuter = ((trimedPositionOuter - _Position_OuterBegin) % _LoopLength + _LoopLength) % _LoopLength + _Position_OuterBegin;
        }

        if (!_Hooked || _NoStop || force || _Position_Current != trimedPositionOuter) {

            var positionToDisplay = Math.min(trimedPositionOuter, _Position_OuterEnd);
            positionToDisplay = Math.max(positionToDisplay, _Position_OuterBegin);

            if (!_Hooked || _NoStop || force || positionToDisplay != _Position_Display) {
                if (toStyles) {
                    var currentStyles = toStyles;

                    if (fromStyles) {
                        var interPosition = (positionToDisplay - _Position_InnerBegin) / (duration || 1);
                        if (options.$Optimize && $JssorUtils$.$IsBrowserChrome() && duration)
                            interPosition = Math.round(interPosition * duration / 16) / duration * 16;
                        if (options.$Reverse)
                            interPosition = 1 - interPosition;

                        currentStyles = {};

                        for (var key in toStyles) {
                            var round = _SubRounds[key] || 1;
                            var during = _SubDurings[key] || [0, 1];
                            var propertyInterPosition = (interPosition - during[0]) / during[1];
                            propertyInterPosition = Math.min(Math.max(propertyInterPosition, 0), 1);
                            propertyInterPosition = propertyInterPosition * round;
                            var floorPosition = Math.floor(propertyInterPosition);
                            if (propertyInterPosition != floorPosition)
                                propertyInterPosition -= floorPosition;

                            var easing = _SubEasings[key] || _SubEasings.$Default;
                            var easingValue = easing(propertyInterPosition);
                            var currentPropertyValue;
                            var value = fromStyles[key];
                            var toValue = toStyles[key];

                            if ($JssorUtils$.$IsNumeric(toValue)) {
                                currentPropertyValue = value + (toValue - value) * easingValue;
                            }
                            else {
                                currentPropertyValue = $JssorUtils$.$Extend({ $Offset: {} }, fromStyles[key]);

                                $JssorUtils$.$Each(toValue.$Offset, function (rectX, n) {
                                    var offsetValue = rectX * easingValue;
                                    currentPropertyValue.$Offset[n] = offsetValue;
                                    currentPropertyValue[n] += offsetValue;
                                });
                            }
                            currentStyles[key] = currentPropertyValue;
                        }
                    }

                    if (fromStyles.$Zoom) {
                        currentStyles.$Transform = { $Rotate: currentStyles.$Rotate || 0, $Scale: currentStyles.$Zoom, $OriginalWidth: options.$OriginalWidth, $OriginalHeight: options.$OriginalHeight };
                    }

                    if (toStyles.$Clip && options.$Move) {
                        var styleFrameNClipOffset = currentStyles.$Clip.$Offset;

                        var offsetY = (styleFrameNClipOffset.$Top || 0) + (styleFrameNClipOffset.$Bottom || 0);
                        var offsetX = (styleFrameNClipOffset.$Left || 0) + (styleFrameNClipOffset.$Right || 0);

                        currentStyles.$Left = (currentStyles.$Left || 0) + offsetX;
                        currentStyles.$Top = (currentStyles.$Top || 0) + offsetY;
                        currentStyles.$Clip.$Left -= offsetX;
                        currentStyles.$Clip.$Right -= offsetX;
                        currentStyles.$Clip.$Top -= offsetY;
                        currentStyles.$Clip.$Bottom -= offsetY;
                    }

                    if (currentStyles.$Clip && $JssorUtils$.$CanClearClip() && !currentStyles.$Clip.$Top && !currentStyles.$Clip.$Left && (currentStyles.$Clip.$Right == options.$OriginalWidth) && (currentStyles.$Clip.$Bottom == options.$OriginalHeight))
                        currentStyles.$Clip = null;

                    $JssorUtils$.$Each(currentStyles, function (value, key) {
                        _StyleSetter[key] && _StyleSetter[key](elmt, value);
                    });
                }

                _This.$OnInnerOffsetChange(_Position_Display - _Position_InnerBegin, positionToDisplay - _Position_InnerBegin);
            }

            _Position_Display = positionToDisplay;

            $JssorUtils$.$Each(_NestedAnimators, function (animator, i) {
                var nestedAnimator = positionOuter < _Position_Current ? _NestedAnimators[_NestedAnimators.length - i - 1] : animator;
                nestedAnimator.$GoToPosition(positionOuter, force);
            });

            var positionOld = _Position_Current;
            var positionNew = positionOuter;

            _Position_Current = trimedPositionOuter;
            _Hooked = true;

            _This.$OnPositionChange(positionOld, positionNew);
        }
    }

    function Join(animator, combineMode) {
        ///	<summary>
        ///		Combine another animator as nested animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        ///	<param name="combineMode" type="int">
        ///		0: parallel - place the animator parallel to this animator.
        ///		1: chain - chain the animator at the _Position_InnerEnd of this animator.
        ///	</param>
        $JssorDebug$.$Execute(function () {
            if (combineMode !== 0 && combineMode !== 1)
                $JssorDebug$.$Fail("Argument out of range, the value of 'combineMode' should be either 0 or 1.");
        });

        if (combineMode)
            animator.$Locate(_Position_OuterEnd, 1);

        _Position_OuterEnd = Math.max(_Position_OuterEnd, animator.$GetPosition_OuterEnd());
        _NestedAnimators.push(animator);
    }

    function PlayFrame() {
        if (_AutoPlay) {
            var now = $JssorUtils$.$GetNow();
            var timeOffset = Math.min(now - _TimeStampLastFrame, $JssorUtils$.$IsBrowserOpera() ? 80 : 20);
            var timePosition = _Position_Current + timeOffset * _PlayDirection;
            _TimeStampLastFrame = now;

            if (timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection)
                timePosition = _PlayToPosition;

            GoToPosition(timePosition);

            if (!_NoStop && timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection) {
                Stop(_Callback);
            }
            else {
                $JssorUtils$.$Delay(PlayFrame, options.$Interval);
            }
        }
    }

    function PlayToPosition(toPosition, callback, noStop) {
        if (!_AutoPlay) {
            _AutoPlay = true;
            _NoStop = noStop
            _Callback = callback;
            toPosition = Math.max(toPosition, _Position_OuterBegin);
            toPosition = Math.min(toPosition, _Position_OuterEnd);
            _PlayToPosition = toPosition;
            _PlayDirection = _PlayToPosition < _Position_Current ? -1 : 1;
            _This.$OnStart();
            _TimeStampLastFrame = $JssorUtils$.$GetNow();
            PlayFrame();
        }
    }

    function Stop(callback) {
        if (_AutoPlay) {
            _NoStop = _AutoPlay = _Callback = false;
            _This.$OnStop();

            if (callback)
                callback();
        }
    }

    _This.$Play = function (positionLength, callback, noStop) {
        PlayToPosition(positionLength ? _Position_Current + positionLength : _Position_OuterEnd, callback, noStop);
    };

    _This.$PlayToPosition = function (position, callback, noStop) {
        PlayToPosition(position, callback, noStop);
    };

    _This.$PlayToBegin = function (callback, noStop) {
        PlayToPosition(_Position_OuterBegin, callback, noStop);
    };

    _This.$PlayToEnd = function (callback, noStop) {
        PlayToPosition(_Position_OuterEnd, callback, noStop);
    };

    _This.$Stop = function () {
        Stop();
    };

    _This.$Continue = function (toPosition) {
        PlayToPosition(toPosition);
    };

    _This.$GetPosition = function () {
        return _Position_Current;
    };

    _This.$GetPlayToPosition = function () {
        return _PlayToPosition;
    };

    _This.$GetPosition_Display = function () {
        return _Position_Display;
    };

    _This.$GoToPosition = GoToPosition;

    _This.$GoToBegin = function () {
        GoToPosition(_Position_OuterBegin, true);
    };

    _This.$GoToEnd = function () {
        GoToPosition(_Position_OuterEnd, true);
    };

    _This.$Move = function (offset) {
        GoToPosition(_Position_Current + offset);
    };

    _This.$CombineMode = function () {
        return _CombineMode;
    };

    _This.$GetDuration = function () {
        return duration;
    };

    _This.$IsPlaying = function () {
        return _AutoPlay;
    };

    _This.$IsOnTheWay = function () {
        return _Position_Current > _Position_InnerBegin && _Position_Current <= _Position_InnerEnd;
    };

    _This.$SetLoopLength = function (length) {
        _LoopLength = length;
    };

    _This.$Locate = Locate;

    _This.$Shift = Shift;

    _This.$Join = Join;

    _This.$Combine = function (animator) {
        ///	<summary>
        ///		Combine another animator parallel to this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 0);
    };

    _This.$Chain = function (animator) {
        ///	<summary>
        ///		Chain another animator at the _Position_InnerEnd of this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 1);
    };

    _This.$GetPosition_InnerBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerBegin;
    };

    _This.$GetPosition_InnerEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerEnd;
    };

    _This.$GetPosition_OuterBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterBegin;
    };

    _This.$GetPosition_OuterEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterEnd;
    };

    _This.$OnPositionChange = $JssorUtils$.$EmptyFunction;
    _This.$OnStart = $JssorUtils$.$EmptyFunction;
    _This.$OnStop = $JssorUtils$.$EmptyFunction;
    _This.$OnInnerOffsetChange = $JssorUtils$.$EmptyFunction;
    _This.$Version = $JssorUtils$.$GetNow();

    //Constructor`  1
    {
        options = $JssorUtils$.$Extend({
            $Interval: 15
        }, options);

        //Sodo statement, for development time intellisence only
        $JssorDebug$.$Execute(function () {
            options = $JssorUtils$.$Extend({
                $LoopLength: undefined,
                $Setter: undefined,
                $Easing: undefined
            }, options);
        });

        _LoopLength = options.$LoopLength;

        _StyleSetter = $JssorUtils$.$Extend({}, $JssorUtils$.$GetStyleSetter(), options.$Setter);

        _Position_OuterBegin = _Position_InnerBegin = delay;
        _Position_OuterEnd = _Position_InnerEnd = delay + duration;

        var _SubRounds = options.$Round || {};
        var _SubDurings = options.$During || {};
        _SubEasings = $JssorUtils$.$Extend({ $Default: $JssorUtils$.$IsFunction(options.$Easing) && options.$Easing || $JssorEasing$.$EaseSwing }, options.$Easing);
    }
};

function $JssorPlayerClass$() {

    var _SelfPlayer = this;
    var _PlayerControllers = [];

    function PlayerController(playerElement) {
        var _SelfPlayerController = this;
        var _PlayerInstance;
        var _PlayerInstantces = [];

        function OnPlayerInstanceDataAvailable(event) {
            var srcElement = $JssorUtils$.$GetEventSrcElement(event);
            _PlayerInstance = srcElement.pInstance;

            $JssorUtils$.$RemoveEvent(srcElement, "dataavailable", OnPlayerInstanceDataAvailable);
            $JssorUtils$.$Each(_PlayerInstantces, function (playerInstance) {
                if (playerInstance != _PlayerInstance) {
                    playerInstance.$Remove();
                }
            });

            playerElement.pTagName = _PlayerInstance.tagName;
            _PlayerInstantces = null;
        }

        function HandlePlayerInstance(playerInstanceElement) {
            var playerHandler;

            if (!playerInstanceElement.pInstance) {
                var playerHandlerAttribute = $JssorUtils$.$GetAttribute(playerInstanceElement, "pHandler");

                if ($JssorPlayer$[playerHandlerAttribute]) {
                    $JssorUtils$.$AddEvent(playerInstanceElement, "dataavailable", OnPlayerInstanceDataAvailable);
                    playerHandler = new $JssorPlayer$[playerHandlerAttribute](playerElement, playerInstanceElement);
                    _PlayerInstantces.push(playerHandler);

                    $JssorDebug$.$Execute(function () {
                        if ($JssorUtils$.$Type(playerHandler.$Remove) != "function") {
                            $JssorDebug$.$Fail("'pRemove' interface not implemented for player handler '" + playerHandlerAttribute + "'.");
                        }
                    });
                }
            }

            return playerHandler;
        }

        _SelfPlayerController.$InitPlayerController = function () {
            if (!playerElement.pInstance && !HandlePlayerInstance(playerElement)) {

                var playerInstanceElements = $JssorUtils$.$GetChildren(playerElement);

                $JssorUtils$.$Each(playerInstanceElements, function (playerInstanceElement) {
                    HandlePlayerInstance(playerInstanceElement);
                });
            }
        };
    }

    _SelfPlayer.$EVT_SWITCH = 21;

    _SelfPlayer.$FetchPlayers = function (elmt) {
        elmt = elmt || document.body;

        var playerElements = $JssorUtils$.$FindChildrenByAttribute(elmt, "player", null, true);

        $JssorUtils$.$Each(playerElements, function (playerElement) {
            if (!_PlayerControllers[playerElement.pId]) {
                playerElement.pId = _PlayerControllers.length;
                _PlayerControllers.push(new PlayerController(playerElement));
            }
            var playerController = _PlayerControllers[playerElement.pId];
            playerController.$InitPlayerController();
        });
    };
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/prostroy/js/jssor/jssor.slider.min.js?159757454059439";s:6:"source";s:55:"/bitrix/templates/prostroy/js/jssor/jssor.slider.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
ï»¿(function(g,f,b,d,c,e,z){/*! Jssor */
$Jssor$=g.$Jssor$=g.$Jssor$||{};new(function(){this.$DebugMode=c;this.$Log=function(c,d){var a=g.console||{},b=this.$DebugMode;if(b&&a.log)a.log(c);else b&&d&&alert(c)};this.$Error=function(b,d){var c=g.console||{},a=this.$DebugMode;if(a&&c.error)c.error(b);else a&&alert(b);if(a)throw d||new Error(b);};this.$Fail=function(a){throw new Error(a);};this.$Assert=function(b,c){var a=this.$DebugMode;if(a)if(!b)throw new Error("Assert failed "+c||"");};this.$Trace=function(c){var a=g.console||{},b=this.$DebugMode;b&&a.log&&a.log(c)};this.$Execute=function(b){var a=this.$DebugMode;a&&b()};this.$LiveStamp=function(b,c){var a=f.createElement("DIV");a.setAttribute("id",c);b.$Live=a}});var m=function(){var b=this,a={};b.$On=b.addEventListener=function(b,c){if(typeof c!="function")return;if(!a[b])a[b]=[];a[b].push(c)};b.$Off=b.removeEventListener=function(e,d){var b=a[e];if(typeof d!="function")return;else if(!b)return;for(var c=0;c<b.length;c++)if(d==b[c]){b.splice(c,1);return}};b.$ClearEventListeners=function(b){if(a[b])delete a[b]};b.$TriggerEvent=function(e){var c=a[e],d=[];if(!c)return;for(var b=1;b<arguments.length;b++)d.push(arguments[b]);for(var b=0;b<c.length;b++)try{c[b].apply(g,d)}catch(f){}}},h;(function(){h=function(a,b){this.x=typeof a=="number"?a:0;this.y=typeof b=="number"?b:0};var a=h.prototype;a.$Plus=function(a){return new h(this.x+a.x,this.y+a.y)};a.$Minus=function(a){return new h(this.x-a.x,this.y-a.y)};a.$Times=function(a){return new h(this.x*a,this.y*a)};a.$Divide=function(a){return new h(this.x/a,this.y/a)};a.$Negate=function(){return new h(-this.x,-this.y)};a.$DistanceTo=function(a){return b.sqrt(b.pow(this.x-a.x,2)+b.pow(this.y-a.y,2))};a.$Apply=function(a){return new h(a(this.x),a(this.y))};a.$Equals=function(a){return a instanceof h&&this.x===a.x&&this.y===a.y};a.$ToString=function(){return"("+this.x+","+this.y+")"}})();var l=g.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-l.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?l.$EaseInBounce(a*2)*.5:l.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},i=g.$JssorDirection$={$TO_LEFT:1,$TO_RIGHT:2,$TO_TOP:4,$TO_BOTTOM:8,$HORIZONTAL:3,$VERTICAL:12,$LEFTRIGHT:3,$TOPBOTOM:12,$TOPLEFT:5,$TOPRIGHT:6,$BOTTOMLEFT:9,$BOTTOMRIGHT:10,$AROUND:15,$GetDirectionHorizontal:function(a){return a&3},$GetDirectionVertical:function(a){return a&12},$ChessHorizontal:function(a){return(~a&3)+(a&12)},$ChessVertical:function(a){return(~a&12)+(a&3)},$IsToLeft:function(a){return(a&3)==1},$IsToRight:function(a){return(a&3)==2},$IsToTop:function(a){return(a&12)==4},$IsToBottom:function(a){return(a&12)==8},$IsHorizontal:function(a){return(a&3)>0},$IsVertical:function(a){return(a&12)>0}},q={$BACKSPACE:8,$COMMA:188,$DELETE:46,$DOWN:40,$END:35,$ENTER:13,$ESCAPE:27,$HOME:36,$LEFT:37,$NUMPAD_ADD:107,$NUMPAD_DECIMAL:110,$NUMPAD_DIVIDE:111,$NUMPAD_ENTER:108,$NUMPAD_MULTIPLY:106,$NUMPAD_SUBTRACT:109,$PAGE_DOWN:34,$PAGE_UP:33,$PERIOD:190,$RIGHT:39,$SPACE:32,$TAB:9,$UP:38},o,n={$UNKNOWN:0,$IE:1,$FIREFOX:2,$SAFARI:3,$CHROME:4,$OPERA:5},y=1,u=2,w=3,v=4,x=5,j,a=g.$JssorUtils$=new function(){var i=this,m=n.$UNKNOWN,j=0,q=0,P=0,t=0,cb=navigator.appName,k=navigator.userAgent;function D(){if(!m)if(cb=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var d=k.indexOf("MSIE");m=n.$IE;q=parseFloat(k.substring(d+5,k.indexOf(";",d)));/*@cc_on P=@_jscript_version@*/;j=f.documentMode||q}else if(cb=="Netscape"&&!!g.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){m=n.$FIREFOX;j=parseFloat(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");m=h>=0?n.$CHROME:n.$SAFARI;j=parseFloat(k.substring(i+1,a))}if(b>=0)t=parseFloat(k.substring(b+12))}else{var e=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(e){m=n.$OPERA;j=parseFloat(e[2])}}}function l(){D();return m==y}function G(){return l()&&(j<6||f.compatMode=="BackCompat")}function V(){D();return m==u}function M(){D();return m==w}function hb(){D();return m==v}function ib(){D();return m==x}function R(){return M()&&t>534&&t<535}function eb(){return M()&&t<535}function s(){return l()&&j<9}var B;function r(a){if(!B){p(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(!i.$IsUndefined(a.style[b])){B=b;return c}});B=B||"transform"}return B}function gb(a,b){return b&&a!=f.body?f.body:a.offsetParent}function ab(a){return Object.prototype.toString.call(a)}var J;function p(a,c){if(ab(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(c(a[b],b,a))break}else for(var d in a)if(c(a[d],d,a))break}function jb(){if(!J){J={};p(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){J["[object "+a+"]"]=a.toLowerCase()})}return J}function A(a){return a==d?String(a):jb()[ab(a)]||"object"}function kb(a){if(!a||A(a)!=="object"||a.nodeType||i.$IsWindow(a))return e;var b=Object.prototype.hasOwnProperty;try{if(a.constructor&&!b.call(a,"constructor")&&!b.call(a.constructor.prototype,"isPrototypeOf"))return e}catch(d){return e}var c;for(c in a);return c===z||b.call(a,c)}function bb(b,a){setTimeout(b,a||0)}function I(b,d,c){var a=!b||b=="inherit"?"":b;p(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function W(b,a){if(j<9)b.style.filter=a}function fb(b,a,c){if(P<9){var e=b.style.filter,g=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),f=a?"progid:DXImageTransform.Microsoft.Matrix(M11="+a[0][0]+", M12="+a[0][1]+", M21="+a[1][0]+", M22="+a[1][1]+", SizingMethod='auto expand')":"",d=I(e,[g],f);W(b,d);i.$SetStyleMarginTop(b,c.y);i.$SetStyleMarginLeft(b,c.x)}}i.$IsBrowserIE=l;i.$IsBrowserIeQuirks=G;i.$IsBrowserFireFox=V;i.$IsBrowserSafari=M;i.$IsBrowserChrome=hb;i.$IsBrowserOpera=ib;i.$IsBrowserBadTransform=R;i.$IsBrowserSafeHWA=eb;i.$IsBrowserIe9Earlier=s;i.$GetBrowserVersion=function(){return j};i.$GetBrowserEngineVersion=function(){return q||j};i.$GetWebKitVersion=function(){return t};i.$Delay=bb;i.$GetElement=function(a){if(i.$IsString(a))a=f.getElementById(a);return a};i.$GetElementPosition=function(a){a=i.$GetElement(a);var b=new h;while(a){b.x+=a.offsetLeft;b.y+=a.offsetTop;var c=i.$GetElementStyle(a).position=="fixed";if(c)b=b.$Plus(i.$GetPageScroll(g));a=gb(a,c)}return b};i.$GetElementSize=function(a){a=i.$GetElement(a);return new h(a.clientWidth,a.clientHeight)};i.$GetElementStyle=function(a){a=i.$GetElement(a);return a.currentStyle?a.currentStyle:g.getComputedStyle?g.getComputedStyle(a,""):void 0};i.$GetEvent=function(a){return a?a:g.event};i.$GetEventDstElement=function(a){a=i.$GetEvent(a);return a.relatedTarget||a.toElement};i.$GetMousePosition=function(a){a=i.$GetEvent(a);var b=new h;if(a.type=="DOMMouseScroll"&&V()&&j<3){b.x=a.screenX;b.y=a.screenY}else if(typeof a.pageX=="number"){b.x=a.pageX;b.y=a.pageY}else if(typeof a.clientX=="number"){b.x=a.clientX+f.body.scrollLeft+f.documentElement.scrollLeft;b.y=a.clientY+f.body.scrollTop+f.documentElement.scrollTop}return b};i.$GetMouseScroll=function(a){a=i.$GetEvent(a);var c=0;if(typeof a.wheelDelta=="number")c=a.wheelDelta;else if(typeof a.detail=="number")c=a.detail*-1;return c?c/b.abs(c):0};i.$GetPageScroll=function(b){var a=new h,c=b.document.documentElement||{},d=b.document.body||{};if(typeof b.pageXOffset=="number"){a.x=b.pageXOffset;a.y=b.pageYOffset}else if(d.scrollLeft||d.scrollTop){a.x=d.scrollLeft;a.y=d.scrollTop}else if(c.scrollLeft||c.scrollTop){a.x=c.scrollLeft;a.y=c.scrollTop}return a};i.$GetWindowSize=function(c){var a=new h,b=G()?c.document.body:c.document.documentElement;a.x=b.clientWidth;a.y=b.clientHeight;return a};i.$GetStyleOpacity=function(b){if(l()&&q<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?parseFloat(a[1])/100:1}else return parseFloat(b.style.opacity||"1")};i.$SetStyleOpacity=i.$setElementOpacity=function(c,a,f){if(l()&&q<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=I(h,[i],d);W(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100};function O(g,c){var f=c.$Rotate||0,e=c.$Scale||1;if(s()){var k=i.$CreateMatrix(f/180*b.PI,e,e);fb(g,!f&&e==1?d:k,i.$GetMatrixOffset(k,c.$OriginalWidth,c.$OriginalHeight))}else{var h=r(g);if(h){var j="rotate("+f%360+"deg) scale("+e+")";if(a.$IsBrowserChrome()&&t>535)j+=" perspective(2000px)";g.style[h]=j}}}i.$SetStyleTransform=function(b,a){if(R())bb(i.$CreateCallback(d,O,b,a));else O(b,a)};i.$SetStyleTransformOrigin=function(b,c){var a=r(b);if(a)b.style[a+"Origin"]=c};i.$SetStyleScale=function(a,c){if(l()&&q<9||q<10&&G())a.style.zoom=c==1?"":c;else{var b=r(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=I(e,[g],f);a.style[b]=d}}};i.$EnableHWA=function(a){if(!a.style[r(a)]||a.style[r(a)]=="none")a.style[r(a)]="perspective(2000px)"};i.$DisableHWA=function(a){a.style[r(a)]="none"};i.$GetStyleFloat=function(a){return l()?a.style.styleFloat:a.style.cssFloat};i.$SetStyleFloat=function(b,a){if(l())b.style.styleFloat=a;else b.style.cssFloat=a};var Y=0,X=0,E;function db(g){var f=c,a=G()?g.document.body:g.document.documentElement;if(a){var d=a.offsetWidth-Y,b=a.offsetHeight-X;if(d||b){Y+=d;X+=b}else f=e}f&&p(E,function(a){a()})}i.$OnWindowResize=function(b,a){if(l()&&q<9)if(!E){E=[a];a=i.$CreateCallback(d,db,b)}else{E.push(a);return}i.$AddEvent(b,"resize",a)};i.$AddEvent=function(a,c,d,b){a=i.$GetElement(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.$RemoveEvent=function(a,c,d,b){a=i.$GetElement(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.$FireEvent=function(c,b){var a;if(f.createEvent){a=f.createEvent("HTMLEvents");a.initEvent(b,e,e);c.dispatchEvent(a)}else{var d="on"+b;a=f.createEventObject();c.fireEvent(d,a)}};i.$AddEventBrowserMouseUp=function(b,a){i.$AddEvent(s()?f:g,"mouseup",b,a)};i.$RemoveEventBrowserMouseUp=function(b,a){i.$RemoveEvent(s()?f:g,"mouseup",b,a)};i.$AddEventBrowserMouseDown=function(b,a){i.$AddEvent(s()?f:g,"mousedown",b,a)};i.$RemoveEventBrowserMouseDown=function(b,a){i.$RemoveEvent(s()?f:g,"mousedown",b,a)};i.$CancelEvent=function(a){a=i.$GetEvent(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=e};i.$StopEvent=function(a){a=i.$GetEvent(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=c};i.$CreateCallback=function(e,d){for(var b=[],a=2;a<arguments.length;a++)b.push(arguments[a]);var c=function(){for(var c=b.concat([]),a=0;a<arguments.length;a++)c.push(arguments[a]);return d.apply(e,c)};return c};var K;i.$FreeElement=function(b){if(!K)K=i.$CreateDivElement();if(b){a.$AppendChild(K,b);a.$ClearInnerHtml(K)}};i.$SetInnerText=function(a,c){var b=f.createTextNode(c);i.$ClearInnerHtml(a);a.appendChild(b)};i.$GetInnerText=function(a){return a.textContent||a.innerText};i.$GetInnerHtml=function(a){return a.innerHTML};i.$SetInnerHtml=function(a,b){a.innerHTML=b};i.$ClearInnerHtml=function(a){a.innerHTML=""};i.$EncodeHtml=function(b){var a=i.$CreateDivElement();i.$SetInnerText(a,b);return i.$GetInnerHtml(a)};i.$DecodeHtml=function(b){var a=i.$CreateDivElement();i.$SetInnerHtml(a,b);return i.$GetInnerText(a)};i.$SelectElement=function(c){var b;if(g.getSelection)b=g.getSelection();var a=d;if(f.createRange){a=f.createRange();a.selectNode(c)}else{a=f.body.createTextRange();a.moveToElementText(c);a.select()}b&&b.addRange(a)};i.$DeselectElements=function(){if(f.selection)f.selection.empty();else g.getSelection&&g.getSelection().removeAllRanges()};i.$GetChildren=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function N(a,c,b,f){if(!b)b="u";for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){if(a.getAttribute(b)==c)return a;if(f){var e=N(a,c,b,f);if(e)return e}}}i.$FindFirstChildByAttribute=N;function S(a,c,e){for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(e){var b=S(a,c,e);if(b)return b}}}i.$FindFirstChildByTag=S;function T(a,e,g){var b=[];for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){(!e||a.tagName==e)&&b.push(a);if(g){var f=T(a,e,c);if(f.length)b=b.concat(f)}}return b}i.$FindChildrenByTag=T;i.$GetElementsByTagName=function(b,a){return b.getElementsByTagName(a)};i.$Extend=function(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c};i.$Unextend=function(b,d){var c={};for(var a in b)if(b[a]!=d[a])c[a]=b[a];return c};i.$IsUndefined=function(a){return A(a)=="undefined"};i.$IsFunction=function(a){return A(a)=="function"};i.$IsArray=Array.isArray||function(a){return A(a)=="array"};i.$IsString=function(a){return A(a)=="string"};i.$IsNumeric=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};i.$IsWindow=function(a){return a!=d&&a==a.window};i.$Type=A;i.$Each=p;i.$IsPlainObject=kb;i.$CreateDivElement=function(a){return i.$CreateElement("DIV",a)};i.$CreateSpanElement=function(a){return i.$CreateElement("SPAN",a)};i.$CreateElement=function(b,a){a=a||f;return a.createElement(b)};i.$EmptyFunction=function(){};i.$GetAttribute=function(a,b){return a.getAttribute(b)};i.$SetAttribute=function(b,c,a){b.setAttribute(c,a)};i.$GetClassName=function(a){return a.className};i.$SetClassName=function(b,a){b.className=a?a:""};i.$GetStyleCursor=function(a){return a.style.cursor};i.$SetStyleCursor=function(b,a){b.style.cursor=a};i.$GetStyleDisplay=function(a){return a.style.display};i.$SetStyleDisplay=function(b,a){b.style.display=a||""};i.$GetStyleOverflow=function(a){return a.style.overflow};i.$SetStyleOverflow=function(b,a){b.style.overflow=a};i.$GetStyleOverflowX=function(a){return a.style.overflowX};i.$SetStyleOverflowX=function(b,a){b.style.overflowX=a};i.$GetStyleOverflowY=function(a){return a.style.overflowY};i.$SetStyleOverflowY=function(b,a){b.style.overflowY=a};i.$GetParentNode=function(a){return a.parentNode};i.$HideElement=function(a){i.$SetStyleDisplay(a,"none")};i.$HideElements=function(b){for(var a=0;a<b.length;a++)i.$HideElement(b[a])};i.$ShowElement=function(a,b){i.$SetStyleDisplay(a,b==e?"none":"")};i.$ShowElements=function(b){for(var a=0;a<b.length;a++)i.$ShowElement(b[a])};i.$GetStylePosition=function(a){return a.style.position};i.$SetStylePosition=function(b,a){b.style.position=a};i.$GetStyleTop=function(a){return parseInt(a.style.top,10)};i.$SetStyleTop=function(a,b){a.style.top=b+"px"};i.$GetStyleRight=function(a){return parseInt(a.style.right,10)};i.$SetStyleRight=function(b,a){b.style.right=a+"px"};i.$GetStyleBottom=function(a){return parseInt(a.style.bottom,10)};i.$SetStyleBottom=function(b,a){b.style.bottom=a+"px"};i.$GetStyleLeft=function(a){return parseInt(a.style.left,10)};i.$SetStyleLeft=function(a,b){a.style.left=b+"px"};i.$GetStyleWidth=function(a){return parseInt(a.style.width,10)};i.$SetStyleWidth=function(c,a){c.style.width=b.max(a,0)+"px"};i.$GetStyleHeight=function(a){return parseInt(a.style.height,10)};i.$SetStyleHeight=function(c,a){c.style.height=b.max(a,0)+"px"};i.$GetStyleCssText=function(a){return a.style.cssText};i.$SetStyleCssText=function(b,a){b.style.cssText=a};i.$RemoveAttribute=function(b,a){b.removeAttribute(a)};i.$GetBorderWidth=function(a){return parseInt(a.style.borderWidth,10)};i.$SetBorderWdith=function(b,a){b.style.width=a+"px"};i.$GetStyleMarginLeft=function(a){return parseInt(a.style.marginLeft,10)||0};i.$SetStyleMarginLeft=function(b,a){b.style.marginLeft=a+"px"};i.$GetStyleMarginTop=function(a){return parseInt(a.style.marginTop,10)||0};i.$SetStyleMarginTop=function(b,a){b.style.marginTop=a+"px"};i.$GetStyleMarginBottom=function(a){return parseInt(a.style.marginBottom,10)||0};i.$SetStyleMarginBottom=function(b,a){b.style.marginBottom=a+"px"};i.$GetStyleMarginRight=function(a){return parseInt(a.style.marginRight,10)||0};i.$SetStyleMarginRight=function(b,a){b.style.marginRight=a+"px"};i.$GetStyleBorder=function(a){return a.style.border};i.$SetStyleBorder=function(b,a){b.style.border=a};i.$GetStyleBorderWidth=function(a){return parseInt(a.style.borderWidth)};i.$SetStyleBorderWidth=function(b,a){b.style.borderWidth=a+"px"};i.$GetStyleBorderStyle=function(a){return a.style.borderStyle};i.$SetStyleBorderStyle=function(b,a){b.style.borderStyle=a};i.$GetStyleBorderColor=function(a){return a.style.borderColor};i.$SetStyleBorderColor=function(b,a){b.style.borderColor=a};i.$GetStyleVibility=function(a){return a.style.vibility};i.$SetStyleVisibility=function(b,a){b.style.visibility=a};i.$GetStyleZIndex=function(a){return parseInt(a.style.zIndex)||0};i.$SetStyleZIndex=function(c,a){c.style.zIndex=b.ceil(a)};i.$GetStyleBackgroundColor=function(a){return a.style.backgroundColor};i.$SetStyleBackgroundColor=function(b,a){b.style.backgroundColor=a};i.$GetStyleColor=function(a){return a.style.color};i.$SetStyleColor=function(b,a){b.style.color=a};i.$GetStyleBackgroundImage=function(a){return a.style.backgroundImage};i.$SetStyleBackgroundImage=function(b,a){b.style.backgroundImage=a};i.$CanClearClip=function(){return l()&&j<10};i.$SetStyleClip=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=i.$GetStyleCssText(d),f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=I(g,f,"");a.$SetStyleCssText(d,e)}};i.$GetStyleZoom=function(a){return a.style.zoom};i.$SetStyleZoom=function(a,b){return a.style.zoom=b};i.$SetStyleClear=function(b,a){b.style.clear=a};i.$GetNow=function(){return+new Date};i.$AppendChild=function(b,a){b.appendChild(a)};i.$AppendChildren=function(b,a){p(a,function(a){i.$AppendChild(b,a)})};i.$InsertBefore=function(c,b,a){c.insertBefore(b,a)};i.$InsertAdjacentHtml=function(b,a,c){b.insertAdjacentHTML(a,c)};i.$RemoveChild=function(b,a){b.removeChild(a)};i.$RemoveChildren=function(b,a){p(a,function(a){i.$RemoveChild(b,a)})};i.$ClearChildren=function(a){i.$RemoveChildren(a,i.$GetChildren(a))};i.$ParseInt=function(b,a){return parseInt(b,a||10)};i.$ParseFloat=function(a){return parseFloat(a)};i.$IsChild=function(b,a){var c=f.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(d){return e}return b==a};i.$ToLowerCase=function(a){if(a)a=a.toLowerCase();return a};i.$CloneNode=function(b,a){return b.cloneNode(a)};function L(b,a,c){a.onload=d;a.abort=d;b&&b(a,c)}i.$LoadImage=function(e,b){if(i.$IsBrowserOpera()&&j<11.6||!e)L(b,d);else{var a=new Image;a.onload=i.$CreateCallback(d,L,b,a);a.onabort=i.$CreateCallback(d,L,b,a,c);a.src=e}};i.$LoadImages=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}a.$Each(e,function(b){a.$LoadImage(b.src,c)});c()};i.$BuildElement=function(d,k,j,i){if(i)d=a.$CloneNode(d,c);for(var h=a.$GetElementsByTagName(d,k),f=h.length-1;f>-1;f--){var b=h[f],e=a.$CloneNode(j,c);a.$SetClassName(e,a.$GetClassName(b));a.$SetStyleCssText(e,a.$GetStyleCssText(b));var g=a.$GetParentNode(b);a.$InsertBefore(g,e,b);a.$RemoveChild(g,b)}return d};var C;function lb(b){var g=this,h,d,j;function f(){var c=h;if(d)c+="dn";else if(j)c+="av";a.$SetClassName(b,c)}function k(){C.push(g);d=c;f()}g.$MouseUp=function(){d=e;f()};g.$Activate=function(a){j=a;f()};b=i.$GetElement(b);if(!C){i.$AddEventBrowserMouseUp(function(){var a=C;C=[];p(a,function(a){a.$MouseUp()})});C=[]}h=i.$GetClassName(b);a.$AddEvent(b,"mousedown",k)}i.$Buttonize=function(a){return new lb(a)};var Z={$Opacity:i.$GetStyleOpacity,$Top:i.$GetStyleTop,$Left:i.$GetStyleLeft,$Width:i.$GetStyleWidth,$Height:i.$GetStyleHeight,$Position:i.$GetStylePosition,$Display:i.$GetStyleDisplay,$ZIndex:i.$GetStyleZIndex},F={$Opacity:i.$SetStyleOpacity,$Top:i.$SetStyleTop,$Left:i.$SetStyleLeft,$Width:i.$SetStyleWidth,$Height:i.$SetStyleHeight,$Display:i.$SetStyleDisplay,$Clip:i.$SetStyleClip,$MarginLeft:i.$SetStyleMarginLeft,$MarginTop:i.$SetStyleMarginTop,$Transform:i.$SetStyleTransform,$Position:i.$SetStylePosition,$ZIndex:i.$SetStyleZIndex};function H(){return F}function U(){H();F.$Transform=F.$Transform;return F}i.$GetStyleSetter=H;i.$GetStyleSetterEx=U;i.$GetStyles=function(c,b){H();var a={};p(b,function(d,b){if(Z[b])a[b]=Z[b](c)});return a};i.$SetStyles=function(c,b){var a=H();p(b,function(d,b){a[b]&&a[b](c,d)})};i.$SetStylesEx=function(b,a){U();i.$SetStyles(b,a)};o=new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.$ScaleX=function(b,c){return a.$ScaleXY(b,c,0)};a.$ScaleY=function(b,c){return a.$ScaleXY(b,0,c)};a.$ScaleXY=function(a,c,d){return b(a,[[c,0],[0,d]])};a.$TransformPoint=function(d,c){var a=b(d,[[c.x],[c.y]]);return new h(a[0][0],a[1][0])}};i.$CreateMatrix=function(d,a,c){var e=b.cos(d),f=b.sin(d);return[[e*a,-f*c],[f*a,e*c]]};i.$GetMatrixOffset=function(d,c,a){var e=o.$TransformPoint(d,new h(-c/2,-a/2)),f=o.$TransformPoint(d,new h(c/2,-a/2)),g=o.$TransformPoint(d,new h(c/2,a/2)),i=o.$TransformPoint(d,new h(-c/2,a/2));return new h(b.min(e.x,f.x,g.x,i.x)+c/2,b.min(e.y,f.y,g.y,i.y)+a/2)}};j=function(n,m,g,O,z,x){n=n||0;var f=this,r,K,o,p,y,A=0,C,M,L,D,j=0,t=0,E,k=n,s=n+m,i,h,q,u=[],B;function I(b){i+=b;h+=b;k+=b;s+=b;j+=b;t+=b;a.$Each(u,function(a){a,a.$Shift(b)})}function N(a,b){var c=a-i+n*b;I(c);return h}function w(w,G){var n=w;if(q&&(n>=h||n<=i))n=((n-i)%q+q)%q+i;if(!E||y||G||j!=n){var p=b.min(n,h);p=b.max(p,i);if(!E||y||G||p!=t){if(x){var e=x;if(z){var s=(p-k)/(m||1);if(g.$Optimize&&a.$IsBrowserChrome()&&m)s=b.round(s*m/16)/m*16;if(g.$Reverse)s=1-s;e={};for(var o in x){var R=M[o]||1,J=L[o]||[0,1],l=(s-J[0])/J[1];l=b.min(b.max(l,0),1);l=l*R;var H=b.floor(l);if(l!=H)l-=H;var Q=C[o]||C.$Default,I=Q(l),r,K=z[o],F=x[o];if(a.$IsNumeric(F))r=K+(F-K)*I;else{r=a.$Extend({$Offset:{}},z[o]);a.$Each(F.$Offset,function(c,b){var a=c*I;r.$Offset[b]=a;r[b]+=a})}e[o]=r}}if(z.$Zoom)e.$Transform={$Rotate:e.$Rotate||0,$Scale:e.$Zoom,$OriginalWidth:g.$OriginalWidth,$OriginalHeight:g.$OriginalHeight};if(x.$Clip&&g.$Move){var v=e.$Clip.$Offset,D=(v.$Top||0)+(v.$Bottom||0),A=(v.$Left||0)+(v.$Right||0);e.$Left=(e.$Left||0)+A;e.$Top=(e.$Top||0)+D;e.$Clip.$Left-=A;e.$Clip.$Right-=A;e.$Clip.$Top-=D;e.$Clip.$Bottom-=D}if(e.$Clip&&a.$CanClearClip()&&!e.$Clip.$Top&&!e.$Clip.$Left&&e.$Clip.$Right==g.$OriginalWidth&&e.$Clip.$Bottom==g.$OriginalHeight)e.$Clip=d;a.$Each(e,function(b,a){B[a]&&B[a](O,b)})}f.$OnInnerOffsetChange(t-k,p-k)}t=p;a.$Each(u,function(b,c){var a=w<j?u[u.length-c-1]:b;a.$GoToPosition(w,G)});var P=j,N=w;j=n;E=c;f.$OnPositionChange(P,N)}}function F(a,c){c&&a.$Locate(h,1);h=b.max(h,a.$GetPosition_OuterEnd());u.push(a)}function H(){if(r){var d=a.$GetNow(),e=b.min(d-A,a.$IsBrowserOpera()?80:20),c=j+e*p;A=d;if(c*p>=o*p)c=o;w(c);if(!y&&c*p>=o*p)J(D);else a.$Delay(H,g.$Interval)}}function v(d,e,g){if(!r){r=c;y=g;D=e;d=b.max(d,i);d=b.min(d,h);o=d;p=o<j?-1:1;f.$OnStart();A=a.$GetNow();H()}}function J(a){if(r){y=r=D=e;f.$OnStop();a&&a()}}f.$Play=function(a,b,c){v(a?j+a:h,b,c)};f.$PlayToPosition=function(b,a,c){v(b,a,c)};f.$PlayToBegin=function(a,b){v(i,a,b)};f.$PlayToEnd=function(a,b){v(h,a,b)};f.$Stop=function(){J()};f.$Continue=function(a){v(a)};f.$GetPosition=function(){return j};f.$GetPlayToPosition=function(){return o};f.$GetPosition_Display=function(){return t};f.$GoToPosition=w;f.$GoToBegin=function(){w(i,c)};f.$GoToEnd=function(){w(h,c)};f.$Move=function(a){w(j+a)};f.$CombineMode=function(){return K};f.$GetDuration=function(){return m};f.$IsPlaying=function(){return r};f.$IsOnTheWay=function(){return j>k&&j<=s};f.$SetLoopLength=function(a){q=a};f.$Locate=N;f.$Shift=I;f.$Join=F;f.$Combine=function(a){F(a,0)};f.$Chain=function(a){F(a,1)};f.$GetPosition_InnerBegin=function(){return k};f.$GetPosition_InnerEnd=function(){return s};f.$GetPosition_OuterBegin=function(){return i};f.$GetPosition_OuterEnd=function(){return h};f.$OnPositionChange=a.$EmptyFunction;f.$OnStart=a.$EmptyFunction;f.$OnStop=a.$EmptyFunction;f.$OnInnerOffsetChange=a.$EmptyFunction;f.$Version=a.$GetNow();g=a.$Extend({$Interval:15},g);q=g.$LoopLength;B=a.$Extend({},a.$GetStyleSetter(),g.$Setter);i=k=n;h=s=n+m;var M=g.$Round||{},L=g.$During||{};C=a.$Extend({$Default:a.$IsFunction(g.$Easing)&&g.$Easing||l.$EaseSwing},g.$Easing)};var r,k=g.$JssorSlideshowFormations$={};new function(){var u=0,o=1,w=2,v=3,I=1,H=2,J=4,G=8,O=256,P=512,N=1024,M=2048,z=M+I,y=M+H,E=P+I,C=P+H,D=O+J,A=O+G,B=N+J,F=N+G;function S(a){return(a&H)==H}function T(a){return(a&J)==J}function x(b,a,c){c.push(a);b[a]=b[a]||[];b[a].push(c)}k.$FormationStraight=function(f){for(var d=f.$Cols,e=f.$Rows,k=f.$Assembly,l=f.$Count,j=[],a=0,b=0,h=d-1,i=e-1,g=l-1,c,b=0;b<e;b++)for(a=0;a<d;a++){switch(k){case z:c=g-(a*e+(i-b));break;case B:c=g-(b*d+(h-a));break;case E:c=g-(a*e+b);case D:c=g-(b*d+a);break;case y:c=a*e+b;break;case A:c=b*d+(h-a);break;case C:c=a*e+(i-b);break;default:c=b*d+a}x(j,c,[b,a])}return j};k.$FormationSwirl=function(e){var l=e.$Cols,m=e.$Rows,q=e.$Assembly,k=e.$Count,p=[],n=[],i=0,a=0,b=0,f=l-1,g=m-1,h,d,j=0;switch(q){case z:a=f;b=0;d=[w,o,v,u];break;case B:a=0;b=g;d=[u,v,o,w];break;case E:a=f;b=g;d=[v,o,w,u];break;case D:a=f;b=g;d=[o,v,u,w];break;case y:a=0;b=0;d=[w,u,v,o];break;case A:a=f;b=0;d=[o,w,u,v];break;case C:a=0;b=g;d=[v,u,w,o];break;default:a=0;b=0;d=[u,w,o,v]}i=0;while(i<k){h=b+","+a;if(a>=0&&a<l&&b>=0&&b<m&&!n[h]){n[h]=c;x(p,i++,[b,a])}else switch(d[j++%d.length]){case u:a--;break;case w:b--;break;case o:a++;break;case v:b++}switch(d[j%d.length]){case u:a++;break;case w:b++;break;case o:a--;break;case v:b--}}return p};k.$FormationZigZag=function(d){var k=d.$Cols,l=d.$Rows,n=d.$Assembly,j=d.$Count,h=[],i=0,a=0,b=0,e=k-1,f=l-1,m,c,g=0;switch(n){case z:a=e;b=0;c=[w,o,v,o];break;case B:a=0;b=f;c=[u,v,o,v];break;case E:a=e;b=f;c=[v,o,w,o];break;case D:a=e;b=f;c=[o,v,u,v];break;case y:a=0;b=0;c=[w,u,v,u];break;case A:a=e;b=0;c=[o,w,u,w];break;case C:a=0;b=f;c=[v,u,w,u];break;default:a=0;b=0;c=[u,w,o,w]}i=0;while(i<j){m=b+","+a;if(a>=0&&a<k&&b>=0&&b<l&&typeof h[m]=="undefined"){x(h,i++,[b,a]);switch(c[g%c.length]){case u:a++;break;case w:b++;break;case o:a--;break;case v:b--}}else{switch(c[g++%c.length]){case u:a--;break;case w:b--;break;case o:a++;break;case v:b++}switch(c[g++%c.length]){case u:a++;break;case w:b++;break;case o:a--;break;case v:b--}}}return h};k.$FormationStraightStairs=function(h){var l=h.$Cols,m=h.$Rows,e=h.$Assembly,k=h.$Count,i=[],j=0,c=0,d=0,f=l-1,g=m-1,o=k-1;switch(e){case z:case C:case E:case y:var a=0,b=0;break;case A:case B:case D:case F:var a=f,b=0;break;default:e=F;var a=f,b=0}c=a;d=b;while(j<k){if(T(e)||S(e))x(i,o-j++,[d,c]);else x(i,j++,[d,c]);switch(e){case z:case C:c--;d++;break;case E:case y:c++;d--;break;case A:case B:c--;d--;break;case F:case D:default:c++;d++}if(c<0||d<0||c>f||d>g){switch(e){case z:case C:a++;break;case A:case B:case E:case y:b++;break;case F:case D:default:a--}if(a<0||b<0||a>f||b>g){switch(e){case z:case C:a=f;b++;break;case E:case y:b=g;a++;break;case A:case B:b=g;a--;break;case F:case D:default:a=0;b++}if(b>g)b=g;else if(b<0)b=0;else if(a>f)a=f;else if(a<0)a=0}d=b;c=a}}return i};k.$FormationSquare=function(h){var a=h.$Cols||1,c=h.$Rows||1,i=[],d,e,f,g,j;f=a<c?(c-a)/2:0;g=a>c?(a-c)/2:0;j=b.round(b.max(a/2,c/2))+1;for(d=0;d<a;d++)for(e=0;e<c;e++)x(i,j-b.min(d+1+f,e+1+g,a-d+f,c-e+g),[e,d]);return i};k.$FormationRectangle=function(f){var d=f.$Cols||1,e=f.$Rows||1,g=[],a,c,h;h=b.round(b.min(d/2,e/2))+1;for(a=0;a<d;a++)for(c=0;c<e;c++)x(g,h-b.min(a+1,c+1,d-a,e-c),[c,a]);return g};k.$FormationRandom=function(d){for(var e=[],a,c=0;c<d.$Rows;c++)for(a=0;a<d.$Cols;a++)x(e,b.ceil(1e5*b.random())%13,[c,a]);return e};k.$FormationCircle=function(d){for(var e=d.$Cols||1,f=d.$Rows||1,g=[],a,h=e/2-.5,i=f/2-.5,c=0;c<e;c++)for(a=0;a<f;a++)x(g,b.round(b.sqrt(b.pow(c-h,2)+b.pow(a-i,2))),[a,c]);return g};k.$FormationCross=function(d){for(var e=d.$Cols||1,f=d.$Rows||1,g=[],a,h=e/2-.5,i=f/2-.5,c=0;c<e;c++)for(a=0;a<f;a++)x(g,b.round(b.min(b.abs(c-h),b.abs(a-i))),[a,c]);return g};k.$FormationRectangleCross=function(f){for(var g=f.$Cols||1,h=f.$Rows||1,i=[],a,d=g/2-.5,e=h/2-.5,j=b.max(d,e)+1,c=0;c<g;c++)for(a=0;a<h;a++)x(i,b.round(j-b.max(d-b.abs(c-d),e-b.abs(a-e)))-1,[a,c]);return i};function Q(a){var b=a.$Formation(a);return a.$Reverse?b.reverse():b}function K(g,f){var d={$Interval:f,$Duration:1,$Delay:0,$Cols:1,$Rows:1,$Opacity:0,$Zoom:0,$Clip:0,$Move:e,$SlideOut:e,$FlyDirection:0,$Reverse:e,$Formation:k.$FormationRandom,$Assembly:F,$ChessMode:{$Column:0,$Row:0},$Easing:l.$EaseSwing,$Round:{},$Blocks:[],$During:{}};a.$Extend(d,g);d.$Count=d.$Cols*d.$Rows;if(a.$IsFunction(d.$Easing))d.$Easing={$Default:d.$Easing};d.$FramesCount=b.ceil(d.$Duration/d.$Interval);d.$EasingInstance=R(d);d.$GetBlocks=function(b,a){b/=d.$Cols;a/=d.$Rows;var f=b+"x"+a;if(!d.$Blocks[f]){d.$Blocks[f]={$Width:b,$Height:a};for(var c=0;c<d.$Cols;c++)for(var e=0;e<d.$Rows;e++)d.$Blocks[f][e+","+c]={$Top:e*a,$Right:c*b+b,$Bottom:e*a+a,$Left:c*b}}return d.$Blocks[f]};if(d.$Brother){d.$Brother=K(d.$Brother,f);d.$SlideOut=c}return d}function R(d){var c=d.$Easing;if(!c.$Default)c.$Default=l.$EaseSwing;var e=d.$FramesCount,f=c.$Cache;if(!f){var g=a.$Extend({},d.$Easing,d.$Round);f=c.$Cache={};a.$Each(g,function(n,l){var g=c[l]||c.$Default,j=d.$Round[l]||1;if(!a.$IsArray(g.$Cache))g.$Cache=[];var h=g.$Cache[e]=g.$Cache[e]||[];if(!h[j]){h[j]=[0];for(var k=1;k<=e;k++){var i=k/e*j,m=b.floor(i);if(i!=m)i-=m;h[j][k]=g(i)}}f[l]=h})}return f}function L(D,k,f,y,m,l){var B=this,v,w={},p={},o=[],h,g,t,r=f.$ChessMode.$Column||0,s=f.$ChessMode.$Row||0,j=f.$GetBlocks(m,l),q=Q(f),E=q.length-1,u=f.$Duration+f.$Delay*E,z=y+u,n=f.$SlideOut,A;z+=a.$IsBrowserChrome()?260:50;B.$EndTime=z;B.$ShowFrame=function(c){c-=y;var d=c<u;if(d||A){A=d;if(!n)c=u-c;var e=b.ceil(c/f.$Interval);a.$Each(p,function(c,f){var d=b.max(e,c.$Min);d=b.min(d,c.length-1);if(c.$LastFrameIndex!=d){if(!c.$LastFrameIndex&&!n)a.$ShowElement(o[f]);else d==c.$Max&&n&&a.$HideElement(o[f]);c.$LastFrameIndex=d;a.$SetStylesEx(o[f],c[d])}})}};function x(b){a.$DisableHWA(b);var c=a.$GetChildren(b);a.$Each(c,function(a){x(a)})}k=a.$CloneNode(k,c);x(k);if(a.$IsBrowserIe9Earlier()){var F=!k["no-image"],C=a.$FindChildrenByTag(k,d,c);a.$Each(C,function(b){(F||b["jssor-slider"])&&a.$SetStyleOpacity(b,a.$GetStyleOpacity(b),c)})}a.$Each(q,function(d,k){a.$Each(d,function(N){var S=N[0],R=N[1],z=S+","+R,u=e,x=e,A=e;if(r&&R%2){if(i.$IsHorizontal(r))u=!u;if(i.$IsVertical(r))x=!x;if(r&16)A=!A}if(s&&S%2){if(i.$IsHorizontal(s))u=!u;if(i.$IsVertical(s))x=!x;if(s&16)A=!A}f.$Top=f.$Top||f.$Clip&4;f.$Bottom=f.$Bottom||f.$Clip&8;f.$Left=f.$Left||f.$Clip&1;f.$Right=f.$Right||f.$Clip&2;var G=x?f.$Bottom:f.$Top,D=x?f.$Top:f.$Bottom,F=u?f.$Right:f.$Left,E=u?f.$Left:f.$Right;f.$Clip=G||D||F||E;t={};g={$Top:0,$Left:0,$Opacity:1,$Width:m,$Height:l};h=a.$Extend({},g);v=a.$Extend({},j[z]);if(f.$Opacity)g.$Opacity=2-f.$Opacity;if(f.$ZIndex){g.$ZIndex=f.$ZIndex;h.$ZIndex=0}var Q=f.$Cols*f.$Rows>1||f.$Clip;if(f.$Zoom||f.$Rotate){var P=c;if(a.$IsBrowserIE()&&a.$GetBrowserEngineVersion()<9)if(f.$Cols*f.$Rows>1)P=e;else Q=e;if(P){g.$Zoom=f.$Zoom?f.$Zoom-1:1;h.$Zoom=1;if(a.$IsBrowserIe9Earlier()||a.$IsBrowserOpera())g.$Zoom=b.min(g.$Zoom,2);var K=f.$Rotate;if(K==c)K=1;g.$Rotate=K*360*(A?-1:1);h.$Rotate=0}}if(Q){if(f.$Clip){var y=f.$ScaleClip||1,o=v.$Offset={};if(G&&D){o.$Top=j.$Height/2*y;o.$Bottom=-o.$Top}else if(G)o.$Bottom=-j.$Height*y;else if(D)o.$Top=j.$Height*y;if(F&&E){o.$Left=j.$Width/2*y;o.$Right=-o.$Left}else if(F)o.$Right=-j.$Width*y;else if(E)o.$Left=j.$Width*y}t.$Clip=v;h.$Clip=j[z]}if(f.$FlyDirection){var q=f.$FlyDirection;if(!u)q=i.$ChessHorizontal(q);if(!x)q=i.$ChessVertical(q);var M=f.$ScaleHorizontal||1,O=f.$ScaleVertical||1;if(i.$IsToLeft(q))g.$Left+=m*M;else if(i.$IsToRight(q))g.$Left-=m*M;if(i.$IsToTop(q))g.$Top+=l*O;else if(i.$IsToBottom(q))g.$Top-=l*O}a.$Each(g,function(b,c){if(a.$IsNumeric(b))if(b!=h[c])t[c]=b-h[c]});w[z]=n?h:g;var L=b.round(k*f.$Delay/f.$Interval);p[z]=new Array(L);p[z].$Min=L;for(var C=f.$FramesCount,J=0;J<=C;J++){var d={};a.$Each(t,function(g,c){var m=f.$EasingInstance[c]||f.$EasingInstance.$Default,l=m[f.$Round[c]||1],k=f.$During[c]||[0,1],e=(J/C-k[0])/k[1]*C;e=b.round(b.min(C,b.max(e,0)));var j=l[e];if(a.$IsNumeric(g))d[c]=h[c]+g*j;else{var i=d[c]=a.$Extend({},h[c]);i.$Offset=[];a.$Each(g.$Offset,function(c,b){var a=c*j;i.$Offset[b]=a;i[b]+=a})}});if(h.$Zoom)d.$Transform={$Rotate:d.$Rotate||0,$Scale:d.$Zoom,$OriginalWidth:m,$OriginalHeight:l};if(d.$Clip&&f.$Move){var B=d.$Clip.$Offset,I=(B.$Top||0)+(B.$Bottom||0),H=(B.$Left||0)+(B.$Right||0);d.$Left=(d.$Left||0)+H;d.$Top=(d.$Top||0)+I;d.$Clip.$Left-=H;d.$Clip.$Right-=H;d.$Clip.$Top-=I;d.$Clip.$Bottom-=I}d.$ZIndex=d.$ZIndex||1;p[z].push(d)}})});q.reverse();a.$Each(q,function(b){a.$Each(b,function(d){var g=d[0],f=d[1],e=g+","+f,b=k;if(f||g)b=a.$CloneNode(k,c);a.$SetStyles(b,w[e]);a.$SetStyleOverflow(b,"hidden");a.$SetStylePosition(b,"absolute");D.$AddClipElement(b);o[e]=b;a.$ShowElement(b,n)})})}g.$JssorSlideshowRunner$=function(h,l,i,n,p){var e=this,o,f,c,s=0,r=n.$TransitionsOrder,k,g=16;function q(){var a=this,b=0;j.call(a,0,o);a.$OnPositionChange=function(d,a){if(a-b>g){b=a;c&&c.$ShowFrame(a);f&&f.$ShowFrame(a)}};a.$Transition=k}e.$GetTransition=function(f){var c=0,e=n.$Transitions,d=e.length;if(r){if(d>f&&(a.$IsBrowserChrome()||a.$IsBrowserSafari()||a.$IsBrowserFireFox()))d-=d%f;c=s++%d}else c=b.floor(b.random()*d);e[c]&&(e[c].$Index=c);return e[c]};e.$Initialize=function(w,x,n,p,a){k=a;a=K(a,g);var m=p.$Item,j=n.$Item;m["no-image"]=!p.$Image;j["no-image"]=!n.$Image;var q=m,r=j,v=a,d=a.$Brother||K({},g);if(!a.$SlideOut){q=j;r=m}var s=d.$Shift||0;f=new L(h,r,d,b.max(s-d.$Interval,0),l,i);c=new L(h,q,v,b.max(d.$Interval-s,0),l,i);f.$ShowFrame(0);c.$ShowFrame(0);o=b.max(f.$EndTime,c.$EndTime);e.$Index=w};e.$Clear=function(){h.$Clear();f=d;c=d};e.$GetProcessor=function(){var a=d;if(c)a=new q;return a};if(a.$IsBrowserIe9Earlier()||a.$IsBrowserOpera()||p&&a.$GetWebKitVersion<537)g=32;m.call(e);j.call(e,-1e7,1e7)};function n(o,Wb){var k=this;function rc(){var a=this;j.call(a,-1e8,2e8);a.$GetCurrentSlideInfo=function(){var c=a.$GetPosition_Display(),d=b.floor(c),f=v(d),e=c-b.floor(c);return{$Index:f,$VirtualIndex:d,$Position:e}};a.$OnPositionChange=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Lb(e,c);k.$TriggerEvent(n.$EVT_POSITION_CHANGE,v(a),v(d),a,d)}}function qc(){var b=this;j.call(b,0,0,{$LoopLength:t});a.$Each(B,function(a){i.$Loop&&a.$SetLoopLength(t);b.$Chain(a);a.$Shift(rb/Rb)})}function pc(){var a=this,b=Kb.$Elmt;j.call(a,-1,2,{$Easing:l.$EaseLinear,$Setter:{$Position:Qb},$LoopLength:t},b,{$Position:1},{$Position:-1});a.$Wrapper=b}function ec(o,m){var a=this,f,g,h,l,b;j.call(a,-1e8,2e8);a.$OnStart=function(){M=c;Q=d;k.$TriggerEvent(n.$EVT_SWIPE_START,v(x.$GetPosition()),x.$GetPosition())};a.$OnStop=function(){M=e;l=e;var a=x.$GetCurrentSlideInfo();k.$TriggerEvent(n.$EVT_SWIPE_END,v(x.$GetPosition()),x.$GetPosition());!a.$Position&&tc(a.$VirtualIndex,r)};a.$OnPositionChange=function(d,c){var a;if(l)a=b;else{a=g;if(h)a=i.$SlideEasing(c/h)*(g-f)+f}x.$GoToPosition(a)};a.$PlayCarousel=function(b,d,c,e){f=b;g=d;h=c;x.$GoToPosition(b);a.$GoToPosition(0);a.$PlayToPosition(c,e)};a.$StandBy=function(e){l=c;b=e;a.$Play(e,d,c)};a.$SetStandByPosition=function(a){b=a};a.$MoveCarouselTo=function(a){x.$GoToPosition(a)};x=new rc;x.$Combine(o);x.$Combine(m)}function fc(){var c=this,b=Pb();a.$SetStyleZIndex(b,0);c.$Elmt=b;c.$AddClipElement=function(c){a.$AppendChild(b,c);a.$ShowElement(b)};c.$Clear=function(){a.$HideElement(b);a.$ClearInnerHtml(b)}}function oc(p,o){var f=this,s,w,G,x,g,y=[],X,q,bb,F,T,E,l,u,h,hb;j.call(f,-C,C+1,{$SlideItemAnimator:c});function D(a){w&&w.$Revert();s&&s.$Revert();ab(p,a);s=new H.$Class(p,H,1);w=new H.$Class(p,H);w.$GoToBegin();s.$GoToBegin()}function db(){s.$Version<H.$Version&&D()}function M(o,q,m){if(!F){F=c;if(g&&m){var d=m.width,b=m.height,l=d,j=b;if(d&&b&&i.$FillMode){if(i.$FillMode&3){var h=e,p=L/K*b/d;if(i.$FillMode&1)h=p>1;else if(i.$FillMode&2)h=p<1;l=h?d*K/b:L;j=h?K:b*L/d}a.$SetStyleWidth(g,l);a.$SetStyleHeight(g,j);a.$SetStyleTop(g,(K-j)/2);a.$SetStyleLeft(g,(L-l)/2)}a.$SetStylePosition(g,"absolute");k.$TriggerEvent(n.$EVT_LOAD_END,Ub)}}a.$HideElement(q);o&&o(f)}function cb(b,c,d,e){if(e==Q&&r==o&&N)if(!sc){var a=v(b);z.$Initialize(a,o,c,f,d);c.$HideContentForSlideshow();U.$Locate(a,1);U.$GoToPosition(a);A.$PlayCarousel(b,b,0)}}function eb(b){if(b==Q&&r==o){if(!l){var a=d;if(z)if(z.$Index==o)a=z.$GetProcessor();else z.$Clear();db();l=new mc(o,a,f.$GetCaptionSliderIn(),f.$GetCaptionSliderOut());l.$SetPlayer(h)}!l.$IsPlaying()&&l.$Replay()}}function W(e,c){if(e==o){if(e!=c)B[c]&&B[c].$ParkOut();h&&h.$Enable();var j=Q=a.$GetNow();f.$LoadImage(a.$CreateCallback(d,eb,j))}else{var g=b.abs(o-e);(!T||g<=i.$LazyLoading||t-g<=i.$LazyLoading)&&f.$LoadImage()}}function fb(){if(r==o&&l){l.$Stop();h&&h.$Quit();h&&h.$Disable();l.$OpenSlideshowPanel()}}function gb(){r==o&&l&&l.$Stop()}function S(b){if(P)a.$CancelEvent(b);else k.$TriggerEvent(n.$EVT_CLICK,o,b)}function R(){h=u.pInstance;l&&l.$SetPlayer(h)}f.$LoadImage=function(e,b){b=b||x;if(y.length&&!F){a.$ShowElement(b);if(!bb){bb=c;k.$TriggerEvent(n.$EVT_LOAD_START);a.$Each(y,function(b){if(!b.src){b.src=a.$GetAttribute(b,"src2");a.$SetStyleDisplay(b,b["display-origin"])}})}a.$LoadImages(y,g,a.$CreateCallback(d,M,e,b))}else M(e,b)};f.$GoForNextSlide=function(){if(z){var b=z.$GetTransition(t);if(b){var f=Q=a.$GetNow(),c=o+1,e=B[v(c)];return e.$LoadImage(a.$CreateCallback(d,cb,c,e,b,f),x)}}V(r+i.$AutoPlaySteps)};f.$TryActivate=function(){W(o,o)};f.$ParkOut=function(){h&&h.$Quit();h&&h.$Disable();f.$UnhideContentForSlideshow();l&&l.$Abort();l=d;D()};f.$StampSlideItemElements=function(a){a=hb+"_"+a};f.$HideContentForSlideshow=function(){a.$HideElement(p)};f.$UnhideContentForSlideshow=function(){a.$ShowElement(p)};f.$EnablePlayer=function(){h&&h.$Enable()};function ab(b,f,d){d=d||0;if(!E){if(b.tagName=="IMG"){y.push(b);if(!b.src){T=c;b["display-origin"]=a.$GetStyleDisplay(b);a.$HideElement(b)}}a.$IsBrowserIe9Earlier()&&a.$SetStyleZIndex(b,a.$GetStyleZIndex(b)+1);if(a.$GetWebKitVersion()>0)(!I||a.$GetWebKitVersion()<534||!Z)&&a.$EnableHWA(b)}var h=a.$GetChildren(b);a.$Each(h,function(h){var j=a.$GetAttribute(h,"u");if(j=="player"&&!u){u=h;if(u.pInstance)R();else a.$AddEvent(u,"dataavailable",R)}if(j=="caption"){if(!a.$IsBrowserIE()&&!f){var i=a.$CloneNode(h,c);a.$InsertBefore(b,i,h);a.$RemoveChild(b,h);h=i;f=c}}else if(!E&&!d&&!g&&a.$GetAttribute(h,"u")=="image"){g=h;if(g){if(g.tagName=="A"){X=g;a.$SetStyles(X,O);q=a.$CloneNode(g,e);a.$AddEvent(q,"click",S);a.$SetStyles(q,O);a.$SetStyleDisplay(q,"block");a.$SetStyleOpacity(q,0);a.$SetStyleBackgroundColor(q,"#000");g=a.$FindFirstChildByTag(g,"IMG")}g.border=0;a.$SetStyles(g,O)}}ab(h,f,d+1)})}f.$OnInnerOffsetChange=function(c,b){var a=C-b;Qb(G,a)};f.$GetCaptionSliderIn=function(){return s};f.$GetCaptionSliderOut=function(){return w};f.$Index=o;m.call(f);var J=a.$FindFirstChildByAttribute(p,"thumb");if(J){f.$Thumb=a.$CloneNode(J,c);a.$HideElement(J)}a.$ShowElement(p);x=a.$CloneNode(Y,c);a.$SetStyleZIndex(x,1e3);a.$AddEvent(p,"click",S);D(c);E=c;f.$Image=g;f.$Link=q;f.$Item=p;f.$Wrapper=G=p;a.$AppendChild(G,x);k.$On(203,W);k.$On(22,gb);k.$On(24,fb)}function mc(h,q,v,u){var b=this,m=0,x=0,o,g,d,f,l,s,w,t,p=B[h];j.call(b,0,0);function y(){a.$ClearChildren(J);Vb&&l&&p.$Link&&a.$AppendChild(J,p.$Link);a.$ShowElement(J,l||!p.$Image)}function A(){if(s){s=e;k.$TriggerEvent(n.$EVT_ROLLBACK_END,h,d,m,g,d,f);b.$GoToPosition(g)}b.$Replay()}function C(a){t=a;b.$Stop();b.$Replay()}b.$Replay=function(){var a=b.$GetPosition_Display();if(!F&&!M&&!t&&(a!=d||N&&(!Nb||S))&&r==h){if(!a){if(o&&!l){l=c;b.$OpenSlideshowPanel(c);k.$TriggerEvent(n.$EVT_SLIDESHOW_START,h,m,x,o,f)}y()}var e,i=n.$EVT_STATE_CHANGE;if(a==f){d==f&&b.$GoToPosition(g);return p.$GoForNextSlide()}else if(a==d)e=f;else if(a==g)e=d;else if(!a)e=g;else if(a>d){s=c;e=d;i=n.$EVT_ROLLBACK_START}else e=b.$GetPlayToPosition();k.$TriggerEvent(i,h,a,m,g,d,f);b.$PlayToPosition(e,A)}};b.$Abort=function(){z&&z.$Index==h&&z.$Clear();var a=b.$GetPosition_Display();a<f&&k.$TriggerEvent(n.$EVT_STATE_CHANGE,h,-a-1,m,g,d,f)};b.$OpenSlideshowPanel=function(b){q&&a.$SetStyleOverflow(cb,b&&q.$Transition.$Outside?"":"hidden")};b.$OnInnerOffsetChange=function(b,a){if(l&&a>=o){l=e;y();p.$UnhideContentForSlideshow();z.$Clear();k.$TriggerEvent(n.$EVT_SLIDESHOW_END,h,m,x,o,f)}k.$TriggerEvent(n.$EVT_PROGRESS_CHANGE,h,a,m,g,d,f)};b.$SetPlayer=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.$EVT_SWITCH,C)}};q&&b.$Chain(q);o=b.$GetPosition_OuterEnd();b.$GetPosition_OuterEnd();b.$Chain(v);g=v.$GetPosition_OuterEnd();d=g+i.$AutoPlayInterval;u.$Shift(d);b.$Combine(u);f=b.$GetPosition_OuterEnd()}function Qb(c,g){var f=w>0?w:i.$PlayOrientation,d=b.round(vb*g*(f&1)),e=b.round(wb*g*(f>>1&1));if(a.$IsBrowserIE()&&a.$GetBrowserVersion()>=10&&a.$GetBrowserVersion()<11)c.style.msTransform="translate("+d+"px, "+e+"px)";else if(a.$IsBrowserChrome()&&a.$GetBrowserVersion()>=30){c.style.WebkitTransition="transform 0s";c.style.WebkitTransform="translate3d("+d+"px, "+e+"px, 0px) perspective(2000px)"}else{a.$SetStyleLeft(c,d);a.$SetStyleTop(c,e)}}function lc(a){P=0;!G&&ic()&&kc(a)}function kc(b){kb=M;F=c;ub=e;Q=d;a.$AddEvent(f,hb,Sb);a.$GetNow();Db=A.$GetPlayToPosition();A.$Stop();if(!kb)w=0;if(I){var h=b.touches[0];pb=h.clientX;qb=h.clientY}else{var g=a.$GetMousePosition(b);pb=g.x;qb=g.y;a.$CancelEvent(b)}E=0;X=0;bb=0;D=x.$GetPosition();k.$TriggerEvent(n.$EVT_DRAG_START,v(D),D,b)}function Sb(e){if(F&&(!a.$IsBrowserIe9Earlier()||e.button)){var f;if(I){var n=e.touches;if(n&&n.length>0)f=new h(n[0].clientX,n[0].clientY)}else f=a.$GetMousePosition(e);if(f){var l=f.x-pb,m=f.y-qb;if(b.floor(D)!=D)w=i.$PlayOrientation&G;if((l||m)&&!w){if(G==3)if(b.abs(m)>b.abs(l))w=2;else w=1;else w=G;if(I&&w==1&&b.abs(m)-b.abs(l)>3)ub=c}if(w){var d=m,k=wb;if(w==1){d=l;k=vb}if(!i.$Loop){if(d>0){var g=k*r,j=d-g;if(j>0)d=g+b.sqrt(j)*5}if(d<0){var g=k*(t-C-r),j=-d-g;if(j>0)d=-g-b.sqrt(j)*5}}if(E-X<-2)bb=1;else if(E-X>2)bb=0;X=E;E=d;mb=D-E/k/(gb||1);if(E&&w&&!ub){a.$CancelEvent(e);if(!M)A.$StandBy(mb);else A.$SetStandByPosition(mb)}else a.$IsBrowserIe9Earlier()&&a.$CancelEvent(e)}}}else zb(e)}function zb(h){gc();if(F){F=e;a.$GetNow();a.$RemoveEvent(f,hb,Sb);P=E;P&&a.$CancelEvent(h);A.$Stop();var d=x.$GetPosition();k.$TriggerEvent(n.$EVT_DRAG_END,v(d),d,v(D),D,h);var c=b.floor(D);if(b.abs(E)>=i.$MinDragOffsetToSlide){c=b.floor(d);c+=bb}if(!i.$Loop)c=b.min(t-C,b.max(c,0));var g=b.abs(c-d);g=1-b.pow(1-g,5);if(!P&&kb)A.$Continue(Db);else if(d==c){nb.$EnablePlayer();nb.$TryActivate()}else A.$PlayCarousel(d,c,g*Mb)}}function dc(a){B[r];r=v(a);nb=B[r];Lb(a);return r}function tc(a,b){w=0;dc(a);k.$TriggerEvent(n.$EVT_PARK,v(a),b)}function Lb(b,c){a.$Each(R,function(a){a.$SetCurrentIndex(v(b),b,c)})}function ic(){var a=n.$DragRegistry||0;n.$DragRegistry|=i.$DragOrientation;return G=i.$DragOrientation&~a}function gc(){if(G){n.$DragRegistry&=~i.$DragOrientation;G=0}}function Pb(){var b=a.$CreateDivElement();a.$SetStyles(b,O);a.$SetStylePosition(b,"absolute");return b}function v(a){return(a%t+t)%t}function ac(b,a){V(b,i.$SlideDuration,a)}function tb(){a.$Each(R,function(a){a.$Show(a.$Options.$ChanceToShow>S)})}function Yb(b){b=a.$GetEvent(b);var c=b.target?b.target:b.srcElement,d=b.relatedTarget?b.relatedTarget:b.toElement;if(!a.$IsChild(o,c)||a.$IsChild(o,d))return;S=1;tb();B[r].$TryActivate()}function Xb(){S=0;tb()}function Zb(){O={$Width:L,$Height:K,$Top:0,$Left:0};a.$Each(T,function(b){a.$SetStyles(b,O);a.$SetStylePosition(b,"absolute");a.$SetStyleOverflow(b,"hidden");a.$HideElement(b)});a.$SetStyles(Y,O)}function eb(b,a){V(b,a,c)}function V(h,g,l){if(Jb&&(!F||i.$NaviQuitDrag)){M=c;F=e;A.$Stop();if(a.$IsUndefined(g))g=Mb;var f=Ab.$GetPosition_Display(),d=h;if(l){d=f+h;if(h>0)d=b.ceil(d);else d=b.floor(d)}if(!i.$Loop)d=b.max(0,b.min(d,t-C));var k=(d-f)%t;d=f+k;var j=f==d?0:g*b.abs(k);j=b.min(j,g*C*1.5);A.$PlayCarousel(f,d,j)}}k.$PlayTo=V;k.$GoTo=function(a){V(a,0)};k.$Next=function(){eb(1)};k.$Prev=function(){eb(-1)};k.$Pause=function(){N=e};k.$Play=function(){if(!N){N=c;B[r]&&B[r].$TryActivate()}};k.$SetSlideshowTransitions=function(a){i.$SlideshowOptions.$Transitions=a};k.$SetCaptionTransitions=function(b){H.$CaptionTransitions=b;H.$Version=a.$GetNow()};k.$SlidesCount=function(){return T.length};k.$CurrentIndex=function(){return r};k.$IsAutoPlaying=function(){return N};k.$IsDragging=function(){return F};k.$IsSliding=function(){return M};k.$IsMouseOver=function(){return!S};k.$LastDragSucceded=function(){return P};k.$GetOriginalWidth=function(){return a.$GetStyleWidth(u||o)};k.$GetOriginalHeight=function(){return a.$GetStyleHeight(u||o)};k.$GetScaleWidth=function(){return a.$GetStyleWidth(o)};k.$GetScaleHeight=function(){return a.$GetStyleHeight(o)};k.$SetScaleWidth=function(c){if(!u){var b=a.$CloneNode(o,e);a.$RemoveAttribute(b,"id");a.$SetStylePosition(b,"relative");a.$SetStyleTop(b,0);a.$SetStyleLeft(b,0);a.$SetStyleOverflow(b,"visible");u=a.$CloneNode(o,e);a.$RemoveAttribute(u,"id");a.$SetStyleCssText(u,"");a.$SetStylePosition(u,"absolute");a.$SetStyleTop(u,0);a.$SetStyleLeft(u,0);a.$SetStyleWidth(u,a.$GetStyleWidth(o));a.$SetStyleHeight(u,a.$GetStyleHeight(o));a.$SetStyleTransformOrigin(u,"0 0");a.$AppendChild(u,b);var d=a.$GetChildren(o);a.$AppendChild(o,u);a.$AppendChildren(b,d);a.$ShowElement(b);a.$ShowElement(u)}gb=c/a.$GetStyleWidth(u);a.$SetStyleScale(u,gb);a.$SetStyleWidth(o,c);a.$SetStyleHeight(o,gb*a.$GetStyleHeight(u))};k.$GetVirtualIndex=function(a){var d=b.ceil(v(rb/Rb)),c=v(a-r+d);if(c>C){if(a-r>t/2)a-=t;else if(a-r<=-t/2)a+=t}else a=r+c-d;return a};m.call(this);k.$Elmt=o=a.$GetElement(o);var i=a.$Extend({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:e,$Loop:c,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:3,$HwaMode:1,$SlideDuration:500,$SlideEasing:l.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},Wb),ab=i.$SlideshowOptions,H=a.$Extend({$Class:s,$PlayInMode:1,$PlayOutMode:1},i.$CaptionSliderOptions),ob=i.$NavigatorOptions,jb=i.$DirectionNavigatorOptions,W=i.$ThumbnailNavigatorOptions,db=i.$UISearchMode,u,y=a.$FindFirstChildByAttribute(o,"slides",d,db),Y=a.$FindFirstChildByAttribute(o,"loading",d,db)||a.$CreateDivElement(f),Gb=a.$FindFirstChildByAttribute(o,"navigator",d,db),Cb=a.$FindFirstChildByAttribute(o,"thumbnavigator",d,db),cc=a.$GetStyleWidth(y),bc=a.$GetStyleHeight(y);if(!i.$Loop)i.$ParkingPosition=0;if(i.$DisplayPieces>1||i.$ParkingPosition)i.$DragOrientation&=i.$PlayOrientation;var O,T=a.$GetChildren(y),r=-1,nb,t=T.length,L=i.$SlideWidth||cc,K=i.$SlideHeight||bc,Ob=i.$SlideSpacing,vb=L+Ob,wb=K+Ob,Rb=i.$PlayOrientation==1?vb:wb,C=b.min(i.$DisplayPieces,t),cb,w,G,ub,I,R=[],Tb,Eb,Ib,Vb,sc,N,Nb=i.$PauseOnHover,Mb=i.$SlideDuration,lb,Z,rb,Jb=C<t,jc=Jb&&i.$DragOrientation,P,S=1,M,F,Q,pb=0,qb=0,E,X,bb,Ab,x,U,A,Kb=new fc,gb;N=i.$AutoPlay;k.$Options=Wb;Zb();o["jssor-slider"]=c;a.$SetStyleZIndex(y,a.$GetStyleZIndex(y));a.$SetStylePosition(y,"absolute");cb=a.$CloneNode(y);a.$InsertBefore(a.$GetParentNode(y),cb,y);if(ab){Vb=ab.$ShowLink;lb=ab.$Class;Z=C==1&&t>1&&lb&&(!a.$IsBrowserIE()||a.$GetBrowserVersion()>=8)}rb=Z||C>=t?0:i.$ParkingPosition;var sb=y,B=[],z,J,yb="mousedown",hb="mousemove",Bb="mouseup",fb,D,kb,Db,mb;if(g.navigator.msPointerEnabled){yb="MSPointerDown";hb="MSPointerMove";Bb="MSPointerUp";fb="MSPointerCancel";if(i.$DragOrientation){var xb="none";if(i.$DragOrientation==1)xb="pan-y";else if(i.$DragOrientation==2)xb="pan-x";a.$SetAttribute(sb.style,"-ms-touch-action",xb)}}else if("ontouchstart"in g||"createTouch"in f){I=c;yb="touchstart";hb="touchmove";Bb="touchend";fb="touchcancel"}U=new pc;if(Z)z=new lb(Kb,L,K,ab,I);a.$AppendChild(cb,U.$Wrapper);a.$SetStyleOverflow(y,"hidden");J=Pb();a.$SetStyleBackgroundColor(J,"#000");a.$SetStyleOpacity(J,0);a.$InsertBefore(sb,J,sb.firstChild);for(var ib=0;ib<T.length;ib++){var nc=T[ib],Ub=new oc(nc,ib);B.push(Ub)}a.$HideElement(Y);Ab=new qc;A=new ec(Ab,U);if(jc){a.$AddEvent(y,yb,lc);a.$AddEvent(f,Bb,zb);fb&&a.$AddEvent(f,fb,zb)}Nb&=I?2:1;if(Gb&&ob){Tb=new ob.$Class(Gb,ob);R.push(Tb)}if(jb){Eb=new jb.$Class(o,jb,i.$UISearchMode);R.push(Eb)}if(Cb&&W){W.$StartIndex=i.$StartIndex;Ib=new W.$Class(Cb,W);R.push(Ib)}a.$Each(R,function(a){a.$Reset(t,B,Y);a.$On(p.$NAVIGATIONREQUEST,ac)});a.$AddEvent(o,"mouseout",Yb);a.$AddEvent(o,"mouseover",Xb);tb();i.$ArrowKeyNavigation&&a.$AddEvent(f,"keydown",function(a){if(a.keyCode==q.$LEFT)eb(-1);else a.keyCode==q.$RIGHT&&eb(1)});k.$SetScaleWidth(k.$GetOriginalWidth());A.$PlayCarousel(i.$StartIndex,i.$StartIndex,0)}n.$EVT_CLICK=21;n.$EVT_DRAG_START=22;n.$EVT_DRAG_END=23;n.$EVT_SWIPE_START=24;n.$EVT_SWIPE_END=25;n.$EVT_LOAD_START=26;n.$EVT_LOAD_END=27;n.$EVT_POSITION_CHANGE=202;n.$EVT_PARK=203;n.$EVT_SLIDESHOW_START=206;n.$EVT_SLIDESHOW_END=207;n.$EVT_PROGRESS_CHANGE=208;n.$EVT_STATE_CHANGE=209;n.$EVT_ROLLBACK_START=210;n.$EVT_ROLLBACK_END=211;g.$JssorSlider$=r=n};var p={$NAVIGATIONREQUEST:1,$INDEXCHANGE:2,$RESET:3};g.$JssorNavigator$=function(e,B){var g=this;m.call(g);e=a.$GetElement(e);var s,t,r,q,k=0,f,l,j,x,y,i,h,o,n,A=[],z=[];function w(a){a!=-1&&z[a].$Activate(a==k)}function u(a){g.$TriggerEvent(p.$NAVIGATIONREQUEST,a*l)}g.$Elmt=e;g.$GetCurrentIndex=function(){return q};g.$SetCurrentIndex=function(a){if(a!=q){var d=k,c=b.floor(a/l);k=c;q=a;w(d);w(c)}};g.$Show=function(b){a.$ShowElement(e,b)};var v;g.$Reset=function(E){if(!v){s=b.ceil(E/l);k=0;var q=o+x,w=n+y,p=b.ceil(s/j)-1;t=o+q*(!i?p:j-1);r=n+w*(i?p:j-1);a.$SetStyleWidth(e,t);a.$SetStyleHeight(e,r);f.$AutoCenter&1&&a.$SetStyleLeft(e,(a.$GetStyleWidth(a.$GetParentNode(e))-t)/2);f.$AutoCenter&2&&a.$SetStyleTop(e,(a.$GetStyleHeight(a.$GetParentNode(e))-r)/2);for(var g=0;g<s;g++){var D=a.$CreateSpanElement();a.$SetInnerText(D,g+1);var m=a.$BuildElement(h,"NumberTemplate",D,c);a.$SetStylePosition(m,"absolute");var B=g%(p+1);a.$SetStyleLeft(m,!i?q*B:g%j*q);a.$SetStyleTop(m,i?w*B:b.floor(g/(p+1))*w);a.$AppendChild(e,m);A[g]=m;f.$ActionMode&1&&a.$AddEvent(m,"click",a.$CreateCallback(d,u,g));f.$ActionMode&2&&a.$AddEvent(m,"mouseover",a.$CreateCallback(d,u,g));z[g]=a.$Buttonize(m)}v=c}};g.$Options=f=a.$Extend({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},B);h=a.$FindFirstChildByAttribute(e,"prototype");o=a.$GetStyleWidth(h);n=a.$GetStyleHeight(h);a.$RemoveChild(e,h);l=f.$Steps||1;j=f.$Lanes||1;x=f.$SpacingX;y=f.$SpacingY;i=f.$Orientation-1};g.$JssorDirectionNavigator$=function(i,t,o){var e=this;m.call(e);var b=a.$FindFirstChildByAttribute(i,"arrowleft",d,o),f=a.$FindFirstChildByAttribute(i,"arrowright",d,o),g,h,j,n=a.$GetStyleWidth(i),l=a.$GetStyleHeight(i),r=a.$GetStyleWidth(b),q=a.$GetStyleHeight(b);function k(a){e.$TriggerEvent(p.$NAVIGATIONREQUEST,a,c)}e.$GetCurrentIndex=function(){return g};e.$SetCurrentIndex=function(b,a,c){if(c)g=a;else g=b};e.$Show=function(c){a.$ShowElement(b,c);a.$ShowElement(f,c)};var s;e.$Reset=function(c){g=0;if(!s){if(h.$AutoCenter&1){a.$SetStyleLeft(b,(n-r)/2);a.$SetStyleLeft(f,(n-r)/2)}if(h.$AutoCenter&2){a.$SetStyleTop(b,(l-q)/2);a.$SetStyleTop(f,(l-q)/2)}a.$AddEvent(b,"click",a.$CreateCallback(d,k,-j));a.$AddEvent(f,"click",a.$CreateCallback(d,k,j));a.$Buttonize(b);a.$Buttonize(f)}};e.$Options=h=a.$Extend({$Steps:1},t);j=h.$Steps};g.$JssorThumbnailNavigator$=function(i,A){var h=this,x,l,d,u=[],y,w,f,n,o,t,s,k,q,g,j;m.call(h);i=a.$GetElement(i);function z(n,e){var g=this,b,m,k;function o(){m.$Activate(l==e)}function i(){if(!q.$LastDragSucceded()){var a=(f-e%f)%f,b=q.$GetVirtualIndex((e+a)/f),c=b*f-a;h.$TriggerEvent(p.$NAVIGATIONREQUEST,c)}}g.$Index=e;g.$Highlight=o;k=n.$Thumb||n.$Image||a.$CreateDivElement();g.$Wrapper=b=a.$BuildElement(j,"ThumbnailTemplate",k,c);m=a.$Buttonize(b);d.$ActionMode&1&&a.$AddEvent(b,"click",i);d.$ActionMode&2&&a.$AddEvent(b,"mouseover",i)}h.$GetCurrentIndex=function(){return l};h.$SetCurrentIndex=function(c,d,e){var a=l;l=c;a!=-1&&u[a].$Highlight();u[c].$Highlight();!e&&q.$PlayTo(q.$GetVirtualIndex(b.floor(d/f)))};h.$Show=function(b){a.$ShowElement(i,b)};var v;h.$Reset=function(F,D){if(!v){x=F;b.ceil(x/f);l=-1;k=b.min(k,D.length);var h=d.$Orientation&1,p=t+(t+n)*(f-1)*(1-h),m=s+(s+o)*(f-1)*h,C=p+(p+n)*(k-1)*h,A=m+(m+o)*(k-1)*(1-h);a.$SetStylePosition(g,"absolute");a.$SetStyleOverflow(g,"hidden");d.$AutoCenter&1&&a.$SetStyleLeft(g,(y-C)/2);d.$AutoCenter&2&&a.$SetStyleTop(g,(w-A)/2);a.$SetStyleWidth(g,C);a.$SetStyleHeight(g,A);var j=[];a.$Each(D,function(l,e){var i=new z(l,e),d=i.$Wrapper,c=b.floor(e/f),k=e%f;a.$SetStyleLeft(d,(t+n)*k*(1-h));a.$SetStyleTop(d,(s+o)*k*h);if(!j[c]){j[c]=a.$CreateDivElement();a.$AppendChild(g,j[c])}a.$AppendChild(j[c],d);u.push(i)});var E=a.$Extend({$AutoPlay:e,$NaviQuitDrag:e,$SlideWidth:p,$SlideHeight:m,$SlideSpacing:n*h+o*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:3,$PlayOrientation:d.$Orientation,$DragOrientation:d.$DisableDrag?0:d.$Orientation},d);q=new r(i,E);v=c}};h.$Options=d=a.$Extend({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.$GetStyleWidth(i);w=a.$GetStyleHeight(i);g=a.$FindFirstChildByAttribute(i,"slides");j=a.$FindFirstChildByAttribute(g,"prototype");a.$RemoveChild(g,j);f=d.$Lanes||1;n=d.$SpacingX;o=d.$SpacingY;t=a.$GetStyleWidth(j);s=a.$GetStyleHeight(j);k=d.$DisplayPieces};function s(){j.call(this,0,0);this.$Revert=a.$EmptyFunction}g.$JssorCaptionSlider$=function(p,k,g){var d=this,h,f=k.$CaptionTransitions,o={$Transition:"t",$Delay:"d",$Duration:"du",$ScaleHorizontal:"x",$ScaleVertical:"y",$Rotate:"r",$Zoom:"z",$Opacity:"f",$BeginTime:"b"},e={$Default:function(b,a){if(!isNaN(a.$Value))b=a.$Value;else b*=a.$Percent;return b},$Opacity:function(b,a){return this.$Default(b-1,a)}};e.$Zoom=e.$Opacity;j.call(d,0,0);function m(r,n){var l=[],i,j=[],c=[];function h(c,d){var b={};a.$Each(o,function(g,h){var e=a.$GetAttribute(c,g+(d||""));if(e){var f={};if(g=="t")f.$Value=e;else if(e.indexOf("%")+1)f.$Percent=a.$ParseFloat(e)/100;else f.$Value=a.$ParseFloat(e);b[h]=f}});return b}function p(){return f[b.floor(b.random()*f.length)]}function d(g){var h;if(g=="*")h=p();else if(g){var e=f[a.$ParseInt(g)]||f[g];if(a.$IsArray(e)){if(g!=i){i=g;c[g]=0;j[g]=e[b.floor(b.random()*e.length)]}else c[g]++;e=j[g];if(a.$IsArray(e)){e=e.length&&e[c[g]%e.length];if(a.$IsArray(e))e=e[b.floor(b.random()*e.length)]}}h=e;if(a.$IsString(h))h=d(h)}return h}var q=a.$GetChildren(r);a.$Each(q,function(b){var c=[];c.$Elmt=b;var f=a.$GetAttribute(b,"u")=="caption";a.$Each(g?[0,3]:[2],function(o,p){if(f){var l,i;if(o!=2||!a.$GetAttribute(b,"t3")){i=h(b,o);if(o==2&&!i.$Transition){i.$Delay=i.$Delay||{$Value:0};i=a.$Extend(h(b,0),i)}}if(i&&i.$Transition){l=d(i.$Transition.$Value);if(l){var j=a.$Extend({$Delay:0,$ScaleHorizontal:1,$ScaleVertical:1},l);a.$Each(i,function(c,a){var b=(e[a]||e.$Default).apply(e,[j[a],i[a]]);if(!isNaN(b))j[a]=b});if(!p)if(i.$BeginTime)j.$BeginTime=i.$BeginTime.$Value||0;else if((g?k.$PlayInMode:k.$PlayOutMode)&2)j.$BeginTime=0}}c.push(j)}if(n%2&&!p)c.$Children=m(b,n+1)});l.push(c)});return l}function n(E,d,F){var h={$Easing:d.$Easing,$Round:d.$Round,$During:d.$During,$Reverse:g&&!F,$Optimize:c},k=E,y=a.$GetParentNode(E),o=a.$GetStyleWidth(k),n=a.$GetStyleHeight(k),u=a.$GetStyleWidth(y),t=a.$GetStyleHeight(y),f={},l={},m=d.$ScaleClip||1;if(d.$Opacity)f.$Opacity=2-d.$Opacity;h.$OriginalWidth=o;h.$OriginalHeight=n;if(d.$Zoom||d.$Rotate){f.$Zoom=d.$Zoom?d.$Zoom-1:1;if(a.$IsBrowserIe9Earlier()||a.$IsBrowserOpera())f.$Zoom=b.min(f.$Zoom,2);l.$Zoom=1;var s=d.$Rotate||0;if(s==c)s=1;f.$Rotate=s*360;l.$Rotate=0}else if(d.$Clip){var z={$Top:0,$Right:o,$Bottom:n,$Left:0},D=a.$Extend({},z),e=D.$Offset={},C=d.$Clip&4,v=d.$Clip&8,A=d.$Clip&1,x=d.$Clip&2;if(C&&v){e.$Top=n/2*m;e.$Bottom=-e.$Top}else if(C)e.$Bottom=-n*m;else if(v)e.$Top=n*m;if(A&&x){e.$Left=o/2*m;e.$Right=-e.$Left}else if(A)e.$Right=-o*m;else if(x)e.$Left=o*m;h.$Move=d.$Move;f.$Clip=D;l.$Clip=z}var p=d.$FlyDirection,q=0,r=0,w=d.$ScaleHorizontal,B=d.$ScaleVertical;if(i.$IsToLeft(p))q-=u*w;else if(i.$IsToRight(p))q+=u*w;if(i.$IsToTop(p))r-=t*B;else if(i.$IsToBottom(p))r+=t*B;if(q||r||h.$Move){f.$Left=q+a.$GetStyleLeft(k);f.$Top=r+a.$GetStyleTop(k)}var G=d.$Duration;l=a.$Extend(l,a.$GetStyles(k,f));h.$Setter=a.$GetStyleSetterEx();return new j(d.$Delay,G,h,k,l,f)}function l(b,c){a.$Each(c,function(c){var f,i=c.$Elmt,e=c[0],j=c[1];if(e){f=n(i,e);b=f.$Locate(a.$IsUndefined(e.$BeginTime)?b:e.$BeginTime,1)}b=l(b,c.$Children);if(j){var g=n(i,j,1);g.$Locate(b,1);d.$Combine(g);h.$Combine(g)}f&&d.$Combine(f)});return b}d.$Revert=function(){d.$GoToPosition(d.$GetPosition_OuterEnd()*(g||0));h.$GoToBegin()};h=new j(0,0);l(0,m(p,1))}})(window,document,Math,null,true,false)
/* End */
;
; /* Start:"a:4:{s:4:"full";s:78:"/bitrix/templates/prostroy/js/fancybox/jquery.fancybox.pack.js?159757454023135";s:6:"source";s:62:"/bitrix/templates/prostroy/js/fancybox/jquery.fancybox.pack.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:76:"/bitrix/templates/prostroy/js/scrollto/jquery.scrollTo.min.js?15975745402910";s:6:"source";s:61:"/bitrix/templates/prostroy/js/scrollto/jquery.scrollTo.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.12
 */
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}};return j}));

$.easing.elasout = function(x, t, b, c, d) {
	var s=1.70158;var p=0;var a=c;
	if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
	if (a < Math.abs(c)) { a=c; var s=p/4; }
	else var s = p/(2*Math.PI) * Math.asin (c/a);
	return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:72:"/bitrix/templates/prostroy/js/jquery.smooth-scroll.min.js?15975745403304";s:6:"source";s:57:"/bitrix/templates/prostroy/js/jquery.smooth-scroll.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery Smooth Scroll - v1.5.6 - 2015-09-08
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2015 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?t(require("jquery")):t(jQuery)})(function(t){function e(t){return t.replace(/(:|\.|\/)/g,"\\$1")}var l="1.5.6",o={},n={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},s=function(e){var l=[],o=!1,n=e.dir&&"left"===e.dir?"scrollLeft":"scrollTop";return this.each(function(){var e=t(this);if(this!==document&&this!==window)return!document.scrollingElement||this!==document.documentElement&&this!==document.body?(e[n]()>0?l.push(this):(e[n](1),o=e[n]()>0,o&&l.push(this),e[n](0)),void 0):(l.push(document.scrollingElement),!1)}),l.length||this.each(function(){"BODY"===this.nodeName&&(l=[this])}),"first"===e.el&&l.length>1&&(l=[l[0]]),l};t.fn.extend({scrollable:function(t){var e=s.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=s.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(l,o){if(l=l||{},"options"===l)return o?this.each(function(){var e=t(this),l=t.extend(e.data("ssOpts")||{},o);t(this).data("ssOpts",l)}):this.first().data("ssOpts");var n=t.extend({},t.fn.smoothScroll.defaults,l),s=t.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(l){var o=this,r=t(this),i=t.extend({},n,r.data("ssOpts")||{}),c=n.exclude,a=i.excludeWithin,f=0,u=0,h=!0,d={},m=location.hostname===o.hostname||!o.hostname,p=i.scrollTarget||t.smoothScroll.filterPath(o.pathname)===s,g=e(o.hash);if(i.scrollTarget||m&&p&&g){for(;h&&c.length>f;)r.is(e(c[f++]))&&(h=!1);for(;h&&a.length>u;)r.closest(a[u++]).length&&(h=!1)}else h=!1;h&&(i.preventDefault&&l.preventDefault(),t.extend(d,i,{scrollTarget:i.scrollTarget||g,link:o}),t.smoothScroll(d))}),this}}),t.smoothScroll=function(e,l){if("options"===e&&"object"==typeof l)return t.extend(o,l);var n,s,r,i,c,a=0,f="offset",u="scrollTop",h={},d={};"number"==typeof e?(n=t.extend({link:null},t.fn.smoothScroll.defaults,o),r=e):(n=t.extend({link:null},t.fn.smoothScroll.defaults,e||{},o),n.scrollElement&&(f="position","static"===n.scrollElement.css("position")&&n.scrollElement.css("position","relative"))),u="left"===n.direction?"scrollLeft":u,n.scrollElement?(s=n.scrollElement,/^(?:HTML|BODY)$/.test(s[0].nodeName)||(a=s[u]())):s=t("html, body").firstScrollable(n.direction),n.beforeScroll.call(s,n),r="number"==typeof e?e:l||t(n.scrollTarget)[f]()&&t(n.scrollTarget)[f]()[n.direction]||0,h[u]=r+a+n.offset,i=n.speed,"auto"===i&&(c=h[u]-s.scrollTop(),0>c&&(c*=-1),i=c/n.autoCoefficient),d={duration:i,easing:n.easing,complete:function(){n.afterScroll.call(n.link,n)}},n.step&&(d.step=n.step),s.length?s.stop().animate(h,d):n.afterScroll.call(n.link,n)},t.smoothScroll.version=l,t.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},t.fn.smoothScroll.defaults=n});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/prostroy/js/script.js?159757454017420";s:6:"source";s:39:"/bitrix/templates/prostroy/js/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_AJAXPAGES_processing = false;

function RSGoPro_PutJSon(json,$linkObj,ajaxpagesid) {
	if(json.TYPE=='OK') {
		if(ajaxpagesid && ajaxpagesid==json.IDENTIFIER) {
			if(json.HTML.catalognames) {
				$('#'+ajaxpagesid).find('.names > tbody > tr:last').after( json.HTML.catalognames );
			}
			if(json.HTML.catalogproducts) {
				$('#'+ajaxpagesid).find('.products > tbody > tr:last').after( json.HTML.catalogproducts );
			}
			if(json.HTML.showcaseview) {
				$('#'+ajaxpagesid).find('#showcaseview').append( json.HTML.showcaseview );
			}
			if($linkObj && json.HTML.catalogajaxpages) {
				$linkObj.parents('.ajaxpages').replaceWith( json.HTML.catalogajaxpages );
			} else if($linkObj) {
				$linkObj.parents('.ajaxpages').remove();
			}
		} else {
			console.warn( 'PutJSon -> no ajaxpages' );
		}
		if(json.HTMLBYID) {
			for(var key in json.HTMLBYID) {
				if( $('#'+key) ) {
					$('#'+key).html( json.HTMLBYID[key] );
				}
			}
		}
	} else {
		console.warn( 'PutJSon -> request return error' );
	}
}

// AjaxPages
function RSGoPro_AjaxPages(linkObj) {
	if(linkObj.parent().hasClass('animation')) {
		linkObj.parent().removeClass('animation');
		// if that was table - repaint lines
		var $div = $( '#'+linkObj.data('ajaxpagesid') );
		if( $div.length>0 && $div.find('.artables').length>0 && $div.find('.artables .names > tbody > tr').length>1 ) {
			var id = 0;
			$div.find('.artables .names > tbody > tr').each(function(i){
				id = $(this).data('elementid');
				if( i % 2 == 0 ) {
					$(this).addClass('even');
					$div.find('.artables .products tr.js-elementid'+id).addClass('even');
				} else {
					$(this).removeClass('even');
					$div.find('.artables .products tr.js-elementid'+id).removeClass('even');
				}
			});
		}
		// /if that was table - repaint lines
	} else {
		linkObj.parent().addClass('animation');
	}
}

// Area2Darken
function RSGoPro_Area2Darken(areaObj, anim, options) {
	var opt = $.extend( {
		'progressLeft': false,
		'progressTop': false,
    }, options);
	if(!areaObj.hasClass('areadarken')){
		areaObj.addClass('areadarken').css({"position":"relative"}).append('<div class="area2darken"></div>');
		if(anim == 'animashka'){
			areaObj.find('.area2darken').append('<i class="icon animashka"></i>');
			if(opt.progressTop){
				areaObj.find('.animashka').css({'top': opt.progressTop});
			}
		}
	} else {
		areaObj.removeClass('areadarken').removeAttr('style').find('.area2darken').remove();
	}
}

function RSGoPro_SetSet() {
	RSGoPro_SetFavorite();
	RSGoPro_SetCompared();
	RSGoPro_SetInBasket();
}
// set favorite
function RSGoPro_SetFavorite() {
	$('.add2favorite').removeClass('in');
	for(element_id in RSGoPro_FAVORITE) {
		if(RSGoPro_FAVORITE[element_id]=='Y' && $('.js-elementid'+element_id).find('.add2favorite').length>0) {
			$('.js-elementid'+element_id).find('.add2favorite').addClass('in');
		}
	}
}

// set compare
function RSGoPro_SetCompared() {
	$('.add2compare').removeClass('in').html( '<i class="icon pngicons"></i>'+BX.message('RSGOPRO_JS_COMPARE') );;
	for(element_id in RSGoPro_COMPARE) {
		if(RSGoPro_COMPARE[element_id]=='Y' && $('.js-elementid'+element_id).find('.add2compare').length>0) {
			$('.js-elementid'+element_id).find('.add2compare').addClass('in').html( '<i class="icon pngicons"></i>'+BX.message('RSGOPRO_JS_COMPARE_IN') );
		}
	}
}

// set in basket
function RSGoPro_SetInBasket() {
	$('.add2basketform').removeClass('in');
	for(element_id in RSGoPro_INBASKET) {
		if(RSGoPro_INBASKET[element_id]=='Y' && $(".js-add2basketpid[value='"+element_id+"']").length>0) {
			$('.js-add2basketpid[value="'+element_id+'"]').parents('.add2basketform').addClass('in');
		}
		if( parseInt(RSGoPro_INBASKET[element_id])>0 && $('.products').find('.js-add2basketform'+RSGoPro_INBASKET[element_id]).length>0 ) {
			$('.products').find('.js-add2basketform'+RSGoPro_INBASKET[element_id]).addClass('in');
		}
	}
}

// AJAXPAGES
function RSGoPro_AJAXPAGESAuto() {
	$('.ajaxpages.auto').each(function(i){
		var porog = 200,
			$ajaxpObj = $(this);
		var ajaxpOffsetTop = $ajaxpObj.offset().top,
			window_height = $(window).height();
		if( porog>(ajaxpOffsetTop-window.pageYOffset-window_height) && !RSGoPro_AJAXPAGES_processing && !$ajaxpObj.hasClass('') ) {
			$ajaxpObj.find('a').trigger('click');
		}
	});
}

// TIMER
function RSGoPro_TIMER() {	
	var datenow = new Date;
	datenow = (Date.parse(datenow))/1000;
	$('.timer').each(function(index){			
		timetimer1 = $(this).find('.intimer');
		var dateFrom = $(this).data('datefrom');
		var dateTo = $(timetimer1).data('dateto');
		var autoReUse = $(timetimer1).data('autoreuse');
		var timeLimit = dateTo - dateFrom;
		var diff = dateTo - datenow;		
		if(diff < 0 && autoReUse == 'Y'){
			for (lim = 0; lim < 100; lim++) {
				newdateTo = (lim*timeLimit+dateTo) - datenow;
				if(newdateTo > 0){
					diff = newdateTo;
					break;
				}
			}
		}		
		if (diff > 0) {
			var days = parseInt((diff / (60 * 60 ))/24);
			if (days < 10) {
			  days = "0" + days;
			}
			days = days.toString();		
		    var hours = parseInt((diff / (60 * 60 )) % 24);
		    if (hours < 10) {
		      hours = "0" + hours;
		    }
		    hours = hours.toString();	
			var minutes = parseInt(diff / (60)) % 60;
			if (minutes < 10) {
			  minutes = "0" + minutes;
			}
			minutes = minutes.toString();
			var seconds = parseInt(diff) % 60;
			if (seconds < 10) {
			  seconds = "0" + seconds;
			}
			seconds = seconds.toString();
			$(timetimer1).find(".result-day").text(days);
			$(timetimer1).find(".result-hour").text(hours);
			$(timetimer1).find(".result-minute").text(minutes);
			$(timetimer1).find(".result-second").text(seconds);
		} else {
			$(timetimer1).parents('.timer').css('display', 'none');
			$(timetimer1).parents('.js-element').removeClass('da2 qb').find('.price').removeClass('new');
		}
	});
}

// phone mask
function RSGoPro_InitMaskPhone() {
	if( $('.maskPhone').length>0 ) {
		$(".maskPhone").mask("+7 (999) 999-9999");
	}
}

$(document).ready(function(){
	setInterval(function() {
		RSGoPro_TIMER();
	}, 1000);

	$(document).on('RSGoProOnOfferChange', function(e, obj){
		if($(obj).find('.timers').length >0){
			if($(obj).find('.intimer').data('autoreuse') == 'N'){
				var dateNowOfferChange = new Date;
				dateNowOfferChange = (Date.parse(dateNowOfferChange))/1000;
				var dateFromOfferChange = $(obj).find('.timer').data('datefrom');
				var dateToOfferChange = $(obj).find('.intimer').data('dateto');
				if((dateToOfferChange - dateNowOfferChange) < 0){
					$(obj).find('.timers').css('display', 'none');
					$(obj).removeClass('da2 qb');
					$(obj).find('.price').removeClass('new');
				}
			}
		}
	});
	// Click protection
	$(document).on('click','.click_protection',function(e){
		e.stopImmediatePropagation();
		console.warn( 'Click protection' );
		return false;
	});
	// /Click protection
	
	// a -> submit form
	$(document).on('click','form a.submit',function(){
		$(this).parents('form').find('input[type="submit"]').trigger('click');
		return false;
	});
	// /a -> submit form
	
	// AJAX -> add2basket
	$(document).on('submit','.add2basketform',function(){
		var $formObj = $(this);
		var id = parseInt( $formObj.find('.js-add2basketpid').val() );
		if( id>0 ) {
			var seriData = $(this).serialize();
			var url = SITE_DIR+SITE_CATALOG_PATH+'/?'+seriData+'&AJAX_CALL=Y&action=add2basket';
			RSGoPro_Area2Darken( $formObj );
			RSGoPro_Area2Darken( $('#header').find('.basketinhead') );
			$.getJSON(url, {}, function(json){
				if(json.TYPE=='OK') {
					RSGoPro_INBASKET[id] = "Y";
					RSGoPro_SetInBasket();
					RSGoPro_PutJSon( json );
				} else {
					console.warn( 'add2basket - error responsed' );
				}
			}).fail(function(data){
				console.warn( 'add2basket - can\'t load json' );
			}).always(function(){
				RSGoPro_Area2Darken( $formObj );
				RSGoPro_Area2Darken( $('#header').find('.basketinhead') );
			});
		} else if( $formObj.parents('.elementpopup').length<1 ) {
			// id = 0 -> Show popup (if PC)
			if(!RSDevFunc_PHONETABLET) {
				RSGoPro_GoPopup( $formObj.parents('.js-element').data('elementid'), $formObj.parents('.js-element') );
			} else {
				if( $formObj.parents('.js-element').find('.js-detaillink').length>0 ) {
					window.location = 'http://' + window.location.hostname + $formObj.parents('.js-element').find('.js-detaillink').attr('href')
				} else {
					console.warn( 'fail redirect - can\'t find link' );
				}
			}
		} else {
			console.warn( 'add product to basket failed' );
		}
		return false;
	});
	
	// AJAX -> add2compare 
	$(document).on('click','.add2compare',function(){
		var $linkObj = $(this);
		var id = parseInt( $linkObj.parents('.js-element').data('elementid') );
		var action = '';
		if(id>0) {
			RSGoPro_Area2Darken($('.add2compare'));
			if( RSGoPro_COMPARE[id]=='Y' ) { // delete from compare
				action = 'DELETE_FROM_COMPARE_LIST';
			} else {
				action = 'ADD_TO_COMPARE_LIST';
			}
			var url = SITE_DIR+SITE_CATALOG_PATH+'/?AJAX_CALL=Y&action='+action+'&id='+id;
			$.getJSON(url, {}, function(json){
				if(json.TYPE=="OK")
				{
					RSGoPro_PutJSon(json);
					if( action=='DELETE_FROM_COMPARE_LIST' ) // delete from compare
					{
						delete RSGoPro_COMPARE[id];
					} else { // add to compare
						RSGoPro_COMPARE[id] = 'Y';
					}
				} else {
					console.warn( 'compare - error responsed' );
				}
			}).fail(function(data){
				console.warn( 'compare - fail request' );
			}).always(function(){
				RSGoPro_Area2Darken($('.add2compare'));
				RSGoPro_SetCompared();
			});
		}
		return false;
	});
	
	// AJAX -> add2favorite
	$(document).on('click','.add2favorite',function(){
		var $linkObj = $(this);
		var id = parseInt( $linkObj.parents('.js-element').data('elementid') );
		if(id>0)
		{
			RSGoPro_Area2Darken($('.add2favorite'));
			var url = SITE_DIR+SITE_CATALOG_PATH+'/?AJAX_CALL=Y&action=add2favorite&element_id='+id;
			$.getJSON(url, {}, function(json){
				if(json.TYPE=="OK")
				{
					RSGoPro_PutJSon(json);
					if( RSGoPro_FAVORITE[id]=='Y' ) // remove from favorite
					{
						delete RSGoPro_FAVORITE[id];
					} else { // add to favorite
						RSGoPro_FAVORITE[id] = 'Y';
					}
				} else {
					console.warn( 'favorite - error responsed' );
				}
			}).fail(function(data){
				console.warn( 'favorite - fail request' );
			}).always(function(){
				RSGoPro_Area2Darken($('.add2favorite'));
				RSGoPro_SetFavorite();
			});
		}
		return false;
	});

	// AJAXPAGES
	$(document).on('click','.ajaxpages a',function(){
		var $linkObj = $(this);
		var ajaxurl = $linkObj.data('ajaxurl');
		var ajaxpagesid = $linkObj.data('ajaxpagesid');
		var navpagenomer = $linkObj.data('navpagenomer');
		var navpagecount = $linkObj.data('navpagecount');
		var navnum = $linkObj.data('navnum');
		var nextpagenomer = parseInt(navpagenomer) + 1;
		var url = "";
		
		if( $('#'+ajaxpagesid).length>0 && navpagenomer<navpagecount && parseInt(navnum)>0 && ajaxurl!="" ) {
			RSGoPro_AJAXPAGES_processing = true;
			RSGoPro_AjaxPages( $linkObj );
			if(ajaxurl.indexOf("?")<1) {
				url = ajaxurl + '?ajaxpages=Y&ajaxpagesid=' + ajaxpagesid + '&PAGEN_'+navnum+'='+nextpagenomer;
			} else {
				url = ajaxurl + '&ajaxpages=Y&ajaxpagesid=' + ajaxpagesid + '&PAGEN_'+navnum+'='+nextpagenomer;
			}
			$.getJSON(url, {}, function(json){
				RSGoPro_PutJSon( json,$linkObj,ajaxpagesid );
			}).fail(function(json){
				console.warn( 'ajaxpages - error responsed' );
			}).always(function(){
				setTimeout(function(){ // fix for slow shit
					RSGoPro_AJAXPAGES_processing = false;
					RSGoPro_AjaxPages( $linkObj );
				},50);
			});
		} else {
			if( !($('#'+ajaxpagesid).length>0) ) {
				console.warn( 'AJAXPAGES: ajaxpages -> empty DOM element' );
			}
			if( !(navpagenomer<navpagecount) ) {
				console.warn( 'AJAXPAGES: ajaxpages -> navpagenomer !< navpagecount' );
			}
			if( !(parseInt(navnum)>0) ) {
				console.warn( 'AJAXPAGES: ajaxpages -> parseInt(navnum)!>0' );
			}
			if( !(ajaxurl!="") ) {
				console.warn( 'AJAXPAGES: ajaxpages -> ajaxurl is empty' );
			}
		}
		return false;
	});
	//$(window).resize(function(){
	$(window).scroll(function(){
		RSGoPro_AJAXPAGESAuto();
	});
	// /AJAXPAGES
	
	// price table scroll
	$(document).on('click','.prices .arrowtop',function(){
		var $arrow = $(this);
		if($arrow.parent().find('tr').length>3 && !$(this).parent().find('tr:first').is(':visible')) {
			$arrow.parent().find('tr').each(function(i){
				if(!$(this).hasClass('noned')) {
					$arrow.parent().find('tr:eq('+(i-1)+')').removeClass('noned');
					$arrow.parent().find('tr:eq('+(i+2)+')').addClass('noned');
					return false;
				}
			});
		}
		return false;
	});
	$(document).on('click','.prices .arrowbot',function(){
		var $arrow = $(this);
		if($arrow.parent().find('tr').length>3 && !$(this).parent().find('tr:last').is(':visible')) {
			$arrow.parent().find('tr').each(function(i){
				if(!$(this).hasClass('noned')) {
					$(this).addClass('noned');
					$arrow.parent().find('tr:eq('+(i+3)+')').removeClass('noned');
					return false;
				}
			});
		}
		return false;
	});
	
	// disableSelection
	$(document).on('mouseenter mouseleave','.prices .arrowtop, .prices .arrowbot, .js-minus, .js-plus',function(){
		$('html').toggleClass('disableSelection');
	});
	
	// quantity
	$(document).on('click','.js-minus',function(){
		var $btn = $(this);
		var ratio = parseFloat( $btn.parent().find('.js-quantity').data('ratio') );
		var ration2 = ratio.toString().split('.', 2)[1];
		var length = 0;
		if( ration2!==undefined ) { length = ration2.length; }
		var val = parseFloat( $btn.parent().find('.js-quantity').val() );
		if( val>ratio ) {
			$btn.parent().find('.js-quantity').val( (val-ratio).toFixed(length) ).trigger("change");
		}
		return false;
	});
	$(document).on('click','.js-plus',function(){
		var $btn = $(this);
		var ratio = parseFloat( $btn.parent().find('.js-quantity').data('ratio') );
		var ration2 = ratio.toString().split('.', 2)[1];
		var length = 0;
		if( ration2!==undefined ) { length = ration2.length; }
		var val = parseFloat( $btn.parent().find('.js-quantity').val() );
		$btn.parent().find('.js-quantity').val( (val+ratio).toFixed(length) ).trigger("change");
		return false;
	});
	$(document).on('blur','.js-quantity',function(){
		var $input = $(this);
		var ratio = parseFloat( $input.data('ratio') );
		var ration2 = ratio.toString().split('.', 2)[1];
		var length = 0;
		if( ration2!==undefined ) { length = ration2.length; }
		var val = parseFloat( $input.val() );
		if( val>0 ) {
			$input.val( (ratio*(Math.floor(val/ratio))).toFixed(length) );
		} else {
			$input.val( ratio );
		}
	});
	$(document).on('change keyup','.js-quantity',function(){
		var discountEl = $("[data-discount]").first();
		if(discountEl.size()) {
			var discount = discountEl.data("discount"),
			       price = discountEl.data("price"),
				     qty = $(this).val();
			         sum = price * qty,
					 prc = 0;
			if(qty<=0) {
				qty=1;
				sum = price;
			}
			if(discount) {
				for(var s in discount) {
					if(sum>=s) {
						prc = discount[s];
					}
				}
			}
			//if(prc) {
				price = Math.round(price*(1-prc/100));
				discountEl.find(".prc").html(price);
				discountEl.find(".n").html(qty);
				discountEl.find(".itog").html(price*qty);
			//}
		}
		//console.log(1);
	});
	
	// fancybox -> all
	var RSGoPro_FancyOptions1 = {}, RSGoPro_FancyOptions2 = {};
	RSGoPro_FancyOptions1 = {
		maxWidth		: 900,
		maxHeight		: 600,
		minWidth		: 250,
		minHeight		: 100,
		fitToView		: true,
		autoSize		: true,
		openEffect		: 'none',
		closeEffect		: 'none',
		padding			: 20,
		tpl				: {
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i class="icon pngicons"></i></a>',
		},
		helpers			: {
			title : {
				type : 'inside',
				position : 'top'
			}
		},
		beforeLoad		: function(){
			RSGoPro_HideAllPopup();
		},
		beforeShow		: function(){
			$('.fancybox-wrap').css({marginLeft: '-10000px'});
			$(document).trigger('RSGoProOnFancyBeforeShow');
		},
		afterShow		: function(){
			setTimeout(function(){
				$.fancybox.toggle();
			},50);
			setTimeout(function(){
				$('.fancybox-wrap').css({marginLeft: '0px'});
				RSGoPro_InitMaskPhone();
			},75);
		}
	};
	$('.fancyajax:not(.big)').fancybox(RSGoPro_FancyOptions1);
	RSGoPro_FancyOptions2 = $.extend({}, RSGoPro_FancyOptions1);;
	RSGoPro_FancyOptions2.width = '80%';
	RSGoPro_FancyOptions2.height = '80%';
	RSGoPro_FancyOptions2.autoSize = false;
	RSGoPro_FancyOptions2.autoHeight = true;
	$('.fancyajax.big').fancybox(RSGoPro_FancyOptions2);
	$('.fancyimage').fancybox();

	RSGoPro_InitMaskPhone();

	$(document).on('focus blur','.dropdown-block .bx-ui-sls-fake',function(){
		$(this).parents('.dropdown-block').toggleClass('focus');
	});
	
});
jQuery(document).on('click', 'a.go2detailfrompreview[href^="#"]', function() {
	//if ( this.hash && this.pathname === location.pathname ) {
		//alert(this.hash);
		$(this.hash).addClass("selected");
		$.smoothScroll({scrollTarget: this.hash});
		return false;
	//}
}).ready(function($) {
  $(window).bind('hashchange', function(event) {
	/*var tgt = location.hash.replace(/^#\/?/,'');
	if ( document.getElementById(tgt) ) {
		//alert("2"+tgt);
	  $.smoothScroll({scrollTarget: '#' + tgt});
	}*/
  });

  $(window).trigger('hashchange');
  
	$(document).on('click', 'a.slide-to', function(e) {
		e.stopImmediatePropagation();
		$($(this).attr("href")).slideToggle();
		return false;
	});
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/prostroy/js/offers.js?159757454012730";s:6:"source";s:39:"/bitrix/templates/prostroy/js/offers.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_OffersExt_timeout_id = 0;

function RSGoPro_OffersExt_ChangeHTML($elementObj) {
	var element_id = $elementObj.data('elementid');
	if( RSGoPro_OFFERS[element_id] ) {
		// get all selected values
		var arrFullChosed = new Object();
		$elementObj.find('.div_option.selected').each(function(index1){
			var $optionObj = $(this);
			var code = $optionObj.parents('.offer_prop').data('code');
			var value = $optionObj.data('value');
			arrFullChosed[code] = value;
		});

		// get offerID (key=ID)
		var finedOfferID = 0;
		var all_prop_true2 = true;
		for(offerID in RSGoPro_OFFERS[element_id].OFFERS) {
			all_prop_true2 = true;
			for(pCode in arrFullChosed) {
				if( arrFullChosed[pCode] != RSGoPro_OFFERS[element_id].OFFERS[offerID].PROPERTIES[pCode] ) {
					all_prop_true2 = false;
					break;
				}
			}
			if(all_prop_true2) {
				finedOfferID = offerID;
				break;
			}
		}
		
		// article
		if( $elementObj.find('.offer_article') ) {
			if( RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].ARTICLE ) {
				$elementObj.find('.offer_article').html( RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].ARTICLE ).parent().css('visibility','visible');
			} else if( $elementObj.find('.offer_article').data('prodarticle') ) {
				$elementObj.find('.offer_article').html( $elementObj.find('.offer_article').data('prodarticle') ).parent().css('visibility','visible');
			} else {
				$elementObj.find('.offer_article').parent().css('visibility','hidden');
			}
		}
		
		// set price
		if( RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].PRICES ) {
			var PRICES = RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].PRICES;
			for(var PRICE_CODE in PRICES) {
				if( $elementObj.find('.price_pdv_'+PRICE_CODE) ) {
					$elementObj.find('.price_pdv_'+PRICE_CODE).removeClass('new').html( PRICES[PRICE_CODE].PRINT_DISCOUNT_VALUE );
					if( parseInt(PRICES[PRICE_CODE].DISCOUNT_DIFF)>0 ) {
						$elementObj.find('.price_pdv_'+PRICE_CODE).addClass('new');
					}
				}
				if( $elementObj.find('.price_pd_'+PRICE_CODE) ) {
					if( parseInt(PRICES[PRICE_CODE].DISCOUNT_DIFF)>0 ) {
						$elementObj.find('.price_pd_'+PRICE_CODE).html( PRICES[PRICE_CODE].PRINT_DISCOUNT );
					} else {
						$elementObj.find('.price_pd_'+PRICE_CODE).html( '' );
					}
				}
				if( $elementObj.find('.price_pv_'+PRICE_CODE) ) {
					if( parseInt(PRICES[PRICE_CODE].DISCOUNT_DIFF)>0 ) {
						$elementObj.find('.price_pv_'+PRICE_CODE).html( PRICES[PRICE_CODE].PRINT_VALUE );
					} else {
						$elementObj.find('.price_pv_'+PRICE_CODE).html( '' );
					}
				}
			}
		}
		
		// set ratio
		if( RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].CATALOG_MEASURE_RATIO && $elementObj.find('.js-quantity') ) {
			$elementObj.find('.js-quantity').data('ratio',RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].CATALOG_MEASURE_RATIO);
			$elementObj.find('.js-quantity').val( $elementObj.find('.js-quantity').data('ratio') );
		}
		if( RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].CATALOG_MEASURE_NAME && $elementObj.find('.js-measurename') ) {
			$elementObj.find('.js-measurename').html( RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].CATALOG_MEASURE_NAME );
		}
		
		// daysarticle & quickbuy
		$elementObj.removeClass('qb da2');
		$elementObj.find('.timers .timer').hide();
		if( RSGoPro_OFFERS[element_id].ELEMENT.QUICKBUY || RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].QUICKBUY ) {
			$elementObj.addClass('qb');
			if( $elementObj.find('.timers .qb.js-timer_id'+element_id).length>0 ) {
				$elementObj.find('.timers .qb.js-timer_id'+element_id).css('display','inline-block');
			} else if ( $elementObj.find('.timers .qb.js-timer_id'+finedOfferID).length>0 ) {
				$elementObj.find('.timers .qb.js-timer_id'+finedOfferID).css('display','inline-block');
			}
		}
		if( RSGoPro_OFFERS[element_id].ELEMENT.DAYSARTICLE2 || RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].DAYSARTICLE2 ) {
			$elementObj.removeClass('qb').addClass('da2');
			if( $elementObj.find('.timers .da2.js-timer_id'+element_id).length>0 ) {
				$elementObj.find('.timers .timer').hide();
				$elementObj.find('.timers .da2.js-timer_id'+element_id).css('display','inline-block');
			} else if ( $elementObj.find('.timers .da2.js-timer_id'+finedOfferID).length>0 ) {
				$elementObj.find('.timers .timer').hide();
				$elementObj.find('.timers .da2.js-timer_id'+finedOfferID).css('display','inline-block');
			}
		}
		
		
		// change product id
		$elementObj.find('.js-add2basketpid').val( finedOfferID );
		if(RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].CAN_BUY) {
			$elementObj.find('.add2basketform').removeClass('cantbuy');
		} else {
			$elementObj.find('.add2basketform').addClass('cantbuy');
		}
		
		// stores
		if( $elementObj.find('.stores') && finedOfferID>0 && $elementObj.find('.stores').find('.popupstores') ) {
			if( RSGoPro_STOCK[element_id] ) {
				if( $elementObj.find('.stores').hasClass('gopro_20') ) {
					// change stores
					for(storeID in RSGoPro_STOCK[element_id].JS.SKU[finedOfferID]) {
						var stores = RSGoPro_STOCK[element_id].JS.SKU[finedOfferID];
						var quantity = stores[storeID];
						if( RSGoPro_STOCK[element_id].USE_MIN_AMOUNT==true ) {
							if( quantity < 1 ) {
								$elementObj.find('.stores').find('.store_'+storeID).find('.amount').css('color','#ff0000').html( RSGoPro_STOCK[element_id].MESSAGE_EMPTY );
							} else if( quantity < RSGoPro_STOCK[element_id].MIN_AMOUNT ) {
								$elementObj.find('.stores').find('.store_'+storeID).find('.amount').css('color','').html( RSGoPro_STOCK[element_id].MESSAGE_LOW );
							} else {
								$elementObj.find('.stores').find('.store_'+storeID).find('.amount').css('color','#00cc00').html( RSGoPro_STOCK[element_id].MESSAGE_ISSET );
							}
						} else {
							$elementObj.find('.stores').find('.store_'+storeID).find('.amount').html( quantity );
						}
						if( RSGoPro_STOCK[element_id].SHOW_EMPTY_STORE==false && quantity<1 ) {
							$elementObj.find('.stores').find('.store_'+storeID).hide();
						} else {
							$elementObj.find('.stores').find('.store_'+storeID).show();
						}
					}
				} else {
					console.warn( 'OffersExt_ChangeHTML -> old stores template version' );
					// change stores
					$elementObj.find('.stores').find('.genamount').removeClass('cantopen');
					$elementObj.find('.stores').find('.popupstores').find('.offerstore').hide();
					if( $elementObj.find('.stores').find('.popupstores').find('.offer_'+finedOfferID).length>0 ) {
						$elementObj.find('.stores').find('.popupstores').find('.offer_'+finedOfferID).show();
					} else {
						$elementObj.find('.stores').find('.genamount').addClass('cantopen');
					}
				}
				// change general
				if( RSGoPro_STOCK[element_id].QUANTITY[element_id] ) {
					var quantity = parseInt( RSGoPro_STOCK[element_id].QUANTITY[finedOfferID] );
					if( RSGoPro_STOCK[element_id].USE_MIN_AMOUNT==true ) {
						if( quantity < 1 ) {
							$elementObj.find('.stores').find('.genamount span').css('color','#ff0000').html( RSGoPro_STOCK[element_id].MESSAGE_EMPTY );
						} else if( quantity < RSGoPro_STOCK[element_id].MIN_AMOUNT ) {
							$elementObj.find('.stores').find('.genamount span').css('color','').html( RSGoPro_STOCK[element_id].MESSAGE_LOW );
						} else {
							$elementObj.find('.stores').find('.genamount span').css('color','#00cc00').html( RSGoPro_STOCK[element_id].MESSAGE_ISSET );
						}
					} else {
						$elementObj.find('.stores').find('.genamount span').html( quantity );
					}
				}
			} else {
				console.warn( 'OffersExt_ChangeHTML -> store not found' );
			}
		}
		
		// set buttons "in basket" and "not in basket"
		RSGoPro_SetInBasket();

		// event
		$(document).trigger('RSGoProOnOfferChange',[$elementObj]);
		
	}
}

function RSGoPro_OffersExt_PropChanged($optionObj)
{
	var element_id = $optionObj.parents('.js-element').data('elementid');
	var CURRENT_PROP_CODE = $optionObj.parents('.offer_prop').data('code');
	var value = $optionObj.data('value');
	if( RSGoPro_OFFERS[element_id] && !$optionObj.hasClass('disabled') ) {
		// change styles
		$optionObj.parents('.offer_prop').removeClass('opened').addClass('closed');
		$optionObj.parents('.offer_prop').find('.div_option').removeClass('selected');
		$optionObj.addClass('selected');
		
		// set current value
		if( $optionObj.parents('.offer_prop').hasClass('color') ) { // color 
			$optionObj.parents('.offer_prop').find('.div_selected span').css({'backgroundImage':$optionObj.find('span').css('backgroundImage')});
		} else {
			$optionObj.parents('.offer_prop').find('.div_selected span').html(value);
		}
		
		var next_index = 0;
		var NEXT_PROP_CODE = '';
		var PROP_CODE = '';
		
		// get current values
		var arCurrentValues = new Object();
		for(index in RSGoPro_OFFERS[element_id].SORT_PROPS) {
			PROP_CODE = RSGoPro_OFFERS[element_id].SORT_PROPS[index];
			arCurrentValues[PROP_CODE] = $optionObj.parents('.js-element').find('.prop_'+PROP_CODE).find('.div_option.selected').data('value');
			// save next prop_code
			if(PROP_CODE==CURRENT_PROP_CODE) {
				var next_index = parseInt(index)+1;
				if( RSGoPro_OFFERS[element_id].SORT_PROPS[next_index] )
					NEXT_PROP_CODE = RSGoPro_OFFERS[element_id].SORT_PROPS[next_index];
				else
					NEXT_PROP_CODE = false;
				break;
			}
		}

		// get enabled values for next property
		if(NEXT_PROP_CODE) {
			var allPropTrue1 = true;
			var arNextEnabledProps = new Array();
			for(offerID in RSGoPro_OFFERS[element_id].OFFERS) {
				allPropTrue1 = true;
				for(pCode1 in arCurrentValues) {
					if( arCurrentValues[pCode1] != RSGoPro_OFFERS[element_id].OFFERS[offerID].PROPERTIES[pCode1] ) {
						allPropTrue1 = false;
					}
				}
				if(allPropTrue1) {
					arNextEnabledProps.push( RSGoPro_OFFERS[element_id].OFFERS[offerID].PROPERTIES[NEXT_PROP_CODE] );
				}
			}

			// disable and enable values for NEXT_PROP_CODE
			$optionObj.parents('.js-element').find('.prop_'+NEXT_PROP_CODE).find('.div_option').each(function(i){
				var $option = $(this);
				var emptyInEnabled = true;
				for(inden in arNextEnabledProps) {
					if( $option.data('value') == arNextEnabledProps[inden] ) {
						emptyInEnabled = false;
						break;
					}
				}
				$option.addClass('disabled');
				if(!emptyInEnabled)
					$option.removeClass('disabled');
			});

			// call itself
			var nextOptionObj;
			if(!$optionObj.parents('.js-element').find('.prop_'+NEXT_PROP_CODE).find('.div_option.selected').hasClass('disabled')) {
				nextOptionObj = $optionObj.parents('.js-element').find('.prop_'+NEXT_PROP_CODE).find('.div_option.selected');
			} else {
				nextOptionObj = $optionObj.parents('.js-element').find('.prop_'+NEXT_PROP_CODE).find('.div_option:not(.disabled):first');
			}
			RSGoPro_OffersExt_PropChanged(nextOptionObj);
		} else {
			RSGoPro_OffersExt_ChangeHTML( $optionObj.parents('.js-element') );
		}
	}
}

$(document).ready(function(){
	
	// prop select -> click
	$(document).on('click','.div_option',function(e){
		e.stopPropagation();
		clearTimeout( RSGoPro_OffersExt_timeout_id );
		var $optionObj = $(this);
		if(!$optionObj.hasClass('disabled')) {
			var element_id = $optionObj.parents('.js-element').data('elementid');
			if( element_id > 0 ) {
				var propCode = $optionObj.parents('.offer_prop').data('code');
				var value = $optionObj.data('value');
				if( RSGoPro_OFFERS[element_id] ) {
					RSGoPro_OffersExt_PropChanged($optionObj);
				} else {
					RSGoPro_Area2Darken( $optionObj.parents('.js-element'), 'animashka' );
					var url = SITE_DIR + 'catalog/?AJAX_CALL=Y&action=get_element_json&element_id=' + element_id;
					$.getJSON(url, {}, function(json){
						RSGoPro_OFFERS[element_id] = json;
						RSGoPro_OffersExt_PropChanged($optionObj);
						RSGoPro_Area2Darken( $optionObj.parents('.js-element') );
					}).fail(function(data){
						console.warn( 'Get element JSON -> fail request' );
						RSGoPro_Area2Darken( $optionObj.parents('.js-element') );
					});
				}
			} else {
				console.warn( 'Get element JSON -> element_id is empty' );
			}
		}
		return false;
	});
	$(document).on('click','.div_selected',function(e){
		$('.offer_prop.opened:not(.prop_'+ $(this).parents('.offer_prop').data('code')+')').removeClass('opened').addClass('closed');
		if( $(this).parents('.offer_prop').hasClass('closed') ) { // was closed 
			$(this).parents('.offer_prop').removeClass('closed').addClass('opened');
		} else { // was opened
			$(this).parents('.offer_prop').removeClass('opened').addClass('closed');
		}
		return false;
	});
	// close prop select by click outside
	$(document).on('click',function(e){
		if( $(e.target).parents('.offer_prop').length>0 && !$(e.target).parents('.offer_prop').hasClass('color') ) {

		} else {
			$('.offer_prop').removeClass('opened').addClass('closed');
		}
	});

});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/bitrix/templates/prostroy/js/popup/script.js?15975745404347";s:6:"source";s:45:"/bitrix/templates/prostroy/js/popup/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGOPRO_PopupPrefix = 'rsgppopup_',
	RSGOPRO_DivsLeft = '<div class="outer"><div class="inner">',
	RSGOPRO_DivsRight = '</div></div>',
	RSGOPRO_ParentsObj;

function RSGoPro_OnOfferChangePopup($elementObj) {
	var finedOfferID = $elementObj.find('.js-add2basketpid').val();
	var element_id = $elementObj.data('elementid');
	if(finedOfferID>0) {
		// image
		if( RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].IMAGES[0].src && 
			RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].IMAGES[0].src.indexOf("redsign_devfunc_nophoto") < 0 && 
			$elementObj.find('.pic img').length>0 ) {
			$elementObj.find('.pic img').attr('src', RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].IMAGES[0].src );
		}
	}
}

function RSGoProPricesJScrollPaneReinitialize() {
	setTimeout(function(){ // fix for slow shit
		var pane2api;
		$('.prs_jscrollpane').parents('.prices').removeClass('jspHasScroll');
		$('.prs_jscrollpane').each(function(i){
			pane2api = $(this).data('jsp');
			pane2api.reinitialise();
			if( $(this).hasClass('jspScrollable') ) {
				$(this).parents('.prices').addClass('jspHasScroll');
			}
		});
	},50);
}

function RSGoPro_FixPreviewText(element_id) {
	var max_h1 = 350;
	var line_h = 18;
	var h1 = $('#'+RSGOPRO_PopupPrefix+element_id).find('.block.right').outerHeight(true);
	if( h1!=null ) {
		if( h1>max_h1 ) {
			var $text = $('#'+RSGOPRO_PopupPrefix+element_id).find('.description').find('.text');
			var res = Math.floor( ($text.outerHeight(true)-(h1-max_h1))/line_h )*line_h;
			$text.css('maxHeight',res+'px');
		}
	}
}

function RSGoPro_GoPopup(element_id,$parentsObj) {
	element_id = parseInt( element_id );
	RSGOPRO_ParentsObj = $parentsObj;
	if(element_id>0) {
		if( $('#'+RSGOPRO_PopupPrefix+element_id).length>0 ) {
			RSGoPro_ShowPopup(element_id);
		} else {
			RSGoPro_AddPopup(element_id);
		}
	} else {
		console.warn( 'GoPopup: element_id is empty' );
	}
}

function RSGoPro_ShowPopup(element_id) {
	RSGoPro_ChangePosition(element_id);
	$('#'+RSGOPRO_PopupPrefix+element_id).fadeIn("fast",function() {
		// Animation complete
		RSGoPro_FixPreviewText(element_id);
		RSGoPro_SetSet();
		//RSGoProPricesJScrollPaneReinitialize();
		RSGoPro_ScrollReinit('.elementpopupinner .prs_jscrollpane', 1);
	});
}

function RSGoPro_HidePopup(element_id) {
	$('#'+RSGOPRO_PopupPrefix+element_id).fadeOut("fast",function() {
		// Animation complete
	});
}
function RSGoPro_ChangePosition(element_id) {
	var $jsPos;
	if( RSGOPRO_ParentsObj.find('td.name').outerWidth(true) > 5 ) {
		$jsPos = RSGOPRO_ParentsObj.find('.js-position');
	} else {
		$jsPos = RSGOPRO_ParentsObj.parents('.artables').find('.js-name'+element_id).find('.js-position');
	}
	var pos_left = $jsPos.position().left + $jsPos.outerWidth(true) + 20; // 20 - td padding
	$('#'+RSGOPRO_PopupPrefix+element_id).css({'top':$jsPos.position().top+'px','left':pos_left+'px'});
}

function RSGoPro_HideAllPopup() {
	$('.rsgppopup:visible').fadeOut("fast",function() {
		// Animation complete
	});
}

function RSGoPro_AddPopup(element_id,$parentsObj) {
	var url = SITE_DIR+SITE_CATALOG_PATH+'/?AJAX_CALL=Y&action=rsgppopup&element_id='+element_id+'';
	var html = '<div id="'+RSGOPRO_PopupPrefix+element_id+'" class="rsgppopup" style="display:none;">'+RSGOPRO_DivsLeft+'<div class="loading"></div>'+RSGOPRO_DivsRight+'</div>';
	$('body').append( html );
	RSGoPro_ShowPopup(element_id);
	$.ajax({
		url: url
	}).done(function(data){
		$('#'+RSGOPRO_PopupPrefix+element_id).find('.inner').html( data );
		RSGoPro_SetSet();
		RSGoPro_FixPreviewText(element_id);
		if( $('.elementpopupinner .prs_jscrollpane').length>0 ) {
			RSGoPro_ScrollInit('.elementpopupinner .prs_jscrollpane');
			$(window).resize(function(){
				RSGoPro_ScrollReinit('.elementpopupinner .prs_jscrollpane', 1);
			});
		}
	}).fail(function() {
		console.warn( 'Popup: wrong ajax request' );
	});
}

$(document).ready(function(){
	
	// listeners
	$(document).on('keydown',function(e){
		if(e.keyCode==27) { // esc
			RSGoPro_HideAllPopup();
		}
	});
	$(document).on('click',function(e){
		if( $(e.target).parents('.rsgppopup').length>0 ) {
			
		} else {
			RSGoPro_HideAllPopup();
		}
	});
	
	// window.resize
	$(window).resize(function(){
		RSGoPro_HideAllPopup();
	});
	
	// change offer
	$(document).on('RSGoProOnOfferChange',function(e,elementObj){
		RSGoPro_OnOfferChangePopup(elementObj);
	});
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/bitrix/templates/prostroy/js/glass/script.js?15975745403907";s:6:"source";s:45:"/bitrix/templates/prostroy/js/glass/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var GLASS_magnify;
var $GLASS_glass;

var GLASS_uip = {
	fadeDelay		: 200,
	native_width	: 0,
	native_height	: 0,
	mouse_x			: 0,
	mouse_y			: 0,
	lupa			: ""
};

// Îïðåäåëÿåì ïîëîæåíèå êóðñîðà
var GLASS_mouseMove = function(e) 
{
	// Ïîëó÷àåì îòñòóïû äî êðàÿ êàðòèíêè ñëåâà è ñâåðõó
	var GLASS_magnify_offset = GLASS_uip.cur_img.offset();
	GLASS_uip.mouse_x = e.pageX - GLASS_magnify_offset.left;
	GLASS_uip.mouse_y = e.pageY - GLASS_magnify_offset.top;

	if(GLASS_uip.mouse_x < GLASS_uip.cur_img.width() && GLASS_uip.mouse_y < GLASS_uip.cur_img.height() && GLASS_uip.mouse_x > 0 && GLASS_uip.mouse_y > 0)
	{ // Åñëè óñëîâèå èñòèííî ïåðåõîäèì äàëüøå
		GLASS_magnify(e);
	} else { // èíà÷å ñêðûâàåì
		GLASS_uip.lupa.hide();
	}
	return;
};

var GLASS_magnify = function(e) 
{
	var rx = Math.round(GLASS_uip.mouse_x/GLASS_uip.cur_img.width()*GLASS_uip.native_width -GLASS_uip.lupa.width()/2)*-1;
	var ry = Math.round(GLASS_uip.mouse_y/GLASS_uip.cur_img.height()*GLASS_uip.native_height - GLASS_uip.lupa.height()/2)*-1;
	var bg_pos = rx + "px " + ry + "px";
	var glasspop_top  = e.pageY - GLASS_uip.cur_img.offset().top - GLASS_uip.lupa.height()/2;
	var glasspop_left = e.pageX - GLASS_uip.cur_img.offset().left - GLASS_uip.lupa.width()/2;
	
	// Òåïåðü ïðèñâàèâàåì ïîëó÷åííûå çíà÷åíèÿ css ñâîéñòâàì ëóïû
	GLASS_uip.lupa.css({
		left				: glasspop_left,
		top					: glasspop_top,
		backgroundPosition	: bg_pos
	});
	return;
};

$(document).ready(function(){
	
	if(!RSDevFunc_PHONETABLET)
	{
		// hide glass on mouseleave
		$(document).on('mouseleave', '.glass_lupa', function(){
			$GLASS_glass = $(this).parents('.glass');
			$GLASS_glass.find('.glass_lupa').removeClass('active').fadeOut(GLASS_uip.fadeDelay);
			$GLASS_glass.find('.js_picture_glass').unbind('mousemove');
		});
		
		// hide/show glass when mouseleave
		$(document).on('mouseleave','.glass',function(){
			if(GLASS_uip.lupa.length)
				GLASS_uip.lupa.fadeOut(GLASS_uip.fadeDelay);
		});
		
		// show glass on mouseenter
		$(document).on('mouseenter', '.js_picture_glass', function(){
			$GLASS_glass = $(this).parents('.glass');
			GLASS_uip.lupa = $GLASS_glass.find('.glass_lupa');
			GLASS_uip.lupa.addClass('active');
			// Äâèæåíèå êóðñîðà íàä èçîáðàæåíèþ
			$(this).parents('.glass').find('.js_picture_glass').on('mousemove',function(){
				GLASS_uip.cur_img = $GLASS_glass.find('.js_picture_glass'); // Òåêóùåå èçîáðàæåíèå
				GLASS_uip.lupa.fadeIn(GLASS_uip.fadeDelay); // Ïëàâíîå ïîÿâëåíèå ëóïû
				var src = GLASS_uip.cur_img.attr('src'); // îïðåäåëÿåì ïóòü äî êàðòèíêè
				if(src) // Åñëè ñóùåñòâóåò src, óñòàíàâëèâàåì ôîí äëÿ ëóïû 
				{
					GLASS_uip.lupa.css({
						'background-image': 'url(' + src + ')',
						'background-repeat': 'no-repeat'
					});
				}
				
				if (!GLASS_uip.cur_img.data('GLASS_native_width') || GLASS_uip.cur_img.data('src')!=src)
				{
					var image_object = new Image();
					image_object.onload = function(){
						// îïðåäåëÿåì ðåàëüíûå ðàçìåðû êàðòèíêè
						GLASS_uip.native_width = image_object.width;
						GLASS_uip.native_height = image_object.height;
						// Çàïèñûâàåì ýòè äàííûå
						GLASS_uip.cur_img.data('GLASS_native_width', GLASS_uip.native_width);
						GLASS_uip.cur_img.data('GLASS_native_height', GLASS_uip.native_height);
						GLASS_uip.cur_img.data('src',src);
						// Âûçûâàåì ôóíêöèþ mouseMove è ïðîèñõîäèò ïîêàç ëóïû 
						GLASS_mouseMove.apply(this, arguments);
						GLASS_uip.lupa.on('mousemove', GLASS_mouseMove);
					};
					image_object.src = src;
					return;
				} else {
					// ïîëó÷àåì ðåàëüíûå ðàçìåðû èçîáðàæåíèÿ  
					GLASS_uip.native_width = GLASS_uip.cur_img.data('GLASS_native_width');
					GLASS_uip.native_height = GLASS_uip.cur_img.data('GLASS_native_height');
				}
				// Âûçûâàåì ôóíêöèþ mouseMove è ïðîèñõîäèò ïîêàç ëóïû
				GLASS_mouseMove.apply(this, arguments);
				GLASS_uip.lupa.on('mousemove', GLASS_mouseMove);
			}); 
		});
	}
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:82:"/bitrix/templates/prostroy/components/bitrix/menu/catalog/script.js?15975745442782";s:6:"source";s:67:"/bitrix/templates/prostroy/components/bitrix/menu/catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_MenuTO = 0;
var RSGoPro_MenuElemHover = false;

function RSGoPro_ElementInMenuPos( $liObj )
{
	var l = 250;
	var $searchObj;
	if( !$liObj.hasClass('first') )
	{
		$searchObj = $liObj.parents('li.first');
	} else {
		$searchObj = $liObj;
	}
	if( $searchObj.find('.elementinmenu').length>0 )
	{
		var c = $('.catalogmenu').find('li.hover').length - 2;
		if( $('.catalogmenu').find('li.hover:last').parent().find('ul').length<1 )
		{
			c = c - 1;
		}
		if( $('.centering:first').width() < 1260 )
		{
			c = c + 5;
		}
		if(c>2)
		{
			$('.catalogmenu').find('li.first.hover').parent().find('.elementinmenu').css({'display':'none'});
		} else {
			$('.catalogmenu').find('li.first.hover').parent().find('.elementinmenu').css({'display':'block','left':(c*l-2)+'px'});
		}
	}
}

$(document).ready(function(){
	
	$('.catalogmenu').on('mouseenter',function(){
		$(this).addClass('hover');
	}).on('mouseleave',function(){
		$(this).removeClass('hover');
	});
	
	var timeoutHover = {};
	$('.catalogmenu a').on('click',function(e){
		var $link = $(this);
		if(!$link.hasClass('hover')){
			e.preventDefault();
			$link.addClass('hover');
		}
	}).on('mouseenter',function(){
		var $link = $(this);
		$link.parent().parent().find('a.hover').removeClass('hover');
		timeoutHover[$link.index()] = setTimeout(function(){
			$link.addClass('hover');
		},150);
	}).on('mouseleave',function(){
		var $link = $(this);
		clearTimeout(timeoutHover[$link.index()]);
		timeoutHover[$link.index()] = setTimeout(function(){
			$link.removeClass('hover');
		},2);
	});
	
	$('.catalogmenu li').on('mouseenter',function(){
		var $liObj = $(this);
		$liObj.parent().find('li.hover').removeClass('hover');
		setTimeout(function(){
			$liObj.addClass('hover');
			RSGoPro_ElementInMenuPos( $liObj );
		},2);
	}).on('mouseleave',function(){
		var $liObj = $(this);
		setTimeout(function(){
			if(!RSGoPro_MenuElemHover)
			{
				$liObj.removeClass('hover')
			}
			RSGoPro_ElementInMenuPos( $liObj );
		},2);
	});
	
	$('.catalogmenu .elementinmenu').on('mouseenter',function(){
		RSGoPro_MenuElemHover = true;
	}).on('mouseleave',function(){
		RSGoPro_MenuElemHover = false;
	});
	
	if(RSDevFunc_PHONETABLET)
	{
		$('.catalogmenusmall a.parent').on('click',function(){
			if($(this).parent().find('ul').hasClass('noned'))
			{
				$(this).parent().find('ul').removeClass('noned');
				return false;
			}
		});
		$(document).on('click',function(){
			var $obj = $(this);
			if(!$('.catalogmenusmall ul.first').hasClass('noned'))
			{
				$('.catalogmenusmall ul.first').addClass('noned');
			}
		});
	} else {
		$('.catalogmenusmall li.parent').on('mouseenter',function(){
			$(this).find('ul').removeClass('noned');
		}).on('mouseleave',function(){
			$(this).find('ul').addClass('noned');
		});
	}
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/prostroy/js/jquery.maskedinput.min.js?15975745404274";s:6:"source";s:55:"/bitrix/templates/prostroy/js/jquery.maskedinput.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.0
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/components/bitrix/search.title/script.min.js?15975746476110";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:52:"/bitrix/components/bitrix/search.title/script.min.js";s:3:"map";s:52:"/bitrix/components/bitrix/search.title/script.map.js";}"*/
function JCTitleSearch(t){var e=this;this.arParams={AJAX_PAGE:t.AJAX_PAGE,CONTAINER_ID:t.CONTAINER_ID,INPUT_ID:t.INPUT_ID,MIN_QUERY_LEN:parseInt(t.MIN_QUERY_LEN)};if(t.WAIT_IMAGE)this.arParams.WAIT_IMAGE=t.WAIT_IMAGE;if(t.MIN_QUERY_LEN<=0)t.MIN_QUERY_LEN=1;this.cache=[];this.cache_key=null;this.startText="";this.running=false;this.currentRow=-1;this.RESULT=null;this.CONTAINER=null;this.INPUT=null;this.WAIT=null;this.ShowResult=function(t){if(BX.type.isString(t)){e.RESULT.innerHTML=t}e.RESULT.style.display=e.RESULT.innerHTML!==""?"block":"none";var s=e.adjustResultNode();var i;var r;var n=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},true);if(n){r=BX.findChild(n,{tag:"th"},true)}if(r){var a=BX.pos(n);a.width=a.right-a.left;var l=BX.pos(r);l.width=l.right-l.left;r.style.width=l.width+"px";e.RESULT.style.width=s.width+l.width+"px";e.RESULT.style.left=s.left-l.width-1+"px";if(a.width-l.width>s.width)e.RESULT.style.width=s.width+l.width-1+"px";a=BX.pos(n);i=BX.pos(e.RESULT);if(i.right>a.right){e.RESULT.style.width=a.right-a.left+"px"}}var o;if(n)o=BX.findChild(e.RESULT,{"class":"title-search-fader"},true);if(o&&r){i=BX.pos(e.RESULT);o.style.left=i.right-i.left-18+"px";o.style.width=18+"px";o.style.top=0+"px";o.style.height=i.bottom-i.top+"px";o.style.display="block"}};this.onKeyPress=function(t){var s=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},true);if(!s)return false;var i;var r=s.rows.length;switch(t){case 27:e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll();return true;case 40:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var n=-1;for(i=0;i<r;i++){if(!BX.findChild(s.rows[i],{"class":"title-search-separator"},true)){if(n==-1)n=i;if(e.currentRow<i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i==r&&e.currentRow!=i)e.currentRow=n;s.rows[e.currentRow].className="title-search-selected";return true;case 38:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var a=-1;for(i=r-1;i>=0;i--){if(!BX.findChild(s.rows[i],{"class":"title-search-separator"},true)){if(a==-1)a=i;if(e.currentRow>i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i<0&&e.currentRow!=i)e.currentRow=a;s.rows[e.currentRow].className="title-search-selected";return true;case 13:if(e.RESULT.style.display=="block"){for(i=0;i<r;i++){if(e.currentRow==i){if(!BX.findChild(s.rows[i],{"class":"title-search-separator"},true)){var l=BX.findChild(s.rows[i],{tag:"a"},true);if(l){window.location=l.href;return true}}}}}return false}return false};this.onTimeout=function(){e.onChange(function(){setTimeout(e.onTimeout,500)})};this.onChange=function(t){if(e.running)return;e.running=true;if(e.INPUT.value!=e.oldValue&&e.INPUT.value!=e.startText){e.oldValue=e.INPUT.value;if(e.INPUT.value.length>=e.arParams.MIN_QUERY_LEN){e.cache_key=e.arParams.INPUT_ID+"|"+e.INPUT.value;if(e.cache[e.cache_key]==null){if(e.WAIT){var s=BX.pos(e.INPUT);var i=s.bottom-s.top-2;e.WAIT.style.top=s.top+1+"px";e.WAIT.style.height=i+"px";e.WAIT.style.width=i+"px";e.WAIT.style.left=s.right-i+2+"px";e.WAIT.style.display="block"}BX.ajax.post(e.arParams.AJAX_PAGE,{ajax_call:"y",INPUT_ID:e.arParams.INPUT_ID,q:e.INPUT.value,l:e.arParams.MIN_QUERY_LEN},function(s){e.cache[e.cache_key]=s;e.ShowResult(s);e.currentRow=-1;e.EnableMouseEvents();if(e.WAIT)e.WAIT.style.display="none";if(!!t)t();e.running=false});return}else{e.ShowResult(e.cache[e.cache_key]);e.currentRow=-1;e.EnableMouseEvents()}}else{e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll()}}if(!!t)t();e.running=false};this.UnSelectAll=function(){var t=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)t.rows[i].className=""}};this.EnableMouseEvents=function(){var t=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)if(!BX.findChild(t.rows[i],{"class":"title-search-separator"},true)){t.rows[i].id="row_"+i;t.rows[i].onmouseover=function(t){if(e.currentRow!=this.id.substr(4)){e.UnSelectAll();this.className="title-search-selected";e.currentRow=this.id.substr(4)}};t.rows[i].onmouseout=function(t){this.className="";e.currentRow=-1}}}};this.onFocusLost=function(t){setTimeout(function(){e.RESULT.style.display="none"},250)};this.onFocusGain=function(){if(e.RESULT.innerHTML.length)e.ShowResult()};this.onKeyDown=function(t){if(!t)t=window.event;if(e.RESULT.style.display=="block"){if(e.onKeyPress(t.keyCode))return BX.PreventDefault(t)}};this.adjustResultNode=function(){var t;var s=BX.findParent(e.CONTAINER,BX.is_fixed);if(!!s){e.RESULT.style.position="fixed";e.RESULT.style.zIndex=BX.style(s,"z-index")+2;t=BX.pos(e.CONTAINER,true)}else{e.RESULT.style.position="absolute";t=BX.pos(e.CONTAINER)}t.width=t.right-t.left;e.RESULT.style.top=t.bottom+2+"px";e.RESULT.style.left=t.left+"px";e.RESULT.style.width=t.width+"px";return t};this._onContainerLayoutChange=function(){if(e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.Init=function(){this.CONTAINER=document.getElementById(this.arParams.CONTAINER_ID);BX.addCustomEvent(this.CONTAINER,"OnNodeLayoutChange",this._onContainerLayoutChange);this.RESULT=document.body.appendChild(document.createElement("DIV"));this.RESULT.className="title-search-result";this.INPUT=document.getElementById(this.arParams.INPUT_ID);this.startText=this.oldValue=this.INPUT.value;BX.bind(this.INPUT,"focus",function(){e.onFocusGain()});BX.bind(this.INPUT,"blur",function(){e.onFocusLost()});this.INPUT.onkeydown=this.onKeyDown;if(this.arParams.WAIT_IMAGE){this.WAIT=document.body.appendChild(document.createElement("DIV"));this.WAIT.style.backgroundImage="url('"+this.arParams.WAIT_IMAGE+"')";if(!BX.browser.IsIE())this.WAIT.style.backgroundRepeat="none";this.WAIT.style.display="none";this.WAIT.style.position="absolute";this.WAIT.style.zIndex="1100"}BX.bind(this.INPUT,"bxchange",function(){e.onChange()})};BX.ready(function(){e.Init(t)})}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/bitrix/templates/prostroy/components/bitrix/search.title/inheader/script.js?1597574543722";s:6:"source";s:76:"/bitrix/templates/prostroy/components/bitrix/search.title/inheader/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function RSGoPro_SearchTitle()
{
	if( $('.title-search-result').length>0 && $('.title-search-result').is(':visible') )
	{
		var trueH = 32, needAdd = false;
		$('.title-search-result').find('.item.catitem').each(function(i){
			if( $(this).outerHeight()>trueH )
			{
				needAdd = true;
				return false;
			}
		});
		if( $('.title-search-result').find('.stitle').hasClass('twolines') && !needAdd  )
		{
			$('.title-search-result').find('.stitle').removeClass('twolines');
		} else if( !$('.title-search-result').find('.stitle').hasClass('twolines') && needAdd )
		{
			$('.title-search-result').find('.stitle').addClass('twolines');
		}
	}
}

$(document).ready(function(){
	
	setInterval(RSGoPro_SearchTitle, 500);
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:86:"/bitrix/templates/prostroy/components/redsign/easycart/gopro/script.js?159757454114373";s:6:"source";s:70:"/bitrix/templates/prostroy/components/redsign/easycart/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSEC_MODULE_IS_HERE = true,
	RSEC_BX_COOKIE_PREFIX = 'BITRIX_SM_',
	RSEC_flag_tension_line = false,
	RSEC_ec_start_coordY = 0,
	RSEC_ec_start_height,
	RSEC_ec_start_height2;

function RSEC_BlockTab()
{
	if( $('#rs_easycart').find('.rsec_tabs').find('.rsec_block').length<1 )
	{
		$('#rs_easycart').find('.rsec_tabs').css({"position":"relative"}).append('<div class="rsec_block"><i class="rsec_ikonka"></i></div>');
	}
}
function RSEC_UnBlockTab()
{
	$('#rs_easycart').find('.rsec_tabs').css({"position":"static"}).find('.rsec_block').remove();
}

function RSEC_SetHeight()
{
	var defaultHeight = 200,
		savedHeight = parseInt($.cookie(RSEC_BX_COOKIE_PREFIX+'RSEC_HEIGHT'));
		maxHeight = $('#rs_easycart').find('.rsec.rsec_headers').offset().top-window.pageYOffset-50;
	if( savedHeight>50 )
	{
		if( savedHeight<maxHeight )
		{
			$('#rs_easycart').find('.rsec_content .rsec_tabs').css({'height':savedHeight+'px'});
		}
	} else {
		$('#rs_easycart').find('.rsec_content .rsec_tabs').css({'height':defaultHeight+'px'});
	}
}

function RSEC_HideEasyCart()
{
	$('#rs_easycart').find('.rsec_content').removeClass('open');
	$('#rs_easycart').find('.rsec_tab').removeClass('selected');
	$('#rs_easycart').find('.rsec_changer').removeClass('selected');
}

function RSEC_SwitchTab($link)
{
	var wasOpened = $('#rs_easycart').find('.rsec_content').hasClass('open');
	var tabWasOpened = $( $link.attr('href') ).hasClass('selected');
	RSEC_SetHeight();
	if( wasOpened && tabWasOpened )
	{
		RSEC_HideEasyCart();
	} else if( wasOpened && !tabWasOpened )
	{
		$('#rs_easycart').find('.rsec_tab').removeClass('selected');
		$( $link.attr('href') ).addClass('selected');
		$('#rs_easycart').find('.rsec_changer').removeClass('selected');
		$link.addClass('selected');
		$('#rs_easycart').find('.rsec_content').addClass('open');
	} else {
		$('#rs_easycart').find('.rsec_tab').removeClass('selected');
		$( $link.attr('href') ).addClass('selected');
		$('#rs_easycart').find('.rsec_changer').removeClass('selected');
		$link.addClass('selected');
		$('#rs_easycart').find('.rsec_content').addClass('open');
	}
}

// VIEWED
function RSEC_VIEWED_Refresh()
{

}

// COMPARE
function RSEC_COMPARE_Refresh()
{
	$(document).trigger('RSEC_BeforeCompareRefresh')
	var url = $('#rs_easycart').data('serviceurl');
	var data = '';
	if( url.indexOf('?',0)>0 )
	{
		url = url + '&rsec_ajax_post=Y&rsec_mode=compare';
	} else {
		url = url + '?rsec_ajax_post=Y&rsec_mode=compare';
	}
	$('#rs_easycart').find('#rsec_compare').find('form').find('input[name^="DELETE_"]').each(function(){
		if( $(this).is(':checked') )
		{
			data = data + $(this).attr('name') + '=' + $(this).val() + '&';
		}
	});
	RSEC_BlockTab();
	$.ajax({
		type: 'POST',
		url: url,
		data: data
	}).done(function(response){
		$('#rs_easycart').find('#rsec_compare').html( response );
		setTimeout(function(){
			$(document).trigger('RSEC_AfterCompareRefreshDone');
		},50);
	}).fail(function(){
		console.warn( 'RSEasyCart -> Compare -> error' );
		$(document).trigger('RSEC_AfterCompareRefreshError');
	}).always(function(){
		if( $('#rs_easycart').find('#rsec_compare').find('.rsec_jsline').length>0 )
		{
			$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_compare').removeClass('rsec_changer_hide');
			$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_compare').find('.rsec_cnt').html( $('#rs_easycart').find('#rsec_compare').find('.rsec_jsline').length );
		} else {
			$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_compare').removeClass('rsec_changer_hide');
			$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_compare').find('.rsec_cnt').html( 0 );
			//$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_compare').addClass('rsec_changer_hide');
			//RSEC_HideEasyCart();
		}
		RSEC_UnBlockTab();
		$(document).trigger('RSEC_AfterCompareRefresh');
	});
}

// FAVORITE
function RSEC_FAVORITE_Refresh()
{
	$(document).trigger('RSEC_BeforeFavoriteRefresh');
	var url = $('#rs_easycart').data('serviceurl');
	var data = '';
	if( url.indexOf('?',0)>0 )
	{
		url = url + '&rsec_ajax_post=Y&rsec_mode=favorite';
	} else {
		url = url + '?rsec_ajax_post=Y&rsec_mode=favorite';
	}
	$('#rs_easycart').find('#rsec_favorite').find('form').find('input[name^="DELETE_"]').each(function(){
		if( $(this).is(':checked') )
		{
			data = data + $(this).attr('name') + '=' + $(this).val() + '&';
		}
	});
	if( $('#rs_easycart').find('#rsec_favorite').find('#rsec_indent').length>0 )
	{
		data = data + $('#rs_easycart').find('#rsec_favorite').find('#rsec_indent').attr('name') + '=' + $('#rs_easycart').find('#rsec_favorite').find('#rsec_indent').val() + '&';
	}
	RSEC_BlockTab();
	$.ajax({
		type: 'POST',
		url: url,
		data: data
	}).done(function(response){
		$('#rs_easycart').find('#rsec_favorite').html( response );
		setTimeout(function(){
			$(document).trigger('RSEC_AfterFavoriteRefreshDone');
		},50);
	}).fail(function(){
		console.warn( 'RSEasyCart -> Favorite -> error' );
		$(document).trigger('RSEC_AfterFavoriteRefreshError');
	}).always(function(){
		if( $('#rs_easycart').find('#rsec_favorite').find('.rsec_jsline').length>0 )
		{
			$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_favorite').removeClass('rsec_changer_hide');
			$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_favorite').find('.rsec_cnt').html( $('#rs_easycart').find('#rsec_favorite').find('.rsec_jsline').length );
		} else {
			$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_favorite').removeClass('rsec_changer_hide');
			$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_favorite').find('.rsec_cnt').html( 0 );
			//$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_favorite').addClass('rsec_changer_hide');
			//RSEC_HideEasyCart();
		}
		RSEC_UnBlockTab();
		$(document).trigger('RSEC_AfterFavoriteRefresh');
	});
}

// BASKET
function RSEC_BASKET_Refresh()
{
	$(document).trigger('RSEC_BeforeBasketRefresh');
	if( $('#rs_easycart').find('#rsec_basket').find('form').length>0 )
	{
		var url = $('#rs_easycart').find('#rsec_basket').find('form').attr('action');
		var data = $('#rs_easycart').find('#rsec_basket').find('form').serialize();
	} else {
		var url = $('#rs_easycart').data('serviceurl');
		var data = '';
	}
	if( url.indexOf('?',0)>0 )
	{
		url = url + '&rsec_ajax_post=Y&rsec_mode=basket';
	} else {
		url = url + '?rsec_ajax_post=Y&rsec_mode=basket';
	}
	RSEC_BlockTab();
	$.ajax({
		type: 'POST',
		url: url,
		data: data
	}).done(function(response){
		$('#rs_easycart').find('#rsec_basket').html( response );
		setTimeout(function(){
			if( $('#rs_easycart').find('#rsec_basket').find('.rsec_take_normalCount').length>0 )
			{
				$('#rs_easycart').find('.rsec_normalCount').html( $('#rs_easycart').find('#rsec_basket').find('.rsec_take_normalCount').html() );
				$('#rs_easycart').find('.rsec_allSum_FORMATED').html( $('#rs_easycart').find('#rsec_basket').find('.rsec_take_allSum_FORMATED').html() );
			} else {
				$('#rs_easycart').find('.rsec_normalCount').html( '0' );
				$('#rs_easycart').find('.rsec_allSum_FORMATED').html( '0' );
			}
			$(document).trigger('RSEC_AfterBasketRefreshDone');
		},50);
	}).fail(function(){
		console.warn( 'RSEasyCart -> Basket -> error' );
		$(document).trigger('RSEC_AfterBasketRefreshError');
	}).always(function(){
		RSEC_UnBlockTab();
		$(document).trigger('RSEC_AfterBasketRefresh');
	});
}

$(document).ready(function(){
	
	// easycart is here
	RSEC_MODULE_IS_HERE = true;
	
	// add padding for body
	if( $('#rs_easycart').hasClass('addbodypadding') )
	{
		$('body').css('padding-bottom','40px');
	}
	
	// tab switcher
	$(document).on('click', '#rs_easycart .rsec_headers .rsec_changer',function(){
		RSEC_SwitchTab( $(this) );
		return false;
	});
	
	// close by outside click
	$(document).on('click',function(e){
		if( $(e.target).parents('#rs_easycart').length>0 )
		{
			
		} else {
			RSEC_HideEasyCart();
		}
	});
	
	// close by close button
	$(document).on('click','#rs_easycart a.rsec_close',function(e){
		RSEC_HideEasyCart();
		return false;
	});
	
	// easycart resize
	$(document).on('mousedown','.rsec_tyanya',function(e){
		RSEC_flag_tension_line = true;
		$('html').addClass('rsec_disableSelection');
		RSEC_ec_start_coordY = e.pageY;
		RSEC_ec_start_height = $('#rs_easycart').find('.rsec_tabs').height();
	});
	$(document).on('mouseup',function(){
		if(RSEC_flag_tension_line)
		{
			RSEC_flag_tension_line = false;
			$('html').removeClass('rsec_disableSelection');
		}
	});
	$(document).mousemove(function(e){
		RSEC_ec_cur_height = $('#rs_easycart').find('.rsec_tabs').height();
		if(RSEC_flag_tension_line && (RSEC_ec_start_height+RSEC_ec_start_coordY-e.pageY)>100)
		{
			$.cookie(RSEC_BX_COOKIE_PREFIX+'RSEC_HEIGHT',(RSEC_ec_start_height+RSEC_ec_start_coordY-e.pageY),'/');
			RSEC_SetHeight();
		}
	});
	
	// quantity
	$(document).on('click','#rs_easycart .rsec_minus',function(){
		var $btn = $(this);
		var ratio = parseFloat( $btn.parent().find('.rsec_quantity').data('ratio') );
		var ration2 = ratio.toString().split('.', 2)[1];
		var length = 0;
		if( ration2!==undefined ) { length = ration2.length; }
		var val = parseFloat( $btn.parent().find('.rsec_quantity').val() );
		if( val>ratio )
		{
			$btn.parent().find('.rsec_quantity').val( (val-ratio).toFixed(length) );
		}
		return false;
	});
	$(document).on('click','#rs_easycart .rsec_plus',function(){
		var $btn = $(this);
		var ratio = parseFloat( $btn.parent().find('.rsec_quantity').data('ratio') );
		var ration2 = ratio.toString().split('.', 2)[1];
		var length = 0;
		if( ration2!==undefined ) { length = ration2.length; }
		var val = parseFloat( $btn.parent().find('.rsec_quantity').val() );
		$btn.parent().find('.rsec_quantity').val( (val+ratio).toFixed(length) );
		return false;
	});
	$(document).on('blur','#rs_easycart .rsec_quantity',function(){
		var $input = $(this);
		var ratio = parseFloat( $input.data('ratio') );
		var ration2 = ratio.toString().split('.', 2)[1];
		var length = 0;
		if( ration2!==undefined ) { length = ration2.length; }
		var val = parseFloat( $input.val() );
		if( val>0 )
		{
			$input.val( (ratio*(Math.floor(val/ratio))).toFixed(length) );
		} else {
			$input.val( ratio );
		}
	});
	$(document).on('mouseenter','#rs_easycart .rsec_quantity',function(){
		$('html').addClass('rsec_disableSelection');
	}).on('mouseleave','#rs_easycart .rsec_quantity',function(){
		$('html').removeClass('rsec_disableSelection');
	});
	
	// VIEWED
	//
	
	// COMPARE
	$(document).on('click','#rs_easycart .rsec_thistab_compare .rsec_delall',function(){
		$(this).parents('form').find('input[name^="DELETE_"]').attr('checked', true);
		RSEC_COMPARE_Refresh();
		return false;
	});
	$(document).on('click','#rs_easycart .rsec_thistab_compare .rsec_delete',function(){
		$(this).parents('.rsec_jsline').find('input[name^="DELETE_"]').attr('checked', true);
		RSEC_COMPARE_Refresh();
		return false;
	});
	$(document).on('click','#rs_easycart .rsec_thistab_compare .rsec_delsome',function(){
		RSEC_COMPARE_Refresh();
		return false;
	});
	
	// FAVORITE
	$(document).on('click','#rs_easycart .rsec_thistab_favorite .rsec_delall',function(){
		$(this).parents('form').find('input[name^="DELETE_"]').attr('checked', true);
		RSEC_FAVORITE_Refresh();
		return false;
	});
	$(document).on('click','#rs_easycart .rsec_thistab_favorite .rsec_delete',function(){
		$(this).parents('.rsec_jsline').find('input[name^="DELETE_"]').attr('checked', true);
		RSEC_FAVORITE_Refresh();
		return false;
	});
	$(document).on('click','#rs_easycart .rsec_thistab_favorite .rsec_delsome',function(){
		RSEC_FAVORITE_Refresh();
		return false;
	});
	
	// BASKET
	var RSEC_BASKET_timeout = 0,
		RSEC_BASKET_delay = 1200;
	$(document).on('click','#rs_easycart .rsec_thistab_basket .rsec_plus, #rs_easycart .rsec_thistab_basket .rsec_minus',function(){
		clearTimeout( RSEC_BASKET_timeout );
		RSEC_BASKET_timeout = setTimeout(function(){
			RSEC_BASKET_Refresh();
		},RSEC_BASKET_delay);
	});
	$(document).on('click','#rs_easycart .rsec_thistab_basket .rsec_delall',function(){
		$(this).parents('form').find('input[name^="DELETE_"]').attr('checked', true);
		RSEC_BASKET_Refresh();
		return false;
	});
	$(document).on('click','#rs_easycart .rsec_thistab_basket .rsec_delete',function(){
		$(this).parents('.rsec_jsline').find('input[name^="DELETE_"]').attr('checked', true);
		RSEC_BASKET_Refresh();
		return false;
	});
	$(document).on('click','#rs_easycart .rsec_thistab_basket .rsec_refresh, #rs_easycart .rsec_thistab_basket .rsec_delsome, #rs_easycart .rsec_thistab_basket .rsec_coup',function(){
		RSEC_BASKET_Refresh();
		return false;
	});
	
	// universal ajax handler
	if( $('#rs_easycart').find('.rsec_universalhandler').length>0 )
	{
		var ajaxFinderCompare_add = '',
			ajaxFinderCompare_remove = '',
			ajaxFinderFavorite = '',
			ajaxFinderBasket = '';
		// COMPARE
		if(  $('#rs_easycart').find('#rsec_compare').hasClass('rsec_universalhandler') )
		{
			ajaxFinderCompare_add = $('#rs_easycart').find('#rsec_compare').data('ajaxfinder_add');
		}
		if(  $('#rs_easycart').find('#rsec_compare').hasClass('rsec_universalhandler') )
		{
			ajaxFinderCompare_remove = $('#rs_easycart').find('#rsec_compare').data('ajaxfinder_remove');
		}
		
		// FAVORITE
		if(  $('#rs_easycart').find('#rsec_favorite').hasClass('rsec_universalhandler') )
		{
			ajaxFinderFavorite = $('#rs_easycart').find('#rsec_favorite').data('ajaxfinder');
		}
		
		// BASKET
		if(  $('#rs_easycart').find('#rsec_basket').hasClass('rsec_universalhandler') )
		{
			ajaxFinderBasket = $('#rs_easycart').find('#rsec_basket').data('ajaxfinder');
		}
		
		if( ajaxFinderCompare_add!='' || ajaxFinderCompare_remove!='' || ajaxFinderFavorite!='' || ajaxFinderBasket!='' )
		{
			$(document).ajaxSuccess(function(event,xhr,settings){
				// COMPARE
				if( (ajaxFinderCompare_add!='' && settings.url.indexOf(ajaxFinderCompare_add,0)>0) || (ajaxFinderCompare_remove!='' && settings.url.indexOf(ajaxFinderCompare_remove,0)>0) )
				{
					RSEC_COMPARE_Refresh();
				}
				// FAVORITE
				if( ajaxFinderFavorite!='' && settings.url.indexOf(ajaxFinderFavorite,0)>0 )
				{
					RSEC_FAVORITE_Refresh();
				}
				// BASKET
				if( ajaxFinderBasket!='' && settings.url.indexOf(ajaxFinderBasket,0)>0 )
				{
					RSEC_BASKET_Refresh();
				}
			});
		}
	}
	
});
/* End */
;; /* /bitrix/templates/prostroy/js/jquery-1.11.0.min.js?159757454096381*/
; /* /bitrix/templates/prostroy/js/jquery.mousewheel.min.js?15975745402737*/
; /* /bitrix/templates/prostroy/js/jquery.cookie.js?15975745403121*/
; /* /bitrix/templates/prostroy/js/jscrollpane/jquery.jscrollpane.min.js?159757454014107*/
; /* /bitrix/templates/prostroy/js/jscrollpane/script.js?15975745407176*/
; /* /bitrix/templates/prostroy/js/jssor/jssor.core.js?15975745407025*/
; /* /bitrix/templates/prostroy/js/jssor/jssor.utils.js?159757454089616*/
; /* /bitrix/templates/prostroy/js/jssor/jssor.slider.min.js?159757454059439*/
; /* /bitrix/templates/prostroy/js/fancybox/jquery.fancybox.pack.js?159757454023135*/
; /* /bitrix/templates/prostroy/js/scrollto/jquery.scrollTo.min.js?15975745402910*/
; /* /bitrix/templates/prostroy/js/jquery.smooth-scroll.min.js?15975745403304*/
; /* /bitrix/templates/prostroy/js/script.js?159757454017420*/
; /* /bitrix/templates/prostroy/js/offers.js?159757454012730*/
; /* /bitrix/templates/prostroy/js/popup/script.js?15975745404347*/
; /* /bitrix/templates/prostroy/js/glass/script.js?15975745403907*/
; /* /bitrix/templates/prostroy/components/bitrix/menu/catalog/script.js?15975745442782*/
; /* /bitrix/templates/prostroy/js/jquery.maskedinput.min.js?15975745404274*/
; /* /bitrix/components/bitrix/search.title/script.min.js?15975746476110*/
; /* /bitrix/templates/prostroy/components/bitrix/search.title/inheader/script.js?1597574543722*/
; /* /bitrix/templates/prostroy/components/redsign/easycart/gopro/script.js?159757454114373*/

//# sourceMappingURL=template_b141819d56b423c4562d1e6bc2293e5a.map.js