"use strict";(self.webpackChunkopenbld_net=self.webpackChunkopenbld_net||[]).push([[425],{6070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(5893),r=n(1151);const i={slug:"prevent-thirdtye-Infostealer",title:"\u2198 Prevent ThirdEye Infostealer",authors:["sysadminkz"],tags:["openbld","prevention","blocking"]},a=void 0,o={permalink:"/blog/prevent-thirdtye-Infostealer",source:"@site/blog/articles/2023/2023-06-30-prevent-thirdtye-Infostealer/index.md",title:"\u2198 Prevent ThirdEye Infostealer",description:"FortiGuard Labs recently came across files that look suspicious, even during a cursory review. Our subsequent investigation confirmed that the files are malicious and revealed there is more to them than meets the eye: they are a previously unseen infostealer we have named \u201cThirdEye\u201d. While this malware is not considered sophisticated, it\u2019s designed to steal various information from compromised machines that can be used as stepping-stones for future attacks.",date:"2023-06-30T00:00:00.000Z",tags:[{label:"openbld",permalink:"/blog/tags/openbld"},{label:"prevention",permalink:"/blog/tags/prevention"},{label:"blocking",permalink:"/blog/tags/blocking"}],readingTime:.86,hasTruncateMarker:!1,authors:[{name:"Yevgeniy Goncharov",title:"Maintainer of OpenBLD.net",url:"https://github.com/m0zgen",imageURL:"https://github.com/m0zgen.png",key:"sysadminkz"}],frontMatter:{slug:"prevent-thirdtye-Infostealer",title:"\u2198 Prevent ThirdEye Infostealer",authors:["sysadminkz"],tags:["openbld","prevention","blocking"]},unlisted:!1,prevItem:{title:"\u2198 Prevent Malicious WinSCP",permalink:"/blog/prevent-winscp-malicious"},nextItem:{title:"\u2198 Prevent Trojanized Super Mario",permalink:"/blog/prevent-trojanized-super-mario"}},l={authorsImageUrls:[void 0]},d=[];function c(e){const t={a:"a",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"FortiGuard Labs recently came across files that look suspicious, even during a cursory review. Our subsequent investigation confirmed that the files are malicious and revealed there is more to them than meets the eye: they are a previously unseen infostealer we have named \u201cThirdEye\u201d. While this malware is not considered sophisticated, it\u2019s designed to steal various information from compromised machines that can be used as stepping-stones for future attacks."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Prevent ThirdEye Infostealer",src:n(8192).Z+"",width:"836",height:"162"})}),"\n",(0,s.jsx)(t.p,{children:"The ThirdEye infostealer has relatively simple functionality. It harvests various system information from compromised machines, such as BIOS and hardware data. It also enumerates files and folders, running processes, and network information. Once the malware is executed, it gathers all this data and sends it to its command-and-control (C2) server hosted at (hxxp://shlalala[.]ru/general/ch3ckState). And unlike most other malware, it does nothing else."}),"\n",(0,s.jsx)(t.p,{children:'One interesting string unique to the ThirdEye infostealer family (from which we derived its name) is "3rd_eye", which it decrypts and uses with another hash value to identify itself to the C2.'}),"\n",(0,s.jsxs)(t.p,{children:["See more details on ",(0,s.jsx)(t.a,{href:"https://www.fortinet.com/blog/threat-research/new-fast-developing-thirdeye-infostealer-pries-open-system-information",children:"FortiGuard Labs"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8192:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/figure-thirdtye-Infostealer-c6b0498037946c06cf02a0051beac1ad.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);