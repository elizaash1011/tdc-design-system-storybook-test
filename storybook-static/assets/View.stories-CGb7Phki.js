import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{n as r,t as i}from"./View-DGrlzLEG.js";import{t as a}from"./jsx-runtime-BbDfbRii.js";import{i as o,r as s}from"./index.web-D_AoTLeS.js";import{a as c,i as l,n as u,t as d}from"./helpers-C3hOae0F.js";function f({label:e}){return(0,p.jsx)(i,{className:`rounded-sm border border-border bg-muted px-3 py-2`,children:(0,p.jsx)(s,{size:`sm`,className:`text-muted-foreground`,children:e})})}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),o(),r(),c(),p=a(),m=[`flex-col`,`flex-row`,`flex-row-reverse`],h=[`p-0`,`p-2`,`p-4`,`p-6`],g={title:`UI/View`,component:i,argTypes:{className:{control:`text`}},args:{className:`gap-2 rounded-lg border border-border bg-card p-4`},render:e=>(0,p.jsxs)(i,{...e,children:[(0,p.jsx)(f,{label:`Item one`}),(0,p.jsx)(f,{label:`Item two`})]})},_={},v={render:()=>(0,p.jsxs)(l,{children:[(0,p.jsx)(u,{children:`View is React Native's own view re-exported unchanged — it has no variants, so every axis below is plain className layout. Children stack vertically by default.`}),m.map(e=>(0,p.jsx)(d,{label:e,children:(0,p.jsxs)(i,{className:`gap-2 rounded-lg border border-border bg-card p-4 ${e}`,children:[(0,p.jsx)(f,{label:`Item one`}),(0,p.jsx)(f,{label:`Item two`})]})},e))]})},y={render:()=>(0,p.jsx)(l,{children:h.map(e=>(0,p.jsx)(d,{label:e,children:(0,p.jsx)(i,{className:`rounded-lg border border-border bg-card ${e}`,children:(0,p.jsx)(f,{label:`Item one`})})},e))})},b={render:()=>(0,p.jsx)(l,{children:(0,p.jsx)(d,{label:`view inside view`,children:(0,p.jsx)(i,{className:`rounded-lg border border-border bg-card p-4`,children:(0,p.jsxs)(i,{className:`gap-2 rounded-md border border-border bg-background p-4`,children:[(0,p.jsx)(f,{label:`Item one`}),(0,p.jsx)(f,{label:`Item two`})]})})})})},x=[`Default`,`Direction`,`Padding`,`Nested`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        View is React Native&apos;s own view re-exported unchanged — it has no
        variants, so every axis below is plain className layout. Children stack
        vertically by default.
      </Note>
      {DIRECTIONS.map(direction => <Labeled key={direction} label={direction}>
          <View className={\`gap-2 rounded-lg border border-border bg-card p-4 \${direction}\`}>
            <Item label="Item one" />
            <Item label="Item two" />
          </View>
        </Labeled>)}
    </Showcase>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {PADDING.map(padding => <Labeled key={padding} label={padding}>
          <View className={\`rounded-lg border border-border bg-card \${padding}\`}>
            <Item label="Item one" />
          </View>
        </Labeled>)}
    </Showcase>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="view inside view">
        <View className="rounded-lg border border-border bg-card p-4">
          <View className="gap-2 rounded-md border border-border bg-background p-4">
            <Item label="Item one" />
            <Item label="Item two" />
          </View>
        </View>
      </Labeled>
    </Showcase>
}`,...b.parameters?.docs?.source}}}})))()}S();export{_ as Default,v as Direction,b as Nested,y as Padding,x as __namedExportsOrder,g as default};