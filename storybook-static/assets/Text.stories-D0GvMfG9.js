import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{i,r as a}from"./index.web-D_AoTLeS.js";import{a as o,i as s,t as c}from"./helpers-C3hOae0F.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),o(),l=r(),u=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`6xl`],d={title:`UI/Text`,component:a,argTypes:{size:{control:`select`,options:u},bold:{control:`boolean`},italic:{control:`boolean`},underline:{control:`boolean`},strikeThrough:{control:`boolean`},sub:{control:`boolean`},highlight:{control:`boolean`},isTruncated:{control:`boolean`}},args:{size:`md`,bold:!1,italic:!1,underline:!1,strikeThrough:!1,sub:!1,highlight:!1,isTruncated:!1},render:e=>(0,l.jsx)(a,{...e,children:`The quick brown fox`})},f={},p={render:()=>(0,l.jsx)(s,{children:u.map(e=>(0,l.jsx)(c,{label:e,children:(0,l.jsx)(a,{size:e,children:`The quick brown fox`})},e))})},m={render:()=>(0,l.jsxs)(s,{children:[(0,l.jsx)(c,{label:`default`,children:(0,l.jsx)(a,{children:`The quick brown fox`})}),(0,l.jsx)(c,{label:`bold`,children:(0,l.jsx)(a,{bold:!0,children:`The quick brown fox`})}),(0,l.jsx)(c,{label:`italic`,children:(0,l.jsx)(a,{italic:!0,children:`The quick brown fox`})}),(0,l.jsx)(c,{label:`underline`,children:(0,l.jsx)(a,{underline:!0,children:`The quick brown fox`})}),(0,l.jsx)(c,{label:`strikeThrough`,children:(0,l.jsx)(a,{strikeThrough:!0,children:`The quick brown fox`})}),(0,l.jsx)(c,{label:`sub`,children:(0,l.jsx)(a,{sub:!0,children:`The quick brown fox`})}),(0,l.jsx)(c,{label:`highlight`,children:(0,l.jsx)(a,{highlight:!0,children:`The quick brown fox`})}),(0,l.jsx)(c,{label:`isTruncated`,className:`w-40`,children:(0,l.jsx)(a,{isTruncated:!0,children:`The quick brown fox jumps over the lazy dog and keeps on running`})})]})},h={render:()=>(0,l.jsxs)(s,{children:[(0,l.jsx)(c,{label:`text-foreground`,children:(0,l.jsx)(a,{className:`text-foreground`,children:`Primary body copy`})}),(0,l.jsx)(c,{label:`text-muted-foreground`,children:(0,l.jsx)(a,{className:`text-muted-foreground`,children:`Secondary body copy`})})]})},g=[`Default`,`Sizes`,`Styles`,`Muted`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {SIZES.map(size => <Labeled key={size} label={size}>
          <Text size={size}>The quick brown fox</Text>
        </Labeled>)}
    </Showcase>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="default">
        <Text>The quick brown fox</Text>
      </Labeled>
      <Labeled label="bold">
        <Text bold>The quick brown fox</Text>
      </Labeled>
      <Labeled label="italic">
        <Text italic>The quick brown fox</Text>
      </Labeled>
      <Labeled label="underline">
        <Text underline>The quick brown fox</Text>
      </Labeled>
      <Labeled label="strikeThrough">
        <Text strikeThrough>The quick brown fox</Text>
      </Labeled>
      <Labeled label="sub">
        <Text sub>The quick brown fox</Text>
      </Labeled>
      <Labeled label="highlight">
        <Text highlight>The quick brown fox</Text>
      </Labeled>
      <Labeled label="isTruncated" className="w-40">
        <Text isTruncated>
          The quick brown fox jumps over the lazy dog and keeps on running
        </Text>
      </Labeled>
    </Showcase>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="text-foreground">
        <Text className="text-foreground">Primary body copy</Text>
      </Labeled>
      <Labeled label="text-muted-foreground">
        <Text className="text-muted-foreground">Secondary body copy</Text>
      </Labeled>
    </Showcase>
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as Default,h as Muted,p as Sizes,m as Styles,g as __namedExportsOrder,d as default};