import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,i as a,n as o,t as s}from"./helpers-C3hOae0F.js";import{n as c,t as l}from"./index.web-BkgxHkvM.js";import{n as u,t as d}from"./image-CggJDZ4R.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),c(),u(),i(),f=r(),p=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mPYhwR6kAAucYZBqIEYRcjig1HDaDwMCg0AJ3rvEGSkpH4AAAAASUVORK5CYII=`,m=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`full`,`none`],h={title:`UI/Image`,component:d,argTypes:{size:{control:`select`,options:m}},args:{size:`md`},render:e=>(0,f.jsx)(d,{...e,source:{uri:p},alt:`Placeholder`})},g={},_={render:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{children:"The image is an inline base64 placeholder, not a network request, so the story renders in an offline or statically hosted Storybook. `full` fills its parent and `none` applies no dimensions, so both are shown inside a sized box."}),(0,f.jsx)(a,{children:m.map(e=>(0,f.jsx)(s,{label:e,children:e===`full`||e===`none`?(0,f.jsx)(l,{className:`h-20 w-20`,children:(0,f.jsx)(d,{size:e,className:e===`none`?`h-full w-full`:void 0,source:{uri:p},alt:`Placeholder`})}):(0,f.jsx)(d,{size:e,source:{uri:p},alt:`Placeholder`})},e))})]})},v={render:()=>(0,f.jsxs)(a,{children:[(0,f.jsx)(s,{label:`square`,children:(0,f.jsx)(d,{size:`lg`,source:{uri:p},alt:`Placeholder`})}),(0,f.jsx)(s,{label:`rounded`,children:(0,f.jsx)(d,{size:`lg`,className:`rounded-xl`,source:{uri:p},alt:`Placeholder`})}),(0,f.jsx)(s,{label:`circular`,children:(0,f.jsx)(d,{size:`lg`,className:`rounded-full`,source:{uri:p},alt:`Placeholder`})}),(0,f.jsx)(s,{label:`bordered`,children:(0,f.jsx)(d,{size:`lg`,className:`rounded-md border border-border`,source:{uri:p},alt:`Placeholder`})})]})},y=[`Default`,`Sizes`,`Shapes`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        The image is an inline base64 placeholder, not a network request, so the story
        renders in an offline or statically hosted Storybook. \`full\` fills its parent
        and \`none\` applies no dimensions, so both are shown inside a sized box.
      </Note>
      <Showcase>
        {SIZES.map(size => <Labeled key={size} label={size}>
            {size === 'full' || size === 'none' ? <Box className="h-20 w-20">
                <Image size={size} className={size === 'none' ? 'h-full w-full' : undefined} source={{
            uri: PLACEHOLDER_IMAGE
          }} alt="Placeholder" />
              </Box> : <Image size={size} source={{
          uri: PLACEHOLDER_IMAGE
        }} alt="Placeholder" />}
          </Labeled>)}
      </Showcase>
    </>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="square">
        <Image size="lg" source={{
        uri: PLACEHOLDER_IMAGE
      }} alt="Placeholder" />
      </Labeled>
      <Labeled label="rounded">
        <Image size="lg" className="rounded-xl" source={{
        uri: PLACEHOLDER_IMAGE
      }} alt="Placeholder" />
      </Labeled>
      <Labeled label="circular">
        <Image size="lg" className="rounded-full" source={{
        uri: PLACEHOLDER_IMAGE
      }} alt="Placeholder" />
      </Labeled>
      <Labeled label="bordered">
        <Image size="lg" className="rounded-md border border-border" source={{
        uri: PLACEHOLDER_IMAGE
      }} alt="Placeholder" />
      </Labeled>
    </Showcase>
}`,...v.parameters?.docs?.source}}}})))()}b();export{g as Default,v as Shapes,_ as Sizes,y as __namedExportsOrder,h as default};