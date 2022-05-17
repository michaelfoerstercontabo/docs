"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[3439],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(o),d=r,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},557:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),s=["components"],c={sidebar_position:6},i="Goofys",l={unversionedId:"products/Object-Storage/Tools/goofys",id:"products/Object-Storage/Tools/goofys",title:"Goofys",description:"Goofys is another S3 file system tool for Linux and macOS. It provides the same functionality as s3fs-fuse but with better performance.",source:"@site/docs/products/Object-Storage/Tools/goofys.md",sourceDirName:"products/Object-Storage/Tools",slug:"/products/Object-Storage/Tools/goofys",permalink:"/docs/products/Object-Storage/Tools/goofys",editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/Tools/goofys.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"productSidebar",previous:{title:"Cyberduck",permalink:"/docs/products/Object-Storage/Tools/cyberduck"},next:{title:"s3fs-fuse",permalink:"/docs/products/Object-Storage/Tools/s3fs-fuse"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:2}],f={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"goofys"},"Goofys"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kahing/goofys"},"Goofys")," is another S3 file system tool for Linux and macOS. It provides the same functionality as ",(0,a.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tools/s3fs-fuse"},"s3fs-fuse")," but with better performance."),(0,a.kt)("p",null,"Please follow the installation instruction like described on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kahing/goofys#installation"},"Installation")),(0,a.kt)("p",null,"On Linux systems, make sure package ",(0,a.kt)("inlineCode",{parentName:"p"},"fuse-utils")," is installed and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/kahing/goofys/releases/latest/download/goofys\nsudo install goofys /usr/local/bin/\n")),(0,a.kt)("p",null,"All you will need is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"access_key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secret_key")),(0,a.kt)("li",{parentName:"ul"},"Contabo's S3 URL")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"access_key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"secret_key")," and the S3 URL please check ",(0,a.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/s3-connection-settings"},"here"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Either follow the steps from ",(0,a.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tools/aws-cli"},"aws-cli")," to configure an endpoint in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials")," or create the file manually:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"[default]\naws_access_key_id=82046e8110804a43bf29c1ae426a724d\naws_secret_access_key=82e69bd7a52076c527154297a76c2233\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# create mount point\nmkdir ${HOME}/foo\n# mount bucket foo to ${HOME}/foo\ngoofys --endpoint=\"https://eu2.contabostorage.com\" foo ${HOME}/foo\n\n# adding an fstab entry to mount the bucket automatically at boot time\n# credentials must be present in /root/.aws/credentials\nsudo mkdir /mnt/foo\necho 'goofys#foo /mnt/foo fuse _netdev,allow_other,--file-mode=0666,--dir-mode=0777,--endpoint=eu2.contabostorage.com 0 0' | sudo tee -a /etc/fstab\n")))}d.isMDXComponent=!0}}]);