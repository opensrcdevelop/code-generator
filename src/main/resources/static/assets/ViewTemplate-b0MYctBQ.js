import{j as ee,r as s,v as te,f as ae,C as S,H as t,I as o,s as m,G as a,q as h,R as j,J as T,k as D,Q as oe,P as ne,M as V,K as le,L as se,N as g,_ as ce}from"./index-D44JGiXO.js";import{e as re,f as ie,h as ue,i as pe}from"./template-BVyPx4Yq.js";import{u as de}from"./template-xf4Fmqr-.js";import{a as _e,u as me}from"./main-BXnMjZ8k.js";import"./request-AUxrZ8Bw.js";const he=f=>(le("data-v-c7971d3d"),f=f(),se(),f),fe=he(()=>h("span",{class:"template-title"},"模板",-1)),ve={class:"template-search-container"},ge={class:"template-info-container"},ye={key:0},be=["onDblclick"],Pe=ee({__name:"ViewTemplate",setup(f){const c=s([]),x=de(),y=_e(),p=s(!1),i=s(""),b=s(""),E=s(1),B=s(10),P=s(""),C=s();te(()=>{const e=me();i.value=e.query.projId,b.value=e.query.projName,E.value=e.query.current,B.value=e.query.pageSize,v()});const q=()=>{y.push({path:"/ui/template",query:{current:E.value,pageSize:B.value,selectedRow:b.value}})},z=ae(()=>c.value.map(e=>e.templateName)),v=()=>{re(i.value).then(e=>{c.value.length=0,e.data.forEach(l=>{l.targetPathEditable=!1,c.value.push(l)})})},K=(e,l)=>{ie({projId:i.value,templatePath:e}).then(r=>{var u;x.$patch({projId:i,path:e,name:l,content:r.data.templateContent}),x.saveData();const k=y.resolve({path:(u=y.getRoutes().filter(w=>w.name=="Editor")[0].path)==null?void 0:u.toString()}),d=window.open(k.href,"_blank");d&&(d.onload=()=>{d.document.title="在线编辑 -"+l})})},$=e=>{p.value=!0,ue(i.value,e).then(()=>{g.success("删除成功"),v()}).finally(()=>{p.value=!1})},I=e=>{C.value.blur();const l=c.value.filter(r=>r.templateName.includes(P.value));c.value.length=0,c.value.push(...l)},U=e=>{e&&e.focus()},L=(e,l)=>{e.targetPathEditable=!0},M=e=>{const l=e.targetPath;if(l.length==0){g.warning("生成代码的目标路径为必填项");return}if(l.trim().length==0){g.warning("生成代码的目标路径不能为空");return}p.value=!0,pe({projId:i.value,templatePath:e.templatePath,targetPath:e.targetPath}).then(r=>{g.success("更新成功"),e.targetPathEditable=!1,v()}).catch(r=>{}).finally(()=>{p.value=!1})};return(e,l)=>{const r=o("a-page-header"),k=o("a-auto-complete"),d=o("icon-refresh"),u=o("a-button"),w=o("icon-font"),N=o("a-descriptions-item"),Q=o("a-input"),O=o("a-tooltip"),F=o("a-descriptions"),G=o("a-list-item-meta"),H=o("icon-edit"),J=o("icon-delete"),W=o("a-popconfirm"),A=o("a-list-item"),X=o("a-list"),Y=o("a-spin"),Z=o("a-card");return m(),S(Z,null,{default:t(()=>[a(r,{subtitle:b.value,onBack:q},{title:t(()=>[fe]),_:1},8,["subtitle"]),h("div",ve,[a(k,{ref_key:"templateSearchRef",ref:C,data:z.value,onKeyup:j(I,["enter"]),onBlur:I,style:{width:"320px"},modelValue:P.value,"onUpdate:modelValue":l[0]||(l[0]=n=>P.value=n),placeholder:"输入模板名称","allow-clear":""},null,8,["data","modelValue"]),a(u,{class:"reset-button",type:"primary",onClick:v},{icon:t(()=>[a(d)]),default:t(()=>[T("重置")]),_:1})]),a(Y,{loading:p.value,tip:"处理中，请稍后",style:{width:"100%"}},{default:t(()=>[a(X,null,{default:t(()=>[(m(!0),D(ne,null,oe(c.value,(n,R)=>(m(),S(A,{style:{overflow:"auto"},key:n.templateName},{actions:t(()=>[a(u,{type:"text",onClick:_=>K(n.templatePath,n.templateName)},{icon:t(()=>[a(H)]),_:2},1032,["onClick"]),a(W,{content:"此操作将不可恢复，确定删除？",type:"warning",position:"br",onOk:_=>$(n.templatePath),"ok-button-props":{status:"danger"},"cancel-button-props":{type:"primary"}},{default:t(()=>[a(u,{type:"text",status:"danger"},{icon:t(()=>[a(J)]),_:1})]),_:2},1032,["onOk"])]),default:t(()=>[a(G,null,{avatar:t(()=>[a(w,{icon:"mobanku",class:"template-icon"})]),description:t(()=>[a(F,{title:"模板信息 - "+(R+1),column:2,size:"small"},{default:t(()=>[a(N,{label:"名称"},{default:t(()=>[T(V(n.templateName),1)]),_:2},1024),a(N,{label:"路径"},{default:t(()=>[T(V(n.templatePath),1)]),_:2},1024),a(N,{label:"生成代码的目标路径",span:2},{default:t(()=>[h("div",ge,[n.targetPathEditable?(m(),D("div",ye,[a(Q,{style:{height:"32px"},"max-length":100,"show-word-limit":"",size:"small",ref_for:!0,ref:U,onKeyup:j(_=>M(n),["enter"]),onBlur:()=>n.targetPathEditable=!1,modelValue:n.targetPath,"onUpdate:modelValue":_=>n.targetPath=_,placeholder:"输入生成代码的目标路径"},null,8,["onKeyup","onBlur","modelValue","onUpdate:modelValue"])])):(m(),S(O,{key:1,content:n.targetPath,position:"bottom"},{default:t(()=>[h("div",{onDblclick:_=>L(n,R)},[h("span",null,V(n.targetPath),1)],40,be)]),_:2},1032,["content"]))])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["loading"])]),_:1})}}}),Ve=ce(Pe,[["__scopeId","data-v-c7971d3d"]]);export{Ve as default};