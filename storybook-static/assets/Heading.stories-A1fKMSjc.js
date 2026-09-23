import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{n as i,t as a}from"./index.web-aEHnIKRS.js";import{a as o,i as s,n as c,t as l}from"./helpers-C3hOae0F.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),o(),u=r(),d=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`],f={title:`UI/Heading`,component:a,argTypes:{size:{control:`select`,options:d},bold:{control:`boolean`},italic:{control:`boolean`},underline:{control:`boolean`},strikeThrough:{control:`boolean`},sub:{control:`boolean`},highlight:{control:`boolean`},isTruncated:{control:`boolean`}},args:{size:`lg`,bold:!1,italic:!1,underline:!1,strikeThrough:!1,sub:!1,highlight:!1,isTruncated:!1},render:e=>(0,u.jsx)(a,{...e,children:`Section heading`})},p={},m={render:()=>(0,u.jsxs)(s,{children:[(0,u.jsx)(c,{children:`Each size maps to a semantic heading level: 3xl–5xl render an h1, 2xl an h2, xl an h3, lg an h4, md an h5, xs–sm an h6.`}),d.map(e=>(0,u.jsx)(l,{label:e,children:(0,u.jsx)(a,{size:e,children:`Section heading`})},e))]})},h={render:()=>(0,u.jsxs)(s,{children:[(0,u.jsx)(l,{label:`default`,children:(0,u.jsx)(a,{size:`lg`,children:`Section heading`})}),(0,u.jsx)(l,{label:`bold`,children:(0,u.jsx)(a,{size:`lg`,bold:!0,children:`Section heading`})}),(0,u.jsx)(l,{label:`italic`,children:(0,u.jsx)(a,{size:`lg`,italic:!0,children:`Section heading`})}),(0,u.jsx)(l,{label:`underline`,children:(0,u.jsx)(a,{size:`lg`,underline:!0,children:`Section heading`})}),(0,u.jsx)(l,{label:`strikeThrough`,children:(0,u.jsx)(a,{size:`lg`,strikeThrough:!0,children:`Section heading`})}),(0,u.jsx)(l,{label:`sub`,children:(0,u.jsx)(a,{size:`lg`,sub:!0,children:`Section heading`})}),(0,u.jsx)(l,{label:`highlight`,children:(0,u.jsx)(a,{size:`lg`,highlight:!0,children:`Section heading`})}),(0,u.jsx)(l,{label:`isTruncated`,className:`w-40`,children:(0,u.jsx)(a,{size:`lg`,isTruncated:!0,children:`A section heading long enough to be cut off`})})]})},g=[`Default`,`Sizes`,`Styles`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        Each size maps to a semantic heading level: 3xl–5xl render an h1, 2xl an
        h2, xl an h3, lg an h4, md an h5, xs–sm an h6.
      </Note>
      {SIZES.map(size => <Labeled key={size} label={size}>
          <Heading size={size}>Section heading</Heading>
        </Labeled>)}
    </Showcase>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="default">
        <Heading size="lg">Section heading</Heading>
      </Labeled>
      <Labeled label="bold">
        <Heading size="lg" bold>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="italic">
        <Heading size="lg" italic>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="underline">
        <Heading size="lg" underline>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="strikeThrough">
        <Heading size="lg" strikeThrough>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="sub">
        <Heading size="lg" sub>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="highlight">
        <Heading size="lg" highlight>
          Section heading
        </Heading>
      </Labeled>
      <Labeled label="isTruncated" className="w-40">
        <Heading size="lg" isTruncated>
          A section heading long enough to be cut off
        </Heading>
      </Labeled>
    </Showcase>
}`,...h.parameters?.docs?.source}}}})))()}_();export{p as Default,m as Sizes,h as Styles,g as __namedExportsOrder,f as default};