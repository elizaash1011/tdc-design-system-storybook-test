import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,i as a,o,r as s}from"./index.web-D_AoTLeS.js";import{a as c,i as l,n as u,t as d}from"./helpers-C3hOae0F.js";import{n as f,t as p}from"./index.web-BkgxHkvM.js";var m,h;function g(){return(g=e((()=>{i(),m=`flex flex-col relative z-0`,h=o({base:`justify-center items-center ${m}`})})))()}var _,v,y;function b(){return(b=e((()=>{_=t(n()),g(),v=r(),y=_.forwardRef(function({className:e,...t},n){return(0,v.jsx)(`div`,{className:h({class:e}),...t,ref:n})}),y.displayName=`Center`,y.__docgenInfo={description:``,methods:[],displayName:`Center`}})))()}var x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),f(),b(),a(),c(),x=r(),S=[`h-20 w-40`,`h-32 w-64`,`h-40 w-full`],C={title:`UI/Center`,component:y,argTypes:{className:{control:`text`}},args:{className:`h-32 w-64 rounded-lg border border-border bg-card`},render:e=>(0,x.jsx)(y,{...e,children:(0,x.jsx)(s,{className:`text-muted-foreground`,children:`Centered`})})},w={},T={render:()=>(0,x.jsxs)(l,{children:[(0,x.jsx)(u,{children:`Center has no style variants — it always applies justify-center and items-center. The outer border below marks the container it centers within.`}),S.map(e=>(0,x.jsx)(d,{label:e,children:(0,x.jsx)(y,{className:`rounded-lg border border-border bg-card ${e}`,children:(0,x.jsx)(p,{className:`rounded-sm bg-muted px-3 py-2`,children:(0,x.jsx)(s,{size:`sm`,className:`text-muted-foreground`,children:`Centered`})})})},e))]})},E={render:()=>(0,x.jsx)(l,{children:(0,x.jsx)(d,{label:`stacked children`,children:(0,x.jsxs)(y,{className:`h-40 w-64 rounded-lg border border-border bg-card`,children:[(0,x.jsx)(s,{className:`text-foreground`,children:`Item one`}),(0,x.jsx)(s,{size:`sm`,className:`text-muted-foreground`,children:`Item two`})]})})})},D=[`Default`,`Sizes`,`MultipleChildren`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        Center has no style variants — it always applies justify-center and
        items-center. The outer border below marks the container it centers
        within.
      </Note>
      {SIZES.map(size => <Labeled key={size} label={size}>
          <Center className={\`rounded-lg border border-border bg-card \${size}\`}>
            <Box className="rounded-sm bg-muted px-3 py-2">
              <Text size="sm" className="text-muted-foreground">
                Centered
              </Text>
            </Box>
          </Center>
        </Labeled>)}
    </Showcase>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="stacked children">
        <Center className="h-40 w-64 rounded-lg border border-border bg-card">
          <Text className="text-foreground">Item one</Text>
          <Text size="sm" className="text-muted-foreground">
            Item two
          </Text>
        </Center>
      </Labeled>
    </Showcase>
}`,...E.parameters?.docs?.source}}}})))()}O();export{w as Default,E as MultipleChildren,T as Sizes,D as __namedExportsOrder,C as default};