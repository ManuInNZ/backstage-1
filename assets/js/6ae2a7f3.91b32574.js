/*! For license information please see 6ae2a7f3.91b32574.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[119337],{801898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(824246),r=n(511151);const o={id:"software-catalog-overview",title:"Backstage Software Catalog",sidebar_label:"Overview",description:"The Backstage Software Catalog"},s=void 0,i={id:"features/software-catalog/software-catalog-overview",title:"Backstage Software Catalog",description:"The Backstage Software Catalog",source:"@site/../docs/features/software-catalog/index.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/",permalink:"/docs/features/software-catalog/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/index.md",tags:[],version:"current",frontMatter:{id:"software-catalog-overview",title:"Backstage Software Catalog",sidebar_label:"Overview",description:"The Backstage Software Catalog"},sidebar:"docs",previous:{title:"Debugging Backstage",permalink:"/docs/local-dev/debugging"},next:{title:"The Life of an Entity",permalink:"/docs/features/software-catalog/life-of-an-entity"}},c={},l=[{value:"What is a Software Catalog?",id:"what-is-a-software-catalog",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Adding components to the catalog",id:"adding-components-to-the-catalog",level:2},{value:"Manually register components",id:"manually-register-components",level:3},{value:"Creating new components through Backstage",id:"creating-new-components-through-backstage",level:3},{value:"Static catalog configuration",id:"static-catalog-configuration",level:3},{value:"Updating component metadata",id:"updating-component-metadata",level:3},{value:"Finding software in the catalog",id:"finding-software-in-the-catalog",level:2},{value:"Starring components",id:"starring-components",level:2},{value:"Integrated tooling through plugins",id:"integrated-tooling-through-plugins",level:2},{value:"Links",id:"links",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-is-a-software-catalog",children:"What is a Software Catalog?"}),"\n",(0,a.jsxs)(t.p,{children:["The Backstage Software Catalog is a centralized system that keeps track of\nownership and metadata for all the software in your ecosystem (services,\nwebsites, libraries, data pipelines, etc). The catalog is built around the\nconcept of ",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format",children:"metadata YAML files"})," stored together with the\ncode, which are then harvested and visualized in Backstage."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"software-catalog",src:n(665646).Z+"",width:"2354",height:"1427"})}),"\n",(0,a.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,a.jsx)(t.p,{children:"Backstage and the Backstage Software Catalog make it easy for one team to manage\n10 services \u2014 and makes it possible for your company to manage thousands of\nthem."}),"\n",(0,a.jsx)(t.p,{children:"More specifically, the Software Catalog enables two main use-cases:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Helping teams manage and maintain the software they own. Teams get a uniform\nview of all their software; services, libraries, websites, ML models \u2014 you\nname it, Backstage knows all about it."}),"\n",(0,a.jsx)(t.li,{children:"Makes all the software in your company, and who owns it, discoverable. No\nmore orphan software hiding in the dark corners of your software ecosystem."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsxs)(t.p,{children:["The Software Catalog is available to browse at ",(0,a.jsx)(t.code,{children:"/catalog"}),". If you've followed\n",(0,a.jsx)(t.a,{href:"../../getting-started",children:"Getting Started with Backstage"}),", you should be able to\nbrowse the catalog at ",(0,a.jsx)(t.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"screenshot of software catalog",src:n(53176).Z+"",width:"1552",height:"989"})}),"\n",(0,a.jsx)(t.h2,{id:"adding-components-to-the-catalog",children:"Adding components to the catalog"}),"\n",(0,a.jsxs)(t.p,{children:["The source of truth for the components in your software catalog are ",(0,a.jsx)(t.a,{href:"descriptor-format.md",children:"metadata\nYAML files"})," stored in source control (GitHub, GitHub\nEnterprise, GitLab, ...). Repositories can include one or multiple metadata\nfiles. Usually the metadata file is located in the repository root. This is not\na formal requirement & metadata files can be placed anywhere in the repository."]}),"\n",(0,a.jsx)(t.p,{children:"There are 3 ways to add components to the catalog:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Manually register components"}),"\n",(0,a.jsx)(t.li,{children:"Creating new components through Backstage"}),"\n",(0,a.jsxs)(t.li,{children:["Integrating with an ",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/external-integrations",children:"external source"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"manually-register-components",children:"Manually register components"}),"\n",(0,a.jsxs)(t.p,{children:["Users can register new components by going to ",(0,a.jsx)(t.code,{children:"/create"})," and clicking the\n",(0,a.jsx)(t.strong,{children:"REGISTER EXISTING COMPONENT"})," button:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"screenshot of manually register existing component",src:n(553848).Z+"",width:"1486",height:"484"})}),"\n",(0,a.jsx)(t.p,{children:"Backstage expects the full URL to the YAML in your source control. Example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/components/artist-lookup-component.yaml\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["More examples can be found\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-model/examples",children:"here"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"screenshot of creating new components",src:n(356221).Z+"",width:"1916",height:"741"})}),"\n",(0,a.jsx)(t.p,{children:"It is important to note that any kind of software can be registered in\nBackstage. Even if the software is not maintained by your company (SaaS\noffering, for example) it is still useful to create components for tracking\nownership."}),"\n",(0,a.jsx)(t.h3,{id:"creating-new-components-through-backstage",children:"Creating new components through Backstage"}),"\n",(0,a.jsxs)(t.p,{children:["All software created through the\n",(0,a.jsx)(t.a,{href:"/docs/features/software-templates/",children:"Backstage Software Templates"})," are automatically\nregistered in the catalog."]}),"\n",(0,a.jsx)(t.h3,{id:"static-catalog-configuration",children:"Static catalog configuration"}),"\n",(0,a.jsxs)(t.p,{children:["In addition to manually registering components, it is also possible to register\ncomponents through ",(0,a.jsx)(t.a,{href:"/docs/conf/",children:"static configuration"}),". For example, the\nabove example can be added using the following configuration:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: url\n      target: https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/components/artist-lookup-component.yaml\n"})}),"\n",(0,a.jsxs)(t.p,{children:["More information about catalog configuration can be found\n",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/configuration",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"updating-component-metadata",children:"Updating component metadata"}),"\n",(0,a.jsx)(t.p,{children:"Teams owning the components are responsible for maintaining the metadata about\nthem, and do so using their normal Git workflow."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"screenshot of updating component metadata",src:n(10704).Z+"",width:"713",height:"302"})}),"\n",(0,a.jsx)(t.p,{children:"Once the change has been merged, Backstage will automatically show the updated\nmetadata in the software catalog after a short while."}),"\n",(0,a.jsx)(t.h2,{id:"finding-software-in-the-catalog",children:"Finding software in the catalog"}),"\n",(0,a.jsxs)(t.p,{children:["By default the software catalog shows components owned by the team of the logged\nin user. But you can also switch to ",(0,a.jsx)(t.em,{children:"All"})," to see all the components across your\ncompany's software ecosystem. Basic inline ",(0,a.jsx)(t.em,{children:"search"})," and ",(0,a.jsx)(t.em,{children:"column filtering"})," makes\nit easy to browse a big set of components."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"screenshot of finding software in the catalog",src:n(612393).Z+"",width:"1243",height:"305"})}),"\n",(0,a.jsx)(t.h2,{id:"starring-components",children:"Starring components"}),"\n",(0,a.jsxs)(t.p,{children:["For easy and quick access to components you visit frequently, Backstage supports\n",(0,a.jsx)(t.em,{children:"starring"})," of components:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"screenshot of starred components",src:n(183624).Z+"",width:"1243",height:"318"})}),"\n",(0,a.jsx)(t.h2,{id:"integrated-tooling-through-plugins",children:"Integrated tooling through plugins"}),"\n",(0,a.jsx)(t.p,{children:"The software catalog is a great way to organize the infrastructure tools you use\nto manage the software. This is how Backstage creates one developer portal for\nall your tools. Rather than asking teams to jump between different\ninfrastructure UIs (and incurring additional cognitive overhead each time they\nmake a context switch), most of these tools can be organized around the entities\nin the catalog."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://backstage.io/assets/images/tabs-abfdf72185d3ceb1d92c4237f7f78809.png",alt:"screenshot of tools"})}),"\n",(0,a.jsxs)(t.p,{children:["Your Backstage developer portal can be customized by incorporating\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins",children:"existing open source plugins"}),",\nor by ",(0,a.jsx)(t.a,{href:"/docs/plugins/",children:"building your own"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://backstage.io/blog/2020/06/22/backstage-service-catalog-alpha",children:"[Blog post] Backstage Service Catalog released in alpha"})}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},665646:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/header-93351b4254863212ce2c149a2a5ea388.png"},10704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bsc-edit-7e97cc18ec455a13a185cb295cd6e303.png"},553848:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bsc-register-1-6299a20af4f79a6bdd4a64d927f2ec29.png"},356221:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bsc-register-2-f40631078ba9082e28a84d1cb301818e.png"},612393:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bsc-search-51a9aa0cdb9eb883d2bcf2451bc81362.png"},183624:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bsc-starred-7c2f867de967e254b190aac28e55bd0b.png"},53176:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/software-catalog-home-c6be1611f7b84313d64f3156a9a8bb19.png"},371426:(e,t,n)=>{var a=n(827378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,o={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,a)&&!c.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:l,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}function b(){}function w(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var x=w.prototype=new b;x.constructor=w,p(x,y.prototype),x.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,a){var r,o={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=a;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:n,type:e,key:s,ref:i,props:o,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function B(e,t,r,o,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case a:c=!0}}if(c)return s=s(c=e),e=""===o?"."+R(c,0):o,v(s)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),B(s,t,r,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(c=0,o=""===o?".":o+":",v(e))for(var l=0;l<e.length;l++){var u=o+R(i=e[l],l);c+=B(i,t,r,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=B(i=i.value,t,r,u=o+R(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,n){if(null==e)return e;var a=[],r=0;return B(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},M={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=s,t.PureComponent=w,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,a){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=p({},e.props),o=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=a;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:n,type:e.type,key:o,ref:s,props:r,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var a=n(667294);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);