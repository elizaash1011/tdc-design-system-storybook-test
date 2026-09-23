import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{r}from"./dist-wrNzRCnc.js";import{f as i,p as a}from"./ScrollView-DODU9APh.js";import{t as o}from"./jsx-runtime-BbDfbRii.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./index.web-D_AoTLeS.js";import{n as p,t as m}from"./View-C3eIN7TA.js";import{a as h,i as g,n as _,t as v}from"./helpers-C3hOae0F.js";import{n as y,t as b}from"./index.web-ano-UwRB.js";var x,S,C,w;function T(){return(T=e((()=>{x=t(n()),s(),r(),p(),S=o(),C=u({base:`bg-border`,variants:{orientation:{vertical:`w-px h-full`,horizontal:`h-px w-auto`}}}),w=x.forwardRef(function({className:e,orientation:t=`horizontal`,...n},r){return(0,S.jsx)(m,{ref:r,...n,"aria-orientation":t,role:i.OS===`web`?`separator`:void 0,className:C({orientation:t,class:e})})}),w.displayName=`Divider`,w.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1}}}})))()}var E,D,O,k,A,j;function M(){return(M=e((()=>{n(),T(),y(),c(),l(),h(),E=o(),D={title:`UI/Divider`,component:w,argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]}},args:{orientation:`horizontal`},render:e=>(0,E.jsxs)(f,{space:`md`,className:`w-64`,children:[(0,E.jsx)(d,{className:`text-foreground`,children:`Item one`}),(0,E.jsx)(w,{...e}),(0,E.jsx)(d,{className:`text-foreground`,children:`Item two`})]})},O={},k={render:()=>(0,E.jsxs)(g,{children:[(0,E.jsx)(_,{children:`A vertical divider is one pixel wide and full height, so it only shows up inside a parent with a fixed height.`}),(0,E.jsx)(v,{label:`horizontal`,className:`w-64`,children:(0,E.jsxs)(f,{space:`md`,className:`w-64`,children:[(0,E.jsx)(d,{className:`text-foreground`,children:`Item one`}),(0,E.jsx)(w,{orientation:`horizontal`}),(0,E.jsx)(d,{className:`text-foreground`,children:`Item two`})]})}),(0,E.jsx)(v,{label:`vertical`,children:(0,E.jsxs)(b,{space:`md`,className:`h-10 items-center`,children:[(0,E.jsx)(d,{className:`text-foreground`,children:`Item one`}),(0,E.jsx)(w,{orientation:`vertical`}),(0,E.jsx)(d,{className:`text-foreground`,children:`Item two`})]})})]})},A={render:()=>(0,E.jsx)(g,{children:(0,E.jsx)(v,{label:`separating list rows`,className:`w-64`,children:(0,E.jsxs)(f,{className:`w-64 rounded-lg border border-border bg-card`,children:[(0,E.jsx)(d,{className:`p-3 text-foreground`,children:`Item one`}),(0,E.jsx)(w,{}),(0,E.jsx)(d,{className:`p-3 text-foreground`,children:`Item two`}),(0,E.jsx)(w,{}),(0,E.jsx)(d,{className:`p-3 text-foreground`,children:`Item three`})]})})})},j=[`Default`,`Orientation`,`InCard`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        A vertical divider is one pixel wide and full height, so it only shows
        up inside a parent with a fixed height.
      </Note>
      <Labeled label="horizontal" className="w-64">
        <VStack space="md" className="w-64">
          <Text className="text-foreground">Item one</Text>
          <Divider orientation="horizontal" />
          <Text className="text-foreground">Item two</Text>
        </VStack>
      </Labeled>
      <Labeled label="vertical">
        <HStack space="md" className="h-10 items-center">
          <Text className="text-foreground">Item one</Text>
          <Divider orientation="vertical" />
          <Text className="text-foreground">Item two</Text>
        </HStack>
      </Labeled>
    </Showcase>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="separating list rows" className="w-64">
        <VStack className="w-64 rounded-lg border border-border bg-card">
          <Text className="p-3 text-foreground">Item one</Text>
          <Divider />
          <Text className="p-3 text-foreground">Item two</Text>
          <Divider />
          <Text className="p-3 text-foreground">Item three</Text>
        </VStack>
      </Labeled>
    </Showcase>
}`,...A.parameters?.docs?.source}}}})))()}M();export{O as Default,A as InCard,k as Orientation,j as __namedExportsOrder,D as default};