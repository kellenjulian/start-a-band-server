(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/Shure_mikrofon_55S.7c625113.jpg"},,,,function(e,t,n){e.exports=n(28)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),l=n.n(r),s=(n(16),n(1)),i=n(2),c=n(4),u=n(3),m=n(5),h=(n(18),n(6)),p=n.n(h),d=(n(20),function(e){return o.a.createElement("img",{className:"Logout",src:p.a,alt:"Logout",onClick:e.logout})}),g=function(e){return o.a.createElement("nav",null,o.a.createElement("img",{src:p.a,alt:"Title"}),o.a.createElement(d,{logout:e.logout}))},f=(n(22),n(9)),b="";switch(window.location.hostname){case"localhost":b="http://localhost:3000<Port of your local API>";break;case"kj-start-a-band-client.herokuapp.com":b="https://kj-start-a-band.herokuapp.com"}var E=b,v=(n(24),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={login:!0,userName:"",email:"",isBand:"",password:""},n.handleSubmit=function(e){e.preventDefault();var t=n.state.login?"".concat(E,"/auth/signin"):"".concat(E,"/auth/signup");fetch(t,{method:"POST",body:JSON.stringify({userName:n.state.userName,email:n.state.email,isBand:n.state.isBand,password:n.state.password}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return n.props.tokenHandler(e.sessionToken)})},n.handleChange=function(e){n.setState(Object(f.a)({},e.target.id,e.target.value),function(){return console.log(n.state)})},n.logginToggle=function(e){e.preventDefault();var t=n.state.login;n.setState({login:!t,userName:"",email:"",isBand:"",password:""})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.login?"Login":"Signup",t=this.state.login?null:o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"userName"},"UserName:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange,value:this.state.userName}),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"userName"},"UserName:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange,value:this.state.userName}),o.a.createElement("br",null));return o.a.createElement("form",{className:"cardlike",onSubmit:this.handleSubmit},o.a.createElement("h1",null,e),o.a.createElement("label",{htmlFor:"email"},"Email:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",id:"email",onChange:this.handleChange,value:this.state.email}),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"password"},"Password:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",id:"password",onChange:this.handleChange,value:this.state.password}),o.a.createElement("br",null),t,o.a.createElement("button",{onClick:this.logginToggle},"Login/Signup Toggle"),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Submit User Data"))}}]),t}(a.Component)),k=function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.post.bandName),o.a.createElement("td",null,e.post.location),o.a.createElement("td",null,e.post.influentialArtists),o.a.createElement("td",null,e.post.lookingFor),o.a.createElement("td",null,e.post.instrumentsSkills))},w=(n(26),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pies:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(E,"/post"),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){return e.setState({posts:t})})}},{key:"render",value:function(){var e=this.state.posts.map(function(e){return o.a.createElement(k,{post:e})});return o.a.createElement("table",null,o.a.createElement("tbody",null,e))}}]),t}(a.Component)),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={sessionToken:void 0},n.handleSubmit=function(e){fetch("".concat(E,"/pies/").concat(e.target.value))},n.removeSessionToken=function(){n.setState({sessionToken:void 0})},n.storeSessionToken=function(e){n.setState({sessionToken:e})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"viewConductor",value:function(){return void 0!==this.state.sessionToken?o.a.createElement(w,null):o.a.createElement(v,{tokenHandler:this.storeSessionToken})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,{logout:this.removeSessionToken}),this.viewConductor())}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.5a38bbe5.chunk.js.map