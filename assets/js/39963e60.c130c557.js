"use strict";(self.webpackChunkopenbld_net=self.webpackChunkopenbld_net||[]).push([[9111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),u=r,h=g["".concat(l,".").concat(u)]||g[u]||d[u]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={slug:"openbld-prevent-post-kz-smishing",title:"Blocking SMiShing in Kazakhstan",authors:["sysadminkz"],tags:["openbld","protection","blocking"]},o=void 0,s={permalink:"/blog/openbld-prevent-post-kz-smishing",source:"@site/blog/2023-05-23-prevent-kz-smishing/index.md",title:"Blocking SMiShing in Kazakhstan",description:"Introduction",date:"2023-05-23T00:00:00.000Z",formattedDate:"May 23, 2023",tags:[{label:"openbld",permalink:"/blog/tags/openbld"},{label:"protection",permalink:"/blog/tags/protection"},{label:"blocking",permalink:"/blog/tags/blocking"}],readingTime:1.105,hasTruncateMarker:!1,authors:[{name:"Yevgeniy Goncharov",title:"Maintainer of OpenBLD.net",url:"https://github.com/m0zgen",imageURL:"https://github.com/m0zgen.png",key:"sysadminkz"}],frontMatter:{slug:"openbld-prevent-post-kz-smishing",title:"Blocking SMiShing in Kazakhstan",authors:["sysadminkz"],tags:["openbld","protection","blocking"]},prevItem:{title:"Prevent MS Encrypted Phishing",permalink:"/blog/prevent-ms-encrypted-message-deliver-phishing"},nextItem:{title:"Blocking Google Ads Spreads",permalink:"/blog/openbld-prevent-google-ads-malware"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"SMiShing Attacks",id:"smishing-attacks",level:2},{value:"Recommendation",id:"recommendation",level:2},{value:"Taking Action",id:"taking-action",level:2}],p={toc:c},g="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'The rise of phishing activities has taken the top spot in attacks targeting end-users and organizations. Among the various forms of phishing attacks, there\'s one known as "SMiShing" attacks, which target users through SMS messages.'),(0,r.kt)("h2",{id:"smishing-attacks"},"SMiShing Attacks"),(0,r.kt)("p",null,"Today, we've noticed a SMiShing campaign in Kazakhstan, where a seemingly innocent link leads to a fake website that mimics the KazPost website, the official postal service of Kazakhstan. Several indicators set this apart:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The sender's country code"),(0,r.kt)("li",{parentName:"ul"},"The target website"),(0,r.kt)("li",{parentName:"ul"},"The fact that the package was never ordered")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SMiShing Attacks",src:n(7962).Z,width:"1170",height:"1211"})),(0,r.kt)("p",null,"The provided link directs users to a phishing page designed to imitate post.kz, the official website of the postal service in Kazakhstan."),(0,r.kt)("h2",{id:"recommendation"},"Recommendation"),(0,r.kt)("p",null,"We strongly advise against responding to such SMS messages. If you have any doubts or concerns, it's best to contact your nearest post office to clarify the details, especially if you did not order a package that coincides with the SMS."),(0,r.kt)("h2",{id:"taking-action"},"Taking Action"),(0,r.kt)("p",null,"Rest assured that we've promptly added this resource to our shared blocklists and locked it within the OpenBLD DNS system. Your online safety is our top priority."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Conclusion:"),"\nIn these times of increasing digital threats, let's remain vigilant and protect ourselves and our online experiences.\nTogether with OpenBLD.net DNS, we can strive for a safer online environment. Peace \u270c\ufe0f"))}d.isMDXComponent=!0},7962:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/post-kz-smishing-f1862d714a78f9f058c9feace3f9409d.jpg"}}]);