"use strict";(self.webpackChunkopenbld_net=self.webpackChunkopenbld_net||[]).push([[1504],{1811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(4848),i=n(8453);const s={slug:"prevent-thirdtye-Infostealer",title:"\u2198 Prevent ThirdEye Infostealer",description:"OpenBLD.net - How to block harvests various system information from compromised machines",authors:["sysadminkz"],tags:["openbld","prevention","blocking"]},o=void 0,a={permalink:"/ru/blog/prevent-thirdtye-Infostealer",source:"@site/blog/articles/2023/2023-06-30-prevent-thirdtye-Infostealer/index.md",title:"\u2198 Prevent ThirdEye Infostealer",description:"OpenBLD.net - How to block harvests various system information from compromised machines",date:"2023-06-30T00:00:00.000Z",tags:[{inline:!0,label:"openbld",permalink:"/ru/blog/tags/openbld"},{inline:!0,label:"prevention",permalink:"/ru/blog/tags/prevention"},{inline:!0,label:"blocking",permalink:"/ru/blog/tags/blocking"}],readingTime:.86,hasTruncateMarker:!1,authors:[{name:"Yevgeniy Goncharov",title:"Maintainer of OpenBLD.net",url:"https://github.com/m0zgen",imageURL:"https://github.com/m0zgen.png",key:"sysadminkz",page:null}],frontMatter:{slug:"prevent-thirdtye-Infostealer",title:"\u2198 Prevent ThirdEye Infostealer",description:"OpenBLD.net - How to block harvests various system information from compromised machines",authors:["sysadminkz"],tags:["openbld","prevention","blocking"]},unlisted:!1,prevItem:{title:"\u2198 Prevent Malicious WinSCP",permalink:"/ru/blog/prevent-winscp-malicious"},nextItem:{title:"\u2198 Prevent Trojanized Super Mario",permalink:"/ru/blog/prevent-trojanized-super-mario"}},l={authorsImageUrls:[void 0]},c=[];function d(e){const t={a:"a",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"FortiGuard Labs recently came across files that look suspicious, even during a cursory review.\nOur subsequent investigation confirmed that the files are malicious and revealed there is more to them\nthan meets the eye: they are a previously unseen infostealer we have named \u201cThirdEye\u201d. While this malware\nis not considered sophisticated, it\u2019s designed to steal various information from compromised machines that\ncan be used as stepping-stones for future attacks."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Prevent ThirdEye Infostealer",src:n(4525).A+"",width:"836",height:"162"})}),"\n",(0,r.jsx)(t.p,{children:"The ThirdEye infostealer has relatively simple functionality. It harvests various system information from\ncompromised machines, such as BIOS and hardware data. It also enumerates files and folders, running processes,\nand network information. Once the malware is executed, it gathers all this data and sends it to its command-and-control\n(C2) server hosted at (hxxp://shlalala[.]ru/general/ch3ckState). And unlike most other malware, it does nothing else."}),"\n",(0,r.jsx)(t.p,{children:'One interesting string unique to the ThirdEye infostealer family (from which we derived its name) is "3rd_eye", which it\ndecrypts and uses with another hash value to identify itself to the C2.'}),"\n",(0,r.jsxs)(t.p,{children:["See more details on ",(0,r.jsx)(t.a,{href:"https://www.fortinet.com/blog/threat-research/new-fast-developing-thirdeye-infostealer-pries-open-system-information",children:"FortiGuard Labs"})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4525:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/figure-thirdtye-Infostealer-c6b0498037946c06cf02a0051beac1ad.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);