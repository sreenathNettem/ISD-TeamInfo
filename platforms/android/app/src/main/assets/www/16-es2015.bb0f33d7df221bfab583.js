(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"9VW3":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{constructor(l){this.router=l,this.showImage=!1,this.defaultImage="../../../assets/imgs/1.png",this.imgData=[{coordinate:"74,74,90,90",image:"../../../assets/imgs/1.png"},{coordinate:"100, 130, 116, 146",image:"../../../assets/imgs/2.png"},{coordinate:"162, 160, 178, 176",image:"../../../assets/imgs/3.png"},{coordinate:"220, 130, 246, 146",image:"../../../assets/imgs/4.png"},{coordinate:"250, 74, 296, 90",image:"../../../assets/imgs/5.png"}],this.initializeProject(),this.initializeTeams()}ngOnInit(){}initializeProject(){this.projects=[{id:1,name:"ISD"},{id:2,name:"Cognos"}]}initializeTeams(){this.teams=[{id:1,name:"UI",project_id:1,Project_name:"ISD"},{id:2,name:"API",project_id:1,Project_name:"ISD"},{id:3,name:"TEST",project_id:1,Project_name:"ISD"},{id:4,name:"DEVOPS",project_id:1,Project_name:"ISD"},{id:5,name:"CALL",project_id:2,Project_name:"Cognos"},{id:7,name:"STD Reports",project_id:2,Project_name:"Cognos"}]}setTeamValues(l){this.selectedTeams=this.teams.filter(n=>n.project_id===l.id)}onChange(l){console.log("0 is clicked"),this.defaultImage=l}}class o{}var i=u("pMnS"),a=u("oBZk"),b=u("ZZ/e"),r=u("SVse"),s=u("s7LF"),c=u("iInd"),p=e.ob({encapsulation:0,styles:[["ion-select[_ngcontent-%COMP%]{width:100%;max-width:100%}ion-textarea[_ngcontent-%COMP%]{border:1px solid #ddd}"]],data:{}});function g(l){return e.Gb(0,[(l()(),e.qb(0,0,null,null,0,"area",[["alt","not good"],["shape","rect"]],[[8,"coords",0]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onChange(l.context.$implicit.image)&&e),e},null,null))],null,function(l,n){l(n,0,0,n.context.$implicit.coordinate)})}function d(l){return e.Gb(0,[(l()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,a.H,a.p)),e.pb(1,49152,null,0,b.kb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Fb(2,0,[""," "]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit.name)})}function h(l){return e.Gb(0,[(l()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,a.H,a.p)),e.pb(1,49152,null,0,b.kb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Fb(2,0,["",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit.name)})}function m(l){return e.Gb(0,[(l()(),e.qb(0,0,null,null,6,"ion-header",[],null,null,null,a.C,a.j)),e.pb(1,49152,null,0,b.y,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.L,a.s)),e.pb(3,49152,null,0,b.yb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,2,"ion-title",[],null,null,null,a.K,a.r)),e.pb(5,49152,null,0,b.wb,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,["teamMemberInfo"])),(l()(),e.qb(7,0,null,null,64,"ion-content",[["padding",""]],null,null,null,a.B,a.i)),e.pb(8,49152,null,0,b.r,[e.h,e.k,e.x],null,null),(l()(),e.qb(9,0,null,0,7,"ion-row",[],null,null,null,a.G,a.n)),e.pb(10,49152,null,0,b.fb,[e.h,e.k,e.x],null,null),(l()(),e.qb(11,0,null,0,5,"ion-col",[["size","12"],["text-center",""]],null,null,null,a.A,a.h)),e.pb(12,49152,null,0,b.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(13,0,null,0,0,"img",[["alt","Workplace"],["usemap","#workmap"]],[[8,"src",4]],null,null,null,null)),(l()(),e.qb(14,0,null,0,2,"map",[["name","workmap"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,g)),e.pb(16,278528,null,0,r.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(17,0,null,0,37,"ion-row",[],null,null,null,a.G,a.n)),e.pb(18,49152,null,0,b.fb,[e.h,e.k,e.x],null,null),(l()(),e.qb(19,0,null,0,17,"ion-col",[["size","6"]],null,null,null,a.A,a.h)),e.pb(20,49152,null,0,b.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(21,0,null,0,15,"ion-list",[],null,null,null,a.F,a.l)),e.pb(22,49152,null,0,b.L,[e.h,e.k,e.x],null,null),(l()(),e.qb(23,0,null,0,2,"ion-list-header",[],null,null,null,a.E,a.m)),e.pb(24,49152,null,0,b.M,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,["PROJECT"])),(l()(),e.qb(26,0,null,0,10,"ion-item",[],null,null,null,a.D,a.k)),e.pb(27,49152,null,0,b.E,[e.h,e.k,e.x],null,null),(l()(),e.qb(28,0,null,0,8,"ion-select",[["placeholder","projects"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,29)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,29)._handleChangeEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.setTeamValues(o.sProject)&&t),"ngModelChange"===n&&(t=!1!==(o.sProject=u)&&t),t},a.I,a.o)),e.pb(29,16384,null,0,b.Gb,[e.k],null,null),e.Cb(1024,null,s.b,function(l){return[l]},[b.Gb]),e.pb(31,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,s.c,null,[s.e]),e.pb(33,16384,null,0,s.d,[[4,s.c]],null,null),e.pb(34,49152,null,0,b.jb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),(l()(),e.fb(16777216,null,0,1,null,d)),e.pb(36,278528,null,0,r.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(37,0,null,0,17,"ion-col",[["size","6"]],null,null,null,a.A,a.h)),e.pb(38,49152,null,0,b.q,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(39,0,null,0,15,"ion-list",[],null,null,null,a.F,a.l)),e.pb(40,49152,null,0,b.L,[e.h,e.k,e.x],null,null),(l()(),e.qb(41,0,null,0,2,"ion-list-header",[],null,null,null,a.E,a.m)),e.pb(42,49152,null,0,b.M,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,["TEAM"])),(l()(),e.qb(44,0,null,0,10,"ion-item",[],null,null,null,a.D,a.k)),e.pb(45,49152,null,0,b.E,[e.h,e.k,e.x],null,null),(l()(),e.qb(46,0,null,0,8,"ion-select",[["placeholder","teams"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,47)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,47)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.sTeam=u)&&t),t},a.I,a.o)),e.pb(47,16384,null,0,b.Gb,[e.k],null,null),e.Cb(1024,null,s.b,function(l){return[l]},[b.Gb]),e.pb(49,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,s.c,null,[s.e]),e.pb(51,16384,null,0,s.d,[[4,s.c]],null,null),e.pb(52,49152,null,0,b.jb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),(l()(),e.fb(16777216,null,0,1,null,h)),e.pb(54,278528,null,0,r.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(55,0,null,0,9,"ion-row",[],null,null,null,a.G,a.n)),e.pb(56,49152,null,0,b.fb,[e.h,e.k,e.x],null,null),(l()(),e.qb(57,0,null,0,7,"ion-col",[],null,null,null,a.A,a.h)),e.pb(58,49152,null,0,b.q,[e.h,e.k,e.x],null,null),(l()(),e.qb(59,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["COMMENTS"])),(l()(),e.qb(61,0,null,0,3,"ion-textarea",[["placeholder","Enter your comments here.."],["rows","4"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Bb(l,64)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,64)._handleInputEvent(u.target)&&t),t},a.J,a.q)),e.Cb(5120,null,s.b,function(l){return[l]},[b.Hb]),e.pb(63,49152,null,0,b.ub,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null),e.pb(64,16384,null,0,b.Hb,[e.k],null,null),(l()(),e.qb(65,0,null,0,6,"ion-row",[],null,null,null,a.G,a.n)),e.pb(66,49152,null,0,b.fb,[e.h,e.k,e.x],null,null),(l()(),e.qb(67,0,null,0,4,"ion-col",[],null,null,null,a.A,a.h)),e.pb(68,49152,null,0,b.q,[e.h,e.k,e.x],null,null),(l()(),e.qb(69,0,null,0,2,"ion-button",[],null,null,null,a.u,a.b)),e.pb(70,49152,null,0,b.h,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,["Submit"]))],function(l,n){var u=n.component;l(n,12,0,"12"),l(n,16,0,u.imgData),l(n,20,0,"6"),l(n,31,0,u.sProject),l(n,34,0,"projects"),l(n,36,0,u.projects),l(n,38,0,"6"),l(n,49,0,u.sTeam),l(n,52,0,"teams"),l(n,54,0,u.selectedTeams),l(n,63,0,"Enter your comments here..","4")},function(l,n){l(n,13,0,n.component.defaultImage),l(n,28,0,e.Bb(n,33).ngClassUntouched,e.Bb(n,33).ngClassTouched,e.Bb(n,33).ngClassPristine,e.Bb(n,33).ngClassDirty,e.Bb(n,33).ngClassValid,e.Bb(n,33).ngClassInvalid,e.Bb(n,33).ngClassPending),l(n,46,0,e.Bb(n,51).ngClassUntouched,e.Bb(n,51).ngClassTouched,e.Bb(n,51).ngClassPristine,e.Bb(n,51).ngClassDirty,e.Bb(n,51).ngClassValid,e.Bb(n,51).ngClassInvalid,e.Bb(n,51).ngClassPending)})}function f(l){return e.Gb(0,[(l()(),e.qb(0,0,null,null,1,"app-team-member-info",[],null,null,null,m,p)),e.pb(1,114688,null,0,t,[c.m],null,null)],function(l,n){l(n,1,0)},null)}var C=e.mb("app-team-member-info",t,f,{},{},[]);u.d(n,"TeamMemberInfoPageModuleNgFactory",function(){return k});var k=e.nb(o,[],function(l){return e.yb([e.zb(512,e.j,e.Y,[[8,[i.a,C]],[3,e.j],e.v]),e.zb(4608,r.j,r.i,[e.s,[2,r.p]]),e.zb(4608,s.g,s.g,[]),e.zb(4608,b.a,b.a,[e.x,e.g]),e.zb(4608,b.Cb,b.Cb,[b.a,e.j,e.p]),e.zb(4608,b.Fb,b.Fb,[b.a,e.j,e.p]),e.zb(1073742336,r.b,r.b,[]),e.zb(1073742336,s.f,s.f,[]),e.zb(1073742336,s.a,s.a,[]),e.zb(1073742336,b.Ab,b.Ab,[]),e.zb(1073742336,c.n,c.n,[[2,c.s],[2,c.m]]),e.zb(1073742336,o,o,[]),e.zb(1024,c.k,function(){return[[{path:"",component:t}]]},[])])})}}]);