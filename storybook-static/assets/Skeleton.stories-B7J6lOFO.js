import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./index.web-D_AoTLeS.js";import{a as u,i as d,n as f,t as p}from"./helpers-C3hOae0F.js";import{n as m,t as h}from"./index.web-ano-UwRB.js";var g,_;function v(){return(v=e((()=>{i(),g=s({base:`w-full h-full rounded-sm`,variants:{variant:{sharp:`rounded-none`,circular:`rounded-full`,rounded:`rounded-md`},speed:{1:`duration-750`,2:`duration-100`,3:`duration-1500`,4:`duration-2000`}}}),_=s({base:`rounded-sm w-full`,variants:{speed:{1:`duration-750`,2:`duration-1000`,3:`duration-1500`,4:`duration-2000`},gap:{1:`gap-1`,2:`gap-2`,3:`gap-3`,4:`gap-4`}}})})))()}var y,b,x,S;function C(){return(C=e((()=>{y=t(n()),v(),b=r(),x=y.forwardRef(function({className:e,variant:t=`rounded`,children:n,speed:r=4,startColor:i=`bg-muted-foreground/20`,isLoaded:a=!1,...o},s){return a?n:(0,b.jsx)(`div`,{ref:s,className:`animate-pulse ${i} ${g({variant:t,speed:r,class:e})}`,...o})}),S=y.forwardRef(function({className:e,_lines:t,isLoaded:n=!1,startColor:r=`bg-muted-foreground/20`,gap:i=2,children:a,...o},s){return n?a:t?(0,b.jsx)(`div`,{ref:s,className:`flex flex-col ${_({gap:i})}`,children:Array.from({length:t}).map((t,n)=>(0,b.jsx)(`div`,{className:`animate-pulse ${r} ${_({class:e})}`,...o},n))}):(0,b.jsx)(`div`,{ref:s,className:`animate-pulse ${r} ${_({class:e})}`,...o})}),x.displayName=`Skeleton`,S.displayName=`SkeletonText`,x.__docgenInfo={description:``,methods:[],displayName:`Skeleton`,props:{startColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'bg-muted-foreground/20'`,computed:!1}},isLoaded:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},variant:{defaultValue:{value:`'rounded'`,computed:!1},required:!1},speed:{defaultValue:{value:`4`,computed:!1},required:!1}}},S.__docgenInfo={description:``,methods:[],displayName:`SkeletonText`,props:{_lines:{required:!1,tsType:{name:`number`},description:``},isLoaded:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},startColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'bg-muted-foreground/20'`,computed:!1}},gap:{defaultValue:{value:`2`,computed:!1},required:!1}}}})))()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{n(),m(),C(),a(),o(),u(),w=r(),T=[`sharp`,`circular`,`rounded`],E=[1,2,3,4],D=[1,2,3,4],O=[1,2,3,4],k=`Skeleton is marked alpha upstream in gluestack-ui, so its API may change between releases.`,A={title:`UI/Skeleton`,component:x,argTypes:{variant:{control:`select`,options:T},speed:{control:`select`,options:E},isLoaded:{control:`boolean`}},args:{variant:`rounded`,speed:4,isLoaded:!1},render:e=>(0,w.jsx)(x,{...e,className:`h-16 w-64`,children:(0,w.jsx)(c,{className:`text-foreground`,children:`Loaded content`})})},j={},M={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(f,{children:[k," The base style is `w-full h-full`, so every example sets its own dimensions through className."]}),(0,w.jsx)(d,{children:T.map(e=>(0,w.jsx)(p,{label:e,children:(0,w.jsx)(x,{variant:e,className:`h-16 w-16`})},e))})]})},N={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(f,{children:[k," `speed` maps to the pulse animation duration — 1 is the fastest and 4 the slowest."]}),(0,w.jsx)(d,{children:E.map(e=>(0,w.jsx)(p,{label:`speed={${e}}`,children:(0,w.jsx)(x,{speed:e,className:`h-8 w-64`})},e))})]})},P={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(f,{children:[k," While `isLoaded` is false the placeholder renders; once true the children render in its place."]}),(0,w.jsxs)(d,{children:[(0,w.jsx)(p,{label:`isLoaded={false}`,children:(0,w.jsx)(x,{isLoaded:!1,className:`h-16 w-64`,children:(0,w.jsx)(c,{className:`text-foreground`,children:`Loaded content`})})}),(0,w.jsx)(p,{label:`isLoaded`,children:(0,w.jsx)(x,{isLoaded:!0,className:`h-16 w-64`,children:(0,w.jsx)(c,{className:`text-foreground`,children:`Loaded content`})})})]})]})},F={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(f,{children:[k," `SkeletonText` repeats a line for each `_lines` entry; the line height comes from className."]}),(0,w.jsxs)(d,{children:[O.map(e=>(0,w.jsx)(p,{label:`_lines={${e}}`,children:(0,w.jsx)(S,{_lines:e,className:`h-3 w-64`})},e)),(0,w.jsx)(p,{label:`no _lines (single block)`,children:(0,w.jsx)(S,{className:`h-3 w-64`})})]})]})},I={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(f,{children:[k," `gap` controls the spacing between repeated lines."]}),(0,w.jsx)(d,{children:D.map(e=>(0,w.jsx)(p,{label:`gap={${e}}`,children:(0,w.jsx)(S,{_lines:3,gap:e,className:`h-3 w-64`})},e))})]})},L={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(f,{children:[k," `SkeletonText` takes the same `speed` scale as `Skeleton`."]}),(0,w.jsx)(d,{children:E.map(e=>(0,w.jsx)(p,{label:`speed={${e}}`,children:(0,w.jsx)(S,{_lines:2,speed:e,className:`h-3 w-64`})},e))})]})},R={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(f,{children:[k," `SkeletonText` swaps to its children on `isLoaded`, the same way `Skeleton` does."]}),(0,w.jsxs)(d,{children:[(0,w.jsx)(p,{label:`isLoaded={false}`,children:(0,w.jsx)(S,{_lines:3,className:`h-3 w-64`})}),(0,w.jsx)(p,{label:`isLoaded`,children:(0,w.jsx)(S,{_lines:3,isLoaded:!0,className:`h-3 w-64`,children:(0,w.jsx)(c,{className:`text-foreground`,children:`Loaded content`})})})]})]})},z={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(f,{children:[k,` A typical placeholder: a circular avatar, a title line and a block of body lines.`]}),(0,w.jsxs)(d,{children:[(0,w.jsx)(p,{label:`list row`,children:(0,w.jsxs)(h,{space:`md`,className:`w-80 items-center`,children:[(0,w.jsx)(x,{variant:`circular`,className:`h-12 w-12`}),(0,w.jsxs)(l,{space:`sm`,className:`flex-1`,children:[(0,w.jsx)(S,{_lines:1,className:`h-4 w-32`}),(0,w.jsx)(S,{_lines:2,gap:2,className:`h-3 w-full`})]})]})}),(0,w.jsx)(p,{label:`card`,children:(0,w.jsxs)(l,{space:`md`,className:`w-80 rounded-xl border border-border bg-card p-4`,children:[(0,w.jsx)(x,{variant:`rounded`,className:`h-32 w-full`}),(0,w.jsx)(S,{_lines:1,className:`h-4 w-40`}),(0,w.jsx)(S,{_lines:3,gap:2,className:`h-3 w-full`})]})})]})]})},B=[`Default`,`Variants`,`Speeds`,`Loaded`,`TextLines`,`TextGaps`,`TextSpeeds`,`TextLoaded`,`Composed`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        {ALPHA_NOTE} The base style is \`w-full h-full\`, so every example sets its own
        dimensions through className.
      </Note>
      <Showcase>
        {VARIANTS.map(variant => <Labeled key={variant} label={variant}>
            <Skeleton variant={variant} className="h-16 w-16" />
          </Labeled>)}
      </Showcase>
    </>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        {ALPHA_NOTE} \`speed\` maps to the pulse animation duration — 1 is the fastest
        and 4 the slowest.
      </Note>
      <Showcase>
        {SPEEDS.map(speed => <Labeled key={speed} label={\`speed={\${speed}}\`}>
            <Skeleton speed={speed} className="h-8 w-64" />
          </Labeled>)}
      </Showcase>
    </>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        {ALPHA_NOTE} While \`isLoaded\` is false the placeholder renders; once true the
        children render in its place.
      </Note>
      <Showcase>
        <Labeled label="isLoaded={false}">
          <Skeleton isLoaded={false} className="h-16 w-64">
            <Text className="text-foreground">Loaded content</Text>
          </Skeleton>
        </Labeled>
        <Labeled label="isLoaded">
          <Skeleton isLoaded className="h-16 w-64">
            <Text className="text-foreground">Loaded content</Text>
          </Skeleton>
        </Labeled>
      </Showcase>
    </>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        {ALPHA_NOTE} \`SkeletonText\` repeats a line for each \`_lines\` entry; the line
        height comes from className.
      </Note>
      <Showcase>
        {LINE_COUNTS.map(lines => <Labeled key={lines} label={\`_lines={\${lines}}\`}>
            <SkeletonText _lines={lines} className="h-3 w-64" />
          </Labeled>)}
        <Labeled label="no _lines (single block)">
          <SkeletonText className="h-3 w-64" />
        </Labeled>
      </Showcase>
    </>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>{ALPHA_NOTE} \`gap\` controls the spacing between repeated lines.</Note>
      <Showcase>
        {GAPS.map(gap => <Labeled key={gap} label={\`gap={\${gap}}\`}>
            <SkeletonText _lines={3} gap={gap} className="h-3 w-64" />
          </Labeled>)}
      </Showcase>
    </>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>{ALPHA_NOTE} \`SkeletonText\` takes the same \`speed\` scale as \`Skeleton\`.</Note>
      <Showcase>
        {SPEEDS.map(speed => <Labeled key={speed} label={\`speed={\${speed}}\`}>
            <SkeletonText _lines={2} speed={speed} className="h-3 w-64" />
          </Labeled>)}
      </Showcase>
    </>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        {ALPHA_NOTE} \`SkeletonText\` swaps to its children on \`isLoaded\`, the same way
        \`Skeleton\` does.
      </Note>
      <Showcase>
        <Labeled label="isLoaded={false}">
          <SkeletonText _lines={3} className="h-3 w-64" />
        </Labeled>
        <Labeled label="isLoaded">
          <SkeletonText _lines={3} isLoaded className="h-3 w-64">
            <Text className="text-foreground">Loaded content</Text>
          </SkeletonText>
        </Labeled>
      </Showcase>
    </>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        {ALPHA_NOTE} A typical placeholder: a circular avatar, a title line and a
        block of body lines.
      </Note>
      <Showcase>
        <Labeled label="list row">
          <HStack space="md" className="w-80 items-center">
            <Skeleton variant="circular" className="h-12 w-12" />
            <VStack space="sm" className="flex-1">
              <SkeletonText _lines={1} className="h-4 w-32" />
              <SkeletonText _lines={2} gap={2} className="h-3 w-full" />
            </VStack>
          </HStack>
        </Labeled>
        <Labeled label="card">
          <VStack space="md" className="w-80 rounded-xl border border-border bg-card p-4">
            <Skeleton variant="rounded" className="h-32 w-full" />
            <SkeletonText _lines={1} className="h-4 w-40" />
            <SkeletonText _lines={3} gap={2} className="h-3 w-full" />
          </VStack>
        </Labeled>
      </Showcase>
    </>
}`,...z.parameters?.docs?.source}}}})))()}V();export{z as Composed,j as Default,P as Loaded,N as Speeds,I as TextGaps,F as TextLines,R as TextLoaded,L as TextSpeeds,M as Variants,B as __namedExportsOrder,A as default};