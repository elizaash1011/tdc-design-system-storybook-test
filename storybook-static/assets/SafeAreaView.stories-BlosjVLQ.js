import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,i as a,o,s}from"./iframe-ARvSpLj6.js";import{i as c,n as l,r as u,t as d}from"./index.web-D_AoTLeS.js";import{a as f,i as p,n as m}from"./helpers-C3hOae0F.js";import{n as h,t as g}from"./index.web-BkgxHkvM.js";function _({children:e}){return(0,b.jsx)(o,{children:e})}function v({label:e}){return(0,b.jsxs)(g,{className:`rounded-md border border-border bg-card p-4`,children:[(0,b.jsx)(u,{className:`text-foreground`,children:e}),(0,b.jsx)(u,{size:`sm`,className:`text-muted-foreground`,children:`Content inside the safe area`})]})}function y({children:e}){return(0,b.jsx)(g,{className:`w-full rounded-lg border border-dashed border-border bg-muted p-2`,children:e})}var b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),s(),h(),i(),c(),l(),f(),b=r(),x={width:`100%`},S={title:`UI/SafeAreaView`,component:a,render:e=>(0,b.jsx)(_,{children:(0,b.jsx)(y,{children:(0,b.jsx)(a,{...e,style:x,children:(0,b.jsx)(v,{label:`SafeAreaView`})})})})},C={render:()=>(0,b.jsxs)(d,{space:`md`,className:`w-full items-start`,children:[(0,b.jsx)(m,{children:"Safe-area insets are all zero in a desktop browser — there is no notch, home indicator or status bar to avoid — so this renders as an ordinary view with no extra padding. The dashed `bg-muted` frame marks where the inset padding would appear on a device."}),(0,b.jsx)(_,{children:(0,b.jsx)(y,{children:(0,b.jsx)(a,{style:x,children:(0,b.jsx)(v,{label:`All edges (default)`})})})})]})},w={render:()=>(0,b.jsx)(_,{children:(0,b.jsx)(p,{className:`w-full`,children:[`top`,`bottom`,`left`,`right`].map(e=>(0,b.jsxs)(d,{space:`xs`,className:`w-full`,children:[(0,b.jsx)(u,{size:`xs`,className:`uppercase tracking-wide text-muted-foreground`,children:e}),(0,b.jsx)(y,{children:(0,b.jsx)(a,{edges:[e],style:x,children:(0,b.jsx)(v,{label:`edges: ${e}`})})})]},e))})})},T={render:()=>(0,b.jsxs)(d,{space:`md`,className:`w-full items-start`,children:[(0,b.jsx)(m,{children:'`mode="margin"` adds the insets as margin instead of padding, so a background on the content stops at the safe area rather than bleeding into it. Identical to the default `mode="padding"` on web, where every inset is zero.'}),(0,b.jsx)(_,{children:(0,b.jsx)(y,{children:(0,b.jsx)(a,{mode:`margin`,edges:[`top`,`bottom`],style:x,children:(0,b.jsx)(v,{label:`mode: margin`})})})})]})},E={render:()=>(0,b.jsxs)(p,{children:[(0,b.jsx)(m,{children:`Native-only behaviour: on iOS and Android the insets come from the device (notch, dynamic island, home indicator, Android status and navigation bars). In the browser every inset resolves to 0, so nothing in these stories shifts — the component still renders, it just has nothing to avoid.`}),(0,b.jsx)(m,{children:"The component throws without a `SafeAreaProvider` ancestor. The Storybook preview decorator only supplies `GluestackUIProvider`, so these stories add `SafeAreaProvider` themselves; real screens get it from the app root."}),(0,b.jsx)(m,{children:"`className` does not reach this component — it is re-exported from node_modules, which NativeWind's babel rewrite deliberately skips. Put theme classes on a child view, as `Content` does here."}),(0,b.jsx)(m,{children:"There are no variants, sizes or data-states; the only meaningful props are `edges` and `mode`."})]})},D=[`Default`,`Edges`,`MarginMode`,`Notes`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <VStack space="md" className="w-full items-start">
      <Note>
        Safe-area insets are all zero in a desktop browser — there is no notch,
        home indicator or status bar to avoid — so this renders as an ordinary
        view with no extra padding. The dashed \`bg-muted\` frame marks where the
        inset padding would appear on a device.
      </Note>
      <WithProvider>
        <InsetFrame>
          <SafeAreaView style={FULL_WIDTH}>
            <Content label="All edges (default)" />
          </SafeAreaView>
        </InsetFrame>
      </WithProvider>
    </VStack>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <WithProvider>
      <Showcase className="w-full">
        {(['top', 'bottom', 'left', 'right'] as const).map(edge => <VStack key={edge} space="xs" className="w-full">
            <Text size="xs" className="uppercase tracking-wide text-muted-foreground">
              {edge}
            </Text>
            <InsetFrame>
              <SafeAreaView edges={[edge]} style={FULL_WIDTH}>
                <Content label={\`edges: \${edge}\`} />
              </SafeAreaView>
            </InsetFrame>
          </VStack>)}
      </Showcase>
    </WithProvider>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <VStack space="md" className="w-full items-start">
      <Note>
        \`mode="margin"\` adds the insets as margin instead of padding, so a
        background on the content stops at the safe area rather than bleeding
        into it. Identical to the default \`mode="padding"\` on web, where every
        inset is zero.
      </Note>
      <WithProvider>
        <InsetFrame>
          <SafeAreaView mode="margin" edges={['top', 'bottom']} style={FULL_WIDTH}>
            <Content label="mode: margin" />
          </SafeAreaView>
        </InsetFrame>
      </WithProvider>
    </VStack>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        Native-only behaviour: on iOS and Android the insets come from the
        device (notch, dynamic island, home indicator, Android status and
        navigation bars). In the browser every inset resolves to 0, so nothing
        in these stories shifts — the component still renders, it just has
        nothing to avoid.
      </Note>
      <Note>
        The component throws without a \`SafeAreaProvider\` ancestor. The
        Storybook preview decorator only supplies \`GluestackUIProvider\`, so
        these stories add \`SafeAreaProvider\` themselves; real screens get it
        from the app root.
      </Note>
      <Note>
        \`className\` does not reach this component — it is re-exported from
        node_modules, which NativeWind&apos;s babel rewrite deliberately skips.
        Put theme classes on a child view, as \`Content\` does here.
      </Note>
      <Note>
        There are no variants, sizes or data-states; the only meaningful props
        are \`edges\` and \`mode\`.
      </Note>
    </Showcase>
}`,...E.parameters?.docs?.source}}}})))()}O();export{C as Default,w as Edges,T as MarginMode,E as Notes,D as __namedExportsOrder,S as default};