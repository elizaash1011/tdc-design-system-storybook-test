import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{at as r,it as i,r as a}from"./dist-wrNzRCnc.js";import{t as o}from"./jsx-runtime-BbDfbRii.js";import{n as s,r as ee}from"./iframe-ARvSpLj6.js";import{a as te,o as c}from"./index.web-D_AoTLeS.js";import{n as l,r as ne,t as re}from"./withStyleContext-DUZXNZoO.js";import{a as ie,i as u,t as d}from"./button-BmNQOk4E.js";import{a as ae,i as oe}from"./copyComponentProperties-RQiJnNSO.js";import{n as f,t as p}from"./Text-DNo9SOuE.js";import{n as m,t as h}from"./View-C3eIN7TA.js";import{_ as se,f as ce,n as g,t as _}from"./module-SxtphPHy.js";import{a as le,i as v,n as y,r as ue,t as b}from"./helpers-C3hOae0F.js";var x;function S(){return(S=e((()=>{ee(),x=e=>s(e)})))()}var C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{S(),te(),re(),oe(),C=t(n()),a(),f(),m(),_(),w=o(),T=x(h),E=`TOAST`,D=g.createAnimatedComponent(h),O=ae(D,{className:`style`}),k=c({base:`p-4 m-1 rounded-md gap-1 web:pointer-events-auto border-border`,variants:{action:{error:`bg-popover text-popover-foreground`,warning:`bg-popover text-popover-foreground`,success:`bg-popover text-popover-foreground`,info:`bg-popover text-popover-foreground`,muted:`bg-popover text-popover-foreground`},variant:{solid:`border border-border bg-popover shadow-soft-4`,outline:`border border-border bg-popover`}}}),A=c({base:`font-medium font-body tracking-md text-left`,variants:{isTruncated:{true:``},bold:{true:`font-bold`},underline:{true:`underline`},strikeThrough:{true:`line-through`},size:{"2xs":`text-2xs`,xs:`text-xs`,sm:`text-sm`,md:`text-base`,lg:`text-lg`,xl:`text-xl`,"2xl":`text-2xl`,"3xl":`text-3xl`,"4xl":`text-4xl`,"5xl":`text-5xl`,"6xl":`text-6xl`}},parentVariants:{variant:{solid:``,outline:`text-foreground`},action:{error:``,warning:``,success:``,info:``,muted:``}},parentCompoundVariants:[{variant:`solid`,action:`error`,class:`text-destructive-foreground`},{variant:`solid`,action:`warning`,class:`text-accent-foreground`},{variant:`solid`,action:`success`,class:`text-secondary-foreground`},{variant:`solid`,action:`info`,class:`text-popover-foreground`},{variant:`solid`,action:`muted`,class:`text-muted-foreground`},{variant:`outline`,action:`error`,class:`text-destructive`},{variant:`outline`,action:`warning`,class:`text-accent-foreground`},{variant:`outline`,action:`success`,class:`text-secondary-foreground`},{variant:`outline`,action:`info`,class:`text-popover-foreground`},{variant:`outline`,action:`muted`,class:`text-muted-foreground`}]}),j=c({base:`font-normal font-body tracking-md text-left`,variants:{isTruncated:{true:``},bold:{true:`font-bold`},underline:{true:`underline`},strikeThrough:{true:`line-through`},size:{"2xs":`text-2xs`,xs:`text-xs`,sm:`text-sm`,md:`text-base`,lg:`text-lg`,xl:`text-xl`,"2xl":`text-2xl`,"3xl":`text-3xl`,"4xl":`text-4xl`,"5xl":`text-5xl`,"6xl":`text-6xl`}},parentVariants:{variant:{solid:`text-muted-foreground`,outline:`text-muted-foreground`}}}),M=ne(O,E),N=C.forwardRef(function({className:e,variant:t=`solid`,action:n=`muted`,...r},i){return(0,w.jsx)(M,{ref:i,entering:ce,className:k({variant:t,action:n,class:e}),context:{variant:t,action:n},...r})}),P=C.forwardRef(function({className:e,size:t=`md`,children:n,...r},a){let{variant:o,action:s}=l(E);return C.useEffect(()=>{i.announceForAccessibility(n)},[n]),(0,w.jsx)(p,{...r,ref:a,"aria-live":`assertive`,"aria-atomic":`true`,role:`alert`,className:A({size:t,class:e,parentVariants:{variant:o,action:s}}),children:n})}),F=C.forwardRef(function({className:e,size:t=`md`,...n},r){let{variant:i}=l(E);return(0,w.jsx)(p,{ref:r,...n,className:j({size:t,class:e,parentVariants:{variant:i}})})}),N.displayName=`Toast`,P.displayName=`ToastTitle`,F.displayName=`ToastDescription`,N.__docgenInfo={description:``,methods:[],displayName:`Toast`,props:{className:{required:!1,tsType:{name:`string`},description:``},variant:{defaultValue:{value:`'solid'`,computed:!1},required:!1},action:{defaultValue:{value:`'muted'`,computed:!1},required:!1}}},F.__docgenInfo={description:``,methods:[],displayName:`ToastDescription`,props:{className:{required:!1,tsType:{name:`string`},description:``},size:{defaultValue:{value:`'md'`,computed:!1},required:!1}}},P.__docgenInfo={description:``,methods:[],displayName:`ToastTitle`,props:{className:{required:!1,tsType:{name:`string`},description:``},size:{defaultValue:{value:`'md'`,computed:!1},required:!1}}}})))()}function L({action:e,variant:t}){return(0,B.jsxs)(N,{action:e,variant:t,className:`w-full max-w-sm`,children:[(0,B.jsx)(P,{children:`Title`}),(0,B.jsx)(F,{children:`Supporting copy for this message.`})]})}function R({action:e=`muted`,variant:t=`solid`,placement:n=`bottom`,label:r}){let i=T();return(0,B.jsx)(d,{variant:`outline`,onPress:()=>i.show({placement:n,duration:3e3,render:({id:n})=>(0,B.jsxs)(N,{nativeID:`toast-${n}`,action:e,variant:t,children:[(0,B.jsx)(P,{children:`Title`}),(0,B.jsx)(F,{children:`Supporting copy for this message.`})]})}),children:(0,B.jsx)(u,{children:r})})}function z(){let e=T();return(0,B.jsxs)(v,{children:[(0,B.jsx)(d,{onPress:()=>V.forEach(t=>e.show({placement:`top`,duration:5e3,render:({id:e})=>(0,B.jsxs)(N,{nativeID:`toast-${e}`,action:t,variant:`solid`,children:[(0,B.jsx)(P,{children:`Title`}),(0,B.jsxs)(F,{children:[`action=`,t]})]})})),children:(0,B.jsx)(u,{children:`Show five toasts`})}),(0,B.jsx)(d,{variant:`outline`,onPress:()=>e.closeAll(),children:(0,B.jsx)(u,{children:`Close all`})})]})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{n(),ie(),I(),le(),B=o(),V=[`error`,`warning`,`success`,`info`,`muted`],H=[`solid`,`outline`],U=[`top`,`top left`,`top right`,`bottom`,`bottom left`,`bottom right`],W={title:`UI/Toast`,component:N,render:()=>(0,B.jsx)(L,{action:`muted`,variant:`solid`})},G={},K={render:()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(y,{children:"Rendered inline rather than through `useToast()` so every `action` value is visible at once."}),(0,B.jsx)(v,{children:V.map(e=>(0,B.jsx)(b,{label:e,children:(0,B.jsx)(L,{action:e,variant:`solid`})},e))})]})},q={render:()=>(0,B.jsx)(v,{children:H.map(e=>(0,B.jsx)(ue,{title:e,children:(0,B.jsx)(v,{children:V.map(t=>(0,B.jsx)(b,{label:`${e} / ${t}`,children:(0,B.jsx)(L,{action:t,variant:e})},t))})},e))})},J={render:()=>(0,B.jsx)(v,{children:H.map(e=>(0,B.jsx)(b,{label:e,children:(0,B.jsx)(N,{action:`info`,variant:e,className:`w-full max-w-sm`,children:(0,B.jsx)(P,{children:`Title only, no description`})})},e))})},Y={render:()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(y,{children:"These buttons push real toasts through `useToast().show()`. Each one auto-dismisses after 3 seconds."}),(0,B.jsx)(v,{children:V.map(e=>(0,B.jsx)(b,{label:e,children:(0,B.jsx)(R,{action:e,label:`Show ${e}`})},e))})]})},X={render:()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(y,{children:"`placement` is passed to `toast.show()`, not to the `Toast` component. Each button pushes a toast to a different corner."}),(0,B.jsx)(v,{children:U.map(e=>(0,B.jsx)(b,{label:e,children:(0,B.jsx)(R,{placement:e,label:`Show ${e}`})},e))})]})},Z={render:()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(y,{children:`Several toasts at the same placement stack in the order they were shown.`}),(0,B.jsx)(z,{})]})},Q=[`Default`,`Actions`,`Variants`,`TitleOnly`,`Live`,`Placements`,`Stacked`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        Rendered inline rather than through \`useToast()\` so every \`action\` value
        is visible at once.
      </Note>
      <Showcase>
        {ACTIONS.map(action => <Labeled key={action} label={action}>
            <StaticToast action={action} variant="solid" />
          </Labeled>)}
      </Showcase>
    </>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {VARIANTS.map(variant => <Section key={variant} title={variant}>
          <Showcase>
            {ACTIONS.map(action => <Labeled key={action} label={\`\${variant} / \${action}\`}>
                <StaticToast action={action} variant={variant} />
              </Labeled>)}
          </Showcase>
        </Section>)}
    </Showcase>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {VARIANTS.map(variant => <Labeled key={variant} label={variant}>
          <Toast action="info" variant={variant} className="w-full max-w-sm">
            <ToastTitle>Title only, no description</ToastTitle>
          </Toast>
        </Labeled>)}
    </Showcase>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        These buttons push real toasts through \`useToast().show()\`. Each one
        auto-dismisses after 3 seconds.
      </Note>
      <Showcase>
        {ACTIONS.map(action => <Labeled key={action} label={action}>
            <ToastTriggerExample action={action} label={\`Show \${action}\`} />
          </Labeled>)}
      </Showcase>
    </>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        \`placement\` is passed to \`toast.show()\`, not to the \`Toast\` component.
        Each button pushes a toast to a different corner.
      </Note>
      <Showcase>
        {PLACEMENTS.map(placement => <Labeled key={placement} label={placement}>
            <ToastTriggerExample placement={placement} label={\`Show \${placement}\`} />
          </Labeled>)}
      </Showcase>
    </>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        Several toasts at the same placement stack in the order they were shown.
      </Note>
      <ToastStackExample />
    </>
}`,...Z.parameters?.docs?.source}}}})))()}$();export{K as Actions,G as Default,Y as Live,X as Placements,Z as Stacked,J as TitleOnly,q as Variants,Q as __namedExportsOrder,W as default};