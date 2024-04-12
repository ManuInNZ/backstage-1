/*! For license information please see 0ab4254b.fe3296c9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[810532],{160590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=n(824246),o=n(511151);const c={id:"architecture",title:"Search Architecture",description:"Documentation on Search Architecture"},a=void 0,i={id:"features/search/architecture",title:"Search Architecture",description:"Documentation on Search Architecture",source:"@site/../docs/features/search/architecture.md",sourceDirName:"features/search",slug:"/features/search/architecture",permalink:"/docs/features/search/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Search Architecture",description:"Documentation on Search Architecture"},sidebar:"docs",previous:{title:"Search Concepts",permalink:"/docs/features/search/concepts"},next:{title:"Search Engines",permalink:"/docs/features/search/search-engines"}},s={},u=[{value:"Tech Stack",id:"tech-stack",level:2}];function l(e){const t={h2:"h2",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Below you can explore the Search Architecture. Our aim with this architecture is\nto support a wide variety of search engines, while providing a simple developer\nexperience for plugin developers, and a good out-of-the-box experience for\nBackstage end-users."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Search Architecture",src:n(869641).Z+"",width:"764",height:"881"})}),"\n",(0,r.jsx)(t.p,{children:"At a base-level, we want to support the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"We aim to enable the capability to search across the entire Backstage\necosystem including, but not limited to, entities in the software catalog.\nSearchable content won't be required to relate directly to the software\ncatalog, but by convention, we may encourage loose relationships using\nwell-known field names or attributes."}),"\n",(0,r.jsx)(t.li,{children:"We aim to enable the capability to deploy Backstage using any search engine,\nby providing an integration and translation layer between the core search\nplugin and search engine specific logic that can be extended for different\nsearch engines. We may also introduce the ability to replace the backend API\nendpoint with a custom endpoint for simpler customization."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"More advanced use-cases we hope to support with this architecture include:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"It should be possible for any plugin to expose new content to search. (e.g.\nentity metadata, documentation from TechDocs)"}),"\n",(0,r.jsx)(t.li,{children:"It should be possible for any plugin to append relevant metadata to existing\ncontent in search. (e.g. location (path) for TechDocs page)"}),"\n",(0,r.jsx)(t.li,{children:"It should be possible to refine search queries (e.g. ranking, scoring, etc.)"}),"\n",(0,r.jsx)(t.li,{children:"It should be possible to customize the search UI"}),"\n",(0,r.jsx)(t.li,{children:"It should be possible to add search functionality to any Backstage plugin or\ndeployment"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Architecture non-goals:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"At this time, we do not intend to directly support event-driven or incremental\nindex management. Instead, we'll be focused on scheduled, bulk index\nmanagement."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"tech-stack",children:"Tech Stack"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Stack"}),(0,r.jsx)(t.th,{children:"Location"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Frontend Plugin"}),(0,r.jsx)(t.td,{children:"@backstage/plugin-search"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Frontend Plugin Library"}),(0,r.jsx)(t.td,{children:"@backstage/plugin-search-react"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Isomorphic Plugin Library"}),(0,r.jsx)(t.td,{children:"@backstage/plugin-search-common"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Backend Plugin"}),(0,r.jsx)(t.td,{children:"@backstage/plugin-search-backend"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Backend Plugin Library"}),(0,r.jsx)(t.td,{children:"@backstage/plugin-search-backend-node"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Backend Plugin Module"}),(0,r.jsx)(t.td,{children:"@backstage/plugin-search-backend-module-elasticsearch"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Backend Plugin Module"}),(0,r.jsx)(t.td,{children:"@backstage/plugin-search-backend-module-pg"})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},869641:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture.drawio-0af92b3bf372766547f7db6c3fcea92c.svg"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,c={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:i.current}}t.Fragment=c,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function m(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||p}function g(){}function x(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=x.prototype=new g;v.constructor=x,y(v,m.prototype),v.isPureReactComponent=!0;var j=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var o,c={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,o)&&!S.hasOwnProperty(o)&&(c[o]=t[o]);var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];c.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:i,props:c,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,c,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===c?"."+R(s,0):c,j(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),P(a,t,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(s=0,c=""===c?".":c+":",j(e))for(var u=0;u<e.length;u++){var l=c+R(i=e[u],u);s+=P(i,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)s+=P(i=i.value,t,o,l=c+R(i,u++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},A={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:A,ReactCurrentOwner:k};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=a,t.PureComponent=x,t.StrictMode=c,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)_.call(t,u)&&!S.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:n,type:e.type,key:c,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(667294);const o={},c=r.createContext(o);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);