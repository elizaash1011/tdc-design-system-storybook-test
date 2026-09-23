import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,i as a,o,r as s}from"./index.web-D_AoTLeS.js";import{a as c,i as l,n as u,t as d}from"./helpers-C3hOae0F.js";var f,p,m,h;function g(){return(g=e((()=>{i(),f=`grid grid-cols-12`,p=`w-auto col-span-1`,m=o({base:`w-full ${f}`}),h=o({base:`w-full ${p}`})})))()}var _,v,y,b;function x(){return(x=e((()=>{_=t(n()),g(),v=r(),y=_.forwardRef(function({className:e,_extra:t,...n},r){let i=t?.className??``;return(0,v.jsx)(`div`,{ref:r,className:m({class:e+` `+i}),...n})}),b=_.forwardRef(function({className:e,_extra:t,...n},r){let i=t?.className??``;return(0,v.jsx)(`div`,{ref:r,className:h({class:e+` `+i}),...n})}),y.displayName=`Grid`,b.displayName=`GridItem`,y.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{gap:{required:!1,tsType:{name:`number`},description:``},rowGap:{required:!1,tsType:{name:`number`},description:``},columnGap:{required:!1,tsType:{name:`number`},description:``},flexDirection:{required:!1,tsType:{name:`union`,raw:`'row' | 'column' | 'row-reverse' | 'column-reverse'`,elements:[{name:`literal`,value:`'row'`},{name:`literal`,value:`'column'`},{name:`literal`,value:`'row-reverse'`},{name:`literal`,value:`'column-reverse'`}]},description:``},padding:{required:!1,tsType:{name:`number`},description:``},paddingLeft:{required:!1,tsType:{name:`number`},description:``},paddingRight:{required:!1,tsType:{name:`number`},description:``},paddingStart:{required:!1,tsType:{name:`number`},description:``},paddingEnd:{required:!1,tsType:{name:`number`},description:``},_extra:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  className: string;
}`,signature:{properties:[{key:`className`,value:{name:`string`,required:!0}}]}},description:``}}},b.__docgenInfo={description:``,methods:[],displayName:`GridItem`,props:{index:{required:!1,tsType:{name:`number`},description:``},_extra:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  className: string;
}`,signature:{properties:[{key:`className`,value:{name:`string`,required:!0}}]}},description:``}}}})))()}function S({label:e}){return(0,C.jsx)(s,{size:`sm`,className:`rounded-sm border border-border bg-muted px-2 py-3 text-center text-muted-foreground`,children:e})}var C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{n(),x(),a(),c(),C=r(),w=[`grid-cols-2`,`grid-cols-3`,`grid-cols-4`,`grid-cols-6`],T=[`col-span-1`,`col-span-2`,`col-span-3`,`col-span-6`],E=[`gap-0`,`gap-2`,`gap-4`,`gap-6`],D=[`One`,`Two`,`Three`,`Four`,`Five`,`Six`],O={title:`UI/Grid`,component:y,argTypes:{className:{control:`text`},_extra:{control:`object`}},args:{className:`gap-3`,_extra:{className:`grid-cols-3`}},render:e=>(0,C.jsx)(y,{...e,children:D.map(e=>(0,C.jsx)(b,{_extra:{className:`col-span-1`},children:(0,C.jsx)(S,{label:e})},e))})},k={},A={render:()=>(0,C.jsxs)(l,{className:`w-full`,children:[(0,C.jsx)(u,{children:`The column count is passed through the _extra style prop, as a grid-cols-N class. Each GridItem declares its own col-span-N the same way, and the gap comes from a gap-N class on the Grid itself.`}),w.map(e=>(0,C.jsx)(d,{label:e,className:`w-full`,children:(0,C.jsx)(y,{className:`gap-3`,_extra:{className:e},children:D.map(e=>(0,C.jsx)(b,{_extra:{className:`col-span-1`},children:(0,C.jsx)(S,{label:e})},e))})},e))]})},j={render:()=>(0,C.jsx)(l,{className:`w-full`,children:T.map(e=>(0,C.jsx)(d,{label:`${e} of 6`,className:`w-full`,children:(0,C.jsx)(y,{className:`gap-3`,_extra:{className:`grid-cols-6`},children:(0,C.jsx)(b,{_extra:{className:e},children:(0,C.jsx)(S,{label:e})})})},e))})},M={render:()=>(0,C.jsx)(l,{className:`w-full`,children:E.map(e=>(0,C.jsx)(d,{label:e,className:`w-full`,children:(0,C.jsx)(y,{className:e,_extra:{className:`grid-cols-3`},children:D.map(e=>(0,C.jsx)(b,{_extra:{className:`col-span-1`},children:(0,C.jsx)(S,{label:e})},e))})},e))})},N=[`Default`,`Columns`,`ColumnSpan`,`Gap`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        The column count is passed through the _extra style prop, as a
        grid-cols-N class. Each GridItem declares its own col-span-N the same
        way, and the gap comes from a gap-N class on the Grid itself.
      </Note>
      {COLUMNS.map(columns => <Labeled key={columns} label={columns} className="w-full">
          <Grid className="gap-3" _extra={{
        className: columns
      }}>
            {CELLS.map(label => <GridItem key={label} _extra={{
          className: 'col-span-1'
        }}>
                <Cell label={label} />
              </GridItem>)}
          </Grid>
        </Labeled>)}
    </Showcase>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      {SPANS.map(span => <Labeled key={span} label={\`\${span} of 6\`} className="w-full">
          <Grid className="gap-3" _extra={{
        className: 'grid-cols-6'
      }}>
            <GridItem _extra={{
          className: span
        }}>
              <Cell label={span} />
            </GridItem>
          </Grid>
        </Labeled>)}
    </Showcase>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      {GAPS.map(gap => <Labeled key={gap} label={gap} className="w-full">
          <Grid className={gap} _extra={{
        className: 'grid-cols-3'
      }}>
            {CELLS.map(label => <GridItem key={label} _extra={{
          className: 'col-span-1'
        }}>
                <Cell label={label} />
              </GridItem>)}
          </Grid>
        </Labeled>)}
    </Showcase>
}`,...M.parameters?.docs?.source}}}})))()}P();export{j as ColumnSpan,A as Columns,k as Default,M as Gap,N as __namedExportsOrder,O as default};