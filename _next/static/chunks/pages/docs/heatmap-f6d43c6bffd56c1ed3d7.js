_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[72],{"+1NP":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,a){return new Array(e).fill(1).reduce((function(e,i,c){return e.concat([{bin:c,bins:(0,r.default)(t,n,a)}])}),[])};var a,r=(a=n("mNV6"))&&a.__esModule?a:{default:a}},"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},"67po":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("uKU/"),r=n("xx0A"),i=Object(r.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function c(e){return i(Object(a.a)(),e)}},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,i=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},IkWl:function(e){e.exports=JSON.parse('{"name":"@visx/demo-heatmap","description":"Standalone visx heatmap demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/group":"latest","@visx/heatmap":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","heatmap"]}')},JmwF:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("aWzz"),r=n.n(a),i=n("ERkP"),c=n.n(i),l=n("O94r"),o=n.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){var t=e.top,n=void 0===t?0:t,a=e.left,r=void 0===a?0:a,i=e.transform,l=e.className,s=e.children,d=e.innerRef,p=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["top","left","transform","className","children","innerRef"]);return c.a.createElement("g",u({ref:d,className:o()("visx-group",l),transform:i||"translate("+r+", "+n+")"},p),s)}s.propTypes={top:r.a.number,left:r.a.number,transform:r.a.string,className:r.a.string,children:r.a.node,innerRef:r.a.oneOfType([r.a.string,r.a.func,r.a.object])}},Mjv1:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("ERkP"),r=n.n(a),i=n("Zydf"),c=n("i9k6"),l=n("IkWl");n.d(t,"packageJson",(function(){return l}));var o=r.a.createElement,u={background:i.a},s={color:"rgba(255,255,255,0.3)"};function d(){return o(c.a,{title:"Heatmaps",description:"<HeatmapCircle /> & <HeatmapRect />",exampleRenderer:i.b,exampleUrl:"/heatmaps",tileStyles:u,detailsStyles:s})}},Sg64:function(e,t,n){"use strict";n.r(t);var a=n("ERkP"),r=n.n(a),i=n("cxan"),c=n("HbGN"),l=n("O94r"),o=n.n(l),u=n("JmwF"),s=r.a.createElement;function d(e){var t=e.className,n=e.top,a=e.left,l=e.data,d=void 0===l?[]:l,p=e.binWidth,m=void 0===p?6:p,f=e.binHeight,h=void 0===f?6:f,y=e.x0,b=void 0===y?0:y,v=e.gap,x=void 0===v?1:v,g=e.xScale,S=e.yScale,O=e.colorScale,w=void 0===O?function(){}:O,j=e.opacityScale,N=void 0===j?function(){return 1}:j,E=e.bins,_=void 0===E?function(e){return e&&e.bins}:E,C=e.count,R=void 0===C?function(e){return e&&e.count}:C,q=e.children,k=Object(c.a)(e,["className","top","left","data","binWidth","binHeight","x0","gap","xScale","yScale","colorScale","opacityScale","bins","count","children"]),P=m-x,V=h-x,T=d.map((function(e,t){var n=g(t);return _(e).map((function(a,r){var i=R(a);return{bin:a,row:r,column:t,datum:e,width:P,height:V,gap:x,count:i,x:n+b,y:S(r)+x,color:w(i),opacity:N(i)}}))}));return q?s(r.a.Fragment,null,q(T)):s(u.a,{className:"visx-heatmap-rects",top:n,left:a},T.map((function(e){return e.map((function(e){return s("rect",Object(i.a)({key:"heatmap-tile-rect-".concat(e.row,"-").concat(e.column),className:o()("visx-heatmap-rect",t),width:e.width,height:e.height,x:e.x,y:e.y,fill:e.color,fillOpacity:e.opacity},k))}))})))}try{d.displayName="HeatmapRect",d.__docgenInfo={description:"",displayName:"HeatmapRect",props:{data:{defaultValue:{value:"[]"},description:"Array of column data (one per column desired) for the heatmap.",name:"data",required:!1,type:{name:"ColumnDatum[] | undefined"}},left:{defaultValue:null,description:"Left offset applied to heatmap wrapper g element.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset applied to heatmap wrapper g element.",name:"top",required:!1,type:{name:"number | undefined"}},binWidth:{defaultValue:{value:6},description:"Width of a rect bin.",name:"binWidth",required:!1,type:{name:"number | undefined"}},binHeight:{defaultValue:{value:6},description:"Height of a rect bin.",name:"binHeight",required:!1,type:{name:"number | undefined"}},x0:{defaultValue:{value:0},description:"",name:"x0",required:!1,type:{name:"number | undefined"}},gap:{defaultValue:{value:1},description:"Pixel gap between heatmap rects.",name:"gap",required:!1,type:{name:"number | undefined"}},xScale:{defaultValue:null,description:"Given a column index, returns the x position of a rect cell.",name:"xScale",required:!0,type:{name:"(columnIndex: number) => number"}},yScale:{defaultValue:null,description:"Given a row index, returns the y position of a rect cell.",name:"yScale",required:!0,type:{name:"(rowIndex: number) => number"}},colorScale:{defaultValue:{value:"() => undefined"},description:"Given a count value, returns the desired rect fill color.",name:"colorScale",required:!1,type:{name:"ColorScale | undefined"}},opacityScale:{defaultValue:{value:"() => 1"},description:"Given a count value, returns the desired rect fill opacity.",name:"opacityScale",required:!1,type:{name:"OpacityScale | undefined"}},bins:{defaultValue:{value:"(d: any) => d && d.bins"},description:"Accessor that returns an array of cell BinDatums (rows) for the provided ColumnData.",name:"bins",required:!1,type:{name:"((column: ColumnDatum) => BinDatum[]) | undefined"}},count:{defaultValue:{value:"(d: any) => d && d.count"},description:"Accessor that returns the count for the provided Bin.",name:"count",required:!1,type:{name:"((bin: BinDatum) => number) | undefined"}},className:{defaultValue:null,description:"className to apply to each heatmap rect element.",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Render function override, provided with heatmap.",name:"children",required:!1,type:{name:"((cells: RectCell<ColumnDatum, BinDatum>[][]) => ReactNode) | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-heatmap/src/heatmaps/HeatmapRect.tsx#HeatmapRect"]={docgenInfo:d.__docgenInfo,name:"HeatmapRect",path:"../visx-heatmap/src/heatmaps/HeatmapRect.tsx#HeatmapRect"})}catch(x){}var p=r.a.createElement;function m(e){var t=e.className,n=e.top,a=e.left,l=e.data,s=void 0===l?[]:l,d=e.gap,m=void 0===d?1:d,f=e.radius,h=void 0===f?6:f,y=e.xScale,b=e.yScale,v=e.colorScale,x=void 0===v?function(){}:v,g=e.opacityScale,S=void 0===g?function(){return 1}:g,O=e.bins,w=void 0===O?function(e){return e&&e.bins}:O,j=e.count,N=void 0===j?function(e){return e&&e.count}:j,E=e.children,_=Object(c.a)(e,["className","top","left","data","gap","radius","xScale","yScale","colorScale","opacityScale","bins","count","children"]),C=h-m,R=s.map((function(e,t){var n=y(t);return w(e).map((function(a,r){var i=N(a);return{bin:a,row:r,column:t,datum:e,radius:h,gap:m,count:i,cx:h+n,cy:b(r)+m+h,r:C,opacity:S(i),color:x(i)}}))}));return E?p(r.a.Fragment,null,E(R)):p(u.a,{className:"visx-heatmap-circles",top:n,left:a},R.map((function(e){return e.map((function(e){return p("circle",Object(i.a)({key:"heatmap-tile-circle-".concat(e.row,"-").concat(e.column),className:o()("visx-heatmap-circle",t),r:e.r,cx:e.cx,cy:e.cy,fill:e.color,fillOpacity:e.opacity},_))}))})))}try{m.displayName="HeatmapCircle",m.__docgenInfo={description:"",displayName:"HeatmapCircle",props:{data:{defaultValue:{value:"[]"},description:"Array of column data (one per column desired) for the heatmap.",name:"data",required:!1,type:{name:"ColumnDatum[] | undefined"}},left:{defaultValue:null,description:"Left offset applied to heatmap wrapper g element.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset applied to heatmap wrapper g element.",name:"top",required:!1,type:{name:"number | undefined"}},gap:{defaultValue:{value:1},description:"Pixel gap between heatmap circles.",name:"gap",required:!1,type:{name:"number | undefined"}},radius:{defaultValue:{value:6},description:"Pixel radius of heatmap circles.",name:"radius",required:!1,type:{name:"number | undefined"}},xScale:{defaultValue:null,description:"Given a column index, returns the x position of a circle cell.",name:"xScale",required:!0,type:{name:"(columnIndex: number) => number"}},yScale:{defaultValue:null,description:"Given a row index, returns the y position of a circle cell.",name:"yScale",required:!0,type:{name:"(rowIndex: number) => number"}},colorScale:{defaultValue:{value:"() => undefined"},description:"Given a count value, returns the desired circle fill color.",name:"colorScale",required:!1,type:{name:"ColorScale | undefined"}},opacityScale:{defaultValue:{value:"() => 1"},description:"Given a count value, returns the desired circle fill opacity.",name:"opacityScale",required:!1,type:{name:"OpacityScale | undefined"}},bins:{defaultValue:{value:"(column: any) => column && column.bins"},description:"Accessor that returns an array of cell BinDatums (rows) for the provided ColumnData.",name:"bins",required:!1,type:{name:"((column: ColumnDatum) => BinDatum[]) | undefined"}},count:{defaultValue:{value:"(cell: any) => cell && cell.count"},description:"Accessor that returns the count for the provided Bin.",name:"count",required:!1,type:{name:"((bin: BinDatum) => number) | undefined"}},className:{defaultValue:null,description:"className to apply to each heatmap circle element.",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Render function override, provided with heatmap.",name:"children",required:!1,type:{name:"((cells: CircleCell<ColumnDatum, BinDatum>[][]) => ReactNode) | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-heatmap/src/heatmaps/HeatmapCircle.tsx#HeatmapCircle"]={docgenInfo:m.__docgenInfo,name:"HeatmapCircle",path:"../visx-heatmap/src/heatmaps/HeatmapCircle.tsx#HeatmapCircle"})}catch(x){}var f=n("QnPE"),h=n("Mjv1"),y=r.a.createElement,b=[d,m],v=[h.default];t.default=function(){return y(f.a,{components:b,examples:v,readme:'# @visx/heatmap\n\n<a title="@visx/heatmap npm downloads" href="https://www.npmjs.com/package/@visx/heatmap">\n  <img src="https://img.shields.io/npm/dm/@visx/heatmap.svg?style=flat-square" />\n</a>\n\nA Heatmap is an arrangement of shapes where the data values are represented as colors.\n\n## Example\n\n<img style="display:block; width:34vw;" src="http://i.imgur.com/OzSD3X3.png">\n\n```js\n<HeatmapRect\n  data={data}\n  xScale={xScale}\n  yScale={yScale}\n  colorScale={colorScale}\n  opacityScale={opacityScale}\n  binWidth={bWidth}\n  binHeight={bWidth}\n  step={dStep}\n  gap={0}\n/>\n```\n\nHeatmaps generally require structure that has this shape:\n\n```js\n[\n  {\n    bin: 1,\n    bins: [\n      {\n        count: 20,\n        bin: 23,\n      },\n    ],\n  },\n];\n```\n\nHowever, you\'re welcome to use your own structure by defining `x`, `y`, `z` accessors such as:\n\n```js\n// Example accessors\nconst x = d => d.myBin;\nconst y = d => d.myBins;\nconst z = d => d.myCount;\n\n// Example scale with an accessors\nconst xScale = scaleLinear({\n  range: [0, xMax],\n  domain: extent(data, x),\n});\n```\n\n## Installation\n\n```\nnpm install --save @visx/heatmap\n```\n',visxPackage:"heatmap"})}},Zbhd:function(e,t,n){"use strict";var a=n("PB0s"),r=n("XYeE"),i=n("jLnZ"),c=n("KLrH");t.a=function(e,t,n,l){var o,u=Object(a.c)(e,t,n);switch((l=Object(r.a)(null==l?",f":l)).type){case"s":var s=Math.max(Math.abs(e),Math.abs(t));return null!=l.precision||isNaN(o=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(e)))}(u,s))||(l.precision=o),Object(c.b)(l,s);case"":case"e":case"g":case"p":case"r":null!=l.precision||isNaN(o=function(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Object(i.a)(t)-Object(i.a)(e))+1}(u,Math.max(Math.abs(e),Math.abs(t))))||(l.precision=o-("e"===l.type));break;case"f":case"%":null!=l.precision||isNaN(o=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(u))||(l.precision=o-2*("%"===l.type))}return Object(c.a)(l)}},Zydf:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n("fGyu"),r=n("ERkP"),i=n.n(r),c=n("JmwF"),l=n("+1NP"),o=n.n(l),u=n("67po"),s=n("aWzz"),d=n.n(s),p=n("O94r"),m=n.n(p);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){var t=e.className,n=e.top,a=e.left,r=e.data,l=void 0===r?[]:r,o=e.gap,u=void 0===o?1:o,s=e.radius,d=void 0===s?6:s,p=e.xScale,h=e.yScale,y=e.colorScale,b=void 0===y?function(){}:y,v=e.opacityScale,x=void 0===v?function(){return 1}:v,g=e.bins,S=void 0===g?function(e){return e&&e.bins}:g,O=e.count,w=void 0===O?function(e){return e&&e.count}:O,j=e.children,N=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","top","left","data","gap","radius","xScale","yScale","colorScale","opacityScale","bins","count","children"]),E=d-u,_=l.map((function(e,t){var n=p(t);return S(e).map((function(a,r){var i=w(a);return{bin:a,row:r,column:t,datum:e,radius:d,gap:u,count:i,cx:d+n,cy:h(r)+u+d,r:E,opacity:x(i),color:b(i)}}))}));return j?i.a.createElement(i.a.Fragment,null,j(_)):i.a.createElement(c.a,{className:"visx-heatmap-circles",top:n,left:a},_.map((function(e){return e.map((function(e){return i.a.createElement("circle",f({key:"heatmap-tile-circle-"+e.row+"-"+e.column,className:m()("visx-heatmap-circle",t),r:e.r,cx:e.cx,cy:e.cy,fill:e.color,fillOpacity:e.opacity},N))}))})))}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){var t=e.className,n=e.top,a=e.left,r=e.data,l=void 0===r?[]:r,o=e.binWidth,u=void 0===o?6:o,s=e.binHeight,d=void 0===s?6:s,p=e.x0,f=void 0===p?0:p,h=e.gap,b=void 0===h?1:h,v=e.xScale,x=e.yScale,g=e.colorScale,S=void 0===g?function(){}:g,O=e.opacityScale,w=void 0===O?function(){return 1}:O,j=e.bins,N=void 0===j?function(e){return e&&e.bins}:j,E=e.count,_=void 0===E?function(e){return e&&e.count}:E,C=e.children,R=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","top","left","data","binWidth","binHeight","x0","gap","xScale","yScale","colorScale","opacityScale","bins","count","children"]),q=u-b,k=d-b,P=l.map((function(e,t){var n=v(t);return N(e).map((function(a,r){var i=_(a);return{bin:a,row:r,column:t,datum:e,width:q,height:k,gap:b,count:i,x:n+f,y:x(r)+b,color:S(i),opacity:w(i)}}))}));return C?i.a.createElement(i.a.Fragment,null,C(P)):i.a.createElement(c.a,{className:"visx-heatmap-rects",top:n,left:a},P.map((function(e){return e.map((function(e){return i.a.createElement("rect",y({key:"heatmap-tile-rect-"+e.row+"-"+e.column,className:m()("visx-heatmap-rect",t),width:e.width,height:e.height,x:e.x,y:e.y,fill:e.color,fillOpacity:e.opacity},R))}))})))}h.propTypes={data:d.a.array,left:d.a.number,top:d.a.number,gap:d.a.number,radius:d.a.number,xScale:d.a.func.isRequired,yScale:d.a.func.isRequired,bins:d.a.func,count:d.a.func,className:d.a.string,children:d.a.func},b.propTypes={data:d.a.array,left:d.a.number,top:d.a.number,binWidth:d.a.number,binHeight:d.a.number,x0:d.a.number,gap:d.a.number,xScale:d.a.func.isRequired,yScale:d.a.func.isRequired,bins:d.a.func,count:d.a.func,className:d.a.string,children:d.a.func};var v=i.a.createElement,x="#28272c",g=o()(16,16);function S(e,t){return Math.max.apply(Math,Object(a.a)(e.map(t)))}var O=function(e){return e.bins},w=function(e){return e.count},j=S(g,(function(e){return S(O(e),w)})),N=S(g,(function(e){return O(e).length})),E=Object(u.a)({domain:[0,g.length]}),_=Object(u.a)({domain:[0,N]}),C=Object(u.a)({range:["#77312f","#f33d15"],domain:[0,j]}),R=Object(u.a)({range:["#122549","#b4fbde"],domain:[0,j]}),q=Object(u.a)({range:[.1,1],domain:[0,j]}),k={top:10,left:20,right:20,bottom:110};t.b=function(e){var t,n,r=e.width,i=e.height,l=e.events,o=void 0!==l&&l,u=e.margin,s=void 0===u?k:u,d=e.separation,p=void 0===d?20:d,m=(r>s.left+s.right?r-s.left-s.right-p:r)/2,f=i-s.bottom-s.top,y=m/g.length,S=(t=[y,f/N],n=function(e){return e},Math.min.apply(Math,Object(a.a)(t.map(n)))/2);return E.range([0,m]),_.range([f,0]),r<10?null:v("svg",{width:r,height:i},v("rect",{x:0,y:0,width:r,height:i,rx:14,fill:x}),v(c.a,{top:s.top,left:s.left},v(h,{data:g,xScale:E,yScale:_,colorScale:C,opacityScale:q,radius:S,gap:2},(function(e){return e.map((function(e){return e.map((function(e){return v("circle",{key:"heatmap-circle-".concat(e.row,"-").concat(e.column),className:"visx-heatmap-circle",cx:e.cx,cy:e.cy,r:e.r,fill:e.color,fillOpacity:e.opacity,onClick:function(){if(o){var t=e.row,n=e.column;alert(JSON.stringify({row:t,column:n,bin:e.bin}))}}})}))}))}))),v(c.a,{top:s.top,left:m+s.left+p},v(b,{data:g,xScale:E,yScale:_,colorScale:R,opacityScale:q,binWidth:y,binHeight:y,gap:2},(function(e){return e.map((function(e){return e.map((function(e){return v("rect",{key:"heatmap-rect-".concat(e.row,"-").concat(e.column),className:"visx-heatmap-rect",width:e.width,height:e.height,x:e.x,y:e.y,fill:e.color,fillOpacity:e.opacity,onClick:function(){if(o){var t=e.row,n=e.column;alert(JSON.stringify({row:t,column:n,bin:e.bin}))}}})}))}))}))))};try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},separation:{defaultValue:null,description:"",name:"separation",required:!1,type:{name:"number | undefined"}},events:{defaultValue:null,description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-heatmap/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-heatmap/Example.tsx#Example"})}catch(P){}},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=l(n("aWzz")),r=l(n("RNvQ")),i=l(n("ERkP")),c=l(n("LaGA"));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return s(u(t=e.call.apply(e,[this].concat(a))||this),"animationFrameID",0),s(u(t),"resizeObserver",void 0),s(u(t),"target",null),s(u(t),"state",{width:0,height:0,top:0,left:0}),s(u(t),"resize",(0,r.default)((function(e){var n=e.width,a=e.height,r=e.top,i=e.left;t.setState((function(){return{width:n,height:a,top:r,left:i}}))}),t.props.debounceTime,{leading:t.props.enableDebounceLeadingCall})),s(u(t),"setTarget",(function(e){t.target=e})),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=a.prototype;return l.componentDidMount=function(){var e=this;this.resizeObserver=new c.default((function(t){void 0===t&&(t=[]),t.forEach((function(t){var n=t.contentRect,a=n.left,r=n.top,i=n.width,c=n.height;e.animationFrameID=window.requestAnimationFrame((function(){e.resize({width:i,height:c,top:r,left:a})}))}))})),this.target&&this.resizeObserver.observe(this.target)},l.componentWillUnmount=function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver&&this.resizeObserver.disconnect(),this.resize.cancel()},l.render=function(){var e=this.props,t=e.className,n=e.children,a=(e.debounceTime,e.parentSizeStyles),r=(e.enableDebounceLeadingCall,function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","children","debounceTime","parentSizeStyles","enableDebounceLeadingCall"]));return i.default.createElement("div",o({style:a,ref:this.setTarget,className:t},r),n(o({},this.state,{ref:this.target,resize:this.resize})))},a}(i.default.Component);t.default=d,s(d,"propTypes",{className:a.default.string,debounceTime:a.default.number,enableDebounceLeadingCall:a.default.bool,children:a.default.func.isRequired}),s(d,"defaultProps",{debounceTime:300,enableDebounceLeadingCall:!0,parentSizeStyles:{width:"100%",height:"100%"}})},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("zjfJ"),r=n("yFcC"),i=n.n(r),c=n("ERkP"),l=n.n(c),o=n("jvFD"),u=n.n(o),s=n("i6Tx"),d=n.n(s),p=l.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){var t,n,r=e.description,c=e.detailsHeight,o=void 0===c?76:c,s=e.detailsStyles,f=e.exampleProps,h=e.exampleRenderer,y=e.exampleUrl,b=e.tileStyles,v=e.title;return p(l.a.Fragment,null,(t=y,n=p("div",{style:b,className:"jsx-713312509 gallery-tile"},p("div",{className:"jsx-713312509 image"},p(d.a,null,(function(e){var t=e.width,n=e.height;return l.a.createElement(h,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(v||r?o:0)},f))}))),(v||r)&&p("div",{style:s,className:"jsx-713312509 details"},v&&p("div",{className:"jsx-713312509 title"},v),r&&p("div",{className:"jsx-713312509 description"},p("pre",{className:"jsx-713312509"},r)))),t?p(u.a,{href:t},n):n),p(i.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{f.displayName="GalleryTile",f.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:f.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(h){}},"l5+1":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/heatmap",function(){return n("Sg64")}])},mNV6:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){void 0===t&&(t=r);void 0===n&&(n=a);return new Array(e).fill(1).reduce((function(a,r,i){return a.concat([{bin:t(i,e),count:n(i,e)}])}),[])};var a=function(e,t){return Math.random()*(25*(t-e))},r=function(e,t){return 150*e}},"uKU/":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var a=n("PB0s"),r=n("2+fR"),i=n("W1cA"),c=n("Zbhd");function l(e){var t=e.domain;return e.ticks=function(e){var n=t();return Object(a.a)(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var a=t();return Object(c.a)(a[0],a[a.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var r,i=t(),c=0,l=i.length-1,o=i[c],u=i[l];return u<o&&(r=o,o=u,u=r,r=c,c=l,l=r),(r=Object(a.b)(o,u,n))>0?(o=Math.floor(o/r)*r,u=Math.ceil(u/r)*r,r=Object(a.b)(o,u,n)):r<0&&(o=Math.ceil(o*r)/r,u=Math.floor(u*r)/r,r=Object(a.b)(o,u,n)),r>0?(i[c]=Math.floor(o/r)*r,i[l]=Math.ceil(u/r)*r,t(i)):r<0&&(i[c]=Math.ceil(o*r)/r,i[l]=Math.floor(u*r)/r,t(i)),e},e}function o(){var e=Object(r.b)();return e.copy=function(){return Object(r.a)(e,o())},i.b.apply(e,arguments),l(e)}},zjfJ:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}},[["l5+1",0,2,1,3,4,5,8,10,9]]]);