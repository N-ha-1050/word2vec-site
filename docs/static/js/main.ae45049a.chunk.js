(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{81:function(e,t,n){"use strict";n.r(t);var r=n(102),c=n(1),i=n(59),s=n.n(i),a=n(52),o=n.n(a),l=n(60),d=n(4),j=n(103),h=n(61),u=n(93),b=n(94),x=n(95),p=n(104),m=n(97),O=n(98),f=n(99),w=n(107),g=n(100),v=n(105),k=n(101),y=n(106),S=n(2),C="https://word2vec-api-heroku.herokuapp.com/api/word_calc/";function T(){var e=c.useState(""),t=Object(d.a)(e,2),n=t[0],r=t[1],i=c.useState({positive:[],negative:[],result:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:"",10:"",Error:""}}),s=Object(d.a)(i,2),a=s[0],T=s[1],B=c.useState(!1),E=Object(d.a)(B,2),L=E[0],R=E[1],W=c.useState(!1),D=Object(d.a)(W,2),F=D[0],H=D[1],P=c.useState(!1),q=Object(d.a)(P,2),I=q[0],N=q[1],A=c.useState(!1),J=Object(d.a)(A,2),M=J[0],Y=J[1];function _(){return(_=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!0),e.next=3,fetch(C+n+"/",{method:"GET",mode:"cors"}).then((function(e){return e.json()}));case 3:t=e.sent,T(t),R(!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(F&&L)return Object(S.jsx)(j.a,{theme:h.theme,children:Object(S.jsxs)(u.a,{w:"90%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",alignContent:"center",m:"5%",children:[Object(S.jsxs)(b.a,{fontSize:"2xl",children:[n," = "]}),Object(S.jsxs)(x.a,{m:"20px",as:"h1",hidden:!a.result[1],children:["Answer: ",a.result[1]]}),Object(S.jsx)(x.a,{m:"20px",as:"h1",hidden:!a.result.Error,color:"darkred",borderRadius:"5px",p:"5px",border:"solid",children:"Error"}),Object(S.jsx)(x.a,{m:"20px",as:"h1",hidden:Boolean(a.result[1])||Boolean(a.result.Error),color:"purple",borderRadius:"5px",p:"5px",border:"solid",children:"Unexpected Error"}),Object(S.jsx)(p.a,{m:"10px",hidden:I,onClick:function(){return N(!0)},children:"Learn more"}),Object(S.jsx)(p.a,{m:"10px",hidden:!I,onClick:function(){return N(!1)},children:"Hide"}),Object(S.jsx)(m.a,{hidden:!I,marginTop:"10px",variant:"simple",width:"fit-content",minW:"25%",children:Object.keys(a.result).map((function(e){return Object(S.jsxs)(m.c,{children:[Object(S.jsx)(m.b,{color:"1"===e?"gold":"2"===e?"silver":"3"===e?"Brown":"",children:e}),Object(S.jsx)(m.b,{children:a.result[e]})]})}))}),Object(S.jsxs)(u.a,{hidden:!I,marginTop:"10px",children:[Object(S.jsxs)(b.a,{margin:"10px",children:['positive: "',Object.keys(a.positive).map((function(e){return Object(S.jsxs)("span",{children:[a.positive[Number(e)],","]})})),'"']}),Object(S.jsxs)(b.a,{margin:"10px",children:['negative: "',Object.keys(a.negative).map((function(e){return Object(S.jsxs)("span",{children:[a.negative[Number(e)],","]})})),'"']})]}),Object(S.jsx)(p.a,{m:"10px",colorScheme:"red",onClick:function(){H(!1),R(!1),N(!1)},children:"Return"})]})});if(M)return Object(S.jsx)(j.a,{theme:h.theme,children:Object(S.jsxs)(O.a,{w:"90%",justify:"center",align:"center",direction:"column",m:"5%",children:[Object(S.jsx)(x.a,{as:"h1",children:"About"}),Object(S.jsx)(b.a,{children:"This site is ..."}),Object(S.jsx)(x.a,{as:"h2",mt:"50px",children:"How This Site Works"}),Object(S.jsxs)(b.a,{mt:"25px",children:["How to \u2192",Object(S.jsx)(f.a,{href:"https://www.notion.so/word2vec-981b392227f347ecb579a5116ad5f9b7",children:"My Notion"})]}),Object(S.jsx)(x.a,{as:"h2",mt:"50px",children:"Reference Site"}),Object(S.jsxs)(w.b,{children:[Object(S.jsx)(w.a,{children:Object(S.jsx)(f.a,{href:"https://www.youtube.com/watch?v=sK3HqLwag_w",children:"\u5358\u8a9e\u3092\u6570\u5024\u5316\u3057\u3066\u904a\u3093\u3067\u307f\u305f - YouTube"})}),Object(S.jsx)(w.a,{children:Object(S.jsx)(f.a,{href:"https://qiita.com/Blaster36/items/84b1af5802f150017d84",children:"Python\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\uff1a\u30a6\u30a3\u30ad\u30da\u30c7\u30a3\u30a2\u306e\u30c7\u30fc\u30bf\u3092\u4f7f\u3063\u3066word2vec\u3092\u3057\u3066\u307f\u308b\uff5b1. \u30c7\u30fc\u30bf\u53d6\u5f97\uff06\u524d\u51e6\u7406\u7de8\uff5d - Qiita"})}),Object(S.jsx)(w.a,{children:Object(S.jsx)(f.a,{href:"https://swdrsker.hatenablog.com/entry/2017/02/23/193137",children:"word2vec\u3067\u300c\u5358\u8a9e\u306e\u8db3\u3057\u7b97\u5f15\u304d\u7b97\u300d\u3092\u3057\u3066\u307f\u308b - \u6280\u8853\u30e1\u30e2"})})]}),Object(S.jsx)(p.a,{m:"20px",onClick:function(){return Y(!1)},colorScheme:"red",children:"Return"})]})});var z=!1,G=!1;return F&&(z=!0),n||(G=!0),Object(S.jsx)(j.a,{theme:h.theme,children:Object(S.jsxs)(O.a,{w:"90%",h:"100vh",justify:"center",align:"center",direction:"column",mx:"5%",children:[Object(S.jsx)(x.a,{as:"h1",children:"Word2Vec"}),Object(S.jsxs)(b.a,{m:"25px",children:["\u5358\u8a9e\u306e\u8a08\u7b97\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u8a08\u7b97\u5f0f\u3092\u5165\u529b\u3057\u3066\u9001\u4fe1\u3057\u3066\u4e0b\u3055\u3044\u3002",Object(S.jsx)("br",{}),"You can calculate words. Please enter the formula and send."]}),Object(S.jsxs)(g.a,{m:"20px",maxW:"1000px",children:[Object(S.jsx)(v.a,{value:n,onChange:function(e){return r(e.target.value)},placeholder:"\u4f8b) \u738b\u69d8-\u7537\u6027+\u5973\u6027",isDisabled:z,isRequired:!0}),Object(S.jsx)(k.a,{children:"="})]}),Object(S.jsx)(y.a,{direction:["column","row"],spacing:"20px",children:Object(S.jsx)(p.a,{isDisabled:G,isLoading:z,loadingText:"Loading ...",colorScheme:"teal",type:"submit",onClick:function(){return _.apply(this,arguments)},children:"Submit"})})]})})}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(S.jsxs)(c.StrictMode,{children:[Object(S.jsx)(r.a,{}),Object(S.jsx)(T,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B()}},[[81,1,2]]]);
//# sourceMappingURL=main.ae45049a.chunk.js.map