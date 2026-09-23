import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{i,r as a}from"./index.web-D_AoTLeS.js";import{a as o,i as s,t as c}from"./helpers-C3hOae0F.js";import{n as l,t as u}from"./index.web-BkgxHkvM.js";import{n as d,t as f}from"./index.web-ano-UwRB.js";function p({label:e}){return(0,m.jsx)(u,{className:`rounded-sm border border-border bg-muted px-3 py-2`,children:(0,m.jsx)(a,{size:`sm`,className:`text-muted-foreground`,children:e})})}var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),l(),d(),i(),o(),m=r(),h=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`],g=[`items-start`,`items-center`,`items-end`],_={title:`UI/HStack`,component:f,argTypes:{space:{control:`select`,options:h},reversed:{control:`boolean`}},args:{space:`md`,reversed:!1},render:e=>(0,m.jsxs)(f,{...e,children:[(0,m.jsx)(p,{label:`One`}),(0,m.jsx)(p,{label:`Two`}),(0,m.jsx)(p,{label:`Three`})]})},v={},y={render:()=>(0,m.jsx)(s,{children:h.map(e=>(0,m.jsx)(c,{label:e,children:(0,m.jsxs)(f,{space:e,children:[(0,m.jsx)(p,{label:`One`}),(0,m.jsx)(p,{label:`Two`}),(0,m.jsx)(p,{label:`Three`})]})},e))})},b={render:()=>(0,m.jsxs)(s,{children:[(0,m.jsx)(c,{label:`reversed: false`,children:(0,m.jsxs)(f,{space:`md`,children:[(0,m.jsx)(p,{label:`One`}),(0,m.jsx)(p,{label:`Two`}),(0,m.jsx)(p,{label:`Three`})]})}),(0,m.jsx)(c,{label:`reversed: true`,children:(0,m.jsxs)(f,{space:`md`,reversed:!0,children:[(0,m.jsx)(p,{label:`One`}),(0,m.jsx)(p,{label:`Two`}),(0,m.jsx)(p,{label:`Three`})]})})]})},x={render:()=>(0,m.jsx)(s,{children:g.map(e=>(0,m.jsx)(c,{label:e,children:(0,m.jsxs)(f,{space:`md`,className:`h-24 w-64 rounded-lg border border-border bg-card p-2 ${e}`,children:[(0,m.jsx)(p,{label:`One`}),(0,m.jsx)(p,{label:`Two`})]})},e))})},S=[`Default`,`Space`,`Reversed`,`Alignment`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {SPACES.map(space => <Labeled key={space} label={space}>
          <HStack space={space}>
            <Item label="One" />
            <Item label="Two" />
            <Item label="Three" />
          </HStack>
        </Labeled>)}
    </Showcase>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="reversed: false">
        <HStack space="md">
          <Item label="One" />
          <Item label="Two" />
          <Item label="Three" />
        </HStack>
      </Labeled>
      <Labeled label="reversed: true">
        <HStack space="md" reversed>
          <Item label="One" />
          <Item label="Two" />
          <Item label="Three" />
        </HStack>
      </Labeled>
    </Showcase>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {ALIGNMENTS.map(alignment => <Labeled key={alignment} label={alignment}>
          <HStack space="md" className={\`h-24 w-64 rounded-lg border border-border bg-card p-2 \${alignment}\`}>
            <Item label="One" />
            <Item label="Two" />
          </HStack>
        </Labeled>)}
    </Showcase>
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Alignment,v as Default,b as Reversed,y as Space,S as __namedExportsOrder,_ as default};