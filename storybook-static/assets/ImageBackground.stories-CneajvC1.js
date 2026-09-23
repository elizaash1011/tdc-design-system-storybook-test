import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{T as r,r as i,w as a}from"./dist-wrNzRCnc.js";import{t as o}from"./jsx-runtime-BbDfbRii.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./index.web-D_AoTLeS.js";import{n as p,t as m}from"./index.web-aEHnIKRS.js";import{i as h,n as g,o as _,r as v,t as y}from"./copyComponentProperties-RQiJnNSO.js";import{a as b,i as x,n as S,t as C}from"./helpers-C3hOae0F.js";var w,T;function E(){return(E=e((()=>{i(),v(),w={className:`style`,imageClassName:`imageStyle`},T=y(a,e=>_(a,e,w))})))()}var D,O,k,A;function j(){return(j=e((()=>{E(),D=t(n()),s(),O=o(),k=u({}),A=D.forwardRef(function({className:e,...t},n){return(0,O.jsx)(T,{className:k({class:e}),...t,ref:n})}),A.displayName=`ImageBackground`,A.__docgenInfo={description:``,methods:[],displayName:`ImageBackground`}})))()}var M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{n(),p(),j(),c(),l(),b(),M=o(),N=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mPYhwR6kAAucYZBqIEYRcjig1HDaDwMCg0AJ3rvEGSkpH4AAAAASUVORK5CYII=`,P=[`cover`,`contain`,`stretch`,`repeat`,`center`],F={title:`UI/ImageBackground`,component:A,argTypes:{resizeMode:{control:`select`,options:P}},args:{resizeMode:`cover`},render:e=>(0,M.jsx)(A,{...e,source:{uri:N},className:`h-32 w-64 overflow-hidden rounded-lg`,children:(0,M.jsxs)(f,{space:`xs`,className:`flex-1 justify-end p-3`,children:[(0,M.jsx)(m,{size:`sm`,className:`text-foreground`,children:`Title`}),(0,M.jsx)(d,{size:`xs`,className:`text-muted-foreground`,children:`Description`})]})})},I={},L={render:()=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(S,{children:`The image is an inline base64 placeholder (a 16x16 checkerboard), not a network request, so each resize mode visibly scales or tiles the same source.`}),(0,M.jsx)(x,{children:P.map(e=>(0,M.jsx)(C,{label:e,children:(0,M.jsx)(A,{resizeMode:e,source:{uri:N},className:`h-24 w-64 overflow-hidden rounded-lg border border-border`})},e))})]})},R={render:()=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(S,{children:"ImageBackground exposes no variants of its own — it is the React Native component with className support. Children lay out on top of the image, and `imageClassName` targets the image layer only."}),(0,M.jsxs)(x,{children:[(0,M.jsx)(C,{label:`centred content`,children:(0,M.jsx)(A,{source:{uri:N},className:`h-32 w-64 items-center justify-center overflow-hidden rounded-lg`,children:(0,M.jsx)(d,{className:`rounded-md bg-card px-3 py-1 font-medium text-card-foreground`,children:`Overlay`})})}),(0,M.jsx)(C,{label:`bottom-aligned content`,children:(0,M.jsx)(A,{source:{uri:N},className:`h-32 w-64 justify-end overflow-hidden rounded-lg`,children:(0,M.jsxs)(f,{space:`xs`,className:`bg-card/90 p-3`,children:[(0,M.jsx)(m,{size:`sm`,className:`text-card-foreground`,children:`Title`}),(0,M.jsx)(d,{size:`xs`,className:`text-muted-foreground`,children:`Description`})]})})}),(0,M.jsx)(C,{label:`rounded image layer`,children:(0,M.jsx)(A,{source:{uri:N},imageClassName:`rounded-2xl`,className:`h-32 w-64 items-center justify-center`,children:(0,M.jsx)(d,{className:`rounded-md bg-card px-3 py-1 font-medium text-card-foreground`,children:`imageClassName`})})})]})]})},z=[`Default`,`ResizeModes`,`WithContent`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        The image is an inline base64 placeholder (a 16x16 checkerboard), not a network
        request, so each resize mode visibly scales or tiles the same source.
      </Note>
      <Showcase>
        {RESIZE_MODES.map(resizeMode => <Labeled key={resizeMode} label={resizeMode}>
            <ImageBackground resizeMode={resizeMode} source={{
          uri: PLACEHOLDER_IMAGE
        }} className="h-24 w-64 overflow-hidden rounded-lg border border-border" />
          </Labeled>)}
      </Showcase>
    </>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        ImageBackground exposes no variants of its own — it is the React Native
        component with className support. Children lay out on top of the image, and
        \`imageClassName\` targets the image layer only.
      </Note>
      <Showcase>
        <Labeled label="centred content">
          <ImageBackground source={{
          uri: PLACEHOLDER_IMAGE
        }} className="h-32 w-64 items-center justify-center overflow-hidden rounded-lg">
            <Text className="rounded-md bg-card px-3 py-1 font-medium text-card-foreground">
              Overlay
            </Text>
          </ImageBackground>
        </Labeled>
        <Labeled label="bottom-aligned content">
          <ImageBackground source={{
          uri: PLACEHOLDER_IMAGE
        }} className="h-32 w-64 justify-end overflow-hidden rounded-lg">
            <VStack space="xs" className="bg-card/90 p-3">
              <Heading size="sm" className="text-card-foreground">
                Title
              </Heading>
              <Text size="xs" className="text-muted-foreground">
                Description
              </Text>
            </VStack>
          </ImageBackground>
        </Labeled>
        <Labeled label="rounded image layer">
          <ImageBackground source={{
          uri: PLACEHOLDER_IMAGE
        }} imageClassName="rounded-2xl" className="h-32 w-64 items-center justify-center">
            <Text className="rounded-md bg-card px-3 py-1 font-medium text-card-foreground">
              imageClassName
            </Text>
          </ImageBackground>
        </Labeled>
      </Showcase>
    </>
}`,...R.parameters?.docs?.source}}}})))()}B();export{I as Default,L as ResizeModes,R as WithContent,z as __namedExportsOrder,F as default};