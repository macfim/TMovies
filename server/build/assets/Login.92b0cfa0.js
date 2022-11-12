import{E as k,r as L,v as y,t as D,j as e,d as t,Z as j}from"./index.e562713a.js";import{a as q,F as l,b as m,I as p}from"./useMutation.esm.785854c4.js";import{C as B,B as h,S as F,b as T,T as g,D as H}from"./utils.esm.3976cbac.js";import{B as f}from"./index.esm.8ad5df70.js";const I=async a=>(await k.post("/login",a)).data,b={username:"",password:""},W=({setToken:a,setUserUsername:c})=>{const[o,u]=L.exports.useState(b),v=y(),i=D(),{mutate:C,isLoading:w}=q({mutationFn:I,onSuccess:s=>{a(s.token),c(s.username),i({title:"Account Logged.",description:`Welcome back "${s.username}"`,status:"success",duration:9e3,isClosable:!0,position:"top-left"}),v("/"),u(b)},onError:s=>{const r={title:"Something Wrong",status:"error",duration:9e3,isClosable:!0,position:"top-left"};if(s.response.data.error)return i({...r,description:s.response.data.error});i({...r,description:s.message})}}),x=s=>{s.preventDefault();const{username:r,password:n}=o;if(!r||!n)return alert("username or/and password are blank");C({username:r,password:n})},d=s=>{const r=s.target.name,n=s.target.value;u(S=>({...S,[r]:n}))};return e(B,{minH:"100vh",children:e("form",{onSubmit:x,children:e(h,{px:"1rem",py:"1.5rem",w:"23rem",children:t(F,{spacing:"1rem",children:[t(h,{pb:"1rem",children:[e(T,{as:"h2",size:"lg",children:"Here you can Login"}),e(g,{children:"Let's join us"})]}),t(l,{isRequired:!0,children:[e(m,{children:"Username"}),e(p,{name:"username",value:o.username,onChange:d,required:!0})]}),t(l,{isRequired:!0,children:[e(m,{children:"Password"}),e(p,{name:"password",type:"password",value:o.password,onChange:d,required:!0})]}),e(f,{type:"submit",colorScheme:"linkedin",isLoading:w,loadingText:"logging...",children:"LOGIN"}),e(H,{}),t(g,{children:[e("span",{style:{opacity:"0.5"},children:"Don't have an account ?"})," ",e(f,{colorScheme:"linkedin",variant:"link",children:e(j,{to:"/auth/register",children:"Register"})})]})]})})})})};export{W as default};