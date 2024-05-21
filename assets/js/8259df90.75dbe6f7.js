"use strict";(self.webpackChunkopenbld_net=self.webpackChunkopenbld_net||[]).push([[6197],{6607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(5893),s=t(1151);const o={slug:"2024-03-12-openbld-pdp-testing-usage",title:"\u2198 OpenBLD.net PDP Testing Usage Manual",description:"What is PDP and how to use it? Understand the basics of OpenBLD.net Personal DoH Profiling (PDP) and how to use it.",authors:["sysadminkz"],tags:["openbld","pdp","testing","beta","privacy"]},l=void 0,a={permalink:"/blog/2024-03-12-openbld-pdp-testing-usage",source:"@site/blog/openbld-updates/2024/2024-03-12-openbld-pdp-testing-usage.md",title:"\u2198 OpenBLD.net PDP Testing Usage Manual",description:"What is PDP and how to use it? Understand the basics of OpenBLD.net Personal DoH Profiling (PDP) and how to use it.",date:"2024-03-12T00:00:00.000Z",formattedDate:"March 12, 2024",tags:[{label:"openbld",permalink:"/blog/tags/openbld"},{label:"pdp",permalink:"/blog/tags/pdp"},{label:"testing",permalink:"/blog/tags/testing"},{label:"beta",permalink:"/blog/tags/beta"},{label:"privacy",permalink:"/blog/tags/privacy"}],readingTime:2.18,hasTruncateMarker:!1,authors:[{name:"Yevgeniy Goncharov",title:"Maintainer of OpenBLD.net",url:"https://github.com/m0zgen",imageURL:"https://github.com/m0zgen.png",key:"sysadminkz"}],frontMatter:{slug:"2024-03-12-openbld-pdp-testing-usage",title:"\u2198 OpenBLD.net PDP Testing Usage Manual",description:"What is PDP and how to use it? Understand the basics of OpenBLD.net Personal DoH Profiling (PDP) and how to use it.",authors:["sysadminkz"],tags:["openbld","pdp","testing","beta","privacy"]},unlisted:!1,prevItem:{title:"\ud83e\udd1d OpenBLD.net and Veesp.com Cooperation",permalink:"/blog/2024-03-26-openbld-and-veesp-cooperation"},nextItem:{title:"\ud83d\udee1 Integration of OpenBLD.net with URLhaus by abuse.ch",permalink:"/blog/2024-03-11-openbld-abuse-ch-integration"}},r={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Initial usage",id:"initial-usage",level:3},{value:"Customization (Optional)",id:"customization-optional",level:2},{value:"Personalized settings",id:"personalized-settings",level:3},{value:"Usage Conditions",id:"usage-conditions",level:2},{value:"Profile deletion",id:"profile-deletion",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Feedback",id:"feedback",level:3},{value:"Automation",id:"automation",level:3},{value:"Additional Links",id:"additional-links",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OpenBLD.net Personal DoH Profile",src:t(2334).Z+"",width:"1250",height:"460"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["What is PDP and how to use it? This article will help you to understand the basics of OpenBLD.net\n",(0,i.jsxs)(n.strong,{children:["Personal ",(0,i.jsx)(n.em,{children:"DoH"})," Profiling"]})," (PDP) and how to use it."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["More details about PDP you can find ",(0,i.jsx)(n.a,{href:"/blog/2024-02-19-openbld-pdp-beta-join",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"get-started",children:"Get Started"}),"\n",(0,i.jsxs)(n.p,{children:["After ",(0,i.jsx)(n.a,{href:"https://docs.google.com/forms/d/e/1FAIpQLSeIEVFueE1XWHPGy2uL-NVv1ID3jIq3O_kp-q7WFmOS2lUTzw/viewform?usp=sf_link",children:"Joining PDP Beta"}),",\nyou will receive a welcome message from me to a provided contact."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Haven't received? ",(0,i.jsx)(n.a,{href:"/docs/contacts/",children:"Contact"})," me please"]})}),"\n",(0,i.jsx)(n.h3,{id:"initial-usage",children:"Initial usage"}),"\n",(0,i.jsx)(n.p,{children:"After receiving a unique PDP DoH link from me, you can start using the service:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Step 1"}),": Setup your device(s) with OpenBLD.net PDP with provided DNS-over-HTTPS (DoH) links."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Step 2"}),": DoH link should be formatted as ",(0,i.jsx)(n.code,{children:"https://<service name>/dns-query/<your_id>"})," (where ",(0,i.jsx)(n.code,{children:"<service name>"}),"\nADA or RIC platform address, ",(0,i.jsx)(n.code,{children:"<your_id>"})," is your unique identifier)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Step 3"}),": After setup, you can check the service on ",(0,i.jsx)(n.a,{href:"https://www.dnsleaktest.com/",children:"DNS Leak Test"})," and ",(0,i.jsx)(n.a,{href:"https://dnscheck.tools/",children:"Dnscheck.tools"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89\ud83c\udf89\ud83c\udf89 Now you can relax and use the service based on your own personalized settings."}),"\n",(0,i.jsxs)(n.p,{children:["Enjoy the service and provide ",(0,i.jsx)(n.a,{href:"/docs/contacts/",children:"feedback"}),"!"]}),"\n",(0,i.jsx)(n.h2,{id:"customization-optional",children:"Customization (Optional)"}),"\n",(0,i.jsx)(n.h3,{id:"personalized-settings",children:"Personalized settings"}),"\n",(0,i.jsx)(n.p,{children:"Free available settings for customization are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Personal Allow/Block lists (Default: ",(0,i.jsx)(n.a,{href:"https://github.com/m0zgen/my-zbld",children:"my-zbld"})]}),"\n",(0,i.jsx)(n.li,{children:"Change reload list interval (Default: 24 hours (Minimal allowed 3 hours))"}),"\n",(0,i.jsx)(n.li,{children:"Disable/Enable troubleshooting logs (Default: Enabled. Storing: 2 days)"}),"\n",(0,i.jsxs)(n.li,{children:["Switch OpenBLD.net mode to Zero Trust (Default: Blackhole mode (more details ",(0,i.jsx)(n.a,{href:"/blog/openbld-zdns-blackhole-server",children:"here"}),"))"]}),"\n",(0,i.jsx)(n.li,{children:"Create additional PDP DoH links for your family members or different devices (Default: 2 links)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To apply customization you can fill OpenBLD.net PDP Personal Settings ",(0,i.jsx)(n.a,{href:"https://docs.google.com/forms/d/e/1FAIpQLSdkeYLec0THvITXj3foesRU3NnHbJQZ-x8VT91yCXRWx2V4Kg/viewform?usp=sf_link",children:"Form"}),"\nand notify ",(0,i.jsx)(n.a,{href:"/docs/contacts/",children:"me"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Allow lists are still ",(0,i.jsx)(n.strong,{children:"prioritized"})," over blocklists."]}),"\n",(0,i.jsx)(n.li,{children:"You can provide static hosts file if needed."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"usage-conditions",children:"Usage Conditions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Lists or static hosts file should not be more than 100 records."}),"\n",(0,i.jsx)(n.li,{children:"The number of requests should not exceed 100k per day."}),"\n",(0,i.jsxs)(n.li,{children:["Shall comply with the terms of the service use (See ",(0,i.jsx)(n.a,{href:"/docs/overwiew/how-it-works/#limitations",children:"Limitations"})," section)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"profile-deletion",children:"Profile deletion"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scenario 1"}),": Notify ",(0,i.jsx)(n.a,{href:"/docs/contacts/",children:"me"})," if you need to delete the profile."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scenario 2"}),": After 30 days of inactivity, the profile will be automatically deleted."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,i.jsx)(n.h3,{id:"feedback",children:"Feedback"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can provide feedback in any way possible (directly, via ",(0,i.jsx)(n.a,{href:"/docs/contacts/",children:"contacts"}),", etc.)"]}),"\n",(0,i.jsx)(n.li,{children:"Later on, I will contact you and ask to fill out the feedback form."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"automation",children:"Automation"}),"\n",(0,i.jsx)(n.p,{children:"Next step is to automate the process of providing personalized settings and the ability to change them on the go, with:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Telegram bot"}),"\n",(0,i.jsx)(n.li,{children:"Web UI"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-links",children:"Additional Links"}),"\n",(0,i.jsx)(n.p,{children:"How to setup OpenBLD.net on your favourite device(s):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/category/setup-mobile-devices/",children:"Mobile Devices"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/category/setup-browsers/",children:"Browsers"})}),"\n",(0,i.jsxs)(n.li,{children:["Or you can start from here - ",(0,i.jsx)(n.a,{href:"/docs/category/get-started/",children:"Get Started"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/contacts/",children:"Contacts"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Stay tuned in for more updates and features in Telegram OpenBLD.net ",(0,i.jsx)(n.a,{href:"https://t.me/openbld",children:"Channel"}),"! \ud83d\ude80"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2334:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/openbld_pdp_testing_usage-8f8934bd2e3dec9775d23c99057e4476.jpeg"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var i=t(7294);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);