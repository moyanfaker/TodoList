(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"502a":function(t,e,a){"use strict";var s=a("64c9"),n=a.n(s);n.a},"64c9":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("MenuBar"),a("ItemList"),t.$store.state.isShow?a("MemoEditor"):t._e()],1)},i=[],r=a("d4ec"),o=a("2caf"),c=a("262e"),l=a("9ab4"),u=a("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse navbar-right"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"add dropdown"},[a("a",{staticClass:"create-new dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v("新建")]),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{on:{click:t.showAdd}},[t._v("文本便签")])])])]),a("li",{staticClass:"categories dropdown"},[a("a",{staticClass:"current-category dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v(" 全部 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(-1)))])]),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"total",on:{click:function(e){return t.doFilterByCateId(-1)}}},[a("a",[t._v(" 全部 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(-1)))])])]),a("li",{staticClass:"divider"}),a("li",{on:{click:function(e){return t.doFilterByCateId(0)}}},[a("a",[t._v(" 工作 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(0)))])])]),a("li",{on:{click:function(e){return t.doFilterByCateId(1)}}},[a("a",[t._v(" 生活 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(1)))])])]),a("li",{on:{click:function(e){return t.doFilterByCateId(2)}}},[a("a",[t._v(" 学习 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(2)))])])])])])])])])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-header"},[s("a",{staticClass:"navbar-brand"},[s("img",{attrs:{height:"40",src:a("cf05")}}),t._v("➕ "),s("img",{attrs:{height:"40",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEUAesz///8Ac8oAcMmFsN8Ad8u50ewAdcqjweUAbshRktQAa8cAacd1pNpHjtM8idHb5/Xz9/zn7/gyhdDJ2/BtodmNsd8AZsbS4fKzy+kff86gveRkm9eErN05gs6qxuj1Ch+yAAADMElEQVR4nO2Z24KiMAxAS2sJF+UOItD1//9ywZlRCmXoBd19yHkbqeOxbZKmEoIgCIIgCIIgCIIgCIIgCIIgCIIgCIL8b3ATFG8H+gTsDLpyJC3TB0maJEm0Znw1mZ6XSweIO3GvsqIo2urWD2GokNyDNp4Jg/RFgYhMepz7g7mEoUI9U+BwKdYjqpR+TIGDrx7TnD+kAH/yrUF++E6Fy48C3zYYHYzWggWWCtlvwwJmonC3Uoh33lYbpAg7BR7tDez0Y9NOIaz2Bgb602A5C4uX82KRIW4GCQrqQKaf77Nq8TCIHv8a5DAKuuv5HEevNJEPsb7B+IWozHWecES8ePr15aiUlCL2eJWHw88U2Narb9j835/UAS5FZP8MQFZPfxe1SURaK8zT0mxI2I9T0JnWCGeFfL7scI/MkvMhCp5UlMBtF1gqqI5SH1CYZ4H+gKk3V4B2NsYbjnbQUZDzQi7YsWuhNQuLQ0ZV0iMldBQI9Rb4yfmIWDBQYLelg9fW1DknmSjwVHFsK4R7YtRXIKHyvFf0cISEngIB9dkx7w9YDk0F3m2coPOTc5LWVCCg2g4PssRxInQVCJSKdu6Lxi1faisQvt2DVE7zoK8wjh22GprMJV2aKBDgYmM1Koc9aaQwpmrWqCUcarihwnTRMrQqh8h6KYwVptNa4q8jtDLqJRwVpuBI14UrtZ0GK4WpkemWIdrY7khLhaktI3Kz29puSGuFaTl6ycF2MzgojDVc2hEGdwyWCqrmVer6B8vNoF0paSPW/at0jLi8V4EmrZevww7mO1K8U4HSx6IX15XCPFG+cRbgeVnZLpoYTj6yFzibXT1XRPqYD0VEJyWgrHxNBISfyQtU/hjPC9JrSAFoeI3kilm9LTteV+eD3O+FaFbF8n01Yv/m9VusszTQiAh1J7UisD42aQQl273+HSlsBWxuWdQk9udXrbsm2J2Hi0MnoVcj9n5JES79lGaZYukvP8sUqdMdsG6x5lRsSOS9Y29tcGQhtUKi6EvXa3B68l/s1Do4l0JKim0/xAfcswB7sTuhHFgcl9FQ1/UQkXN46OWfAZzDxD/6dARBEFv+AuqFKQU8WzNVAAAAAElFTkSuQmCC"}})]),s("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-expanded":"false"}},[s("span",{staticClass:"icon-bar"}),s("span",{staticClass:"icon-bar"}),s("span",{staticClass:"icon-bar"})])])}],v=(a("4de4"),a("bee2")),p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(r["a"])(this,t),this.id=e,this.categoryId=a,this.title=s,this.content=n,this.createTime=this.toSelfDateStr()}return Object(v["a"])(t,[{key:"toSelfDateStr",value:function(){var t=new Date(Date.now()),e=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes();return e}}]),t}(),h=p,f=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"showAdd",value:function(){this.$store.state.transMemo=new h(-1,0),this.$store.state.isShow=!0}},{key:"doFilter",value:function(t){return-1==t?this.$store.state.aHelper.memoList.length:this.$store.state.aHelper.memoList.filter((function(e){return e.categoryId==t})).length}},{key:"doFilterByCateId",value:function(t){this.$store.state.filterCateId=t}}]),a}(u["c"]);f=Object(l["a"])([u["a"]],f);var g=f,b=g,y=(a("502a"),a("2877")),C=Object(y["a"])(b,d,m,!1,null,"2e8bd812",null),w=C.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"memos"}},t._l(t.filterMemo(),(function(t){return a("MemoItem",{key:t.id,attrs:{memo:t}})})),1)},O=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"memo-container"},[a("div",{staticClass:"memo"},[a("div",{staticClass:"mark"}),a("div",{staticClass:"memo-heading"},[a("h5",{staticClass:"title"},[t._v(t._s(t.memo.title))]),a("ul",{staticClass:"tools"},[a("li",{staticClass:"edit",on:{click:t.showEdit}}),a("li",{staticClass:"delete",on:{click:t.doDel}})])]),a("h6",{staticClass:"memo-info"},[a("span",{staticClass:"timeStamp"},[t._v(t._s(t.memo.createTime))]),a("span",{staticClass:"category"},[t._v("分类: "+t._s(t.$store.state.aHelper.getCategoryName(t.memo.categoryId)))])]),a("div",{staticClass:"content"},[a("div",{staticClass:"text"},[t._v(t._s(t.memo.content))])])])])},k=[],A=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"doDel",value:function(){window.confirm("确认要删除<".concat(this.memo.title,">的笔记吗？"))&&this.$store.state.aHelper.remove(this.memo.id)}},{key:"showEdit",value:function(){var t=JSON.parse(JSON.stringify(this.memo));this.$store.commit("showEditMemo",t)}}]),a}(u["c"]);Object(l["a"])([Object(u["b"])()],A.prototype,"memo",void 0),A=Object(l["a"])([u["a"]],A);var _=A,D=_,S=Object(y["a"])(D,j,k,!1,null,null,null),F=S.exports,M=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.memoArr=t.$store.state.aHelper.memoList,t}return Object(v["a"])(a,[{key:"filterMemo",value:function(){var t=this;return-1==this.$store.state.filterCateId?this.memoArr:this.memoArr.filter((function(e){return e.categoryId==t.$store.state.filterCateId}))}}]),a}(u["c"]);M=Object(l["a"])([Object(u["a"])({components:{MemoItem:F}})],M);var x=M,H=x,E=Object(y["a"])(H,I,O,!1,null,null,null),B=E.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"cover-layer"}),a("div",{staticClass:"editor-layer",attrs:{id:"new-markdown"}},[a("div",{staticClass:"editor-top"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.memo.title,expression:"memo.title"}],staticClass:"editor-title form-control",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.memo.title},on:{input:function(e){e.target.composing||t.$set(t.memo,"title",e.target.value)}}}),a("div",{staticClass:"dropdown select-category"},[a("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[a("span",{staticClass:"category"},[t._v(t._s(this.$store.state.aHelper.getCategoryName(t.memo.categoryId)))]),a("span",{staticClass:"caret"})]),a("ul",{staticClass:"dropdown-menu"},[a("li",{on:{click:function(e){t.memo.categoryId=0}}},[a("a",[t._v("工作")])]),a("li",{on:{click:function(e){t.memo.categoryId=1}}},[a("a",[t._v("生活")])]),a("li",{on:{click:function(e){t.memo.categoryId=2}}},[a("a",[t._v("学习")])])])]),a("ul",{staticClass:"tools"},[a("li",{staticClass:"save",on:{click:t.saveNew}}),a("li",{staticClass:"cancel",on:{click:t.closeWin}})])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo.content,expression:"memo.content"}],staticClass:"text-content form-control",attrs:{placeholder:"内容"},domProps:{value:t.memo.content},on:{input:function(e){e.target.composing||t.$set(t.memo,"content",e.target.value)}}})])])},N=[],$=(a("498a"),function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.memo=new h(-1,0),t}return Object(v["a"])(a,[{key:"created",value:function(){this.memo=this.$store.state.transMemo}},{key:"closeWin",value:function(){this.$store.state.isShow=!1}},{key:"saveNew",value:function(){this.memo&&this.memo.categoryId>-1&&this.memo.title.trim().length>0&&this.memo.content.trim().length>0?(this.memo.id<=-1?this.$store.state.aHelper.add(this.memo):this.$store.state.aHelper.edit(this.memo),this.$store.state.isShow=!1):alert("对不起，输入错误~~！")}}]),a}(u["c"]));$=Object(l["a"])([u["a"]],$);var L=$,Q=L,W=Object(y["a"])(Q,K,N,!1,null,null,null),J=W.exports,T=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);T=Object(l["a"])([Object(u["a"])({components:{MenuBar:w,ItemList:B,MemoEditor:J}})],T);var U=T,Y=U,P=Object(y["a"])(Y,n,i,!1,null,null,null),V=P.exports,R=a("2f62"),z=(a("7db0"),a("c740"),a("d81d"),a("a434"),function(){function t(e,a){Object(r["a"])(this,t),this.dataKey=e,this.primaryKey=a}return Object(v["a"])(t,[{key:"readData",value:function(){var t=localStorage.getItem(this.dataKey),e=[];return null!=t&&(e=JSON.parse(t)),e}},{key:"saveData",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.dataKey,e)}},{key:"addData",value:function(t){var e=this.readData();null==e&&(e=[]);var a=e.length>0?e[e.length-1][this.primaryKey]+1:1;return t[this.primaryKey]=a,e.push(t),this.saveData(e),a}},{key:"removeDataById",value:function(t){var e=this,a=this.readData(),s=a.findIndex((function(a){return a[e.primaryKey]==t}));return s>-1&&(a.splice(s,1),this.saveData(a),!0)}}]),t}()),q=z,Z=function(){function t(){Object(r["a"])(this,t),this.dataHelper=new q("memoData","id"),this.memoList=this.readData()}return Object(v["a"])(t,[{key:"readData",value:function(){var t=this.dataHelper.readData(),e=t.map((function(t){var e=new h;return e.id=t.id,e.categoryId=t.categoryId,e.title=t.title,e.content=t.content,e.createTime=t.createTime,e}));return e}},{key:"getCategoryName",value:function(t){var e=["工作","生活","学习"];return e[t]}},{key:"add",value:function(t){return t.id=this.dataHelper.addData(t),this.memoList.push(t),this.dataHelper.saveData(this.memoList),t.id}},{key:"edit",value:function(t){var e=this.memoList.find((function(e){return e.id==t.id}));e&&(e.categoryId=t.categoryId,e.title=t.title,e.content=t.content,this.dataHelper.saveData(this.memoList))}},{key:"remove",value:function(t){var e=this.memoList.findIndex((function(e){return e.id===t}));e>-1&&(this.memoList.splice(e,1),this.dataHelper.saveData(this.memoList))}}]),t}(),G=Z;s["a"].use(R["a"]);var X=new R["a"].Store({state:{isShow:!1,aHelper:new G,transMemo:null,filterCateId:-1},mutations:{showEditMemo:function(t,e){t.transMemo=e,t.isShow=!0}}}),tt=X;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(V)},store:tt}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.98ce818c.js.map