(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),i=c(4),s=c(1),b=(c(9),c(10),c(11),c(0)),d=function(t){var e=t.tabs,c=t.selectedTab,a=t.onClickTab;return Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{className:t.id===c.id?"is-active":"","data-cy":"Tab",children:Object(b.jsx)("a",{href:t.id,"data-cy":"TabLink",onClick:function(e){e.preventDefault(),a(t)},children:t.title})},t.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var t=Object(s.useState)(l[0]),e=Object(i.a)(t,2),c=e[0],a=e[1];return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(b.jsx)(d,{tabs:l,selectedTab:c,onClickTab:function(t){a(t)}})]})};n.a.render(Object(b.jsx)(o,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.2d55b823.chunk.js.map