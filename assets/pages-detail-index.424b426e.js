import{d as e,r as a,t as l,o as t,a as s,b as i,e as u,h as r,q as o,s as n,F as d,v as m,l as c}from"./index-72db3aa8.js";import{o as p,a as v,g as f,r as h,t as g}from"./tm-sheet.e03b60f2.js";import{b as _,_ as b,a as x}from"./tm-spin.vue_vue_type_script_setup_true_lang.b03eb26c.js";const k=e({__name:"index",setup(e){const k=a(!0),y=a(!1),w=a(""),j=a(),$=a([]);p((e=>{q(e)}));const q=e=>{uni.$tm.fetch.get("http://114.55.175.146/api1/api.php?out=json&flag="+e.flag+"&id="+e.id).then((e=>{var a,l,t;(null==(a=e.data)?void 0:a.success)&&(w.value=e.data.title,j.value=e.data.url,$.value=null==(t=null==(l=e.data)?void 0:l.info[0])?void 0:t.video.map((e=>({id:e.split("$")[0],url:e.split("$")[1],selected:!1}))),$.value[0].selected=!0,k.value=!1,y.value=!0)})).catch((e=>{l({title:"查询失败，请稍后再试！",icon:"none",mask:!0,duration:1e3})}))};return(e,a)=>{const l=h(m("tm-text"),g),p=c;return t(),s(f,null,{default:i((()=>[u(_,{load:k.value,tip:"加载中",style:{"min-height":"200rpx"}},{default:i((()=>[u(v,{margin:[0,0],padding:[0,0]},{default:i((()=>[r(' <tm-image src="https://picsum.photos/620/150" :width="636" :height="150"></tm-image> '),j.value?(t(),o("iframe",{key:0,id:"iframe",src:"https://dm.xbqgx.com?url="+j.value,style:{border:"none","min-height":"400rpx"},frameborder:"0",scrolling:"no"},null,8,["src"])):r("v-if",!0)])),_:1})])),_:1},8,["load"]),y.value?(t(),s(v,{key:0,margin:[0,0,0,0]},{default:i((()=>[u(l,{"font-size":24,_class:"text-weight-b",label:w.value},null,8,["label"]),u(b,{border:0,margin:[6,6]}),u(p,{class:"flex flex-row flex-wrap"},{default:i((()=>[(t(!0),o(d,null,n($.value,((e,a)=>(t(),s(p,{key:a},{default:i((()=>[u(x,{color:e.selected?"blue":"pink",margin:[10],shadow:0,size:"small",label:e.id,onClick:a=>(e=>{j.value!=e.url&&($.value.forEach((e=>e.selected=!1)),e.selected=!0,j.value=e.url,k.value=!0,setTimeout((()=>{k.value=!1}),1e3))})(e)},null,8,["color","label","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})):r("v-if",!0)])),_:1})}}});export{k as default};
