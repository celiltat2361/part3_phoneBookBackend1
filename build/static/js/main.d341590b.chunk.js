(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=t(2),s=function(e){var n=e.filter,t=e.setFilter;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:function(e){t(e.target.value)}}))},l=t(3),i=t.n(l),f="/api/persons",m=function(){return i.a.get(f).then((function(e){return e.data}))},d=function(e){return i.a.post(f,e).then((function(e){return e.data}))},p=function(e){return i.a.put("".concat(f,"/").concat(e.id),e).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(f,"/").concat(e))},h=function(e){var n=e.person,t=e.persons,a=e.setPersons,o=e.setMessage;return r.a.createElement("li",{className:"person"},n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(b(n.id).then((function(e){o({text:"Deleted '".concat(n.name,"'"),class:"info"})})).catch((function(e){o({text:"Information of '".concat(n.name,"' has already been removed from server"),class:"error"})})),a(t.filter((function(n){return n.id!==e}))),setTimeout((function(){o(null)}),3e3))}(n.id)}},"Delete"))},v=function(e){var n=e.persons,t=e.filter,a=e.setPersons,o=e.setMessage;return r.a.createElement("ul",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement(h,{key:e.id,person:e,persons:n,setPersons:a,setMessage:o})})))},E=t(14),g=function(e){var n=e.persons,t=e.setPersons,o=e.setMessage,c=Object(a.useState)(""),s=Object(u.a)(c,2),l=s[0],i=s[1],f=Object(a.useState)(""),m=Object(u.a)(f,2),b=m[0],h=m[1],v=function(e,n){t(e),i(""),h(""),o({text:n,class:"info"}),setTimeout((function(){o(null)}),3e3)};return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),n.some((function(e){return e.name===l}))){var t=Object(E.a)({},n.find((function(e){return e.name===l})));window.confirm("".concat(t.name," is already added to phonebook, replace the old number with a new one?"))&&(t.number=b,p(t).then((function(e){v(n.filter((function(e){return e.name!==l})).concat(e),"Updated '".concat(e.name,"'"))})))}else{var a={id:n.length+1,name:l,number:b};d(a).then((function(e){v(n.concat(e),"Added '".concat(e.name,"'"))}))}}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:l,onChange:function(e){i(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:b,onChange:function(e){h(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:n.class},n.text)},j=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],f=l[1],d=Object(a.useState)(null),p=Object(u.a)(d,2),b=p[0],h=p[1];return Object(a.useEffect)((function(){m().then((function(e){o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:b}),r.a.createElement(s,{filter:i,setFilter:f}),r.a.createElement("h2",null,"add a new"),r.a.createElement(g,{persons:t,setPersons:o,setMessage:h}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{persons:t,filter:i,setPersons:o,setMessage:h}))};t(37);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d341590b.chunk.js.map