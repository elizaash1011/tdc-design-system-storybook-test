import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,o as a}from"./index.web-D_AoTLeS.js";import{a as o,i as s,n as c,t as l}from"./helpers-C3hOae0F.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{i(),u=`caption-bottom`,d=a({base:`table border-collapse w-[800px]`}),f=a({base:``}),p=a({base:``}),m=a({base:``}),h=a({base:`flex-1 px-6 py-[14px] text-left font-bold text-[16px] leading-[22px] text-foreground/80 font-roboto`}),g=a({base:`border-0 border-b border-solid border-border/80 bg-background`,variants:{isHeaderRow:{true:``},isFooterRow:{true:`border-b-0 `}}}),_=a({base:`flex-1 px-6 py-[14px] text-left text-[16px] font-medium leading-[22px] text-foreground/80 font-roboto`}),v=a({base:`${u} px-6 py-[14px] text-[16px] font-normal leading-[22px] text-foreground/90 bg-background/90 font-roboto`})})))()}var b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{b=t(n()),y(),x=r(),S=(0,b.createContext)({isHeaderRow:!1}),C=(0,b.createContext)({isFooterRow:!1}),w=b.forwardRef(function({className:e,...t},n){return(0,x.jsx)(`table`,{ref:n,className:d({class:e}),...t})}),T=b.forwardRef(function({className:e,...t},n){let r=(0,b.useMemo)(()=>({isHeaderRow:!0}),[]);return(0,x.jsx)(S.Provider,{value:r,children:(0,x.jsx)(`thead`,{ref:n,className:f({class:e}),...t})})}),E=b.forwardRef(function({className:e,...t},n){return(0,x.jsx)(`tbody`,{ref:n,className:p({class:e}),...t})}),D=b.forwardRef(function({className:e,...t},n){let r=(0,b.useMemo)(()=>({isFooterRow:!0}),[]);return(0,x.jsx)(C.Provider,{value:r,children:(0,x.jsx)(`tfoot`,{ref:n,className:m({class:e}),...t})})}),O=b.forwardRef(function({className:e,...t},n){return(0,x.jsx)(`th`,{ref:n,className:h({class:e}),...t})}),k=b.forwardRef(function({className:e,...t},n){let{isHeaderRow:r}=(0,b.useContext)(S),{isFooterRow:i}=(0,b.useContext)(C);return(0,x.jsx)(`tr`,{ref:n,className:g({isHeaderRow:r,isFooterRow:i,class:e}),...t})}),A=b.forwardRef(function({className:e,...t},n){return(0,x.jsx)(`td`,{ref:n,className:_({class:e}),...t})}),j=b.forwardRef(function({className:e,...t},n){return(0,x.jsx)(`caption`,{ref:n,className:v({class:e}),...t})}),w.displayName=`Table`,T.displayName=`TableHeader`,E.displayName=`TableBody`,D.displayName=`TableFooter`,O.displayName=`TableHead`,k.displayName=`TableRow`,A.displayName=`TableData`,j.displayName=`TableCaption`,w.__docgenInfo={description:``,methods:[],displayName:`Table`},T.__docgenInfo={description:``,methods:[],displayName:`TableHeader`},E.__docgenInfo={description:``,methods:[],displayName:`TableBody`},D.__docgenInfo={description:``,methods:[],displayName:`TableFooter`},O.__docgenInfo={description:``,methods:[],displayName:`TableHead`},k.__docgenInfo={description:``,methods:[],displayName:`TableRow`},A.__docgenInfo={description:``,methods:[],displayName:`TableData`},j.__docgenInfo={description:``,methods:[],displayName:`TableCaption`}})))()}var N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{n(),M(),o(),N=r(),P=[`Column A`,`Column B`,`Column C`],F=[[`Row 1`,`Value 1`,`Detail 1`],[`Row 2`,`Value 2`,`Detail 2`],[`Row 3`,`Value 3`,`Detail 3`]],I={title:`UI/Table`,component:w,render:()=>(0,N.jsxs)(s,{className:`w-full`,children:[(0,N.jsx)(c,{children:"`tableStyle` fixes the table at `w-[800px]`, so it overflows the mobile viewport by design — switch the viewport toolbar to Desktop to see the whole width."}),(0,N.jsxs)(w,{children:[(0,N.jsx)(j,{children:`Caption describing the table.`}),(0,N.jsx)(T,{children:(0,N.jsx)(k,{children:P.map(e=>(0,N.jsx)(O,{children:e},e))})}),(0,N.jsx)(E,{children:F.map(e=>(0,N.jsx)(k,{children:e.map(e=>(0,N.jsx)(A,{children:e},e))},e[0]))}),(0,N.jsx)(D,{children:(0,N.jsxs)(k,{children:[(0,N.jsx)(A,{children:`Footer`}),(0,N.jsx)(A,{children:`Value`}),(0,N.jsx)(A,{children:`Detail`})]})})]})]})},L={},R={render:()=>(0,N.jsxs)(s,{className:`w-full`,children:[(0,N.jsx)(c,{children:"`isHeaderRow` and `isFooterRow` are the only variants on `TableRow`, and they are not props — each row reads them from the context its `TableHeader` / `TableFooter` parent provides. A header row keeps the bottom border; a footer row drops it."}),(0,N.jsx)(l,{label:`header / body / footer rows`,className:`w-full`,children:(0,N.jsxs)(w,{children:[(0,N.jsx)(T,{children:(0,N.jsx)(k,{children:P.map(e=>(0,N.jsx)(O,{children:e},e))})}),(0,N.jsx)(E,{children:F.map(e=>(0,N.jsx)(k,{children:e.map(e=>(0,N.jsx)(A,{children:e},e))},e[0]))}),(0,N.jsx)(D,{children:(0,N.jsxs)(k,{children:[(0,N.jsx)(A,{children:`Footer`}),(0,N.jsx)(A,{children:`Value`}),(0,N.jsx)(A,{children:`Detail`})]})})]})})]})},z={render:()=>(0,N.jsx)(s,{className:`w-full`,children:(0,N.jsx)(l,{label:`no footer, no caption`,className:`w-full`,children:(0,N.jsxs)(w,{children:[(0,N.jsx)(T,{children:(0,N.jsx)(k,{children:P.map(e=>(0,N.jsx)(O,{children:e},e))})}),(0,N.jsx)(E,{children:F.map(e=>(0,N.jsx)(k,{children:e.map(e=>(0,N.jsx)(A,{children:e},e))},e[0]))})]})})})},B={render:()=>(0,N.jsxs)(s,{className:`w-full`,children:[(0,N.jsx)(c,{children:"`TableCaption` is declared first so the markup stays valid HTML; on web the caption style adds `caption-bottom`, which renders it under the table instead."}),(0,N.jsxs)(w,{children:[(0,N.jsx)(j,{children:`Caption describing the table.`}),(0,N.jsx)(T,{children:(0,N.jsx)(k,{children:P.map(e=>(0,N.jsx)(O,{children:e},e))})}),(0,N.jsx)(E,{children:F.map(e=>(0,N.jsx)(k,{children:e.map(e=>(0,N.jsx)(A,{children:e},e))},e[0]))})]})]})},V=[`Default`,`RowVariants`,`HeaderAndBodyOnly`,`Caption`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        \`isHeaderRow\` and \`isFooterRow\` are the only variants on \`TableRow\`, and
        they are not props — each row reads them from the context its
        \`TableHeader\` / \`TableFooter\` parent provides. A header row keeps the
        bottom border; a footer row drops it.
      </Note>
      <Labeled label="header / body / footer rows" className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              {COLUMNS.map(column => <TableHead key={column}>{column}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {ROWS.map(row => <TableRow key={row[0]}>
                {row.map(cell => <TableData key={cell}>{cell}</TableData>)}
              </TableRow>)}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableData>Footer</TableData>
              <TableData>Value</TableData>
              <TableData>Detail</TableData>
            </TableRow>
          </TableFooter>
        </Table>
      </Labeled>
    </Showcase>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Labeled label="no footer, no caption" className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              {COLUMNS.map(column => <TableHead key={column}>{column}</TableHead>)}
            </TableRow>
          </TableHeader>
          <TableBody>
            {ROWS.map(row => <TableRow key={row[0]}>
                {row.map(cell => <TableData key={cell}>{cell}</TableData>)}
              </TableRow>)}
          </TableBody>
        </Table>
      </Labeled>
    </Showcase>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase className="w-full">
      <Note>
        \`TableCaption\` is declared first so the markup stays valid HTML; on web
        the caption style adds \`caption-bottom\`, which renders it under the
        table instead.
      </Note>
      <Table>
        <TableCaption>Caption describing the table.</TableCaption>
        <TableHeader>
          <TableRow>
            {COLUMNS.map(column => <TableHead key={column}>{column}</TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ROWS.map(row => <TableRow key={row[0]}>
              {row.map(cell => <TableData key={cell}>{cell}</TableData>)}
            </TableRow>)}
        </TableBody>
      </Table>
    </Showcase>
}`,...B.parameters?.docs?.source}}}})))()}H();export{B as Caption,L as Default,z as HeaderAndBodyOnly,R as RowVariants,V as __namedExportsOrder,I as default};