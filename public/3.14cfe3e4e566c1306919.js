(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{87:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),c=n.n(i);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,e);var t,n,r,i=s(c);function c(){return u(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:this.props.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}}])&&l(t.prototype,n),r&&l(t,r),c}(r.PureComponent);b.propTypes={color:c.a.string};var m=b;function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(c,e);var t,n,r,i=g(c);function c(){return v(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){requestAnimationFrame((function(){e.about.classList.add("animate")}))}),50)}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{ref:function(t){return e.about=t},className:"about"},o.a.createElement("a",{role:"button",className:"close",onClick:this.props.history.goBack,title:"close"},o.a.createElement(m,{color:"#000"})),o.a.createElement("div",{className:"content"},o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"MARVEL API Explorer is a personal project made by ",o.a.createElement("a",{title:"Ion Drimba Filho Potfolio",className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://iondrimbafilho.me/"},"Ion Drimba Filho")," using ReactJS + Redux and the oficial ",o.a.createElement("a",{title:"Marvel API",className:"link",target:"_blank",rel:"noopener noreferrer",href:"http://developer.marvel.com/"},"Marvel API"),".",o.a.createElement("br",null),"It also works as a PWA."),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/iondrimba/marvel-api-explorer",className:"github",title:"Github"},o.a.createElement("img",{src:"/images/github.svg",alt:"Github icon",width:"32",height:"32"}))))}}])&&d(t.prototype,n),r&&d(t,r),c}(r.PureComponent);k.propTypes={history:c.a.object};t.default=k}}]);