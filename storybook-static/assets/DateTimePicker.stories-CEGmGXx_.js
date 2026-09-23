import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{r as i,t as a}from"./primitiveIcon-DiBiEr9o.js";import{n as o,t as s}from"./Pressable-DWi_n6nV.js";import{n as c,t as l}from"./View-C3eIN7TA.js";import{b as u,l as d,rt as f}from"./index.web-CrrZZXjP.js";import{a as p,i as m,n as h,r as g,t as _}from"./helpers-C3hOae0F.js";import{p as v,t as y}from"./calendar-yujamj_X.js";import{n as b,t as x}from"./TextInput-ZHlkUmxm.js";function S(e){return e.toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`})}function C(e){return`${e.getHours().toString().padStart(2,`0`)}:${e.getMinutes().toString().padStart(2,`0`)}`}var w,T,E,D,O,k;function A(){return(A=e((()=>{w=t(n()),c(),o(),b(),v(),i(),T=r(),E=w.forwardRef(function({value:e,onChange:t,mode:n=`datetime`,minimumDate:r,maximumDate:i,disabled:a,placeholder:o=`Select date/time`,className:c,style:u},d){let[f,p]=(0,w.useState)(!1),[m,h]=(0,w.useState)(e),[g,_]=(0,w.useState)(e?C(e):``),v=(0,w.useCallback)(e=>{e instanceof Date&&(h(e),n===`date`&&(t?.(e),p(!1)))},[n,t]),b=(0,w.useCallback)(e=>{_(e.target.value)},[]),E=(0,w.useCallback)(()=>{if(n===`time`&&g){let[e,n]=g.split(`:`).map(Number),r=new Date;r.setHours(e,n,0,0),t?.(r)}else if(m){if(n===`datetime`&&g){let[e,n]=g.split(`:`).map(Number),r=new Date(m);r.setHours(e,n,0,0),t?.(r)}else t?.(m)}p(!1)},[n,m,g,t]),D=(0,w.useCallback)(()=>{h(e),_(e?C(e):``),p(!1)},[e]),O=(0,w.useMemo)(()=>e?n===`time`?C(e):n===`date`?S(e):`${S(e)} ${C(e)}`:``,[e,n]);return(0,T.jsxs)(l,{ref:d,className:`relative ${c||``}`,style:u,children:[(0,T.jsx)(s,{onPress:()=>!a&&p(!0),className:`w-full`,children:(0,T.jsx)(l,{className:`flex-row items-center border border-border rounded-md px-3 py-2 bg-background`,children:(0,T.jsx)(x,{value:O||o,editable:!1,className:`flex-1 text-foreground text-sm`,pointerEvents:`none`})})}),f&&(0,T.jsxs)(l,{className:`absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-4 z-50`,children:[(n===`date`||n===`datetime`)&&(0,T.jsx)(l,{className:`mb-4`,children:(0,T.jsx)(y,{mode:`single`,selected:m,onSelect:v,initialDate:m,minDate:r,maxDate:i})}),(n===`time`||n===`datetime`)&&(0,T.jsx)(l,{className:`mb-4`,children:(0,T.jsx)(`input`,{type:`time`,value:g,onChange:b,className:`w-full p-2 border border-border rounded bg-background text-foreground text-sm`,"aria-label":`Time`})}),(0,T.jsxs)(l,{className:`flex-row justify-end gap-2`,children:[(0,T.jsx)(s,{onPress:D,className:`px-4 py-2 rounded bg-muted`,children:(0,T.jsx)(`span`,{className:`text-muted-foreground text-sm`,children:`Cancel`})}),(0,T.jsx)(s,{onPress:E,className:`px-4 py-2 rounded bg-primary`,children:(0,T.jsx)(`span`,{className:`text-primary-foreground text-sm`,children:`Confirm`})})]})]})]})}),D=w.forwardRef(function({children:e,...t},n){return(0,T.jsx)(s,{ref:n,...t,children:e})}),O=w.forwardRef(function(e,t){return(0,T.jsx)(x,{ref:t,...e})}),k=w.forwardRef(function(e,t){return(0,T.jsx)(a,{ref:t,...e})}),E.__docgenInfo={description:``,methods:[],displayName:`DateTimePicker`,props:{value:{required:!1,tsType:{name:`Date`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`Date | undefined`,elements:[{name:`Date`},{name:`undefined`}]},name:`date`}],return:{name:`void`}}},description:``},mode:{required:!1,tsType:{name:`union`,raw:`'date' | 'time' | 'datetime'`,elements:[{name:`literal`,value:`'date'`},{name:`literal`,value:`'time'`},{name:`literal`,value:`'datetime'`}]},description:``,defaultValue:{value:`'datetime'`,computed:!1}},minimumDate:{required:!1,tsType:{name:`Date`},description:``},maximumDate:{required:!1,tsType:{name:`Date`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Select date/time'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`any`},description:``}}},D.__docgenInfo={description:``,methods:[],displayName:`DateTimePickerTrigger`},O.__docgenInfo={description:``,methods:[],displayName:`DateTimePickerInput`},k.__docgenInfo={description:``,methods:[],displayName:`DateTimePickerIcon`}})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{n(),A(),f(),p(),j=r(),M=[`sm`,`md`,`lg`,`xl`],N=[`underlined`,`outline`,`rounded`],P=[`date`,`time`,`datetime`],F=new Date(2026,0,15,9,30),I={title:`UI/DateTimePicker`,component:E,argTypes:{mode:{control:`select`,options:P},disabled:{control:`boolean`},placeholder:{control:`text`}},args:{mode:`date`,disabled:!1,placeholder:`Select a date`,format:`YYYY-MM-DD`},render:e=>(0,j.jsxs)(m,{className:`w-full`,children:[(0,j.jsx)(h,{children:`DateTimePicker is marked alpha upstream in gluestack-ui v5 and its API may change. Two further caveats on this page: the picker surface itself comes from @react-native-community/datetimepicker, which has no web support, so pressing a trigger will not open a native spinner here; and the component ships a separate web implementation (date-time-picker/index.web.tsx) that renders its own bordered input and ignores the Trigger / Input / Icon children below. What you see in the browser is therefore the web fallback, not the composition in the code.`}),(0,j.jsx)(_,{label:`trigger + input + icon`,className:`w-full max-w-xs`,children:(0,j.jsx)(E,{...e,value:F,children:(0,j.jsxs)(D,{children:[(0,j.jsx)(O,{}),(0,j.jsx)(k,{as:d,className:`mr-3`})]})})})]})},L={},R={render:()=>(0,j.jsxs)(m,{className:`w-full`,children:[(0,j.jsx)(h,{children:"`size` sets the trigger's minimum height and is inherited by the input text and the icon through the style context. It is a prop on `DateTimePickerTrigger`, not on the root."}),M.map(e=>(0,j.jsx)(_,{label:e,className:`w-full max-w-xs`,children:(0,j.jsx)(E,{mode:`date`,value:F,format:`YYYY-MM-DD`,children:(0,j.jsxs)(D,{size:e,children:[(0,j.jsx)(O,{}),(0,j.jsx)(k,{as:d,className:`mr-3`})]})})},e))]})},z={render:()=>(0,j.jsx)(m,{className:`w-full`,children:N.map(e=>(0,j.jsx)(_,{label:e,className:`w-full max-w-xs`,children:(0,j.jsx)(E,{mode:`date`,value:F,format:`YYYY-MM-DD`,children:(0,j.jsxs)(D,{variant:e,children:[(0,j.jsx)(O,{}),(0,j.jsx)(k,{as:d,className:`mr-3`})]})})},e))})},B={render:()=>(0,j.jsx)(m,{className:`w-full`,children:(0,j.jsx)(g,{title:`mode`,children:P.map(e=>(0,j.jsx)(_,{label:e,className:`w-full max-w-xs`,children:(0,j.jsx)(E,{mode:e,value:F,children:(0,j.jsxs)(D,{children:[(0,j.jsx)(O,{}),(0,j.jsx)(k,{as:e===`time`?u:d,className:`mr-3`})]})})},e))})})},V={render:()=>(0,j.jsxs)(m,{className:`w-full`,children:[(0,j.jsx)(h,{children:"With no `value`, the input falls back to `placeholder`, styled by `placeholder:text-muted-foreground`."}),(0,j.jsx)(_,{label:`empty`,className:`w-full max-w-xs`,children:(0,j.jsx)(E,{mode:`date`,placeholder:`Select a date`,children:(0,j.jsxs)(D,{children:[(0,j.jsx)(O,{}),(0,j.jsx)(k,{as:d,className:`mr-3`})]})})}),(0,j.jsx)(_,{label:`filled`,className:`w-full max-w-xs`,children:(0,j.jsx)(E,{mode:`date`,value:F,format:`YYYY-MM-DD`,children:(0,j.jsxs)(D,{children:[(0,j.jsx)(O,{}),(0,j.jsx)(k,{as:d,className:`mr-3`})]})})})]})},H={render:()=>(0,j.jsxs)(m,{className:`w-full`,children:[(0,j.jsx)(h,{children:"`disabled` is read from the picker context by the trigger, which then renders at 40% opacity and stops opening the picker."}),N.map(e=>(0,j.jsx)(_,{label:e,className:`w-full max-w-xs`,children:(0,j.jsx)(E,{mode:`date`,value:F,format:`YYYY-MM-DD`,disabled:!0,children:(0,j.jsxs)(D,{variant:e,children:[(0,j.jsx)(O,{}),(0,j.jsx)(k,{as:d,className:`mr-3`})]})})},e))]})},U=[`Default`,`Sizes`,`Variants`,`Modes`,`Placeholder`,`Disabled`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        \`size\` sets the trigger&apos;s minimum height and is inherited by the
        input text and the icon through the style context. It is a prop on
        \`DateTimePickerTrigger\`, not on the root.
      </Note>
      {SIZES.map(size => <Labeled key={size} label={size} className="w-full max-w-xs">
          <DateTimePicker mode="date" value={SAMPLE} format="YYYY-MM-DD">
            <DateTimePickerTrigger size={size}>
              <DateTimePickerInput />
              <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
            </DateTimePickerTrigger>
          </DateTimePicker>
        </Labeled>)}
    </Showcase>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      {VARIANTS.map(variant => <Labeled key={variant} label={variant} className="w-full max-w-xs">
          <DateTimePicker mode="date" value={SAMPLE} format="YYYY-MM-DD">
            <DateTimePickerTrigger variant={variant}>
              <DateTimePickerInput />
              <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
            </DateTimePickerTrigger>
          </DateTimePicker>
        </Labeled>)}
    </Showcase>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Section title="mode">
        {MODES.map(mode => <Labeled key={mode} label={mode} className="w-full max-w-xs">
            <DateTimePicker mode={mode} value={SAMPLE}>
              <DateTimePickerTrigger>
                <DateTimePickerInput />
                <DateTimePickerIcon as={mode === 'time' ? ClockIcon : CalendarDaysIcon} className="mr-3" />
              </DateTimePickerTrigger>
            </DateTimePicker>
          </Labeled>)}
      </Section>
    </Showcase>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        With no \`value\`, the input falls back to \`placeholder\`, styled by
        \`placeholder:text-muted-foreground\`.
      </Note>
      <Labeled label="empty" className="w-full max-w-xs">
        <DateTimePicker mode="date" placeholder="Select a date">
          <DateTimePickerTrigger>
            <DateTimePickerInput />
            <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Labeled>
      <Labeled label="filled" className="w-full max-w-xs">
        <DateTimePicker mode="date" value={SAMPLE} format="YYYY-MM-DD">
          <DateTimePickerTrigger>
            <DateTimePickerInput />
            <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
          </DateTimePickerTrigger>
        </DateTimePicker>
      </Labeled>
    </Showcase>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        \`disabled\` is read from the picker context by the trigger, which then
        renders at 40% opacity and stops opening the picker.
      </Note>
      {VARIANTS.map(variant => <Labeled key={variant} label={variant} className="w-full max-w-xs">
          <DateTimePicker mode="date" value={SAMPLE} format="YYYY-MM-DD" disabled>
            <DateTimePickerTrigger variant={variant}>
              <DateTimePickerInput />
              <DateTimePickerIcon as={CalendarDaysIcon} className="mr-3" />
            </DateTimePickerTrigger>
          </DateTimePicker>
        </Labeled>)}
    </Showcase>
}`,...H.parameters?.docs?.source}}}})))()}W();export{L as Default,H as Disabled,B as Modes,V as Placeholder,R as Sizes,z as Variants,U as __namedExportsOrder,I as default};