(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,,,function(t,e,o){t.exports={todo_item:"todo-item_todo_item__2ioov",toggle:"todo-item_toggle__3-Ljk",label:"todo-item_label__36Icy",completed:"todo-item_completed___7q5q",delete:"todo-item_delete__2QX5t"}},,function(t,e,o){t.exports={app:"app_app__1--Ie",add_btn:"app_add_btn__2-vTh",todo_wrap:"app_todo_wrap__2pd_u",todo_container:"app_todo_container__SEaxU"}},function(t,e,o){t.exports={footer:"footer_footer__3bLBs",todo_count:"footer_todo_count__3bJrE",status:"footer_status__NRFWq"}},function(t,e,o){t.exports={title:"header_title__39T3r",todo_input:"header_todo_input__1lhzC",new_todo:"header_new_todo__2pWGi"}},,,function(t,e,o){t.exports={todo_list:"todo-list_todo_list__-F1xP"}},,,,,,,function(t,e,o){},,function(t,e,o){"use strict";o.r(e);var n=o(1),c=o.n(n),a=o(9),s=o.n(a),d=(o(17),o(11)),i=o(12),l=o(5),r=o.n(l),_=o(6),j=o.n(_),u=o(0),p=function(t){var e=t.todos.length;return Object(u.jsxs)("section",{className:j.a.footer,children:[Object(u.jsx)("div",{className:j.a.todo_count,children:Object(u.jsxs)("span",{children:[e," left items"]})}),Object(u.jsxs)("ul",{className:j.a.status,children:[Object(u.jsx)("li",{children:"All"}),Object(u.jsx)("li",{children:"Active"}),Object(u.jsx)("li",{children:"Completed"})]})]})},b=o(7),m=o.n(b),x=function(t){var e=t.onAdd,o=Object(n.useRef)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:m.a.title,children:"Todo List"}),Object(u.jsx)("div",{className:m.a.new_todo,children:Object(u.jsx)("input",{ref:o,type:"text",className:m.a.todo_input,placeholder:"Write on your todo..",onKeyPress:function(t){var n=o.current.value;"Enter"===t.key&&e(n)}})})]})},f=o(3),h=o.n(f),O=function(t){var e=t.todo,o=t.onDelete,n=t.onCompleted,c=function(){n(e)};return Object(u.jsxs)("li",{className:"".concat(h.a.todo_item," ").concat(c?"completed":" "),children:[Object(u.jsx)("input",{type:"checkbox",className:h.a.toggle,onChange:c}),Object(u.jsx)("label",{className:h.a.label,children:e.text}),Object(u.jsx)("button",{className:h.a.delete,onClick:function(){o(e)},children:"\u274c"})]})},v=o(10),N=o.n(v),g=function(t){var e=t.todos,o=t.onDelete,n=t.onCompleted,c=function(t){o(t)},a=function(t){n(t)};return Object(u.jsx)("ul",{className:N.a.todo_list,children:e.map((function(t){return Object(u.jsx)(O,{todo:t,onDelete:c,onCompleted:a},t.id)}))})};var w=function(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),o=e[0],c=e[1];return Object(n.useEffect)((function(){c([{id:1,text:"\ubc25\uba39\uae30",completed:!1},{id:2,text:"\ub9ac\uc561\ud2b8\uacf5\ubd80",completed:!1}])}),[]),Object(u.jsx)("div",{className:r.a.app,children:Object(u.jsx)("section",{className:r.a.todo_wrap,children:Object(u.jsxs)("div",{className:r.a.todo_container,children:[Object(u.jsx)(x,{onAdd:function(t){var e=[].concat(Object(d.a)(o),[{id:Date.now(),text:t,completed:!1}]);c(e)}}),Object(u.jsx)(g,{todos:o,onDelete:function(t){var e=o.filter((function(e){return e.id!==t.id}));c(e)},onCompleted:function(t){}}),Object(u.jsx)(p,{todos:o})]})})})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e5ba9653.chunk.js.map