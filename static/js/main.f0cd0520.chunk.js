(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var c=e(3),i=e.n(c),a=e(1),r=e.n(a),s=e(4),o=e(5),d=e(7),u=e(6),l=(e(12),e(0)),b=function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(s.a)(this,e);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=n.call.apply(n,[this].concat(i))).state={initial:0},t.addOne=function(){t.setState((function(t){return{initial:t.initial+1}}))},t.add100=function(){t.setState((function(t){return{initial:t.initial+100}}))},t.increase=function(){t.state.initial%5===0&&t.add100(),t.addOne()},t.reset=function(){t.setState({initial:0})},t}return Object(o.a)(e,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h1",{children:"Count: ".concat(this.state.initial)}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"button",onClick:this.addOne,className:"card-button",children:"Add one"}),Object(l.jsx)("button",{type:"button",onClick:this.add100,className:"card-button",children:"Add 100"}),Object(l.jsx)("button",{type:"button",onClick:this.increase,className:"card-button",children:"Add one + extra"}),Object(l.jsx)("button",{type:"button",onClick:this.reset,className:"card-button",children:"Reset"})]})]})})}}]),e}(r.a.Component),j=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(b,{})})};i.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f0cd0520.chunk.js.map