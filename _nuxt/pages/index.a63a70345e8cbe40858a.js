webpackJsonp([0],{"+Xkq":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"+iQi":function(t,e,i){"use strict";var n=i("7t+N"),a=i.n(n);e.a={props:{counter:{type:Object}},mounted:function(){a()(".ui.dropdown").dropdown()},methods:{onClickMinus:function(){this.$store.dispatch("countDown",{title:this.counter.title})},onClickPlus:function(){this.$store.dispatch("countUp",{title:this.counter.title})},onClickReset:function(){this.$store.dispatch("reset",{title:this.counter.title})},onClickDelete:function(){this.$store.dispatch("removeCounter",{title:this.counter.title})}}}},"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("m0jI"),a=i("rGQh"),o=!1;var s=function(t){o||i("2HtV")},c=i("VU/8")(n.a,a.a,!1,s,"data-v-2a183b29",null);c.options.__file="pages/index.vue",e.default=c.exports},"2HtV":function(t,e,i){var n=i("98WH");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("65e14404",n,!1)},"3Vc1":function(t,e,i){var n=i("54so");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("b3432d70",n,!1)},"54so":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".ui.dropdown[data-v-f35c5f1e]{position:absolute;top:0;right:0;margin:14px}.extra.content[data-v-f35c5f1e]{padding:0!important}.ui.basic.button[data-v-f35c5f1e]{-webkit-box-shadow:none!important;box-shadow:none!important}.ui.basic.button[data-v-f35c5f1e]:active,.ui.basic.button[data-v-f35c5f1e]:focus,.ui.basic.button[data-v-f35c5f1e]:hover{background:transparent none!important}",""])},"98WH":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".container[data-v-2a183b29]{margin-top:26.25px;margin-bottom:26.25px}.extra.content[data-v-2a183b29]{padding:0!important}.footer[data-v-2a183b29]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-top:14px}.footer a[data-v-2a183b29],.footer a[data-v-2a183b29]:active,.footer a[data-v-2a183b29]:hover,.footer a[data-v-2a183b29]:visited{color:rgba(0,0,0,.6)}",""])},A3mP:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui card",class:t.counter.color},[i("div",{staticClass:"center aligned content"},[i("div",{staticClass:"ui pointing dropdown top right"},[i("i",{staticClass:"ellipsis vertical grey icon"}),i("div",{staticClass:"menu"},[i("div",{staticClass:"item",on:{click:t.onClickReset}},[t._v("Reset")]),i("div",{staticClass:"item",on:{click:t.onClickDelete}},[t._v("Delete")])])]),i("div",{staticClass:"header"},[t._v("\n      "+t._s(t.counter.title)+"\n    ")]),i("div",{staticClass:"description"},[i("div",{staticClass:"ui huge statistic"},[i("div",{staticClass:"value"},[t._v("\n          "+t._s(t.counter.count)+"\n        ")])])])]),i("div",{staticClass:"ui bottom attached icon buttons"},[i("div",{staticClass:"ui basic button",on:{click:t.onClickMinus}},[i("i",{staticClass:"minus big icon"})]),i("div",{staticClass:"ui basic button",on:{click:t.onClickPlus}},[i("i",{staticClass:"plus big icon"})])])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},"I++x":function(t,e,i){"use strict";var n=i("oLZv"),a=i("ntFR"),o=!1;var s=function(t){o||i("WkKI")},c=i("VU/8")(n.a,a.a,!1,s,"data-v-c97fe794",null);c.options.__file="components/AddCounter.vue",e.a=c.exports},K1VX:function(t,e,i){"use strict";var n=i("7t+N"),a=i.n(n);e.a={props:{emoji:{type:String}},mounted:function(){a()(".ui.dropdown").dropdown()},computed:{colors:function(){return[{name:"Red",value:"red"},{name:"Orange",value:"orange"},{name:"Yellow",value:"yellow"},{name:"Olive",value:"olive"},{name:"Green",value:"green"},{name:"Teal",value:"teal"},{name:"Blue",value:"blue"},{name:"Violet",value:"violet"},{name:"Purple",value:"purple"},{name:"Pink",value:"pink"},{name:"Brown",value:"brown"},{name:"Grey",value:"grey"},{name:"Black",value:"black"}]}},methods:{onChange:function(t){this.$emit("change",t)}}}},O2wk:function(t,e,i){"use strict";var n=i("+iQi"),a=i("A3mP"),o=!1;var s=function(t){o||i("3Vc1")},c=i("VU/8")(n.a,a.a,!1,s,"data-v-f35c5f1e",null);c.options.__file="components/Counter.vue",e.a=c.exports},"Sd8+":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".ui.basic.button[data-v-c97fe794]{-webkit-box-shadow:none!important;box-shadow:none!important}.ui.basic.button[data-v-c97fe794]:active,.ui.basic.button[data-v-c97fe794]:focus,.ui.basic.button[data-v-c97fe794]:hover{background:transparent none!important}",""])},VpE1:function(t,e,i){"use strict";var n=i("K1VX"),a=i("tAYx"),o=!1;var s=function(t){o||i("lLY9")},c=i("VU/8")(n.a,a.a,!1,s,"data-v-d248cd6e",null);c.options.__file="components/ColorDropdown.vue",e.a=c.exports},WkKI:function(t,e,i){var n=i("Sd8+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("48090243",n,!1)},lLY9:function(t,e,i){var n=i("+Xkq");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("4de05812",n,!1)},m0jI:function(t,e,i){"use strict";var n=i("O2wk"),a=i("I++x");e.a={components:{Counter:n.a,AddCounter:a.a},computed:{counters:function(){return this.$store.state.counters}}}},ntFR:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui card"},[i("div",{staticClass:"center aligned content"},[i("div",{staticClass:"ui form"},[i("div",{staticClass:"field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"field"},[i("ColorDropdown",{on:{change:t.onChangeColor}})],1)])]),i("div",{staticClass:"center aligned extra content"},[i("div",{staticClass:"ui one buttons"},[i("div",{staticClass:"ui basic submit button",on:{click:t.onClickAdd}},[t._v("\n        Add\n      ")])])])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},oLZv:function(t,e,i){"use strict";var n=i("7t+N"),a=i.n(n),o=i("VpE1");e.a={data:function(){return{title:null,color:null}},components:{ColorDropdown:o.a},mounted:function(){a()(".form").form({on:"blur",fields:{title:["empty"],color:["empty"]}})},methods:{onChangeColor:function(t){this.color=t},onClickAdd:function(){!1!==a()(".form").form("validate form")&&(this.$store.dispatch("addCounter",{title:this.title,color:this.color}),this.title=null)}}}},rGQh:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui container"},[e("div",{staticClass:"ui four doubling stackable cards"},this._l(this.counters,function(t){return e("Counter",{key:t.title,attrs:{counter:t}})})),e("div",{staticClass:"ui four doubling stackable cards"},[e("AddCounter")],1),this._m(0)])};n._withStripped=!0;var a={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui footer"},[e("a",{attrs:{href:"https://quanon.github.io/"}},[this._v("quanon.github.io")])])}]};e.a=a},tAYx:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui selection labeled icon dropdown"},[i("input",{attrs:{type:"hidden",name:"color"},on:{change:function(e){t.onChange(e.target.value)}}}),i("i",{staticClass:"dropdown icon"}),i("div",{staticClass:"default text"},[t._v("Color")]),i("div",{staticClass:"menu"},t._l(t.colors,function(e){return i("div",{staticClass:"item",attrs:{"data-value":e.value}},[i("div",{staticClass:"ui empty circular label",class:e.value}),t._v("\n      "+t._s(e.name)+"\n    ")])}))])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a}});