var e,t,n,r,o,_,i={},l=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function a(t,n,r){var o,_,i,l={};for(i in n)"key"==i?o=n[i]:"ref"==i?_=n[i]:l[i]=n[i];if(arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return h(t,l,o,_,null)}function h(e,r,o,_,i){var l={type:e,props:r,key:o,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++n:i};return null==i&&null!=t.vnode&&t.vnode(l),l}function p(e){return e.children}function f(e,t){this.props=e,this.context=t}function d(e,t){if(null==t)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?d(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function m(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!y.__r++||o!==t.debounceRendering)&&((o=t.debounceRendering)||setTimeout)(y)}function y(){for(var e;y.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,r,o,_,i;e.__d&&(_=(o=(t=e).__v).__e,(i=t.__P)&&(n=[],(r=c({},o)).__v=o.__v+1,N(i,o,r,t.__n,void 0!==i.ownerSVGElement,null!=o.__h?[_]:null,n,null==_?d(o):_,o.__h),L(n,o),o.__e!=_&&v(o)))}))}function g(e,t,n,r,o,_,s,c,u,a){var f,v,m,y,g,$,w,E=r&&r.__k||l,x=E.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(y=n.__k[f]=null==(y=t[f])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?h(null,y,null,null,y):Array.isArray(y)?h(p,{children:y},null,null,null):y.__b>0?h(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(m=E[f])||m&&y.key==m.key&&y.type===m.type)E[f]=void 0;else for(v=0;v<x;v++){if((m=E[v])&&y.key==m.key&&y.type===m.type){E[v]=void 0;break}m=null}N(e,y,m=m||i,o,_,s,c,u,a),g=y.__e,(v=y.ref)&&m.ref!=v&&(w||(w=[]),m.ref&&w.push(m.ref,null,y),w.push(v,y.__c||g,y)),null!=g?(null==$&&($=g),"function"==typeof y.type&&y.__k===m.__k?y.__d=u=b(y,u,e):u=k(e,y,m,E,g,u),"function"==typeof n.type&&(n.__d=u)):u&&m.__e==u&&u.parentNode!=e&&(u=d(m))}for(n.__e=$,f=x;f--;)null!=E[f]&&H(E[f],E[f]);if(w)for(f=0;f<w.length;f++)A(w[f],w[++f],w[++f])}function b(e,t,n){for(var r,o=e.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=e,t="function"==typeof r.type?b(r,t,n):k(n,r,r,o,r.__e,t));return t}function $(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){$(e,t)})):t.push(e)),t}function k(e,t,n,r,o,_){var i,l,s;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||o!=_||null==o.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(o),i=null;else{for(l=_,s=0;(l=l.nextSibling)&&s<r.length;s+=2)if(l==o)break e;e.insertBefore(o,_),i=_}return void 0!==i?i:o.nextSibling}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function E(e,t,n,r,o){var _;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||w(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||w(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r||e.addEventListener(t,_?C:x,_):e.removeEventListener(t,_?C:x,_);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function x(e){this.l[e.type+!1](t.event?t.event(e):e)}function C(e){this.l[e.type+!0](t.event?t.event(e):e)}function N(e,n,r,o,_,i,l,s,u){var a,h,d,v,m,y,b,$,k,w,E,x,C,N,L,A=n.type;if(void 0!==n.constructor)return null;null!=r.__h&&(u=r.__h,s=n.__e=r.__e,n.__h=null,i=[s]),(a=t.__b)&&a(n);try{e:if("function"==typeof A){if($=n.props,k=(a=A.contextType)&&o[a.__c],w=a?k?k.props.value:a.__:o,r.__c?b=(h=n.__c=r.__c).__=h.__E:("prototype"in A&&A.prototype.render?n.__c=h=new A($,w):(n.__c=h=new f($,w),h.constructor=A,h.render=S),k&&k.sub(h),h.props=$,h.state||(h.state={}),h.context=w,h.__n=o,d=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=A.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=c({},h.__s)),c(h.__s,A.getDerivedStateFromProps($,h.__s))),v=h.props,m=h.state,d)null==A.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==A.getDerivedStateFromProps&&$!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps($,w),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate($,h.__s,w)||n.__v===r.__v){for(h.props=$,h.state=h.__s,n.__v!==r.__v&&(h.__d=!1),h.__v=n,n.__e=r.__e,n.__k=r.__k,n.__k.forEach((function(e){e&&(e.__=n)})),E=0;E<h._sb.length;E++)h.__h.push(h._sb[E]);h._sb=[],h.__h.length&&l.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate($,h.__s,w),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(v,m,y)}))}if(h.context=w,h.props=$,h.__v=n,h.__P=e,x=t.__r,C=0,"prototype"in A&&A.prototype.render){for(h.state=h.__s,h.__d=!1,x&&x(n),a=h.render(h.props,h.state,h.context),N=0;N<h._sb.length;N++)h.__h.push(h._sb[N]);h._sb=[]}else do{h.__d=!1,x&&x(n),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++C<25);h.state=h.__s,null!=h.getChildContext&&(o=c(c({},o),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(y=h.getSnapshotBeforeUpdate(v,m)),L=null!=a&&a.type===p&&null==a.key?a.props.children:a,g(e,Array.isArray(L)?L:[L],n,r,o,_,i,l,s,u),h.base=n.__e,n.__h=null,h.__h.length&&l.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==i&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=M(r.__e,n,r,o,_,i,l,u);(a=t.diffed)&&a(n)}catch(e){n.__v=null,(u||null!=i)&&(n.__e=s,n.__h=!!u,i[i.indexOf(s)]=null),t.__e(e,n,r)}}function L(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function M(t,n,r,o,_,l,s,c){var a,h,p,f=r.props,v=n.props,m=n.type,y=0;if("svg"===m&&(_=!0),null!=l)for(;y<l.length;y++)if((a=l[y])&&"setAttribute"in a==!!m&&(m?a.localName===m:3===a.nodeType)){t=a,l[y]=null;break}if(null==t){if(null===m)return document.createTextNode(v);t=_?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),l=null,c=!1}if(null===m)f===v||c&&t.data===v||(t.data=v);else{if(l=l&&e.call(t.childNodes),h=(f=r.props||i).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=l)for(f={},y=0;y<t.attributes.length;y++)f[t.attributes[y].name]=t.attributes[y].value;(p||h)&&(p&&(h&&p.__html==h.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(e,t,n,r,o){var _;for(_ in n)"children"===_||"key"===_||_ in t||E(e,_,null,n[_],r);for(_ in t)o&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===t[_]||E(e,_,t[_],n[_],r)}(t,v,f,_,c),p)n.__k=[];else if(y=n.props.children,g(t,Array.isArray(y)?y:[y],n,r,o,_&&"foreignObject"!==m,l,s,l?l[0]:r.__k&&d(r,0),c),null!=l)for(y=l.length;y--;)null!=l[y]&&u(l[y]);c||("value"in v&&void 0!==(y=v.value)&&(y!==t.value||"progress"===m&&!y||"option"===m&&y!==f.value)&&E(t,"value",y,f.value,!1),"checked"in v&&void 0!==(y=v.checked)&&y!==t.checked&&E(t,"checked",y,f.checked,!1))}return t}function A(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function H(e,n,r){var o,_;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||A(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(_=0;_<o.length;_++)o[_]&&H(o[_],n,r||"function"!=typeof e.type);r||null==e.__e||u(e.__e),e.__=e.__e=e.__d=void 0}function S(e,t,n){return this.constructor(e,n)}function P(n,r,o){var _,l,s;t.__&&t.__(n,r),l=(_="function"==typeof o)?null:o&&o.__k||r.__k,s=[],N(r,n=(!_&&o||r).__k=a(p,null,[n]),l||i,i,void 0!==r.ownerSVGElement,!_&&o?[o]:l?null:r.firstChild?e.call(r.childNodes):null,s,!_&&o?o:l?l.__e:r.firstChild,_),L(s,n)}function U(e,t){P(e,t,U)}function T(t,n,r){var o,_,i,l=c({},t.props);for(i in n)"key"==i?o=n[i]:"ref"==i?_=n[i]:l[i]=n[i];return arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):r),h(t.type,l,o||t.key,_||t.ref,null)}function j(e,t){var n={__c:t="__cC"+_++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(m)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}e=l.slice,t={__e:function(e,t,n,r){for(var o,_,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((_=o.constructor)&&null!=_.getDerivedStateFromError&&(o.setState(_.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(t){e=t}throw e}},n=0,f.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),m(this))},f.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},f.prototype.render=p,r=[],y.__r=0,_=0;var R=function(e,t,n,r){var o;t[0]=0;for(var _=1;_<t.length;_++){var i=t[_++],l=t[_]?(t[0]|=i?1:2,n[t[_++]]):t[++_];3===i?r[0]=l:4===i?r[1]=Object.assign(r[1]||{},l):5===i?(r[1]=r[1]||{})[t[++_]]=l:6===i?r[1][t[++_]]+=l+"":i?(o=e.apply(l,R(e,l,n,["",null])),r.push(o),l[0]?t[0]|=2:(t[_-2]=0,t[_]=o)):r.push(l)}return r},D=new Map;var B,F,q,I,W=function(e){var t=D.get(this);return t||(t=new Map,D.set(this,t)),(t=R(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,o="",_="",i=[0],l=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,o):3===r&&(e||o)?(i.push(3,e,o),r=2):2===r&&"..."===o&&e?i.push(4,e,0):2===r&&o&&!e?i.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(i.push(r,0,o,n),r=6),e&&(i.push(r,e,0,n),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&l(),l(s));for(var c=0;c<e[s].length;c++)t=e[s][c],1===r?"<"===t?(l(),i=[i],r=3):o+=t:4===r?"--"===o&&">"===t?(r=1,o=""):o=t+o[0]:_?t===_?_="":o+=t:'"'===t||"'"===t?_=t:">"===t?(l(),r=1):r&&("="===t?(r=5,n=o,o=""):"/"===t&&(r<5||">"===e[s][c+1])?(l(),3===r&&(i=i[0]),r=i,(i=i[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(l(),r=2):o+=t),3===r&&"!--"===o&&(r=4,i=i[0])}return l(),i}(e)),t),arguments,[])).length>1?t:t[0]}.bind(a),V=0,O=[],X=[],K=t.__b,z=t.__r,Y=t.diffed,G=t.__c,J=t.unmount;function Q(e,n){t.__h&&t.__h(F,e,V||n),V=0;var r=F.__H||(F.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:X}),r.__[e]}function Z(e){return V=1,ee(pe,e)}function ee(e,t,n){var r=Q(B++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):pe(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=F,!F.u)){F.u=!0;var o=F.shouldComponentUpdate;F.shouldComponentUpdate=function(e,t,n){if(!r.__c.__H)return!0;var _=r.__c.__H.__.filter((function(e){return e.__c}));if(_.every((function(e){return!e.__N})))return!o||o.call(this,e,t,n);var i=!1;return _.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(i=!0)}})),!(!i&&r.__c.props===e)&&(!o||o.call(this,e,t,n))}}return r.__N||r.__}function te(e,n){var r=Q(B++,3);!t.__s&&he(r.__H,n)&&(r.__=e,r.i=n,F.__H.__h.push(r))}function ne(e,n){var r=Q(B++,4);!t.__s&&he(r.__H,n)&&(r.__=e,r.i=n,F.__h.push(r))}function re(e){return V=5,oe((function(){return{current:e}}),[])}function oe(e,t){var n=Q(B++,7);return he(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function _e(e,t){return V=8,oe((function(){return e}),t)}function ie(e){var t=F.context[e.__c],n=Q(B++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(F)),t.props.value):e.__}function le(){for(var e;e=O.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ue),e.__H.__h.forEach(ae),e.__H.__h=[]}catch(F){e.__H.__h=[],t.__e(F,e.__v)}}t.__b=function(e){"function"!=typeof e.type||e.__m||null===e.__?e.__m||(e.__m=e.__&&e.__.__m?e.__.__m:""):e.__m=(e.__&&e.__.__m?e.__.__m:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),F=null,K&&K(e)},t.__r=function(e){z&&z(e),B=0;var t=(F=e.__c).__H;t&&(q===F?(t.__h=[],F.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=X,e.__N=e.i=void 0}))):(t.__h.forEach(ue),t.__h.forEach(ae),t.__h=[])),q=F},t.diffed=function(e){Y&&Y(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==O.push(n)&&I===t.requestAnimationFrame||((I=t.requestAnimationFrame)||ce)(le)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==X&&(e.__=e.__V),e.i=void 0,e.__V=X}))),q=F=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(ue),e.__h=e.__h.filter((function(e){return!e.__||ae(e)}))}catch(q){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(q,e.__v)}})),G&&G(e,n)},t.unmount=function(e){J&&J(e);var n,r=e.__c;r&&r.__H&&(r.__H.__.forEach((function(e){try{ue(e)}catch(e){n=e}})),r.__H=void 0,n&&t.__e(n,r.__v))};var se="function"==typeof requestAnimationFrame;function ce(e){var t,n=function(){clearTimeout(r),se&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);se&&(t=requestAnimationFrame(n))}function ue(e){var t=F,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),F=t}function ae(e){var t=F;e.__c=e.__(),F=t}function he(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function pe(e,t){return"function"==typeof t?t(e):t}let fe;const de=(e,t)=>{if(fe=void 0,t&&"click"===t.type){if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)return e;const n=t.target.closest("a[href]");if(!n||n.origin!=location.origin||/^#/.test(n.getAttribute("href"))||!/^(_?self)?$/i.test(n.target))return e;fe=!0,t.preventDefault(),t=n.href.replace(location.origin,"")}else"string"==typeof t?fe=!0:t=location.pathname+location.search;return!0===fe?history.pushState(null,"",t):!1===fe&&history.replaceState(null,"",t),t};function ve(e){const[t,n]=ee(de,e.url||location.pathname+location.search),r=!0===fe,o=oe((()=>{const e=new URL(t,location.origin),o=e.pathname.replace(/(.)\/$/g,"$1");return{url:t,path:o,query:Object.fromEntries(e.searchParams),route:n,wasPush:r}}),[t]);return ne((()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)})),[]),a(ve.ctx.Provider,{value:o},e.children)}const me=Promise.resolve();function ye(e){const[t,n]=ee((e=>e+1),0),{url:r,query:o,wasPush:_,path:i}=ke(),{rest:l=i,params:s={}}=ie(be),c=re(!1),u=re(i),h=re(0),p=re(),f=re(),d=re(),v=re(!1),m=re();m.current=!1,p.current=oe((()=>{let t,n,r;return this.__v&&this.__v.__k&&this.__v.__k.reverse(),h.current++,f.current=p.current,$(e.children).some((e=>{if(((e,t,n)=>{e=e.split("/").filter(Boolean),t=(t||"").split("/").filter(Boolean);for(let r,o,_=0;_<Math.max(e.length,t.length);_++){let[,i,l,s]=(t[_]||"").match(/^(:?)(.*?)([+*?]?)$/);if(r=e[_],i||l!=r){if(!i&&r&&"*"==s){n.rest="/"+e.slice(_).map(decodeURIComponent).join("/");break}if(!i||!r&&"?"!=s&&"*"!=s)return;if(o="+"==s||"*"==s,o?r=e.slice(_).map(decodeURIComponent).join("/"):r&&(r=decodeURIComponent(r)),n.params[l]=r,l in n||(n[l]=r),o)break}}return n})(l,e.props.path,r={path:l,query:o,params:s,rest:""}))return t=T(e,r);e.props.default&&(n=T(e,r))})),a(be.Provider,{value:r},t||n)}),[r]);const y=f.current;return f.current=null,this.__c=t=>{m.current=!0,f.current=y,e.onLoadStart&&e.onLoadStart(r),c.current=!0;let o=h.current;t.then((()=>{o===h.current&&(f.current=null,me.then(n))}))},ne((()=>{const t=this.__v&&this.__v.__e;m.current?v.current||d.current||(d.current=t):(!v.current&&d.current&&(d.current!==t&&d.current.remove(),d.current=null),v.current=!0,u.current!==i&&(_&&scrollTo(0,0),e.onLoadEnd&&c.current&&e.onLoadEnd(r),e.onRouteChange&&e.onRouteChange(r),c.current=!1,u.current=i))}),[i,_,t]),[a(ge,{r:p}),a(ge,{r:f})]}const ge=({r:e})=>e.current;ye.Provider=ve,ve.ctx=j({});const be=j({}),$e=e=>a(e.component,e),ke=()=>ie(ve.ctx);function we(e){let t,n;return r=>{const[,o]=Z(0),_=re(n);if(t||(t=e().then((e=>n=e&&e.default||e))),void 0!==n)return a(n,r);throw _.current||(_.current=t.then((()=>o(1)))),t}}const Ee=t.__e;function xe(e){return this.__c=Ce,this.componentDidCatch=e.onError,e.children}function Ce(e){e.then((()=>this.forceUpdate()))}let Ne;function Le(e){if("undefined"==typeof document)wmr.ssr.head.elements.add({type:"link",props:{rel:"stylesheet",href:e}});else{if(document.querySelector('link[rel=stylesheet][href="'+e+'"]'))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}t.__e=(e,t,n)=>{if(e&&e.then){let r=t;for(;r=r.__;)if(r.__c&&r.__c.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),t.__k||(t.__k=[]),r.__c.__c(e,t)}Ee&&Ee(e,t,n)},Le("/assets/style.module.e4db875f.css");const Me={header:"header_limv23",mobile:"mobile_limv23",desktop:"desktop_limv23",logo:"logo_limv23",navToggleBtn:"navToggleBtn_limv23",closeMenuBtn:"closeMenuBtn_limv23",openMenuBtn:"openMenuBtn_limv23",primaryNav:"primaryNav_limv23",socialsNav:"socialsNav_limv23",mobileNav:"mobileNav_limv23",closeNav:"closeNav_limv23",openNav:"openNav_limv23",mouseInteractable:"mouseInteractable_limv23",mouseNotMoved:"mouseNotMoved_limv23",scrolled:"scrolled_limv23"};function Ae(e){let t,n=e[0],r=1;for(;r<e.length;){const o=e[r],_=e[r+1];if(r+=2,("optionalAccess"===o||"optionalCall"===o)&&null==n)return;"access"===o||"optionalAccess"===o?(t=n,n=_(n)):"call"!==o&&"optionalCall"!==o||(n=_(((...e)=>n.call(t,...e))),t=void 0)}return n}const He=()=>{const[e,t]=Z(!0),[n,r]=Z(!1),o=re(null),_=re(null),i=re(null),l=re([]),s=_e((()=>{t(matchMedia("(max-width: 750px)").matches)}),[]),c=_e((()=>r((e=>!e))),[]);te((()=>{e||r(!1)}),[e]);const u=_e((t=>{n&&e&&null!==t.target&&(Ae([i,"access",e=>e.current,"optionalAccess",e=>e.contains,"call",e=>e(t.target)])||(t.preventDefault(),r(!1)))}),[n]);te((()=>{if(e&&n)return document.addEventListener("click",u,{once:!0}),()=>document.removeEventListener("click",u)}),[e]);const a=_e((({clientX:e,clientY:t})=>{l.current.forEach((n=>{if(null===n)return;n.classList.remove(Me.mouseNotMoved);const{x:r,y:o}=n.getBoundingClientRect();n.style.setProperty("--mouse-x",e-r+"px"),n.style.setProperty("--mouse-y",t-o+"px")}))}),[]);return te((()=>{document.addEventListener("scroll",(()=>{Ae([_,"access",e=>e.current,"optionalAccess",e=>e.classList,"access",e=>e.toggle,"call",e=>e(Me.scrolled,window.scrollY>16)])}))}),[]),te((()=>{window.addEventListener("resize",s),s(),l.current.push(o.current),l.current.forEach((e=>{null!=e&&(e.classList.add(Me.mouseInteractable),e.classList.add(Me.mouseNotMoved),e.addEventListener("custom:mouseover",(({detail:{element:t,preventDefault:n}})=>{n();const{borderRadius:r}=getComputedStyle(e),{x:o,y:_,width:i,height:l}=e.getBoundingClientRect();t.animate({translate:`${o}px ${_}px`,width:i+"px",height:l+"px",borderRadius:r,opacity:0},{fill:"both",duration:750,easing:"ease-in-out"})})))}));const e=getComputedStyle(_.current).height;return document.body.style.paddingTop=e,Ae([o,"access",e=>e.current,"optionalAccess",e=>e.addEventListener,"call",e=>e("click",c)]),document.addEventListener("mousemove",a),()=>{window.removeEventListener("resize",s),document.removeEventListener("mousemove",a),Ae([o,"access",e=>e.current,"optionalAccess",e=>e.removeEventListener,"call",e=>e("click",c)])}}),[]),W`<header class=${[Me.header,e?Me.mobile:Me.desktop].join(" ")} ref=${_}><h2 class=${Me.logo}>Medwin</h2><button type="button" aria-hidden=${!0} style=${e?{}:{display:"none"}} class=${Me.navToggleBtn} ref=${o}><img src=${"/assets/menu.5ac320c1.svg"} class=${Me.openMenuBtn} style=${{opacity:n?0:1}} width=${32} height=${32}/><img src=${"/assets/close-menu.abe8a29d.svg"} class=${Me.closeMenuBtn} style=${{opacity:n?1:0}} width=${32} height=${32}/></button><nav class=${Me.primaryNav} aria-hidden=${!0} style=${e?{display:"none"}:{}}><a href="/" ref=${e=>l.current.push(e)}>Home</a><a href="/projects" ref=${e=>l.current.push(e)}>Projects</a><a href="/resume" ref=${e=>l.current.push(e)}>Resume</a><a href="/contact" ref=${e=>l.current.push(e)}>Contact</a></nav><div class=${Me.socialsNav} aria-hidden=${!0} style=${e?{display:"none"}:{}}><a href="https://www.instagram.com/Medwin_Manoj/" ref=${e=>l.current.push(e)}><img src=${"/assets/instagram.218e04a7.svg"} width=${24} height=${24}/></a><a href="https://github.com/Xaviour04" ref=${e=>l.current.push(e)}><img src=${"/assets/github.96fa2d8b.svg"} width=${24} height=${24}/></a></div></header><nav class=${[Me.mobileNav,n?Me.openNav:Me.closeNav].join(" ")}><h3 class="titles">Navigation</h3><a href="/" ref=${e=>l.current.push(e)}><img src=${"/assets/home.f8176e2d.svg"} width=${24} height=${24}/><span>Home</span></a><a href="/projects" ref=${e=>l.current.push(e)}><img src=${"/assets/projects.434669ff.svg"} width=${24} height=${24}/><span>Projects</span></a><a href="/resume" ref=${e=>l.current.push(e)}><img src=${"/assets/resume.07928482.svg"} width=${24} height=${24}/><span>Resume</span></a><a href="/contact" ref=${e=>l.current.push(e)}><img src=${"/assets/contact.584d2858.svg"} width=${24} height=${24}/><span>Contact</span></a><h3 class="titles">Socials</h3><a href="https://www.instagram.com/Medwin_Manoj/" ref=${e=>l.current.push(e)}><img src=${"/assets/instagram.218e04a7.svg"} width=${24} height=${24}/><span>@Medwin_Manoj</span></a><a href="https://github.com/Xaviour04" ref=${e=>l.current.push(e)}><img src=${"/assets/github.96fa2d8b.svg"} width=${24} height=${24}/><span>Xaviour04</span></a></nav>`};function Se(e){let t,n=e[0],r=1;for(;r<e.length;){const o=e[r],_=e[r+1];if(r+=2,("optionalAccess"===o||"optionalCall"===o)&&null==n)return;"access"===o||"optionalAccess"===o?(t=n,n=_(n)):"call"!==o&&"optionalCall"!==o||(n=_(((...e)=>n.call(t,...e))),t=void 0)}return n}const Pe=()=>{const e=re(null),[t,n]=Z(!1);return te((()=>{n(window.matchMedia("(pointer: fine)").matches);const t=({target:t,clientX:n,clientY:r})=>{const o=Se([e,"access",e=>e.current,"optionalAccess",e=>e.animate,"call",e=>e({translate:`${n-20}px ${r-20}px`,width:"40px",height:"40px",borderRadius:"50%",opacity:1,scale:1},{fill:"forwards",duration:750,easing:"ease-in-out"})]),_=new CustomEvent("custom:mouseover",{detail:{element:e.current,preventDefault:()=>{Se([o,"optionalAccess",e=>e.cancel,"call",e=>e()])}},bubbles:!0,cancelable:!0,composed:!0});Se([t,"optionalAccess",e=>e.dispatchEvent,"call",e=>e(_)])};return document.addEventListener("mousemove",t),document.addEventListener("mouseover",t,{once:!0}),document.addEventListener("mouseleave",(()=>{Se([e,"access",e=>e.current,"optionalAccess",e=>e.animate,"call",e=>e({opacity:0},{duration:500,fill:"both"})])})),()=>{document.removeEventListener("mousemove",t)}}),[]),W`<span aria-hidden=${!0} ref=${e} style=${{display:t?"inline":"none",position:"fixed",top:0,left:0,width:40,height:40,border:"1px solid rgb(255 255 255 / 50%)",borderRadius:"50%",translate:"960px 540px",scale:0,pointerEvents:"none",opacity:0}}/>`},Ue=we((()=>import("./chunks/_404.727c7bbe.js"))),Te=we((()=>import("./chunks/index.5193e7c4.js"))),je=()=>(te((()=>{window.onload=()=>{document.dispatchEvent(new Event("custom:loadend"))},document.dispatchEvent(new Event("custom:loadend"))}),[]),W`<${ve}><${He}/><${Pe}/><${xe}><${ye} onLoadStart=${()=>document.dispatchEvent(new Event("custom:loadstart"))} onLoadEnd=${()=>document.dispatchEvent(new Event("custom:loadend"))}><${$e} path="/" component=${Te}/><${$e} default component=${Ue}/><//><//><//>`);async function Re(){return await(e=W`<${je}/>`,import("./chunks/prerender.24a4576b.js").then((n=>n.default(e,t))));var e,t}!function(e,t){if("undefined"==typeof window)return;let n=document.querySelector("script[type=isodata]");t=t||n&&n.parentNode||document.body,!Ne&&n?U(e,t):P(e,t),Ne=!0}(W`<${je}/>`);export{je as App,a as h,t as l,W as m,p,Re as prerender,T as q,Le as s};