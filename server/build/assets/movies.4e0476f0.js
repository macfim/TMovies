import{f as I,j as y,R as k,b as p,r as v,e as S,E as F}from"./index.be792388.js";function O(r,e=[]){const a=Object.assign({},r);for(const o of e)o in a&&delete a[o];return a}function j(r){const{loading:e,src:a,srcSet:o,onLoad:t,onError:n,crossOrigin:i,sizes:g,ignoreFallback:u}=r,[l,f]=v.exports.useState("pending");v.exports.useEffect(()=>{f(a?"loading":"pending")},[a]);const c=v.exports.useRef(),h=v.exports.useCallback(()=>{if(!a)return;d();const s=new Image;s.src=a,i&&(s.crossOrigin=i),o&&(s.srcset=o),g&&(s.sizes=g),e&&(s.loading=e),s.onload=m=>{d(),f("loaded"),t==null||t(m)},s.onerror=m=>{d(),f("failed"),n==null||n(m)},c.current=s},[a,i,o,g,t,n,e]),d=()=>{c.current&&(c.current.onload=null,c.current.onerror=null,c.current=null)};return S(()=>{if(!u)return l==="loading"&&h(),()=>{d()}},[l,h,u]),u?"loaded":l}var L=(r,e)=>r!=="loaded"&&e==="beforeLoadOrError"||r==="failed"&&e==="onError",b=I(function(e,a){const{htmlWidth:o,htmlHeight:t,alt:n,...i}=e;return y("img",{width:o,height:t,ref:a,alt:n,...i})});b.displayName="NativeImage";var R=I(function(e,a){const{fallbackSrc:o,fallback:t,src:n,srcSet:i,align:g,fit:u,loading:l,ignoreFallback:f,crossOrigin:c,fallbackStrategy:h="beforeLoadOrError",referrerPolicy:d,...s}=e,m=o!==void 0||t!==void 0,E=l!=null||f||!m,N=j({...e,ignoreFallback:E}),x=L(N,h),w={ref:a,objectFit:u,objectPosition:g,...E?s:O(s,["onError","onLoad"])};return x?t||k.createElement(p.img,{as:b,className:"chakra-image__placeholder",src:o,...w}):k.createElement(p.img,{as:b,src:n,srcSet:i,crossOrigin:c,loading:l,referrerPolicy:d,className:"chakra-image",...w})});R.displayName="Image";I((r,e)=>k.createElement(p.img,{ref:e,as:b,className:"chakra-image",...r}));const M=async()=>(await F.get("/movies")).data,A=async r=>{const[e,a]=r,o={headers:{Authorization:"Bearer "+a}};return(await F.post("/movies",e,o)).data};export{R as I,A as c,M as g,j as u};
