import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{n as r,t as i}from"./View-DGrlzLEG.js";import{n as a,t as o}from"./SectionList-Bc4vgXrR.js";import{t as s}from"./jsx-runtime-BbDfbRii.js";import{i as c,r as l}from"./index.web-D_AoTLeS.js";import{a as u,i as d,n as f}from"./helpers-C3hOae0F.js";import{n as p,t as m}from"./index.web-BkgxHkvM.js";function h({children:e,className:t}){return(0,v.jsx)(m,{className:`w-full overflow-hidden rounded-lg border border-border bg-card ${t??`h-64`}`,children:e})}function g({title:e}){return(0,v.jsx)(m,{className:`border-b border-border bg-muted px-4 py-2`,children:(0,v.jsx)(l,{size:`xs`,className:`uppercase tracking-wide text-muted-foreground`,children:e})})}function _({label:e}){return(0,v.jsx)(m,{className:`border-b border-border px-4 py-3`,children:(0,v.jsx)(l,{className:`text-foreground`,children:e})})}var v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),p(),a(),c(),r(),u(),v=s(),y={flex:1},b=[`A`,`B`,`C`,`D`].map((e,t)=>({title:`Section ${e}`,data:Array.from({length:5},(n,r)=>({id:`${e}-${r+1}`,label:`Item ${t*5+r+1}`}))})),x={title:`UI/SectionList`,component:o,args:{sections:b,keyExtractor:e=>e.id,renderItem:({item:e})=>(0,v.jsx)(_,{label:e.label}),renderSectionHeader:({section:e})=>(0,v.jsx)(g,{title:e.title})},render:e=>(0,v.jsx)(h,{children:(0,v.jsx)(o,{...e,className:`flex-1`,style:y})})},S={},C={render:()=>(0,v.jsx)(h,{children:(0,v.jsx)(o,{sections:b,keyExtractor:e=>e.id,renderItem:({item:e})=>(0,v.jsx)(_,{label:e.label}),renderSectionHeader:({section:e})=>(0,v.jsx)(g,{title:e.title}),stickySectionHeadersEnabled:!0,className:`flex-1`,style:y})})},w={render:()=>(0,v.jsx)(h,{children:(0,v.jsx)(o,{sections:b.slice(0,2),keyExtractor:e=>e.id,renderItem:({item:e})=>(0,v.jsx)(_,{label:e.label}),renderSectionHeader:({section:e})=>(0,v.jsx)(g,{title:e.title}),renderSectionFooter:({section:e})=>(0,v.jsx)(m,{className:`border-b border-border px-4 py-2`,children:(0,v.jsxs)(l,{size:`xs`,className:`text-muted-foreground`,children:[e.data.length,` items`]})}),className:`flex-1`,style:y})})},T={render:()=>(0,v.jsx)(h,{children:(0,v.jsx)(o,{sections:[],keyExtractor:e=>e.id,renderItem:({item:e})=>(0,v.jsx)(_,{label:e.label}),ListEmptyComponent:(0,v.jsx)(i,{className:`items-center justify-center px-6 py-10`,children:(0,v.jsx)(l,{className:`text-muted-foreground`,children:`No sections`})}),className:`flex-1`,style:y})})},E={render:()=>(0,v.jsxs)(d,{children:[(0,v.jsx)(f,{children:"This component is a plain re-export of react-native's `SectionList`. It exposes no variants, sizes or data-states — only the RN props."}),(0,v.jsx)(f,{children:"`stickySectionHeadersEnabled` defaults to true on iOS and false elsewhere. On web the sticky behaviour is emulated and can drift by a pixel or two while scrolling; check the real feel on a device."}),(0,v.jsx)(f,{children:"`className` is not reliable on this component. NativeWind v5 only wraps a fixed set of RN components, `SectionList` is not one of them, and this barrel re-exports rather than imports the primitive — so style the container and the rows instead, as these stories do."})]})},D=[`Default`,`StickySectionHeaders`,`WithSectionFooter`,`Empty`,`Notes`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <SectionList sections={SECTIONS} keyExtractor={item => item.id} renderItem={({
      item
    }) => <Row label={item.label} />} renderSectionHeader={({
      section
    }) => <SectionHeader title={section.title} />} stickySectionHeadersEnabled className="flex-1" style={FILL} />
    </Frame>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <SectionList sections={SECTIONS.slice(0, 2)} keyExtractor={item => item.id} renderItem={({
      item
    }) => <Row label={item.label} />} renderSectionHeader={({
      section
    }) => <SectionHeader title={section.title} />} renderSectionFooter={({
      section
    }) => <Box className="border-b border-border px-4 py-2">
            <Text size="xs" className="text-muted-foreground">
              {section.data.length} items
            </Text>
          </Box>} className="flex-1" style={FILL} />
    </Frame>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <SectionList sections={[] as SectionData[]} keyExtractor={(item: Item) => item.id} renderItem={({
      item
    }: {
      item: Item;
    }) => <Row label={item.label} />} ListEmptyComponent={<View className="items-center justify-center px-6 py-10">
            <Text className="text-muted-foreground">No sections</Text>
          </View>} className="flex-1" style={FILL} />
    </Frame>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s
        \`SectionList\`. It exposes no variants, sizes or data-states — only the
        RN props.
      </Note>
      <Note>
        \`stickySectionHeadersEnabled\` defaults to true on iOS and false
        elsewhere. On web the sticky behaviour is emulated and can drift by a
        pixel or two while scrolling; check the real feel on a device.
      </Note>
      <Note>
        \`className\` is not reliable on this component. NativeWind v5 only wraps
        a fixed set of RN components, \`SectionList\` is not one of them, and this
        barrel re-exports rather than imports the primitive — so style the
        container and the rows instead, as these stories do.
      </Note>
    </Showcase>
}`,...E.parameters?.docs?.source}}}})))()}O();export{S as Default,T as Empty,E as Notes,C as StickySectionHeaders,w as WithSectionFooter,D as __namedExportsOrder,x as default};