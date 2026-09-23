import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{i,r as a}from"./index.web-D_AoTLeS.js";import{a as o,i as s,n as c,t as l}from"./helpers-C3hOae0F.js";import{n as u,t as d}from"./index.web-BkgxHkvM.js";function f({label:e=`Content`}){return(0,p.jsx)(d,{className:`rounded-sm bg-muted px-3 py-2`,children:(0,p.jsx)(a,{size:`sm`,className:`text-muted-foreground`,children:e})})}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),u(),i(),o(),p=r(),m=[`p-0`,`p-2`,`p-4`,`p-6`],h=[`rounded-none`,`rounded-md`,`rounded-lg`,`rounded-full`],g={title:`UI/Box`,component:d,argTypes:{className:{control:`text`}},args:{className:`rounded-lg border border-border bg-card p-4`},render:e=>(0,p.jsx)(d,{...e,children:(0,p.jsx)(f,{})})},_={},v={render:()=>(0,p.jsxs)(s,{children:[(0,p.jsx)(c,{children:`Box has no style variants of its own — it is a plain view styled entirely through className, shown here with a card background and border.`}),m.map(e=>(0,p.jsx)(l,{label:e,children:(0,p.jsx)(d,{className:`rounded-lg border border-border bg-card ${e}`,children:(0,p.jsx)(f,{})})},e))]})},y={render:()=>(0,p.jsx)(s,{children:h.map(e=>(0,p.jsx)(l,{label:e,children:(0,p.jsx)(d,{className:`h-20 w-20 border border-border bg-muted ${e}`})},e))})},b={render:()=>(0,p.jsx)(s,{children:(0,p.jsx)(l,{label:`box inside box`,children:(0,p.jsx)(d,{className:`rounded-lg border border-border bg-card p-4`,children:(0,p.jsx)(d,{className:`rounded-md border border-border bg-background p-4`,children:(0,p.jsx)(f,{label:`Inner content`})})})})})},x=[`Default`,`Padding`,`Radius`,`Nested`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        Box has no style variants of its own — it is a plain view styled entirely
        through className, shown here with a card background and border.
      </Note>
      {PADDING.map(padding => <Labeled key={padding} label={padding}>
          <Box className={\`rounded-lg border border-border bg-card \${padding}\`}>
            <Filler />
          </Box>
        </Labeled>)}
    </Showcase>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {RADII.map(radius => <Labeled key={radius} label={radius}>
          <Box className={\`h-20 w-20 border border-border bg-muted \${radius}\`} />
        </Labeled>)}
    </Showcase>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="box inside box">
        <Box className="rounded-lg border border-border bg-card p-4">
          <Box className="rounded-md border border-border bg-background p-4">
            <Filler label="Inner content" />
          </Box>
        </Box>
      </Labeled>
    </Showcase>
}`,...b.parameters?.docs?.source}}}})))()}S();export{_ as Default,b as Nested,v as Padding,y as Radius,x as __namedExportsOrder,g as default};