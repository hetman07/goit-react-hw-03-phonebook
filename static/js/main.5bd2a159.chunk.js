(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,a){t.exports={TaskEditor:"ContactForm_TaskEditor__olbm9",TaskEditorLabel:"ContactForm_TaskEditorLabel__2lFHc",TaskEditorInput:"ContactForm_TaskEditorInput__1-DHE",TaskEditorButton:"ContactForm_TaskEditorButton__3Fnz_"}},11:function(t,e,a){t.exports=a(17)},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(8),s=a.n(r),c=a(10),i=a(3),l=a(4),u=a(6),m=a(5),d=a(19),b=a(9),f=a(1),E=a.n(f),h=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){var a=e.target.dataset.row;t.setState(Object(b.a)({},a,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return o.a.createElement("form",{className:E.a.TaskEditor,onSubmit:this.handleSubmit},o.a.createElement("label",{className:E.a.TaskEditorLabel},"Name",o.a.createElement("input",{className:E.a.TaskEditorInput,type:"text",value:e,onChange:this.handleChange,"data-row":"name"})),o.a.createElement("label",{className:E.a.TaskEditorLabel},"Number",o.a.createElement("input",{className:E.a.TaskEditorInput,type:"text",value:a,onChange:this.handleChange,"data-row":"number"})),o.a.createElement("button",{type:"submit",className:E.a.TaskEditorButton},"Add contact"))}}]),a}(n.Component);h.defaultProps={name:"",number:""};var p=h;function T(t){var e=t.value,a=t.onChangeFilter;return o.a.createElement("div",null,o.a.createElement("label",{className:E.a.TaskEditorLabel},"Find contacts by name",o.a.createElement("input",{className:E.a.TaskEditorInput,type:"text",value:e,onChange:function(t){return a(t.target.value)},"data-row":"filter"})))}var k=a(2),C=a.n(k),v=function(t){var e=t.contacts,a=t.onRemove;return o.a.createElement("div",null,o.a.createElement("h2",null,"Contacts"),o.a.createElement("ul",{className:C.a.TaskList},e.map((function(t){return o.a.createElement("li",{className:C.a.TaskListItem,key:t.id},o.a.createElement("span",{className:C.a.TaskListText},t.name,": "),o.a.createElement("span",{className:C.a.TaskListText},t.number),o.a.createElement("button",{type:"button",className:C.a.TaskListButton,onClick:function(){return a(t.id)}},"Delete"))}))))},L=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,a){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert("CONTACT ".concat(e," IS ALREADY IN CONTACTS."));else if(""===e||""===a)alert("FOR ADD CONTACT IN PHONEBOOK YOU MUST FILLED ALL FIELDS");else{var n={id:Object(d.a)(),name:e,number:a};t.setState((function(t){return{contacts:[].concat(Object(c.a)(t.contacts),[n])}}))}},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,a=e.contacts,n=e.filter;return a.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e!==this.state&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts(),e=this.state.filter;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Phonebook"),o.a.createElement(p,{onAddContact:this.addContact}),o.a.createElement(T,{value:e,onChangeFilter:this.changeFilter}),t.length>0&&o.a.createElement(v,{contacts:t,onRemove:this.removeContact}))}}]),a}(n.Component);L.defaultProp={filter:""};a(16);s.a.render(o.a.createElement(L,null),document.getElementById("root"))},2:function(t,e,a){t.exports={TaskList:"ContactList_TaskList__1_UTO",TaskListItem:"ContactList_TaskListItem__3Ug7_",TaskListText:"ContactList_TaskListText__3hwaa",TaskListButton:"ContactList_TaskListButton__1toE_"}}},[[11,1,2]]]);
//# sourceMappingURL=main.5bd2a159.chunk.js.map