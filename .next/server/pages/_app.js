(()=>{var e={};e.id=888,e.ids=[888],e.modules={8552:(e,r,t)=>{"use strict";t.d(r,{Z:()=>x});var s=t(997),i=t(1664),n=t.n(i),a=t(5675),c=t.n(a),o=t(9831),d=t(8176);function l(){let{cart:e}=(0,d.j)();return s.jsx("header",{children:(0,s.jsxs)("div",{className:"header-content",children:[s.jsx("div",{className:"logo-container",children:(0,s.jsxs)(n(),{href:"/",className:"logo-link",children:[s.jsx(c(),{src:"/logo.jpg",alt:"Zafferano di Sardegna DOP",width:80,height:150}),s.jsx("h1",{children:"Zafferano Vero"})]})}),(0,s.jsxs)(n(),{href:"/basket",className:"cart-icon",children:[s.jsx(o.FeP,{size:24}),e.length>0&&s.jsx("span",{className:"cart-count",children:e.length})]})]})})}function u(){return s.jsx("nav",{children:(0,s.jsxs)("ul",{children:[s.jsx("li",{children:s.jsx(n(),{href:"/",children:"Prodotti"})}),s.jsx("li",{children:s.jsx(n(),{href:"/about",children:"Chi Siamo"})}),s.jsx("li",{children:s.jsx(n(),{href:"/contact",children:"Contatti"})})]})})}function x({children:e}){return(0,s.jsxs)(s.Fragment,{children:[s.jsx(l,{}),s.jsx(u,{}),s.jsx("main",{children:e}),s.jsx("footer",{children:s.jsx("p",{children:"\xa9 2024 Zafferano di Sardegna DOP - Porto Torres. Tutti i diritti riservati."})})]})}},8176:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a,j:()=>c});var s=t(997),i=t(6689);let n=(0,i.createContext)();function a({children:e}){let[r,t]=(0,i.useState)([]);return s.jsx(n.Provider,{value:{cart:r,addToCart:e=>{t(r=>[...r,e])},clearCart:()=>{t([])}},children:e})}function c(){return(0,i.useContext)(n)}},3414:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>l});var i=t(997);t(6764);var n=t(3590);t(8819);var a=t(8552),c=t(8176),o=t(2929),d=e([n]);n=(d.then?(await d)():d)[0];let l=function({Component:e,pageProps:r}){return i.jsx(o.PayPalScriptProvider,{options:{"client-id":"AVCGQdn61GidSSD5HAEYREv2q6S9JfwHyKT0G0XLV0OUBmhC8i8aAQqARFmmCwj_O2Ss8qQ75uHOZqkz"},children:i.jsx(c.Z,{children:(0,i.jsxs)(a.Z,{children:[i.jsx(e,{...r}),i.jsx(n.ToastContainer,{})]})})})};s()}catch(e){s(e)}})},6764:()=>{},2929:e=>{"use strict";e.exports=require("@paypal/react-paypal-js")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3590:e=>{"use strict";e.exports=import("react-toastify")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[117,274],()=>t(3414));module.exports=s})();