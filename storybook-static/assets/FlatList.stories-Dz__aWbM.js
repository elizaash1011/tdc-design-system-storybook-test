import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{n as r,t as i}from"./View-DGrlzLEG.js";import{r as a}from"./dist-wrNzRCnc.js";import{f as o,p as s}from"./ScrollView-DODU9APh.js";import{t as c}from"./jsx-runtime-BbDfbRii.js";import{i as l,r as u}from"./index.web-D_AoTLeS.js";import{a as d,i as f,n as p,t as m}from"./helpers-C3hOae0F.js";import{n as h,t as g}from"./FlatList-DMaafIae.js";import{n as _,t as v}from"./index.web-BkgxHkvM.js";function y(e){let t=o.OS===`android`?{removeClippedSubviews:!0,maxToRenderPerBatch:5,updateCellsBatchingPeriod:100,initialNumToRender:5,windowSize:5,...e}:e;return(0,b.jsx)(g,{...t})}var b;function x(){return(x=e((()=>{n(),h(),a(),b=c(),y.__docgenInfo={description:``,methods:[],displayName:`FlatList`}})))()}function S({label:e}){return(0,T.jsx)(v,{className:`border-b border-border px-4 py-3`,children:(0,T.jsx)(u,{className:`text-foreground`,children:e})})}function C({label:e}){return(0,T.jsx)(v,{className:`mr-2 rounded-lg border border-border bg-muted px-4 py-3`,children:(0,T.jsx)(u,{className:`text-foreground`,children:e})})}function w({children:e,className:t}){return(0,T.jsx)(v,{className:`w-full overflow-hidden rounded-lg border border-border bg-card ${t??`h-64`}`,children:e})}var T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{n(),_(),x(),l(),r(),d(),T=c(),E=Array.from({length:20},(e,t)=>({id:`item-${t+1}`,label:`Item ${t+1}`})),D={title:`UI/FlatList`,component:y,args:{data:E,keyExtractor:e=>e.id,renderItem:({item:e})=>(0,T.jsx)(S,{label:e.label})},render:e=>(0,T.jsx)(w,{children:(0,T.jsx)(y,{...e,className:`flex-1`})})},O={},k={render:()=>(0,T.jsx)(w,{className:`h-20`,children:(0,T.jsx)(y,{horizontal:!0,data:E,keyExtractor:e=>e.id,renderItem:({item:e})=>(0,T.jsx)(C,{label:e.label}),showsHorizontalScrollIndicator:!1,className:`flex-1 p-2`})})},A={render:()=>(0,T.jsx)(w,{children:(0,T.jsx)(y,{data:E.slice(0,8),keyExtractor:e=>e.id,renderItem:({item:e})=>(0,T.jsx)(S,{label:e.label}),ListHeaderComponent:(0,T.jsx)(v,{className:`border-b border-border bg-muted px-4 py-3`,children:(0,T.jsx)(u,{className:`font-semibold text-foreground`,children:`Header`})}),ListFooterComponent:(0,T.jsx)(v,{className:`px-4 py-3`,children:(0,T.jsx)(u,{size:`sm`,className:`text-muted-foreground`,children:`Footer`})}),className:`flex-1`})})},j={render:()=>(0,T.jsx)(w,{children:(0,T.jsx)(y,{data:[],keyExtractor:e=>e.id,renderItem:({item:e})=>(0,T.jsx)(S,{label:e.label}),ListEmptyComponent:(0,T.jsx)(i,{className:`items-center justify-center px-6 py-10`,children:(0,T.jsx)(u,{className:`text-muted-foreground`,children:`No items`})}),className:`flex-1`})})},M={render:()=>(0,T.jsxs)(f,{children:[(0,T.jsx)(p,{children:"`FlatList` here is a wrapper over the react-native primitive. On Android it pre-applies performance defaults (`removeClippedSubviews`, `maxToRenderPerBatch`, `initialNumToRender`, `windowSize`); on iOS and web it passes props straight through. Those defaults are invisible in the browser."}),(0,T.jsx)(p,{children:"The component exposes no `size` or `variant` props — there is nothing themeable on the list itself. All colour in these stories comes from the row and container classNames (`bg-card`, `border-border`, `text-foreground`)."}),(0,T.jsx)(p,{children:"A second export, `RNFlatList`, is the unmodified react-native `FlatList`. Use it when you need to opt out of the Android defaults."}),(0,T.jsx)(m,{label:`RNFlatList escape hatch`,children:(0,T.jsx)(u,{size:`sm`,className:`text-muted-foreground`,children:`import { RNFlatList } from '@/components/ui/flat-list';`})})]})},N=[`Default`,`Horizontal`,`HeaderAndFooter`,`Empty`,`Notes`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ListFrame className="h-20">
      <FlatList horizontal data={ITEMS} keyExtractor={item => item.id} renderItem={({
      item
    }) => <Chip label={item.label} />} showsHorizontalScrollIndicator={false} className="flex-1 p-2" />
    </ListFrame>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ListFrame>
      <FlatList data={ITEMS.slice(0, 8)} keyExtractor={item => item.id} renderItem={({
      item
    }) => <Row label={item.label} />} ListHeaderComponent={<Box className="border-b border-border bg-muted px-4 py-3">
            <Text className="font-semibold text-foreground">Header</Text>
          </Box>} ListFooterComponent={<Box className="px-4 py-3">
            <Text size="sm" className="text-muted-foreground">
              Footer
            </Text>
          </Box>} className="flex-1" />
    </ListFrame>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ListFrame>
      <FlatList data={[] as Item[]} keyExtractor={(item: Item) => item.id} renderItem={({
      item
    }: {
      item: Item;
    }) => <Row label={item.label} />} ListEmptyComponent={<View className="items-center justify-center px-6 py-10">
            <Text className="text-muted-foreground">No items</Text>
          </View>} className="flex-1" />
    </ListFrame>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        \`FlatList\` here is a wrapper over the react-native primitive. On Android
        it pre-applies performance defaults (\`removeClippedSubviews\`,
        \`maxToRenderPerBatch\`, \`initialNumToRender\`, \`windowSize\`); on iOS and
        web it passes props straight through. Those defaults are invisible in
        the browser.
      </Note>
      <Note>
        The component exposes no \`size\` or \`variant\` props — there is nothing
        themeable on the list itself. All colour in these stories comes from the
        row and container classNames (\`bg-card\`, \`border-border\`,
        \`text-foreground\`).
      </Note>
      <Note>
        A second export, \`RNFlatList\`, is the unmodified react-native
        \`FlatList\`. Use it when you need to opt out of the Android defaults.
      </Note>
      <Labeled label="RNFlatList escape hatch">
        <Text size="sm" className="text-muted-foreground">
          {\`import { RNFlatList } from '@/components/ui/flat-list';\`}
        </Text>
      </Labeled>
    </Showcase>
}`,...M.parameters?.docs?.source}}}})))()}P();export{O as Default,j as Empty,A as HeaderAndFooter,k as Horizontal,M as Notes,N as __namedExportsOrder,D as default};