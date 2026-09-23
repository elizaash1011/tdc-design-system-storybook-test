import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{i,r as a}from"./index.web-D_AoTLeS.js";import{a as o,i as s,t as c}from"./button-BmNQOk4E.js";import{a as l,i as u,n as d,t as f}from"./helpers-C3hOae0F.js";import{n as p,t as m}from"./index.web-BkgxHkvM.js";import{i as h,n as g,r as _,t as v}from"./tooltip-DuSTCvsF.js";function y({initialOpen:e=!1,placement:t=`bottom`}){let[n,r]=C.useState(e);return(0,w.jsx)(m,{className:`h-48 w-full items-center justify-center`,children:(0,w.jsx)(v,{isOpen:n,onOpen:()=>r(!0),onClose:()=>r(!1),placement:t,trigger:e=>(0,w.jsx)(c,{variant:`outline`,...e,children:(0,w.jsx)(s,{children:`Hover me`})}),children:(0,w.jsx)(g,{children:(0,w.jsx)(_,{children:`Tooltip label`})})})})}function b({label:e,placement:t=`right`,size:n}){return(0,w.jsx)(v,{isOpen:!0,placement:t,trigger:e=>(0,w.jsx)(c,{size:`sm`,variant:`outline`,...e,children:(0,w.jsx)(s,{children:`Anchor`})}),children:(0,w.jsx)(g,{children:(0,w.jsx)(_,{size:n,children:e})})})}function x(){let[e,t]=C.useState(`bottom`);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{className:`mb-4`,children:T.map(e=>(0,w.jsx)(f,{label:e,children:(0,w.jsx)(c,{size:`sm`,variant:`outline`,onPress:()=>t(e),children:(0,w.jsxs)(s,{children:[`Show `,e]})})},e))}),(0,w.jsx)(m,{className:`h-56 w-full items-center justify-center rounded-md border border-border bg-muted`,children:(0,w.jsx)(v,{isOpen:!0,placement:e,trigger:e=>(0,w.jsx)(c,{...e,children:(0,w.jsx)(s,{children:`Anchor`})}),children:(0,w.jsx)(g,{children:(0,w.jsxs)(_,{children:[`placement=`,e]})})})})]})}function S(){return(0,w.jsx)(m,{className:`h-32 w-full items-center justify-center`,children:(0,w.jsx)(v,{openDelay:1e3,closeDelay:200,placement:`top`,trigger:e=>(0,w.jsx)(c,{variant:`outline`,...e,children:(0,w.jsx)(s,{children:`Hover and wait`})}),children:(0,w.jsx)(g,{children:(0,w.jsx)(_,{children:`Shown after 1s`})})})})}var C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{C=t(n()),p(),o(),i(),h(),l(),w=r(),T=[`top`,`top left`,`top right`,`bottom`,`bottom left`,`bottom right`,`left`,`left top`,`left bottom`,`right`,`right top`,`right bottom`],E=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`5xl`,`6xl`],D={title:`UI/Tooltip`,component:y},O={},k={render:()=>(0,w.jsx)(y,{initialOpen:!0})},A={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{children:"Only the pressed placement is shown, because every value anchors to the same trigger. `shouldFlip` is on by default, so a placement with no room flips to the opposite side."}),(0,w.jsx)(x,{})]})},j={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{children:"Each row is its own tooltip pinned open (`isOpen`) so all `TooltipText` sizes can be read at once. The largest sizes are tall enough to crowd their neighbours."}),(0,w.jsx)(u,{children:E.map(e=>(0,w.jsx)(f,{label:e,className:`h-16 justify-center`,children:(0,w.jsx)(b,{label:`Size ${e}`,size:e})},e))})]})},M={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{children:"`openDelay` defaults to 350ms and `closeDelay` to 0. This example waits a full second before showing."}),(0,w.jsx)(S,{})]})},N={render:()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{children:"With `isDisabled` the trigger still renders but the tooltip never opens."}),(0,w.jsx)(m,{className:`h-32 w-full items-center justify-center`,children:(0,w.jsx)(v,{isDisabled:!0,placement:`top`,trigger:e=>(0,w.jsx)(c,{variant:`outline`,...e,children:(0,w.jsx)(s,{children:`Hover me`})}),children:(0,w.jsx)(g,{children:(0,w.jsx)(_,{children:`Never shown`})})})}),(0,w.jsx)(a,{size:`sm`,className:`text-muted-foreground`,children:`Nothing appears on hover.`})]})},P=[`Default`,`Open`,`Placements`,`TextSizes`,`WithDelay`,`Disabled`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipExample initialOpen />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        Only the pressed placement is shown, because every value anchors to the
        same trigger. \`shouldFlip\` is on by default, so a placement with no room
        flips to the opposite side.
      </Note>
      <TooltipPlacementExample />
    </>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        Each row is its own tooltip pinned open (\`isOpen\`) so all \`TooltipText\`
        sizes can be read at once. The largest sizes are tall enough to crowd
        their neighbours.
      </Note>
      <Showcase>
        {TEXT_SIZES.map(size => <Labeled key={size} label={size} className="h-16 justify-center">
            <PinnedTooltip label={\`Size \${size}\`} size={size} />
          </Labeled>)}
      </Showcase>
    </>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        \`openDelay\` defaults to 350ms and \`closeDelay\` to 0. This example waits
        a full second before showing.
      </Note>
      <TooltipDelayExample />
    </>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Note>
        With \`isDisabled\` the trigger still renders but the tooltip never opens.
      </Note>
      <Box className="h-32 w-full items-center justify-center">
        <Tooltip isDisabled placement="top" trigger={triggerProps => <Button variant="outline" {...triggerProps}>
              <ButtonText>Hover me</ButtonText>
            </Button>}>
          <TooltipContent>
            <TooltipText>Never shown</TooltipText>
          </TooltipContent>
        </Tooltip>
      </Box>
      <Text size="sm" className="text-muted-foreground">
        Nothing appears on hover.
      </Text>
    </>
}`,...N.parameters?.docs?.source}}}})))()}F();export{O as Default,N as Disabled,k as Open,A as Placements,j as TextSizes,M as WithDelay,P as __namedExportsOrder,D as default};