import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,o as a}from"./index.web-D_AoTLeS.js";import{n as o,r as s,t as c}from"./withStyleContext-DUZXNZoO.js";import{n as l,t as ee}from"./createContext-BvC0gohV.js";import{n as u,t as d}from"./View-C3eIN7TA.js";import{a as te,i as f,n as p,t as m}from"./helpers-C3hOae0F.js";import{n as h,t as g}from"./index.web-BkgxHkvM.js";import{n as ne,t as re}from"./index.web-ano-UwRB.js";var _,v;function y(){return(y=e((()=>{l(),[_,v]=ee(`ProgressContext`)})))()}function ie(e){return(0,x.forwardRef)((t,n)=>{var{children:r,min:i=0,max:a=100,value:o=0,orientation:s=`horizontal`}=t,c=S(t,[`children`,`min`,`max`,`value`,`orientation`]);let l=C({min:i,max:a,value:o,orientation:s});return(0,b.jsx)(e,{ref:n,...l,...c,children:(0,b.jsx)(_,{min:i,max:a,valueWidth:l.valueWidth,valueHeight:l.valueHeight,orientation:s,children:r})})})}var b,x,S,C;function w(){return(w=e((()=>{b=r(),x=t(n()),y(),S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},C=({min:e,max:t,value:n,orientation:r=`horizontal`})=>{let i=n<t&&n>e?Math.round((n-e)/(t-e)*100):n>e?100:0;return{accessible:!0,tabIndex:1,role:`progressbar`,"aria-valuemin":e,"aria-valuemax":t,"aria-valuenow":i,"aria-valuetext":`${i}%`,"aria-orientation":r,valueWidth:r===`horizontal`?i:100,valueHeight:r===`vertical`?i:100}}})))()}function T(e){return(0,D.forwardRef)((t,n)=>{var{style:r={}}=t,i=O(t,[`style`]);let{valueWidth:a,valueHeight:o,orientation:s}=v(`ProgressContext`),c=s===`vertical`?{height:`${o}%`,width:`100%`}:{width:`${a}%`,height:`100%`};return(0,E.jsx)(e,{...i,style:[r,c],ref:n})})}var E,D,O;function k(){return(k=e((()=>{E=r(),D=t(n()),y(),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}})))()}function A({Root:e,FilledTrack:t}){let n=ie(e);return n.FilledTrack=T(t),n.displayName=`Progress`,n.FilledTrack.displayName=`Progress.FilledTrack`,n}function j(){return(j=e((()=>{w(),k()})))()}var M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{j(),i(),c(),M=t(n()),u(),N=r(),P=`PROGRESS`,F=A({Root:s(d,P),FilledTrack:d}),I=a({base:`bg-primary/20 relative h-2 w-full overflow-hidden rounded-full`,variants:{orientation:{horizontal:`w-full h-2`,vertical:`h-full w-2 justify-end`}}}),L=a({base:`bg-primary  transition-all`,variants:{orientation:{horizontal:`h-full`,vertical:`w-full`}}}),R=M.forwardRef(function({className:e,orientation:t=`horizontal`,...n},r){return(0,N.jsx)(F,{ref:r,...n,className:I({orientation:t,class:e}),context:{orientation:t},orientation:t})}),z=M.forwardRef(function({className:e,...t},n){let{orientation:r}=o(P);return(0,N.jsx)(F.FilledTrack,{ref:n,className:L({orientation:r,class:e}),...t})}),R.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{orientation:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1}}},z.__docgenInfo={description:``,methods:[],displayName:`ProgressFilledTrack`}})))()}var V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{n(),h(),ne(),B(),te(),V=r(),H=[`horizontal`,`vertical`],U=[0,25,50,100],W={title:`UI/Progress`,component:R,argTypes:{value:{control:{type:`range`,min:0,max:100,step:1}},orientation:{control:`select`,options:H}},args:{value:50,orientation:`horizontal`},render:e=>(0,V.jsx)(g,{className:e.orientation===`vertical`?`h-40`:`w-64`,children:(0,V.jsx)(R,{...e,children:(0,V.jsx)(z,{})})})},G={},K={render:()=>(0,V.jsx)(f,{children:U.map(e=>(0,V.jsx)(m,{label:`value={${e}}`,children:(0,V.jsx)(g,{className:`w-64`,children:(0,V.jsx)(R,{value:e,children:(0,V.jsx)(z,{})})})},e))})},q={render:()=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p,{children:"The vertical track is `h-full`, so it only shows up inside a parent with a fixed height."}),(0,V.jsxs)(f,{children:[(0,V.jsx)(m,{label:`horizontal`,children:(0,V.jsx)(g,{className:`w-64`,children:(0,V.jsx)(R,{orientation:`horizontal`,value:60,children:(0,V.jsx)(z,{})})})}),(0,V.jsx)(m,{label:`vertical`,children:(0,V.jsx)(g,{className:`h-40`,children:(0,V.jsx)(R,{orientation:`vertical`,value:60,children:(0,V.jsx)(z,{})})})})]})]})},J={render:()=>(0,V.jsx)(f,{children:(0,V.jsx)(m,{label:`0 / 25 / 50 / 100`,children:(0,V.jsx)(re,{space:`lg`,className:`h-40`,children:U.map(e=>(0,V.jsx)(R,{orientation:`vertical`,value:e,children:(0,V.jsx)(z,{})},e))})})})},Y={render:()=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p,{children:"`min` and `max` rescale the value, so the same `value` fills a different proportion of the track."}),(0,V.jsxs)(f,{children:[(0,V.jsx)(m,{label:`min=0 max=100 value=30`,children:(0,V.jsx)(g,{className:`w-64`,children:(0,V.jsx)(R,{min:0,max:100,value:30,children:(0,V.jsx)(z,{})})})}),(0,V.jsx)(m,{label:`min=0 max=50 value=30`,children:(0,V.jsx)(g,{className:`w-64`,children:(0,V.jsx)(R,{min:0,max:50,value:30,children:(0,V.jsx)(z,{})})})}),(0,V.jsx)(m,{label:`min=20 max=40 value=30`,children:(0,V.jsx)(g,{className:`w-64`,children:(0,V.jsx)(R,{min:20,max:40,value:30,children:(0,V.jsx)(z,{})})})})]})]})},X=[{label:`h-1`,className:`h-1`},{label:`h-2 (default)`,className:`h-2`},{label:`h-3`,className:`h-3`},{label:`h-4`,className:`h-4`}],Z={render:()=>(0,V.jsx)(f,{children:X.map(e=>(0,V.jsx)(m,{label:e.label,children:(0,V.jsx)(g,{className:`w-64`,children:(0,V.jsx)(R,{value:60,className:e.className,children:(0,V.jsx)(z,{})})})},e.label))})},Q=[`Default`,`Values`,`Orientation`,`VerticalValues`,`CustomRange`,`Thickness`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {VALUES.map(value => <Labeled key={value} label={\`value={\${value}}\`}>
          <Box className="w-64">
            <Progress value={value}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>)}
    </Showcase>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        The vertical track is \`h-full\`, so it only shows up inside a parent with a
        fixed height.
      </Note>
      <Showcase>
        <Labeled label="horizontal">
          <Box className="w-64">
            <Progress orientation="horizontal" value={60}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
        <Labeled label="vertical">
          <Box className="h-40">
            <Progress orientation="vertical" value={60}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
      </Showcase>
    </>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="0 / 25 / 50 / 100">
        <HStack space="lg" className="h-40">
          {VALUES.map(value => <Progress key={value} orientation="vertical" value={value}>
              <ProgressFilledTrack />
            </Progress>)}
        </HStack>
      </Labeled>
    </Showcase>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        \`min\` and \`max\` rescale the value, so the same \`value\` fills a different
        proportion of the track.
      </Note>
      <Showcase>
        <Labeled label="min=0 max=100 value=30">
          <Box className="w-64">
            <Progress min={0} max={100} value={30}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
        <Labeled label="min=0 max=50 value=30">
          <Box className="w-64">
            <Progress min={0} max={50} value={30}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
        <Labeled label="min=20 max=40 value=30">
          <Box className="w-64">
            <Progress min={20} max={40} value={30}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>
      </Showcase>
    </>
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {THICKNESSES.map(thickness => <Labeled key={thickness.label} label={thickness.label}>
          <Box className="w-64">
            <Progress value={60} className={thickness.className}>
              <ProgressFilledTrack />
            </Progress>
          </Box>
        </Labeled>)}
    </Showcase>
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Y as CustomRange,G as Default,q as Orientation,Z as Thickness,K as Values,J as VerticalValues,Q as __namedExportsOrder,W as default};