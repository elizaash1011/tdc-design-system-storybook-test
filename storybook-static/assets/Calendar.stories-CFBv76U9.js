import{n as e,s as t}from"./rolldown-runtime-BcKkbAw3.js";import{t as n}from"./react-DwpFz0gP.js";import{t as r}from"./jsx-runtime-BbDfbRii.js";import{i,r as a}from"./index.web-D_AoTLeS.js";import{N as o,m as s,p as c,rt as l}from"./index.web-CrrZZXjP.js";import{a as u,i as d,n as f,r as p,t as m}from"./helpers-C3hOae0F.js";import{n as h,t as g}from"./index.web-BkgxHkvM.js";import{a as _,c as v,d as y,f as b,i as x,l as S,n as C,o as w,p as T,r as E,s as D,t as O,u as k}from"./calendar-yujamj_X.js";function A(e){let t=new Date(F);return t.setDate(t.getDate()+e),t}function j(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(w,{children:[(0,N.jsx)(S,{children:(0,N.jsx)(o,{as:c,size:`sm`,className:`text-foreground`})}),(0,N.jsx)(k,{}),(0,N.jsx)(v,{children:(0,N.jsx)(o,{as:s,size:`sm`,className:`text-foreground`})})]}),(0,N.jsx)(b,{}),(0,N.jsx)(C,{children:(0,N.jsx)(_,{})})]})}function M(e,t){return t.isOutsideMonth||!I.includes(e.getDate())?null:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(E,{state:t,children:e.getDate()}),(0,N.jsx)(g,{className:`absolute bottom-1 h-1 w-1 rounded-full bg-primary`})]})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{n(),h(),T(),l(),i(),u(),N=r(),P=[{name:`sm`,className:`p-2 gap-2`},{name:`md`,className:`p-2 gap-1`},{name:`lg`,className:`p-6 gap-6`}],F=new Date,I=[4,11,19],L={title:`UI/Calendar`,component:O,argTypes:{showWeekNumbers:{control:`boolean`},showOutsideDays:{control:`boolean`},fixedWeeks:{control:`boolean`},isDisabled:{control:`boolean`},isReadOnly:{control:`boolean`},firstDayOfWeek:{control:`select`,options:[0,1]}},args:{showWeekNumbers:!1,showOutsideDays:!0,fixedWeeks:!1,isDisabled:!1,isReadOnly:!1,firstDayOfWeek:0},render:e=>(0,N.jsxs)(d,{children:[(0,N.jsx)(f,{children:`Calendar is marked alpha upstream in gluestack-ui v5. Its composition and prop names may change in a later release, so treat this page as a snapshot rather than a stable contract.`}),(0,N.jsx)(O,{...e,children:(0,N.jsx)(j,{})})]})},R={},z={render:()=>(0,N.jsxs)(d,{children:[(0,N.jsx)(f,{children:"The `size` variant lives in calendar/styles.tsx but the root component never forwards it, so these three apply the variant's own padding and gap classes directly."}),P.map(e=>(0,N.jsx)(m,{label:e.name,children:(0,N.jsx)(O,{className:e.className,children:(0,N.jsx)(j,{})})},e.name))]})},B={render:()=>(0,N.jsxs)(d,{children:[(0,N.jsx)(f,{children:"The eight day-states are driven by the calendar's own selection and constraint props, not by a prop on the day. Each example below puts one or two of them on screen; `default` and `today` are visible in every one."}),(0,N.jsx)(p,{title:`selected / today / outside-month`,children:(0,N.jsx)(m,{label:`mode=single, defaultValue=today`,children:(0,N.jsx)(O,{mode:`single`,defaultValue:F,children:(0,N.jsx)(j,{})})})}),(0,N.jsx)(p,{title:`disabled`,children:(0,N.jsx)(m,{label:`disabledDates`,children:(0,N.jsx)(O,{mode:`single`,disabledDates:[A(1),A(2),A(3)],children:(0,N.jsx)(j,{})})})}),(0,N.jsx)(p,{title:`range-start / range-middle / range-end`,children:(0,N.jsx)(m,{label:`mode=range`,children:(0,N.jsx)(O,{mode:`range`,defaultValue:{from:A(-3),to:A(3)},children:(0,N.jsx)(j,{})})})}),(0,N.jsx)(p,{title:`outside-month hidden`,children:(0,N.jsx)(m,{label:`showOutsideDays=false`,children:(0,N.jsx)(O,{mode:`single`,showOutsideDays:!1,children:(0,N.jsx)(j,{})})})})]})},V={render:()=>(0,N.jsxs)(d,{children:[(0,N.jsx)(m,{label:`single`,children:(0,N.jsx)(O,{mode:`single`,defaultValue:F,children:(0,N.jsx)(j,{})})}),(0,N.jsx)(m,{label:`multiple`,children:(0,N.jsx)(O,{mode:`multiple`,defaultValue:[A(-2),F,A(4)],children:(0,N.jsx)(j,{})})}),(0,N.jsx)(m,{label:`range`,children:(0,N.jsx)(O,{mode:`range`,defaultValue:{from:A(-4),to:A(2)},children:(0,N.jsx)(j,{})})})]})},H={render:()=>(0,N.jsx)(d,{children:(0,N.jsx)(m,{label:`showWeekNumbers + firstDayOfWeek=1`,children:(0,N.jsx)(O,{mode:`single`,showWeekNumbers:!0,firstDayOfWeek:1,fixedWeeks:!0,children:(0,N.jsx)(j,{})})})})},U={render:()=>(0,N.jsxs)(d,{children:[(0,N.jsx)(f,{children:"This uses `renderDay` rather than the `markers` prop. `markers` is looked up with `date.toISOString()` inside the week renderer but written with a local-timezone key elsewhere, so marker keys silently miss for any viewer west of UTC. `renderDay` has no such problem and lets the dot use a theme token."}),(0,N.jsx)(m,{label:`renderDay indicator dots`,children:(0,N.jsx)(O,{mode:`single`,renderDay:M,children:(0,N.jsx)(j,{})})})]})},W={render:()=>(0,N.jsxs)(d,{children:[(0,N.jsx)(f,{children:"The month and year selects open a `Menu`, so this story depends on the overlay provider that wraps every story."}),(0,N.jsx)(m,{label:`enableMonthYearPicker`,children:(0,N.jsxs)(O,{mode:`single`,enableMonthYearPicker:!0,minYear:F.getFullYear()-2,maxYear:F.getFullYear()+2,children:[(0,N.jsxs)(w,{children:[(0,N.jsx)(S,{children:(0,N.jsx)(o,{as:c,size:`sm`,className:`text-foreground`})}),(0,N.jsx)(D,{}),(0,N.jsx)(y,{}),(0,N.jsx)(v,{children:(0,N.jsx)(o,{as:s,size:`sm`,className:`text-foreground`})})]}),(0,N.jsx)(b,{}),(0,N.jsx)(C,{children:(0,N.jsx)(_,{})})]})})]})},G={render:()=>(0,N.jsx)(d,{children:(0,N.jsx)(m,{label:`CalendarFooter`,children:(0,N.jsxs)(O,{mode:`single`,defaultValue:F,children:[(0,N.jsx)(j,{}),(0,N.jsx)(x,{children:(0,N.jsx)(a,{size:`sm`,className:`text-muted-foreground`,children:`Footer slot — put confirm/clear actions here.`})})]})})})},K={render:()=>(0,N.jsxs)(d,{children:[(0,N.jsx)(f,{children:"`isDisabled` also disables the month navigation buttons, which is where the `data-[disabled=true]` style on the header button shows up. `isReadOnly` blocks selection but leaves navigation live."}),(0,N.jsx)(m,{label:`isDisabled`,children:(0,N.jsx)(O,{mode:`single`,defaultValue:F,isDisabled:!0,children:(0,N.jsx)(j,{})})}),(0,N.jsx)(m,{label:`isReadOnly`,children:(0,N.jsx)(O,{mode:`single`,defaultValue:F,isReadOnly:!0,children:(0,N.jsx)(j,{})})})]})},q=[`Default`,`Sizes`,`DayStates`,`Modes`,`WeekNumbers`,`DayIndicators`,`MonthYearPicker`,`WithFooter`,`DisabledAndReadOnly`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        The \`size\` variant lives in calendar/styles.tsx but the root component
        never forwards it, so these three apply the variant&apos;s own padding
        and gap classes directly.
      </Note>
      {SIZES.map(size => <Labeled key={size.name} label={size.name}>
          <Calendar className={size.className}>
            <MonthComposition />
          </Calendar>
        </Labeled>)}
    </Showcase>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        The eight day-states are driven by the calendar&apos;s own selection and
        constraint props, not by a prop on the day. Each example below puts one
        or two of them on screen; \`default\` and \`today\` are visible in every
        one.
      </Note>

      <Section title="selected / today / outside-month">
        <Labeled label="mode=single, defaultValue=today">
          <Calendar mode="single" defaultValue={TODAY}>
            <MonthComposition />
          </Calendar>
        </Labeled>
      </Section>

      <Section title="disabled">
        <Labeled label="disabledDates">
          <Calendar mode="single" disabledDates={[dayOffset(1), dayOffset(2), dayOffset(3)]}>
            <MonthComposition />
          </Calendar>
        </Labeled>
      </Section>

      <Section title="range-start / range-middle / range-end">
        <Labeled label="mode=range">
          <Calendar mode="range" defaultValue={{
          from: dayOffset(-3),
          to: dayOffset(3)
        }}>
            <MonthComposition />
          </Calendar>
        </Labeled>
      </Section>

      <Section title="outside-month hidden">
        <Labeled label="showOutsideDays=false">
          <Calendar mode="single" showOutsideDays={false}>
            <MonthComposition />
          </Calendar>
        </Labeled>
      </Section>
    </Showcase>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="single">
        <Calendar mode="single" defaultValue={TODAY}>
          <MonthComposition />
        </Calendar>
      </Labeled>
      <Labeled label="multiple">
        <Calendar mode="multiple" defaultValue={[dayOffset(-2), TODAY, dayOffset(4)]}>
          <MonthComposition />
        </Calendar>
      </Labeled>
      <Labeled label="range">
        <Calendar mode="range" defaultValue={{
        from: dayOffset(-4),
        to: dayOffset(2)
      }}>
          <MonthComposition />
        </Calendar>
      </Labeled>
    </Showcase>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="showWeekNumbers + firstDayOfWeek=1">
        <Calendar mode="single" showWeekNumbers firstDayOfWeek={1} fixedWeeks>
          <MonthComposition />
        </Calendar>
      </Labeled>
    </Showcase>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        This uses \`renderDay\` rather than the \`markers\` prop. \`markers\` is
        looked up with \`date.toISOString()\` inside the week renderer but written
        with a local-timezone key elsewhere, so marker keys silently miss for
        any viewer west of UTC. \`renderDay\` has no such problem and lets the dot
        use a theme token.
      </Note>
      <Labeled label="renderDay indicator dots">
        <Calendar mode="single" renderDay={renderDayWithIndicator}>
          <MonthComposition />
        </Calendar>
      </Labeled>
    </Showcase>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        The month and year selects open a \`Menu\`, so this story depends on the
        overlay provider that wraps every story.
      </Note>
      <Labeled label="enableMonthYearPicker">
        <Calendar mode="single" enableMonthYearPicker minYear={TODAY.getFullYear() - 2} maxYear={TODAY.getFullYear() + 2}>
          <CalendarHeader>
            <CalendarHeaderPrevButton>
              <Icon as={ChevronLeftIcon} size="sm" className="text-foreground" />
            </CalendarHeaderPrevButton>
            <CalendarHeaderMonthSelect />
            <CalendarHeaderYearSelect />
            <CalendarHeaderNextButton>
              <Icon as={ChevronRightIcon} size="sm" className="text-foreground" />
            </CalendarHeaderNextButton>
          </CalendarHeader>
          <CalendarWeekDaysHeader />
          <CalendarBody>
            <CalendarGrid />
          </CalendarBody>
        </Calendar>
      </Labeled>
    </Showcase>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Labeled label="CalendarFooter">
        <Calendar mode="single" defaultValue={TODAY}>
          <MonthComposition />
          <CalendarFooter>
            <Text size="sm" className="text-muted-foreground">
              Footer slot — put confirm/clear actions here.
            </Text>
          </CalendarFooter>
        </Calendar>
      </Labeled>
    </Showcase>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Showcase>
      <Note>
        \`isDisabled\` also disables the month navigation buttons, which is where
        the \`data-[disabled=true]\` style on the header button shows up.
        \`isReadOnly\` blocks selection but leaves navigation live.
      </Note>
      <Labeled label="isDisabled">
        <Calendar mode="single" defaultValue={TODAY} isDisabled>
          <MonthComposition />
        </Calendar>
      </Labeled>
      <Labeled label="isReadOnly">
        <Calendar mode="single" defaultValue={TODAY} isReadOnly>
          <MonthComposition />
        </Calendar>
      </Labeled>
    </Showcase>
}`,...K.parameters?.docs?.source}}}})))()}J();export{U as DayIndicators,B as DayStates,R as Default,K as DisabledAndReadOnly,V as Modes,W as MonthYearPicker,z as Sizes,H as WeekNumbers,G as WithFooter,q as __namedExportsOrder,L as default};