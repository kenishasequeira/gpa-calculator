(this.webpackJsonprucalc=this.webpackJsonprucalc||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=(a(27),a(14)),u=a(15),i=a(21),m=a(20),s=(a(28),a(10)),E=a(11),d=a(8),v=a(7);function b(){var e,t=Object(n.useState)([{courseName:"",grade:"",credits:""}]),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(0),u=Object(E.a)(o,2),i=u[0],m=u[1],b=Object(n.useState)(0),p=Object(E.a)(b,2),f=p[0],g=p[1],h=Object(n.useState)(!1),O=Object(E.a)(h,2),C=O[0],N=O[1],j=function(){return N(!1)},k=!1,y=function(e,t){var a=e.target,n=a.name,r=a.value,o=Object(s.a)(l);o[t][n]=r,k=!isNaN(parseInt(o[t].credits)),c(o),F(o)},w=function(){g((function(e){return e+1})),c([].concat(Object(s.a)(l),[{courseName:"",grade:"",credits:""}]))},A=1,F=function(t){k&&function(e){var t=e.reduce((function(e,t){return e+parseFloat(t.credits)}),0);A=t}(t);var a=t.reduce((function(e,t){return e+parseFloat(t.credits)*parseFloat(t.grade)}),0);e=a/parseFloat(A),e=Math.round(100*e)/100,isNaN(e)?m("KINDLY ENTER VALUES CORRECTLY"):m(e)};return r.a.createElement("div",null,l.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("input",{name:"courseName",placeholder:"Enter Course Name",value:e.courseName,onChange:function(e){return y(e,t)}}),"             ",r.a.createElement("select",{name:"grade",placeholder:"Enter Grade",value:e.grade,onChange:function(e){return y(e,t)}},r.a.createElement("option",{value:"0"},"-"),r.a.createElement("option",{value:"4.0"},"A"),r.a.createElement("option",{value:"3.5"},"B+"),r.a.createElement("option",{value:"3.0"},"B"),r.a.createElement("option",{value:"2.5"},"C+"),r.a.createElement("option",{value:"2.0"},"C"),r.a.createElement("option",{value:"1.0"},"D"),r.a.createElement("option",{value:"0.0"},"F")),"             ",r.a.createElement("input",{type:"number",min:"0.5",step:"0.5",name:"credits",placeholder:"Enter Credits",value:e.credits,onChange:function(e){return y(e,t)}}),"             ",1!==l.length&&r.a.createElement(d.a,{variant:"danger",onClick:function(){return function(e){g((function(e){return e-1}));var t=Object(s.a)(l);t.splice(e,1),c(t),k=!0,F(t)}(t)}},"X"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-box"},l.length-1===t&&r.a.createElement(d.a,{variant:"outline-danger",size:"lg",onClick:w},"Add Class")))})),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(d.a,{variant:"outline-dark",onClick:function(){return N(!0)}},"RESET"),r.a.createElement(v.a,{show:C,onHide:j},r.a.createElement(v.a.Header,{closeButton:!0},r.a.createElement(v.a.Title,null,"Reset?")),r.a.createElement(v.a.Body,null,"Are you sure you want to reset all information?"),r.a.createElement(v.a.Footer,null,r.a.createElement(d.a,{variant:"secondary",onClick:j},"No"),r.a.createElement(d.a,{variant:"danger",onClick:function(){var e=Object(s.a)(l);e.splice(0,f),c(e),g(0),m(0),c([{courseName:"",grade:"",credits:""}]),j()}},"Yes")))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",null,r.a.createElement("i",null,r.a.createElement("b",null,"Final GPA:"))," ",JSON.stringify(i))))}var p=a(17),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("style",null,"body { background-color: bisque; }")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",{className:"Headings"},r.a.createElement("h1",null,r.a.createElement("b",null,r.a.createElement("u",null,"RU GPA Calculator")))),r.a.createElement("br",null),r.a.createElement(b,null))}}]),a}(r.a.Component);a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.2e1f1535.chunk.js.map