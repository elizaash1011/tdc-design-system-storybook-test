import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{n as r,t as i}from"./useHover.web-CqFZFbmZ.js";import{n as a,t as ee}from"./useFocusRing-oAbVzYq8.js";import{t as o}from"./jsx-runtime-BbDfbRii.js";import{n as te,t as s}from"./useFocus-DLqs3kE5.js";import{n as ne,t as c}from"./usePress-BffFAnJr.js";import{a as l,o as u}from"./index.web-D_AoTLeS.js";import{n as d,r as f,t as p}from"./withStyleContext-DUZXNZoO.js";import{n as m,t as h}from"./composeEventHandlers-JPKR57S-.js";import{n as g,r as _}from"./primitiveIcon-DiBiEr9o.js";import{a as v,i as y}from"./copyComponentProperties-RQiJnNSO.js";import{n as re,t as ie}from"./Pressable-DWi_n6nV.js";import{n as ae,t as oe}from"./Text-DNo9SOuE.js";import{T as se,rt as ce,t as b}from"./index.web-CrrZZXjP.js";import{a as le,i as x,n as ue,t as S}from"./helpers-C3hOae0F.js";import{n as de,t as fe}from"./index.web-BkgxHkvM.js";function pe(e){return(0,he.forwardRef)((t,n)=>{var{children:i,isDisabled:a,isHovered:o,isPressed:s,isFocused:c,isFocusVisible:l}=t,u=ge(t,[`children`,`isDisabled`,`isHovered`,`isPressed`,`isFocused`,`isFocusVisible`]);let{isFocusVisible:d,focusProps:f}=ee(),{pressProps:p,isPressed:m}=ne({isDisabled:a}),{isFocused:g,focusProps:_}=te(),{isHovered:v,hoverProps:y}=r();return(0,me.jsx)(e,{ref:n,role:u?.role||`button`,states:{hover:o||v,focus:c||g,active:s||m,disabled:a,focusVisible:l||d},"data-hover":o||v?`true`:`false`,"data-focus":c||g?`true`:`false`,"data-active":s||m?`true`:`false`,"data-disabled":a?`true`:`false`,"data-focus-visible":l||d?`true`:`false`,dataSet:{hover:o||v?`true`:`false`,focus:c||g?`true`:`false`,active:s||m?`true`:`false`,disabled:a?`true`:`false`,focusVisible:l||d?`true`:`false`},disabled:a,...u,onPressIn:h(u?.onPressIn,p.onPressIn),onPressOut:h(u?.onPressOut,p.onPressOut),onHoverIn:h(u?.onHoverIn,y.onHoverIn),onHoverOut:h(u?.onHoverOut,y.onHoverOut),onFocus:h(h(u?.onFocus,_.onFocus),f.onFocus),onBlur:h(h(u?.onBlur,_.onBlur),f.onBlur),children:i})})}var me,he,ge;function _e(){return(_e=e((()=>{me=o(),he=t(n()),i(),c(),a(),s(),ge=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}})))()}function ve(e){return(0,w.forwardRef)((t,n)=>{var{children:r}=t,i=T(t,[`children`]);return(0,C.jsx)(e,{ref:n,...i,children:r})})}var C,w,T;function E(){return(E=e((()=>{C=o(),w=t(n()),T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}})))()}var D,O,k;function A(){return(A=e((()=>{D=t(n()),O=o(),k=e=>(0,D.forwardRef)((t,n)=>(0,O.jsx)(e,{...t,ref:n}))})))()}function ye({Root:e,Label:t,Icon:n}){let r=pe(e);return r.Label=ve(t),r.Icon=k(n),r.displayName=`Fab`,r.Icon.displayName=`Fab.Icon`,r}function j(){return(j=e((()=>{_e(),E(),A()})))()}var M,N,P,F,I,L,R,z,B,V,H,U;function be(){return(be=e((()=>{j(),_(),l(),p(),y(),M=t(n()),re(),ae(),N=o(),P=`FAB`,F=f(ie,P),I=v(g,{className:`style`}),L=ye({Root:F,Label:oe,Icon:I}),R=u({base:`group/fab bg-primary rounded-full z-20 p-4 flex-row items-center justify-center absolute hover:bg-primary/90 active:bg-primary/80 disabled:opacity-40 disabled:pointer-events-all disabled:cursor-not-allowed data-[focus=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[focus-visible=true]:web:ring-indicator-info shadow-hard-2`,variants:{size:{sm:`px-3.5 py-1.5`,md:`px-4  py-2`,lg:`px-5 py-3`},placement:{"top right":`top-4 right-4`,"top left":`top-4 left-4`,"bottom right":`bottom-4 right-4`,"bottom left":`bottom-4 left-4`,"top center":`top-4 self-center`,"bottom center":`bottom-4 self-center`}}}),z=u({base:`text-primary-foreground/90 font-normal font-body tracking-md text-left mx-2`,variants:{isTruncated:{true:``},bold:{true:`font-bold`},underline:{true:`underline`},strikeThrough:{true:`line-through`},size:{sm:`text-sm`,md:`text-base`,lg:`text-lg`},sub:{true:`text-xs`},italic:{true:`italic`},highlight:{true:`bg-yellow-500`}},parentVariants:{size:{sm:`text-sm`,md:`text-base`,lg:`text-lg`}}}),B=u({base:`text-primary-foreground/90 fill-none`,variants:{size:{sm:`h-3.5 w-3.5`,md:`h-4 w-4`,lg:`h-5 w-5`}}}),V=M.forwardRef(function({size:e=`md`,placement:t=`bottom right`,className:n,...r},i){return(0,N.jsx)(L,{ref:i,...r,className:R({size:e,placement:t,class:n}),context:{size:e}})}),H=M.forwardRef(function({size:e,isTruncated:t=!1,bold:n=!1,underline:r=!1,strikeThrough:i=!1,className:a,...ee},o){let{size:te}=d(P);return(0,N.jsx)(L.Label,{ref:o,...ee,className:z({parentVariants:{size:te},size:e,isTruncated:t,bold:n,underline:r,strikeThrough:i,class:a})})}),U=M.forwardRef(function({size:e,className:t,...n},r){let{size:i}=d(P);return typeof e==`number`?(0,N.jsx)(L.Icon,{ref:r,...n,className:B({class:t}),size:e}):(n.height!==void 0||n.width!==void 0)&&e===void 0?(0,N.jsx)(L.Icon,{ref:r,...n,className:B({class:t})}):(0,N.jsx)(L.Icon,{ref:r,...n,className:B({parentVariants:{size:i},size:e,class:t})})}),V.displayName=`Fab`,H.displayName=`FabLabel`,U.displayName=`FabIcon`,V.__docgenInfo={description:``,methods:[],displayName:`Fab`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},placement:{defaultValue:{value:`'bottom right'`,computed:!1},required:!1}}},U.__docgenInfo={description:``,methods:[],displayName:`FabIcon`,props:{height:{required:!1,tsType:{name:`number`},description:``},width:{required:!1,tsType:{name:`number`},description:``}}},H.__docgenInfo={description:``,methods:[],displayName:`FabLabel`,props:{isTruncated:{defaultValue:{value:`false`,computed:!1},required:!1},bold:{defaultValue:{value:`false`,computed:!1},required:!1},underline:{defaultValue:{value:`false`,computed:!1},required:!1},strikeThrough:{defaultValue:{value:`false`,computed:!1},required:!1}}}})))()}function W({children:e}){return(0,G.jsx)(fe,{className:`relative h-64 w-full rounded-md border border-border bg-muted`,children:e})}var G,K,xe,Se,q,J,Y,X,Z,Q,Ce;function $(){return($=e((()=>{n(),de(),be(),ce(),le(),G=o(),K=[`sm`,`md`,`lg`],xe=[`top left`,`top center`,`top right`,`bottom left`,`bottom center`,`bottom right`],Se={title:`UI/Fab`,component:V,render:()=>(0,G.jsx)(W,{children:(0,G.jsxs)(V,{children:[(0,G.jsx)(U,{as:b}),(0,G.jsx)(H,{children:`Action`})]})})},q={},J={render:()=>(0,G.jsx)(x,{children:K.map(e=>(0,G.jsx)(S,{label:e,children:(0,G.jsx)(W,{children:(0,G.jsxs)(V,{size:e,children:[(0,G.jsx)(U,{as:b}),(0,G.jsx)(H,{children:`Action`})]})})},e))})},Y={render:()=>(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ue,{children:"All six `placement` values in one stage — each Fab pins itself to a different corner or edge of the relatively positioned parent."}),(0,G.jsx)(W,{children:xe.map(e=>(0,G.jsx)(V,{size:`sm`,placement:e,children:(0,G.jsx)(H,{children:e})},e))})]})},X={render:()=>(0,G.jsx)(x,{children:K.map(e=>(0,G.jsx)(S,{label:e,children:(0,G.jsx)(W,{children:(0,G.jsx)(V,{size:e,children:(0,G.jsx)(U,{as:se})})})},e))})},Z={render:()=>(0,G.jsx)(W,{children:(0,G.jsx)(V,{children:(0,G.jsx)(H,{children:`Label only`})})})},Q={render:()=>(0,G.jsx)(x,{children:K.map(e=>(0,G.jsx)(S,{label:e,children:(0,G.jsx)(W,{children:(0,G.jsxs)(V,{size:e,isDisabled:!0,children:[(0,G.jsx)(U,{as:b}),(0,G.jsx)(H,{children:`Disabled`})]})})},e))})},Ce=[`Default`,`Sizes`,`Placements`,`IconOnly`,`LabelOnly`,`Disabled`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {SIZES.map(size => <Labeled key={size} label={size}>
          <FabStage>
            <Fab size={size}>
              <FabIcon as={AddIcon} />
              <FabLabel>Action</FabLabel>
            </Fab>
          </FabStage>
        </Labeled>)}
    </Showcase>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        All six \`placement\` values in one stage — each Fab pins itself to a
        different corner or edge of the relatively positioned parent.
      </Note>
      <FabStage>
        {PLACEMENTS.map(placement => <Fab key={placement} size="sm" placement={placement}>
            <FabLabel>{placement}</FabLabel>
          </Fab>)}
      </FabStage>
    </>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {SIZES.map(size => <Labeled key={size} label={size}>
          <FabStage>
            <Fab size={size}>
              <FabIcon as={EditIcon} />
            </Fab>
          </FabStage>
        </Labeled>)}
    </Showcase>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <FabStage>
      <Fab>
        <FabLabel>Label only</FabLabel>
      </Fab>
    </FabStage>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {SIZES.map(size => <Labeled key={size} label={size}>
          <FabStage>
            <Fab size={size} isDisabled>
              <FabIcon as={AddIcon} />
              <FabLabel>Disabled</FabLabel>
            </Fab>
          </FabStage>
        </Labeled>)}
    </Showcase>
}`,...Q.parameters?.docs?.source}}}})))()}$();export{q as Default,Q as Disabled,X as IconOnly,Z as LabelOnly,Y as Placements,J as Sizes,Ce as __namedExportsOrder,Se as default};