_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"+fu8":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return f}));var r=n("aWzz"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("O94r"),l=n.n(c);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var u={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"};function f(t){var e=t.className,n=t.top,r=t.left,o=t.offsetLeft,i=void 0===o?10:o,c=t.offsetTop,f=void 0===c?10:c,p=t.style,d=void 0===p?u:p,h=t.children,v=t.unstyled,y=void 0!==v&&v,b=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["className","top","left","offsetLeft","offsetTop","style","children","unstyled"]);return a.a.createElement("div",s({className:l()("visx-tooltip",e),style:s({top:null==n||null==f?n:n+f,left:null==r||null==i?r:r+i},!y&&d)},b),h)}f.propTypes={left:o.a.number,top:o.a.number,offsetLeft:o.a.number,offsetTop:o.a.number,className:o.a.string,children:o.a.node,unstyled:o.a.bool}},"67po":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("uKU/"),o=n("xx0A"),i=Object(o.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function a(t){return i(Object(r.a)(),t)}},"9Jhr":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i),c=n("1Wmu"),l=n("dGDr");function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t){var e=t.x,n=t.x0,r=t.x1,i=t.y,u=t.y1,f=t.y0,p=t.yScale,d=t.data,h=void 0===d?[]:d,v=t.defined,y=void 0===v?function(){return!0}:v,b=t.className,m=t.curve,x=t.innerRef,g=t.children,O=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"]),k=Object(l.b)({x:e,x0:n,x1:r,defined:y,curve:m});return f?Object(c.a)(k.y0,f):k.y0(p.range()[0]),i&&!u&&Object(c.a)(k.y1,i),u&&!i&&Object(c.a)(k.y1,u),g?o.a.createElement(o.a.Fragment,null,g({path:k})):o.a.createElement("path",s({ref:x,className:a()("visx-area-closed",b),d:k(h)||""},O))}},DTjC:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/areas",function(){return n("SYW9")}])},EbDF:function(t,e,n){"use strict";function r(t){return t<0?-1:1}function o(t,e,n){var o=t._x1-t._x0,i=e-t._x1,a=(t._y1-t._y0)/(o||i<0&&-0),c=(n-t._y1)/(i||o<0&&-0),l=(a*i+c*o)/(o+i);return(r(a)+r(c))*Math.min(Math.abs(a),Math.abs(c),.5*Math.abs(l))||0}function i(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}function a(t,e,n){var r=t._x0,o=t._y0,i=t._x1,a=t._y1,c=(i-r)/3;t._context.bezierCurveTo(r+c,o+c*e,i-c,a-c*n,i,a)}function c(t){this._context=t}function l(t){this._context=new s(t)}function s(t){this._context=t}function u(t){return new c(t)}function f(t){return new l(t)}n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return f})),c.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:a(this,this._t0,i(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var n=NaN;if(e=+e,(t=+t)!==this._x1||e!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,a(this,i(this,n=o(this,t,e)),n);break;default:a(this,this._t0,n=o(this,t,e))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}},(l.prototype=Object.create(c.prototype)).point=function(t,e){c.prototype.point.call(this,e,t)},s.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,r,o,i){this._context.bezierCurveTo(e,t,r,n,i,o)}}},HlJr:function(t,e,n){"use strict";function r(t){if(("function"===typeof t||"object"===typeof t&&t)&&"valueOf"in t){var e=t.valueOf();if("number"===typeof e)return e}return t}n.d(e,"a",(function(){return r}))},Ifh9:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("aWzz"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("O94r"),l=n.n(c),s=n("hsl+"),u=n.n(s),f=n("JmwF"),p=n("rkTo"),d=n("nNND"),h=n("HlJr");function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t){var e=t.top,n=void 0===e?0:e,r=t.left,o=void 0===r?0:r,i=t.scale,c=t.width,s=t.stroke,y=void 0===s?"#eaf0f6":s,b=t.strokeWidth,m=void 0===b?1:b,x=t.strokeDasharray,g=t.className,O=t.children,k=t.numTicks,j=void 0===k?10:k,w=t.lineStyle,T=t.offset,_=t.tickValues,E=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"]),S=(null!=_?_:Object(d.a)(i,j)).map((function(t){var e=T?(Object(h.a)(i(t))||0)+T:Object(h.a)(i(t))||0;return{from:new p.a({x:0,y:e}),to:new p.a({x:c,y:e})}}));return a.a.createElement(f.a,{className:l()("visx-rows",g),top:n,left:o},O?O({lines:S}):S.map((function(t,e){var n=t.from,r=t.to;return a.a.createElement(u.a,v({key:"row-line-"+e,from:n,to:r,stroke:y,strokeWidth:m,strokeDasharray:x,style:w},E))})))}y.propTypes={tickValues:o.a.array,width:o.a.number.isRequired}},QnoR:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("ERkP");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t){var e=Object(r.useState)(o({tooltipOpen:!1},t)),n=e[0],i=e[1],a=Object(r.useCallback)((function(t){var e=t.tooltipOpen,n=t.tooltipLeft,r=t.tooltipTop,a=t.tooltipData;return i((function(t){return o({},t,{tooltipOpen:e,tooltipLeft:n,tooltipTop:r,tooltipData:a})}))}),[]),c=Object(r.useCallback)((function(t){var e=t.tooltipLeft,n=t.tooltipTop,r=t.tooltipData;return a({tooltipOpen:!0,tooltipLeft:e,tooltipTop:n,tooltipData:r})}),[a]),l=Object(r.useCallback)((function(){return a({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})}),[a]);return{tooltipOpen:n.tooltipOpen,tooltipLeft:n.tooltipLeft,tooltipTop:n.tooltipTop,tooltipData:n.tooltipData,updateTooltip:a,showTooltip:c,hideTooltip:l}}},SYW9:function(t,e,n){"use strict";n.r(e);var r=n("ERkP"),o=n.n(r),i=n("6wy5"),a=n("qyW2"),c=n("bf+l"),l=o.a.createElement;e.default=function(){return l(i.a,{component:a.c,title:"Areas",codeSandboxDirectoryName:"visx-area",packageJson:c},"import React, { useMemo, useCallback } from 'react';\nimport { AreaClosed, Line, Bar } from '@visx/shape';\nimport appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';\nimport { curveMonotoneX } from '@visx/curve';\nimport { GridRows, GridColumns } from '@visx/grid';\nimport { scaleTime, scaleLinear } from '@visx/scale';\nimport { withTooltip, Tooltip, defaultStyles } from '@visx/tooltip';\nimport { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';\nimport { localPoint } from '@visx/event';\nimport { LinearGradient } from '@visx/gradient';\nimport { max, extent, bisector } from 'd3-array';\nimport { timeFormat } from 'd3-time-format';\n\ntype TooltipData = AppleStock;\n\nconst stock = appleStock.slice(800);\nexport const background = '#3b6978';\nexport const background2 = '#204051';\nexport const accentColor = '#edffea';\nexport const accentColorDark = '#75daad';\nconst tooltipStyles = {\n  ...defaultStyles,\n  background,\n  border: '1px solid white',\n  color: 'white',\n};\n\n// util\nconst formatDate = timeFormat(\"%b %d, '%y\");\n\n// accessors\nconst getDate = (d: AppleStock) => new Date(d.date);\nconst getStockValue = (d: AppleStock) => d.close;\nconst bisectDate = bisector<AppleStock, Date>(d => new Date(d.date)).left;\n\nexport type AreaProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default withTooltip<AreaProps, TooltipData>(\n  ({\n    width,\n    height,\n    margin = { top: 0, right: 0, bottom: 0, left: 0 },\n    showTooltip,\n    hideTooltip,\n    tooltipData,\n    tooltipTop = 0,\n    tooltipLeft = 0,\n  }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {\n    if (width < 10) return null;\n\n    // bounds\n    const xMax = width - margin.left - margin.right;\n    const yMax = height - margin.top - margin.bottom;\n\n    // scales\n    const dateScale = useMemo(\n      () =>\n        scaleTime({\n          range: [0, xMax],\n          domain: extent(stock, getDate) as [Date, Date],\n        }),\n      [xMax],\n    );\n    const stockValueScale = useMemo(\n      () =>\n        scaleLinear({\n          range: [yMax, 0],\n          domain: [0, (max(stock, getStockValue) || 0) + yMax / 3],\n          nice: true,\n        }),\n      [yMax],\n    );\n\n    // tooltip handler\n    const handleTooltip = useCallback(\n      (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {\n        const { x } = localPoint(event) || { x: 0 };\n        const x0 = dateScale.invert(x);\n        const index = bisectDate(stock, x0, 1);\n        const d0 = stock[index - 1];\n        const d1 = stock[index];\n        let d = d0;\n        if (d1 && getDate(d1)) {\n          d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;\n        }\n        showTooltip({\n          tooltipData: d,\n          tooltipLeft: x,\n          tooltipTop: stockValueScale(getStockValue(d)),\n        });\n      },\n      [showTooltip, stockValueScale, dateScale],\n    );\n\n    return (\n      <div>\n        <svg width={width} height={height}>\n          <rect\n            x={0}\n            y={0}\n            width={width}\n            height={height}\n            fill=\"url(#area-background-gradient)\"\n            rx={14}\n          />\n          <LinearGradient id=\"area-background-gradient\" from={background} to={background2} />\n          <LinearGradient id=\"area-gradient\" from={accentColor} to={accentColor} toOpacity={0.1} />\n          <GridRows\n            scale={stockValueScale}\n            width={xMax}\n            strokeDasharray=\"3,3\"\n            stroke={accentColor}\n            strokeOpacity={0.3}\n            pointerEvents=\"none\"\n          />\n          <GridColumns\n            scale={dateScale}\n            height={yMax}\n            strokeDasharray=\"3,3\"\n            stroke={accentColor}\n            strokeOpacity={0.3}\n            pointerEvents=\"none\"\n          />\n          <AreaClosed<AppleStock>\n            data={stock}\n            x={d => dateScale(getDate(d))}\n            y={d => stockValueScale(getStockValue(d))}\n            yScale={stockValueScale}\n            strokeWidth={1}\n            stroke=\"url(#area-gradient)\"\n            fill=\"url(#area-gradient)\"\n            curve={curveMonotoneX}\n          />\n          <Bar\n            x={0}\n            y={0}\n            width={width}\n            height={height}\n            fill=\"transparent\"\n            rx={14}\n            onTouchStart={handleTooltip}\n            onTouchMove={handleTooltip}\n            onMouseMove={handleTooltip}\n            onMouseLeave={() => hideTooltip()}\n          />\n          {tooltipData && (\n            <g>\n              <Line\n                from={{ x: tooltipLeft, y: 0 }}\n                to={{ x: tooltipLeft, y: yMax }}\n                stroke={accentColorDark}\n                strokeWidth={2}\n                pointerEvents=\"none\"\n                strokeDasharray=\"5,2\"\n              />\n              <circle\n                cx={tooltipLeft}\n                cy={tooltipTop + 1}\n                r={4}\n                fill=\"black\"\n                fillOpacity={0.1}\n                stroke=\"black\"\n                strokeOpacity={0.1}\n                strokeWidth={2}\n                pointerEvents=\"none\"\n              />\n              <circle\n                cx={tooltipLeft}\n                cy={tooltipTop}\n                r={4}\n                fill={accentColorDark}\n                stroke=\"white\"\n                strokeWidth={2}\n                pointerEvents=\"none\"\n              />\n            </g>\n          )}\n        </svg>\n        {tooltipData && (\n          <div>\n            <Tooltip top={tooltipTop - 12} left={tooltipLeft + 12} style={tooltipStyles}>\n              {`$${getStockValue(tooltipData)}`}\n            </Tooltip>\n            <Tooltip\n              top={yMax - 14}\n              left={tooltipLeft}\n              style={{\n                ...defaultStyles,\n                minWidth: 72,\n                textAlign: 'center',\n                transform: 'translateX(-50%)',\n              }}\n            >\n              {formatDate(getDate(tooltipData))}\n            </Tooltip>\n          </div>\n        )}\n      </div>\n    );\n  },\n);\n")}},"VB+g":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("rkTo"),o=n("ZQHj");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a={x:0,y:0};function c(t,e){if(!t||!e)return null;var n=function(t){return t?Object(o.f)(t)?t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:i({},a):{x:t.clientX,y:t.clientY}:i({},a)}(e),c=Object(o.c)(t)?t.ownerSVGElement:t,l=Object(o.d)(c)?c.getScreenCTM():null;if(Object(o.e)(c)&&l){var s=c.createSVGPoint();return s.x=n.x,s.y=n.y,s=s.matrixTransform(l.inverse()),new r.a({x:s.x,y:s.y})}var u=t.getBoundingClientRect();return new r.a({x:n.x-u.left-t.clientLeft,y:n.y-u.top-t.clientTop})}},WqRU:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t){var e=t.from,n=void 0===e?{x:0,y:0}:e,r=t.to,i=void 0===r?{x:1,y:1}:r,l=t.fill,s=void 0===l?"transparent":l,u=t.className,f=t.innerRef,p=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["from","to","fill","className","innerRef"]);return o.a.createElement("line",c({ref:f,className:a()("visx-line",u),x1:n.x,y1:n.y,x2:i.x,y2:i.y,fill:s},p))}},ZQHj:function(t,e,n){"use strict";function r(t){return!!t&&t instanceof Element}function o(t){return!!t&&(t instanceof SVGElement||"ownerSVGElement"in t)}function i(t){return!!t&&"createSVGPoint"in t}function a(t){return!!t&&"getScreenCTM"in t}function c(t){return!!t&&"changedTouches"in t}function l(t){return!!t&&(t instanceof Event||"nativeEvent"in t&&t.nativeEvent instanceof Event)}n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"b",(function(){return l}))},Zbhd:function(t,e,n){"use strict";var r=n("PB0s"),o=n("XYeE"),i=n("jLnZ"),a=n("KLrH");e.a=function(t,e,n,c){var l,s=Object(r.c)(t,e,n);switch((c=Object(o.a)(null==c?",f":c)).type){case"s":var u=Math.max(Math.abs(t),Math.abs(e));return null!=c.precision||isNaN(l=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(e)/3)))-Object(i.a)(Math.abs(t)))}(s,u))||(c.precision=l),Object(a.b)(c,u);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(l=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,Object(i.a)(e)-Object(i.a)(t))+1}(s,Math.max(Math.abs(t),Math.abs(e))))||(c.precision=l-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(l=function(t){return Math.max(0,-Object(i.a)(Math.abs(t)))}(s))||(c.precision=l-2*("%"===c.type))}return Object(a.a)(c)}},"bf+l":function(t){t.exports=JSON.parse('{"name":"@visx/demo-area","description":"Standalone visx area demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/curve":"latest","@visx/event":"latest","@visx/gradient":"latest","@visx/grid":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/tooltip":"latest","d3-array":"^2.4.0","d3-time-format":"2.2.3","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","area"]}')},eMuC:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("aWzz"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("O94r"),l=n.n(c),s=n("hsl+"),u=n.n(s),f=n("JmwF"),p=n("rkTo"),d=n("nNND"),h=n("HlJr");function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t){var e=t.top,n=void 0===e?0:e,r=t.left,o=void 0===r?0:r,i=t.scale,c=t.height,s=t.stroke,y=void 0===s?"#eaf0f6":s,b=t.strokeWidth,m=void 0===b?1:b,x=t.strokeDasharray,g=t.className,O=t.numTicks,k=void 0===O?10:O,j=t.lineStyle,w=t.offset,T=t.tickValues,_=t.children,E=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"]),S=(null!=T?T:Object(d.a)(i,k)).map((function(t){var e=w?(Object(h.a)(i(t))||0)+w:Object(h.a)(i(t))||0;return{from:new p.a({x:e,y:0}),to:new p.a({x:e,y:c})}}));return a.a.createElement(f.a,{className:l()("visx-columns",g),top:n,left:o},_?_({lines:S}):S.map((function(t,e){var n=t.from,r=t.to;return a.a.createElement(u.a,v({key:"column-line-"+e,from:n,to:r,stroke:y,strokeWidth:m,strokeDasharray:x,style:j},E))})))}y.propTypes={tickValues:o.a.array,height:o.a.number.isRequired}},g2fB:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t){var e=t.className,n=t.innerRef,r=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["className","innerRef"]);return o.a.createElement("rect",c({ref:n,className:a()("visx-bar",e)},r))}},"hsl+":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){var e=t.from,n=void 0===e?{x:0,y:0}:e,i=t.to,c=void 0===i?{x:1,y:1}:i,l=t.fill,s=void 0===l?"transparent":l,u=t.className,f=t.innerRef,p=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["from","to","fill","className","innerRef"]);return r.default.createElement("line",a({ref:f,className:(0,o.default)("visx-line",u),x1:n.x,y1:n.y,x2:c.x,y2:c.y,fill:s},p))};var r=i(n("ERkP")),o=i(n("O94r"));function i(t){return t&&t.__esModule?t:{default:t}}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}},jpI8:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("VB+g"),o=n("ZQHj");function i(t,e){if(Object(o.a)(t)&&e)return Object(r.a)(t,e);if(Object(o.b)(t)){var n=t,i=n.target;if(i)return Object(r.a)(i,n)}return null}},nNND:function(t,e,n){"use strict";function r(t,e){var n=t;return"ticks"in n?n.ticks(e):n.domain().filter((function(t,n,r){return null==e||r.length<=e||n%Math.round((r.length-1)/e)===0}))}n.d(e,"a",(function(){return r}))},qyW2:function(t,e,n){"use strict";n.d(e,"b",(function(){return _})),n.d(e,"a",(function(){return E}));var r=n("zjfJ"),o=n("ERkP"),i=n.n(o),a=n("9Jhr"),c=n("g2fB"),l=n("WqRU"),s=n("oT5u"),u=n.n(s),f=n("EbDF"),p=n("Ifh9"),d=n("eMuC"),h=n("cjvV"),v=n("67po"),y=n("+fu8"),b=n("xc3W"),m=n("jpI8"),x=n("Cf/J"),g=n("ue4z"),O=n("mHfT"),k=i.a.createElement;function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var T=u.a.slice(800),_="#3b6978",E="#edffea",S=w(w({},y.b),{},{background:_,border:"1px solid white",color:"white"}),M=Object(O.a)("%b %d, '%y"),D=function(t){return new Date(t.date)},N=function(t){return t.close},P=Object(g.a)((function(t){return new Date(t.date)})).left;e.c=Object(b.a)((function(t){var e=t.width,n=t.height,r=t.margin,i=void 0===r?{top:0,right:0,bottom:0,left:0}:r,s=t.showTooltip,u=t.hideTooltip,b=t.tooltipData,O=t.tooltipTop,j=void 0===O?0:O,R=t.tooltipLeft,C=void 0===R?0:R;if(e<10)return null;var L=e-i.left-i.right,W=n-i.top-i.bottom,V=Object(o.useMemo)((function(){return Object(h.a)({range:[0,L],domain:Object(g.b)(T,D)})}),[L]),A=Object(o.useMemo)((function(){return Object(v.a)({range:[W,0],domain:[0,(Object(g.c)(T,N)||0)+W/3],nice:!0})}),[W]),z=Object(o.useCallback)((function(t){var e=(Object(m.a)(t)||{x:0}).x,n=V.invert(e),r=P(T,n,1),o=T[r-1],i=T[r],a=o;i&&D(i)&&(a=n.valueOf()-D(o).valueOf()>D(i).valueOf()-n.valueOf()?i:o),s({tooltipData:a,tooltipLeft:e,tooltipTop:A(N(a))})}),[s,A,V]);return k("div",null,k("svg",{width:e,height:n},k("rect",{x:0,y:0,width:e,height:n,fill:"url(#area-background-gradient)",rx:14}),k(x.a,{id:"area-background-gradient",from:_,to:"#204051"}),k(x.a,{id:"area-gradient",from:E,to:E,toOpacity:.1}),k(p.a,{scale:A,width:L,strokeDasharray:"3,3",stroke:E,strokeOpacity:.3,pointerEvents:"none"}),k(d.a,{scale:V,height:W,strokeDasharray:"3,3",stroke:E,strokeOpacity:.3,pointerEvents:"none"}),k(a.a,{data:T,x:function(t){return V(D(t))},y:function(t){return A(N(t))},yScale:A,strokeWidth:1,stroke:"url(#area-gradient)",fill:"url(#area-gradient)",curve:f.a}),k(c.a,{x:0,y:0,width:e,height:n,fill:"transparent",rx:14,onTouchStart:z,onTouchMove:z,onMouseMove:z,onMouseLeave:function(){return u()}}),b&&k("g",null,k(l.a,{from:{x:C,y:0},to:{x:C,y:W},stroke:"#75daad",strokeWidth:2,pointerEvents:"none",strokeDasharray:"5,2"}),k("circle",{cx:C,cy:j+1,r:4,fill:"black",fillOpacity:.1,stroke:"black",strokeOpacity:.1,strokeWidth:2,pointerEvents:"none"}),k("circle",{cx:C,cy:j,r:4,fill:"#75daad",stroke:"white",strokeWidth:2,pointerEvents:"none"}))),b&&k("div",null,k(y.a,{top:j-12,left:C+12,style:S},"$".concat(N(b))),k(y.a,{top:W-14,left:C,style:w(w({},y.b),{},{minWidth:72,textAlign:"center",transform:"translateX(-50%)"})},M(D(b)))))}));try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-area/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-area/Example.tsx#Example"})}catch(R){}},rkTo:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}));var o=function(){function t(t){var e=t.x,n=void 0===e?0:e,o=t.y,i=void 0===o?0:o;r(this,"x",0),r(this,"y",0),this.x=n,this.y=i}var e=t.prototype;return e.value=function(){return{x:this.x,y:this.y}},e.toArray=function(){return[this.x,this.y]},t}()},"uKU/":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n("PB0s"),o=n("2+fR"),i=n("W1cA"),a=n("Zbhd");function c(t){var e=t.domain;return t.ticks=function(t){var n=e();return Object(r.a)(n[0],n[n.length-1],null==t?10:t)},t.tickFormat=function(t,n){var r=e();return Object(a.a)(r[0],r[r.length-1],null==t?10:t,n)},t.nice=function(n){null==n&&(n=10);var o,i=e(),a=0,c=i.length-1,l=i[a],s=i[c];return s<l&&(o=l,l=s,s=o,o=a,a=c,c=o),(o=Object(r.b)(l,s,n))>0?(l=Math.floor(l/o)*o,s=Math.ceil(s/o)*o,o=Object(r.b)(l,s,n)):o<0&&(l=Math.ceil(l*o)/o,s=Math.floor(s*o)/o,o=Object(r.b)(l,s,n)),o>0?(i[a]=Math.floor(l/o)*o,i[c]=Math.ceil(s/o)*o,e(i)):o<0&&(i[a]=Math.ceil(l*o)/o,i[c]=Math.floor(s*o)/o,e(i)),t},t}function l(){var t=Object(o.b)();return t.copy=function(){return Object(o.a)(t,l())},i.b.apply(t,arguments),c(t)}},ue4z:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return f}));var r=function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN},o=function(t){var e;return 1===t.length&&(e=t,t=function(t,n){return r(e(t),n)}),{left:function(e,n,r,o){for(null==r&&(r=0),null==o&&(o=e.length);r<o;){var i=r+o>>>1;t(e[i],n)<0?r=i+1:o=i}return r},right:function(e,n,r,o){for(null==r&&(r=0),null==o&&(o=e.length);r<o;){var i=r+o>>>1;t(e[i],n)>0?o=i:r=i+1}return r}}};var i=o(r);i.right,i.left;var a=function(t,e){var n,r,o,i=t.length,a=-1;if(null==e){for(;++a<i;)if(null!=(n=t[a])&&n>=n)for(r=o=n;++a<i;)null!=(n=t[a])&&(r>n&&(r=n),o<n&&(o=n))}else for(;++a<i;)if(null!=(n=e(t[a],a,t))&&n>=n)for(r=o=n;++a<i;)null!=(n=e(t[a],a,t))&&(r>n&&(r=n),o<n&&(o=n));return[r,o]},c=Array.prototype,l=(c.slice,c.map,function(t,e,n){t=+t,e=+e,n=(o=arguments.length)<2?(e=t,t=0,1):o<3?1:+n;for(var r=-1,o=0|Math.max(0,Math.ceil((e-t)/n)),i=new Array(o);++r<o;)i[r]=t+r*n;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var s=function(t,e){var n,r,o=t.length,i=-1;if(null==e){for(;++i<o;)if(null!=(n=t[i])&&n>=n)for(r=n;++i<o;)null!=(n=t[i])&&n>r&&(r=n)}else for(;++i<o;)if(null!=(n=e(t[i],i,t))&&n>=n)for(r=n;++i<o;)null!=(n=e(t[i],i,t))&&n>r&&(r=n);return r},u=function(t){for(var e,n,r,o=t.length,i=-1,a=0;++i<o;)a+=t[i].length;for(n=new Array(a);--o>=0;)for(e=(r=t[o]).length;--e>=0;)n[--a]=r[e];return n},f=function(t){if(!(o=t.length))return[];for(var e=-1,n=function(t,e){var n,r,o=t.length,i=-1;if(null==e){for(;++i<o;)if(null!=(n=t[i])&&n>=n)for(r=n;++i<o;)null!=(n=t[i])&&r>n&&(r=n)}else for(;++i<o;)if(null!=(n=e(t[i],i,t))&&n>=n)for(r=n;++i<o;)null!=(n=e(t[i],i,t))&&r>n&&(r=n);return r}(t,p),r=new Array(n);++e<n;)for(var o,i=-1,a=r[e]=new Array(o);++i<o;)a[i]=t[i][e];return r};function p(t){return t.length}},xc3W:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("ERkP"),o=n.n(r),i=n("QnoR");function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e,n){void 0===e&&(e={style:{position:"relative",width:"inherit",height:"inherit"}}),void 0===n&&(n=function(t,e){return o.a.createElement("div",e,t)});return function(r){var c=Object(i.a)();return n(o.a.createElement(t,a({},c,r)),e)}}},zjfJ:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))}},[["DTjC",0,2,1,3,4,5,6,7,11,17]]]);