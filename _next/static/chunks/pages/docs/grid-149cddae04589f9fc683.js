_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[70],{"+fu8":function(e,n,t){"use strict";t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return c}));var r=t("aWzz"),i=t.n(r),a=t("ERkP"),l=t.n(a),o=t("O94r"),s=t.n(o);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var d={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"};function c(e){var n=e.className,t=e.top,r=e.left,i=e.offsetLeft,a=void 0===i?10:i,o=e.offsetTop,c=void 0===o?10:o,f=e.style,p=void 0===f?d:f,m=e.children,y=e.unstyled,g=void 0!==y&&y,h=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["className","top","left","offsetLeft","offsetTop","style","children","unstyled"]);return l.a.createElement("div",u({className:s()("visx-tooltip",n),style:u({top:null==t||null==c?t:t+c,left:null==r||null==a?r:r+a},!g&&p)},h),m)}c.propTypes={left:i.a.number,top:i.a.number,offsetLeft:i.a.number,offsetTop:i.a.number,className:i.a.string,children:i.a.node,unstyled:i.a.bool}},"/bzO":function(e,n,t){"use strict";n.a=function(e,n){var t,r=0,i=(e=e.slice()).length-1,a=e[r],l=e[i];return l<a&&(t=r,r=i,i=t,t=a,a=l,l=t),e[r]=n.floor(a),e[i]=n.ceil(l),e}},"1Wmu":function(e,n,t){"use strict";function r(e,n){e(n)}t.d(n,"a",(function(){return r}))},"9Qsi":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("aWzz"),i=t.n(r),a=t("ERkP"),l=t.n(a);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e){var n=e.flex,t=void 0===n?"1":n,r=e.label,i=e.margin,a=void 0===i?"5px 0":i,s=e.align,u=void 0===s?"left":s,d=e.children,c=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["flex","label","margin","align","children"]);return l.a.createElement("div",o({className:"visx-legend-label",style:{justifyContent:u,display:"flex",flex:t,margin:a}},c),d||r)}s.propTypes={align:i.a.string,label:i.a.node,flex:i.a.oneOfType([i.a.string,i.a.number]),margin:i.a.oneOfType([i.a.string,i.a.number]),children:i.a.node}},ASUk:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("ERkP"),i=t.n(r),a=t("ssgm");function l(e){return i.a.createElement(a.a,e)}},"Cf/J":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("aWzz"),i=t.n(r),a=t("ERkP"),l=t.n(a);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e){var n=e.children,t=e.id,r=e.from,i=e.to,a=e.x1,s=e.y1,u=e.x2,d=e.y2,c=e.fromOffset,f=void 0===c?"0%":c,p=e.fromOpacity,m=void 0===p?1:p,y=e.toOffset,g=void 0===y?"100%":y,h=e.toOpacity,v=void 0===h?1:h,b=e.rotate,O=e.transform,k=e.vertical,x=void 0===k||k,T=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),w=a,S=u,j=s,V=d;return!x||w||S||j||V||(w="0",S="0",j="0",V="1"),l.a.createElement("defs",null,l.a.createElement("linearGradient",o({id:t,x1:w,y1:j,x2:S,y2:V,gradientTransform:b?"rotate("+b+")":O},T),!!n&&n,!n&&l.a.createElement("stop",{offset:f,stopColor:r,stopOpacity:m}),!n&&l.a.createElement("stop",{offset:g,stopColor:i,stopOpacity:v})))}s.propTypes={id:i.a.string.isRequired,from:i.a.string,to:i.a.string,x1:i.a.oneOfType([i.a.string,i.a.number]),x2:i.a.oneOfType([i.a.string,i.a.number]),y1:i.a.oneOfType([i.a.string,i.a.number]),y2:i.a.oneOfType([i.a.string,i.a.number]),fromOffset:i.a.oneOfType([i.a.string,i.a.number]),fromOpacity:i.a.oneOfType([i.a.string,i.a.number]),toOffset:i.a.oneOfType([i.a.string,i.a.number]),toOpacity:i.a.oneOfType([i.a.string,i.a.number]),rotate:i.a.oneOfType([i.a.string,i.a.number]),transform:i.a.string,children:i.a.node,vertical:i.a.bool}},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("+wNj");function i(e,n){if(null==e)return{};var t,i,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Iian:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("aWzz"),i=t.n(r),a=t("ERkP"),l=t.n(a);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e){var n=e.flexDirection,t=void 0===n?"row":n,r=e.alignItems,i=void 0===r?"center":r,a=e.margin,s=void 0===a?"0":a,u=e.display,d=void 0===u?"flex":u,c=e.children,f=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["flexDirection","alignItems","margin","display","children"]);return l.a.createElement("div",o({className:"visx-legend-item",style:{display:d,alignItems:i,flexDirection:t,margin:s}},f),c)}s.propTypes={alignItems:i.a.string,margin:i.a.oneOfType([i.a.string,i.a.number]),children:i.a.node,display:i.a.string}},QnoR:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("ERkP");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e){var n=Object(r.useState)(i({tooltipOpen:!1},e)),t=n[0],a=n[1],l=Object(r.useCallback)((function(e){var n=e.tooltipOpen,t=e.tooltipLeft,r=e.tooltipTop,l=e.tooltipData;return a((function(e){return i({},e,{tooltipOpen:n,tooltipLeft:t,tooltipTop:r,tooltipData:l})}))}),[]),o=Object(r.useCallback)((function(e){var n=e.tooltipLeft,t=e.tooltipTop,r=e.tooltipData;return l({tooltipOpen:!0,tooltipLeft:n,tooltipTop:t,tooltipData:r})}),[l]),s=Object(r.useCallback)((function(){return l({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})}),[l]);return{tooltipOpen:t.tooltipOpen,tooltipLeft:t.tooltipLeft,tooltipTop:t.tooltipTop,tooltipData:t.tooltipData,updateTooltip:l,showTooltip:o,hideTooltip:s}}},Vi0D:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return d}));var r=t("+Y26"),i=t("M3gT"),a=t("Ddjo"),l=t("Xyxy"),o=t("Q4nK"),s={expand:r.a,diverging:i.a,none:a.a,silhouette:l.a,wiggle:o.a},u=Object.keys(s);function d(e){return e&&s[e]||s.none}},ZRGc:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/grid",function(){return t("cTRB")}])},cTRB:function(e,n,t){"use strict";t.r(n);var r=t("ERkP"),i=t.n(r),a=t("cxan"),l=t("HbGN"),o=t("O94r"),s=t.n(o),u=t("JmwF"),d=t("hsl+"),c=t.n(d),f=t("rkTo"),p=t("nNND"),m=t("HlJr"),y=i.a.createElement;function g(e){var n=e.top,t=void 0===n?0:n,r=e.left,i=void 0===r?0:r,o=e.scale,d=e.width,g=e.stroke,h=void 0===g?"#eaf0f6":g,v=e.strokeWidth,b=void 0===v?1:v,O=e.strokeDasharray,k=e.className,x=e.children,T=e.numTicks,w=void 0===T?10:T,S=e.lineStyle,j=e.offset,V=e.tickValues,E=Object(l.a)(e,["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"]),R=(null!==V&&void 0!==V?V:Object(p.a)(o,w)).map((function(e){var n=j?(Object(m.a)(o(e))||0)+j:Object(m.a)(o(e))||0;return{from:new f.a({x:0,y:n}),to:new f.a({x:d,y:n})}}));return y(u.a,{className:s()("visx-rows",k),top:t,left:i},x?x({lines:R}):R.map((function(e,n){var t=e.from,r=e.to;return y(c.a,Object(a.a)({key:"row-line-".concat(n),from:t,to:r,stroke:h,strokeWidth:b,strokeDasharray:O,style:S},E))})))}try{g.displayName="GridRows",g.__docgenInfo={description:"",displayName:"GridRows",props:{className:{defaultValue:null,description:"classname to apply to line group element.",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Optionally override rendering of grid lines.",name:"children",required:!1,type:{name:"((props: { lines: GridLines; }) => ReactNode) | undefined"}},top:{defaultValue:{value:0},description:"Top offset to apply to glyph g element container.",name:"top",required:!1,type:{name:"number | undefined"}},left:{defaultValue:{value:0},description:"Left offset to apply to glyph g element container.",name:"left",required:!1,type:{name:"number | undefined"}},stroke:{defaultValue:{value:"#eaf0f6"},description:"Grid line stroke color.",name:"stroke",required:!1,type:{name:"string | undefined"}},strokeWidth:{defaultValue:{value:1},description:"Grid line stroke thickness.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},strokeDasharray:{defaultValue:null,description:"Grid line stroke-dasharray attribute.",name:"strokeDasharray",required:!1,type:{name:"string | undefined"}},numTicks:{defaultValue:{value:10},description:"Approximate number of grid lines. Approximate due to d3 alogrithm, specify `tickValues` for precise control.",name:"numTicks",required:!1,type:{name:"number | undefined"}},lineStyle:{defaultValue:null,description:"Styles to apply as grid line style.",name:"lineStyle",required:!1,type:{name:"CSSProperties | undefined"}},offset:{defaultValue:null,description:"Pixel offset to apply as a translation (y- for Rows, x- for Columns) to each grid lines.",name:"offset",required:!1,type:{name:"number | undefined"}},scale:{defaultValue:null,description:"`@visx/scale` or `d3-scale` object used to convert value to position.",name:"scale",required:!0,type:{name:"Scale"}},tickValues:{defaultValue:null,description:"Exact values used to generate grid lines using `scale`.\nOverrides `numTicks` if specified.",name:"tickValues",required:!1,type:{name:"Parameters<Scale>[0][] | undefined"}},width:{defaultValue:null,description:"Total width of each grid row line.",name:"width",required:!0,type:{name:"number"}},innerRef:{defaultValue:null,description:"reference to line element.",name:"innerRef",required:!1,type:{name:"((instance: SVGLineElement | null) => void) | RefObject<SVGLineElement> | null | undefined"}},fill:{defaultValue:null,description:"fill color applied to line element.",name:"fill",required:!1,type:{name:"string | undefined"}},from:{defaultValue:null,description:"Starting x,y point of the line.",name:"from",required:!1,type:{name:"Point | undefined"}},to:{defaultValue:null,description:"Ending x,y point of the line.",name:"to",required:!1,type:{name:"Point | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-grid/src/grids/GridRows.tsx#GridRows"]={docgenInfo:g.__docgenInfo,name:"GridRows",path:"../visx-grid/src/grids/GridRows.tsx#GridRows"})}catch(E){}var h=i.a.createElement;function v(e){var n=e.top,t=void 0===n?0:n,r=e.left,i=void 0===r?0:r,o=e.scale,d=e.height,y=e.stroke,g=void 0===y?"#eaf0f6":y,v=e.strokeWidth,b=void 0===v?1:v,O=e.strokeDasharray,k=e.className,x=e.numTicks,T=void 0===x?10:x,w=e.lineStyle,S=e.offset,j=e.tickValues,V=e.children,E=Object(l.a)(e,["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"]),R=(null!==j&&void 0!==j?j:Object(p.a)(o,T)).map((function(e){var n=S?(Object(m.a)(o(e))||0)+S:Object(m.a)(o(e))||0;return{from:new f.a({x:n,y:0}),to:new f.a({x:n,y:d})}}));return h(u.a,{className:s()("visx-columns",k),top:t,left:i},V?V({lines:R}):R.map((function(e,n){var t=e.from,r=e.to;return h(c.a,Object(a.a)({key:"column-line-".concat(n),from:t,to:r,stroke:g,strokeWidth:b,strokeDasharray:O,style:w},E))})))}try{v.displayName="GridColumns",v.__docgenInfo={description:"",displayName:"GridColumns",props:{className:{defaultValue:null,description:"classname to apply to line group element.",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Optionally override rendering of grid lines.",name:"children",required:!1,type:{name:"((props: { lines: GridLines; }) => ReactNode) | undefined"}},top:{defaultValue:{value:0},description:"Top offset to apply to glyph g element container.",name:"top",required:!1,type:{name:"number | undefined"}},left:{defaultValue:{value:0},description:"Left offset to apply to glyph g element container.",name:"left",required:!1,type:{name:"number | undefined"}},stroke:{defaultValue:{value:"#eaf0f6"},description:"Grid line stroke color.",name:"stroke",required:!1,type:{name:"string | undefined"}},strokeWidth:{defaultValue:{value:1},description:"Grid line stroke thickness.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},strokeDasharray:{defaultValue:null,description:"Grid line stroke-dasharray attribute.",name:"strokeDasharray",required:!1,type:{name:"string | undefined"}},numTicks:{defaultValue:{value:10},description:"Approximate number of grid lines. Approximate due to d3 alogrithm, specify `tickValues` for precise control.",name:"numTicks",required:!1,type:{name:"number | undefined"}},lineStyle:{defaultValue:null,description:"Styles to apply as grid line style.",name:"lineStyle",required:!1,type:{name:"CSSProperties | undefined"}},offset:{defaultValue:null,description:"Pixel offset to apply as a translation (y- for Rows, x- for Columns) to each grid lines.",name:"offset",required:!1,type:{name:"number | undefined"}},scale:{defaultValue:null,description:"`@visx/scale` or `d3-scale` object used to convert value to position.",name:"scale",required:!0,type:{name:"Scale"}},tickValues:{defaultValue:null,description:"Exact values used to generate grid lines using `scale`.\nOverrides `numTicks` if specified.",name:"tickValues",required:!1,type:{name:"Parameters<Scale>[0][] | undefined"}},height:{defaultValue:null,description:"Total height of each grid column line.",name:"height",required:!0,type:{name:"number"}},innerRef:{defaultValue:null,description:"reference to line element.",name:"innerRef",required:!1,type:{name:"((instance: SVGLineElement | null) => void) | RefObject<SVGLineElement> | null | undefined"}},fill:{defaultValue:null,description:"fill color applied to line element.",name:"fill",required:!1,type:{name:"string | undefined"}},from:{defaultValue:null,description:"Starting x,y point of the line.",name:"from",required:!1,type:{name:"Point | undefined"}},to:{defaultValue:null,description:"Ending x,y point of the line.",name:"to",required:!1,type:{name:"Point | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-grid/src/grids/GridColumns.tsx#GridColumns"]={docgenInfo:v.__docgenInfo,name:"GridColumns",path:"../visx-grid/src/grids/GridColumns.tsx#GridColumns"})}catch(E){}var b=i.a.createElement;function O(e){var n=e.top,t=e.left,r=e.xScale,i=e.yScale,o=e.width,d=e.height,c=e.className,f=e.stroke,p=e.strokeWidth,m=e.strokeDasharray,y=e.numTicksRows,h=e.numTicksColumns,O=e.rowLineStyle,k=e.columnLineStyle,x=e.xOffset,T=e.yOffset,w=e.rowTickValues,S=e.columnTickValues,j=Object(l.a)(e,["top","left","xScale","yScale","width","height","className","stroke","strokeWidth","strokeDasharray","numTicksRows","numTicksColumns","rowLineStyle","columnLineStyle","xOffset","yOffset","rowTickValues","columnTickValues"]);return b(u.a,{className:s()("visx-grid",c),top:n,left:t},b(g,Object(a.a)({className:c,scale:i,width:o,stroke:f,strokeWidth:p,strokeDasharray:m,numTicks:y,lineStyle:O,offset:T,tickValues:w},j)),b(v,Object(a.a)({className:c,scale:r,height:d,stroke:f,strokeWidth:p,strokeDasharray:m,numTicks:h,lineStyle:k,offset:x,tickValues:S},j)))}try{O.displayName="Grid",O.__docgenInfo={description:"",displayName:"Grid",props:{className:{defaultValue:null,description:"classname to apply to line group element.",name:"className",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Total width of each grid row line.",name:"width",required:!1,type:{name:"number"}},innerRef:{defaultValue:null,description:"reference to line element.",name:"innerRef",required:!1,type:{name:"((instance: SVGLineElement | null) => void) | RefObject<SVGLineElement> | null | undefined"}},fill:{defaultValue:null,description:"fill color applied to line element.",name:"fill",required:!1,type:{name:"string | undefined"}},stroke:{defaultValue:null,description:"Grid line stroke color.",name:"stroke",required:!1,type:{name:"string | undefined"}},strokeDasharray:{defaultValue:null,description:"Grid line stroke-dasharray attribute.",name:"strokeDasharray",required:!1,type:{name:"string | undefined"}},strokeWidth:{defaultValue:null,description:"Grid line stroke thickness.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},left:{defaultValue:null,description:"Left offset to apply to glyph g element container.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset to apply to glyph g element container.",name:"top",required:!1,type:{name:"number | undefined"}},xScale:{defaultValue:null,description:"`@visx/scale` or `d3-scale` object used to map from ScaleInput to x-coordinates (GridColumns).",name:"xScale",required:!0,type:{name:"XScale"}},yScale:{defaultValue:null,description:"`@visx/scale` or `d3-scale` object used to map from ScaleInput to y-coordinates (GridRows).",name:"yScale",required:!0,type:{name:"YScale"}},xOffset:{defaultValue:null,description:"Pixel offset to apply as an x-translation to each GridColumns line.",name:"xOffset",required:!1,type:{name:"number | undefined"}},yOffset:{defaultValue:null,description:"Pixel offset to apply as an y-translation to each GridRows line.",name:"yOffset",required:!1,type:{name:"number | undefined"}},numTicksRows:{defaultValue:null,description:"Approximate number of row gridlines.",name:"numTicksRows",required:!1,type:{name:"number | undefined"}},numTicksColumns:{defaultValue:null,description:"Approximate number of column gridlines.",name:"numTicksColumns",required:!1,type:{name:"number | undefined"}},rowLineStyle:{defaultValue:null,description:"Style object to apply to GridRows.",name:"rowLineStyle",required:!1,type:{name:"CSSProperties | undefined"}},columnLineStyle:{defaultValue:null,description:"Style object to apply to GridColumns.",name:"columnLineStyle",required:!1,type:{name:"CSSProperties | undefined"}},rowTickValues:{defaultValue:null,description:"Exact values to be used for GridRows lines, passed to yScale. Use this if you need precise control over GridRows values.",name:"rowTickValues",required:!1,type:{name:"Parameters<YScale>[0][] | undefined"}},columnTickValues:{defaultValue:null,description:"Exact values to be used for GridColumns lines, passed to xScale. Use this if you need precise control over GridColumns values.",name:"columnTickValues",required:!1,type:{name:"Parameters<XScale>[0][] | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-grid/src/grids/Grid.tsx#Grid"]={docgenInfo:O.__docgenInfo,name:"Grid",path:"../visx-grid/src/grids/Grid.tsx#Grid"})}catch(E){}var k=t("QnPE"),x=t("smMw"),T=t("xtlv"),w=t("JjBE"),S=i.a.createElement,j=[g,v,O],V=[x.default,T.default,w.default];n.default=function(){return S(k.a,{components:j,examples:V,readme:'# @visx/grid\n\n<a title="@visx/grid npm downloads" href="https://www.npmjs.com/package/@visx/grid">\n  <img src="https://img.shields.io/npm/dm/@visx/grid.svg?style=flat-square" />\n</a>\n\nThe `@visx/grid` package lets you create gridlines for charts. `<GridRows />` render horizontally,\n`<GridColumns />` render vertically, or you can use a `<Grid />` to get them both at once!\n\n## Usage\n\n```js\nimport { Grid } from \'@visx/grid\';\n// or\n// import * as Grid from \'@visx/grid\';\n// <Grid.Grid />\n\nconst grid = (\n  <Grid\n    xScale={xScale}\n    yScale={yScale}\n    width={xMax}\n    height={yMax}\n    numTicksRows={numTicksForHeight(height)}\n    numTicksColumns={numTicksForWidth(width)}\n  />\n);\n```\n\n## Installation\n\n```\nnpm install --save @visx/grid\n```\n',visxPackage:"grid"})}},cjvV:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("vvkn"),i=t("xx0A"),a=Object(i.b)("domain","range","reverse","clamp","interpolate","nice","round");function l(e){return a(Object(r.b)(),e)}},dGDr:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return p})),t.d(n,"c",(function(){return m})),t.d(n,"d",(function(){return y})),t.d(n,"e",(function(){return g})),t.d(n,"f",(function(){return h}));var r=t("mBAT"),i=t("KdQ8"),a=t("+pY8"),l=t("lg8u"),o=t("FVKn"),s=t("uvDt"),u=t("1Wmu"),d=t("oWfS"),c=t("Vi0D");function f(e){var n=void 0===e?{}:e,t=n.innerRadius,i=n.outerRadius,a=n.cornerRadius,l=n.startAngle,o=n.endAngle,s=n.padAngle,d=n.padRadius,c=Object(r.a)();return null!=t&&Object(u.a)(c.innerRadius,t),null!=i&&Object(u.a)(c.outerRadius,i),null!=a&&Object(u.a)(c.cornerRadius,a),null!=l&&Object(u.a)(c.startAngle,l),null!=o&&Object(u.a)(c.endAngle,o),null!=s&&Object(u.a)(c.padAngle,s),null!=d&&Object(u.a)(c.padRadius,d),c}function p(e){var n=void 0===e?{}:e,t=n.x,r=n.x0,a=n.x1,l=n.y,o=n.y0,s=n.y1,d=n.defined,c=n.curve,f=Object(i.a)();return t&&Object(u.a)(f.x,t),r&&Object(u.a)(f.x0,r),a&&Object(u.a)(f.x1,a),l&&Object(u.a)(f.y,l),o&&Object(u.a)(f.y0,o),s&&Object(u.a)(f.y1,s),d&&f.defined(d),c&&f.curve(c),f}function m(e){var n=void 0===e?{}:e,t=n.x,r=n.y,i=n.defined,l=n.curve,o=Object(a.a)();return t&&Object(u.a)(o.x,t),r&&Object(u.a)(o.y,r),i&&o.defined(i),l&&o.curve(l),o}function y(e){var n=void 0===e?{}:e,t=n.startAngle,r=n.endAngle,i=n.padAngle,a=n.value,o=n.sort,s=n.sortValues,d=Object(l.a)();return(null===o||null!=o)&&d.sort(o),(null===s||null!=s)&&d.sortValues(s),null!=a&&d.value(a),null!=i&&Object(u.a)(d.padAngle,i),null!=t&&Object(u.a)(d.startAngle,t),null!=r&&Object(u.a)(d.endAngle,r),d}function g(e){var n=void 0===e?{}:e,t=n.angle,r=n.radius,i=n.defined,a=n.curve,l=Object(o.a)();return t&&Object(u.a)(l.angle,t),r&&Object(u.a)(l.radius,r),i&&l.defined(i),a&&l.curve(a),l}function h(e){var n=e.keys,t=e.value,r=e.order,i=e.offset,a=Object(s.a)();return n&&a.keys(n),t&&Object(u.a)(a.value,t),r&&a.order(Object(d.c)(r)),i&&a.offset(Object(c.c)(i)),a}},i2lw:function(e,n,t){"use strict";function r(e){var n=e.scale,t=e.labelFormat;return function(e,r){return{datum:e,index:r,text:""+t(e,r),value:n(e)}}}t.d(n,"a",(function(){return r}))},mnQP:function(e,n,t){"use strict";t.d(n,"b",(function(){return a}));var r=t("V5T8"),i=Object(r.a)((function(){}),(function(e,n){e.setTime(+e+n)}),(function(e,n){return n-e}));i.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?Object(r.a)((function(n){n.setTime(Math.floor(n/e)*e)}),(function(n,t){n.setTime(+n+t*e)}),(function(n,t){return(t-n)/e})):i:null},n.a=i;var a=i.range},oWfS:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return d}));var r=t("Zx3a"),i=t("c6zU"),a=t("yU24"),l=t("V+6I"),o=t("NKRu"),s={ascending:r.a,descending:i.a,insideout:a.a,none:l.a,reverse:o.a},u=Object.keys(s);function d(e){return e&&s[e]||s.none}},smMw:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t("ERkP"),i=t.n(r),a=t("gnM9"),l=t("i9k6"),o=t("Soe+");t.d(n,"packageJson",(function(){return o}));var s=i.a.createElement,u={backgroundColor:a.a},d={color:a.c},c={showControls:!1};function f(){return s(l.a,{title:"Axes & scales",description:"<Axis.AxisBottom />",detailsStyles:d,detailsHeight:20,exampleProps:c,exampleRenderer:a.b,exampleUrl:"/axis",tileStyles:u})}},ssgm:function(e,n,t){"use strict";t.d(n,"a",(function(){return S}));var r=t("aWzz"),i=t.n(r),a=t("ERkP"),l=t.n(a),o=t("O94r"),s=t.n(o),u=t("Iian"),d=t("9Qsi");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e){var n=e.fill,t=e.width,r=e.height,i=e.style;return l.a.createElement("div",{style:c({width:t,height:r,background:n},i)})}f.propTypes={fill:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])};var p=t("JmwF");function m(e){var n=e.fill,t=e.width,r=e.height,i=e.style,a="string"===typeof t||"undefined"===typeof t?0:t,o="string"===typeof r||"undefined"===typeof r?0:r,s=Math.max(a,o),u=s/2;return l.a.createElement("svg",{width:s,height:s},l.a.createElement(p.a,{top:u,left:u},l.a.createElement("circle",{r:u,fill:n,style:i})))}function y(e){var n=e.fill,t=e.width,r=e.height,i=e.style,a="string"===typeof r||"undefined"===typeof r?0:r,o="number"===typeof(null==i?void 0:i.strokeWidth)?null==i?void 0:i.strokeWidth:2;return l.a.createElement("svg",{width:t,height:r},l.a.createElement(p.a,{top:a/2-o/2},l.a.createElement("line",{x1:0,x2:t,y1:0,y2:0,stroke:n,strokeWidth:o,style:i})))}function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}m.propTypes={fill:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])},y.propTypes={fill:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])};var h=function(){};function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function b(e){var n=e.shape,t=void 0===n?f:n,r=e.width,i=e.height,a=e.margin,o=e.label,s=e.item,u=e.itemIndex,d=e.fill,c=e.size,p=e.shapeStyle;return l.a.createElement("div",{className:"visx-legend-shape",style:{display:"flex",width:c?c(v({},o)):r,height:c?c(v({},o)):i,margin:a}},function(e){var n=e.shape,t=void 0===n?"rect":n,r=e.fill,i=void 0===r?h:r,a=e.size,o=void 0===a?h:a,s=e.width,u=e.height,d=e.label,c=e.item,p=e.itemIndex,v=e.shapeStyle,b=void 0===v?h:v,O={width:s,height:u,item:c,itemIndex:p,label:d,fill:i(g({},d)),size:o(g({},d)),style:b(g({},d))};return"string"===typeof t?"circle"===t?l.a.createElement(m,O):"line"===t?l.a.createElement(y,O):l.a.createElement(f,O):l.a.isValidElement(t)?l.a.cloneElement(t,O):t?l.a.createElement(t,O):null}({shape:t,item:s,itemIndex:u,label:o,width:r,height:i,fill:d,shapeStyle:p}))}function O(e){return e&&"object"===typeof e&&"value"in e&&"undefined"!==typeof e.value?e.value:e}function k(e){return String(O(e))}b.propTypes={itemIndex:i.a.number.isRequired,margin:i.a.oneOfType([i.a.string,i.a.number]),fill:i.a.func,size:i.a.func,shapeStyle:i.a.func,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])};var x=t("i2lw");function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var w={display:"flex"};function S(e){var n=e.className,t=e.style,r=void 0===t?w:t,i=e.scale,a=e.shape,o=e.domain,c=e.fill,f=void 0===c?k:c,p=e.size,m=void 0===p?k:p,y=e.labelFormat,g=void 0===y?O:y,h=e.labelTransform,v=void 0===h?x.a:h,S=e.shapeWidth,j=void 0===S?15:S,V=e.shapeHeight,E=void 0===V?15:V,R=e.shapeMargin,G=void 0===R?"2px 4px 2px 0":R,q=e.shapeStyle,N=e.labelAlign,P=void 0===N?"left":N,C=e.labelFlex,D=void 0===C?"1":C,A=e.labelMargin,L=void 0===A?"0 4px":A,_=e.itemMargin,W=void 0===_?"0":_,I=e.direction,z=void 0===I?"column":I,M=e.itemDirection,B=void 0===M?"row":M,F=e.legendLabelProps,H=e.children,Y=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["className","style","scale","shape","domain","fill","size","labelFormat","labelTransform","shapeWidth","shapeHeight","shapeMargin","shapeStyle","labelAlign","labelFlex","labelMargin","itemMargin","direction","itemDirection","legendLabelProps","children"]),J=o||("domain"in i?i.domain():[]),K=v({scale:i,labelFormat:g}),Q=J.map(K);return H?l.a.createElement(l.a.Fragment,null,H(Q)):l.a.createElement("div",{className:s()("visx-legend",n),style:T({},r,{flexDirection:z})},Q.map((function(e,n){return l.a.createElement(u.a,T({key:"legend-"+e.text+"-"+n,margin:W,flexDirection:B},Y),l.a.createElement(b,{shape:a,height:E,width:j,margin:G,item:J[n],itemIndex:n,label:e,fill:f,size:m,shapeStyle:q}),l.a.createElement(d.a,T({label:e.text,flex:D,margin:L,align:P},F)))})))}S.propTypes={children:i.a.func,className:i.a.string,domain:i.a.array,shapeWidth:i.a.oneOfType([i.a.string,i.a.number]),shapeHeight:i.a.oneOfType([i.a.string,i.a.number]),shapeMargin:i.a.oneOfType([i.a.string,i.a.number]),labelAlign:i.a.string,labelFlex:i.a.oneOfType([i.a.string,i.a.number]),labelMargin:i.a.oneOfType([i.a.string,i.a.number]),itemMargin:i.a.oneOfType([i.a.string,i.a.number]),fill:i.a.func,size:i.a.func,shapeStyle:i.a.func}},vvkn:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("rnNc"),i=t("PB0s"),a=t("VJwe"),l=t("PE29"),o=t("8eBc"),s=t("NeEQ"),u=t("y1Yx"),d=t("ye78"),c=t("KvvH"),f=t("mnQP"),p=t("mHfT"),m=t("2+fR"),y=t("W1cA"),g=t("/bzO");function h(e){return new Date(e)}function v(e){return e instanceof Date?+e:+new Date(+e)}function b(e,n,t,a,l,o,s,u,d){var c=Object(m.b)(),f=c.invert,p=c.domain,y=d(".%L"),O=d(":%S"),k=d("%I:%M"),x=d("%I %p"),T=d("%a %d"),w=d("%b %d"),S=d("%B"),j=d("%Y"),V=[[s,1,1e3],[s,5,5e3],[s,15,15e3],[s,30,3e4],[o,1,6e4],[o,5,3e5],[o,15,9e5],[o,30,18e5],[l,1,36e5],[l,3,108e5],[l,6,216e5],[l,12,432e5],[a,1,864e5],[a,2,1728e5],[t,1,6048e5],[n,1,2592e6],[n,3,7776e6],[e,1,31536e6]];function E(r){return(s(r)<r?y:o(r)<r?O:l(r)<r?k:a(r)<r?x:n(r)<r?t(r)<r?T:w:e(r)<r?S:j)(r)}function R(n,t,a){if(null==n&&(n=10),"number"===typeof n){var l,o=Math.abs(a-t)/n,s=Object(r.a)((function(e){return e[2]})).right(V,o);return s===V.length?(l=Object(i.c)(t/31536e6,a/31536e6,n),n=e):s?(l=(s=V[o/V[s-1][2]<V[s][2]/o?s-1:s])[1],n=s[0]):(l=Math.max(Object(i.c)(t,a,n),1),n=u),n.every(l)}return n}return c.invert=function(e){return new Date(f(e))},c.domain=function(e){return arguments.length?p(Array.from(e,v)):p().map(h)},c.ticks=function(e){var n,t=p(),r=t[0],i=t[t.length-1],a=i<r;return a&&(n=r,r=i,i=n),n=(n=R(e,r,i))?n.range(r,i+1):[],a?n.reverse():n},c.tickFormat=function(e,n){return null==n?E:d(n)},c.nice=function(e){var n=p();return(e=R(e,n[0],n[n.length-1]))?p(Object(g.a)(n,e)):c},c.copy=function(){return Object(m.a)(c,b(e,n,t,a,l,o,s,u,d))},c}n.b=function(){return y.b.apply(b(a.a,l.a,o.g,s.b,u.a,d.a,c.a,f.a,p.a).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}},xtlv:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var r=t("ERkP"),i=t.n(r),a=t("wReH"),l=t("i9k6"),o=t("dk/h");t.d(n,"packageJson",(function(){return o}));var s=i.a.createElement,u={background:a.a},d={color:a.c,zIndex:1};function c(){return s(l.a,{title:"Bar Stack",description:"<Shape.BarStack />",detailsStyles:d,exampleRenderer:a.b,exampleUrl:"/barstack",tileStyles:u})}},zjfJ:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))}},[["ZRGc",0,2,1,3,4,5,7,8,10,9,11,12,13,15,14,16,18,19,23,24,29,31]]]);