webpackJsonp([1],{0:function(t,n,e){t.exports=e("NHnr")},MhVk:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("/5sW"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],o=e("XyMi");function r(t){e("MhVk")}var u=null,c=!1,m=r,l=null,h=null,p=Object(o["a"])(u,s,a,c,m,l,h),d=p.exports,f=e("/ocq"),g=e("Z60a"),y=e.n(g),M=e("C9uT"),v=e.n(M),k=function(){function t(){y()(this,t),Object.defineProperty(this,"Masks",{configurable:!0,enumerable:!0,writable:!0,value:{MessagingComponent:1,TransformComponent:2,StyleComponent:4}})}return v()(t,[{key:"matches",value:function(t,n){return t==(t&n)}},{key:"matchesAny",value:function(t,n){return 0!=(t&n)}}]),t}(),C=new k,E={props:["eid","entitydata"],computed:{styleobj:function(){for(var t=0;t<this.entitydata.components.length;t++)if(C.matchesAny(this.entitydata.components[t].mask,C.Masks.StyleComponent))return this.entitydata.components[t].data.style}}},b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"entity",style:t.styleobj,attrs:{"data-eid":t.eid}})},w=[];function x(t){e("sBNe")}var A=!1,_=x,T="data-v-2c26f82c",S=null,$=Object(o["a"])(E,b,w,A,_,T,S),j=$.exports,F={methods:{ecsInit:function(){this.$store.dispatch("init")},addEntity:function(){this.$store.dispatch("addEntity")},ecsStop:function(){this.$store.dispatch("stopEcs")}},computed:{entities:function(){return this.$store.getters.entities},entityAmt:function(){return this.$store.getters.entities.length}},components:{Entity:j}},I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"scene-data"},[t._v("\n        Amount of entities: "+t._s(t.entityAmt)+"\n    ")]),e("div",{staticClass:"scene-wrapper"},t._l(this.entities,function(n,i){return e("Entity",{key:i,attrs:{"data-eid":n.eid,styleobj:n.style,eid:n.eid,entitydata:n}},[t._v("\n            ENTITY\n        ")])}))])},O=[];function B(t){e("OtHv")}var N=!1,q=B,H="data-v-4ebafebf",V=null,D=Object(o["a"])(F,I,O,N,q,H,V),P=D.exports,U={components:{ECSView:P}},Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("ECSView")],1)},J=[],Q=!1,W=null,X=null,Z=null,z=Object(o["a"])(U,Y,J,Q,W,X,Z),G=z.exports,K=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],R=null,tt=!1,nt=null,et=null,it=null,st=Object(o["a"])(R,K,L,tt,nt,et,it),at=st.exports;i["a"].use(f["a"]);var ot=new f["a"]({routes:[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:at}]}),rt=e("NYxO"),ut=(e("No4x"),function(t){return{entities:null,maxEntities:t,nextEntityID:0,componentManager:null,setComponentManager:function(t){this.componentManager=t},getEntity:function(t){return this.entities[t]},getEntities:function(){return this.entities},addEntity:function(t){null===this.entities&&(this.entities=new Array(this.maxEntities).fill(null));var n=this.nextEntityID;return this.entities[n]=t,this.nextEntityID++,n},removeEntity:function(t){this.componentManager.removeAll(t),this.entities[t]=null},addFlag:function(t,n){this.entities[t]=this.entities[t]|n},removeFlag:function(t,n){this.entities[t]=this.entities[t]&~n}}}),ct=(e("MsuQ"),function(t,n){return{maxEntities:t,entityManager:n,components:new Map,addComponent:function(t,n){var e=n.mask;delete n.mask,this.components.has(e)||this.components.set(e,new Array(this.maxEntities)),this.components.get(e)[t]=n,this.entityManager.addFlag(t,e)},removeAll:function(t){this.components.forEach(function(n,e){n[t]=null})},removeComponent:function(t,n){this.components.get(n)[t]=null},getComponent:function(t,n){return this.components.has(n)?this.components.get(n)[t]:null},getComponentBundle:function(t,n){var e=new Map;return this.components.forEach(function(i,s){C.matchesAny(s,n)&&e.set(s,i[t])}),e},getAll:function(){return this.components}}}),mt=function(t,n){return{entityManager:t,componentManager:n,systems:[],addSystem:function(t){this.systems.push(t)},tick:function(t){var e=this.entityManager.getEntities();this.componentManager.getAll();if(!("undefined"===e||null==e||e.length<1))for(var i=0;i<this.systems.length;i++)for(var s=this.systems[i].mask,a=0;a<e.length;a++)if(null!=e[a]){var o=n.getComponentBundle(a,s);this.systems[i].tick(t,a,o)}}}},lt=function(t){return{ecs:t,mask:0,tick:function(t,n,e){}}},ht=function(t){var n=new lt(t);return n.mask=C.Masks.MessagingComponent|C.Masks.TransformComponent|C.Masks.StyleComponent,n.tick=function(t,n,e){var i=e.get(C.Masks.TransformComponent),s=e.get(C.Masks.StyleComponent);s.style.transform="translate3d("+i.x+"px,"+i.y+"px, 0)";var a=Math.floor(1e3*Math.random());if(a<=10)switch(s.style.backgroundColor){case"red":s.style.backgroundColor="orange";break;case"orange":s.style.backgroundColor="yellow";break;case"yellow":s.style.backgroundColor="green";break;case"green":s.style.backgroundColor="blue";break;case"blue":s.style.backgroundColor="magenta";break;case"magenta":s.style.backgroundColor="purple";break;case"purple":s.style.backgroundColor="white";break;case"white":s.style.backgroundColor="#111";break}},n},pt=function(t){var n=new lt(t);return n.mask=C.Masks.MessagingComponent,n.tick=function(t,n,e){},n},dt=function(t){var n=new lt(t);return n.mask=C.Masks.MessagingComponent|C.Masks.TransformComponent,n.tick=function(t,n,e){var i=e.get(C.Masks.TransformComponent);i.y+=t*i.rate,i.y>768&&this.ecs.removeEntity(n)},n},ft=function(){return{store:null,maxEntities:32768,isInit:!1,running:!0,tickCount:0,lastTimestamp:0,delta:0,targetFramerate:1e3/60,updateAttempts:0,maxUpdateAttempts:100,entityManager:null,componentManager:null,systemManager:null,tmpInit:function(){},init:function(t){if(!this.isInit){this.isInit=!0,this.store=t.a,this.entityManager=new ut(this.maxEntities),this.componentManager=new ct(this.maxEntities,this.entityManager),this.entityManager.setComponentManager(this.componentManager),this.systemManager=new mt(this.entityManager,this.componentManager);var n=new pt(this);this.systemManager.addSystem(n);var e=new dt(this);this.systemManager.addSystem(e);var i=new ht(this);this.systemManager.addSystem(i),this.running=!0,this.delta=0,this.updateAttempts=0,this.tickCount=0,this.lastTimestamp=performance.now(),requestAnimationFrame(this.tick.bind(this))}},stop:function(){this.tickCount=0,this.delta=0,this.updateAttempts=0,this.running=!1},tick:function(t){if(this.running)if(t<this.lastTimestamp+this.targetFramerate)requestAnimationFrame(this.tick.bind(this));else{this.delta+=t-this.lastTimestamp,this.lastTimestamp=t;while(this.delta>=this.targetFramerate)this.updateAttempts++,this.updateAttempts>=this.maxUpdateAttempts&&(this.panic(),this.updateAttempts=0),this.update(this.delta),this.delta-=this.targetFramerate;this.updateAttempts=0,this.tickCount++,null!=this.store&&"undefined"!==this.store&&this.store&&this.store.dispatch("setEntities",this.getEntityMap()),requestAnimationFrame(this.tick.bind(this))}},update:function(t){this.systemManager.tick(t)},panic:function(){this.delta=0},addEntity:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.entityManager.addEntity(t)},removeEntity:function(t){this.entityManager.removeEntity(t)},addComponent:function(t,n){this.componentManager.addComponent(t,n)},getEntities:function(){return this.entityManager.getEntities()},getEntityMap:function(){var t=this,n=this.entityManager.getEntities();if(null!=n){for(var e=new Array,i=function(i){if(null==n[i])return"continue";var s=[],a=t.componentManager.getComponentBundle(i,n[i]);a.forEach(function(t,n){s.push({mask:n,data:t})}),e.push({eid:i,components:s})},s=0;s<n.length;s++)i(s);return e}},getComponentBundle:function(t,n){return this.componentManager.getComponentBundle(t,n)},getComponent:function(t,n){return this.componentManager.getComponent(t,n)}}},gt=function(){return{mask:0}},yt=function(){var t=new gt;return t.mask=C.Masks.MessagingComponent,t.messages=[],t},Mt=function(){var t=new gt;return t.mask=C.Masks.TransformComponent,t.x=Math.floor(1014*Math.random()),t.y=Math.floor(758*Math.random())-768,t.rot=0,t.rate=Math.random()/10+.025,t},vt=function(){var t=new gt;return t.mask=C.Masks.StyleComponent,t.style={position:"absolute",backgroundColor:"red",width:"10px",height:"10px",transform:"translate3d("+Math.floor(758*Math.random())+"px,"+Math.floor(1024*Math.random())+"px, 0)"},t},kt=this;i["a"].use(rt["a"]);var Ct=new ft,Et=new rt["a"].Store({state:{entities:[]},getters:{entities:function(t){return t.entities}},mutations:{initEcs:function(){Ct.init(kt);var t=function(){for(var t=0;t<20;t++){var n=Ct.addEntity(),e=new yt,i=new Mt,s=new vt;Ct.addComponent(n,e),Ct.addComponent(n,i),Ct.addComponent(n,s)}};t(),setInterval(t,1e3)},addEntity:function(){for(var t=0;t<20;t++){var n=Ct.addEntity(),e=new yt,i=new Mt,s=new vt;Ct.addComponent(n,e),Ct.addComponent(n,i),Ct.addComponent(n,s)}},setEntities:function(t,n){"undefined"===n||null==n||n.length<1||(t.entities=n)},stopEcs:function(){Ct.stop()}},actions:{init:function(t){t.commit("initEcs")},addEntity:function(t){t.commit("addEntity")},setEntities:function(t,n){t.commit("setEntities",n)},stopEcs:function(t){t.commit("stopEcs")}}});i["a"].config.productionTip=!1,new i["a"]({router:ot,store:Et,render:function(t){return t(d)},created:function(){Et.dispatch("init")}}).$mount("#app")},OtHv:function(t,n){},sBNe:function(t,n){}},[0]);
//# sourceMappingURL=app.e1686520.js.map