/*! For license information please see 3b08c42d.09492d26.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[391692],{965056:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=a(785893),o=a(511151);const r={title:"New release: Backstage 1.0",author:"Francesco Corti, Spotify",authorURL:"https://github.com/fcorti/",authorImageURL:"https://avatars.githubusercontent.com/u/6010860?v=4"},n="So what is Backstage 1.0?",i={permalink:"/blog/2022/03/17/backstage-1.0",source:"@site/blog/2022-03-17-backstage-1.0.mdx",title:"New release: Backstage 1.0",description:"backstage header",date:"2022-03-17T00:00:00.000Z",formattedDate:"March 17, 2022",tags:[],readingTime:3.22,hasTruncateMarker:!0,authors:[{name:"Francesco Corti, Spotify",url:"https://github.com/fcorti/",imageURL:"https://avatars.githubusercontent.com/u/6010860?v=4"}],frontMatter:{title:"New release: Backstage 1.0",author:"Francesco Corti, Spotify",authorURL:"https://github.com/fcorti/",authorImageURL:"https://avatars.githubusercontent.com/u/6010860?v=4"},unlisted:!1,prevItem:{title:"Introducing the TechDocs Addon Framework",permalink:"/blog/2022/05/13/techdocs-addon-framework"},nextItem:{title:"Backstage Turns Two!",permalink:"/blog/2022/03/16/backstage-turns-two"}},c={authorsImageUrls:[void 0]},l=[];function h(e){const t={a:"a",em:"em",h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"backstage header",src:a(950710).Z+"",width:"1200",height:"603"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"TL;DR:"})," If you\u2019ve been waiting for Backstage to come out of beta, we\u2019re excited to announce that Backstage 1.0 is here!"]}),"\n","\n",(0,s.jsxs)(t.p,{children:["It\u2019s been two years since Spotify ",(0,s.jsx)(t.a,{href:"https://backstage.io/blog/2020/03/16/announcing-backstage",children:"open sourced Backstage"})," so companies of all shapes and sizes \u2014 and in every industry all over the world \u2014 could build highly extensible and customized developer portals to best suit their organization\u2019s needs and culture. Now hundreds of adopters are using Backstage as the single pane of glass for their core development, managing millions of components and technical documentation, and helping hundreds of thousands of developers be more productive and happy."]}),"\n",(0,s.jsx)(t.p,{children:"This milestone demonstrates Backstage\u2019s maturity and the incredible effort from the core maintainers, contributors, and adopters. In a short time, we\u2019ve seen a global community grow rapidly with people bringing their passion to this project and our goal of empowering developers. Because, yes, this is also your goal and your time to celebrate."}),"\n",(0,s.jsx)(t.p,{children:"If you\u2019re thinking \u201cwhat is Backstage 1.0, and what does it include?\u201d You\u2019re not alone, so let\u2019s get into it."}),"\n",(0,s.jsxs)(t.p,{children:["To start, let\u2019s define Backstage: it\u2019s an open platform for building developer portals, mainly defined by a set of libraries together with plugins that can be added, removed, or customized so that the final behavior of the developer portal product is what an adopter wants. For the past two years, the open source platform has been in beta. With Backstage 1.0, we're coming out of beta and into production with regular versioning and release cycle commitments. So, if your company requires production-ready software, you can now use Backstage and join ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/ADOPTERS.md",children:"over 100 other public adopters"}),"!"]}),"\n",(0,s.jsx)(t.p,{children:"Our definition of Backstage 1.0 includes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Backstage Core 1.0 libraries as the set of libraries to make the platform work"}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/",children:"Backstage Software Catalog"})," 1.0"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/",children:"Backstage Software Templates"})," 1.0"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/",children:"Backstage TechDocs"})," 1.0"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Coming soon: ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/search/",children:"Backstage Search"})," 1.0 will be included in the near future as part of the regular releases to the Backstage platform."]}),"\n",(0,s.jsx)(t.p,{children:"In terms of features, the maintainers will not be shipping new stuff as part of the major release but instead:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Refactoring the code packaging to better reflect the release numbering"}),"\n",(0,s.jsx)(t.li,{children:"Removal of deprecated services to reduce the risk of introducing breaking changes"}),"\n",(0,s.jsx)(t.li,{children:"Establishing clarity on the release lifecycle, numbering, and cadence as well as the support model"}),"\n",(0,s.jsx)(t.li,{children:"Improvements to Backstage.io documentation"}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"the-road-ahead",children:"The road ahead"}),"\n",(0,s.jsx)(t.p,{children:"In terms of maturity and stability, the road ahead for Backstage is bright and busy. The goal is to bring Backstage to the next level of maturity and continue improving it, according to adopter growth, feature set, and identified use cases."}),"\n",(0,s.jsxs)(t.p,{children:["You can read more about Backstage\u2019s roadmap ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"here"}),", but in terms of maturity and stability we would like to highlight the following:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["CNCF incubation: The Backstage project ",(0,s.jsx)(t.a,{href:"https://www.cncf.io/blog/2022/03/15/backstage-project-joins-the-cncf-incubator/",children:"recently moved from Sandbox to Incubation"})," phase within the ",(0,s.jsx)(t.a,{href:"https://www.cncf.io/projects/#:~:text=Maturity%20levels,should%20be%20adopting%20different%20projects.",children:"CNCF maturity levels"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Security auditing and strategy: With the CNCF\u2019s support, the project maintainers are working on a security audit initiative to make the platform more secure and will share more details soon. The audit is part of an overall security strategy being developed this quarter."}),"\n",(0,s.jsxs)(t.li,{children:["Paid plugins for advanced and enterprise use cases: Last year, ",(0,s.jsx)(t.a,{href:"https://backstage.spotify.com/blog/paid-plugins-announcement/",children:"Spotify announced its work on paid plugins"})," built on top of the Backstage open source platform. This is another example of the platform\u2019s maturity and Spotify\u2019s continued commitment to the project, with a focus on customers and use cases requiring enterprise-focused support and plugins developed and proven by Spotify."]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"some-links-to-peruse",children:"Some links to peruse"}),"\n",(0,s.jsx)(t.p,{children:"If you want to know more about this first major release, check out the following links to learn more about this release effort and receive support."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/docs/releases/v1.0.0",children:"Release notes"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/releases/tag/v1.0.0",children:"Changelog"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/docs/",children:"Backstage official documentation"})," and ",(0,s.jsx)(t.a,{href:"https://backstage.spotify.com/",children:"backstage.spotify.com"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord channel"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"Backstage repository on GitHub"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/ADOPTERS.md",children:"List of public adopters"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},675251:(e,t,a)=>{var s=a(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var s,r={},l=null,h=null;for(s in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)n.call(t,s)&&!c.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:o,type:e,key:l,ref:h,props:r,_owner:i.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},785893:(e,t,a)=>{e.exports=a(675251)},950710:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/release.1.0-1940dff917f34bba996af1a89e0549dc.gif"},511151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>n});var s=a(667294);const o={},r=s.createContext(o);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);