import{d as p,u as c,$ as d,o as m,b as f,m as h,P as v,v as s,a4 as g,a5 as w,a6 as A,a7 as _,a8 as P,a9 as y,aa as x,ab as $,ac as T,ad as b,Y as C,j as E,z as L,ae as R,af as D,ag as M,ah as k}from"./chunks/framework.qZlbAeHE.js";import{t as u}from"./chunks/theme.unWF-74Z.js";const V=p({__name:"Layout",setup(e){const{isDark:a}=c(),t=()=>"startViewTransition"in document&&window.matchMedia("(prefers-reduced-motion: no-preference)").matches;return d("toggle-appearance",async({clientX:n,clientY:o})=>{if(!t()){a.value=!a.value;return}const i=[`circle(0px at ${n}px ${o}px)`,`circle(${Math.hypot(Math.max(n,innerWidth-n),Math.max(o,innerHeight-o))}px at ${n}px ${o}px)`];await document.startViewTransition(async()=>{a.value=!a.value,await v()}).ready,document.documentElement.animate({clipPath:a.value?i.reverse():i},{duration:300,easing:"ease-in",pseudoElement:`::view-transition-${a.value?"old":"new"}(root)`})}),(n,o)=>(m(),f(h(u).Layout))}}),j={Layout:V,enhanceApp(e){u.enhanceApp(e)}};function l(e){if(e.extends){const a=l(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const r=l(j),O=p({name:"VitePressApp",setup(){const{site:e}=c();return E(()=>{L(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&R(),D(),M(),r.setup&&r.setup(),()=>k(r.Layout)}});async function S(){const e=F(),a=B();a.provide(w,e);const t=A(e.route);return a.provide(_,t),a.component("Content",P),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),r.enhanceApp&&await r.enhanceApp({app:a,router:e,siteData:x}),{app:a,router:e,data:t}}function B(){return $(O)}function F(){let e=s,a;return T(t=>{let n=b(t),o=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),o=C(()=>import(n),__vite__mapDeps([]))),s&&(e=!1),o},r.NotFound)}s&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{g(a.route,t.site),e.mount("#app")})});export{S as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}