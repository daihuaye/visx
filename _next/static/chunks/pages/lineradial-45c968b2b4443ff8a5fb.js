_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[103],{"75In":function(n,t,e){"use strict";e.d(t,"b",(function(){return p})),e.d(t,"a",(function(){return m}));var i=e("PB0s"),a=e("KLrH"),r=e("/bzO"),o=e("2+fR"),c=e("W1cA");function s(n){return Math.log(n)}function l(n){return Math.exp(n)}function u(n){return-Math.log(-n)}function d(n){return-Math.exp(-n)}function h(n){return isFinite(n)?+("1e"+n):n<0?0:n}function f(n){return function(t){return-n(-t)}}function p(n){var t,e,o=n(s,l),c=o.domain,p=10;function m(){return t=function(n){return n===Math.E?Math.log:10===n&&Math.log10||2===n&&Math.log2||(n=Math.log(n),function(t){return Math.log(t)/n})}(p),e=function(n){return 10===n?h:n===Math.E?Math.exp:function(t){return Math.pow(n,t)}}(p),c()[0]<0?(t=f(t),e=f(e),n(u,d)):n(s,l),o}return o.base=function(n){return arguments.length?(p=+n,m()):p},o.domain=function(n){return arguments.length?(c(n),m()):c()},o.ticks=function(n){var a,r=c(),o=r[0],s=r[r.length-1];(a=s<o)&&(h=o,o=s,s=h);var l,u,d,h=t(o),f=t(s),m=null==n?10:+n,g=[];if(!(p%1)&&f-h<m){if(h=Math.floor(h),f=Math.ceil(f),o>0){for(;h<=f;++h)for(u=1,l=e(h);u<p;++u)if(!((d=l*u)<o)){if(d>s)break;g.push(d)}}else for(;h<=f;++h)for(u=p-1,l=e(h);u>=1;--u)if(!((d=l*u)<o)){if(d>s)break;g.push(d)}2*g.length<m&&(g=Object(i.a)(o,s,m))}else g=Object(i.a)(h,f,Math.min(f-h,m)).map(e);return a?g.reverse():g},o.tickFormat=function(n,i){if(null==i&&(i=10===p?".0e":","),"function"!==typeof i&&(i=Object(a.a)(i)),n===1/0)return i;null==n&&(n=10);var r=Math.max(1,p*n/o.ticks().length);return function(n){var a=n/e(Math.round(t(n)));return a*p<p-.5&&(a*=p),a<=r?i(n):""}},o.nice=function(){return c(Object(r.a)(c(),{floor:function(n){return e(Math.floor(t(n)))},ceil:function(n){return e(Math.ceil(t(n)))}}))},o}function m(){var n=p(Object(o.d)()).domain([1,10]);return n.copy=function(){return Object(o.a)(n,m()).base(n.base())},c.b.apply(n,arguments),n}},HO86:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var i=e("lEbO");function a(n,t){if(n){if("string"===typeof n)return Object(i.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(i.a)(n,t):void 0}}},"KBH/":function(n,t,e){"use strict";e.d(t,"b",(function(){return g})),e.d(t,"a",(function(){return y}));var i=e("fGyu"),a=e("ERkP"),r=e.n(a),o=e("JmwF"),c=e("rySy"),s=e("cjvV"),l=e("i2hO"),u=e("t4/P"),d=e("oT5u"),h=e.n(d),f=e("Cf/J"),p=e("1GyV"),m=r.a.createElement,g="#aeeef8",y="#744cca",_={tension:20};function x(n,t){var e=n.map(t);return[Math.min.apply(Math,Object(i.a)(e)),Math.max.apply(Math,Object(i.a)(e))]}var b=function(n){return new Date(n.date).valueOf()},v=function(n){return n.close},k=Object(s.a)({range:[0,2*Math.PI],domain:x(h.a,b)}),S=Object(l.a)({domain:x(h.a,v)}),O=function(n){return k(b(n))},w=function(n){return S(v(n))},E=h.a[0],A=h.a[h.a.length-1];t.c=function(n){var t=n.width,e=n.height,i=n.animate,s=void 0===i||i,l=Object(a.useRef)(null),d=Object(a.useState)(0),x=d[0],j=d[1],M=Object(a.useState)(!1),R=M[0],L=M[1],P=Object(p.useSpring)({frame:R?0:1,config:_,onRest:function(){return L(!1)}}),T=l.current;if(Object(a.useEffect)((function(){l.current&&j(l.current.getTotalLength())}),[T]),t<10)return null;S.range([0,e/2-20]);var N=S.ticks(),C=function(){return L(!0)};return m(r.a.Fragment,null,s&&m(r.a.Fragment,null,m("button",{onClick:C,onTouchStart:C},"Animate"),m("br",null)),m("svg",{width:t,height:e,onClick:function(){return L(!R)}},m(f.a,{from:"#e5fd3d",to:g,id:"line-gradient"}),m("rect",{width:t,height:e,fill:y,rx:14}),m(o.a,{top:e/2,left:t/2},N.map((function(n,t){return m("circle",{key:"radial-grid-".concat(t),r:S(n),stroke:g,strokeWidth:1,fill:g,fillOpacity:1/(t+1)-1/t*.2,strokeOpacity:.2})})),N.map((function(n,t){return m("text",{key:"radial-grid-".concat(t),y:-S(n),dy:"-.33em",fontSize:8,fill:g,textAnchor:"middle"},n)})),m(c.a,{angle:O,radius:w,curve:u.a},(function(n){var t=(0,n.path)(h.a)||"";return m(r.a.Fragment,null,m(p.animated.path,{d:t,ref:l,strokeWidth:2,strokeOpacity:.8,strokeLinecap:"round",fill:"none",stroke:s?"#603FA8":"url(#line-gradient)"}),R&&m(p.animated.path,{d:t,strokeWidth:2,strokeOpacity:.8,strokeLinecap:"round",fill:"none",stroke:"url(#line-gradient)",strokeDashoffset:P.frame.interpolate((function(n){return n*x})),strokeDasharray:x}))})),[E,A].map((function(n,t){var e=k(b(n))*Math.PI/180,i=-S(v(n));return m("circle",{key:"line-cap-".concat(t),cx:e,cy:i,fill:"#dff84d",r:3})})))))};try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-shape-line-radial/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-shape-line-radial/Example.tsx#Example"})}catch(j){}},Rzvu:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lineradial",function(){return e("vFin")}])},fGyu:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var i=e("lEbO");var a=e("HO86");function r(n){return function(n){if(Array.isArray(n))return Object(i.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(a.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},i2hO:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var i=e("75In"),a=e("xx0A"),r=Object(a.b)("domain","range","reverse","base","clamp","interpolate","nice","round");function o(n){return r(Object(i.a)(),n)}},lEbO:function(n,t,e){"use strict";function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}e.d(t,"a",(function(){return i}))},"m+Ft":function(n,t,e){"use strict";function i(n,t,e){n._context.bezierCurveTo((2*n._x0+n._x1)/3,(2*n._y0+n._y1)/3,(n._x0+2*n._x1)/3,(n._y0+2*n._y1)/3,(n._x0+4*n._x1+t)/6,(n._y0+4*n._y1+e)/6)}function a(n){this._context=n}e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return a})),a.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:i(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:i(this,n,t)}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=t}},t.b=function(n){return new a(n)}},oUui:function(n){n.exports=JSON.parse('{"name":"@visx/demo-shape-line-radial","description":"Standalone visx line radial demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/curve":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","react-spring":"^8.0.27","typescript":"^3"},"keywords":["visualization","d3","react","visx","shape","radial","line"]}')},rySy:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var i=e("ERkP"),a=e.n(i),r=e("O94r"),o=e.n(r),c=e("dGDr");function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}).apply(this,arguments)}function l(n){var t=n.className,e=n.angle,i=n.radius,r=n.defined,l=n.curve,u=n.data,d=void 0===u?[]:u,h=n.innerRef,f=n.children,p=n.fill,m=void 0===p?"transparent":p,g=function(n,t){if(null==n)return{};var e,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,["className","angle","radius","defined","curve","data","innerRef","children","fill"]),y=Object(c.e)({angle:e,radius:i,defined:r,curve:l});return f?a.a.createElement(a.a.Fragment,null,f({path:y})):a.a.createElement("path",s({ref:h,className:o()("visx-line-radial",t),d:y(d)||"",fill:m},g))}},"t4/P":function(n,t,e){"use strict";var i=e("m+Ft");function a(n){this._context=n}a.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+n)/6,a=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(e,a):this._context.moveTo(e,a);break;case 3:this._point=4;default:Object(i.c)(this,n,t)}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=t}},t.a=function(n){return new a(n)}},vFin:function(n,t,e){"use strict";e.r(t);var i=e("ERkP"),a=e.n(i),r=e("6wy5"),o=e("KBH/"),c=e("oUui"),s=a.a.createElement;t.default=function(){return s(r.a,{component:o.c,title:"Line Radial",codeSandboxDirectoryName:"visx-shape-line-radial",packageJson:c},"/**\n * Animated radial line example using svg dash offset trick. See here for more\n * https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3.html\n */\nimport React, { useRef, useState, useEffect } from 'react';\nimport { Group } from '@visx/group';\nimport { LineRadial } from '@visx/shape';\nimport { scaleTime, scaleLog } from '@visx/scale';\nimport { curveBasisOpen } from '@visx/curve';\nimport appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';\nimport { LinearGradient } from '@visx/gradient';\nimport { animated, useSpring } from 'react-spring';\n\nconst green = '#e5fd3d';\nexport const blue = '#aeeef8';\nconst darkgreen = '#dff84d';\nexport const background = '#744cca';\nconst darkbackground = '#603FA8';\nconst springConfig = {\n  tension: 20,\n};\n\n// utils\nfunction extent<Datum>(data: Datum[], value: (d: Datum) => number) {\n  const values = data.map(value);\n  return [Math.min(...values), Math.max(...values)];\n}\n\n// accessors\nconst date = (d: AppleStock) => new Date(d.date).valueOf();\nconst close = (d: AppleStock) => d.close;\n\n// scales\nconst xScale = scaleTime<number>({\n  range: [0, Math.PI * 2],\n  domain: extent(appleStock, date),\n});\nconst yScale = scaleLog<number>({\n  domain: extent(appleStock, close),\n});\n\nconst angle = (d: AppleStock) => xScale(date(d));\nconst radius = (d: AppleStock) => yScale(close(d));\n\nconst firstPoint = appleStock[0];\nconst lastPoint = appleStock[appleStock.length - 1];\n\nexport type LineRadialProps = {\n  width: number;\n  height: number;\n  animate?: boolean;\n};\n\nexport default ({ width, height, animate = true }: LineRadialProps) => {\n  const lineRef = useRef<SVGPathElement>(null);\n  const [lineLength, setLineLength] = useState<number>(0);\n  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);\n\n  const spring = useSpring({\n    frame: shouldAnimate ? 0 : 1,\n    config: springConfig,\n    onRest: () => setShouldAnimate(false),\n  });\n\n  // set line length once it is known after initial render\n  const effectDependency = lineRef.current;\n  useEffect(() => {\n    if (lineRef.current) {\n      setLineLength(lineRef.current.getTotalLength());\n    }\n  }, [effectDependency]);\n\n  if (width < 10) return null;\n\n  // Update scale output to match component dimensions\n  yScale.range([0, height / 2 - 20]);\n\n  const yScaleTicks = yScale.ticks();\n  const handlePress = () => setShouldAnimate(true);\n\n  return (\n    <>\n      {animate && (\n        <>\n          <button onClick={handlePress} onTouchStart={handlePress}>\n            Animate\n          </button>\n          <br />\n        </>\n      )}\n      <svg width={width} height={height} onClick={() => setShouldAnimate(!shouldAnimate)}>\n        <LinearGradient from={green} to={blue} id=\"line-gradient\" />\n        <rect width={width} height={height} fill={background} rx={14} />\n        <Group top={height / 2} left={width / 2}>\n          {/** Radial circles */}\n          {yScaleTicks.map((tick, i) => (\n            <circle\n              key={`radial-grid-${i}`}\n              r={yScale(tick)}\n              stroke={blue}\n              strokeWidth={1}\n              fill={blue}\n              fillOpacity={1 / (i + 1) - (1 / i) * 0.2}\n              strokeOpacity={0.2}\n            />\n          ))}\n          {/** Labels on top */}\n          {yScaleTicks.map((tick, i) => (\n            <text\n              key={`radial-grid-${i}`}\n              y={-yScale(tick)}\n              dy=\"-.33em\"\n              fontSize={8}\n              fill={blue}\n              textAnchor=\"middle\"\n            >\n              {tick}\n            </text>\n          ))}\n\n          <LineRadial angle={angle} radius={radius} curve={curveBasisOpen}>\n            {({ path }) => {\n              const d = path(appleStock) || '';\n              return (\n                <>\n                  <animated.path\n                    d={d}\n                    ref={lineRef}\n                    strokeWidth={2}\n                    strokeOpacity={0.8}\n                    strokeLinecap=\"round\"\n                    fill=\"none\"\n                    stroke={animate ? darkbackground : 'url(#line-gradient)'}\n                  />\n                  {shouldAnimate && (\n                    <animated.path\n                      d={d}\n                      strokeWidth={2}\n                      strokeOpacity={0.8}\n                      strokeLinecap=\"round\"\n                      fill=\"none\"\n                      stroke=\"url(#line-gradient)\"\n                      strokeDashoffset={spring.frame.interpolate(v => v * lineLength)}\n                      strokeDasharray={lineLength}\n                    />\n                  )}\n                </>\n              );\n            }}\n          </LineRadial>\n\n          {[firstPoint, lastPoint].map((d, i) => {\n            const cx = (xScale(date(d)) * Math.PI) / 180;\n            const cy = -yScale(close(d));\n            return <circle key={`line-cap-${i}`} cx={cx} cy={cy} fill={darkgreen} r={3} />;\n          })}\n        </Group>\n      </svg>\n    </>\n  );\n};\n")}}},[["Rzvu",0,2,1,3,4,5,6,7,11,13,17]]]);