import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,o as a}from"./index.web-D_AoTLeS.js";import{n as o,r as s,t as c}from"./withStyleContext-DUZXNZoO.js";import{n as l,r as u}from"./primitiveIcon-DiBiEr9o.js";import{a as d,i as f}from"./copyComponentProperties-RQiJnNSO.js";import{n as p,t as m}from"./Text-DNo9SOuE.js";import{n as h,t as g}from"./View-C3eIN7TA.js";import{d as _,rt as v}from"./index.web-CrrZZXjP.js";import{a as y,i as b,t as x}from"./helpers-C3hOae0F.js";function S({children:e,variant:t=`default`,className:n,...r}){return(0,w.jsx)(k,{className:E({variant:t,class:n}),...r,context:{variant:t},children:e})}var C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{u(),i(),c(),f(),C=t(n()),p(),h(),w=r(),T=`BADGE`,E=a({base:`flex-row items-center justify-center rounded-sm px-2 py-0.5`,variants:{variant:{default:`bg-primary`,secondary:`bg-secondary`,destructive:`bg-destructive dark:bg-destructive/60`,outline:`border border-border dark:border-border/90 bg-transparent`}}}),D=a({base:`text-xs font-medium tracking-normal uppercase`,parentVariants:{variant:{default:`text-primary-foreground`,secondary:`text-secondary-foreground`,destructive:`text-white`,outline:`text-foreground`}}}),O=a({base:`fill-none h-3 w-3 pointer-events-none`,parentVariants:{variant:{default:`text-primary-foreground`,secondary:`text-secondary-foreground`,destructive:`text-white`,outline:`text-foreground`}}}),k=s(g,T),A=C.forwardRef(function({children:e,className:t,...n},r){let{variant:i}=o(T);return(0,w.jsx)(m,{ref:r,className:D({parentVariants:{variant:i},class:t}),...n,children:e})}),j=d(l,{className:{target:`style`,nativeStyleToProp:{height:!0,width:!0,fill:!0,color:`classNameColor`,stroke:!0}}}),M=C.forwardRef(function({className:e,size:t,...n},r){let{variant:i}=o(T);return typeof t==`number`?(0,w.jsx)(j,{ref:r,...n,className:O({class:e}),size:t}):(n?.height!==void 0||n?.width!==void 0)&&t===void 0?(0,w.jsx)(j,{ref:r,...n,className:O({class:e})}):(0,w.jsx)(j,{className:O({parentVariants:{variant:i},class:e}),...n,ref:r})}),S.displayName=`Badge`,A.displayName=`BadgeText`,M.displayName=`BadgeIcon`,S.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{className:{required:!1,tsType:{name:`string`},description:``},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}},M.__docgenInfo={description:``,methods:[],displayName:`BadgeIcon`,props:{size:{required:!1,tsType:{name:`number`},description:``}}},A.__docgenInfo={description:``,methods:[],displayName:`BadgeText`}})))()}var P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{n(),N(),v(),y(),P=r(),F=[`default`,`secondary`,`destructive`,`outline`],I={title:`UI/Badge`,component:S,argTypes:{variant:{control:`select`,options:F}},args:{variant:`default`},render:e=>(0,P.jsx)(S,{...e,children:(0,P.jsx)(A,{children:`Label`})})},L={},R={render:()=>(0,P.jsx)(b,{children:F.map(e=>(0,P.jsx)(x,{label:e,children:(0,P.jsx)(S,{variant:e,children:(0,P.jsx)(A,{children:`Label`})})},e))})},z={render:()=>(0,P.jsx)(b,{children:F.map(e=>(0,P.jsx)(x,{label:e,children:(0,P.jsxs)(S,{variant:e,className:`gap-1`,children:[(0,P.jsx)(M,{as:_}),(0,P.jsx)(A,{children:`Label`})]})},e))})},B={render:()=>(0,P.jsx)(b,{children:F.map(e=>(0,P.jsx)(x,{label:e,children:(0,P.jsx)(S,{variant:e,children:(0,P.jsx)(M,{as:_})})},e))})},V=[`Default`,`Variants`,`WithIcon`,`IconOnly`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {VARIANTS.map(variant => <Labeled key={variant} label={variant}>
          <Badge variant={variant}>
            <BadgeText>Label</BadgeText>
          </Badge>
        </Labeled>)}
    </Showcase>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {VARIANTS.map(variant => <Labeled key={variant} label={variant}>
          <Badge variant={variant} className="gap-1">
            <BadgeIcon as={CheckIcon} />
            <BadgeText>Label</BadgeText>
          </Badge>
        </Labeled>)}
    </Showcase>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {VARIANTS.map(variant => <Labeled key={variant} label={variant}>
          <Badge variant={variant}>
            <BadgeIcon as={CheckIcon} />
          </Badge>
        </Labeled>)}
    </Showcase>
}`,...B.parameters?.docs?.source}}}})))()}H();export{L as Default,B as IconOnly,R as Variants,z as WithIcon,V as __namedExportsOrder,I as default};