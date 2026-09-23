import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{D as i,J as a,rt as o}from"./index.web-CrrZZXjP.js";import{a as s,i as c,n as l,t as u}from"./helpers-C3hOae0F.js";import{a as d,i as f,n as p,r as m,t as h}from"./input-jh8ltVFO.js";var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),o(),d(),s(),g=r(),_=[{label:`default`,props:{}},{label:`isFocused`,props:{isFocused:!0}},{label:`isInvalid`,props:{isInvalid:!0}},{label:`isInvalid + isFocused`,props:{isInvalid:!0,isFocused:!0}},{label:`isDisabled`,props:{isDisabled:!0}},{label:`isReadOnly`,props:{isReadOnly:!0}},{label:`isRequired`,props:{isRequired:!0}}],v={title:`UI/Input`,component:h,argTypes:{isDisabled:{control:`boolean`},isInvalid:{control:`boolean`},isReadOnly:{control:`boolean`},isRequired:{control:`boolean`},isFocused:{control:`boolean`},isHovered:{control:`boolean`}},args:{isDisabled:!1,isInvalid:!1,isReadOnly:!1,isRequired:!1,isFocused:!1,isHovered:!1},render:e=>(0,g.jsx)(h,{...e,className:`max-w-sm`,children:(0,g.jsx)(p,{placeholder:`Placeholder`})})},y={},b={render:()=>(0,g.jsx)(c,{children:_.map(e=>(0,g.jsx)(u,{label:e.label,className:`w-full max-w-sm`,children:(0,g.jsx)(h,{...e.props,children:(0,g.jsx)(p,{placeholder:`Placeholder`})})},e.label))})},x={render:()=>(0,g.jsxs)(c,{children:[(0,g.jsx)(u,{label:`placeholder`,className:`w-full max-w-sm`,children:(0,g.jsx)(h,{children:(0,g.jsx)(p,{placeholder:`Placeholder`})})}),(0,g.jsx)(u,{label:`defaultValue`,className:`w-full max-w-sm`,children:(0,g.jsx)(h,{children:(0,g.jsx)(p,{defaultValue:`Value`})})}),(0,g.jsx)(u,{label:`defaultValue + isReadOnly`,className:`w-full max-w-sm`,children:(0,g.jsx)(h,{isReadOnly:!0,children:(0,g.jsx)(p,{defaultValue:`Value`})})}),(0,g.jsx)(u,{label:`defaultValue + isDisabled`,className:`w-full max-w-sm`,children:(0,g.jsx)(h,{isDisabled:!0,children:(0,g.jsx)(p,{defaultValue:`Value`})})}),(0,g.jsx)(u,{label:`type="password"`,className:`w-full max-w-sm`,children:(0,g.jsx)(h,{children:(0,g.jsx)(p,{type:`password`,defaultValue:`Password`})})})]})},S={render:()=>(0,g.jsxs)(c,{children:[(0,g.jsx)(l,{children:`InputSlot is pressable and focuses the field by default; InputIcon takes an icon through the as prop.`}),(0,g.jsx)(u,{label:`leading icon`,className:`w-full max-w-sm`,children:(0,g.jsxs)(h,{children:[(0,g.jsx)(f,{children:(0,g.jsx)(m,{as:a})}),(0,g.jsx)(p,{placeholder:`Placeholder`})]})}),(0,g.jsx)(u,{label:`trailing icon`,className:`w-full max-w-sm`,children:(0,g.jsxs)(h,{children:[(0,g.jsx)(p,{placeholder:`Placeholder`}),(0,g.jsx)(f,{children:(0,g.jsx)(m,{as:i})})]})}),(0,g.jsx)(u,{label:`both`,className:`w-full max-w-sm`,children:(0,g.jsxs)(h,{children:[(0,g.jsx)(f,{children:(0,g.jsx)(m,{as:a})}),(0,g.jsx)(p,{placeholder:`Placeholder`}),(0,g.jsx)(f,{children:(0,g.jsx)(m,{as:i})})]})})]})},C=[`Default`,`States`,`Content`,`WithSlots`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {STATES.map(state => <Labeled key={state.label} label={state.label} className="w-full max-w-sm">
          <Input {...state.props}>
            <InputField placeholder="Placeholder" />
          </Input>
        </Labeled>)}
    </Showcase>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="placeholder" className="w-full max-w-sm">
        <Input>
          <InputField placeholder="Placeholder" />
        </Input>
      </Labeled>
      <Labeled label="defaultValue" className="w-full max-w-sm">
        <Input>
          <InputField defaultValue="Value" />
        </Input>
      </Labeled>
      <Labeled label="defaultValue + isReadOnly" className="w-full max-w-sm">
        <Input isReadOnly>
          <InputField defaultValue="Value" />
        </Input>
      </Labeled>
      <Labeled label="defaultValue + isDisabled" className="w-full max-w-sm">
        <Input isDisabled>
          <InputField defaultValue="Value" />
        </Input>
      </Labeled>
      <Labeled label='type="password"' className="w-full max-w-sm">
        <Input>
          <InputField type="password" defaultValue="Password" />
        </Input>
      </Labeled>
    </Showcase>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        InputSlot is pressable and focuses the field by default; InputIcon takes
        an icon through the as prop.
      </Note>
      <Labeled label="leading icon" className="w-full max-w-sm">
        <Input>
          <InputSlot>
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField placeholder="Placeholder" />
        </Input>
      </Labeled>
      <Labeled label="trailing icon" className="w-full max-w-sm">
        <Input>
          <InputField placeholder="Placeholder" />
          <InputSlot>
            <InputIcon as={EyeIcon} />
          </InputSlot>
        </Input>
      </Labeled>
      <Labeled label="both" className="w-full max-w-sm">
        <Input>
          <InputSlot>
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField placeholder="Placeholder" />
          <InputSlot>
            <InputIcon as={EyeIcon} />
          </InputSlot>
        </Input>
      </Labeled>
    </Showcase>
}`,...S.parameters?.docs?.source}}}})))()}w();export{x as Content,y as Default,b as States,S as WithSlots,C as __namedExportsOrder,v as default};