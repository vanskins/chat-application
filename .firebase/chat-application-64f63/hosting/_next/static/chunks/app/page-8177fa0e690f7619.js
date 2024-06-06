(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3126:function(e,t,a){Promise.resolve().then(a.bind(a,3204))},3204:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var s=a(7437),n=a(2265),l=a(9212),o=a.n(l),c=a(9842),r=a(4572),i=a(7583),d=a.n(i),h=a(8171),m=a(1123),u=a(5236);a(7175);let x={apiKey:a(357).env.GOOGLE_API_KEY,authDomain:"chat-application-64f63.firebaseapp.com",projectId:"chat-application-64f63",storageBucket:"chat-application-64f63.appspot.com",messagingSenderId:"850183137869",appId:"1:850183137869:web:952f736706ab4214bb0a04",measurementId:"G-RBNTKVGQZS"},f=(0,u.ZF)(x),p=(0,c.ad)(f),g={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};function b(){let[e,t]=(0,n.useState)([]),[a,l]=(0,n.useState)(""),[i,u]=(0,n.useState)(!1),[x,f]=(0,n.useState)(""),b=async e=>{e.preventDefault();try{let e=await (0,c.ET)((0,c.hJ)(p,"messages"),{message:x,username:a,createdAt:o()().format()});f(""),console.log("Document written with ID: ",e.id)}catch(e){console.error("Error adding document: ",e)}};(0,n.useEffect)(()=>{let e=(0,c.hJ)(p,"messages"),a=(0,c.cf)(e,e=>{t(e.docs.map(e=>({id:e.id,...e.data()})))});return()=>{a()}},[]),(0,n.useEffect)(()=>{let e=localStorage.getItem("chatToken"),t=localStorage.getItem("chatUsername");if(null===e&&null===t){let e=(0,r.Z)();localStorage.setItem("chatToken",e)}null===t?u(!0):l(t)},[]);let j=async()=>{try{await (0,c.PL)((0,c.hJ)(p,"messages")).then(e=>{let a=e.docs.map(e=>({...e.data(),id:e.id}));t(a)})}catch(e){console.log(e,"ERRROR")}};(0,n.useEffect)(()=>{j()},[]);let[N,w]=(0,n.useState)(!1);return(0,s.jsxs)("div",{className:"container mx-auto grid justify-items-center ",children:[(0,s.jsx)("h1",{className:"text-center text-3xl font-bold pt-20",children:"Chat Application"}),(0,s.jsx)("p",{children:"Created by: Van Alfred"}),(0,s.jsxs)("div",{className:"chat-container w-full p-20",children:[0===a.length&&(0,s.jsx)("button",{className:"text-blue-400 font-bold",onClick:function(){u(!0)},children:"Set username"}),(0,s.jsx)("div",{className:"chat-area overflow-auto h-96 w-full border-2 rounded-lg bg-slate-100",children:e.sort((e,t)=>new Date(e.createdAt)-new Date(t.createdAt)).map((e,t)=>e.username===a?(0,s.jsxs)("div",{className:"p-2 flex flex-col",children:[(0,s.jsxs)("div",{className:"chat-component flex flex-row justify-end",children:[(0,s.jsx)("div",{children:(0,s.jsxs)("p",{className:"text-blue-500 font-bold",children:["You (",e.username,"):"]})}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"font-semibold mx-2",children:e.message})})]}),(0,s.jsx)("div",{className:"mx-2 flex flex-row justify-end",children:(0,s.jsx)("p",{className:"font-normal text-xs",children:o()(e.createdAt).fromNow()})})]},t):(0,s.jsxs)("div",{className:"p-2",children:[(0,s.jsxs)("div",{className:"chat-component flex flex-row",children:[(0,s.jsx)("div",{children:(0,s.jsxs)("p",{className:"text-blue-500 font-bold",children:[e.username,":"]})}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"font-semibold mx-2",children:e.message})})]}),(0,s.jsx)("p",{className:"font-normal text-xs",children:o()(e.createdAt).fromNow()})]},t))}),N&&(0,s.jsx)("div",{className:"z-10 absolute top-0 right-0 p-40",children:(0,s.jsx)(m.Z,{style:{},data:h,onEmojiSelect:e=>{f("".concat(x).concat(e.native))},onClickOutside:()=>w(!1)})}),(0,s.jsxs)("div",{className:"chat buttons pt-2 flex flex-row justify-center",children:[(0,s.jsx)("input",{onChange:e=>{f(e.target.value)},value:x,className:"h-10 w-5/6 bg-slate-200 px-2 border-0 outline-none rounded-l-lg",placeholder:"what's on your mind?"}),(0,s.jsx)("button",{onClick:()=>w(!N),className:"h-10 p-1 w-10 bg-slate-200",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon",fill:"none",viewBox:"0 0 24 24",stroke:"gray",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,s.jsx)("button",{onClick:b,className:"w-1/6 h-10 text-white font-bold rounded-r-lg bg-green-600",children:"Send"})]}),(0,s.jsx)("div",{children:(0,s.jsxs)(d(),{ariaHideApp:!1,isOpen:i,onRequestClose:function(){u(!1)},style:g,contentLabel:"Example Modal",children:[(0,s.jsx)("h1",{className:"text-center font-bold",children:"Welcome to my Chat application"}),(0,s.jsx)("p",{className:"text-center mb-2",children:"Please set your username to proceed."}),(0,s.jsx)("input",{onChange:e=>{l(e.target.value)},className:"h-10 w-5/6 bg-slate-200 px-2 border-0 outline-none rounded-l-lg",placeholder:"username"}),(0,s.jsx)("button",{disabled:0===a.length,onClick:e=>{e.preventDefault(),a.length>0&&(localStorage.setItem("chatUsername",a),u(!1))},className:"w-1/6 h-10 text-white font-bold rounded-r-lg ".concat(0===a.length?"bg-gray-300":"bg-blue-600"),children:"SET"})]})})]})]})}}},function(e){e.O(0,[744,990,10,358,503,971,23,560],function(){return e(e.s=3126)}),_N_E=e.O()}]);