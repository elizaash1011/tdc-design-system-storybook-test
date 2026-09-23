import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{n as r,t as i}from"./useHover.web-CqFZFbmZ.js";import{F as a,P as o,r as s}from"./dist-wrNzRCnc.js";import{f as c,p as l}from"./ScrollView-DODU9APh.js";import{n as ee,t as te}from"./useFocusRing-oAbVzYq8.js";import{t as u}from"./jsx-runtime-BbDfbRii.js";import{n as ne,t as re}from"./useFocus-DLqs3kE5.js";import{n as ie,t as d}from"./usePress-BffFAnJr.js";import{a as f,o as p}from"./index.web-D_AoTLeS.js";import{r as m,t as h}from"./withStyleContext-DUZXNZoO.js";import{n as g,t as _}from"./composeEventHandlers-JPKR57S-.js";import{n as ae,t as oe}from"./mergeRefs-CMTVHus9.js";import{n as v,t as y}from"./Pressable-DWi_n6nV.js";import{n as b,t as se}from"./Text-DNo9SOuE.js";import{E as ce,N as le,rt as ue}from"./index.web-CrrZZXjP.js";import{a as de,i as x,n as S,r as fe,t as C}from"./helpers-C3hOae0F.js";import{n as pe,t as w}from"./index.web-ano-UwRB.js";function me(e){let{href:t,isExternal:n,onPress:r,_ref:i,isDisabled:a}=e,o={};return c.OS===`web`?(o={href:a?void 0:t,onPress:a?void 0:r,"aria-disabled":a,tabIndex:a?-1:0},n&&i.current&&(i.current.target=`_blank`,i.current.rel=`noopener`)):o={onPress:()=>{a||ge(t,r)},href:t},{linkProps:Object.assign(Object.assign({},o),{role:`link`,accessible:!0})}}var he,ge;function _e(){return(_e=e((()=>{s(),he=e=>{o.openURL(e).catch(e=>console.error(`An error occurred`,e))},ge=(e,t)=>{e&&he(e),t&&t()}})))()}var T,E,D;function O(){return(O=e((()=>{T=n(),E=(0,T.createContext)({isHovered:!1,isFocused:!1,isPressed:!1,isDisabled:!1,isFocusVisible:!1}),D=()=>(0,T.useContext)(E)})))()}var k,A,j,M;function N(){return(N=e((()=>{k=u(),A=t(n()),_e(),ee(),re(),i(),d(),O(),j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},M=e=>(0,A.forwardRef)((t,n)=>{var{children:i,isDisabled:a,isHovered:o,isPressed:s,isFocused:c,isFocusVisible:l,isExternal:ee,href:u,onPress:re}=t,d=j(t,[`children`,`isDisabled`,`isHovered`,`isPressed`,`isFocused`,`isFocusVisible`,`isExternal`,`href`,`onPress`]);let{isFocusVisible:f,focusProps:p}=te(),{pressProps:m,isPressed:h}=ie({isDisabled:a}),{isFocused:g,focusProps:oe}=ne(),{isHovered:v,hoverProps:y}=r(),b=A.useRef(null),{linkProps:se}=me({isExternal:ee,href:u,onPress:re,_ref:b,isDisabled:a}),ce=(0,A.useMemo)(()=>({isHovered:o||v,isFocused:c||g,isPressed:s||h,isDisabled:a,isFocusVisible:l||f}),[o,v,c,g,s,h,a,l,f]);return(0,k.jsx)(E.Provider,{value:ce,children:(0,k.jsx)(e,{ref:ae([b,n]),states:{hover:o||v,focus:c||g,active:s||h,disabled:a,focusVisible:l||f},"data-hover":o||v?`true`:`false`,"data-focus":c||g?`true`:`false`,"data-active":s||h?`true`:`false`,"data-disabled":a?`true`:`false`,"data-focus-visible":l||f?`true`:`false`,dataSet:{hover:o||v?`true`:`false`,focus:c||g?`true`:`false`,active:s||h?`true`:`false`,disabled:a?`true`:`false`,focusVisible:l||f?`true`:`false`},disabled:a,...se,...d,onPressIn:_(d?.onPressIn,m.onPressIn),onPressOut:_(d?.onPressOut,m.onPressOut),onHoverIn:_(d?.onHoverIn,y.onHoverIn),onHoverOut:_(d?.onHoverOut,y.onHoverOut),onFocus:_(_(d?.onFocus,oe.onFocus),p.onFocus),onBlur:_(_(d?.onBlur,oe.onBlur),p.onBlur),children:i})})})})))()}var P,F,I,L;function R(){return(R=e((()=>{P=u(),F=t(n()),O(),I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},L=e=>(0,F.forwardRef)((t,n)=>{var{children:r}=t,i=I(t,[`children`]);let{isHovered:a,isFocused:o,isPressed:s,isDisabled:c,isFocusVisible:l}=D();return(0,P.jsx)(e,{ref:n,...i,states:{hover:a,focus:o,active:s,disabled:c,focusVisible:l},"data-hover":a?`true`:`false`,"data-focus":o?`true`:`false`,"data-active":s?`true`:`false`,"data-disabled":c?`true`:`false`,"data-focus-visible":l?`true`:`false`,dataSet:{hover:a,focus:o,active:s,disabled:c,focusVisible:l},children:r})})})))()}var ve;function ye(){return(ye=e((()=>{N(),R(),ve=({Root:e,Text:t})=>{let n=M(e);return n.Text=L(t),n.Text.displayName=`Link.Text`,n}})))()}var z,B,V,be,xe,H,U;function Se(){return(Se=e((()=>{ye(),v(),b(),f(),h(),z=t(n()),B=u(),V=ve({Root:m(y),Text:se}),be=p({base:`group/link web:outline-0 data-[disabled=true]:web:cursor-not-allowed data-[focus-visible=true]:web:ring-2 data-[focus-visible=true]:web:ring-indicator-primary data-[focus-visible=true]:web:outline-0 data-[disabled=true]:opacity-4 `}),xe=p({base:`underline text-primary data-[hover=true]:text-primary/80 data-[hover=true]:no-underline data-[active=true]:text-destructive/80 font-normal font-body web:font-sans web:tracking-sm web:my-0 web:bg-transparent web:border-0 web:box-border web:inline web:list-none web:m-0 web:p-0 web:relative web:text-start web:whitespace-pre-wrap web:break-words`,variants:{isTruncated:{true:`web:truncate`},bold:{true:`font-bold`},underline:{true:`underline`},strikeThrough:{true:`line-through`},size:{"2xs":`text-2xs`,xs:`text-xs`,sm:`text-sm`,md:`text-base`,lg:`text-lg`,xl:`text-xl`,"2xl":`text-2xl`,"3xl":`text-3xl`,"4xl":`text-4xl`,"5xl":`text-5xl`,"6xl":`text-6xl`},sub:{true:`text-xs`},italic:{true:`italic`},highlight:{true:`bg-yellow-500`}}}),H=z.forwardRef(function({className:e,...t},n){return(0,B.jsx)(V,{ref:n,...t,className:be({class:e})})}),U=z.forwardRef(function({className:e,size:t=`md`,...n},r){return(0,B.jsx)(V.Text,{ref:r,...n,className:xe({class:e,size:t})})}),H.displayName=`Link`,U.displayName=`LinkText`,H.__docgenInfo={description:``,methods:[],displayName:`Link`,props:{className:{required:!1,tsType:{name:`string`},description:``}}},U.__docgenInfo={description:``,methods:[],displayName:`LinkText`,props:{className:{required:!1,tsType:{name:`string`},description:``},size:{defaultValue:{value:`'md'`,computed:!1},required:!1}}}})))()}var W,G,Ce,K,we,q,J,Y,X,Z,Q,Te;function $(){return($=e((()=>{n(),pe(),ue(),Se(),de(),W=u(),G=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`6xl`],Ce=[{label:`bold`,props:{bold:!0}},{label:`italic`,props:{italic:!0}},{label:`underline`,props:{underline:!0}},{label:`strikeThrough`,props:{strikeThrough:!0}},{label:`sub`,props:{sub:!0}},{label:`highlight`,props:{highlight:!0}}],K=`https://example.com`,we={title:`UI/Link`,component:H,argTypes:{isExternal:{control:`boolean`},isDisabled:{control:`boolean`}},args:{href:K,isExternal:!0,isDisabled:!1},render:e=>(0,W.jsxs)(x,{children:[(0,W.jsx)(S,{children:'Every link on this page points at https://example.com. With `isExternal`, the web build adds `target="_blank"` and opens a new tab; on native the URL is handed to the system browser. Press with care — these stories really do navigate.'}),(0,W.jsx)(H,{...e,children:(0,W.jsx)(U,{children:`Link label`})})]})},q={},J={render:()=>(0,W.jsxs)(x,{children:[(0,W.jsx)(S,{children:"`size` is a variant on `LinkText`, not on `Link`. It defaults to `md`."}),G.map(e=>(0,W.jsx)(C,{label:e,children:(0,W.jsx)(H,{href:K,isExternal:!0,children:(0,W.jsx)(U,{size:e,children:`Link label`})})},e))]})},Y={render:()=>(0,W.jsxs)(x,{children:[(0,W.jsx)(S,{children:"`highlight` resolves to `bg-yellow-500` in the component source — a raw Tailwind color rather than a theme token, so it will not follow a retheme."}),Ce.map(e=>(0,W.jsx)(C,{label:e.label,children:(0,W.jsx)(H,{href:K,isExternal:!0,children:(0,W.jsx)(U,{...e.props,children:`Link label`})})},e.label)),(0,W.jsx)(C,{label:`isTruncated`,children:(0,W.jsx)(H,{href:K,isExternal:!0,children:(0,W.jsx)(U,{isTruncated:!0,className:`w-32`,children:`A link label long enough to be truncated`})})})]})},X={render:()=>(0,W.jsxs)(x,{children:[(0,W.jsx)(S,{children:"`LinkText` styles two interaction data-states that need a pointer to see: `data-[hover=true]` swaps the underline for an 80% primary colour, and `data-[active=true]` (press and hold) turns the label 80% destructive. `data-[disabled=true]` is styled on the root."}),(0,W.jsx)(fe,{title:`interactive`,children:(0,W.jsx)(C,{label:`default (hover / press me)`,children:(0,W.jsx)(H,{href:K,isExternal:!0,children:(0,W.jsx)(U,{children:`Link label`})})})}),(0,W.jsx)(fe,{title:`disabled`,children:(0,W.jsx)(C,{label:`isDisabled`,children:(0,W.jsx)(H,{href:K,isExternal:!0,isDisabled:!0,children:(0,W.jsx)(U,{children:`Link label`})})})})]})},Z={render:()=>(0,W.jsx)(x,{children:(0,W.jsx)(C,{label:`label + external icon`,children:(0,W.jsx)(H,{href:K,isExternal:!0,children:(0,W.jsxs)(w,{space:`xs`,className:`items-center`,children:[(0,W.jsx)(U,{children:`Link label`}),(0,W.jsx)(le,{as:ce,size:`sm`,className:`text-primary`})]})})})})},Q={render:()=>(0,W.jsxs)(x,{children:[(0,W.jsx)(S,{children:"On web the link text is laid out `inline`, so it can sit inside a paragraph. On native it is a plain `Text`, which does not inline the same way."}),(0,W.jsx)(C,{label:`inline in a sentence`,children:(0,W.jsxs)(w,{space:`xs`,className:`flex-wrap items-baseline`,children:[(0,W.jsx)(U,{size:`sm`,className:`text-muted-foreground no-underline`,children:`Read the`}),(0,W.jsx)(H,{href:K,isExternal:!0,children:(0,W.jsx)(U,{size:`sm`,children:`linked document`})}),(0,W.jsx)(U,{size:`sm`,className:`text-muted-foreground no-underline`,children:`for details.`})]})})]})},Te=[`Default`,`Sizes`,`TextModifiers`,`States`,`WithIcon`,`InRunningText`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        \`size\` is a variant on \`LinkText\`, not on \`Link\`. It defaults to \`md\`.
      </Note>
      {SIZES.map(size => <Labeled key={size} label={size}>
          <Link href={HREF} isExternal>
            <LinkText size={size}>Link label</LinkText>
          </Link>
        </Labeled>)}
    </Showcase>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        \`highlight\` resolves to \`bg-yellow-500\` in the component source — a raw
        Tailwind color rather than a theme token, so it will not follow a
        retheme.
      </Note>
      {TEXT_MODIFIERS.map(modifier => <Labeled key={modifier.label} label={modifier.label}>
          <Link href={HREF} isExternal>
            <LinkText {...modifier.props}>Link label</LinkText>
          </Link>
        </Labeled>)}
      <Labeled label="isTruncated">
        <Link href={HREF} isExternal>
          <LinkText isTruncated className="w-32">
            A link label long enough to be truncated
          </LinkText>
        </Link>
      </Labeled>
    </Showcase>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        \`LinkText\` styles two interaction data-states that need a pointer to
        see: \`data-[hover=true]\` swaps the underline for an 80% primary colour,
        and \`data-[active=true]\` (press and hold) turns the label 80%
        destructive. \`data-[disabled=true]\` is styled on the root.
      </Note>

      <Section title="interactive">
        <Labeled label="default (hover / press me)">
          <Link href={HREF} isExternal>
            <LinkText>Link label</LinkText>
          </Link>
        </Labeled>
      </Section>

      <Section title="disabled">
        <Labeled label="isDisabled">
          <Link href={HREF} isExternal isDisabled>
            <LinkText>Link label</LinkText>
          </Link>
        </Labeled>
      </Section>
    </Showcase>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="label + external icon">
        <Link href={HREF} isExternal>
          <HStack space="xs" className="items-center">
            <LinkText>Link label</LinkText>
            <Icon as={ExternalLinkIcon} size="sm" className="text-primary" />
          </HStack>
        </Link>
      </Labeled>
    </Showcase>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        On web the link text is laid out \`inline\`, so it can sit inside a
        paragraph. On native it is a plain \`Text\`, which does not inline the
        same way.
      </Note>
      <Labeled label="inline in a sentence">
        <HStack space="xs" className="flex-wrap items-baseline">
          <LinkText size="sm" className="text-muted-foreground no-underline">
            Read the
          </LinkText>
          <Link href={HREF} isExternal>
            <LinkText size="sm">linked document</LinkText>
          </Link>
          <LinkText size="sm" className="text-muted-foreground no-underline">
            for details.
          </LinkText>
        </HStack>
      </Labeled>
    </Showcase>
}`,...Q.parameters?.docs?.source}}}})))()}$();export{q as Default,Q as InRunningText,J as Sizes,X as States,Y as TextModifiers,Z as WithIcon,Te as __namedExportsOrder,we as default};