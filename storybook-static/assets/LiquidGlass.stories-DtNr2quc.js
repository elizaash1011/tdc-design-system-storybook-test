import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{n as r,t as i}from"./View-DGrlzLEG.js";import{r as a}from"./dist-wrNzRCnc.js";import{f as o,p as s}from"./ScrollView-DODU9APh.js";import{t as c}from"./jsx-runtime-BbDfbRii.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./index.web-D_AoTLeS.js";import{a as h,i as g}from"./copyComponentProperties-RQiJnNSO.js";import{n as _,t as v}from"./View-C3eIN7TA.js";import{a as y,i as b,n as x,t as S}from"./helpers-C3hOae0F.js";import{n as C,t as w}from"./index.web-BkgxHkvM.js";import{n as T,t as E}from"./index.web-ano-UwRB.js";function D(e){return(0,O.jsx)(i,{...e})}var O;function k(){return(k=e((()=>{O=c(),a()})))()}function A(e){return(0,j.jsx)(i,{...e})}var j;function M(){return(M=e((()=>{j=c(),a()})))()}var N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{l(),M(),k(),g(),N=t(n()),a(),_(),P=c(),F=f({base:`overflow-hidden`}),I=f({base:`overflow-hidden`}),L=h(D,{className:`style`}),R=h(A,{className:`style`}),z=N.forwardRef(function({className:e,...t},n){return o.OS===`web`?(0,P.jsx)(v,{ref:n,...t,className:F({className:`overflow-hidden bg-background/40 backdrop-blur-md ${e??``}`})}):(0,P.jsx)(L,{ref:n,...t,className:F({className:e})})}),z.displayName=`GlassView`,B=N.forwardRef(function({className:e,...t},n){return o.OS===`web`?(0,P.jsx)(v,{ref:n,...t,className:I({className:`overflow-hidden bg-background/0 backdrop-blur-md ${e??``}`})}):(0,P.jsx)(R,{ref:n,...t,className:I({className:e})})}),B.displayName=`GlassContainer`,z.__docgenInfo={description:``,methods:[],displayName:`GlassView`,props:{className:{required:!1,tsType:{name:`string`},description:``}}},B.__docgenInfo={description:``,methods:[],displayName:`GlassContainer`,props:{className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function H({children:e}){return(0,U.jsxs)(w,{className:`h-44 w-full max-w-sm overflow-hidden rounded-xl bg-muted p-3`,children:[(0,U.jsx)(m,{space:`xs`,children:[0,1,2,3].map(e=>(0,U.jsx)(E,{space:`xs`,children:[0,1,2,3,4].map(t=>(0,U.jsx)(w,{className:(e+t)%2==0?`h-8 flex-1 rounded-md bg-primary/60`:`h-8 flex-1 rounded-md bg-accent`},t))},e))}),e]})}var U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{n(),C(),T(),V(),u(),d(),y(),U=c(),W=[`clear`,`regular`,`none`],G={title:`UI/LiquidGlass`,component:z,argTypes:{glassEffectStyle:{control:`select`,options:W},isInteractive:{control:`boolean`},colorScheme:{control:`select`,options:[`auto`,`light`,`dark`]}},args:{glassEffectStyle:`regular`,isInteractive:!1,colorScheme:`auto`},render:e=>(0,U.jsxs)(b,{className:`w-full`,children:[(0,U.jsx)(x,{children:"LiquidGlass is marked alpha upstream in gluestack-ui v5 and its API may change. It wraps `expo-glass-effect`, which is iOS-only: on web (and on Android) `GlassView` and `GlassContainer` fall back to a plain View — the wrapper substitutes `bg-background/40 backdrop-blur-md`, so what you see in the browser is a CSS blur approximation, not the real liquid glass material. `glassEffectStyle`, `tintColor`, `isInteractive`, and `colorScheme` have no effect outside iOS."}),(0,U.jsx)(S,{label:`GlassView over content`,className:`w-full`,children:(0,U.jsx)(H,{children:(0,U.jsx)(z,{...e,className:`absolute inset-x-6 bottom-6 items-center justify-center rounded-xl border border-border p-4`,children:(0,U.jsx)(p,{className:`text-foreground`,children:`Glass panel`})})})})]})},K={},q={render:()=>(0,U.jsxs)(b,{className:`w-full`,children:[(0,U.jsx)(x,{children:"The three `glassEffectStyle` values render identically here. They only diverge on iOS, where the native material is applied."}),W.map(e=>(0,U.jsx)(S,{label:e,className:`w-full`,children:(0,U.jsx)(H,{children:(0,U.jsx)(z,{glassEffectStyle:e,className:`absolute inset-x-6 bottom-6 items-center justify-center rounded-xl border border-border p-4`,children:(0,U.jsx)(p,{className:`text-foreground`,children:e})})})},e))]})},J={render:()=>(0,U.jsxs)(b,{className:`w-full`,children:[(0,U.jsx)(x,{children:"`GlassContainer` groups glass children so that, on iOS, they merge into each other once they come within `spacing` points. On web it is a plain transparent wrapper, so the two panels simply sit side by side."}),(0,U.jsx)(S,{label:`GlassContainer spacing=20`,className:`w-full`,children:(0,U.jsx)(H,{children:(0,U.jsxs)(B,{spacing:20,className:`absolute inset-x-4 bottom-6 flex-row justify-between`,children:[(0,U.jsx)(z,{className:`h-16 w-24 items-center justify-center rounded-xl border border-border`,children:(0,U.jsx)(p,{size:`sm`,className:`text-foreground`,children:`One`})}),(0,U.jsx)(z,{className:`h-16 w-24 items-center justify-center rounded-xl border border-border`,children:(0,U.jsx)(p,{size:`sm`,className:`text-foreground`,children:`Two`})})]})})})]})},Y={render:()=>(0,U.jsx)(b,{className:`w-full`,children:(0,U.jsx)(S,{label:`rounded-full / rounded-xl / square`,className:`w-full`,children:(0,U.jsx)(H,{children:(0,U.jsxs)(E,{space:`md`,className:`absolute inset-x-4 bottom-6 items-center justify-center`,children:[(0,U.jsx)(z,{className:`h-16 w-16 items-center justify-center rounded-full border border-border`}),(0,U.jsx)(z,{className:`h-16 w-16 items-center justify-center rounded-xl border border-border`}),(0,U.jsx)(z,{className:`h-16 w-16 items-center justify-center border border-border`})]})})})})},X=[`Default`,`GlassStyles`,`Container`,`Shapes`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        The three \`glassEffectStyle\` values render identically here. They only
        diverge on iOS, where the native material is applied.
      </Note>
      {GLASS_STYLES.map(glassEffectStyle => <Labeled key={glassEffectStyle} label={glassEffectStyle} className="w-full">
          <Backdrop>
            <GlassView glassEffectStyle={glassEffectStyle} className="absolute inset-x-6 bottom-6 items-center justify-center rounded-xl border border-border p-4">
              <Text className="text-foreground">{glassEffectStyle}</Text>
            </GlassView>
          </Backdrop>
        </Labeled>)}
    </Showcase>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        \`GlassContainer\` groups glass children so that, on iOS, they merge into
        each other once they come within \`spacing\` points. On web it is a plain
        transparent wrapper, so the two panels simply sit side by side.
      </Note>
      <Labeled label="GlassContainer spacing=20" className="w-full">
        <Backdrop>
          <GlassContainer spacing={20} className="absolute inset-x-4 bottom-6 flex-row justify-between">
            <GlassView className="h-16 w-24 items-center justify-center rounded-xl border border-border">
              <Text size="sm" className="text-foreground">
                One
              </Text>
            </GlassView>
            <GlassView className="h-16 w-24 items-center justify-center rounded-xl border border-border">
              <Text size="sm" className="text-foreground">
                Two
              </Text>
            </GlassView>
          </GlassContainer>
        </Backdrop>
      </Labeled>
    </Showcase>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Labeled label="rounded-full / rounded-xl / square" className="w-full">
        <Backdrop>
          <HStack space="md" className="absolute inset-x-4 bottom-6 items-center justify-center">
            <GlassView className="h-16 w-16 items-center justify-center rounded-full border border-border" />
            <GlassView className="h-16 w-16 items-center justify-center rounded-xl border border-border" />
            <GlassView className="h-16 w-16 items-center justify-center border border-border" />
          </HStack>
        </Backdrop>
      </Labeled>
    </Showcase>
}`,...Y.parameters?.docs?.source}}}})))()}Z();export{J as Container,K as Default,q as GlassStyles,Y as Shapes,X as __namedExportsOrder,G as default};