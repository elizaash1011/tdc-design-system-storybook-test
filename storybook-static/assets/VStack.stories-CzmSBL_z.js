import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{i,n as a,r as o,t as s}from"./index.web-D_AoTLeS.js";import{a as c,i as l,t as u}from"./helpers-C3hOae0F.js";import{n as d,t as f}from"./index.web-BkgxHkvM.js";function p({label:e}){return(0,m.jsx)(f,{className:`rounded-sm border border-border bg-muted px-3 py-2`,children:(0,m.jsx)(o,{size:`sm`,className:`text-muted-foreground`,children:e})})}var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),d(),i(),a(),c(),m=r(),h=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`],g=[`items-start`,`items-center`,`items-end`],_={title:`UI/VStack`,component:s,argTypes:{space:{control:`select`,options:h},reversed:{control:`boolean`}},args:{space:`md`,reversed:!1},render:e=>(0,m.jsxs)(s,{...e,className:`items-start`,children:[(0,m.jsx)(p,{label:`One`}),(0,m.jsx)(p,{label:`Two`}),(0,m.jsx)(p,{label:`Three`})]})},v={},y={render:()=>(0,m.jsx)(l,{children:h.map(e=>(0,m.jsx)(u,{label:e,children:(0,m.jsxs)(s,{space:e,className:`items-start`,children:[(0,m.jsx)(p,{label:`One`}),(0,m.jsx)(p,{label:`Two`}),(0,m.jsx)(p,{label:`Three`})]})},e))})},b={render:()=>(0,m.jsxs)(l,{children:[(0,m.jsx)(u,{label:`reversed: false`,children:(0,m.jsxs)(s,{space:`md`,className:`items-start`,children:[(0,m.jsx)(p,{label:`One`}),(0,m.jsx)(p,{label:`Two`}),(0,m.jsx)(p,{label:`Three`})]})}),(0,m.jsx)(u,{label:`reversed: true`,children:(0,m.jsxs)(s,{space:`md`,reversed:!0,className:`items-start`,children:[(0,m.jsx)(p,{label:`One`}),(0,m.jsx)(p,{label:`Two`}),(0,m.jsx)(p,{label:`Three`})]})})]})},x={render:()=>(0,m.jsx)(l,{children:g.map(e=>(0,m.jsx)(u,{label:e,children:(0,m.jsxs)(s,{space:`md`,className:`w-64 rounded-lg border border-border bg-card p-2 ${e}`,children:[(0,m.jsx)(p,{label:`One`}),(0,m.jsx)(p,{label:`Two`})]})},e))})},S=[`Default`,`Space`,`Reversed`,`Alignment`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {SPACES.map(space => <Labeled key={space} label={space}>
          <VStack space={space} className="items-start">
            <Item label="One" />
            <Item label="Two" />
            <Item label="Three" />
          </VStack>
        </Labeled>)}
    </Showcase>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="reversed: false">
        <VStack space="md" className="items-start">
          <Item label="One" />
          <Item label="Two" />
          <Item label="Three" />
        </VStack>
      </Labeled>
      <Labeled label="reversed: true">
        <VStack space="md" reversed className="items-start">
          <Item label="One" />
          <Item label="Two" />
          <Item label="Three" />
        </VStack>
      </Labeled>
    </Showcase>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {ALIGNMENTS.map(alignment => <Labeled key={alignment} label={alignment}>
          <VStack space="md" className={\`w-64 rounded-lg border border-border bg-card p-2 \${alignment}\`}>
            <Item label="One" />
            <Item label="Two" />
          </VStack>
        </Labeled>)}
    </Showcase>
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Alignment,v as Default,b as Reversed,y as Space,S as __namedExportsOrder,_ as default};