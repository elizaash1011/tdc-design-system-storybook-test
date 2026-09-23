import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{n as i,r as a}from"./creator-Drtd-EYe.js";import{a as o,i as s,o as c,r as l}from"./index.web-D_AoTLeS.js";import{a as u,i as d,n as f,t as p}from"./helpers-C3hOae0F.js";import{n as m,t as h}from"./index.web-BkgxHkvM.js";import{n as g,t as _}from"./index.web-ano-UwRB.js";import{n as v,t as y}from"./image-CggJDZ4R.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{b=t(n()),o(),a(),x=r(),S=c({base:`absolute inset-0 bg-black/95`}),C=c({base:`flex flex-col items-center justify-center h-full w-full`}),w=c({base:`absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-xl font-bold cursor-pointer backdrop-blur-sm`}),T=c({base:`absolute inset-0 flex items-center justify-between px-4 pointer-events-none`}),E=c({base:`w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-2xl font-bold cursor-pointer pointer-events-auto backdrop-blur-sm`}),D=c({base:`absolute bottom-8 left-0 right-0 flex justify-center`}),O=c({base:`text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full`}),k=b.createContext({images:[],currentIndex:0,isOpen:!1,open:()=>{},close:()=>{},goNext:()=>{},goPrevious:()=>{}}),A=()=>b.useContext(k),j=b.forwardRef(function({images:e,defaultOpen:t=!1,isOpen:n,onOpenChange:r,onIndexChange:i,initialIndex:a=0,children:o},s){let[c,l]=(0,b.useState)(t),[u,d]=(0,b.useState)(a),f=n!==void 0,p=f?n:c;(0,b.useEffect)(()=>{i?.(u)},[u,i]);let m=(0,b.useCallback)(()=>{f||l(!0),r?.(!0)},[f,r]),h=(0,b.useCallback)(()=>{f||l(!1),r?.(!1)},[f,r]),g=(0,b.useCallback)(()=>{d(t=>Math.min(t+1,e.length-1))},[e.length]),_=(0,b.useCallback)(()=>{d(e=>Math.max(e-1,0))},[]),v=b.useMemo(()=>({images:e,currentIndex:u,isOpen:p,open:m,close:h,goNext:g,goPrevious:_}),[e,u,p,m,h,g,_]);return(0,x.jsx)(`div`,{ref:s,className:`w-full`,children:(0,x.jsx)(k.Provider,{value:v,children:o})})}),M=b.forwardRef(function({children:e,onPress:t,...n},r){let{open:i}=A(),a=(0,b.useCallback)(()=>{t?.(),i()},[t,i]);return(0,x.jsx)(`div`,{ref:r,onClick:a,className:`cursor-pointer`,...n,children:e})}),N=b.forwardRef(function({children:e},t){let n=A(),{images:r,currentIndex:a,isOpen:o,close:s,goNext:c,goPrevious:l}=n,u=r[a];return(0,b.useEffect)(()=>{if(!o)return;let e=e=>{e.key===`Escape`&&s(),e.key===`ArrowLeft`&&l(),e.key===`ArrowRight`&&c()};return document.addEventListener(`keydown`,e),document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,e),document.body.style.overflow=``}},[o,s,c,l]),(0,x.jsx)(i,{isOpen:o,onRequestClose:s,isKeyboardDismissable:!0,children:(0,x.jsx)(k.Provider,{value:n,children:(0,x.jsx)(`div`,{className:S({}),children:(0,x.jsxs)(`div`,{ref:t,className:C({}),children:[u&&(0,x.jsx)(`img`,{src:u.url,alt:u.alt||`Image ${a+1}`,className:`max-w-full max-h-[80vh] object-contain`}),e]})})})})}),P=b.forwardRef(function({className:e,...t},n){let{close:r}=A();return(0,x.jsx)(`button`,{ref:n,onClick:r,className:w({class:e}),"aria-label":`Close image viewer`,...t,children:`✕`})}),F=b.forwardRef(function({className:e},t){let{goPrevious:n,goNext:r,currentIndex:i,images:a}=A(),o=i>0,s=i<a.length-1;return(0,x.jsxs)(`div`,{ref:t,className:T({class:e}),children:[o&&(0,x.jsx)(`button`,{onClick:n,className:E({}),"aria-label":`Previous image`,children:`‹`}),(0,x.jsx)(`div`,{className:`flex-1`}),s&&(0,x.jsx)(`button`,{onClick:r,className:E({}),"aria-label":`Next image`,children:`›`})]})}),I=b.forwardRef(function({className:e},t){let{currentIndex:n,images:r}=A();return(0,x.jsx)(`div`,{ref:t,className:D({class:e}),children:(0,x.jsxs)(`span`,{className:O({}),children:[n+1,` / `,r.length]})})}),j.__docgenInfo={description:``,methods:[],displayName:`ImageViewer`,props:{images:{required:!0,tsType:{name:`Array`,elements:[{name:`ImageItem`}],raw:`ImageItem[]`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:``},onIndexChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},initialIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}},M.__docgenInfo={description:``,methods:[],displayName:`ImageViewerTrigger`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onPress:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}},N.__docgenInfo={description:``,methods:[],displayName:`ImageViewerContent`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}},P.__docgenInfo={description:``,methods:[],displayName:`ImageViewerCloseButton`,props:{className:{required:!1,tsType:{name:`string`},description:``}}},F.__docgenInfo={description:``,methods:[],displayName:`ImageViewerNavigation`,props:{className:{required:!1,tsType:{name:`string`},description:``}}},I.__docgenInfo={description:``,methods:[],displayName:`ImageViewerCounter`,props:{className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function R({item:e,label:t}){return(0,z.jsxs)(h,{className:`items-center gap-1`,children:[(0,z.jsx)(y,{source:{uri:e.url},alt:e.alt??t,size:`sm`,className:`rounded-md border border-border`}),(0,z.jsx)(l,{size:`xs`,className:`text-muted-foreground`,children:t})]})}var z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{n(),m(),g(),v(),L(),s(),u(),z=r(),B=[{url:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGklEQVR42mO4dOn6qlWbMEkGrKJAkmFQ6gAATvCQIfUI4msAAAAASUVORK5CYII=`,alt:`Placeholder one`},{url:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAIElEQVR42mOYNnspEOUV1wIRMpsBpwSmEISNW4IOdgAACWBmgQsLUmMAAAAASUVORK5CYII=`,alt:`Placeholder two`},{url:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAFElEQVR42mOIis+0cfTGJBmGlgQA/EE9QSsqxcwAAAAASUVORK5CYII=`,alt:`Placeholder three`}],V=[B[0]],H={title:`UI/ImageViewer`,component:j,args:{images:B,initialIndex:0},argTypes:{initialIndex:{control:{type:`number`,min:0,max:2}}},render:e=>(0,z.jsxs)(d,{className:`w-full`,children:[(0,z.jsx)(f,{children:"ImageViewer is marked alpha upstream in gluestack-ui v5 and its API may change. The three images are inline `data:` URI placeholders — 8x8 PNGs embedded in the story file — because the static Storybook build must work offline and fetch nothing from the network."}),(0,z.jsx)(p,{label:`press a thumbnail to open`,className:`w-full`,children:(0,z.jsxs)(j,{...e,children:[(0,z.jsx)(M,{children:(0,z.jsx)(_,{space:`md`,className:`items-end`,children:B.map((e,t)=>(0,z.jsx)(R,{item:e,label:`Image ${t+1}`},e.url))})}),(0,z.jsxs)(N,{children:[(0,z.jsx)(P,{}),(0,z.jsx)(F,{}),(0,z.jsx)(I,{})]})]})})]})},U={},W={render:()=>(0,z.jsxs)(d,{className:`w-full`,children:[(0,z.jsx)(f,{children:"With one image, `ImageViewerNavigation` renders no arrows — both the previous and next buttons are conditional on there being somewhere to go."}),(0,z.jsx)(p,{label:`one image`,className:`w-full`,children:(0,z.jsxs)(j,{images:V,children:[(0,z.jsx)(M,{children:(0,z.jsx)(R,{item:V[0],label:`Image 1`})}),(0,z.jsxs)(N,{children:[(0,z.jsx)(P,{}),(0,z.jsx)(F,{}),(0,z.jsx)(I,{})]})]})})]})},G={render:()=>(0,z.jsxs)(d,{className:`w-full`,children:[(0,z.jsx)(f,{children:"`initialIndex` picks which image the overlay opens on; the counter reflects it immediately."}),(0,z.jsx)(p,{label:`initialIndex=2`,className:`w-full`,children:(0,z.jsxs)(j,{images:B,initialIndex:2,children:[(0,z.jsx)(M,{children:(0,z.jsx)(_,{space:`md`,className:`items-end`,children:B.map((e,t)=>(0,z.jsx)(R,{item:e,label:`Image ${t+1}`},e.url))})}),(0,z.jsxs)(N,{children:[(0,z.jsx)(P,{}),(0,z.jsx)(F,{}),(0,z.jsx)(I,{})]})]})})]})},K={render:()=>(0,z.jsxs)(d,{className:`w-full`,children:[(0,z.jsx)(f,{children:"`defaultOpen` mounts the overlay immediately, which is the only way to review the open state statically. Close it with the ✕ button or the Esc key; Left/Right arrows move between images."}),(0,z.jsx)(p,{label:`defaultOpen`,className:`w-full`,children:(0,z.jsxs)(j,{images:B,defaultOpen:!0,children:[(0,z.jsx)(M,{children:(0,z.jsx)(l,{className:`text-foreground`,children:`Reopen viewer`})}),(0,z.jsxs)(N,{children:[(0,z.jsx)(P,{}),(0,z.jsx)(F,{}),(0,z.jsx)(I,{})]})]})})]})},q={render:()=>(0,z.jsxs)(d,{className:`w-full`,children:[(0,z.jsx)(f,{children:"The overlay chrome is opt-in: `ImageViewerContent` renders the current image and nothing else, so close / navigation / counter are each added by hand. This example omits the counter."}),(0,z.jsx)(p,{label:`no counter`,className:`w-full`,children:(0,z.jsxs)(j,{images:B,children:[(0,z.jsx)(M,{children:(0,z.jsx)(_,{space:`md`,className:`items-end`,children:B.map((e,t)=>(0,z.jsx)(R,{item:e,label:`Image ${t+1}`},e.url))})}),(0,z.jsxs)(N,{children:[(0,z.jsx)(P,{}),(0,z.jsx)(F,{})]})]})})]})},J=[`Default`,`SingleImage`,`InitialIndex`,`OpenByDefault`,`ContentPartsOnly`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        With one image, \`ImageViewerNavigation\` renders no arrows — both the
        previous and next buttons are conditional on there being somewhere to
        go.
      </Note>
      <Labeled label="one image" className="w-full">
        <ImageViewer images={SINGLE_IMAGE}>
          <ImageViewerTrigger>
            <Thumbnail item={SINGLE_IMAGE[0]} label="Image 1" />
          </ImageViewerTrigger>
          <ImageViewerContent>
            <ImageViewerCloseButton />
            <ImageViewerNavigation />
            <ImageViewerCounter />
          </ImageViewerContent>
        </ImageViewer>
      </Labeled>
    </Showcase>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        \`initialIndex\` picks which image the overlay opens on; the counter
        reflects it immediately.
      </Note>
      <Labeled label="initialIndex=2" className="w-full">
        <ImageViewer images={IMAGES} initialIndex={2}>
          <ImageViewerTrigger>
            <HStack space="md" className="items-end">
              {IMAGES.map((item, index) => <Thumbnail key={item.url} item={item} label={\`Image \${index + 1}\`} />)}
            </HStack>
          </ImageViewerTrigger>
          <ImageViewerContent>
            <ImageViewerCloseButton />
            <ImageViewerNavigation />
            <ImageViewerCounter />
          </ImageViewerContent>
        </ImageViewer>
      </Labeled>
    </Showcase>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        \`defaultOpen\` mounts the overlay immediately, which is the only way to
        review the open state statically. Close it with the ✕ button or the Esc
        key; Left/Right arrows move between images.
      </Note>
      <Labeled label="defaultOpen" className="w-full">
        <ImageViewer images={IMAGES} defaultOpen>
          <ImageViewerTrigger>
            <Text className="text-foreground">Reopen viewer</Text>
          </ImageViewerTrigger>
          <ImageViewerContent>
            <ImageViewerCloseButton />
            <ImageViewerNavigation />
            <ImageViewerCounter />
          </ImageViewerContent>
        </ImageViewer>
      </Labeled>
    </Showcase>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        The overlay chrome is opt-in: \`ImageViewerContent\` renders the current
        image and nothing else, so close / navigation / counter are each added
        by hand. This example omits the counter.
      </Note>
      <Labeled label="no counter" className="w-full">
        <ImageViewer images={IMAGES}>
          <ImageViewerTrigger>
            <HStack space="md" className="items-end">
              {IMAGES.map((item, index) => <Thumbnail key={item.url} item={item} label={\`Image \${index + 1}\`} />)}
            </HStack>
          </ImageViewerTrigger>
          <ImageViewerContent>
            <ImageViewerCloseButton />
            <ImageViewerNavigation />
          </ImageViewerContent>
        </ImageViewer>
      </Labeled>
    </Showcase>
}`,...q.parameters?.docs?.source}}}})))()}Y();export{q as ContentPartsOnly,U as Default,G as InitialIndex,K as OpenByDefault,W as SingleImage,J as __namedExportsOrder,H as default};