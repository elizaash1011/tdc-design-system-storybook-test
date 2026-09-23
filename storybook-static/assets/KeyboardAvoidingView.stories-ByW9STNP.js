import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{C as r,S as i}from"./dist-wrNzRCnc.js";import{n as a,t as o}from"./ScrollView-DODU9APh.js";import{t as s}from"./jsx-runtime-BbDfbRii.js";import{i as c,n as l,r as u,t as d}from"./index.web-D_AoTLeS.js";import{a as f,i as p,n as m,t as h}from"./helpers-C3hOae0F.js";import{n as g,t as _}from"./index.web-BkgxHkvM.js";import{a as v,n as y,t as b}from"./input-jh8ltVFO.js";function x({label:e}){return(0,C.jsx)(_,{className:`border-b border-border px-4 py-3`,children:(0,C.jsx)(u,{className:`text-foreground`,children:e})})}function S({behavior:e}){return(0,C.jsx)(_,{className:`h-80 w-full max-w-sm overflow-hidden rounded-lg border border-border bg-card`,children:(0,C.jsxs)(i,{behavior:e,style:w,children:[(0,C.jsx)(o,{className:`flex-1`,style:w,children:E.map(e=>(0,C.jsx)(x,{label:e},e))}),(0,C.jsx)(_,{className:`border-t border-border bg-background p-3`,children:(0,C.jsx)(b,{children:(0,C.jsx)(y,{placeholder:`Type a message`})})})]})})}var C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{n(),g(),v(),r(),a(),c(),l(),f(),C=s(),w={flex:1},T=[`height`,`position`,`padding`],E=Array.from({length:12},(e,t)=>`Item ${t+1}`),D={title:`UI/KeyboardAvoidingView`,component:i,argTypes:{behavior:{control:`select`,options:T},enabled:{control:`boolean`},keyboardVerticalOffset:{control:`number`}},args:{behavior:`padding`,enabled:!0,keyboardVerticalOffset:0},render:e=>(0,C.jsx)(_,{className:`h-80 w-full max-w-sm overflow-hidden rounded-lg border border-border bg-card`,children:(0,C.jsxs)(i,{...e,style:w,children:[(0,C.jsx)(o,{className:`flex-1`,style:w,children:E.map(e=>(0,C.jsx)(x,{label:e},e))}),(0,C.jsx)(_,{className:`border-t border-border bg-background p-3`,children:(0,C.jsx)(b,{children:(0,C.jsx)(y,{placeholder:`Type a message`})})})]})})},O={render:()=>(0,C.jsxs)(d,{space:`md`,className:`w-full items-start`,children:[(0,C.jsx)(m,{children:`There is no on-screen keyboard in a desktop browser, so this component never receives a keyboard frame event and never moves. Focusing the input below does nothing visible. What the story does confirm is the layout it wraps: scrolling content that flexes, composer pinned to the bottom. The avoidance itself has to be checked in a simulator.`}),(0,C.jsx)(S,{behavior:`padding`})]})},k={render:()=>(0,C.jsxs)(p,{className:`w-full`,children:[(0,C.jsx)(m,{children:"`behavior` decides how the view gets out of the keyboard's way: `padding` adds bottom padding, `height` shrinks the view, `position` translates it. The recommended default is `padding` on iOS and `height` on Android. All three look identical on web."}),T.map(e=>(0,C.jsx)(h,{label:e,className:`w-full`,children:(0,C.jsx)(S,{behavior:e})},e))]})},A={render:()=>(0,C.jsxs)(d,{space:`md`,className:`w-full items-start`,children:[(0,C.jsxs)(m,{children:["`enabled=",!1,"` turns the avoidance off without changing the tree — useful when a screen is behind a modal. Indistinguishable from enabled on web."]}),(0,C.jsx)(_,{className:`h-80 w-full max-w-sm overflow-hidden rounded-lg border border-border bg-card`,children:(0,C.jsxs)(i,{behavior:`padding`,enabled:!1,style:w,children:[(0,C.jsx)(o,{className:`flex-1`,style:w,children:E.map(e=>(0,C.jsx)(x,{label:e},e))}),(0,C.jsx)(_,{className:`border-t border-border bg-background p-3`,children:(0,C.jsx)(b,{children:(0,C.jsx)(y,{placeholder:`Type a message`})})})]})})]})},j={render:()=>(0,C.jsxs)(p,{children:[(0,C.jsx)(m,{children:"This component is a plain re-export of react-native's `KeyboardAvoidingView`. It has no variants, sizes, data-states or theme props."}),(0,C.jsx)(m,{children:"Web: no on-screen keyboard exists, so the component is inert. Every `behavior` renders the same and `keyboardVerticalOffset` has no effect."}),(0,C.jsx)(m,{children:"`keyboardVerticalOffset` compensates for chrome the component cannot measure — a navigation header or tab bar above/below it. Getting it wrong shows up as a gap or a clipped input, and only on a device."}),(0,C.jsx)(m,{children:"This repo also depends on `react-native-keyboard-controller`, whose `KeyboardAvoidingView` / `KeyboardStickyView` track the keyboard frame continuously instead of snapping. Prefer those for chat-style composers; this export is the RN baseline."})]})},M=[`Default`,`Behaviors`,`Disabled`,`Notes`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <VStack space="md" className="w-full items-start">
      <Note>
        There is no on-screen keyboard in a desktop browser, so this component
        never receives a keyboard frame event and never moves. Focusing the
        input below does nothing visible. What the story does confirm is the
        layout it wraps: scrolling content that flexes, composer pinned to the
        bottom. The avoidance itself has to be checked in a simulator.
      </Note>
      <Composer behavior="padding" />
    </VStack>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        \`behavior\` decides how the view gets out of the keyboard&apos;s way:
        \`padding\` adds bottom padding, \`height\` shrinks the view, \`position\`
        translates it. The recommended default is \`padding\` on iOS and
        \`height\` on Android. All three look identical on web.
      </Note>
      {BEHAVIORS.map(behavior => <Labeled key={behavior} label={behavior} className="w-full">
          <Composer behavior={behavior} />
        </Labeled>)}
    </Showcase>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <VStack space="md" className="w-full items-start">
      <Note>
        \`enabled={false}\` turns the avoidance off without changing the tree —
        useful when a screen is behind a modal. Indistinguishable from enabled
        on web.
      </Note>
      <Box className="h-80 w-full max-w-sm overflow-hidden rounded-lg border border-border bg-card">
        <KeyboardAvoidingView behavior="padding" enabled={false} style={FILL}>
          <ScrollView className="flex-1" style={FILL}>
            {ROWS.map(label => <Row key={label} label={label} />)}
          </ScrollView>
          <Box className="border-t border-border bg-background p-3">
            <Input>
              <InputField placeholder="Type a message" />
            </Input>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </VStack>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        This component is a plain re-export of react-native&apos;s
        \`KeyboardAvoidingView\`. It has no variants, sizes, data-states or theme
        props.
      </Note>
      <Note>
        Web: no on-screen keyboard exists, so the component is inert. Every
        \`behavior\` renders the same and \`keyboardVerticalOffset\` has no effect.
      </Note>
      <Note>
        \`keyboardVerticalOffset\` compensates for chrome the component cannot
        measure — a navigation header or tab bar above/below it. Getting it
        wrong shows up as a gap or a clipped input, and only on a device.
      </Note>
      <Note>
        This repo also depends on \`react-native-keyboard-controller\`, whose
        \`KeyboardAvoidingView\` / \`KeyboardStickyView\` track the keyboard frame
        continuously instead of snapping. Prefer those for chat-style
        composers; this export is the RN baseline.
      </Note>
    </Showcase>
}`,...j.parameters?.docs?.source}}}})))()}N();export{k as Behaviors,O as Default,A as Disabled,j as Notes,M as __namedExportsOrder,D as default};