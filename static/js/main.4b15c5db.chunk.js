(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n.n(c),i=n(8),s=n.n(i),o=(n(15),n(2)),u=n(3),h=n(5),j=n(4),l=(n(16),n(17),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).state={time:new Date},r}return Object(u.a)(n,[{key:"currentTime",value:function(){this.setState({time:new Date})}},{key:"componentDidMount",value:function(){var t=this;setInterval((function(){return t.currentTime()}),1e3)}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"clock",children:this.state.time.toLocaleTimeString("en-GB")})}}]),n}(c.Component)),d=n(7),b=n.n(d),p=n(9),m=(n(19),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).state={weather:{response:1,weather:[{icon:"04n"}],main:{temp:285.66}}},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(p.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/custom-homepage",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY));case 3:return e=t.sent,t.next=6,e.json();case 6:401!==(n=t.sent).cod&&this.setState({weather:n}),this.setState({response:1}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("Error:",t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return 1===this.state.weather.response?Object(r.jsx)("div",{}):Object(r.jsxs)("div",{className:"forecast",children:[Object(r.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(this.state.weather.weather[0].icon,"@2x.png"),alt:""}),"\u0130stanbul Hava Durumu: ",(t=this.state.weather.main.temp,(t-273.15).toFixed(2)),"\xb0\u0421"]});var t}}]),n}(c.Component)),O=(n(20),function(t){return Object(r.jsxs)("ul",{className:"card",children:[Object(r.jsx)("h3",{className:"Title",children:t.title}),t.list.map((function(t){return Object(r.jsx)("li",{className:"text",children:t},t)}))]})}),f=[Object(r.jsx)("a",{href:"https://www.protonmail.com/login",target:"",children:"Protonmail"}),Object(r.jsx)("a",{href:"https://www.youtube.com",target:"",children:"Youtube"}),Object(r.jsx)("a",{href:"https://studio.youtube.com",target:"",children:"Youtube Studio"}),Object(r.jsx)("a",{href:"https://www.github.com",target:"",children:"Github"}),Object(r.jsx)("a",{href:"https://www.odysee.com",target:"",children:"Odysee"}),Object(r.jsx)("a",{href:"https:/www.udemy.com",target:"",children:"Udemy"})],w=[Object(r.jsx)("a",{href:"https://www.reddit.com/r/dataisbeautiful/",children:"r/DataIsBeautiful"}),Object(r.jsx)("a",{href:"https://www.reddit.com/r/firefox/",children:"r/Firefox"}),Object(r.jsx)("a",{href:"https://www.reddit.com/r/linux/",children:"r/Linux"}),Object(r.jsx)("a",{href:"https://www.reddit.com/r/privacy/",children:"r/Privacy"})],x=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:Object(r.jsx)(l,{})}),Object(r.jsx)(m,{}),Object(r.jsxs)("div",{className:"Cards",children:[Object(r.jsx)(O,{title:"S\u0131k Girdi\u011fim Siteler",list:f}),Object(r.jsx)(O,{title:"Reddit",list:w})]})]})}}]),n}(c.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),a(t),i(t)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),v()}],[[21,1,2]]]);
//# sourceMappingURL=main.4b15c5db.chunk.js.map