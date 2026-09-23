import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,i as a,n as o,r as s,t as c}from"./button-BmNQOk4E.js";import{a as l,i as u,t as d}from"./helpers-C3hOae0F.js";var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),i(),l(),f=r(),p=[`default`,`destructive`,`outline`,`secondary`,`ghost`,`link`],m=[`default`,`sm`,`lg`,`icon`],h={title:`UI/Button`,component:c,argTypes:{variant:{control:`select`,options:p},size:{control:`select`,options:m},isDisabled:{control:`boolean`}},args:{variant:`default`,size:`default`,isDisabled:!1},render:e=>(0,f.jsx)(c,{...e,children:(0,f.jsx)(a,{children:`Button`})})},g={},_={render:()=>(0,f.jsx)(u,{children:p.map(e=>(0,f.jsx)(d,{label:e,children:(0,f.jsx)(c,{variant:e,children:(0,f.jsx)(a,{children:`Button`})})},e))})},v={render:()=>(0,f.jsx)(u,{children:m.map(e=>(0,f.jsx)(d,{label:e,children:(0,f.jsx)(c,{size:e,children:(0,f.jsx)(a,{children:`Button`})})},e))})},y={render:()=>(0,f.jsx)(u,{children:p.map(e=>(0,f.jsx)(d,{label:e,children:(0,f.jsx)(c,{variant:e,isDisabled:!0,children:(0,f.jsx)(a,{children:`Disabled`})})},e))})},b={render:()=>(0,f.jsxs)(u,{children:[(0,f.jsx)(d,{label:`default`,children:(0,f.jsxs)(c,{isDisabled:!0,children:[(0,f.jsx)(s,{}),(0,f.jsx)(a,{children:`Loading`})]})}),(0,f.jsx)(d,{label:`outline`,children:(0,f.jsxs)(c,{variant:`outline`,isDisabled:!0,children:[(0,f.jsx)(s,{}),(0,f.jsx)(a,{children:`Loading`})]})})]})},x={render:()=>(0,f.jsxs)(u,{children:[(0,f.jsx)(d,{label:`spaced`,children:(0,f.jsxs)(o,{space:`sm`,children:[(0,f.jsx)(c,{variant:`outline`,children:(0,f.jsx)(a,{children:`Cancel`})}),(0,f.jsx)(c,{children:(0,f.jsx)(a,{children:`Save`})})]})}),(0,f.jsx)(d,{label:`attached`,children:(0,f.jsxs)(o,{isAttached:!0,children:[(0,f.jsx)(c,{variant:`outline`,children:(0,f.jsx)(a,{children:`Left`})}),(0,f.jsx)(c,{variant:`outline`,children:(0,f.jsx)(a,{children:`Right`})})]})})]})},S=[`Default`,`Variants`,`Sizes`,`Disabled`,`Loading`,`Group`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {VARIANTS.map(variant => <Labeled key={variant} label={variant}>
          <Button variant={variant}>
            <ButtonText>Button</ButtonText>
          </Button>
        </Labeled>)}
    </Showcase>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {SIZES.map(size => <Labeled key={size} label={size}>
          <Button size={size}>
            <ButtonText>Button</ButtonText>
          </Button>
        </Labeled>)}
    </Showcase>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {VARIANTS.map(variant => <Labeled key={variant} label={variant}>
          <Button variant={variant} isDisabled>
            <ButtonText>Disabled</ButtonText>
          </Button>
        </Labeled>)}
    </Showcase>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="default">
        <Button isDisabled>
          <ButtonSpinner />
          <ButtonText>Loading</ButtonText>
        </Button>
      </Labeled>
      <Labeled label="outline">
        <Button variant="outline" isDisabled>
          <ButtonSpinner />
          <ButtonText>Loading</ButtonText>
        </Button>
      </Labeled>
    </Showcase>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="spaced">
        <ButtonGroup space="sm">
          <Button variant="outline">
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button>
            <ButtonText>Save</ButtonText>
          </Button>
        </ButtonGroup>
      </Labeled>
      <Labeled label="attached">
        <ButtonGroup isAttached>
          <Button variant="outline">
            <ButtonText>Left</ButtonText>
          </Button>
          <Button variant="outline">
            <ButtonText>Right</ButtonText>
          </Button>
        </ButtonGroup>
      </Labeled>
    </Showcase>
}`,...x.parameters?.docs?.source}}}})))()}C();export{g as Default,y as Disabled,x as Group,b as Loading,v as Sizes,_ as Variants,S as __namedExportsOrder,h as default};