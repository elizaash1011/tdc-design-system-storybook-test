import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{n as r,t as i}from"./ScrollView-DODU9APh.js";import{t as a}from"./jsx-runtime-BbDfbRii.js";import{i as o,r as s}from"./index.web-D_AoTLeS.js";import{a as c,i as l,n as u}from"./helpers-C3hOae0F.js";import{n as d,t as f}from"./index.web-BkgxHkvM.js";function p({label:e}){return(0,h.jsx)(f,{className:`border-b border-border px-4 py-3`,children:(0,h.jsx)(s,{className:`text-foreground`,children:e})})}function m({children:e,className:t}){return(0,h.jsx)(f,{className:`w-full overflow-hidden rounded-lg border border-border bg-card ${t??`h-64`}`,children:e})}var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),d(),r(),o(),c(),h=a(),g={flex:1},_=Array.from({length:20},(e,t)=>`Item ${t+1}`),v=Array.from({length:10},(e,t)=>`Column ${t+1}`),y={title:`UI/ScrollView`,component:i,render:e=>(0,h.jsx)(m,{children:(0,h.jsx)(i,{...e,className:`flex-1`,style:g,children:_.map(e=>(0,h.jsx)(p,{label:e},e))})})},b={},x={render:()=>(0,h.jsx)(m,{className:`h-24`,children:(0,h.jsx)(i,{horizontal:!0,className:`flex-1`,style:g,children:(0,h.jsx)(f,{className:`flex-row p-3`,children:v.map(e=>(0,h.jsx)(f,{className:`mr-2 justify-center rounded-lg border border-border bg-muted px-4 py-3`,children:(0,h.jsx)(s,{className:`text-foreground`,children:e})},e))})})})},S={render:()=>(0,h.jsx)(m,{children:(0,h.jsx)(i,{showsVerticalScrollIndicator:!1,className:`flex-1`,style:g,children:_.map(e=>(0,h.jsx)(p,{label:e},e))})})},C={render:()=>(0,h.jsx)(m,{children:(0,h.jsxs)(i,{stickyHeaderIndices:[0],className:`flex-1`,style:g,children:[(0,h.jsx)(f,{className:`border-b border-border bg-muted px-4 py-3`,children:(0,h.jsx)(s,{className:`font-semibold text-foreground`,children:`Sticky header`})}),_.map(e=>(0,h.jsx)(p,{label:e},e))]})})},w={render:()=>(0,h.jsxs)(l,{children:[(0,h.jsx)(u,{children:"This component is a plain re-export of react-native's `ScrollView`. It has no variants, sizes or theme tokens of its own; the borders and surfaces in these stories come from the wrapping container."}),(0,h.jsx)(u,{children:"On web, `ScrollView` maps to an overflow-scrolling div. Momentum scrolling, bounce, `scrollIndicatorInsets` and `keyboardDismissMode` are native-only, so the feel differs from a device even though layout and content match."}),(0,h.jsx)(u,{children:"Because the barrel re-exports the primitive rather than importing it, NativeWind does not wrap this component — a `className` set directly on the `ScrollView` may not apply. Style the container and the children instead, which is what these stories do."})]})},T=[`Default`,`Horizontal`,`NoScrollIndicator`,`StickyHeader`,`Notes`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Frame className="h-24">
      <ScrollView horizontal className="flex-1" style={FILL}>
        <Box className="flex-row p-3">
          {COLUMNS.map(label => <Box key={label} className="mr-2 justify-center rounded-lg border border-border bg-muted px-4 py-3">
              <Text className="text-foreground">{label}</Text>
            </Box>)}
        </Box>
      </ScrollView>
    </Frame>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1" style={FILL}>
        {ROWS.map(label => <Row key={label} label={label} />)}
      </ScrollView>
    </Frame>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <ScrollView stickyHeaderIndices={[0]} className="flex-1" style={FILL}>
        <Box className="border-b border-border bg-muted px-4 py-3">
          <Text className="font-semibold text-foreground">Sticky header</Text>
        </Box>
        {ROWS.map(label => <Row key={label} label={label} />)}
      </ScrollView>
    </Frame>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s
        \`ScrollView\`. It has no variants, sizes or theme tokens of its own; the
        borders and surfaces in these stories come from the wrapping container.
      </Note>
      <Note>
        On web, \`ScrollView\` maps to an overflow-scrolling div. Momentum
        scrolling, bounce, \`scrollIndicatorInsets\` and
        \`keyboardDismissMode\` are native-only, so the feel differs from a
        device even though layout and content match.
      </Note>
      <Note>
        Because the barrel re-exports the primitive rather than importing it,
        NativeWind does not wrap this component — a \`className\` set directly on
        the \`ScrollView\` may not apply. Style the container and the children
        instead, which is what these stories do.
      </Note>
    </Showcase>
}`,...w.parameters?.docs?.source}}}})))()}E();export{b as Default,x as Horizontal,S as NoScrollIndicator,w as Notes,C as StickyHeader,T as __namedExportsOrder,y as default};