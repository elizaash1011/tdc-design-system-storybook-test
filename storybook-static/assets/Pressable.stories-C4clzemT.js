import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{n as r,t as i}from"./useHover.web-CqFZFbmZ.js";import{n as a,t as o}from"./useFocusRing-oAbVzYq8.js";import{t as s}from"./jsx-runtime-BbDfbRii.js";import{n as c,t as l}from"./useFocus-DLqs3kE5.js";import{n as u,t as d}from"./usePress-BffFAnJr.js";import{a as f,i as p,n as m,o as h,r as g,t as _}from"./index.web-D_AoTLeS.js";import{r as v,t as y}from"./withStyleContext-DUZXNZoO.js";import{n as b,t as x}from"./composeEventHandlers-JPKR57S-.js";import{n as S,t as C}from"./Pressable-DWi_n6nV.js";import{a as w,i as T,n as E,t as D}from"./helpers-C3hOae0F.js";function O(e){return(0,A.forwardRef)((t,n)=>{var{children:i}=t,a=j(t,[`children`]);let{focusProps:s,isFocusVisible:l}=o(),{pressProps:d,isPressed:f}=u({isDisabled:a.disabled??void 0}),{isFocused:p,focusProps:m}=c(),{isHovered:h,hoverProps:g}=r();return(0,k.jsx)(e,{ref:n,states:{hover:h,focus:p,active:f,disabled:a.disabled,focusVisible:l},"data-hover":h?`true`:`false`,"data-focus":p?`true`:`false`,"data-active":f?`true`:`false`,"data-disabled":a.disabled?`true`:`false`,"data-focus-visible":l?`true`:`false`,dataSet:{hover:h?`true`:`false`,focus:p?`true`:`false`,active:f?`true`:`false`,disabled:a.disabled?`true`:`false`,focusVisible:l?`true`:`false`},...a,onPressIn:x(a?.onPressIn,d.onPressIn),onPressOut:x(a?.onPressOut,d.onPressOut),onHoverIn:x(a?.onHoverIn,g.onHoverIn),onHoverOut:x(a?.onHoverOut,g.onHoverOut),onFocus:x(x(a?.onFocus,m.onFocus),s.onFocus),onBlur:x(x(a?.onBlur,m.onBlur),s.onBlur),children:typeof i==`function`?i({hovered:h,focused:p,pressed:f,disabled:a.disabled??void 0,focusVisible:l}):i})})}var k,A,j;function M(){return(M=e((()=>{k=s(),a(),l(),A=t(n()),i(),d(),j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}})))()}function N({Root:e}){let t=O(e);return t.displayName=`Pressable`,t}function P(){return(P=e((()=>{M()})))()}var F,I,L,R,z;function B(){return(B=e((()=>{F=t(n()),P(),S(),f(),y(),I=s(),L=N({Root:v(C)}),R=h({base:`data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-indicator-info data-[focus-visible=true]:ring-2 data-[disabled=true]:opacity-40`}),z=F.forwardRef(function({className:e,...t},n){return(0,I.jsx)(L,{...t,ref:n,className:R({class:e})})}),z.displayName=`Pressable`,z.__docgenInfo={description:``,methods:[],displayName:`Pressable`}})))()}var V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{n(),B(),p(),m(),w(),V=s(),H=`rounded-lg border border-border bg-card px-4 py-3 data-[hover=true]:bg-muted data-[active=true]:bg-background`,U={title:`UI/Pressable`,component:z,argTypes:{disabled:{control:`boolean`}},args:{disabled:!1},render:e=>(0,V.jsx)(z,{...e,className:H,onPress:()=>{},children:(0,V.jsx)(g,{className:`text-foreground`,children:`Press me`})})},W={},G={render:()=>(0,V.jsxs)(T,{children:[(0,V.jsx)(E,{children:`Pressable exposes hover, focus, active, disabled and focus-visible as data attributes, so states are styled with data-[...] classes. Hover and press the surfaces below, or tab to them, to see each one.`}),(0,V.jsx)(D,{label:`hover / press`,children:(0,V.jsx)(z,{className:H,onPress:()=>{},children:(0,V.jsx)(g,{className:`text-foreground`,children:`Press me`})})}),(0,V.jsx)(D,{label:`focus ring (tab to it)`,children:(0,V.jsx)(z,{className:`rounded-lg border border-border bg-card px-4 py-3`,onPress:()=>{},children:(0,V.jsx)(g,{className:`text-foreground`,children:`Focus me`})})}),(0,V.jsx)(D,{label:`disabled`,children:(0,V.jsx)(z,{className:H,disabled:!0,onPress:()=>{},children:(0,V.jsx)(g,{className:`text-foreground`,children:`Disabled`})})})]})},K={render:()=>(0,V.jsxs)(T,{children:[(0,V.jsx)(E,{children:`Children may be a function receiving the current interaction state, for cases where the styling cannot be expressed as a class.`}),(0,V.jsx)(D,{label:`children as function`,children:(0,V.jsx)(z,{className:`rounded-lg border border-border bg-card px-4 py-3`,onPress:()=>{},children:e=>{let{pressed:t,hovered:n}=e;return(0,V.jsx)(g,{className:`text-foreground`,children:t?`Pressed`:n?`Hovered`:`Idle`})}})})]})},q={render:()=>(0,V.jsx)(T,{children:(0,V.jsx)(D,{label:`pressable rows`,className:`w-64`,children:(0,V.jsx)(_,{className:`w-64 overflow-hidden rounded-lg border border-border bg-card`,children:[`Item one`,`Item two`,`Item three`].map(e=>(0,V.jsx)(z,{className:`px-4 py-3 data-[hover=true]:bg-muted data-[active=true]:bg-background`,onPress:()=>{},children:(0,V.jsx)(g,{className:`text-foreground`,children:e})},e))})})})},J=[`Default`,`States`,`RenderProp`,`AsListRow`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        Pressable exposes hover, focus, active, disabled and focus-visible as
        data attributes, so states are styled with data-[...] classes. Hover and
        press the surfaces below, or tab to them, to see each one.
      </Note>
      <Labeled label="hover / press">
        <Pressable className={SURFACE} onPress={() => {}}>
          <Text className="text-foreground">Press me</Text>
        </Pressable>
      </Labeled>
      <Labeled label="focus ring (tab to it)">
        <Pressable className="rounded-lg border border-border bg-card px-4 py-3" onPress={() => {}}>
          <Text className="text-foreground">Focus me</Text>
        </Pressable>
      </Labeled>
      <Labeled label="disabled">
        <Pressable className={SURFACE} disabled onPress={() => {}}>
          <Text className="text-foreground">Disabled</Text>
        </Pressable>
      </Labeled>
    </Showcase>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        Children may be a function receiving the current interaction state, for
        cases where the styling cannot be expressed as a class.
      </Note>
      <Labeled label="children as function">
        <Pressable className="rounded-lg border border-border bg-card px-4 py-3" onPress={() => {}}>
          {state => {
          // react-native-web also supplies \`hovered\` and \`focused\` here, but
          // react-native's PressableStateCallbackType only declares \`pressed\`,
          // so the extras have to be read off a widened type.
          const {
            pressed,
            hovered
          } = state as typeof state & {
            hovered?: boolean;
          };
          return <Text className="text-foreground">
                {pressed ? 'Pressed' : hovered ? 'Hovered' : 'Idle'}
              </Text>;
        }}
        </Pressable>
      </Labeled>
    </Showcase>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="pressable rows" className="w-64">
        <VStack className="w-64 overflow-hidden rounded-lg border border-border bg-card">
          {['Item one', 'Item two', 'Item three'].map(label => <Pressable key={label} className="px-4 py-3 data-[hover=true]:bg-muted data-[active=true]:bg-background" onPress={() => {}}>
              <Text className="text-foreground">{label}</Text>
            </Pressable>)}
        </VStack>
      </Labeled>
    </Showcase>
}`,...q.parameters?.docs?.source}}}})))()}Y();export{q as AsListRow,W as Default,K as RenderProp,G as States,J as __namedExportsOrder,U as default};