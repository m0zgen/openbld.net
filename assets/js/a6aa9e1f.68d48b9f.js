"use strict";(self.webpackChunkopenbld_net=self.webpackChunkopenbld_net||[]).push([[3089],{4351:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(7294);var a=n(512),i=n(2263),r=n(8264),o=n(5281),s=n(1460),l=n(9703),d=n(197),c=n(9985),g=n(5742),p=n(136),u=n(5893);function m(e){const t=(0,p.C)(e);return(0,u.jsx)(g.Z,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.Z)(),{blogDescription:a,blogTitle:o,permalink:s}=t,l="/"===s?n:o;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.d,{title:l,description:a}),(0,u.jsx)(d.Z,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:n,sidebar:a}=e;return(0,u.jsxs)(s.Z,{sidebar:a,children:[(0,u.jsx)(c.Z,{items:n}),(0,u.jsx)(l.Z,{metadata:t})]})}function f(e){return(0,u.jsxs)(r.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage),children:[(0,u.jsx)(h,{...e}),(0,u.jsx)(m,{...e}),(0,u.jsx)(b,{...e})]})}},9703:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(5999),i=n(2244),r=n(5893);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.Z,{permalink:n,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.Z,{permalink:o,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(9460),i=n(3665),r=n(5893);function o(e){let{items:t,component:n=i.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.n,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},136:(e,t,n)=>{n.d(t,{C:()=>c,i:()=>g});var a=n(4996),i=n(2263),r=n(5102);var o=n(9460);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(p);return{author:1===t.length?t[0]:t}}function d(e,t,n){return e?{image:u({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function c(e){const{siteConfig:t}=(0,i.Z)(),{withBaseUrl:n}=(0,a.C)(),{metadata:{blogDescription:r,blogTitle:o,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:r}=e,{date:o,title:c,description:g,lastUpdatedAt:p}=r,u=a.image??i.image,m=i.keywords??[],h=`${t.url}${r.permalink}`,b=p?s(p):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...d(u,n,c),...m?{keywords:m}:{}}}(e.content,t,n)))}}function g(){const e=function(){const e=(0,r.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,o.C)(),{siteConfig:c}=(0,i.Z)(),{withBaseUrl:g}=(0,a.C)(),{date:p,title:u,description:m,frontMatter:h,lastUpdatedAt:b}=n,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,k=`${c.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:u,name:u,description:m,datePublished:p,...j?{dateModified:j}:{},...l(n.authors),...d(f,g,u),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function p(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function u(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}}}]);