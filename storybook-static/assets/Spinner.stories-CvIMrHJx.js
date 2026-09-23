import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,i as a,o,r as s}from"./index.web-D_AoTLeS.js";import{a as c,i as l}from"./copyComponentProperties-RQiJnNSO.js";import{a as u,i as d,n as f,t as p}from"./helpers-C3hOae0F.js";import{n as m,t as h}from"./ActivityIndicator-CR0LI_ks.js";import{n as g,t as _}from"./index.web-ano-UwRB.js";var v,y,b,x,S;function C(){return(C=e((()=>{m(),v=t(n()),i(),l(),y=r(),b=c(h,{className:{target:`style`,nativeStyleToProp:{color:!0}}}),x=o({}),S=v.forwardRef(function({className:e,color:t,focusable:n=!1,"aria-label":r=`loading`,...i},a){return(0,y.jsx)(b,{ref:a,focusable:n,"aria-label":r,...i,color:t,className:x({class:e})})}),S.displayName=`Spinner`,S.__docgenInfo={description:``,methods:[],displayName:`Spinner`,props:{focusable:{defaultValue:{value:`false`,computed:!1},required:!1},"aria-label":{defaultValue:{value:`'loading'`,computed:!1},required:!1}}}})))()}var w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{n(),g(),C(),a(),u(),w=r(),T=[`small`,`large`],E=[16,24,40],D=[`text-foreground`,`text-muted-foreground`,`text-primary`,`text-destructive`],O={title:`UI/Spinner`,component:S,argTypes:{size:{control:`select`,options:T},animating:{control:`boolean`}},args:{size:`small`,animating:!0},render:e=>(0,w.jsx)(S,{...e})},k={},A={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{children:"Spinner declares no style variants — it is the React Native `ActivityIndicator`, so `size` takes the platform values `small` and `large`."}),(0,w.jsx)(d,{children:T.map(e=>(0,w.jsx)(p,{label:e,children:(0,w.jsx)(S,{size:e})},e))})]})},j={render:()=>(0,w.jsx)(d,{children:E.map(e=>(0,w.jsx)(p,{label:`size={${e}}`,children:(0,w.jsx)(S,{size:e})},e))})},M={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{children:"The spinner maps a text colour class onto the native `color` prop, so it takes theme tokens through className."}),(0,w.jsx)(d,{children:D.map(e=>(0,w.jsx)(p,{label:e,children:(0,w.jsx)(S,{size:`large`,className:e})},e))})]})},N={render:()=>(0,w.jsxs)(d,{children:[(0,w.jsx)(p,{label:`animating`,children:(0,w.jsx)(S,{size:`large`,animating:!0})}),(0,w.jsx)(p,{label:`animating={false}`,children:(0,w.jsx)(S,{size:`large`,animating:!1})}),(0,w.jsx)(p,{label:`animating={false} + hidesWhenStopped={false}`,children:(0,w.jsx)(S,{size:`large`,animating:!1,hidesWhenStopped:!1})})]})},P={render:()=>(0,w.jsxs)(d,{children:[(0,w.jsx)(p,{label:`inline`,children:(0,w.jsxs)(_,{space:`sm`,className:`items-center`,children:[(0,w.jsx)(S,{size:`small`}),(0,w.jsx)(s,{size:`sm`,className:`text-muted-foreground`,children:`Loading`})]})}),(0,w.jsx)(p,{label:`in a surface`,children:(0,w.jsxs)(_,{space:`sm`,className:`items-center rounded-md border border-border bg-card px-3 py-2`,children:[(0,w.jsx)(S,{size:`small`,className:`text-primary`}),(0,w.jsx)(s,{size:`sm`,className:`text-card-foreground`,children:`Loading`})]})})]})},F=[`Default`,`Sizes`,`NumericSizes`,`Colors`,`Animating`,`InlineWithText`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        Spinner declares no style variants — it is the React Native
        \`ActivityIndicator\`, so \`size\` takes the platform values \`small\` and \`large\`.
      </Note>
      <Showcase>
        {SIZES.map(size => <Labeled key={size} label={size}>
            <Spinner size={size} />
          </Labeled>)}
      </Showcase>
    </>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {NUMERIC_SIZES.map(size => <Labeled key={size} label={\`size={\${size}}\`}>
          <Spinner size={size} />
        </Labeled>)}
    </Showcase>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        The spinner maps a text colour class onto the native \`color\` prop, so it takes
        theme tokens through className.
      </Note>
      <Showcase>
        {COLORS.map(color => <Labeled key={color} label={color}>
            <Spinner size="large" className={color} />
          </Labeled>)}
      </Showcase>
    </>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="animating">
        <Spinner size="large" animating />
      </Labeled>
      <Labeled label="animating={false}">
        <Spinner size="large" animating={false} />
      </Labeled>
      <Labeled label="animating={false} + hidesWhenStopped={false}">
        <Spinner size="large" animating={false} hidesWhenStopped={false} />
      </Labeled>
    </Showcase>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="inline">
        <HStack space="sm" className="items-center">
          <Spinner size="small" />
          <Text size="sm" className="text-muted-foreground">
            Loading
          </Text>
        </HStack>
      </Labeled>
      <Labeled label="in a surface">
        <HStack space="sm" className="items-center rounded-md border border-border bg-card px-3 py-2">
          <Spinner size="small" className="text-primary" />
          <Text size="sm" className="text-card-foreground">
            Loading
          </Text>
        </HStack>
      </Labeled>
    </Showcase>
}`,...P.parameters?.docs?.source}}}})))()}I();export{N as Animating,M as Colors,k as Default,P as InlineWithText,j as NumericSizes,A as Sizes,F as __namedExportsOrder,O as default};