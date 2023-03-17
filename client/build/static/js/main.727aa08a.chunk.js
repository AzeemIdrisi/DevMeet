(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,n){},76:function(e,t){},78:function(e,t){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(42),s=n.n(c),i=(n(51),n(14)),r=n(46),l=n(30),o=n.n(l),u=n(0),d=Object(a.createContext)(),j=Object(r.a)("https://coding-interview-platform.vercel.app/"),b=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)(!1),b=Object(i.a)(l,2),m=b[0],p=b[1],O=Object(a.useState)(),g=Object(i.a)(O,2),f=g[0],x=g[1],h=Object(a.useState)(""),v=Object(i.a)(h,2),C=v[0],y=v[1],S=Object(a.useState)({}),N=Object(i.a)(S,2),k=N[0],w=N[1],I=Object(a.useState)(""),T=Object(i.a)(I,2),_=T[0],M=T[1],H=Object(a.useRef)(),E=Object(a.useRef)(),L=Object(a.useRef)();Object(a.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){x(e),H.current.srcObject=e})),j.on("me",(function(e){return M(e)})),j.on("callUser",(function(e){var t=e.from,n=e.name,a=e.signal;w({isReceivingCall:!0,from:t,name:n,signal:a})}))}),[]);return Object(u.jsx)(d.Provider,{value:{call:k,callAccepted:s,myVideo:H,userVideo:E,stream:f,name:C,setName:y,callEnded:m,me:_,callUser:function(e){var t=new o.a({initiator:!0,trickle:!1,stream:f});t.on("signal",(function(t){j.emit("callUser",{userToCall:e,signalData:t,from:_,name:C})})),t.on("stream",(function(e){E.current.srcObject=e})),j.on("callAccepted",(function(e){r(!0),t.signal(e)})),L.current=t},leaveCall:function(){p(!0),L.current.destroy(),window.location.reload()},answerCall:function(){r(!0);var e=new o.a({initiator:!1,trickle:!1,stream:f});e.on("signal",(function(e){j.emit("answerCall",{signal:e,to:k.from})})),e.on("stream",(function(e){E.current.srcObject=e})),e.signal(k.signal),L.current=e}},children:t})},m=function(){var e=Object(a.useContext)(d),t=e.name,n=e.callAccepted,c=e.myVideo,s=e.userVideo,i=e.callEnded,r=e.stream,l=e.call;return Object(u.jsxs)("div",{className:"vidsContainer",children:[n&&!i&&Object(u.jsxs)("div",{className:"userVideo",children:[Object(u.jsx)("video",{playsInline:!0,ref:s,autoPlay:!0}),Object(u.jsx)("div",{children:l.name||"Someone"})]}),r&&Object(u.jsxs)("div",{className:"myVideo",children:[Object(u.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0}),Object(u.jsx)("div",{children:t||"Me"})]})]})},p=n.p+"static/media/call.999a47f7.svg",O=function(){var e=Object(a.useContext)(d),t=e.call,n=e.answerCall,c=e.callAccepted;return Object(u.jsx)(u.Fragment,{children:t.isReceivingCall&&!c&&Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:[t.name||"Someone"," is calling"]}),Object(u.jsx)("button",{onClick:n,children:Object(u.jsx)("img",{src:p,alt:"Answer"})})]})})},g=n(44),f=(n(91),n.p+"static/media/call.999a47f7.svg"),x=n.p+"static/media/copy.0f900a25.svg",h=n.p+"static/media/cut.e580d96e.svg",v=function(e){var t=e.children,n=Object(a.useContext)(d),c=n.me,s=n.name,r=n.setName,l=n.callAccepted,o=n.leaveCall,j=n.callUser,b=n.callEnded,m=Object(a.useState)(""),p=Object(i.a)(m,2),O=p[0],v=p[1];return Object(u.jsxs)("div",{className:"optionsContainer",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",value:s,onChange:function(e){return r(e.target.value)},placeholder:"Name"}),Object(u.jsx)(g.CopyToClipboard,{text:c,children:Object(u.jsx)("button",{children:Object(u.jsx)("img",{src:x,alt:"Copy ID"})})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",value:O,onChange:function(e){return v(e.target.value)},placeholder:"ID to Call"}),l&&!b?Object(u.jsx)("button",{onClick:o,children:Object(u.jsx)("img",{src:h,alt:"Hang Up"})}):Object(u.jsx)("button",{onClick:function(){return j(O)},children:Object(u.jsx)("img",{src:f,alt:"Call"})})]}),t]})},C=n(31),y=n(45),S=n(2),N=n(3),k=n(4),w=n(5),I=(n(92),n.p+"static/media/run.b0900964.svg"),T=function(e){Object(k.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).input=function(e){e.preventDefault(),a.setState({input:e.target.value}),localStorage.setItem("input",e.target.value)},a.userInput=function(e){e.preventDefault(),a.setState({user_input:e.target.value})},a.language=function(e){e.preventDefault(),a.setState({language_id:e.target.value}),localStorage.setItem("language_Id",e.target.value)},a.submit=function(){var e=Object(y.a)(Object(C.a)().mark((function e(t){var n,c,s,i,r,l,o,u,d;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=document.getElementById("output")).innerHTML="",n.innerHTML+="Creating Submission ...\n",e.next=6,fetch("https://judge0-ce.p.rapidapi.com/submissions",{method:"POST",headers:{"x-rapidapi-host":"judge0-ce.p.rapidapi.com","x-rapidapi-key":"8ac1b6c0d1msh3c0cb10d68a04dap192a5cjsn46c9aca7a0da","content-type":"application/json",accept:"application/json"},body:JSON.stringify({source_code:a.state.input,stdin:a.state.user_input,language_id:a.state.language_id})});case 6:return c=e.sent,n.innerHTML+="Submission Created ...\n",e.next=10,c.json();case 10:s=e.sent,i={status:{description:"Queue"},stderr:null,compile_output:null};case 12:if("Accepted"===i.status.description||null!=i.stderr||null!=i.compile_output){e.next=24;break}if(n.innerHTML="Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ".concat(i.status.description),!s.token){e.next=22;break}return r="https://judge0-ce.p.rapidapi.com/submissions/".concat(s.token,"?base64_encoded=true"),e.next=18,fetch(r,{method:"GET",headers:{"x-rapidapi-host":"judge0-ce.p.rapidapi.com","x-rapidapi-key":"8ac1b6c0d1msh3c0cb10d68a04dap192a5cjsn46c9aca7a0da","content-type":"application/json"}});case 18:return l=e.sent,e.next=21,l.json();case 21:i=e.sent;case 22:e.next=12;break;case 24:i.stdout?(o=atob(i.stdout),n.innerHTML="",n.innerHTML+="Results :\n".concat(o,"\nExecution Time : ").concat(i.time," Secs\nMemory used : ").concat(i.memory," bytes")):i.stderr?(u=atob(i.stderr),n.innerHTML="8ac1b6c0d1msh3c0cb10d68a04dap192a5cjsn46c9aca7a0da",n.innerHTML+="\n Error :".concat(u)):(d=atob(i.compile_output),n.innerHTML="",n.innerHTML+="\n Error :".concat(d));case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={input:localStorage.getItem("input")||"",output:"",language_id:localStorage.getItem("language_Id")||2,user_input:""},a}return Object(N.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"compiler",children:Object(u.jsxs)("div",{className:"fields",children:[Object(u.jsx)("div",{className:"code",children:Object(u.jsx)("textarea",{required:!0,name:"solution",id:"source",onChange:this.input,className:" source",value:this.state.input})}),Object(u.jsxs)("div",{className:"outputContainer",children:[Object(u.jsxs)("span",{className:"badge badge-info heading my-2 ",children:[Object(u.jsx)("i",{className:"fas fa-exclamation fa-fw fa-md"})," Output"]}),Object(u.jsx)("textarea",{id:"output"})]}),Object(u.jsxs)("div",{className:"mt-2 ml-5",children:[Object(u.jsxs)("span",{className:"badge badge-primary heading my-2 ",children:[Object(u.jsx)("i",{className:"fas fa-user fa-fw fa-md"})," User Input"]}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{id:"input",onChange:this.userInput})]}),Object(u.jsxs)("select",{value:this.state.language_id,onChange:this.language,id:"tags",className:"form-control form-inline mb-2 language",children:[Object(u.jsx)("option",{value:"54",children:"C++"}),Object(u.jsx)("option",{value:"50",children:"C"}),Object(u.jsx)("option",{value:"62",children:"Java"}),Object(u.jsx)("option",{value:"71",children:"Python"})]}),Object(u.jsxs)("button",{type:"submit",className:"btn btn-danger ml-2 mr-2 ",onClick:this.submit,children:[Object(u.jsx)("i",{className:"fas fa-cog fa-fw"}),Object(u.jsx)("img",{src:I,alt:"Run"})]})]})})}}]),n}(a.Component);n(93);var _=function(){return Object(u.jsxs)("div",{className:"main",children:[Object(u.jsxs)("div",{className:"left",children:[Object(u.jsx)(m,{}),Object(u.jsx)(v,{children:Object(u.jsx)(O,{})})]}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)(T,{})})]})};n(94);s.a.render(Object(u.jsx)(b,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.727aa08a.chunk.js.map