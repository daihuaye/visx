(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{Ifh9:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r("aWzz"),a=r.n(n),i=r("ERkP"),l=r.n(i),o=r("O94r"),s=r.n(o),c=r("hsl+"),u=r.n(c),d=r("JmwF"),f=r("rkTo"),p=r("nNND"),m=r("HlJr");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e){var t=e.top,r=void 0===t?0:t,n=e.left,a=void 0===n?0:n,i=e.scale,o=e.width,c=e.stroke,y=void 0===c?"#eaf0f6":c,b=e.strokeWidth,v=void 0===b?1:b,x=e.strokeDasharray,g=e.className,O=e.children,k=e.numTicks,w=void 0===k?10:k,j=e.lineStyle,E=e.offset,P=e.tickValues,S=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"]),T=(null!=P?P:Object(p.a)(i,w)).map((function(e){var t=E?(Object(m.a)(i(e))||0)+E:Object(m.a)(i(e))||0;return{from:new f.a({x:0,y:t}),to:new f.a({x:o,y:t})}}));return l.a.createElement(d.a,{className:s()("visx-rows",g),top:r,left:a},O?O({lines:T}):T.map((function(e,t){var r=e.from,n=e.to;return l.a.createElement(u.a,h({key:"row-line-"+t,from:r,to:n,stroke:y,strokeWidth:v,strokeDasharray:x,style:j},S))})))}y.propTypes={tickValues:a.a.array,width:a.a.number.isRequired}},JjBE:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r("ERkP"),a=r.n(n),i=r("Sk4R"),l=r("i9k6"),o=r("mdYk");r.d(t,"packageJson",(function(){return o}));var s=a.a.createElement,c={background:i.a},u={color:"#111"},d={margin:{top:40,left:40,right:20,bottom:30}};function f(){return s(l.a,{title:"Area difference chart",description:"<Threshold />",exampleProps:d,exampleRenderer:i.b,exampleUrl:"/threshold",tileStyles:c,detailsStyles:u})}},KRsa:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("ERkP"),a=r.n(n),i=r("O94r"),l=r.n(i),o=r("5Nbk"),s=r("pn27");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=function(){return{dx:"-0.25em",dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"end"}};function d(e){var t=e.axisClassName,r=e.labelOffset,n=void 0===r?36:r,i=e.tickLabelProps,d=void 0===i?u:i,f=e.tickLength,p=void 0===f?8:f,m=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return a.a.createElement(o.a,c({axisClassName:l()("visx-axis-left",t),labelOffset:n,orientation:s.a.left,tickLabelProps:d,tickLength:p},m))}},Sk4R:function(e,t,r){"use strict";r.d(t,"a",(function(){return P})),r.d(t,"b",(function(){return _}));var n=r("fGyu"),a=r("ERkP"),i=r.n(a),l=r("JmwF"),o=r("m+Ft"),s=r("geX1"),c=r("aWzz"),u=r.n(c),d=r("O94r"),f=r.n(d),p=r("wO8m"),m=r("hNR5");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e){var t=e.className,r=e.curve,n=e.clipAboveTo,a=e.clipBelowTo,l=e.data,o=e.defined,s=e.x,c=e.y0,u=e.y1,d=e.aboveAreaProps,y=e.belowAreaProps,b=e.id,v=void 0===b?"":b;return i.a.createElement("g",{className:f()("visx-threshold",t)},i.a.createElement(p.a,{curve:r,data:l,x:s,y1:u,defined:o},(function(e){var t=e.path,r=null,o=null;return r=t.y0(a)(l),o=t.y0(n)(l),i.a.createElement("g",null,i.a.createElement(m.a,{id:"threshold-clip-below-"+v},i.a.createElement("path",{d:r||""})),i.a.createElement(m.a,{id:"threshold-clip-above-"+v},i.a.createElement("path",{d:o||""})))})),i.a.createElement(p.a,h({curve:r,data:l,defined:o,x:s,y0:c,y1:u,strokeWidth:0,clipPath:"url(#threshold-clip-below-"+v+")"},y)),i.a.createElement(p.a,h({curve:r,data:l,defined:o,x:s,y0:c,y1:u,strokeWidth:0,clipPath:"url(#threshold-clip-above-"+v+")"},d)))}y.propTypes={className:u.a.string,clipAboveTo:u.a.oneOfType([u.a.func,u.a.number]).isRequired,clipBelowTo:u.a.oneOfType([u.a.func,u.a.number]).isRequired,id:u.a.string.isRequired,data:u.a.array.isRequired,defined:u.a.func,x:u.a.oneOfType([u.a.func,u.a.number]).isRequired,y0:u.a.oneOfType([u.a.func,u.a.number]).isRequired,y1:u.a.oneOfType([u.a.func,u.a.number]).isRequired};var b=r("cjvV"),v=r("67po"),x=r("a7GN"),g=r("KRsa"),O=r("Ifh9"),k=r("eMuC"),w=r("s2H9"),j=r.n(w),E=i.a.createElement,P="#f3f3f3",S=function(e){return new Date(e.date).valueOf()},T=function(e){return Number(e["New York"])},N=function(e){return Number(e["San Francisco"])},R=Object(b.a)({domain:[Math.min.apply(Math,Object(n.a)(j.a.map(S))),Math.max.apply(Math,Object(n.a)(j.a.map(S)))]}),z=Object(v.a)({domain:[Math.min.apply(Math,Object(n.a)(j.a.map((function(e){return Math.min(T(e),N(e))})))),Math.max.apply(Math,Object(n.a)(j.a.map((function(e){return Math.max(T(e),N(e))}))))],nice:!0}),C={top:40,right:30,bottom:50,left:40};function _(e){var t=e.width,r=e.height,n=e.margin,a=void 0===n?C:n;if(t<10)return null;var i=t-a.left-a.right,c=r-a.top-a.bottom;return R.range([0,i]),z.range([c,0]),E("div",null,E("svg",{width:t,height:r},E("rect",{x:0,y:0,width:t,height:r,fill:P,rx:14}),E(l.a,{left:a.left,top:a.top},E(O.a,{scale:z,width:i,height:c,stroke:"#e0e0e0"}),E(k.a,{scale:R,width:i,height:c,stroke:"#e0e0e0"}),E("line",{x1:i,x2:i,y1:0,y2:c,stroke:"#e0e0e0"}),E(x.a,{top:c,scale:R,numTicks:t>520?10:5}),E(g.a,{scale:z}),E("text",{x:"-70",y:"15",transform:"rotate(-90)",fontSize:10},"Temperature (\xb0F)"),E(y,{id:"".concat(Math.random()),data:j.a,x:function(e){return R(S(e))},y0:function(e){return z(T(e))},y1:function(e){return z(N(e))},clipAboveTo:0,clipBelowTo:c,curve:o.b,belowAreaProps:{fill:"violet",fillOpacity:.4},aboveAreaProps:{fill:"green",fillOpacity:.4}}),E(s.a,{data:j.a,curve:o.b,x:function(e){return R(S(e))},y:function(e){return z(N(e))},stroke:"#222",strokeWidth:1.5,strokeOpacity:.8,strokeDasharray:"1,2"}),E(s.a,{data:j.a,curve:o.b,x:function(e){return R(S(e))},y:function(e){return z(T(e))},stroke:"#222",strokeWidth:1.5}))))}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-threshold/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-threshold/Example.tsx#Example"})}catch(A){}},a7GN:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("ERkP"),a=r.n(n),i=r("O94r"),l=r.n(i),o=r("5Nbk"),s=r("pn27");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=function(){return{dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}};function d(e){var t=e.axisClassName,r=e.labelOffset,n=void 0===r?8:r,i=e.tickLabelProps,d=void 0===i?u:i,f=e.tickLength,p=void 0===f?8:f,m=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return a.a.createElement(o.a,c({axisClassName:l()("visx-axis-bottom",t),labelOffset:n,orientation:s.a.bottom,tickLabelProps:d,tickLength:p},m))}},eMuC:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r("aWzz"),a=r.n(n),i=r("ERkP"),l=r.n(i),o=r("O94r"),s=r.n(o),c=r("hsl+"),u=r.n(c),d=r("JmwF"),f=r("rkTo"),p=r("nNND"),m=r("HlJr");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e){var t=e.top,r=void 0===t?0:t,n=e.left,a=void 0===n?0:n,i=e.scale,o=e.height,c=e.stroke,y=void 0===c?"#eaf0f6":c,b=e.strokeWidth,v=void 0===b?1:b,x=e.strokeDasharray,g=e.className,O=e.numTicks,k=void 0===O?10:O,w=e.lineStyle,j=e.offset,E=e.tickValues,P=e.children,S=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"]),T=(null!=E?E:Object(p.a)(i,k)).map((function(e){var t=j?(Object(m.a)(i(e))||0)+j:Object(m.a)(i(e))||0;return{from:new f.a({x:t,y:0}),to:new f.a({x:t,y:o})}}));return l.a.createElement(d.a,{className:s()("visx-columns",g),top:r,left:a},P?P({lines:T}):T.map((function(e,t){var r=e.from,n=e.to;return l.a.createElement(u.a,h({key:"column-line-"+t,from:r,to:n,stroke:y,strokeWidth:v,strokeDasharray:x,style:w},S))})))}y.propTypes={tickValues:a.a.array,height:a.a.number.isRequired}},hNR5:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("aWzz"),a=r.n(n),i=r("ERkP"),l=r.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e){var t=e.id,r=e.children,n=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["id","children"]);return l.a.createElement("defs",null,l.a.createElement("clipPath",o({id:t},n),r))}s.propTypes={id:a.a.string.isRequired,children:a.a.node}},i6Tx:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("aWzz")),a=o(r("RNvQ")),i=o(r("ERkP")),l=o(r("LaGA"));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return u(c(t=e.call.apply(e,[this].concat(n))||this),"animationFrameID",0),u(c(t),"resizeObserver",void 0),u(c(t),"target",null),u(c(t),"state",{width:0,height:0,top:0,left:0}),u(c(t),"resize",(0,a.default)((function(e){var r=e.width,n=e.height,a=e.top,i=e.left;t.setState((function(){return{width:r,height:n,top:a,left:i}}))}),t.props.debounceTime,{leading:t.props.enableDebounceLeadingCall})),u(c(t),"setTarget",(function(e){t.target=e})),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){var e=this;this.resizeObserver=new l.default((function(t){void 0===t&&(t=[]),t.forEach((function(t){var r=t.contentRect,n=r.left,a=r.top,i=r.width,l=r.height;e.animationFrameID=window.requestAnimationFrame((function(){e.resize({width:i,height:l,top:a,left:n})}))}))})),this.target&&this.resizeObserver.observe(this.target)},o.componentWillUnmount=function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver&&this.resizeObserver.disconnect(),this.resize.cancel()},o.render=function(){var e=this.props,t=e.className,r=e.children,n=(e.debounceTime,e.parentSizeStyles),a=(e.enableDebounceLeadingCall,function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["className","children","debounceTime","parentSizeStyles","enableDebounceLeadingCall"]));return i.default.createElement("div",s({style:n,ref:this.setTarget,className:t},a),r(s({},this.state,{ref:this.target,resize:this.resize})))},n}(i.default.Component);t.default=d,u(d,"propTypes",{className:n.default.string,debounceTime:n.default.number,enableDebounceLeadingCall:n.default.bool,children:n.default.func.isRequired}),u(d,"defaultProps",{debounceTime:300,enableDebounceLeadingCall:!0,parentSizeStyles:{width:"100%",height:"100%"}})},i9k6:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("zjfJ"),a=r("yFcC"),i=r.n(a),l=r("ERkP"),o=r.n(l),s=r("jvFD"),c=r.n(s),u=r("i6Tx"),d=r.n(u),f=o.a.createElement;function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){var t,r,a=e.description,l=e.detailsHeight,s=void 0===l?76:l,u=e.detailsStyles,m=e.exampleProps,h=e.exampleRenderer,y=e.exampleUrl,b=e.tileStyles,v=e.title;return f(o.a.Fragment,null,(t=y,r=f("div",{style:b,className:"jsx-713312509 gallery-tile"},f("div",{className:"jsx-713312509 image"},f(d.a,null,(function(e){var t=e.width,r=e.height;return o.a.createElement(h,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:t,height:r+(v||a?s:0)},m))}))),(v||a)&&f("div",{style:u,className:"jsx-713312509 details"},v&&f("div",{className:"jsx-713312509 title"},v),a&&f("div",{className:"jsx-713312509 description"},f("pre",{className:"jsx-713312509"},a)))),t?f(c.a,{href:t},r):r),f(i.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(h){}},mdYk:function(e){e.exports=JSON.parse('{"name":"@visx/demo-threshold","description":"Standalone visx threshold demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/axis":"latest","@visx/curve":"latest","@visx/grid":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/threshold":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","threshold"]}')}}]);