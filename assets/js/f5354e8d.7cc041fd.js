"use strict";(self.webpackChunkpipeline_doc=self.webpackChunkpipeline_doc||[]).push([[374],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=i,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},359:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"join-merge",title:"\u8fde\u63a5\u4e0e\u5e76\u96c6"},c=void 0,p={unversionedId:"pipeline/transform/join-merge",id:"pipeline/transform/join-merge",title:"\u8fde\u63a5\u4e0e\u5e76\u96c6",description:"---",source:"@site/docs/pipeline/transform/join-merge.md",sourceDirName:"pipeline/transform",slug:"/pipeline/transform/join-merge",permalink:"/pipeline/transform/join-merge",draft:!1,tags:[],version:"current",frontMatter:{id:"join-merge",title:"\u8fde\u63a5\u4e0e\u5e76\u96c6"},sidebar:"sidebar",previous:{title:"\u8def\u7531",permalink:"/pipeline/transform/route"},next:{title:"\u6570\u636e\u8f93\u51fa",permalink:"/pipeline/sink"}},u={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u6dfb\u52a0\u8fde\u63a5\u8282\u70b9",id:"\u6dfb\u52a0\u8fde\u63a5\u8282\u70b9",level:3},{value:"\u8fde\u63a5\u914d\u7f6e",id:"\u8fde\u63a5\u914d\u7f6e",level:4},{value:"1. \u6dfb\u52a0\u8fde\u63a5\u6761\u4ef6",id:"1-\u6dfb\u52a0\u8fde\u63a5\u6761\u4ef6",level:5},{value:"2. \u9009\u62e9\u5de6\u53f3\u8282\u70b9\u8fde\u63a5\u6761\u4ef6",id:"2-\u9009\u62e9\u5de6\u53f3\u8282\u70b9\u8fde\u63a5\u6761\u4ef6",level:5},{value:"3. \u9009\u62e9\u8fde\u63a5\u89c4\u5219\u4ece\u5de6\u5230\u53f3\u4f9d\u6b21\u662f<code>\u5de6\u8fde\u63a5</code>\u3001<code>\u5185\u8fde\u63a5</code>\u3001<code>\u53f3\u8fde\u63a5</code>",id:"3-\u9009\u62e9\u8fde\u63a5\u89c4\u5219\u4ece\u5de6\u5230\u53f3\u4f9d\u6b21\u662f\u5de6\u8fde\u63a5\u5185\u8fde\u63a5\u53f3\u8fde\u63a5",level:5},{value:"\u6dfb\u52a0\u5e76\u96c6\u8282\u70b9",id:"\u6dfb\u52a0\u5e76\u96c6\u8282\u70b9",level:3}],s={toc:d};function f(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u8fde\u63a5\u8282\u70b9"},"\u6dfb\u52a0\u8fde\u63a5\u8282\u70b9"),(0,o.kt)("p",null,"\u62d6\u62fd\u8282\u70b9\u4e0e\u5176\u4ed6\u8282\u70b9\u78b0\u649e\u9009\u62e9\u83dc\u5355",(0,o.kt)("strong",{parentName:"p"},"[\u8fde\u63a5]"),"\u5373\u53ef\u3002\n",(0,o.kt)("img",{alt:"join.jpg",src:n(4921).Z,width:"1912",height:"900"})),(0,o.kt)("h4",{id:"\u8fde\u63a5\u914d\u7f6e"},"\u8fde\u63a5\u914d\u7f6e"),(0,o.kt)("h5",{id:"1-\u6dfb\u52a0\u8fde\u63a5\u6761\u4ef6"},"1. \u6dfb\u52a0\u8fde\u63a5\u6761\u4ef6"),(0,o.kt)("h5",{id:"2-\u9009\u62e9\u5de6\u53f3\u8282\u70b9\u8fde\u63a5\u6761\u4ef6"},"2. \u9009\u62e9\u5de6\u53f3\u8282\u70b9\u8fde\u63a5\u6761\u4ef6"),(0,o.kt)("h5",{id:"3-\u9009\u62e9\u8fde\u63a5\u89c4\u5219\u4ece\u5de6\u5230\u53f3\u4f9d\u6b21\u662f\u5de6\u8fde\u63a5\u5185\u8fde\u63a5\u53f3\u8fde\u63a5"},"3. \u9009\u62e9\u8fde\u63a5\u89c4\u5219\u4ece\u5de6\u5230\u53f3\u4f9d\u6b21\u662f",(0,o.kt)("inlineCode",{parentName:"h5"},"\u5de6\u8fde\u63a5"),"\u3001",(0,o.kt)("inlineCode",{parentName:"h5"},"\u5185\u8fde\u63a5"),"\u3001",(0,o.kt)("inlineCode",{parentName:"h5"},"\u53f3\u8fde\u63a5")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"join-config.jpg",src:n(7386).Z,width:"1912",height:"905"})),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u5e76\u96c6\u8282\u70b9"},"\u6dfb\u52a0\u5e76\u96c6\u8282\u70b9"),(0,o.kt)("p",null,"\u62d6\u62fd\u8282\u70b9\u4e0e\u5176\u4ed6\u8282\u70b9\u78b0\u649e\u9009\u62e9\u83dc\u5355",(0,o.kt)("strong",{parentName:"p"},"[\u5e76\u96c6]"),"\u5373\u53ef\u3002\n",(0,o.kt)("img",{alt:"merge.jpg",src:n(3233).Z,width:"1912",height:"922"})))}f.isMDXComponent=!0},7386:function(e,t,n){t.Z=n.p+"assets/images/join-config-34b958c975602ad26d17bed64a0fed80.jpg"},4921:function(e,t,n){t.Z=n.p+"assets/images/join-704aa5bc2d5796942c27f3b505dada3a.jpg"},3233:function(e,t,n){t.Z=n.p+"assets/images/merge-755613d9637f05d3c841d74da47d04c6.jpg"}}]);