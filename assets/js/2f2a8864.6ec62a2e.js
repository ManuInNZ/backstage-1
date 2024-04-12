/*! For license information please see 2f2a8864.6ec62a2e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[99322],{942526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=n(785893),s=n(511151);const i={title:"The Plugin Marketplace is open",author:"Stefan \xc5lund, Spotify",authorURL:"https://twitter.com/stalund"},o=void 0,r={permalink:"/blog/2020/09/30/plugin-marketplace",source:"@site/blog/2020-09-30-plugin-marketplace.mdx",title:"The Plugin Marketplace is open",description:"Backstage has an ambitious goal: to provide engineers with the best possible developer experience.",date:"2020-09-30T00:00:00.000Z",formattedDate:"September 30, 2020",tags:[],readingTime:3.67,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"https://twitter.com/stalund"}],frontMatter:{title:"The Plugin Marketplace is open",author:"Stefan \xc5lund, Spotify",authorURL:"https://twitter.com/stalund"},unlisted:!1,prevItem:{title:"How to design for Backstage (even if you\u2019re not a designer)",permalink:"/blog/2020/09/30/backstage-design-system"},nextItem:{title:"Backstage has been accepted into the CNCF Sandbox",permalink:"/blog/2020/09/23/backstage-cncf-sandbox"}},l={authorsImageUrls:[void 0]},u=[{value:"Building an ecosystem",id:"building-an-ecosystem",level:2},{value:"Creating and suggesting new plugins",id:"creating-and-suggesting-new-plugins",level:2}];function c(e){const t={a:"a",em:"em",h2:"h2",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Backstage has an ambitious goal: to provide engineers with the best possible developer experience."}),"\n",(0,a.jsx)(t.p,{children:"A great developer experience leads to happy, creative, and productive engineers. Our belief is that engineers should not have to be experts in various infrastructure tools or disciplines (e.g., machine learning or backend) to be productive. Infrastructure should be abstracted away, so that developers can spend more cycles building and testing, quickly and safely. Backstage unifies all your infrastructure tooling, services, and documentation to create a streamlined development environment from end to end."}),"\n",(0,a.jsxs)(t.p,{children:["Now you may be thinking, \u201cYeah, sure, that sounds nice and all, but how does Backstage actually abstract away infrastructure?\u201d The short answer: ",(0,a.jsx)(t.a,{href:"https://backstage.io/plugins",children:"plugins"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://backstage.io/img/cards-plugins.png",alt:"plugins"})}),"\n","\n",(0,a.jsx)(t.p,{children:"Think of plugins as a mini version of an infrastructure tool or service \u2014 just the parts you need, made quick and easy. The advantage of using a Backstage plugin instead of a tool\u2019s dedicated UI is that all your infrastructure is packaged into a \u201csingle pane of glass\u201d instead of being spread out like independently built \u201cislands\u201d. Once you grow your infrastructure portfolio, the complexity really starts to add up. The Backstage plugin model allows you to add more tools without increasing the cognitive load for your users."}),"\n",(0,a.jsxs)(t.p,{children:["Our goal for the plugin ecosystem is that anything can be a plugin. The definition of a plugin is flexible enough to allow you to expose pretty much any kind of infrastructure or software development tool as a plugin in Backstage. By following clear ",(0,a.jsx)(t.a,{href:"https://backstage.io/blog/2020/09/30/backstage-design-system",children:"design guidelines"})," we ensure the overall user experience stays consistent between plugins. If we all do our job well, the end user of Backstage does not see the boundaries between plugins. They are interacting with one consistent product \u2014 with many features."]}),"\n",(0,a.jsx)(t.h2,{id:"building-an-ecosystem",children:"Building an ecosystem"}),"\n",(0,a.jsx)(t.p,{children:"Imagine a not-so-distant future where you walk up to Backstage, install it in your environment, and then choose from a gallery of existing, open source plugins that serve and match whatever infrastructure and software development needs you have inside your company. That means you can get started with Backstage and see the gains of improved productivity within days, not months. That is our vision for the Backstage plugin ecosystem."}),"\n",(0,a.jsx)(t.p,{children:"Running services on Kubernetes? There\u2019s a plugin for that. Using Snyk for security scanning? There\u2019s a plugin for that. Grafana, DataDog, or Rollbar for monitoring? There\u2019s a plugin for that. Using Jenkins, CircleCI, GitHub Actions, or Travis CI? Pick the CI plugin of your choice. You get the picture. Regardless of your stack, there\u2019s a plugin that you can use."}),"\n",(0,a.jsxs)(t.p,{children:["Like this vision? So do we! But we can\u2019t do it alone. We\u2019ll need your help. For this vision to come true, we need to foster a community where many companies and individual developers build and contribute their plugins. Having been ",(0,a.jsx)(t.a,{href:"https://backstage.io/blog/2020/09/23/backstage-cncf-sandbox",children:"accepted into the CNCF Sandbox"})," provides us with the groundwork and guidance to broaden the community even faster."]}),"\n",(0,a.jsxs)(t.p,{children:["This grand vision is actually not that far off. Already today there is a growing ecosystem of Backstage plugins. To highlight all the amazing work that has been done by the community, and make it easier for Backstage adopters to see what plugins are available, we now have a Plugin Marketplace: ",(0,a.jsx)(t.a,{href:"https://backstage.io/plugins",children:"https://backstage.io/plugins"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"marketplace",src:n(666202).Z+"",width:"1489",height:"913"})}),"\n",(0,a.jsx)(t.h2,{id:"creating-and-suggesting-new-plugins",children:"Creating and suggesting new plugins"}),"\n",(0,a.jsxs)(t.p,{children:["Not all plugins you need will be open source. Every company has their own homegrown tooling. Building internal plugins lets you tailor your version of Backstage to be a perfect fit for your infrastructure and software development needs. If you end up ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/plugins/create-a-plugin",children:"building plugins"})," that could be useful for other companies, please consider releasing them as open source and ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/plugins/add-to-marketplace",children:"add them to the Marketplace"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you start developing a plugin that you aim to release as open source, we suggest that you create a ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?labels=plugin&template=plugin_template.md&title=%5BPlugin%5D+THE+PLUGIN+NAME",children:"new plugin Issue"}),". This helps the community know what plugins are in development and opens up opportunities for collaboration. You can also use this process if you have an idea for a good plugin, but you need help building it."]}),"\n",(0,a.jsx)(t.p,{children:"We are really excited to see all the amazing plugins that have already been built, and look forward to seeing even more ideas and collaboration as the Backstage community continues to grow."}),"\n",(0,a.jsxs)(t.p,{children:["What plugins would you like to see in the Plugin Marketplace? ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?labels=plugin&template=plugin_template.md&title=%5BPlugin%5D+THE+PLUGIN+NAME",children:"Tell us"}),"!"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["Special shout-out to community member ",(0,a.jsx)(t.a,{href:"https://github.com/iain-b",children:"Iain Billett"})," from ",(0,a.jsx)(t.a,{href:"https://roadie.io",children:"Roadie"})," for helping build and contribute the ",(0,a.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugin Marketplace page"})," (as his first PR no less!)."]})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},675251:(e,t,n)=>{var a=n(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var a,i={},u=null,c=null;for(a in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:s,type:e,key:u,ref:c,props:i,_owner:r.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},785893:(e,t,n)=>{e.exports=n(675251)},666202:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/marketplace-72ded09e6910065179d08a94f3387bbb.png"},511151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(667294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);