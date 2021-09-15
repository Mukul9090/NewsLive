(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(20),r=a.n(s),i=(a(28),a(8)),l=a(9),o=a(11),j=a(10),b=(a(29),a(7)),h=a(0),d=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark  bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(b.b,{className:"navbar-brand",to:"/general",children:"News"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/general",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/business",children:"Business"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/general",children:"General"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/health",children:"Health"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/science",children:"Science"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/sports",children:"Sports"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/technology",children:"Technology"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/entertainment",children:"Entertainment"})})]})})]})})})}}]),a}(c.Component),p=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,c=e.imgURL,n=e.url;return Object(h.jsx)("div",{className:"my-3",children:Object(h.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(h.jsx)("img",{src:c,className:"card-img-top",alt:"..."}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:t}),Object(h.jsx)("p",{className:"card-text",children:a}),Object(h.jsx)("a",{href:n,className:"btn btn-dark",children:"Read More"})]})]})})}}]),a}(c.Component),u=a(14),g=a.n(u),O=a(18),m=a(23),x=a.p+"static/media/load.0f2c83ef.gif",v=(a(37),c.Component,function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).fetchMoreData=Object(O.a)(g.a.mark((function e(){var t,a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.setState({page:c.state.page+1}),t="https://newsapi.org/v2/top-headlines?country=".concat(c.props.country,"&category=").concat(c.props.category,"&apiKey=b3a4bcefd63c4100bd7dd0f059eb77ee&page=").concat(c.state.page+1,"&pageSize=").concat(c.props.pageSize),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,c.setState({articles:c.state.articles.concat(n.articles)});case 9:case"end":return e.stop()}}),e)}))),c.articles=[],c.state={articles:[],loading:!1,totalResults:0,page:0},c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(g.a.mark((function e(){var t,a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=b3a4bcefd63c4100bd7dd0f059eb77ee&page=").concat(this.state.page+1),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,this.setState({totalResults:c.totalResults,articles:c.articles,page:this.state.page+1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container my-3",children:[Object(h.jsxs)("h1",{children:["Top ",this.props.category," headlines "]}),Object(h.jsx)(m.a,{dataLength:this.state.articles.length,next:this.fetchMoreData,hasMore:this.state.articles.length!==this.parsedata,children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:this.state.articles.map((function(e){return Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsx)(p,{title:e.title?e.title:" ",description:e.description?e.description:" ",imgURL:e.urlToImage?e.urlToImage:"https://clipground.com/images/picture-not-available-clipart-12.jpg",url:e.url?e.url:" "})},e.url)}))})})})]})}}]),a}(c.Component));v.defaultProps={country:"in",category:"general"};var y=a(2),f=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(d,{}),Object(h.jsxs)(y.c,{children:[Object(h.jsx)(y.a,{path:"/NewsLive",children:Object(h.jsx)(v,{country:"in",category:"general"},"general")}),Object(h.jsx)(y.a,{path:"/home",children:Object(h.jsx)(v,{country:"in",category:"general"},"general")}),Object(h.jsx)(y.a,{path:"/business",children:Object(h.jsx)(v,{country:"in",category:"business"},"business")}),Object(h.jsx)(y.a,{path:"/general",children:Object(h.jsx)(v,{country:"in",category:"general"},"general")}),Object(h.jsx)(y.a,{path:"/health",children:Object(h.jsx)(v,{country:"in",category:"health"},"health")}),Object(h.jsx)(y.a,{path:"/sports",children:Object(h.jsx)(v,{country:"in",category:"sports"},"sports")}),Object(h.jsx)(y.a,{path:"/science",children:Object(h.jsx)(v,{country:"in",category:"science"},"science")}),Object(h.jsx)(y.a,{path:"/technology",children:Object(h.jsx)(v,{country:"in",category:"technology"},"technology")}),Object(h.jsx)(y.a,{path:"/entertainment",children:Object(h.jsx)(v,{country:"in",category:"entertainment"},"entertainment")})]})]})})})}}]),a}(c.Component),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),N()}},[[38,1,2]]]);
//# sourceMappingURL=main.680cdf84.chunk.js.map