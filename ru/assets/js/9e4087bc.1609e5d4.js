"use strict";(self.webpackChunkopenbld_net=self.webpackChunkopenbld_net||[]).push([[3608],{3169:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});r(7294);var s=r(3692),a=r(5999),i=r(1944),n=r(6040),l=r(2503),c=r(5893);function d(e){let{year:t,posts:r}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{as:"h3",id:t,children:t}),(0,c.jsx)("ul",{children:r.map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)(s.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:t}=e;return(0,c.jsx)("section",{className:"margin-vert--lg",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,c.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,c.jsx)(d,{...e})},t)))})})})}function o(e){let{archive:t}=e;const r=(0,a.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,a.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const t=e.reduce(((e,t)=>{const r=t.metadata.date.split("-")[0],s=e.get(r)??[];return e.set(r,[t,...s])}),new Map);return Array.from(t,(e=>{let[t,r]=e;return{year:t,posts:r}}))}(t.blogPosts);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.d,{title:r,description:s}),(0,c.jsxs)(n.Z,{children:[(0,c.jsx)("header",{className:"hero hero--primary",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(l.Z,{as:"h1",className:"hero__title",children:r}),(0,c.jsx)("p",{className:"hero__subtitle",children:s})]})}),(0,c.jsx)("main",{children:d.length>0&&(0,c.jsx)(h,{years:d})})]})]})}}}]);