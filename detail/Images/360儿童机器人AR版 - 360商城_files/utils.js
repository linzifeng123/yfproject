(function(){var e=e||{};e.path={},e.path.queryUrl=function(e,t){e=e.replace(/^[^?=]*\?/ig,"").split("#")[0];var n={};return e.replace(/(^|&)([^&=]+)=([^&]*)/g,function(e,t,r,i){try{r=r.replace(/\+/g," "),r=decodeURIComponent(r)}catch(s){}try{i=i.replace(/\+/g," "),i=decodeURIComponent(i)}catch(s){}r in n?n[r]instanceof Array?n[r].push(i):n[r]=[n[r],i]:n[r]=/\[\]$/.test(r)?[i]:i}),t?n[t]:n},e.path.makeRestfulPath=function(e){var t=[];for(var n in e)e[n]!==undefined&&t.push(["",encodeURIComponent(n),encodeURIComponent(e[n])].join("/"));return t.join("")},e.path.encodeQueryJson=function(e){var t=[];for(var n in e){if(e[n]==null)continue;if(e[n]instanceof Array)for(var r=0;r<e[n].length;r++)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n][r]));else t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))}return t.join("&")},e.path.getFromHash=function(e){var t=location.hash;if(!t)return e===undefined?{}:"";var n={};return t=t.split("#")[1],t.replace(/(^|&)([^&=]+)=([^&]*)/g,function(e,t,r,i){try{r=decodeURIComponent(r)}catch(s){}try{i=decodeURIComponent(i)}catch(s){}r in n?n[r]instanceof Array?n[r].push(i):n[r]=[n[r],i]:n[r]=/\[\]$/.test(r)?[i]:i}),e?n[e]:n},window.utils=e})();