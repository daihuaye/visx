(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"/W13":function(x){x.exports=JSON.parse('{"name":"@visx/demo-drag-ii","description":"Standalone visx drag demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/curve":"latest","@visx/drag":"latest","@visx/gradient":"latest","@visx/responsive":"latest","@visx/shape":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","drag","draw"]}')},KMjC:function(x,y,e){"use strict";e.d(y,"a",(function(){return u}));var t=e("fGyu"),a=e("yFcC"),r=e.n(a),n=e("ERkP"),i=e.n(n),s=e("geX1"),o=e("cJAf"),d=e("m+Ft"),c=e("Cf/J"),l=i.a.createElement;function u(x){var y=x.data,e=void 0===y?[]:y,a=x.width,i=x.height,u=Object(n.useState)(e),p=u[0],g=u[1];return a<10?null:l("div",{style:{touchAction:"none"},className:"jsx-3733691427 DragII"},l("svg",{width:a,height:i,className:"jsx-3733691427"},l(c.a,{id:"stroke",from:"#ff614e",to:"#ffdc64"}),l("rect",{fill:"#04002b",width:a,height:i,rx:14,className:"jsx-3733691427"}),p.map((function(x,y){return l(s.a,{key:"line-".concat(y),fill:"transparent",stroke:"url(#stroke)",strokeWidth:3,data:x,curve:d.b,x:function(x){return x.x},y:function(x){return x.y}})})),l(o.a,{width:a,height:i,resetOnStart:!0,onDragStart:function(x){var y=x.x,e=void 0===y?0:y,a=x.y,r=void 0===a?0:a;g((function(x){return[].concat(Object(t.a)(x),[[{x:e,y:r}]])}))},onDragMove:function(x){var y=x.x,e=void 0===y?0:y,a=x.y,r=void 0===a?0:a,n=x.dx,i=x.dy;g((function(x){var y=Object(t.a)(x),a={x:e+n,y:r+i},s=y.length-1;return y[s]=[].concat(Object(t.a)(y[s]||[]),[a]),y}))}},(function(x){var y=x.x,e=void 0===y?0:y,t=x.y,r=void 0===t?0:t,n=x.dx,s=x.dy,o=x.isDragging,d=x.dragStart,c=x.dragEnd,u=x.dragMove;return l("g",{className:"jsx-3733691427"},o&&l("g",{className:"jsx-3733691427"},l("rect",{fill:"white",width:8,height:8,x:e+n-4,y:r+s-4,pointerEvents:"none",className:"jsx-3733691427"}),l("circle",{cx:e,cy:r,r:4,fill:"transparent",stroke:"white",pointerEvents:"none",className:"jsx-3733691427"})),l("rect",{fill:"transparent",width:a,height:i,onMouseDown:d,onMouseUp:c,onMouseMove:u,onTouchStart:d,onTouchEnd:c,onTouchMove:u,className:"jsx-3733691427"}))}))),l("div",{className:"jsx-3733691427 deets"},l("div",{className:"jsx-3733691427"},"Based on Mike Bostock's"," ",l("a",{href:"https://bl.ocks.org/mbostock/f705fc55e6f26df29354",className:"jsx-3733691427"},"Line Drawing"))),l(r.a,{id:"3733691427"},[".DragII.jsx-3733691427{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}","svg.jsx-3733691427{margin:1rem 0;cursor:crosshair;}",".deets.jsx-3733691427{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:12px;}",".deets.jsx-3733691427>div.jsx-3733691427{margin:0.25rem;}"]))}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},data:{defaultValue:{value:"[]"},description:"",name:"data",required:!1,type:{name:"Lines | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-drag-ii/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-drag-ii/Example.tsx#Example"})}catch(p){}},cJAf:function(x,y,e){"use strict";e.d(y,"a",(function(){return c}));var t=e("aWzz"),a=e.n(t),r=e("ERkP"),n=e.n(r),i=e("jpI8");function s(){return(s=Object.assign||function(x){for(var y=1;y<arguments.length;y++){var e=arguments[y];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(x[t]=e[t])}return x}).apply(this,arguments)}function o(x){if(void 0===x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}function d(x,y,e){return y in x?Object.defineProperty(x,y,{value:e,enumerable:!0,configurable:!0,writable:!0}):x[y]=e,x}var c=function(x){var y,e;function t(){for(var y,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return d(o(y=x.call.apply(x,[this].concat(t))||this),"state",{x:void 0,y:void 0,dx:0,dy:0,isDragging:!1}),d(o(y),"handleDragStart",(function(x){var e=y.props,t=e.onDragStart,a=e.resetOnStart;x.persist(),y.setState((function(y){var e=y.dx,t=y.dy,r=Object(i.a)(x)||{x:0,y:0};return{isDragging:!0,dx:a?0:e,dy:a?0:t,x:a?r.x:r.x-e,y:a?r.y:r.y-t}}),t&&function(){t(s({},y.state,{event:x}))})})),d(o(y),"handleDragMove",(function(x){var e=y.props.onDragMove;x.persist(),y.setState((function(y){var e=y.x,t=y.y,a=y.isDragging,r=Object(i.a)(x)||{x:0,y:0};return a?{isDragging:!0,dx:r.x-(e||0),dy:r.y-(t||0)}:null}),e&&function(){y.state.isDragging&&e(s({},y.state,{event:x}))})})),d(o(y),"handleDragEnd",(function(x){var e=y.props.onDragEnd;x.persist(),y.setState({isDragging:!1},e&&function(){e(s({},y.state,{event:x}))})})),y}return e=x,(y=t).prototype=Object.create(e.prototype),y.prototype.constructor=y,y.__proto__=e,t.prototype.render=function(){var x=this.state,y=x.x,e=x.y,t=x.dx,a=x.dy,r=x.isDragging,i=this.props,s=i.children,o=i.width,d=i.height,c=i.captureDragArea;return n.a.createElement(n.a.Fragment,null,r&&c&&n.a.createElement("rect",{width:o,height:d,onMouseMove:this.handleDragMove,onMouseUp:this.handleDragEnd,fill:"transparent"}),s({x:y,y:e,dx:t,dy:a,isDragging:r,dragEnd:this.handleDragEnd,dragMove:this.handleDragMove,dragStart:this.handleDragStart}))},t}(n.a.Component);d(c,"propTypes",{children:a.a.func.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,captureDragArea:a.a.bool,resetOnStart:a.a.bool,onDragEnd:a.a.func,onDragMove:a.a.func,onDragStart:a.a.func}),d(c,"defaultProps",{captureDragArea:!0,resetOnStart:!1})},"sU+B":function(x,y,e){"use strict";e.r(y),e.d(y,"packageJson",(function(){return i})),e.d(y,"default",(function(){return l}));var t=e("ERkP"),a=e.n(t),r=e("KMjC"),n=e("i9k6"),i=e("/W13"),s=a.a.createElement,o={background:"#04002b",borderRadius:14},d={color:"#ff614e",zIndex:1},c={data:[[{x:49,y:50},{x:49,y:50},{x:48,y:50},{x:46,y:50},{x:43,y:50},{x:42,y:50},{x:41,y:50},{x:40,y:50},{x:39,y:50},{x:39,y:51},{x:39,y:52},{x:38,y:53},{x:37,y:54},{x:36,y:56},{x:36,y:59},{x:36,y:61},{x:36,y:62},{x:36,y:64},{x:36,y:66},{x:36,y:69},{x:36,y:72},{x:36,y:75},{x:37,y:78},{x:38,y:80},{x:39,y:81},{x:40,y:83},{x:40,y:84},{x:41,y:84},{x:42,y:84},{x:43,y:84},{x:46,y:84},{x:47,y:84},{x:49,y:84},{x:51,y:83},{x:53,y:81},{x:54,y:80},{x:56,y:77},{x:59,y:73},{x:60,y:68},{x:63,y:60},{x:66,y:45},{x:67,y:35},{x:67,y:31},{x:67,y:27},{x:67,y:23},{x:67,y:21},{x:67,y:19},{x:66,y:18},{x:65,y:17},{x:65,y:17},{x:64,y:17},{x:63,y:16},{x:63,y:16},{x:62,y:16},{x:62,y:16},{x:61,y:16},{x:61,y:17},{x:61,y:18},{x:60,y:19},{x:60,y:19},{x:60,y:20},{x:60,y:20},{x:59,y:21},{x:59,y:22},{x:59,y:23},{x:59,y:24},{x:58,y:27},{x:57,y:31},{x:56,y:34},{x:56,y:36},{x:56,y:39},{x:56,y:43},{x:56,y:46},{x:56,y:49},{x:56,y:55},{x:56,y:59},{x:57,y:68},{x:58,y:70},{x:60,y:73},{x:61,y:75},{x:62,y:77},{x:63,y:78},{x:64,y:80},{x:65,y:81},{x:65,y:83},{x:66,y:83},{x:66,y:84},{x:66,y:84},{x:66,y:84},{x:67,y:84},{x:67,y:85},{x:68,y:85},{x:68,y:85},{x:69,y:85},{x:69,y:85},{x:70,y:84},{x:70,y:83},{x:72,y:81},{x:74,y:78},{x:77,y:75},{x:79,y:73},{x:80,y:70},{x:82,y:66},{x:84,y:61},{x:86,y:57},{x:86,y:56},{x:87,y:54},{x:87,y:52},{x:87,y:50},{x:87,y:49},{x:87,y:48},{x:87,y:48},{x:87,y:47},{x:86,y:47},{x:85,y:47},{x:84,y:47},{x:84,y:47},{x:83,y:47},{x:83,y:47},{x:83,y:47},{x:82,y:48},{x:82,y:48},{x:82,y:51},{x:82,y:51},{x:82,y:52},{x:82,y:52},{x:82,y:52},{x:82,y:53},{x:82,y:53},{x:83,y:54},{x:83,y:54},{x:83,y:55},{x:83,y:55},{x:84,y:55},{x:84,y:55},{x:84,y:55},{x:85,y:55},{x:86,y:55},{x:87,y:55},{x:87,y:55},{x:88,y:55},{x:90,y:56},{x:91,y:56},{x:93,y:56},{x:94,y:56},{x:95,y:56},{x:96,y:56},{x:97,y:55},{x:100,y:53},{x:101,y:53},{x:102,y:52},{x:102,y:52},{x:102,y:51},{x:102,y:52},{x:102,y:52},{x:101,y:53},{x:101,y:54},{x:99,y:57},{x:97,y:63},{x:96,y:64},{x:96,y:65},{x:96,y:67},{x:96,y:69},{x:96,y:70},{x:96,y:71},{x:96,y:71},{x:96,y:72},{x:96,y:72},{x:96,y:72},{x:96,y:73},{x:97,y:74},{x:98,y:75},{x:99,y:77},{x:101,y:79},{x:102,y:79},{x:103,y:80},{x:104,y:80},{x:105,y:80},{x:105,y:80},{x:106,y:80},{x:107,y:80},{x:108,y:79},{x:109,y:77},{x:110,y:75},{x:112,y:72},{x:114,y:68},{x:116,y:62},{x:118,y:59},{x:119,y:56},{x:120,y:54},{x:121,y:53},{x:122,y:51},{x:123,y:51},{x:123,y:50},{x:124,y:50},{x:125,y:49},{x:125,y:49},{x:125,y:49},{x:126,y:49},{x:127,y:49},{x:128,y:50},{x:128,y:51},{x:129,y:51},{x:129,y:51},{x:129,y:52},{x:128,y:52},{x:128,y:52},{x:127,y:51},{x:126,y:51},{x:125,y:51},{x:123,y:51},{x:122,y:51},{x:120,y:52},{x:119,y:53},{x:118,y:54},{x:115,y:60},{x:113,y:64},{x:112,y:67},{x:112,y:69},{x:112,y:70},{x:112,y:70},{x:112,y:72},{x:112,y:73},{x:112,y:73},{x:112,y:74},{x:113,y:75},{x:113,y:76},{x:113,y:76},{x:114,y:76},{x:114,y:76},{x:115,y:76},{x:115,y:76},{x:116,y:77},{x:117,y:77},{x:119,y:77},{x:120,y:77},{x:121,y:77},{x:122,y:77},{x:123,y:76},{x:124,y:76},{x:125,y:75},{x:126,y:75},{x:126,y:73},{x:127,y:72},{x:128,y:70},{x:128,y:68},{x:129,y:66},{x:129,y:64},{x:131,y:60},{x:131,y:57},{x:132,y:55},{x:133,y:54},{x:133,y:52},{x:133,y:51},{x:133,y:50},{x:133,y:47},{x:133,y:46},{x:133,y:46},{x:133,y:46},{x:133,y:46},{x:132,y:46},{x:132,y:46},{x:131,y:46},{x:131,y:46},{x:130,y:46},{x:130,y:46},{x:130,y:46},{x:129,y:47},{x:129,y:48},{x:129,y:48},{x:129,y:48},{x:129,y:49},{x:129,y:49},{x:129,y:50},{x:129,y:51},{x:129,y:52},{x:129,y:52},{x:129,y:53},{x:129,y:55},{x:129,y:56},{x:129,y:57},{x:129,y:58},{x:129,y:59},{x:129,y:59},{x:129,y:60},{x:129,y:62},{x:129,y:64},{x:129,y:65},{x:129,y:67},{x:129,y:69},{x:130,y:70},{x:131,y:72},{x:131,y:74},{x:132,y:75},{x:133,y:77},{x:134,y:78},{x:134,y:79},{x:135,y:80},{x:135,y:81},{x:135,y:81},{x:136,y:81},{x:136,y:81},{x:136,y:82},{x:136,y:82},{x:137,y:82},{x:137,y:82},{x:138,y:82},{x:139,y:83},{x:139,y:83},{x:139,y:83},{x:140,y:83},{x:140,y:83},{x:140,y:83},{x:140,y:83},{x:140,y:83},{x:141,y:81},{x:141,y:80},{x:142,y:77},{x:142,y:66},{x:142,y:65},{x:142,y:62},{x:142,y:61},{x:142,y:60},{x:142,y:60},{x:142,y:60},{x:142,y:60},{x:142,y:60},{x:142,y:61},{x:142,y:62},{x:142,y:63},{x:142,y:64},{x:142,y:66},{x:143,y:67},{x:143,y:68},{x:144,y:69},{x:144,y:70},{x:145,y:71},{x:145,y:73},{x:146,y:75},{x:147,y:78},{x:153,y:83},{x:153,y:83},{x:153,y:83},{x:153,y:83},{x:154,y:83},{x:154,y:83},{x:155,y:83},{x:156,y:81},{x:156,y:79},{x:156,y:78},{x:156,y:77},{x:156,y:76},{x:156,y:74},{x:156,y:71},{x:156,y:70},{x:157,y:68},{x:157,y:66},{x:157,y:64},{x:157,y:63},{x:157,y:63},{x:157,y:62},{x:157,y:61},{x:157,y:61},{x:157,y:60},{x:156,y:60},{x:156,y:60},{x:156,y:60},{x:156,y:61},{x:156,y:61},{x:157,y:64},{x:158,y:65},{x:159,y:68},{x:160,y:69},{x:161,y:70},{x:162,y:72},{x:162,y:73},{x:163,y:74},{x:164,y:75},{x:165,y:76},{x:165,y:76},{x:166,y:76},{x:166,y:76},{x:167,y:76},{x:167,y:76},{x:168,y:76},{x:169,y:76},{x:172,y:76},{x:172,y:76},{x:173,y:76},{x:175,y:75},{x:175,y:75},{x:176,y:74},{x:176,y:74},{x:176,y:73},{x:176,y:72},{x:176,y:72},{x:176,y:71},{x:176,y:69},{x:176,y:68},{x:176,y:66},{x:176,y:65},{x:176,y:64},{x:176,y:63},{x:175,y:62},{x:174,y:61},{x:173,y:60},{x:173,y:57},{x:172,y:56},{x:172,y:55},{x:171,y:53},{x:170,y:52},{x:169,y:51},{x:168,y:50},{x:167,y:49},{x:167,y:49},{x:167,y:49},{x:166,y:49},{x:166,y:49},{x:166,y:49},{x:165,y:49},{x:165,y:49},{x:165,y:50},{x:165,y:50},{x:165,y:51},{x:165,y:51},{x:165,y:52},{x:165,y:52},{x:165,y:52},{x:165,y:53},{x:166,y:53},{x:166,y:54},{x:166,y:54},{x:167,y:54},{x:167,y:54},{x:167,y:54},{x:168,y:54},{x:168,y:54},{x:169,y:54},{x:169,y:54},{x:170,y:54},{x:171,y:54},{x:173,y:54},{x:175,y:55},{x:177,y:55},{x:178,y:55},{x:180,y:55},{x:182,y:55},{x:183,y:55},{x:186,y:55},{x:189,y:55},{x:191,y:55},{x:193,y:54},{x:194,y:53},{x:196,y:52},{x:196,y:52},{x:197,y:51},{x:198,y:51},{x:198,y:51},{x:199,y:51},{x:199,y:50},{x:199,y:50},{x:199,y:50},{x:199,y:49},{x:199,y:49}],[{x:39,y:34},{x:38,y:34},{x:36,y:34},{x:33,y:36},{x:30,y:37},{x:29,y:38},{x:28,y:38},{x:27,y:38},{x:26,y:39},{x:26,y:40},{x:25,y:41},{x:25,y:41},{x:24,y:42},{x:24,y:42},{x:24,y:43},{x:23,y:44},{x:23,y:45},{x:23,y:45},{x:23,y:46},{x:23,y:47},{x:23,y:49},{x:23,y:50},{x:23,y:52},{x:23,y:53},{x:23,y:53},{x:23,y:54},{x:23,y:54},{x:23,y:55},{x:23,y:57},{x:23,y:57},{x:23,y:58},{x:23,y:59},{x:23,y:61},{x:24,y:65},{x:24,y:67},{x:25,y:70},{x:25,y:71},{x:25,y:72},{x:25,y:73},{x:25,y:74},{x:25,y:75},{x:25,y:77},{x:25,y:78},{x:25,y:79},{x:26,y:80},{x:26,y:82},{x:26,y:83},{x:27,y:86},{x:27,y:86},{x:27,y:88},{x:27,y:89},{x:28,y:90},{x:28,y:91},{x:29,y:92},{x:29,y:93},{x:30,y:95},{x:31,y:95},{x:31,y:96},{x:32,y:97},{x:33,y:97},{x:34,y:99},{x:35,y:100},{x:36,y:101},{x:37,y:102},{x:37,y:102},{x:38,y:102},{x:39,y:102},{x:40,y:102},{x:41,y:102},{x:44,y:103},{x:47,y:103},{x:52,y:104},{x:59,y:104},{x:64,y:104},{x:68,y:104},{x:73,y:104},{x:76,y:104},{x:83,y:105},{x:87,y:105},{x:92,y:105},{x:98,y:105},{x:102,y:105},{x:110,y:105},{x:114,y:105},{x:119,y:105},{x:129,y:105},{x:137,y:104},{x:147,y:103},{x:158,y:102},{x:173,y:100},{x:180,y:100},{x:183,y:99},{x:186,y:99},{x:189,y:98},{x:194,y:97},{x:199,y:95},{x:201,y:94},{x:205,y:92},{x:211,y:88},{x:214,y:86},{x:216,y:84},{x:218,y:82},{x:219,y:82},{x:220,y:81},{x:220,y:80},{x:221,y:80},{x:221,y:79},{x:221,y:78},{x:221,y:77},{x:222,y:76},{x:222,y:74},{x:223,y:72},{x:223,y:70},{x:223,y:68},{x:223,y:64},{x:223,y:59},{x:223,y:55},{x:223,y:51},{x:223,y:48},{x:223,y:48},{x:223,y:46},{x:223,y:45},{x:223,y:43},{x:223,y:43},{x:223,y:42},{x:221,y:41},{x:220,y:40},{x:218,y:39},{x:216,y:38},{x:216,y:38},{x:214,y:37},{x:212,y:36},{x:209,y:35},{x:207,y:34},{x:204,y:34},{x:200,y:34},{x:196,y:34},{x:193,y:33},{x:190,y:33},{x:186,y:33},{x:182,y:33},{x:178,y:33},{x:175,y:33},{x:172,y:33},{x:166,y:33},{x:161,y:33},{x:155,y:33},{x:150,y:33},{x:140,y:33},{x:136,y:34},{x:131,y:35},{x:125,y:35},{x:123,y:35},{x:121,y:36},{x:120,y:36},{x:118,y:36},{x:116,y:36},{x:114,y:36},{x:112,y:36},{x:110,y:36},{x:109,y:36},{x:108,y:36},{x:107,y:36},{x:106,y:36},{x:105,y:36},{x:104,y:36},{x:103,y:36},{x:102,y:36},{x:101,y:36},{x:100,y:36},{x:98,y:36},{x:96,y:36},{x:95,y:36},{x:94,y:36},{x:93,y:36},{x:92,y:36},{x:92,y:36},{x:91,y:36},{x:91,y:36},{x:90,y:36},{x:89,y:36},{x:89,y:36},{x:88,y:36},{x:88,y:36},{x:87,y:36},{x:86,y:36},{x:86,y:36},{x:86,y:36},{x:86,y:36},{x:85,y:36},{x:85,y:35},{x:85,y:34},{x:85,y:34},{x:85,y:34},{x:85,y:33},{x:85,y:33},{x:84,y:32},{x:84,y:31},{x:83,y:29},{x:83,y:27},{x:83,y:25},{x:82,y:24},{x:82,y:22},{x:80,y:19},{x:80,y:18},{x:79,y:17},{x:78,y:16},{x:78,y:15},{x:78,y:15},{x:77,y:15},{x:77,y:14},{x:76,y:14},{x:76,y:13},{x:75,y:13},{x:75,y:12},{x:74,y:12},{x:73,y:12},{x:73,y:11},{x:72,y:11},{x:72,y:11},{x:70,y:10},{x:70,y:10},{x:67,y:10},{x:65,y:9},{x:65,y:9},{x:64,y:9},{x:63,y:9},{x:63,y:9},{x:62,y:9},{x:61,y:9},{x:61,y:9},{x:60,y:9},{x:59,y:9},{x:59,y:9},{x:59,y:9},{x:58,y:9},{x:57,y:9},{x:57,y:9},{x:56,y:9},{x:56,y:10},{x:55,y:10},{x:55,y:11},{x:54,y:11},{x:54,y:12},{x:53,y:13},{x:51,y:15},{x:51,y:15},{x:50,y:16},{x:49,y:17},{x:49,y:18},{x:48,y:19},{x:48,y:20},{x:47,y:21},{x:46,y:22},{x:46,y:22},{x:46,y:23},{x:45,y:24},{x:45,y:24}]]};function l(){return s(n.a,{title:"Drag ii",description:"<Drag.Drag />",exampleProps:c,exampleRenderer:r.a,exampleUrl:"/drag-ii",tileStyles:o,detailsStyles:d})}}}]);