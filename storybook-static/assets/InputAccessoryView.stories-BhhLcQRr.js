import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{r,t as i}from"./dist-wrNzRCnc.js";import{f as a,p as o}from"./ScrollView-DODU9APh.js";import{t as s}from"./jsx-runtime-BbDfbRii.js";import{i as c,n as l,r as u,t as d}from"./index.web-D_AoTLeS.js";import{a as f,i as p,t as m}from"./button-BmNQOk4E.js";import{a as h,i as g,n as _}from"./helpers-C3hOae0F.js";import{n as v,t as y}from"./index.web-BkgxHkvM.js";import{n as b,t as x}from"./index.web-ano-UwRB.js";import{a as S,n as C,t as w}from"./input-jh8ltVFO.js";function T(){return(0,D.jsxs)(x,{space:`sm`,className:`w-full items-center justify-between border-t border-border bg-muted px-3 py-2`,children:[(0,D.jsx)(u,{size:`sm`,className:`text-muted-foreground`,children:`Accessory bar`}),(0,D.jsxs)(x,{space:`sm`,children:[(0,D.jsx)(m,{size:`sm`,variant:`ghost`,children:(0,D.jsx)(p,{children:`Clear`})}),(0,D.jsx)(m,{size:`sm`,children:(0,D.jsx)(p,{children:`Done`})})]})]})}function E(){return(0,D.jsxs)(d,{space:`md`,className:`w-full max-w-sm items-start`,children:[(0,D.jsx)(y,{className:`w-full rounded-lg border border-border bg-card p-3`,children:(0,D.jsx)(w,{children:(0,D.jsx)(C,{placeholder:`Focus me on iOS`,inputAccessoryViewID:O})})}),k?(0,D.jsx)(i,{nativeID:O,children:(0,D.jsx)(T,{})}):null,(0,D.jsxs)(d,{space:`xs`,className:`w-full`,children:[(0,D.jsx)(u,{size:`xs`,className:`uppercase tracking-wide text-muted-foreground`,children:`preview (not the real component)`}),(0,D.jsx)(y,{className:`w-full overflow-hidden rounded-lg border border-border bg-card`,children:(0,D.jsx)(T,{})})]})]})}var D,O,k,A,j,M,N;function P(){return(P=e((()=>{n(),r(),v(),f(),b(),S(),c(),l(),h(),D=s(),O=`story-accessory-view`,k=a.OS===`ios`,A={title:`UI/InputAccessoryView`,render:()=>(0,D.jsx)(E,{}),parameters:{docs:{description:{component:"`component` is deliberately omitted: on web the imported value is\n`undefined`, and handing that to Storybook for docgen is worse than having no\nprop table. Every story supplies its own `render`."}}}},j={render:()=>(0,D.jsxs)(d,{space:`md`,className:`w-full items-start`,children:[(0,D.jsx)(_,{children:"iOS-only. react-native-web does not implement or export `InputAccessoryView`, so on web the import resolves to `undefined` and the component is not rendered at all here — the bar below is a static preview of the same children, not the component. On Android nothing renders either. On iOS the real bar docks above the keyboard whenever the input with the matching `inputAccessoryViewID` is focused."}),(0,D.jsx)(E,{})]})},M={render:()=>(0,D.jsxs)(g,{children:[(0,D.jsx)(_,{children:"This component is a plain re-export of react-native's `InputAccessoryView`. There are no variants, sizes or data-states."}),(0,D.jsx)(_,{children:"Wiring: put the same string on the input's `inputAccessoryViewID` and the accessory view's `nativeID`. A mismatch fails silently — the bar simply never appears."}),(0,D.jsx)(_,{children:"The accessory view is positioned by the OS, not by your layout, so it ignores where you mount it in the tree. It also does not inherit the surrounding theme: `backgroundColor` takes a raw colour value, so drive it from the resolved theme colour rather than a token class if you need it to follow dark mode."}),(0,D.jsx)(_,{children:"For a cross-platform toolbar above the keyboard, use `react-native-keyboard-controller`'s `KeyboardToolbar` / `KeyboardStickyView` (already a dependency) instead of this primitive."})]})},N=[`Default`,`Notes`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <VStack space="md" className="w-full items-start">
      <Note>
        iOS-only. react-native-web does not implement or export
        \`InputAccessoryView\`, so on web the import resolves to \`undefined\` and
        the component is not rendered at all here — the bar below is a static
        preview of the same children, not the component. On Android nothing
        renders either. On iOS the real bar docks above the keyboard whenever
        the input with the matching \`inputAccessoryViewID\` is focused.
      </Note>
      <AccessoryExample />
    </VStack>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s
        \`InputAccessoryView\`. There are no variants, sizes or data-states.
      </Note>
      <Note>
        Wiring: put the same string on the input&apos;s
        \`inputAccessoryViewID\` and the accessory view&apos;s \`nativeID\`. A
        mismatch fails silently — the bar simply never appears.
      </Note>
      <Note>
        The accessory view is positioned by the OS, not by your layout, so it
        ignores where you mount it in the tree. It also does not inherit the
        surrounding theme: \`backgroundColor\` takes a raw colour value, so drive
        it from the resolved theme colour rather than a token class if you need
        it to follow dark mode.
      </Note>
      <Note>
        For a cross-platform toolbar above the keyboard, use
        \`react-native-keyboard-controller\`&apos;s \`KeyboardToolbar\` /
        \`KeyboardStickyView\` (already a dependency) instead of this primitive.
      </Note>
    </Showcase>
}`,...M.parameters?.docs?.source}}}})))()}P();export{j as Default,M as Notes,N as __namedExportsOrder,A as default};