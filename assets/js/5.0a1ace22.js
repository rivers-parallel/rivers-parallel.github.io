(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{326:function(e,t,a){},354:function(e,t,a){"use strict";a(326)},358:function(e,t,a){"use strict";a.r(t);a(24),a(90),a(63),a(92);var o={name:"CodeGroup",data:function(){return{codeTabs:[],activeCodeTabIndex:-1}},watch:{activeCodeTabIndex:function(e){this.activateCodeTab(e)}},mounted:function(){this.loadTabs()},methods:{changeCodeTab:function(e){this.activeCodeTabIndex=e},loadTabs:function(){var e=this;this.codeTabs=(this.$slots.default||[]).filter((function(e){return Boolean(e.componentOptions)})).map((function(t,a){return""===t.componentOptions.propsData.active&&(e.activeCodeTabIndex=a),{title:t.componentOptions.propsData.title,elm:t.elm}})),-1===this.activeCodeTabIndex&&this.codeTabs.length>0&&(this.activeCodeTabIndex=0),this.activateCodeTab(0)},activateCodeTab:function(e){this.codeTabs.forEach((function(e){e.elm&&e.elm.classList.remove("theme-code-block__active")})),this.codeTabs[e].elm&&this.codeTabs[e].elm.classList.add("theme-code-block__active")}}},c=(a(354),a(42)),n=Object(c.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ClientOnly",[a("div",{staticClass:"theme-code-group"},[a("div",{staticClass:"theme-code-group__nav"},[a("ul",{staticClass:"theme-code-group__ul"},e._l(e.codeTabs,(function(t,o){return a("li",{key:t.title,staticClass:"theme-code-group__li"},[a("button",{staticClass:"theme-code-group__nav-tab",class:{"theme-code-group__nav-tab-active":o===e.activeCodeTabIndex},on:{click:function(t){return e.changeCodeTab(o)}}},[e._v("\n            "+e._s(t.title)+"\n          ")])])})),0)]),e._v(" "),e._t("default"),e._v(" "),e.codeTabs.length<1?a("pre",{staticClass:"pre-blank"},[e._v("// Make sure to add code blocks to your code group")]):e._e()],2)])}),[],!1,null,"a5eca7b4",null);t.default=n.exports}}]);