(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"0RyW":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),o=n.n(r),i=n("7nmT"),a=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={top:0,right:0,bottom:0,left:0,width:0,height:0};function d(e){var t,n;return n=t=function(t){var n,r;function i(e){var n;return l(s(n=t.call(this,e)||this),"node",void 0),n.state={rect:void 0,parentRect:void 0},n.getRects=n.getRects.bind(s(n)),n}r=t,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var d=i.prototype;return d.componentDidMount=function(){var e=this;this.node=a.a.findDOMNode(this),this.setState((function(){return e.getRects()}))},d.getRects=function(){if(!this.node)return this.state;var e=this.node,t=e.parentNode;return{rect:e.getBoundingClientRect?e.getBoundingClientRect():u,parentRect:t&&t.getBoundingClientRect?t.getBoundingClientRect():u}},d.render=function(){return o.a.createElement(e,c({getRects:this.getRects},this.state,this.props))},i}(o.a.PureComponent),l(t,"displayName","withBoundingRects("+(e.displayName||"")+")"),n}},"8/jq":function(e,t,n){"use strict";var r=n("aWzz"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("0RyW"),s=n("+fu8");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){var t=e.left,n=void 0===t?0:t,r=e.top,o=void 0===r?0:r,i=e.offsetLeft,c=void 0===i?10:i,u=e.offsetTop,d=void 0===u?10:u,f=e.children,p=e.rect,h=e.parentRect,b=(e.getRects,e.style),m=void 0===b?s.b:b,y=e.unstyled,v=void 0!==y&&y,g=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["left","top","offsetLeft","offsetTop","children","rect","parentRect","getRects","style","unstyled"]),w=n,O=o;if(p&&h){var x=c+p.right>h.right||c+p.right>window.innerWidth,k=d+p.bottom>h.bottom||d+p.bottom>window.innerHeight;w=x?w-p.width-c:w+c,O=k?O-p.height-d:O+d}return w=Math.round(w),O=Math.round(O),a.a.createElement(s.a,l({style:l({top:0,left:0,transform:"translate("+w+"px, "+O+"px)"},!v&&m),unstyled:v},g),f)}u.propTypes={offsetLeft:o.a.number,offsetTop:o.a.number},t.a=Object(c.a)(u)},BqYg:function(e,t){function n(e,t,n){var r,o,i,a,c;function s(){var l=Date.now()-a;l<t&&l>=0?r=setTimeout(s,t-l):(r=null,n||(c=e.apply(i,o),i=o=null))}null==t&&(t=100);var l=function(){i=this,o=arguments,a=Date.now();var l=n&&!r;return r||(r=setTimeout(s,t)),l&&(c=e.apply(i,o),i=o=null),c};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(c=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},l}n.debounce=n,e.exports=n},cyaT:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},dPyl:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("ERkP"),o=n.n(r),i=n("x7Vb"),a=n("aWzz"),c=n.n(a),s=n("7nmT"),l=n.n(s);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return d(u(t=e.call.apply(e,[this].concat(r))||this),"node",void 0),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentWillUnmount=function(){this.node&&document.body&&(document.body.removeChild(this.node),delete this.node)},o.render=function(){return this.node||"undefined"===typeof document||(this.node=document.createElement("div"),null!=this.props.zIndex&&(this.node.style.zIndex=""+this.props.zIndex),document.body.append(this.node)),this.node?l.a.createPortal(this.props.children,this.node):null},r}(o.a.PureComponent);d(f,"propTypes",{zIndex:c.a.number});var p=n("+fu8"),h=n("8/jq");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function y(e){var t=void 0===e?{}:e,n=t.detectBounds,a=void 0===n||n,c=m(t,["detectBounds"]),s=Object(i.a)(c),l=s[0],u=s[1],d=Object(r.useMemo)((function(){return function(e){var t=e.left,n=void 0===t?0:t,r=e.top,i=void 0===r?0:r,c=m(e,["left","top"]),s=a?h.a:p.a,l=n+(u.left||0)+window.scrollX,d=i+(u.top||0)+window.scrollY;return o.a.createElement(f,null,o.a.createElement(s,b({left:l,top:d},c)))}}),[a,u.left,u.top]);return{containerRef:l,containerBounds:u,TooltipInPortal:d}}},"dk/h":function(e){e.exports=JSON.parse('{"name":"@visx/demo-barstack","description":"Standalone visx stacked bar demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/axis":"latest","@visx/grid":"latest","@visx/group":"latest","@visx/legend":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/tooltip":"latest","d3-time-format":"2.2.3","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","barstack"]}')},wReH:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return F}));var r=n("fGyu"),o=n("zjfJ"),i=n("ERkP"),a=n.n(i),c=n("gCxp"),s=n("JmwF"),l=n("aWzz"),u=n.n(l),d=n("O94r"),f=n.n(d),p=n("Ifh9"),h=n("eMuC");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e){var t=e.top,n=e.left,r=e.xScale,o=e.yScale,i=e.width,c=e.height,l=e.className,u=e.stroke,d=e.strokeWidth,m=e.strokeDasharray,y=e.numTicksRows,v=e.numTicksColumns,g=e.rowLineStyle,w=e.columnLineStyle,O=e.xOffset,x=e.yOffset,k=e.rowTickValues,j=e.columnTickValues,E=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["top","left","xScale","yScale","width","height","className","stroke","strokeWidth","strokeDasharray","numTicksRows","numTicksColumns","rowLineStyle","columnLineStyle","xOffset","yOffset","rowTickValues","columnTickValues"]);return a.a.createElement(s.a,{className:f()("visx-grid",l),top:t,left:n},a.a.createElement(p.a,b({className:l,scale:o,width:i,stroke:u,strokeWidth:d,strokeDasharray:m,numTicks:y,lineStyle:g,offset:x,tickValues:k},E)),a.a.createElement(h.a,b({className:l,scale:r,height:c,stroke:u,strokeWidth:d,strokeDasharray:m,numTicks:v,lineStyle:w,offset:O,tickValues:j},E)))}m.propTypes={rowTickValues:u.a.array,columnTickValues:u.a.array};var y=n("a7GN"),v=n("s2H9"),g=n.n(v),w=n("cc+0"),O=n("67po"),x=n("D+es"),k=n("mHfT"),j=n("+fu8"),E=n("QnoR"),R=n("dPyl"),T=n("ASUk"),S=a.a.createElement;function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C,_="#a44afe",L="#eaedff",B={top:40,right:0,bottom:0,left:0},D=z(z({},j.b),{},{minWidth:60,backgroundColor:"rgba(0,0,0,0.9)",color:"white"}),N=g.a.slice(0,12),M=Object.keys(N[0]).filter((function(e){return"date"!==e})),V=N.reduce((function(e,t){var n=M.reduce((function(e,n){return e+=Number(t[n])}),0);return e.push(n),e}),[]),W=Object(k.b)("%Y-%m-%d"),I=Object(k.a)("%b %d"),q=function(e){return I(W(e))},Y=function(e){return e.date},A=Object(w.a)({domain:N.map(Y),padding:.2}),J=Object(O.a)({domain:[0,Math.max.apply(Math,Object(r.a)(V))],nice:!0}),H=Object(x.a)({domain:M,range:["#6c5efb","#c998ff",_]});function F(e){var t=e.width,n=e.height,r=e.events,o=void 0!==r&&r,i=e.margin,a=void 0===i?B:i,l=Object(E.a)(),u=l.tooltipOpen,d=l.tooltipLeft,f=l.tooltipTop,p=l.tooltipData,h=l.hideTooltip,b=l.showTooltip,v=Object(R.a)(),g=v.containerRef,w=v.TooltipInPortal;if(t<10)return null;var O=t,x=n-a.top-100;return A.rangeRound([0,O]),J.range([x,0]),t<10?null:S("div",{style:{position:"relative"}},S("svg",{ref:g,width:t,height:n},S("rect",{x:0,y:0,width:t,height:n,fill:L,rx:14}),S(m,{top:a.top,left:a.left,xScale:A,yScale:J,width:O,height:x,stroke:"black",strokeOpacity:.1,xOffset:A.bandwidth()/2}),S(s.a,{top:a.top},S(c.a,{data:N,keys:M,x:Y,xScale:A,yScale:J,color:H},(function(e){return e.map((function(e){return e.bars.map((function(t){return S("rect",{key:"bar-stack-".concat(e.index,"-").concat(t.index),x:t.x,y:t.y,height:t.height,width:t.width,fill:t.color,onClick:function(){o&&alert("clicked: ".concat(JSON.stringify(t)))},onMouseLeave:function(){C=window.setTimeout((function(){h()}),300)},onMouseMove:function(e){C&&clearTimeout(C);var n=e.clientY-a.top-t.height,r=t.x+t.width/2;b({tooltipData:t,tooltipTop:n,tooltipLeft:r})}})}))}))}))),S(y.a,{top:x+a.top,scale:A,tickFormat:q,stroke:_,tickStroke:_,tickLabelProps:function(){return{fill:_,fontSize:11,textAnchor:"middle"}}})),S("div",{style:{position:"absolute",top:a.top/2-10,width:"100%",display:"flex",justifyContent:"center",fontSize:"14px"}},S(T.a,{scale:H,direction:"row",labelMargin:"0 15px 0 0"})),u&&p&&S(w,{key:Math.random(),top:f,left:d,style:D},S("div",{style:{color:H(p.key)}},S("strong",null,p.key)),S("div",null,p.bar.data[p.key],"\u2109"),S("div",null,S("small",null,q(Y(p.bar.data))))))}try{F.displayName="Example",F.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-barstack/Example.tsx#Example"]={docgenInfo:F.__docgenInfo,name:"Example",path:"src/sandboxes/visx-barstack/Example.tsx#Example"})}catch(G){}},x7Vb:function(e,t,n){"use strict";(function(e){var r=n("ERkP"),o=n("BqYg");function i({debounce:e,scroll:t,polyfill:n}={debounce:0,scroll:!1}){const i=n||("undefined"===typeof window?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[a,s]=Object(r.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),l=Object(r.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:a}),u=e?"number"===typeof e?e:e.scroll:null,d=e?"number"===typeof e?e:e.resize:null,[f,p,h]=Object(r.useMemo)(()=>{const e=()=>{if(!l.current.element)return;const{left:e,top:t,width:n,height:r,bottom:o,right:i,x:a,y:u}=l.current.element.getBoundingClientRect(),d={left:e,top:t,width:n,height:r,bottom:o,right:i,x:a,y:u};Object.freeze(d),c(l.current.lastBounds,d)||s(l.current.lastBounds=d)};return[e,d?Object(o.debounce)(e,d):e,u?Object(o.debounce)(e,u):e]},[s,u,d]);function b(){l.current.scrollContainers&&(l.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",h,!0)),l.current.scrollContainers=null),l.current.resizeObserver&&(l.current.resizeObserver.disconnect(),l.current.resizeObserver=null)}function m(){l.current.element&&(l.current.resizeObserver=new i(h),l.current.resizeObserver.observe(l.current.element),t&&l.current.scrollContainers&&l.current.scrollContainers.forEach(e=>e.addEventListener("scroll",h,{capture:!0,passive:!0})))}var y,v,g;return y=h,v=Boolean(t),Object(r.useEffect)(()=>{if(v){const e=y;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e,!0)}}},[y,v]),g=p,Object(r.useEffect)(()=>{const e=g;return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[g]),Object(r.useEffect)(()=>{b(),m()},[t,h,p]),Object(r.useEffect)(()=>b,[]),[e=>{e&&e!==l.current.element&&(b(),l.current.element=e,l.current.scrollContainers=function e(t){const n=[];if(!t||t===document.body)return n;const{overflow:r,overflowX:o,overflowY:i}=window.getComputedStyle(t);[r,o,i].some(e=>"auto"===e||"scroll"===e)&&n.push(t);return[...n,...e(t.parentElement)]}(e),m())},a,f]}const a=["x","y","top","bottom","left","right","width","height"],c=(e,t)=>a.every(n=>e[n]===t[n]);Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(e,"exports").writable&&(e.exports=i),t.a=i}).call(this,n("cyaT")(e))}}]);