(function(t){function e(e){for(var n,o,l=e[0],i=e[1],c=e[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var i=a[l];0!==s[i]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00d9":function(t,e,a){"use strict";var n=a("5ef2"),s=a.n(n);a.d(e,"default",(function(){return s.a}))},"038d":function(t,e,a){"use strict";var n=a("52cd"),s=a.n(n);a.d(e,"default",(function(){return s.a}))},"0f22":function(t,e,a){"use strict";var n=a("2ec7"),s=a.n(n);a.d(e,"default",(function(){return s.a}))},"2ec7":function(t,e,a){t.exports={container:"Footer_container_3yf4i",wrapper:"Footer_wrapper_1kndO",footer:"Footer_footer_2YbaW",footerCount:"Footer_footerCount_Xobzd"}},"339d":function(t,e,a){t.exports={container:"Header_container_11Kju",wrapper:"Header_wrapper_xh8CB",header:"Header_header_1NuG4",title:"Header_title_2NyXm"}},"3b8b":function(t,e,a){"use strict";var n=a("339d"),s=a.n(n);a.d(e,"default",(function(){return s.a}))},"3fae":function(t,e,a){"use strict";var n=a("ad70"),s=a.n(n);a.d(e,"default",(function(){return s.a}))},"42eb":function(t,e,a){"use strict";var n=a("655b"),s=a.n(n);a.d(e,"default",(function(){return s.a}))},"4ef9":function(t,e,a){t.exports={container:"App_container_1yQEW",wrapper:"App_wrapper_pE_0j"}},"52cd":function(t,e,a){t.exports={container:"TodoApp_container_TRymd",wrapper:"TodoApp_wrapper_2nTBE",todoApp:"TodoApp_todoApp_2OPTW"}},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.$style.container},[a("div",{class:t.$style.wrapper},[a("TodoApp")],1)])},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.$style.todoApp},[a("Header"),a("Content"),a("Footer")],1)},l=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:t.$style.header},[a("p",{class:t.$style.title},[t._v("to do list")])])},c=[],u={},d=u,p=a("3b8b"),f=a("2877");function k(t){this["$style"]=p["default"].locals||p["default"]}var _=Object(f["a"])(d,i,c,!1,k,null,null),m=_.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{class:t.$style.content},[a("div",{class:t.$style.contentWrapper},[a("TaskList"),a("AddTask")],1)])},T=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{class:t.$style.tasks},[t.getTasksFiltered.length<1?a("div",{class:t.$style.tasksEmpty},[t._v(" The task list is empty! Add a new task! ")]):t._e(),a("transition-group",{attrs:{"enter-class":t.$style.enter,"leave-to-class":t.$style.leaveTo,"enter-active-class":t.$style.enterActive,"leave-active-class":t.$style.leaveActive}},t._l(t.getTasksFiltered,(function(t){return a("TaskItem",{key:t.id,attrs:{title:t.title,id:t.id,isCompleted:t.isCompleted}})})),1)],1)},h=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:t.$style.task},[a("label",{class:t.$style.taskLabel},[a("input",{class:t.$style.taskInput,attrs:{type:"checkbox"},domProps:{checked:t.isCompleted},on:{change:t.checkedTask}}),a("span",{class:t.$style.taskBox}),a("span",{class:t.$style.taskLine},[t._v(t._s(t.title))])]),a("button",{class:t.$style.taskBtn,attrs:{"aria-label":"remove-task"},on:{click:t.deleteTask}})])},g=[],$=a("5530"),O=a("2f62"),C={props:{id:{type:String},title:{type:String},isCompleted:{type:Boolean}},methods:Object($["a"])(Object($["a"])({},Object(O["c"])(["removeTask","changeCompleted"])),{},{deleteTask:function(){this.removeTask(this.id)},checkedTask:function(){this.changeCompleted(this.id)}})},x=C,w=a("90b1");function j(t){this["$style"]=w["default"].locals||w["default"]}var A=Object(f["a"])(x,y,g,!1,j,null,null),I=A.exports,S={components:{TaskItem:I},computed:Object(O["b"])(["getTasksFiltered"])},E=S,L=a("00d9");function B(t){this["$style"]=L["default"].locals||L["default"]}var F=Object(f["a"])(E,v,h,!1,B,null,null),M=F.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{class:t.$style.addTask,on:{submit:function(e){return e.preventDefault(),t.addTaskItem.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.nameTask,expression:"nameTask",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Add a new task"},domProps:{value:t.nameTask},on:{input:function(e){e.target.composing||(t.nameTask=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])},J=[],N={data:function(){return{nameTask:""}},methods:Object($["a"])(Object($["a"])({},Object(O["c"])(["addTask"])),{},{addTaskItem:function(){this.addTask(this.nameTask),this.nameTask=""}})},W=N,H=a("58f3");function X(t){this["$style"]=H["default"].locals||H["default"]}var Z=Object(f["a"])(W,P,J,!1,X,null,null),z=Z.exports,D={components:{TaskList:M,AddTask:z}},G=D,K=a("8a75");function Q(t){this["$style"]=K["default"].locals||K["default"]}var q=Object(f["a"])(G,b,T,!1,Q,null,null),R=q.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{class:t.$style.footer},[a("p",{class:t.$style.footerCount},[t.getCompleted?a("span",[t._v(t._s(t.getCompleted)+"/")]):t._e(),t.getTasksCount?a("span",[t._v(t._s(t.getTasksCount)+" left")]):t._e()]),a("Tabs")],1)},Y=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.$style.tabs},t._l(t.getTabs,(function(t){return a("Tab",{key:t.title,attrs:{title:t.title,isChecked:t.isChecked}})})),1)},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{class:t.$style.tab},[a("input",{class:t.$style.tabInput,attrs:{type:"radio",name:"tab"},domProps:{checked:t.isChecked},on:{click:t.filter}}),a("span",{class:t.$style.tabBox}),t._v(" "+t._s(t.title)+" ")])},at=[],nt={props:{title:{type:String},isChecked:{type:Boolean}},methods:Object($["a"])(Object($["a"])({},Object(O["c"])(["filterTasks"])),{},{filter:function(){this.filterTasks(this.title)}})},st=nt,rt=a("42eb");function ot(t){this["$style"]=rt["default"].locals||rt["default"]}var lt=Object(f["a"])(st,et,at,!1,ot,null,null),it=lt.exports,ct={components:{Tab:it},computed:Object($["a"])({},Object(O["b"])(["getTabs"]))},ut=ct,dt=a("3fae");function pt(t){this["$style"]=dt["default"].locals||dt["default"]}var ft=Object(f["a"])(ut,V,tt,!1,pt,null,null),kt=ft.exports,_t={components:{Tabs:kt},computed:Object(O["b"])(["getTasksCount","getCompleted"])},mt=_t,bt=a("0f22");function Tt(t){this["$style"]=bt["default"].locals||bt["default"]}var vt=Object(f["a"])(mt,U,Y,!1,Tt,null,null),ht=vt.exports,yt={components:{Header:m,Content:R,Footer:ht},mounted:function(){this.$store.dispatch("tasksFromLocaSorage")}},gt=yt,$t=a("038d");function Ot(t){this["$style"]=$t["default"].locals||$t["default"]}var Ct=Object(f["a"])(gt,o,l,!1,Ot,null,null),xt=Ct.exports,wt={name:"App",components:{TodoApp:xt}},jt=wt,At=a("8d8d");function It(t){this["$style"]=At["default"].locals||At["default"]}var St=Object(f["a"])(jt,s,r,!1,It,null,null),Et=St.exports,Lt=(a("4de4"),a("d3b7"),a("e9c4"),a("159b"),a("ec26")),Bt={state:{filter:"All",tasks:[],tabs:[{title:"All",isChecked:!0},{title:"Active",isChecked:!1},{title:"Completed",isChecked:!1}]},getters:{getTasks:function(t){return t.tasks},getTasksCount:function(t){return t.tasks.length},getTasksFiltered:function(t){return"All"==t.filter?t.tasks:"Active"==t.filter?t.tasks.filter((function(t){return!t.isCompleted})):"Completed"==t.filter?t.tasks.filter((function(t){return t.isCompleted})):t.tasks},getCompleted:function(t){return t.tasks.filter((function(t){return t.isCompleted})).length},getTabs:function(t){return t.tabs}},mutations:{addTask:function(t,e){e&&t.tasks.push({id:Object(Lt["a"])(),title:e,isCompleted:!1}),localStorage.setItem("tasks",JSON.stringify(t.tasks))},removeTask:function(t,e){t.tasks=t.tasks.filter((function(t){return t.id!==e})),localStorage.setItem("tasks",JSON.stringify(t.tasks))},changeCompleted:function(t,e){t.tasks.forEach((function(t){t.id===e&&(t.isCompleted=!t.isCompleted)})),localStorage.setItem("tasks",JSON.stringify(t.tasks))},filterTasks:function(t,e){t.filter=e},setTaskLocalStorage:function(t){t.tasks=JSON.parse(localStorage.getItem("tasks"))||[]}},actions:{tasksFromLocaSorage:function(t){var e=t.commit;e("setTaskLocalStorage")}}};n["a"].use(O["a"]);var Ft=new O["a"].Store({modules:{task:Bt}});n["a"].config.productionTip=!1,new n["a"]({store:Ft,render:function(t){return t(Et)}}).$mount("#app")},"58f3":function(t,e,a){"use strict";var n=a("d8d2"),s=a.n(n);a.d(e,"default",(function(){return s.a}))},"5ef2":function(t,e,a){t.exports={container:"TaskList_container_1U6_a",wrapper:"TaskList_wrapper_1remQ",tasks:"TaskList_tasks_1oDV1",tasksEmpty:"TaskList_tasksEmpty_3MrM7",enterActive:"TaskList_enterActive_8n0Mr",leaveTo:"TaskList_leaveTo_3306w",enter:"TaskList_enter_3Xz1n"}},"655b":function(t,e,a){t.exports={container:"Tab_container_qun9Z",wrapper:"Tab_wrapper_Kf4Xl",tab:"Tab_tab_2evJC",tabInput:"Tab_tabInput_1mExB",tabBox:"Tab_tabBox_3MZ2c"}},"8a75":function(t,e,a){"use strict";var n=a("ae41"),s=a.n(n);a.d(e,"default",(function(){return s.a}))},"8d8d":function(t,e,a){"use strict";var n=a("4ef9"),s=a.n(n);a.d(e,"default",(function(){return s.a}))},"90b1":function(t,e,a){"use strict";var n=a("dd5e"),s=a.n(n);a.d(e,"default",(function(){return s.a}))},ad70:function(t,e,a){t.exports={container:"Tabs_container_C0fub",wrapper:"Tabs_wrapper_ExOkQ",tabs:"Tabs_tabs_9AmMy"}},ae41:function(t,e,a){t.exports={container:"Content_container_1L7k6",wrapper:"Content_wrapper_2wWMY",content:"Content_content_2vgsi",contentWrapper:"Content_contentWrapper_1t9mk"}},d8d2:function(t,e,a){t.exports={container:"AddTask_container_2uSRh",wrapper:"AddTask_wrapper_3Z3_0",addTask:"AddTask_addTask_4Bmg1"}},dd5e:function(t,e,a){t.exports={container:"TaskItem_container_3Jp-N",wrapper:"TaskItem_wrapper_mkvGq",task:"TaskItem_task_1svbx",taskLabel:"TaskItem_taskLabel_liEgK",completed:"TaskItem_completed_3AAZX",taskInput:"TaskItem_taskInput_3DgGg",taskBox:"TaskItem_taskBox_3FmAs",taskLine:"TaskItem_taskLine_MzSOX",taskBtn:"TaskItem_taskBtn_26rJW"}}});
//# sourceMappingURL=app.f08562b4.js.map