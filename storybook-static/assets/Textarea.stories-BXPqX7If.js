import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,i as a,t as o}from"./helpers-C3hOae0F.js";import{n as s,r as c,t as l}from"./textarea-DxCTM5RU.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),c(),i(),u=r(),d=[`default`],f=[`sm`,`md`,`lg`,`xl`],p=[{label:`default`,props:{}},{label:`isFocused`,props:{isFocused:!0}},{label:`isHovered`,props:{isHovered:!0}},{label:`isInvalid`,props:{isInvalid:!0}},{label:`isInvalid + isFocused`,props:{isInvalid:!0,isFocused:!0}},{label:`isDisabled`,props:{isDisabled:!0}},{label:`isReadOnly`,props:{isReadOnly:!0}},{label:`isRequired`,props:{isRequired:!0}}],m={title:`UI/Textarea`,component:l,argTypes:{variant:{control:`select`,options:d},size:{control:`select`,options:f},isDisabled:{control:`boolean`},isInvalid:{control:`boolean`},isReadOnly:{control:`boolean`},isRequired:{control:`boolean`},isFocused:{control:`boolean`},isHovered:{control:`boolean`}},args:{variant:`default`,size:`md`,isDisabled:!1,isInvalid:!1,isReadOnly:!1,isRequired:!1,isFocused:!1,isHovered:!1},render:e=>(0,u.jsx)(l,{...e,className:`max-w-sm`,children:(0,u.jsx)(s,{placeholder:`Placeholder`})})},h={},g={render:()=>(0,u.jsx)(a,{children:d.map(e=>(0,u.jsx)(o,{label:e,className:`w-full max-w-sm`,children:(0,u.jsx)(l,{variant:e,children:(0,u.jsx)(s,{placeholder:`Placeholder`})})},e))})},_={render:()=>(0,u.jsx)(a,{children:f.map(e=>(0,u.jsx)(o,{label:e,className:`w-full max-w-sm`,children:(0,u.jsx)(l,{size:e,children:(0,u.jsx)(s,{placeholder:`Placeholder`})})},e))})},v={render:()=>(0,u.jsx)(a,{children:p.map(e=>(0,u.jsx)(o,{label:e.label,className:`w-full max-w-sm`,children:(0,u.jsx)(l,{...e.props,children:(0,u.jsx)(s,{placeholder:`Placeholder`})})},e.label))})},y={render:()=>(0,u.jsxs)(a,{children:[(0,u.jsx)(o,{label:`placeholder`,className:`w-full max-w-sm`,children:(0,u.jsx)(l,{children:(0,u.jsx)(s,{placeholder:`Placeholder`})})}),(0,u.jsx)(o,{label:`defaultValue`,className:`w-full max-w-sm`,children:(0,u.jsx)(l,{children:(0,u.jsx)(s,{defaultValue:`Line one
Line two
Line three`})})}),(0,u.jsx)(o,{label:`defaultValue + isReadOnly`,className:`w-full max-w-sm`,children:(0,u.jsx)(l,{isReadOnly:!0,children:(0,u.jsx)(s,{defaultValue:`Line one
Line two`})})}),(0,u.jsx)(o,{label:`defaultValue + isDisabled`,className:`w-full max-w-sm`,children:(0,u.jsx)(l,{isDisabled:!0,children:(0,u.jsx)(s,{defaultValue:`Line one
Line two`})})})]})},b=[`Default`,`Variants`,`Sizes`,`States`,`Content`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {VARIANTS.map(variant => <Labeled key={variant} label={variant} className="w-full max-w-sm">
          <Textarea variant={variant}>
            <TextareaInput placeholder="Placeholder" />
          </Textarea>
        </Labeled>)}
    </Showcase>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {SIZES.map(size => <Labeled key={size} label={size} className="w-full max-w-sm">
          <Textarea size={size}>
            <TextareaInput placeholder="Placeholder" />
          </Textarea>
        </Labeled>)}
    </Showcase>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {STATES.map(state => <Labeled key={state.label} label={state.label} className="w-full max-w-sm">
          <Textarea {...state.props}>
            <TextareaInput placeholder="Placeholder" />
          </Textarea>
        </Labeled>)}
    </Showcase>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="placeholder" className="w-full max-w-sm">
        <Textarea>
          <TextareaInput placeholder="Placeholder" />
        </Textarea>
      </Labeled>
      <Labeled label="defaultValue" className="w-full max-w-sm">
        <Textarea>
          <TextareaInput defaultValue={'Line one\\nLine two\\nLine three'} />
        </Textarea>
      </Labeled>
      <Labeled label="defaultValue + isReadOnly" className="w-full max-w-sm">
        <Textarea isReadOnly>
          <TextareaInput defaultValue={'Line one\\nLine two'} />
        </Textarea>
      </Labeled>
      <Labeled label="defaultValue + isDisabled" className="w-full max-w-sm">
        <Textarea isDisabled>
          <TextareaInput defaultValue={'Line one\\nLine two'} />
        </Textarea>
      </Labeled>
    </Showcase>
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Content,h as Default,_ as Sizes,v as States,g as Variants,b as __namedExportsOrder,m as default};