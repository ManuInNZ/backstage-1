/*! For license information please see 1ddc4739.824fb026.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[135540],{851589:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var a=o(785893),s=o(511151);const n={title:"Say Hi to Backstage homepage templates!",author:"Kat Zhou, Spotify",authorURL:"https://github.com/KatherineZhou",authorImageURL:"https://avatars.githubusercontent.com/u/16808998?v=4"},i=void 0,r={permalink:"/blog/2022/01/25/backstage-homepage-templates",source:"@site/blog/2022-01-25-backstage-homepage-templates.mdx",title:"Say Hi to Backstage homepage templates!",description:"This blog post is co-authored by Emma Indal (@emmaindal), Spotify.",date:"2022-01-25T00:00:00.000Z",formattedDate:"January 25, 2022",tags:[],readingTime:2.97,hasTruncateMarker:!0,authors:[{name:"Kat Zhou, Spotify",url:"https://github.com/KatherineZhou",imageURL:"https://avatars.githubusercontent.com/u/16808998?v=4"}],frontMatter:{title:"Say Hi to Backstage homepage templates!",author:"Kat Zhou, Spotify",authorURL:"https://github.com/KatherineZhou",authorImageURL:"https://avatars.githubusercontent.com/u/16808998?v=4"},unlisted:!1,prevItem:{title:"Avoid upgrade surprises with Backstage Upgrade Helper",permalink:"/blog/2022/03/04/backstage-upgrade-helper"},nextItem:{title:"Backstage Wrapped 2021",permalink:"/blog/2021/12/20/backstage-wrapped-2021"}},h={authorsImageUrls:[void 0]},p=[{value:"Why homepage templates?",id:"why-homepage-templates",level:2},{value:"What are homepage templates?",id:"what-are-homepage-templates",level:2},{value:"How to get started",id:"how-to-get-started",level:2},{value:"What\u2019s next?",id:"whats-next",level:2},{value:"How to contribute",id:"how-to-contribute",level:2}];function c(e){const t={a:"a",em:"em",h2:"h2",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["This blog post is co-authored by Emma Indal (",(0,a.jsx)(t.a,{href:"https://github.com/emmaindal",children:"@emmaindal"}),"), Spotify."]})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"homepage template",src:o(783619).Z+"",width:"1200",height:"600"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"TLDR;"})," We\u2019re excited to announce the arrival of homepage templates for Backstage. It can be intimidating to build up your own instance of Backstage, so we decided to make your life a bit easier by giving you an out-of-the-box homepage to hit the ground running. This template can be found in our ",(0,a.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-home-templates--default-template",children:"Backstage Storybook"}),", as well as future templates that we build."]}),"\n","\n",(0,a.jsx)(t.h2,{id:"why-homepage-templates",children:"Why homepage templates?"}),"\n",(0,a.jsx)(t.p,{children:"At Spotify, the Backstage homepage is one of the most commonly used pages, primarily leveraged to quickly find and easily access things. Most of our users start off their Backstage experience on the homepage to quickly pivot to their intended destination. For example, folks generally prefer having a search bar available for quickly finding what they are looking for. Backstage users at Spotify also prefer having a central toolkit for navigating to tools that exist within the organization and for accessing their favorite entities and documentation pages."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Backstage homepage at Spotify",src:o(902815).Z+"",width:"1999",height:"1083"})}),"\n",(0,a.jsxs)(t.p,{children:["But we also know that all organizations look different and have different needs. Backstage is designed with this in mind, and so is the homepage plugin. You can modify and customize your version of the Home plugin so it fits with your needs. Sometimes customizing and configuring your app can be overwhelming to get started, with the ",(0,a.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-home-templates--default-template",children:"homepage templates"})," and components we can provide recommendations and guidelines to make adoption of Backstage more streamlined and simplified."]}),"\n",(0,a.jsx)(t.h2,{id:"what-are-homepage-templates",children:"What are homepage templates?"}),"\n",(0,a.jsxs)(t.p,{children:["A homepage template is just a template of what a homepage can look like. You can either copy it as a whole, or pick different components from it to use. The homepage templates live in our ",(0,a.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-home-templates--default-template",children:"Backstage Storybook"})," and we hope to see this collection grow with contributions from you all. If you don\u2019t want to use one of the templates, you can pick and choose from our collection of ",(0,a.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-home-components",children:"homepage components"})," that you can use right out of the box and compose your own homepage. We\u2019ve included the ",(0,a.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-home-components-searchbar--custom-styles",children:"SearchBar"}),", ",(0,a.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-home-components-companylogo--custom-logo",children:"CompanyLogo"})," and ",(0,a.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-home-components-toolkit--default",children:"Toolkit"})," components in our Backstage Storybook as of today. In the future, we plan on open sourcing the widely popular QuickAccess card, which includes Favorites, Frequently Visited, and Recently Visited options."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Composed Backstage homepage",src:o(623729).Z+"",width:"1999",height:"1159"}),"\n",(0,a.jsx)(t.em,{children:"Composed homepage for the app using the default homepage template"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Example of default homepage template",src:o(159483).Z+"",width:"1999",height:"1111"}),"\n",(0,a.jsx)(t.em,{children:"Example of the default homepage template in Backstage Storybook"})]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-get-started",children:"How to get started"}),"\n",(0,a.jsxs)(t.p,{children:["To get started, you first need to set up your homepage plugin in the app if you have not already, then you can move on to composing your homepage. You can find our step-by-step documentation of how to do this under the ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/homepage",children:"App Configuration - Customize the look-and-feel of your App documentation"}),". You can also access the ",(0,a.jsx)(t.a,{href:"https://www.figma.com/file/nUaAw56hTgC0RIOYkuLSrB/Backstage-Design-System?node-id=2185%3A2978",children:"Backstage UI Kit in Figma"})," to duplicate your own version and play around with a fitting homepage for your own organization."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Example of homepage components in the Backstage UI Kit in Figma",src:o(210565).Z+"",width:"1999",height:"1156"}),"\n",(0,a.jsx)(t.em,{children:"Example of the homepage components in the Backstage UI Kit in Figma"})]}),"\n",(0,a.jsx)(t.h2,{id:"whats-next",children:"What\u2019s next?"}),"\n",(0,a.jsxs)(t.p,{children:["Some future templates that we have in mind are more dashboard-esque ones that display a variety of relevant data for your organization. We will also open source more homepage components such as ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/6906",children:"Starred Entities"})," that you can use when you are composing your components."]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-contribute",children:"How to contribute"}),"\n",(0,a.jsxs)(t.p,{children:["As mentioned above, we would love to build out these collections of both homepage components and homepage templates, so if you would like to contribute, please check out our ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/home/README.md#contributing",children:"contribution documentation"})," to get started."]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},675251:(e,t,o)=>{var a=o(667294),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,o){var a,n={},p=null,c=null;for(a in void 0!==o&&(p=""+o),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,a)&&!h.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:s,type:e,key:p,ref:c,props:n,_owner:r.current}}t.Fragment=n,t.jsx=p,t.jsxs=p},785893:(e,t,o)=>{e.exports=o(675251)},623729:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/composed-backstage-homepage-b9c9c9d507b1aefcb352c9dbd9056efa.png"},159483:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/default-homepage-template-264ab9bec5d416de83a81bf7e6b98997.png"},210565:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/homepage-components-figma-ecb227046347b8bb89ed9e1397fb81c3.png"},783619:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/homepage-template-blog-post-header-10d5641d31d5c131ccbd111994f7d8cd.png"},902815:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/spotify-backstage-homepage-2684bb9b1c03ff4fa25fd2fd21c04dd9.png"},511151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>i});var a=o(667294);const s={},n=a.createContext(s);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);