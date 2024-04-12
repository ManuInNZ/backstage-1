/*! For license information please see 1d85839e.4f6b08b8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[645861],{804180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(824246),r=n(511151);const s={id:"cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage."},c=void 0,a={id:"features/techdocs/cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage.",source:"@site/../docs/features/techdocs/cli.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/cli",permalink:"/docs/features/techdocs/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/cli.md",tags:[],version:"current",frontMatter:{id:"cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage."},sidebar:"docs",previous:{title:"Configuring CI/CD to generate and publish TechDocs sites",permalink:"/docs/features/techdocs/configuring-ci-cd"},next:{title:"How-To guides",permalink:"/docs/features/techdocs/how-to-guides"}},i={},l=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Preview TechDocs site locally in a Backstage like environment",id:"preview-techdocs-site-locally-in-a-backstage-like-environment",level:3},{value:"Generate TechDocs site from a documentation project",id:"generate-techdocs-site-from-a-documentation-project",level:3},{value:"Publish generated TechDocs sites",id:"publish-generated-techdocs-sites",level:3},{value:"Publishing from behind a proxy",id:"publishing-from-behind-a-proxy",level:4},{value:"Migrate content for case-insensitive access",id:"migrate-content-for-case-insensitive-access",level:3},{value:"Authentication",id:"authentication",level:4},{value:"Development",id:"development",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Utility command line interface for managing TechDocs sites in\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"Backstage"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/",children:"https://backstage.io/docs/features/techdocs/"})}),"\n",(0,o.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Supports local development/preview of a TechDocs site in a Backstage app."}),"\n",(0,o.jsx)(t.li,{children:"Supports generation and publishing of a documentation site in a CI/CD\nworkflow."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli --help\nUsage: techdocs-cli [options] [command]\n\nOptions:\n  -V, --version             output the version number\n  -h, --help                display help for command\n\nCommands:\n  generate|build [options]  Generate TechDocs documentation site using mkdocs.\n  publish [options]         Publish generated TechDocs site to an external storage AWS S3,\n                            Google GCS, etc.\n  serve:mkdocs [options]    Serve a documentation project locally using mkdocs serve.\n  serve [options]           Serve a documentation project locally in a Backstage app-like\n                            environment\n  help [command]            display help for command\n"})}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(t.p,{children:["You can always use ",(0,o.jsx)(t.a,{href:"https://github.com/npm/npx",children:(0,o.jsx)(t.code,{children:"npx"})})," to run the latest version\nof ",(0,o.jsx)(t.code,{children:"techdocs-cli"})," -"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx @techdocs/cli [command]\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Or you can install it using ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@techdocs/cli",children:"npm"})," -"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install -g @techdocs/cli\ntechdocs-cli [command]\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.h3,{id:"preview-techdocs-site-locally-in-a-backstage-like-environment",children:"Preview TechDocs site locally in a Backstage like environment"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli serve\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"A preview of techdocs-cli serve command",src:n(398904).Z+"",width:"1918",height:"1136"})}),"\n",(0,o.jsxs)(t.p,{children:["By default, Docker and\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/techdocs-container",children:"techdocs-container"})," is used to\nmake sure all the dependencies are installed. However, Docker can be disabled\nwith ",(0,o.jsx)(t.code,{children:"--no-docker"})," flag."]}),"\n",(0,o.jsx)(t.p,{children:"The command starts two local servers - an MkDocs preview server on port 8000 and\na Backstage app server on port 3000. The Backstage app has a custom TechDocs API\nimplementation, which uses the MkDocs preview server as a proxy to fetch the\ngenerated documentation files and assets."}),"\n",(0,o.jsxs)(t.p,{children:["Backstage instances might differ from the provided preview app in appearance and\nbehavior. To preview documentation with a different app, use\n",(0,o.jsx)(t.code,{children:"--preview-app-bundle-path"})," with a path to the bundle of the app to use instead.\nTypically, a ",(0,o.jsx)(t.code,{children:"dist"})," or ",(0,o.jsx)(t.code,{children:"build"})," directory."]}),"\n",(0,o.jsxs)(t.p,{children:["NOTE: When using a custom ",(0,o.jsx)(t.code,{children:"techdocs"})," docker image, make sure the entry point is\nalso ",(0,o.jsx)(t.code,{children:'ENTRYPOINT ["mkdocs"]'})," or override with ",(0,o.jsx)(t.code,{children:"--docker-entrypoint"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Command reference:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'Usage: techdocs-cli serve [options]\n\nServe a documentation project locally in a Backstage app-like environment\n\nOptions:\n  -i, --docker-image <DOCKER_IMAGE>           The mkdocs docker container to use (default: "spotify/techdocs")\n  --docker-entrypoint <DOCKER_ENTRYPOINT>     Override the image entrypoint\n  --docker-option <DOCKER_OPTION...>          Extra options to pass to the docker run command, e.g. "--add-host=internal.host:192.168.11.12"\n                                              (can be added multiple times).\n  --no-docker                                 Do not use Docker, use MkDocs executable in current user environment.\n  --mkdocs-parameter-clean                    Pass "--clean" parameter to mkdocs server running in containerized environment.\n  --mkdocs-parameter-dirtyreload              Pass "--dirtyreload" parameter to mkdocs server running in containerized environment.\n  --mkdocs-parameter-strict                   Pass "--strict" parameter to mkdocs server running in containerized environment.\n  --mkdocs-port <PORT>                        Port for MkDocs server to use (default: "8000")\n  --preview-app-bundle-path <PATH_TO_BUNDLE>  Preview documentation using a web app other than the included one.\n  --preview-app-port <PORT>                   Port where the preview will be served.\n                                              Can only be used with "--preview-app-bundle-path". (default: "3000")\n  -c, --mkdocs-config-file-name <FILENAME>    Yaml file to use as config by mkdocs.\n  -v --verbose                                Enable verbose output. (default: false)\n  -h, --help                                  display help for command\n'})}),"\n",(0,o.jsx)(t.h3,{id:"generate-techdocs-site-from-a-documentation-project",children:"Generate TechDocs site from a documentation project"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli generate\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Alias: ",(0,o.jsx)(t.code,{children:"techdocs-cli build"})]}),"\n",(0,o.jsxs)(t.p,{children:["The generate command uses the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-node",children:(0,o.jsx)(t.code,{children:"@backstage/plugin-techdocs-node"})}),"\npackage from Backstage for consistency. A Backstage app can also generate and\npublish TechDocs sites if ",(0,o.jsx)(t.code,{children:"techdocs.builder"})," is set to ",(0,o.jsx)(t.code,{children:"'local'"})," in\n",(0,o.jsx)(t.code,{children:"app-config.yaml"}),". See\n",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/configuration",children:"configuration reference"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["By default, this command uses Docker and\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/techdocs-container",children:"techdocs-container"})," to make\nsure all the dependencies are installed. But it can be disabled using\n",(0,o.jsx)(t.code,{children:"--no-docker"})," flag."]}),"\n",(0,o.jsx)(t.p,{children:"Command reference:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'techdocs-cli generate --help\nUsage: techdocs-cli generate|build [options]\n\nGenerate TechDocs documentation site using MkDocs.\n\nOptions:\n  --source-dir <PATH>             Source directory containing mkdocs.yml and docs/ directory. (default: ".")\n  --output-dir <PATH>             Output directory containing generated TechDocs site. (default: "./site/")\n  --docker-image <DOCKER_IMAGE>   The mkdocs docker container to use (default: "spotify/techdocs:v1.0.3")\n  --no-pull                       Do not pull the latest docker image\n  --no-docker                     Do not use Docker, use MkDocs executable and plugins in current user environment.\n  --techdocs-ref <HOST_TYPE:URL>  The repository hosting documentation source files e.g.\n                                  url:https://ghe.mycompany.net.com/org/repo.\n                                  This value is same as the backstage.io/techdocs-ref annotation of the corresponding\n                                  Backstage entity.\n                                  It is completely fine to skip this as it is only being used to set repo_url in mkdocs.yml\n                                  if not found.\n  --etag <ETAG>                   A unique identifier for the prepared tree e.g. commit SHA. If provided it will be stored\n                                  in techdocs_metadata.json.\n  --defaultPlugin <PLUGIN_NAME>   Plugins which should be added automatically to the mkdocs.yaml file. (default: [])\n  --omitTechdocsCoreMkdocsPlugin  An option to disable automatic addition of techdocs-core plugin to the mkdocs.yaml files.\n                                  Defaults to false, which means that the techdocs-core plugin is always added to the mkdocs file.\n  --legacyCopyReadmeMdToIndexMd   Attempt to ensure an index.md exists falling back to using <docs-dir>/README.md or README.md\n                                  in case a default <docs-dir>/index.md is not provided. (default: false)\n  --runAsDefaultUser              Bypass setting the container user as the same user and group id as host for Linux and MacOS (default: false)\n  -v --verbose                    Enable verbose output. (default: false)\n  -h, --help                      display help for command\n'})}),"\n",(0,o.jsx)(t.h3,{id:"publish-generated-techdocs-sites",children:"Publish generated TechDocs sites"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli publish --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --entity <namespace/kind/name>\n"})}),"\n",(0,o.jsxs)(t.p,{children:["After generating a TechDocs site using ",(0,o.jsx)(t.code,{children:"techdocs-cli generate"}),", use the publish\ncommand to upload the static generated files on a cloud storage (AWS/GCS) bucket\nor (Azure) container which your Backstage app can read from."]}),"\n",(0,o.jsxs)(t.p,{children:["The value for ",(0,o.jsx)(t.code,{children:"--entity"})," must be the Backstage entity which the generated\nTechDocs site belongs to. You can find the values in your Entity's\n",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})," file. If namespace is missing in the ",(0,o.jsx)(t.code,{children:"catalog-info.yaml"}),",\nuse ",(0,o.jsx)(t.code,{children:"default"}),". The directory structure used in the storage bucket is\n",(0,o.jsx)(t.code,{children:"namespace/kind/name/<files>"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that the values are case-sensitive. An example for ",(0,o.jsx)(t.code,{children:"--entity"})," is\n",(0,o.jsx)(t.code,{children:"default/Component/<entityName>"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Command reference:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'Usage: techdocs-cli publish [options]\n\nPublish generated TechDocs site to an external storage AWS S3, Google GCS, etc.\n\nOptions:\n  --publisher-type <TYPE>                                       (Required always) awsS3 | googleGcs | azureBlobStorage | openStackSwift - same as techdocs.publisher.type in Backstage app-config.yaml\n  --storage-name <BUCKET/CONTAINER NAME>                        (Required always) In case of AWS/GCS, use the bucket name. In case of Azure, use container name. Same as\n                                                                techdocs.publisher.[TYPE].bucketName\n  --entity <NAMESPACE/KIND/NAME>                                (Required always) Entity uid separated by / in namespace/kind/name order (case-sensitive). Example: default/Component/myEntity\n  --legacyUseCaseSensitiveTripletPaths                          Publishes objects with cased entity triplet prefix when set (e.g. namespace/Kind/name). Only use if your TechDocs backend is configured\n                                                                the same way. (default: false)\n  --azureAccountName <AZURE ACCOUNT NAME>                       (Required for Azure) specify when --publisher-type azureBlobStorage\n  --azureAccountKey <AZURE ACCOUNT KEY>                         Azure Storage Account key to use for authentication. If not specified, you must set AZURE_TENANT_ID, AZURE_CLIENT_ID &\n                                                                AZURE_CLIENT_SECRET as environment variables.\n  --awsRoleArn <AWS ROLE ARN>                                   Optional AWS ARN of role to be assumed.\n  --awsEndpoint <AWS ENDPOINT>                                  Optional AWS endpoint to send requests to.\n  --awsProxy <HTTPS Proxy>                                      Optional Proxy to use for AWS requests.\n  --awsS3sse <AWS SSE>                                          Optional AWS S3 Server Side Encryption.\n  --awsS3ForcePathStyle                                         Optional AWS S3 option to force path style.\n  --awsBucketRootPath <AWS BUCKET ROOT PATH>                    Optional sub-directory to store files in Amazon S3\n  --osCredentialId <OPENSTACK SWIFT APPLICATION CREDENTIAL ID>  (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osSecret <OPENSTACK SWIFT APPLICATION CREDENTIAL SECRET>    (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osAuthUrl <OPENSTACK SWIFT AUTHURL>                         (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osSwiftUrl <OPENSTACK SWIFT SWIFTURL>                       (Required for OpenStack) specify when --publisher-type openStackSwift\n  --gcsBucketRootPath <GCS BUCKET ROOT PATH>                    Optional sub-directory to store files in Google cloud storage\n  --directory <PATH>                                            Path of the directory containing generated files to publish (default: "./site/")\n  -h, --help                                                    display help for command\n'})}),"\n",(0,o.jsx)(t.h4,{id:"publishing-from-behind-a-proxy",children:"Publishing from behind a proxy"}),"\n",(0,o.jsxs)(t.p,{children:["For users attempting to publish TechDocs content behind a proxy, the TechDocs CLI leverages ",(0,o.jsx)(t.code,{children:"global-agent"})," to navigate the proxy to successfully connect to that location. To enable ",(0,o.jsx)(t.code,{children:"global-agent"}),", the following variables need to be set prior to running the techdocs-cli command:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"export GLOBAL_AGENT_HTTPS_PROXY=${HTTP_PROXY}\nexport GLOBAL_AGENT_NO_PROXY=${NO_PROXY}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"migrate-content-for-case-insensitive-access",children:"Migrate content for case-insensitive access"}),"\n",(0,o.jsxs)(t.p,{children:["Prior to the beta version of TechDocs (",(0,o.jsx)(t.code,{children:"v[0.11.0]"}),"), TechDocs were stored in\nobject storage using a case-sensitive entity triplet (e.g.\n",(0,o.jsx)(t.code,{children:"default/API/name/index.html"}),"). This resulted in a limitation where that exact\ncase was required in the Backstage URL in order to read/render TechDocs content.\nAs of ",(0,o.jsx)(t.code,{children:"v[0.11.0]"})," of the TechDocs plugin, any case is allowed in the URL (e.g.\n",(0,o.jsx)(t.code,{children:"default/api/name"}),"), matching the behavior of the Catalog plugin."]}),"\n",(0,o.jsxs)(t.p,{children:["Backstage instances created with TechDocs ",(0,o.jsx)(t.code,{children:"v[0.11.0]"})," or later do not need this\ncommand. However, when upgrading to this version from an older version of\nTechDocs, the ",(0,o.jsx)(t.code,{children:"migrate"})," command can be used prior to deployment to ensure docs\nremain accessible without having to rebuild all docs."]}),"\n",(0,o.jsxs)(t.p,{children:["Prior to upgrading to ",(0,o.jsx)(t.code,{children:"v[0.11.0]"})," or greater, run this command to copy all\nassets to their lower-case triplet equivalents like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli migrate --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --verbose\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Once migrated and the upgraded version of the Backstage plugin has been\ndeployed, you can clean up the legacy, case-sensitive triplet files by\nre-running the command with the ",(0,o.jsx)(t.code,{children:"--removeOriginal"})," flag passed, which ",(0,o.jsx)(t.em,{children:"moves"}),"\n(rather than copies) the files. Note: this deletes files and is therefore a\ndestructive operation that should performed with caution."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"techdocs-cli migrate --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --removeOriginal --verbose\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Afterward, update your TechDocs CLI to ",(0,o.jsx)(t.code,{children:"v[0.7.0]"})," to ensure further publishing\nhappens using a lower-case entity triplet."]}),"\n",(0,o.jsxs)(t.p,{children:["Note: arguments for this command largely match those of the ",(0,o.jsx)(t.code,{children:"publish"})," command,\ndepending on your chosen storage provider. Run ",(0,o.jsx)(t.code,{children:"techdocs-cli migrate --help"})," for\ndetails."]}),"\n",(0,o.jsx)(t.h4,{id:"authentication",children:"Authentication"}),"\n",(0,o.jsxs)(t.p,{children:["You need to make sure that your environment is able to authenticate with the\ntarget cloud provider. ",(0,o.jsx)(t.code,{children:"techdocs-cli"})," uses the official Node.js clients provided\nby AWS (v3), Google Cloud and Azure. You can authenticate using environment\nvariables and/or by other means (",(0,o.jsx)(t.code,{children:"~/.aws/credentials"}),", ",(0,o.jsx)(t.code,{children:"~/.config/gcloud"})," etc.)"]}),"\n",(0,o.jsx)(t.p,{children:"Refer to the Authentication section of the following documentation depending\nupon your cloud storage provider -"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-google-gcs-bucket-with-techdocs",children:"Google Cloud Storage"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-aws-s3-bucket-with-techdocs",children:"AWS S3"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-azure-blob-storage-container-with-techdocs",children:"Azure Blob Storage"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"development",children:"Development"}),"\n",(0,o.jsxs)(t.p,{children:["You are welcome to contribute to TechDocs CLI to improve it and support new\nfeatures! See the project\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/main/src/packages/techdocs-cli/README.md",children:"README"}),"\nfor more information."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},398904:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/techdocs-cli-serve-preview-aa54f38162b18cee2747ce73121b0588.png"},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,s={},l=null,d=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,o)&&!i.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var x=v.prototype=new b;x.constructor=v,m(x,y.prototype),x.isPureReactComponent=!0;var k=Array.isArray,j=Object.prototype.hasOwnProperty,S={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,o){var r,s={},c=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,r)&&!w.hasOwnProperty(r)&&(s[r]=t[r]);var i=arguments.length-2;if(1===i)s.children=o;else if(1<i){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===s[r]&&(s[r]=i[r]);return{$$typeof:n,type:e,key:c,ref:a,props:s,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var A=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,s,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case o:i=!0}}if(i)return c=c(i=e),e=""===s?"."+_(i,0):s,k(c)?(r="",null!=e&&(r=e.replace(A,"$&/")+"/"),C(c,t,r,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(A,"$&/")+"/")+e)),t.push(c)),1;if(i=0,s=""===s?".":s+":",k(e))for(var l=0;l<e.length;l++){var d=s+_(a=e[l],l);i+=C(a,t,r,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(a=e.next()).done;)i+=C(a=a.value,t,r,d=s+_(a,l++),c);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function D(e,t,n){if(null==e)return e;var o=[],r=0;return C(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},R={transition:null},N={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:R,ReactCurrentOwner:S};t.Children={map:D,forEach:function(e,t,n){D(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=c,t.PureComponent=v,t.StrictMode=s,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),s=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=S.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)j.call(t,l)&&!w.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==i?i[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){i=Array(l);for(var d=0;d<l;d++)i[d]=arguments[d+2];r.children=i}return{$$typeof:n,type:e.type,key:s,ref:c,props:r,_owner:a}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var o=n(667294);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);