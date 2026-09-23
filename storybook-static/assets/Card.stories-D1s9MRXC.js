import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./index.web-D_AoTLeS.js";import{n as u,t as d}from"./index.web-aEHnIKRS.js";import{a as f,i as p,t as m}from"./helpers-C3hOae0F.js";var h,g;function _(){return(_=e((()=>{i(),h=`flex flex-col relative z-0`,g=s({base:`${h} flex-col bg-card border border-border rounded-xl shadow-sm`,variants:{size:{default:`p-4 gap-6`,sm:`p-3 gap-3`}},defaultVariants:{size:`default`}})})))()}var v,y,b;function x(){return(x=e((()=>{v=t(n()),_(),y=r(),b=v.forwardRef(function({className:e,size:t=`default`,...n},r){return(0,y.jsx)(`div`,{className:g({size:t,class:e}),...n,ref:r})}),b.displayName=`Card`,b.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{className:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'default' | 'sm'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'sm'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}}}}})))()}var S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),x(),u(),a(),o(),f(),S=r(),C=[`default`,`sm`],w={title:`UI/Card`,component:b,argTypes:{size:{control:`select`,options:C}},args:{size:`default`},render:e=>(0,S.jsx)(b,{...e,className:`w-80`,children:(0,S.jsxs)(l,{space:`xs`,children:[(0,S.jsx)(d,{size:`md`,children:`Title`}),(0,S.jsx)(c,{size:`sm`,className:`text-muted-foreground`,children:`Description explaining what this card contains.`})]})})},T={},E={render:()=>(0,S.jsx)(p,{children:C.map(e=>(0,S.jsx)(m,{label:e,children:(0,S.jsx)(b,{size:e,className:`w-80`,children:(0,S.jsxs)(l,{space:`xs`,children:[(0,S.jsx)(d,{size:`md`,children:`Title`}),(0,S.jsx)(c,{size:`sm`,className:`text-muted-foreground`,children:`Description explaining what this card contains.`})]})})},e))})},D={render:()=>(0,S.jsx)(p,{children:C.map(e=>(0,S.jsx)(m,{label:e,children:(0,S.jsxs)(b,{size:e,className:`w-80`,children:[(0,S.jsxs)(l,{space:`xs`,children:[(0,S.jsx)(c,{size:`xs`,className:`uppercase tracking-wide text-muted-foreground`,children:`Overline`}),(0,S.jsx)(d,{size:`lg`,children:`Title`})]}),(0,S.jsx)(c,{size:`sm`,className:`text-muted-foreground`,children:`The card lays its children out in a column, so each block relies on the card gap rather than its own margins.`}),(0,S.jsxs)(l,{space:`xs`,className:`rounded-md bg-muted p-3`,children:[(0,S.jsx)(c,{size:`sm`,className:`font-medium text-foreground`,children:`Nested block`}),(0,S.jsx)(c,{size:`xs`,className:`text-muted-foreground`,children:`Secondary detail`})]})]})},e))})},O=[`Default`,`Sizes`,`Sections`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {SIZES.map(size => <Labeled key={size} label={size}>
          <Card size={size} className="w-80">
            <VStack space="xs">
              <Heading size="md">Title</Heading>
              <Text size="sm" className="text-muted-foreground">
                Description explaining what this card contains.
              </Text>
            </VStack>
          </Card>
        </Labeled>)}
    </Showcase>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      {SIZES.map(size => <Labeled key={size} label={size}>
          <Card size={size} className="w-80">
            <VStack space="xs">
              <Text size="xs" className="uppercase tracking-wide text-muted-foreground">
                Overline
              </Text>
              <Heading size="lg">Title</Heading>
            </VStack>
            <Text size="sm" className="text-muted-foreground">
              The card lays its children out in a column, so each block relies on the
              card gap rather than its own margins.
            </Text>
            <VStack space="xs" className="rounded-md bg-muted p-3">
              <Text size="sm" className="font-medium text-foreground">
                Nested block
              </Text>
              <Text size="xs" className="text-muted-foreground">
                Secondary detail
              </Text>
            </VStack>
          </Card>
        </Labeled>)}
    </Showcase>
}`,...D.parameters?.docs?.source}}}})))()}k();export{T as Default,D as Sections,E as Sizes,O as __namedExportsOrder,w as default};