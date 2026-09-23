import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{n as r,t as i}from"./View-DGrlzLEG.js";import{n as a,t as o}from"./VirtualizedList-CqKFeDwf.js";import{t as s}from"./jsx-runtime-BbDfbRii.js";import{i as c,r as l}from"./index.web-D_AoTLeS.js";import{a as u,i as d,n as f}from"./helpers-C3hOae0F.js";import{n as p,t as m}from"./index.web-BkgxHkvM.js";function h({label:e}){return(0,_.jsx)(m,{className:`border-b border-border px-4 py-3`,children:(0,_.jsx)(l,{className:`text-foreground`,children:e})})}function g({children:e,className:t}){return(0,_.jsx)(m,{className:`w-full overflow-hidden rounded-lg border border-border bg-card ${t??`h-64`}`,children:e})}var _,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),p(),c(),r(),a(),u(),_=s(),v={flex:1},y=200,b=(e,t)=>({id:`item-${t+1}`,label:`Item ${t+1}`}),x=()=>y,S={title:`UI/VirtualizedList`,component:o,args:{data:null,getItem:b,getItemCount:x,keyExtractor:e=>e.id,renderItem:({item:e})=>(0,_.jsx)(h,{label:e.label})},render:e=>(0,_.jsx)(g,{children:(0,_.jsx)(o,{...e,className:`flex-1`,style:v})})},C={},w={render:()=>(0,_.jsx)(g,{children:(0,_.jsx)(o,{data:null,getItem:b,getItemCount:x,keyExtractor:e=>e.id,renderItem:({item:e})=>(0,_.jsx)(h,{label:e.label}),getItemLayout:(e,t)=>({length:45,offset:45*t,index:t}),initialNumToRender:12,windowSize:5,className:`flex-1`,style:v})})},T={render:()=>(0,_.jsx)(g,{children:(0,_.jsx)(o,{data:null,getItem:b,getItemCount:()=>12,keyExtractor:e=>e.id,renderItem:({item:e})=>(0,_.jsx)(h,{label:e.label}),ListHeaderComponent:(0,_.jsx)(m,{className:`border-b border-border bg-muted px-4 py-3`,children:(0,_.jsx)(l,{className:`font-semibold text-foreground`,children:`Header`})}),ListFooterComponent:(0,_.jsx)(m,{className:`px-4 py-3`,children:(0,_.jsx)(l,{size:`sm`,className:`text-muted-foreground`,children:`Footer`})}),className:`flex-1`,style:v})})},E={render:()=>(0,_.jsx)(g,{children:(0,_.jsx)(o,{data:null,getItem:b,getItemCount:()=>0,keyExtractor:e=>e.id,renderItem:({item:e})=>(0,_.jsx)(h,{label:e.label}),ListEmptyComponent:(0,_.jsx)(i,{className:`items-center justify-center px-6 py-10`,children:(0,_.jsx)(l,{className:`text-muted-foreground`,children:`No items`})}),className:`flex-1`,style:v})})},D={render:()=>(0,_.jsxs)(d,{children:[(0,_.jsx)(f,{children:"This component is a plain re-export of react-native's `VirtualizedList`. It has no variants, sizes or theme props — it is pure list machinery. Prefer `FlatList` or `SectionList` unless you specifically need the lower-level API."}),(0,_.jsx)(f,{children:"`data` is opaque here: it is handed back to `getItem` untouched, so these stories pass `null` and generate rows from the index. The list length comes from `getItemCount`, not from `data.length`."}),(0,_.jsx)(f,{children:`Virtualisation windows behave differently on web than on native — react-native-web renders into a scrolling div and cell recycling is less aggressive. Row counts and blank-space behaviour should be verified on a device.`}),(0,_.jsx)(f,{children:"Because the barrel re-exports the primitive rather than importing it, NativeWind does not wrap this component — a `className` set directly on the list may not apply. Style the container and the rows instead, which is what these stories do."})]})},O=[`Default`,`FixedItemLayout`,`HeaderAndFooter`,`Empty`,`Notes`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <VirtualizedList data={null} getItem={getItem} getItemCount={getItemCount} keyExtractor={(item: Item) => item.id} renderItem={({
      item
    }: {
      item: Item;
    }) => <Row label={item.label} />}
    // Rows are a known height, so the list can skip measurement.
    getItemLayout={(_data, index) => ({
      length: 45,
      offset: 45 * index,
      index
    })} initialNumToRender={12} windowSize={5} className="flex-1" style={FILL} />
    </Frame>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <VirtualizedList data={null} getItem={getItem} getItemCount={() => 12} keyExtractor={(item: Item) => item.id} renderItem={({
      item
    }: {
      item: Item;
    }) => <Row label={item.label} />} ListHeaderComponent={<Box className="border-b border-border bg-muted px-4 py-3">
            <Text className="font-semibold text-foreground">Header</Text>
          </Box>} ListFooterComponent={<Box className="px-4 py-3">
            <Text size="sm" className="text-muted-foreground">
              Footer
            </Text>
          </Box>} className="flex-1" style={FILL} />
    </Frame>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <VirtualizedList data={null} getItem={getItem} getItemCount={() => 0} keyExtractor={(item: Item) => item.id} renderItem={({
      item
    }: {
      item: Item;
    }) => <Row label={item.label} />} ListEmptyComponent={<View className="items-center justify-center px-6 py-10">
            <Text className="text-muted-foreground">No items</Text>
          </View>} className="flex-1" style={FILL} />
    </Frame>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s
        \`VirtualizedList\`. It has no variants, sizes or theme props — it is
        pure list machinery. Prefer \`FlatList\` or \`SectionList\` unless you
        specifically need the lower-level API.
      </Note>
      <Note>
        \`data\` is opaque here: it is handed back to \`getItem\` untouched, so
        these stories pass \`null\` and generate rows from the index. The list
        length comes from \`getItemCount\`, not from \`data.length\`.
      </Note>
      <Note>
        Virtualisation windows behave differently on web than on native —
        react-native-web renders into a scrolling div and cell recycling is less
        aggressive. Row counts and blank-space behaviour should be verified on a
        device.
      </Note>
      <Note>
        Because the barrel re-exports the primitive rather than importing it,
        NativeWind does not wrap this component — a \`className\` set directly on
        the list may not apply. Style the container and the rows instead, which
        is what these stories do.
      </Note>
    </Showcase>
}`,...D.parameters?.docs?.source}}}})))()}k();export{C as Default,E as Empty,w as FixedItemLayout,T as HeaderAndFooter,D as Notes,O as __namedExportsOrder,S as default};