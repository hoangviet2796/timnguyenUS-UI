(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{5434:function(e,t,a){Promise.resolve().then(a.t.bind(a,8173,23)),Promise.resolve().then(a.bind(a,3802)),Promise.resolve().then(a.t.bind(a,5899,23)),Promise.resolve().then(a.t.bind(a,6472,23)),Promise.resolve().then(a.bind(a,4564)),Promise.resolve().then(a.bind(a,9888))},3802:function(e,t,a){"use strict";a.d(t,{default:function(){return w}});var i=a(7437),s=a(7059),r=a(5899),n=a.n(r),l=a(8185),o=a(2265),c=a(4300),d=a(9354),u=a(9733),m=a(4867);let f=o.createContext(null);function p(){let e=o.useContext(f);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let x=o.forwardRef((e,t)=>{let{orientation:a="horizontal",opts:s,setApi:r,plugins:n,className:l,children:u,...m}=e,[p,x]=(0,c.Z)({...s,axis:"horizontal"===a?"x":"y"},n),[h,g]=o.useState(!1),[v,b]=o.useState(!1),N=o.useCallback(e=>{e&&(g(e.canScrollPrev()),b(e.canScrollNext()))},[]),y=o.useCallback(()=>{null==x||x.scrollPrev()},[x]),j=o.useCallback(()=>{null==x||x.scrollNext()},[x]),w=o.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),j())},[y,j]);return o.useEffect(()=>{x&&r&&r(x)},[x,r]),o.useEffect(()=>{if(x)return N(x),x.on("reInit",N),x.on("select",N),()=>{null==x||x.off("select",N)}},[x,N]),(0,i.jsx)(f.Provider,{value:{carouselRef:p,api:x,opts:s,orientation:a||((null==s?void 0:s.axis)==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:j,canScrollPrev:h,canScrollNext:v},children:(0,i.jsx)("div",{ref:t,onKeyDownCapture:w,className:(0,d.cn)("relative",l),role:"region","aria-roledescription":"carousel",...m,children:u})})});x.displayName="Carousel";let h=o.forwardRef((e,t)=>{let{className:a,...s}=e,{carouselRef:r,orientation:n}=p();return(0,i.jsx)("div",{ref:r,className:"overflow-hidden",children:(0,i.jsx)("div",{ref:t,className:(0,d.cn)("flex","horizontal"===n?"-ml-4":"-mt-4 flex-col",a),...s})})});h.displayName="CarouselContent";let g=o.forwardRef((e,t)=>{let{className:a,...s}=e,{orientation:r}=p();return(0,i.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,d.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===r?"pl-4":"pt-4",a),...s})});g.displayName="CarouselItem",o.forwardRef((e,t)=>{let{className:a,variant:s="outline",size:r="icon",...n}=e,{orientation:l,scrollPrev:o,canScrollPrev:c}=p();return(0,i.jsxs)(u.z,{ref:t,variant:s,size:r,className:(0,d.cn)("absolute  h-8 w-8 rounded-full","horizontal"===l?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!c,onClick:o,...n,children:[(0,i.jsx)(m.Y4O,{className:"h-4 w-4"}),(0,i.jsx)("span",{className:"sr-only",children:"Previous slide"})]})}).displayName="CarouselPrevious",o.forwardRef((e,t)=>{let{className:a,variant:s="outline",size:r="icon",...n}=e,{orientation:l,scrollNext:o,canScrollNext:c}=p();return(0,i.jsxs)(u.z,{ref:t,variant:s,size:r,className:(0,d.cn)("absolute h-8 w-8 rounded-full","horizontal"===l?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!c,onClick:o,...n,children:[(0,i.jsx)(m.LZ3,{className:"h-4 w-4"}),(0,i.jsx)("span",{className:"sr-only",children:"Next slide"})]})}).displayName="CarouselNext";var v=a(6648);let b=e=>(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,i.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,i.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,i.jsx)("path",{d:"M11.5245 3.46353C11.6741 3.00287 12.3259 3.00287 12.4755 3.46353L14.1329 8.56434C14.1998 8.77035 14.3918 8.90983 14.6084 8.90983H19.9717C20.4561 8.90983 20.6575 9.52964 20.2656 9.81434L15.9266 12.9668C15.7514 13.0941 15.678 13.3198 15.745 13.5258L17.4023 18.6266C17.552 19.0873 17.0248 19.4704 16.6329 19.1857L12.2939 16.0332C12.1186 15.9059 11.8814 15.9059 11.7061 16.0332L7.3671 19.1857C6.97524 19.4704 6.448 19.0873 6.59768 18.6266L8.25503 13.5258C8.32197 13.3198 8.24864 13.0941 8.07339 12.9668L3.73438 9.81434C3.34253 9.52964 3.54392 8.90983 4.02828 8.90983H9.39159C9.6082 8.90983 9.80018 8.77035 9.86712 8.56434L11.5245 3.46353Z",fill:"#fff82e"})," "]})]});var N=a(8129),y=a.n(N);let j=[{name:"Alex",feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam.",avatar:"/images/employee-1.png"},{name:"David",feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam.",avatar:"/images/employee-2.png"},{name:"James",feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam.",avatar:"/images/employee-3.png"},{name:"Susan",feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam.",avatar:"/images/employee-4.png"},{name:"Carl",feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam.",avatar:"/images/employee-5.png"}];function w(){let e=(0,o.useRef)((0,s.Z)({delay:2e3,stopOnInteraction:!1}));return(0,i.jsx)("div",{className:"".concat(n().mainCover," flex flex-col items-center"),children:(0,i.jsxs)("div",{className:"w-full flex flex-col items-center my-16",children:[(0,i.jsx)("div",{className:"max-w-screen-xl text-4xl font-bold text-center text-white mb-8",children:(0,i.jsx)("h2",{className:"".concat(y().mainColor),children:"Những đ\xe1nh gi\xe1 từ những kh\xe1ch h\xe0ng h\xe0ng đầu của ch\xfang t\xf4i"})}),(0,i.jsx)(x,{opts:{align:"start"},plugins:[e.current],className:"w-full max-w-full",children:(0,i.jsx)(h,{children:j.map((e,t)=>(0,i.jsx)(g,{className:"md:basis-1/2 lg:basis-1/3",children:(0,i.jsx)("div",{className:"p-1",children:(0,i.jsxs)(l.Zb,{className:"shadow-lg flex flex-col items-center",children:[(0,i.jsxs)(l.Ol,{className:"flex items-center",children:[(0,i.jsx)(v.default,{className:"h-full w-auto ml-2 pt-2 pb-2 rounded-full",src:e.avatar,width:70,height:70,alt:"logo",priority:!0}),(0,i.jsx)("h3",{children:e.name}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(b,{}),(0,i.jsx)(b,{}),(0,i.jsx)(b,{}),(0,i.jsx)(b,{}),(0,i.jsx)(b,{})]})]}),(0,i.jsx)(l.aY,{children:(0,i.jsxs)(l.SZ,{className:"text-center ",children:['`"`',e.feedback,'`"`']})})]})})},t))})})]})})}},4564:function(e,t,a){"use strict";a.d(t,{default:function(){return c}});var i=a(7437),s=a(9733),r=a(8185),n=a(6463),l=a(6619),o=a.n(l);function c(){let e=(0,n.useRouter)();return(0,i.jsx)("div",{className:"flex justify-center w-full",children:(0,i.jsxs)(r.Zb,{className:"max-w-screen-xl mx-auto flex justify-center flex-col my-16 shadow-none",children:[(0,i.jsx)(r.Ol,{className:"space-y-1 ",children:(0,i.jsx)(r.ll,{className:"".concat(o().mainColor," text-4xl font-bold text-center mb-3"),children:"Ch\xfang t\xf4i c\xf3 thể gi\xfap bạn"})}),(0,i.jsx)(r.aY,{children:(0,i.jsxs)("div",{className:"space-y-4 flex flex-col items-center",children:[(0,i.jsx)("div",{className:"space-y-2 text-lg font-semibold text-center",children:(0,i.jsx)("h4",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur at, provident cum architecto voluptate quo et maiores odio accusamus. Dolores a adipisci, soluta nostrum aperiam saepe illum earum fugit."})}),(0,i.jsx)(s.z,{type:"button",onClick:()=>e.push("/about"),className:"".concat(o().mainBtn," w-1/3 rounded-full"),children:"Hiểu hơn về ch\xfang t\xf4i"})]})})]})})}},9733:function(e,t,a){"use strict";a.d(t,{z:function(){return c}});var i=a(7437),s=a(2265),r=a(1538),n=a(2218),l=a(9354);let o=(0,n.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:a,variant:s,size:n,asChild:c=!1,...d}=e,u=c?r.g7:"button";return(0,i.jsx)(u,{className:(0,l.cn)(o({variant:s,size:n,className:a})),ref:t,...d})});c.displayName="Button"},8185:function(e,t,a){"use strict";a.d(t,{Ol:function(){return l},SZ:function(){return c},Zb:function(){return n},aY:function(){return d},ll:function(){return o}});var i=a(7437),s=a(2265),r=a(9354);let n=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)("div",{ref:t,className:(0,r.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...s})});n.displayName="Card";let l=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",a),...s})});l.displayName="CardHeader";let o=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)("div",{ref:t,className:(0,r.cn)("font-semibold leading-none tracking-tight",a),...s})});o.displayName="CardTitle";let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)("div",{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",a),...s})});c.displayName="CardDescription";let d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)("div",{ref:t,className:(0,r.cn)("p-6 pt-0",a),...s})});d.displayName="CardContent",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)("div",{ref:t,className:(0,r.cn)("flex items-center p-6 pt-0",a),...s})}).displayName="CardFooter"},9888:function(e,t,a){"use strict";a.d(t,{Select:function(){return o},SelectContent:function(){return p},SelectGroup:function(){return c},SelectItem:function(){return x},SelectTrigger:function(){return u},SelectValue:function(){return d}});var i=a(7437),s=a(2265),r=a(9145),n=a(9354),l=a(4867);let o=r.fC,c=r.ZA,d=r.B4,u=s.forwardRef((e,t)=>{let{className:a,children:s,...o}=e;return(0,i.jsxs)(r.xz,{ref:t,className:(0,n.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...o,children:[s,(0,i.jsx)(r.JO,{asChild:!0,children:(0,i.jsx)(l.v4q,{className:"h-4 w-4 opacity-50"})})]})});u.displayName=r.xz.displayName;let m=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)(r.u_,{ref:t,className:(0,n.cn)("flex cursor-default items-center justify-center py-1",a),...s,children:(0,i.jsx)(l.g8U,{className:"h-4 w-4"})})});m.displayName=r.u_.displayName;let f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)(r.$G,{ref:t,className:(0,n.cn)("flex cursor-default items-center justify-center py-1",a),...s,children:(0,i.jsx)(l.v4q,{className:"h-4 w-4"})})});f.displayName=r.$G.displayName;let p=s.forwardRef((e,t)=>{let{className:a,children:s,position:l="popper",...o}=e;return(0,i.jsx)(r.h_,{children:(0,i.jsxs)(r.VY,{ref:t,className:(0,n.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:l,...o,children:[(0,i.jsx)(m,{}),(0,i.jsx)(r.l_,{className:(0,n.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,i.jsx)(f,{})]})})});p.displayName=r.VY.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)(r.__,{ref:t,className:(0,n.cn)("px-2 py-1.5 text-sm font-semibold",a),...s})}).displayName=r.__.displayName;let x=s.forwardRef((e,t)=>{let{className:a,children:s,...o}=e;return(0,i.jsxs)(r.ck,{ref:t,className:(0,n.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...o,children:[(0,i.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,i.jsx)(r.wU,{children:(0,i.jsx)(l.nQG,{className:"h-4 w-4"})})}),(0,i.jsx)(r.eT,{children:s})]})});x.displayName=r.ck.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,i.jsx)(r.Z0,{ref:t,className:(0,n.cn)("-mx-1 my-1 h-px bg-muted",a),...s})}).displayName=r.Z0.displayName},9354:function(e,t,a){"use strict";a.d(t,{cn:function(){return r}});var i=a(4839),s=a(6164);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,i.W)(t))}},5899:function(e){e.exports={mainCover:"HomePage_mainCover__Sx1yd",present:"HomePage_present__Ly8gg",leftside:"HomePage_leftside__PA5rx",rightside:"HomePage_rightside__RQd6t"}},6472:function(e){e.exports={mainColor:"advise_mainColor__Dnvl4",mainBtn:"advise_mainBtn__k93dt"}},8129:function(e){e.exports={mainColor:"feedback_mainColor__qReWB"}},6619:function(e){e.exports={mainColor:"navigate_mainColor__yfHNb",mainBtn:"navigate_mainBtn__OiV_E"}}},function(e){e.O(0,[224,310,373,384,578,971,23,744],function(){return e(e.s=5434)}),_N_E=e.O()}]);