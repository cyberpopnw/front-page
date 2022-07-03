import{s as a,W as U}from"./index.31c475c4.js";import{_ as j,d as T,a as N,r as n,u as Q,o as W,f as C,g as b,l as D,h as x,j as R,n as e,k as J,t as o,m as v,B as V,N as M,C as Z,E as Y,F as G,x as K,y as q,J as H,H as L,e as X}from"./vendor.f2cbf1b6.js";var P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQAAAACoxAthAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAAJcEhZcwAAFxEAABcRAcom8z8AAAKHSURBVHja7ZtNjsMgDIUdZdElR8hR5mjt0XKUHoFlFlU8+AcHomrULic8S6gN4WNl+dmGEH9tBAQIECAfIy+q9pMnnVzL/6W8o5kfMp+aJUCA0F0X7uW5jG0ShJ+Gye+9WwIEyD2LI+lzzMtyXfpSH2uWALkoIhFmk6HRRDd4znzaFQiQeN6JbkWSbuFj8vtIQIB0yBtJYg9KX6gYkFGQNuldb4KVHEb8TJBZfeyc9AIZF2ktgpIlvb40dWuAXAzJVgxbDkOC6ViKHMmgmSMAAQFSQohgkw6NMKyIJbxiJklrAgLEkt7abttNdzbdqfoYZ9Kk9ycTECCRwxT/SuZSqyS9EpyspD5UbAdyNcQ0RyUpyp4utZFXdyBAughjvjWxJ756yrOYFGlTRd6fghKQYREdu2qO5C5iT/vVpDf5ciBATMWqE4mf1aYKUReQPCdmIMMjXje7ExFN4WPSgfNXtmMvfECugWiTddIimG4uSZb0RskjSpWAALG48oo5RYji4oE0ViTFyXr4AwQI2yFxRB27eMBuj4rmifsqCcioCDd9fiutqV48OCpuy4mPHAbI0Agfvf7Vb6qozX4w5CrWxTEgl0C8Ro6E186Sn4aYvYAAaXzMnIjZJImssbLZpbbFD4HUBYEAqYfEIUmbzkdZ7UFJ3a/pwwAZF2lMkal+yxPXm9S/zoUVkEsg7Z1Fq5FlfpE+7GxY8pInAwHSXZzOdJjIkuw2H9eY2rIayMiILE378S2P2Ea1C/fQLU4qBgSI5i7sKhY+Rm9VDAiQ2mbb4/KBWr0o+UdQAvKvEX3nDlObKk0nrpMlIECqKVKrJLt6Ip/+SYRRH8vv8mQgoyHfGhAgQIB8aL+6TLcVVs7kAwAAAABJRU5ErkJggg==";const f=w=>(K("data-v-b1d953a6"),w=w(),q(),w),O={class:"warp"},ee={class:"banner"},se={class:"nav"},te={class:"banner_txt"},oe={class:"welmsg"},ae={class:"title"},ne={class:"register"},le={class:"step1"},de={class:"green"},ie={class:"step1_content"},re=f(()=>e("div",{class:"img"},[e("img",{src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/step1_img.png",alt:""})],-1)),ce={action:"#",onsubmit:""},ue={for:"Email"},me={class:"button"},pe=["placeholder"],he={key:0,class:"tip"},_e={class:"tips"},we={class:"down_button"},ge=f(()=>e("div",{class:"arrow"},[e("img",{src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_arrow.svg",alt:""})],-1)),ve={class:"step2_wrap"},fe=f(()=>e("img",{src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/alen.png",alt:""},null,-1)),be={class:"step2"},Ae={class:"green"},$e=v(),ye=f(()=>e("br",null,null,-1)),ke=f(()=>e("br",null,null,-1)),Se={class:"card"},Ee=f(()=>e("img",{src:P,alt:""},null,-1)),Ie=[Ee],Ce={class:"buttons flex_between_center"},De=f(()=>e("img",{class:"media",src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/android.png",alt:""},null,-1)),xe=f(()=>e("img",{class:"media",src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/ios.png",alt:""},null,-1)),Re=f(()=>e("img",{class:"media",src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/windows.png",alt:""},null,-1)),ze=T({setup(w){const{t:r}=N(),{proxy:p}=H(),m=n(0),A=Q(),S=n(!1),h=n(!1),$=n(!1),g=s=>{if(h.value=!0,d.value==""&&(d.value="hello@cyberpop.online"),!h.value){a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:r("message.download.tips3")}});return}switch(s){case 2:window.location.href="https://apps.apple.com/us/app/cyberpop/id1613478998?l=zh";break;case 0:window.location.href="https://d3bhixjyozyk2o.cloudfront.net/Cyberpop_1.0.4_2022_06_14_18_48_53_V25_Dev.false_Symbols.USE_NFT_ASSETS.apk";break;case 1:window.location.href="https://d3bhixjyozyk2o.cloudfront.net/Cyberpop_1.0.4_2022_06_14_19_19_02_V25_Dev.false_Symbols.USE_NFT_ASSETS.exe";break}p.$api.get(`/code/user/download?address=${m.value}`).then(t=>{console.log(t)}).catch(t=>{console.log(t)})},_=n(0),E=(s,t,i)=>{p.$api.post(`/code/business/invuser?address=${i||0}&icode=${t||0}&email=${s}&nickname=${0}`).then(l=>{if(l.data.code==514){h.value=!0,a.dispatch("user/showDialog",{show:!0,info:{state:1,txt:r("message.download.tips4")}});return}if(l.data.code==510){z();return}if(l.data.code==506){a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:r("message.download.tips6")}});return}if(l.data.code!=55555){h.value=!0,a.dispatch("wallet/messSing",_.value),a.dispatch("user/showDialog",{show:!0,info:{state:1,txt:r("message.assets.pop.tran_succ")}});return}a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:"Try another address"}})}).catch(l=>{console.log(l)})},z=()=>{p.$api.get(`/code/user/baddress?address=${m.value}`).then(s=>{a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:"You're bound: "+s.data}})}).catch(s=>{console.log(s)})},B=async s=>{try{const t=window.Web3;await new t(window.ethereum).eth.personal.sign("cyber-business",s,"")?(console.log("address",d.value,_.value,s),E(d.value,_.value,s)):a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:r("message.assets.pop.reject_transaction")}})}catch{throw a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:"sign error"}}),new Error("You need to sign the message to be able to log in.")}},F=()=>{p.$api.get(`/code/user/bemail?email=${d.value}`).then(async s=>{let[t]=await U.getAccounts();if(m.value=t,console.log(222),s.data===!0){const i=window.ethereum;if(console.log(i,"ethereum"),!i){E(d.value,_.value,"");return}B(t)}else h.value=!0,a.dispatch("wallet/messSing",_.value),a.dispatch("user/showDialog",{show:!0,info:{state:1,txt:r("message.download.tips4")}})}).catch(s=>{window.ethereum||E(d.value,_.value,"")})},c=async()=>{if(I()){a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:r("message.download.tips3")}});return}F()},d=n("");n(""),n("Not ReferralCode");const y=n(!1);n(!1),n(!1),n(60);const I=()=>{let s=/@/;return y.value=!1,console.log(s.test(d.value.trim())),s.test(d.value.trim())||(y.value=!0),!s.test(d.value.trim())};return W(()=>{_.value=A.currentRoute.value.query.code,S.value=A.currentRoute.value.query.isClick}),(s,t)=>{const i=C("header-a"),l=C("footer-a");return b(),D(G,null,[S.value?(b(),x(i,{key:0,path:"download",type:0})):R("",!0),e("div",O,[e("div",ee,[e("div",se,[e("span",{class:"green",onClick:t[0]||(t[0]=u=>J(A).push("/"))},o(s.$t("message.download.nav_txt1")),1),v(" > "+o(s.$t("message.download.nav_txt2")),1)]),e("div",te,[e("div",oe,[v(o(s.$t("message.download.welmsg_txt1"))+" ",1),e("span",null,o(s.$t("message.download.welmsg_txt2")),1)]),e("div",ae,o(s.$t("message.download.title")),1)])]),e("div",ne,[e("div",le,[e("span",de,o(s.$t("message.download.step1_name"))+" :",1),v(" "+o(s.$t("message.download.welmsg_txt2")),1)]),e("div",ie,[re,e("form",ce,[e("label",ue,o(s.$t("message.common.register.Email")),1),e("div",me,[V(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=u=>d.value=u),onInput:t[2]||(t[2]=u=>I()),placeholder:s.$t("message.download.inputEmail")},null,40,pe),[[M,d.value]]),y.value?(b(),D("div",he,o(s.$t("message.download.tips3")),1)):R("",!0)]),e("p",_e,o(s.$t("message.download.tips1")),1),e("button",{type:"button",onClick:c},o(s.$t("message.download.REGISTER")),1)])])]),e("div",we,[ge,e("div",ve,[fe,e("div",be,[e("span",Ae,o(s.$t("message.download.step2_name"))+" :",1),$e,ye,v(o(s.$t("message.download.download_txt"))+" ",1),ke,e("div",null,o(s.$t("message.download.version")),1)])]),V(e("div",Se,Ie,512),[[Z,$.value]]),e("div",Ce,[e("div",{class:"down_cyberpop",onMouseenter:t[3]||(t[3]=u=>$.value=!0),onMouseleave:t[4]||(t[4]=u=>$.value=!1),onClick:t[5]||(t[5]=u=>g(0))},[De,e("b",null,o(s.$t("message.download.Android")),1)],32),e("div",{class:"down_cyberpop",onClick:t[6]||(t[6]=u=>g(2))},[xe,e("b",null,o(s.$t("message.download.ios")),1)]),e("div",{class:"down_cyberpop",onClick:t[7]||(t[7]=u=>g(1))},[Re,e("b",null,o(s.$t("message.download.windows")),1)])])])]),Y(l)],64)}}});var Be=j(ze,[["__scopeId","data-v-b1d953a6"]]);const k=w=>(K("data-v-f4941b7a"),w=w(),q(),w),Fe={class:"download bounceShow"},Ue={class:"banner"},je={class:"welmsg"},Te={class:"title"},Ve={class:"download-mask"},Ne={class:"step1"},Qe={class:"green"},We={action:"#",onsubmit:""},Je={for:"Email"},Me={class:"button"},Ye=["placeholder"],Ge={key:0,class:"tip"},Ke={class:"tips"},qe={class:"down_button"},He=k(()=>e("div",{class:"arrow"},[e("img",{src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_arrow.svg",alt:""})],-1)),Ze={class:"step2"},Le={class:"green"},Xe=v(),Pe=k(()=>e("br",null,null,-1)),Oe=k(()=>e("br",null,null,-1)),es=k(()=>e("div",{class:"person"},[e("img",{src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/alen.png",alt:""})],-1)),ss={class:"buttons"},ts=k(()=>e("img",{class:"media",src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/android.png",alt:""},null,-1)),os=k(()=>e("img",{class:"media",src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/ios.png",alt:""},null,-1)),as=k(()=>e("img",{class:"media",src:"https://d2cimmz3cflrbm.cloudfront.net/nwhome/windows.png",alt:""},null,-1)),ns=T({setup(w){const{proxy:r}=H(),p=Q(),{t:m}=N(),A=n(0),S=n(!1),h=n(!1),$=s=>{switch(h.value=!0,c.value==""&&(c.value="hello@cyberpop.online"),s){case 2:window.location.href="https://apps.apple.com/us/app/cyberpop/id1613478998?l=zh";break;case 0:window.location.href="https://d3bhixjyozyk2o.cloudfront.net/Cyberpop_1.0.4_2022_06_14_18_48_53_V25_Dev.false_Symbols.USE_NFT_ASSETS.apk";break;case 1:window.location.href="https://d3bhixjyozyk2o.cloudfront.net/Cyberpop_1.0.4_2022_06_14_19_19_02_V25_Dev.false_Symbols.USE_NFT_ASSETS.exe";break}r.$api.get(`/code/user/download?address=${A.value}`).then(t=>{console.log(t)}).catch(t=>{console.log(t)})},g=n(0),_=(s,t,i)=>{r.$api.post(`/code/business/invuser?address=${i||0}&icode=${t||0}&email=${s}&nickname=${0}`).then(l=>{if(l.data.code==514){h.value=!0,a.dispatch("user/showDialog",{show:!0,info:{state:1,txt:m("message.download.tips4")}});return}if(l.data.code==510){E();return}if(l.data.code==506){a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:m("message.download.tips6")}});return}if(l.data.code!=55555){h.value=!0,a.dispatch("wallet/messSing",g.value),a.dispatch("user/showDialog",{show:!0,info:{state:1,txt:m("message.assets.pop.tran_succ")}});return}a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:m("message.assets.pop.reject_transaction")}})}).catch(l=>{console.log(l)})},E=()=>{r.$api.get(`/code/user/baddress?address=${A.value}`).then(s=>{a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:"You're bound: "+s.data}})}).catch(s=>{console.log(s)})},z=async s=>{try{const t=window.Web3;await new t(window.ethereum).eth.personal.sign("cyber-business",s,"")?_(c.value,g.value,s):a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:m("message.assets.pop.reject_transaction")}})}catch{throw a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:"sign error"}}),new Error("You need to sign the message to be able to log in.")}},B=()=>{r.$api.get(`/code/user/bemail?email=${c.value}`).then(async s=>{let[t]=await U.getAccounts();if(A.value=t,s.data===!0){const i=window.ethereum;if(console.log(i,"ethereum"),!i){_(c.value,g.value,"");return}let[l]=await U.getAccounts();z(l)}else h.value=!0,a.dispatch("wallet/messSing",g.value),a.dispatch("user/showDialog",{show:!0,info:{state:1,txt:m("message.assets.pop.tran_succ")}})}).catch(s=>{window.ethereum||_(c.value,g.value,"")})},F=()=>{if(!window.ethereum&&y()&&(c.value="hello@cyberpop.online",h.value=!0),y()){a.dispatch("user/showDialog",{show:!0,info:{state:0,txt:m("message.download.tips3")}});return}B()},c=n("");n(""),n("Not ReferralCode");const d=n(!1);n(!1),n(!1),n(60);const y=()=>{let s=/@/;return d.value=!1,s.test(c.value)||(d.value=!0),!s.test(c.value)};let I=null;return L(()=>{clearInterval(I)}),W(()=>{g.value=p.currentRoute.value.query.code,S.value=p.currentRoute.value.query.isClick}),(s,t)=>{const i=C("header-b"),l=C("footer-b");return b(),D(G,null,[S.value?(b(),x(i,{key:0,path:"/download",type:0})):R("",!0),e("div",Fe,[e("div",Ue,[e("div",je,[v(o(s.$t("message.download.welmsg_txt1"))+" ",1),e("span",null,o(s.$t("message.download.welmsg_txt2")),1)]),e("div",Te,o(s.$t("message.download.title")),1)]),e("div",Ve,[e("div",Ne,[e("span",Qe,o(s.$t("message.download.step1_name"))+" :",1),v(" "+o(s.$t("message.download.welmsg_txt2")),1)]),e("form",We,[e("label",Je,o(s.$t("message.common.register.Email")),1),e("div",Me,[V(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=u=>c.value=u),onInput:t[1]||(t[1]=u=>y()),placeholder:s.$t("message.download.inputEmail")},null,40,Ye),[[M,c.value]]),d.value?(b(),D("div",Ge,o(s.$t("message.download.tips3")),1)):R("",!0)]),e("p",Ke,o(s.$t("message.download.tips1")),1),e("button",{type:"button",onClick:F},o(s.$t("message.download.REGISTER")),1)])]),e("div",qe,[He,e("div",Ze,[e("span",Le,o(s.$t("message.download.step2_name"))+" :",1),Xe,Pe,v(o(s.$t("message.download.download_txt"))+" ",1),Oe,e("div",null,o(s.$t("message.download.version")),1)]),es,e("div",ss,[e("div",{class:"down_cyberpop flex_center",onClick:t[2]||(t[2]=u=>$(0))},[ts,e("b",null,o(s.$t("message.download.Android")),1)]),e("div",{class:"down_cyberpop flex_center",onClick:t[3]||(t[3]=u=>$(2))},[os,e("b",null,o(s.$t("message.download.ios")),1)]),e("div",{class:"down_cyberpop flex_center",onClick:t[4]||(t[4]=u=>$(1))},[as,e("b",null,o(s.$t("message.download.windows")),1)])])])]),Y(l)],64)}}});var ls=j(ns,[["__scopeId","data-v-f4941b7a"]]);const ds=T({setup(w){const r=X(()=>{var p;return((p=a.state.sys)==null?void 0:p.innerWidth)||0});return(p,m)=>J(r)>1025?(b(),x(Be,{key:0})):(b(),x(ls,{key:1}))}});var cs=j(ds,[["__scopeId","data-v-e65597a4"]]);export{cs as default};
