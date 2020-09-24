(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"0uiS":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("ERkP"),a=n.n(r),i=n("P8FC"),l=n("i9k6"),o=n("P8uG");n.d(t,"packageJson",(function(){return o}));var s=a.a.createElement,u={background:"#e4e3d8"},c={color:"#111"};function d(){return s(l.a,{title:"Chord",description:"<Chord.Chord /> & <Chord.Ribbon />",exampleRenderer:i.a,exampleUrl:"/chord",tileStyles:u,detailsStyles:c})}},AqdV:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v}));var r=n("ue4z"),a=Math.cos,i=Math.sin,l=Math.PI,o=l/2,s=2*l,u=Math.max;function c(e){return function(t,n){return e(t.source.value+t.target.value,n.source.value+n.target.value)}}var d=function(){var e=0,t=null,n=null,a=null;function i(i){var l,o,c,d,p,f,m=i.length,h=[],g=Object(r.e)(m),x=[],y=[],b=y.groups=new Array(m),v=new Array(m*m);for(l=0,p=-1;++p<m;){for(o=0,f=-1;++f<m;)o+=i[p][f];h.push(o),x.push(Object(r.e)(m)),l+=o}for(t&&g.sort((function(e,n){return t(h[e],h[n])})),n&&x.forEach((function(e,t){e.sort((function(e,r){return n(i[t][e],i[t][r])}))})),d=(l=u(0,s-e*m)/l)?e:s/m,o=0,p=-1;++p<m;){for(c=o,f=-1;++f<m;){var w=g[p],O=x[w][f],j=i[w][O],S=o,k=o+=j*l;v[O*m+w]={index:w,subindex:O,startAngle:S,endAngle:k,value:j}}b[w]={index:w,startAngle:c,endAngle:o,value:h[w]},o+=d}for(p=-1;++p<m;)for(f=p-1;++f<m;){var E=v[f*m+p],A=v[p*m+f];(E.value||A.value)&&y.push(E.value<A.value?{source:A,target:E}:{source:E,target:A})}return a?y.sort(a):y}return i.padAngle=function(t){return arguments.length?(e=u(0,t),i):e},i.sortGroups=function(e){return arguments.length?(t=e,i):t},i.sortSubgroups=function(e){return arguments.length?(n=e,i):n},i.sortChords=function(e){return arguments.length?(null==e?a=null:(a=c(e))._=e,i):a&&a._},i},p=Array.prototype.slice,f=function(e){return function(){return e}},m=n("1rRp");function h(e){return e.source}function g(e){return e.target}function x(e){return e.radius}function y(e){return e.startAngle}function b(e){return e.endAngle}var v=function(){var e=h,t=g,n=x,r=y,l=b,s=null;function u(){var u,c=p.call(arguments),d=e.apply(this,c),f=t.apply(this,c),h=+n.apply(this,(c[0]=d,c)),g=r.apply(this,c)-o,x=l.apply(this,c)-o,y=h*a(g),b=h*i(g),v=+n.apply(this,(c[0]=f,c)),w=r.apply(this,c)-o,O=l.apply(this,c)-o;if(s||(s=u=Object(m.a)()),s.moveTo(y,b),s.arc(0,0,h,g,x),g===w&&x===O||(s.quadraticCurveTo(0,0,v*a(w),v*i(w)),s.arc(0,0,v,w,O)),s.quadraticCurveTo(0,0,y,b),s.closePath(),u)return s=null,u+""||null}return u.radius=function(e){return arguments.length?(n="function"===typeof e?e:f(+e),u):n},u.startAngle=function(e){return arguments.length?(r="function"===typeof e?e:f(+e),u):r},u.endAngle=function(e){return arguments.length?(l="function"===typeof e?e:f(+e),u):l},u.source=function(t){return arguments.length?(e=t,u):e},u.target=function(e){return arguments.length?(t=e,u):t},u.context=function(e){return arguments.length?(s=null==e?null:e,u):s},u}},P8FC:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n("yFcC"),a=n.n(r),i=n("ERkP"),l=n.n(i),o=n("9kyG"),s=n("JmwF"),u=n("aWzz"),c=n.n(u),d=n("AqdV");function p(e){var t=e.matrix,n=e.padAngle,r=e.sortGroups,a=e.sortSubgroups,i=e.sortChords,o=e.children,s=Object(d.a)();n&&s.padAngle(n),r&&s.sortGroups(r),a&&s.sortSubgroups(a),i&&s.sortChords(i);var u=s(t);return o?l.a.createElement(l.a.Fragment,null,o({chords:u})):l.a.createElement("g",null)}p.propTypes={matrix:c.a.arrayOf(c.a.arrayOf(c.a.number)).isRequired,padAngle:c.a.number,sortGroups:c.a.oneOfType([c.a.func,c.a.oneOf([null])]),sortSubgroups:c.a.oneOfType([c.a.func,c.a.oneOf([null])]),sortChords:c.a.oneOfType([c.a.func,c.a.oneOf([null])]),children:c.a.func.isRequired};var f=n("O94r"),m=n.n(f);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){e(t)}function x(e){var t=e.chord,n=e.source,r=e.target,a=e.radius,i=e.startAngle,o=e.endAngle,s=e.children,u=e.className,c=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["chord","source","target","radius","startAngle","endAngle","children","className"]),p=Object(d.b)();n&&p.source(n),r&&p.target(r),a&&g(p.radius,a),i&&g(p.startAngle,i),o&&g(p.endAngle,o);var f=p(t);return s?l.a.createElement(l.a.Fragment,null,s({path:f})):l.a.createElement("path",h({className:m()("visx-ribbon",u),d:f||""},c))}x.propTypes={source:c.a.func,target:c.a.func,radius:c.a.oneOfType([c.a.number,c.a.func]),startAngle:c.a.oneOfType([c.a.number,c.a.func]),endAngle:c.a.oneOfType([c.a.number,c.a.func]),children:c.a.func,className:c.a.string};var y=n("D+es"),b=n("Cf/J"),v=l.a.createElement,w=[[11975,5871,8916,2868],[1951,10048,2060,6171],[8010,16145,8090,8045],[1013,990,940,6907]];function O(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}var j=Object(y.a)({domain:[0,1,2,3],range:["url(#gpinkorange)","url(#gpurplered)","url(#gpurplegreen)","url(#gbluelime)"]});function S(e){var t=e.width,n=e.height,r=e.centerSize,i=void 0===r?20:r,l=e.events,u=void 0!==l&&l,c=.5*Math.min(t,n)-(i+10),d=c-i;return t<10?null:v("div",{className:"jsx-2806452125 chords"},v("svg",{width:t,height:n,className:"jsx-2806452125"},v(b.a,{id:"gpinkorange",from:"#ff2fab",to:"#ffc62e",vertical:!1}),v(b.a,{id:"gpurplered",from:"#dc04ff",to:"#d04376",vertical:!1}),v(b.a,{id:"gpurplegreen",from:"#7324ff",to:"#52f091",vertical:!1}),v(b.a,{id:"gbluelime",from:"#04a6ff",to:"#00ddc6",vertical:!1}),v("rect",{width:t,height:n,fill:"#e4e3d8",rx:14,className:"jsx-2806452125"}),v(s.a,{top:n/2,left:t/2},v(p,{matrix:w,padAngle:.05,sortSubgroups:O},(function(e){var t=e.chords;return v("g",{className:"jsx-2806452125"},t.groups.map((function(e,t){return v(o.a,{key:"key-".concat(t),data:e,innerRadius:d,outerRadius:c,fill:j(t),onClick:function(){u&&alert("".concat(JSON.stringify(e)))}})})),t.map((function(e,t){return v(x,{key:"ribbon-".concat(t),chord:e,radius:d,fill:j(e.target.index),fillOpacity:.75,onClick:function(){u&&alert("".concat(JSON.stringify(e)))}})})))})))),v("div",{className:"jsx-2806452125 deets"},v("div",{className:"jsx-2806452125"},"Based on Mike Bostock's ",v("a",{href:"https://bl.ocks.org/mbostock/4062006",className:"jsx-2806452125"},"Chord Diagram"))),v(a.a,{id:"2806452125"},[".chords.jsx-2806452125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}","svg.jsx-2806452125{margin:1rem 0;cursor:pointer;}",".deets.jsx-2806452125{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:12px;}",".deets.jsx-2806452125>div.jsx-2806452125{margin:0.25rem;}"]))}try{S.displayName="Example",S.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},centerSize:{defaultValue:{value:20},description:"",name:"centerSize",required:!1,type:{name:"number | undefined"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-chord/Example.tsx#Example"]={docgenInfo:S.__docgenInfo,name:"Example",path:"src/sandboxes/visx-chord/Example.tsx#Example"})}catch(k){}},P8uG:function(e){e.exports=JSON.parse('{"name":"@visx/demo-chord","description":"Standalone visx chord demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/chord":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx"]}')},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("aWzz")),a=o(n("RNvQ")),i=o(n("ERkP")),l=o(n("LaGA"));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return c(u(t=e.call.apply(e,[this].concat(r))||this),"animationFrameID",0),c(u(t),"resizeObserver",void 0),c(u(t),"target",null),c(u(t),"state",{width:0,height:0,top:0,left:0}),c(u(t),"resize",(0,a.default)((function(e){var n=e.width,r=e.height,a=e.top,i=e.left;t.setState((function(){return{width:n,height:r,top:a,left:i}}))}),t.props.debounceTime,{leading:t.props.enableDebounceLeadingCall})),c(u(t),"setTarget",(function(e){t.target=e})),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var e=this;this.resizeObserver=new l.default((function(t){void 0===t&&(t=[]),t.forEach((function(t){var n=t.contentRect,r=n.left,a=n.top,i=n.width,l=n.height;e.animationFrameID=window.requestAnimationFrame((function(){e.resize({width:i,height:l,top:a,left:r})}))}))})),this.target&&this.resizeObserver.observe(this.target)},o.componentWillUnmount=function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver&&this.resizeObserver.disconnect(),this.resize.cancel()},o.render=function(){var e=this.props,t=e.className,n=e.children,r=(e.debounceTime,e.parentSizeStyles),a=(e.enableDebounceLeadingCall,function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","children","debounceTime","parentSizeStyles","enableDebounceLeadingCall"]));return i.default.createElement("div",s({style:r,ref:this.setTarget,className:t},a),n(s({},this.state,{ref:this.target,resize:this.resize})))},r}(i.default.Component);t.default=d,c(d,"propTypes",{className:r.default.string,debounceTime:r.default.number,enableDebounceLeadingCall:r.default.bool,children:r.default.func.isRequired}),c(d,"defaultProps",{debounceTime:300,enableDebounceLeadingCall:!0,parentSizeStyles:{width:"100%",height:"100%"}})},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("zjfJ"),a=n("yFcC"),i=n.n(a),l=n("ERkP"),o=n.n(l),s=n("jvFD"),u=n.n(s),c=n("i6Tx"),d=n.n(c),p=o.a.createElement;function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){var t,n,a=e.description,l=e.detailsHeight,s=void 0===l?76:l,c=e.detailsStyles,m=e.exampleProps,h=e.exampleRenderer,g=e.exampleUrl,x=e.tileStyles,y=e.title;return p(o.a.Fragment,null,(t=g,n=p("div",{style:x,className:"jsx-713312509 gallery-tile"},p("div",{className:"jsx-713312509 image"},p(d.a,null,(function(e){var t=e.width,n=e.height;return o.a.createElement(h,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(y||a?s:0)},m))}))),(y||a)&&p("div",{style:c,className:"jsx-713312509 details"},y&&p("div",{className:"jsx-713312509 title"},y),a&&p("div",{className:"jsx-713312509 description"},p("pre",{className:"jsx-713312509"},a)))),t?p(u.a,{href:t},n):n),p(i.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(h){}}}]);