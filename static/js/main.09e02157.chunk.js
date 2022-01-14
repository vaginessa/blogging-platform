(this["webpackJsonpblogging-platform"]=this["webpackJsonpblogging-platform"]||[]).push([[0],{79:function(e,t,c){},80:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),r=c(64),l=c.n(r),n=(c(76),c(77),c(78),c(79),c(14)),o=(c(80),c(20)),i=c(16),b=c(1);function j(e){var t=e.to,c=e.onClick,s=e.text;return Object(b.jsx)(i.b,{className:"nav-link",to:t,onClick:c,children:s})}function u(e){var t=e.to,c=e.style,s=e.onClick,a=e.text,r=e.isCollapsed;return Object(b.jsx)(i.b,{type:"button",to:t,className:"link-button btn btn-outline-"+c+(r?" ms-2":" mt-3 d-block"),onClick:s,children:a})}var d=[{to:"/",text:"About"},{to:"/blogs",text:"Blogs"},{to:"/bloggers",text:"Bloggers"}],g=[{to:"/login",text:"Sign In",style:"success"},{to:"/signup",text:"Create Account",style:"info"}],O=[{to:"/",text:"Log Out",style:"danger"}];function h(e){var t=e.userFirstName,c=e.userLastName,a=e.logOut,r=Object(s.useState)(!0),l=Object(n.a)(r,2),o=l[0],h=l[1],m=function(){h(!o)};return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Blogging Platform"}),Object(b.jsx)("button",{className:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":!!o,"aria-label":"Toggle navigation",onClick:m,children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"".concat(o?"collapse":null," navbar-collapse"),id:"navbarColor01",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto",children:d.map((function(e,t){return Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j,{to:e.to,onClick:function(){o||m()},text:e.text})},"nav-item-"+t)}))}),Object(b.jsx)("div",{children:t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(i.b,{to:"/dashboard",className:"text-light text-muted",style:{textDecoration:"none"},onClick:function(){o||m()},children:[Object(b.jsx)("span",{className:"me-2",children:Object(b.jsx)("i",{className:"bi bi-person-circle"})}),Object(b.jsxs)("span",{className:"me-3",children:[t," ",c]})]}),O.map((function(e,t){return Object(b.jsx)(u,{to:e.to,text:e.text,style:e.style,isCollapsed:o,onClick:function(){a(),o||m()}},"private-link-btn-"+t)}))]}):Object(b.jsx)(b.Fragment,{children:g.map((function(e,t){return Object(b.jsx)(u,{to:e.to,text:e.text,style:e.style,isCollapsed:o,onClick:o?null:function(){return m()}},"public-link-btn-"+t)}))})})]})]})})}var m,x=c(13),f=c(58),p=c(31),v=c(9);try{m=Object(f.a)()}catch(ne){m=Object(f.b)({apiKey:"AIzaSyCDziv5T2lwy_1jcHriik2c9hWd1qPcY_s",authDomain:"blogging-platform-4ebc2.firebaseapp.com",databaseURL:"https://blogging-platform-4ebc2-default-rtdb.firebaseio.com",projectId:"blogging-platform-4ebc2",storageBucket:"blogging-platform-4ebc2.appspot.com",messagingSenderId:"669118367342",appId:"1:669118367342:web:0348ae0115ae90740dc87f",measurementId:"G-PQXT1EE1GJ"})}var N=Object(p.c)(m),y=Object(v.b)(m),k=Object(s.createContext)(),w=function(){return Object(s.useContext)(k)};function B(e){var t=e.children,c=Object(s.useState)(null),a=Object(n.a)(c,2),r=a[0],l=a[1],o=Object(s.useState)(),i=Object(n.a)(o,2),j=i[0],u=i[1],d=Object(s.useState)(),g=Object(n.a)(d,2),O=g[0],h=g[1],m=Object(s.useState)(),f=Object(n.a)(m,2),w=f[0],B=f[1],C=Object(s.useState)(),D=Object(n.a)(C,2),L=D[0],T=D[1],U=Object(s.useState)(),S=Object(n.a)(U,2),A=S[0],I=S[1],P=Object(s.useState)(),Y=Object(n.a)(P,2),E=Y[0],F=Y[1],K=Object(s.useState)(),R=Object(n.a)(K,2),V=R[0],q=R[1],M=Object(s.useState)(),G=Object(n.a)(M,2),H=G[0],W=G[1],_=Object(s.useState)(),J=Object(n.a)(_,2),z=J[0],Q=J[1],X=Object(s.useState)(),Z=Object(n.a)(X,2),$=Z[0],ee=Z[1];Object(s.useEffect)((function(){Object(p.d)(N,(function(e){if(e){l(e),console.log("user logged in. user:",e);var t=Object(v.g)(y,"users/"+e.uid+"/privateData");Object(v.d)(t,(function(e){var t=e.val();console.log("user private data:",t),u(t)}));var c=Object(v.g)(y,"users/"+e.uid+"/publicData/data");Object(v.d)(c,(function(e){var t=e.val();console.log("user public data:",t),h(t)}))}else l(null),u(null),h(null),console.log("user is logged out")}))}),[]);var te={signIn:function(e){var t=e.email,c=e.password;return Object(p.e)(N,t,c).catch((function(e){alert(e.message)}))},signUp:function(e){return Object(p.a)(N,e.email,e.password).then((function(t){console.log("user is sign up. userCredential.user: ",t.user),Object(v.i)(Object(v.g)(y,"users/"+t.user.uid),{privateData:{email:e.email},publicData:{data:{firstName:e.firstName,lastName:e.lastName,userName:e.userName}}}).catch((function(e){alert(e.message)})),Object(v.i)(Object(v.g)(y,"users/listOrderedByKeys/"+t.user.uid),{firstName:e.firstName,lastName:e.lastName,userName:e.userName}).catch((function(e){alert(e.message)})),Object(v.i)(Object(v.g)(y,"users/listOrderedByUserName/"+e.userName),{firstName:e.firstName,lastName:e.lastName,userId:t.user.uid}).catch((function(e){alert(e.message)}))})).catch((function(e){alert(e.message)}))},logOut:function(){return Object(p.f)(N).then((function(){l(null)})).catch((function(e){alert(e.message)}))},user:r,userPrivateData:j,userPublicData:O,fetchUsersListOrderedByKeys:function(){var e=Object(v.f)(Object(v.g)(y,"users/listOrderedByKeys"),Object(v.c)(10));Object(v.d)(e,(function(e){var t=e.val();console.log("users list ordered by user id object:",t),I(t)}))},fetchUsersListOrderedByUserName:function(){var e=Object(v.f)(Object(v.g)(y,"users/listOrderedByUserName"),Object(v.c)(10));Object(v.d)(e,(function(e){var t=e.val();console.log("users list ordered by user name object:",t),T(t)}))},usersListOrderedByKeys:A,usersListOrderedByUserName:L,fetchBloggerPublicData:function(e){var t=Object(v.g)(y,"users/"+e+"/publicData/data");Object(v.d)(t,(function(e){var t=e.val();console.log("blogger public data object:",t),F(t)}))},bloggerPublicData:E,fetchBloggerBlogsList:function(e){var t=Object(v.g)(y,"users/"+e+"/publicData/blogs");Object(v.d)(t,(function(e){var t=e.val();console.log("blogger blogs list object:",t),q(t)}))},bloggerBlogsList:V,getBloggerIdByUserName:function(e){var t=Object(v.g)(y,"users/listOrderedByUserName/"+e);Object(v.d)(t,(function(t){var c=t.val();c?(console.log("blogger id got by user name:",c.userId),W(c.userId)):console.log("There is no user with user name:",e)}))},bloggerId:H,setBloggerId:W,blog:z,fetchBlog:function(e){var t=Object(v.g)(y,"blogs/"+e);Object(v.d)(t,(function(e){var t=e.val();console.log("blog object:",t),Q(t)}))},fetchUserBlogsList:function(e){var t=Object(v.g)(y,"users/"+e+"/publicData/blogs");Object(v.d)(t,(function(e){var t=e.val();console.log("current user blogs list data object:",t),B(t)}))},userBlogsList:w,updateUserPublicData:function(e){Object(v.i)(Object(v.g)(y,"users/"+r.uid+"/publicData/data"),Object(x.a)({},e))},blogs:$,fetchBlogs:function(){var e=Object(v.g)(y,"blogs");Object(v.d)(e,(function(e){var t=e.val();ee(t)}))},deleteBlog:function(e){Object(v.h)(Object(v.g)(y,"blogs/"+e)).then((function(){console.log("blog "+e+" was deleted")})).catch((function(e){console.log(e.message)}))},addBlog:function(e){var t=Object(v.e)(Object(v.a)(Object(v.g)(y),"blogs")).key;t&&Object(v.i)(Object(v.g)(y,"blogs/"+t),Object(x.a)(Object(x.a)({},e),{},{author:O.firstName+" "+O.lastName,userName:O.userName,userId:r.uid}))},updateBlog:function(e,t){Object(v.i)(Object(v.g)(y,"blogs/"+e),Object(x.a)({},t))},addArticle:function(e,t,c){var s=Object(v.e)(Object(v.a)(Object(v.g)(y),"blogs/"+e+"/articles/")).key;s&&Object(v.i)(Object(v.g)(y,"blogs/"+e+"/articles/"+s),Object(x.a)(Object(x.a)({},c),{},{author:O.firstName+" "+O.lastName,userName:O.userName,userId:r.uid,blogKey:e,blogTitle:t}))},deleteArticle:function(e,t){Object(v.h)(Object(v.g)(y,"blogs/"+e+"/articles/"+t)).then((function(){console.log("article "+t+" in blog "+e+" was deleted")})).catch((function(e){console.log(e.message)}))},updateArticle:function(e,t,c){c?Object(v.i)(Object(v.g)(y,"blogs/"+e+"/articles/"+t),Object(x.a)({},c)):alert("There is no data to update... The article isn't updated.")},deleteUserAccount:function(){console.log("deleteUser operations:");var e=N.currentUser;console.log("userForDelete:",e);var t=e.uid;if(console.log("userIdForDelete:",t),e&&t){Object(v.h)(Object(v.g)(y,"users/"+e.uid)).then((function(){console.log("User data of deleted user "+t+" was deleted...")})).catch((function(e){alert(e.message)}));var c=Object.entries($).filter((function(e){return e[1].userId===t}));if(console.log("userBlogsForDelete:",c),c&&c.length)!function(){for(var s=[],a=0;a<c.length;a++){var r=c[a][0];s.push(r)}if(console.log("userBlogsKeysForDelete:",s),s&&s.length)for(var l=function(c){var a=s[c];Object(v.h)(Object(v.g)(y,"blogs/"+a)).then((function(){(console.log("Blog "+a+" of deleted user "+t+" was deleted..."),c===s.length-1)&&(confirm("Your blogs & user data was deleted. Now press OK to delete your account")&&Object(p.b)(e).then((function(){console.log("User "+t+" was deleted.")})).catch((function(e){alert(e.message,"Try again to delete your account. Your blogs & user data were already deleted.")})))})).catch((function(e){alert(e.message)}))},n=0;n<s.length;n++)l(n);else console.log("There are no user blogs to delete... So delete user."),confirm("Your blogs & user data was deleted. Now press OK to delete your account")&&Object(p.b)(e).then((function(){console.log("User "+t+" was deleted.")})).catch((function(e){alert(e.message,"Try again to delete your account. Your blogs & user data were already deleted.")}))}();else console.log("There are no user blogs to delete... So delete user."),confirm("Your blogs & user data was deleted. Now press OK to delete your account")&&Object(p.b)(e).then((function(){console.log("User "+t+" was deleted.")})).catch((function(e){alert(e.message,"Try again to delete your account. Your blogs & user data were already deleted.")}))}else alert("You need to be signed in to delete your account. Try again!")}};return Object(b.jsx)(k.Provider,{value:te,children:t})}function C(e){var t=e.blog;return Object(b.jsxs)("div",{className:"blog-card",children:[Object(b.jsx)("hr",{}),Object(b.jsx)(i.b,{to:"/blogs/"+t.blogLink,children:Object(b.jsx)("h3",{children:t.title})}),Object(b.jsxs)("p",{children:["by",Object(b.jsx)(i.b,{to:"bloggers/"+t.userName,className:"ms-2",children:t.author})]}),Object(b.jsx)("p",{children:t.description})]})}function D(){var e=w(),t=e.blogs,c=e.fetchBlogs;return Object(s.useEffect)((function(){c()}),[]),t?Object(b.jsx)("div",{className:"blogs-page",children:Object(b.jsxs)("div",{className:"blogs-list",children:[Object(b.jsx)("h1",{children:"Blogs"}),Object.entries(t).map((function(e,t){return Object(b.jsx)(C,{blog:e[1]},"blog-card-"+t)}))]})}):Object(b.jsx)("p",{children:"Downloading blogs or... there is no blogs..."})}function L(e){var t=e.articles,c=e.url;return Object(b.jsxs)("nav",{className:"table-of-content",children:[Object(b.jsx)("hr",{}),Object(b.jsx)("h5",{className:"text-center",children:"Table of content"}),Object(b.jsx)("ul",{children:Object.entries(t).map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:c+"/"+e[1].articleLink,className:"d-block",children:e[1].title})},e[0])}))})]})}function T(e){var t=e.item;return Object(b.jsxs)("header",{className:"text-center",children:[Object(b.jsx)("h1",{children:t.title}),Object(b.jsxs)("p",{children:["by",Object(b.jsx)(i.b,{to:"/bloggers/"+t.userName,className:"ms-2",children:t.author})]}),Object(b.jsxs)("p",{children:[t.createdAt&&t.createdAt,t.updatedAt&&(t.updatedAt===t.createdAt?null:" / "+t.updatedAt)]}),Object(b.jsx)("p",{children:t.description})]})}function U(){var e=Object(o.g)().url,t=Object(o.f)().blogLink,c=w(),a=c.blogs,r=c.fetchBlogs,l=Object(s.useState)(null),i=Object(n.a)(l,2),j=i[0],u=i[1];return Object(s.useEffect)((function(){r()}),[]),Object(s.useEffect)((function(){if(a){var e=Object.entries(a).find((function(e){return e[1].blogLink===t}))[1];u(e)}else console.log("there are no blogs or blogLink in BlogPage ...")}),[a,t]),j?Object(b.jsxs)("section",{className:"blog",children:[Object(b.jsx)(T,{item:j}),j.articles?Object(b.jsx)(L,{articles:j.articles,url:e}):Object(b.jsx)("p",{children:"There are no articles yet..."})]}):Object(b.jsx)("p",{children:"Downloading data or there is no data..."})}var S=c(17);function A(e){var t=e.structure,c=e.data,a=e.onSubmit,r=e.text,l=e.to,o=e.formClassname,i=Object(s.useState)(),j=Object(n.a)(i,2),d=j[0],g=j[1];return Object(s.useEffect)((function(){if(t){var e=[];Object.keys(t).map((function(s){var a=c&&c[s]?[s,c[s]]:[s,t[s].value?t[s].value:""];return e.push(a)})),c?console.log("item array created from passed data:",e):console.log("item array created from structure template:",e),g([].concat(e))}}),[t,c]),!t||t&&!d?Object(b.jsx)("p",{children:"Nothing has been passed to the Form component..."}):Object(b.jsxs)("form",{className:o,children:[Object(b.jsx)("div",{className:"row mb-3",children:Object.keys(t).map((function(e,c){return Object(b.jsx)("div",{className:"mb-2",children:Object(b.jsx)("input",{className:"form-control",type:t[e].type?t[e].type:"text",value:d[c]?d[c][1]:"",placeholder:t[e].placeholder?t[e].placeholder:e,onChange:function(e){var t=Object(S.a)(d);t[c]=Object(S.a)(t[c]),t[c][1]=e.target.value,g(Object(S.a)(t))}})},e+"-input-div")}))}),Object(b.jsx)(u,{text:r,style:"success",to:l,onClick:function(){a(Object.fromEntries(d))}})]})}var I={email:{type:"email"},password:{type:"password"}},P={firstName:{placeholder:"input your real first name"},lastName:{placeholder:"input your real last name"},userName:{placeholder:"input your user name using lower case letters only"}},Y=Object(x.a)(Object(x.a)({},P),I),E={title:{},description:{}};function F(){var e=w(),t=e.userPublicData,c=e.updateUserPublicData,s=e.deleteUserAccount;return t?Object(b.jsxs)("div",{className:"edit-user-data-section",children:[Object(b.jsx)(A,{structure:P,data:t,onSubmit:function(e){e.firstName.replace(/\s/g,"").length&&e.lastName.replace(/\s/g,"").length&&e.userName.replace(/\s/g,"").length?c(e):alert("You need to complete all input fields (not only white spaces...) to update your account data!")},to:"/dashboard",text:"save changes",formClassname:"edit-user-data-form"}),Object(b.jsx)(u,{to:"/dashboard",style:"danger",text:"delete my account",onClick:function(){confirm("Are you sure, you want to delete your account & your articles forever? There's no turning back... Delete account?")&&s()}})]}):Object(b.jsx)("p",{children:"Downloading your data..."})}function K(e){return e.replace(/ /g,"-").toLowerCase()}function R(){var e=Object(o.f)().blogLink,t=w(),c=t.blogs,a=t.deleteBlog,r=t.updateBlog,l=t.deleteArticle,j=Object(s.useState)(null),u=Object(n.a)(j,2),d=u[0],g=u[1],O=Object(s.useState)(null),h=Object(n.a)(O,2),m=h[0],f=h[1];return Object(s.useEffect)((function(){if(c){var t=Object.entries(c).filter((function(t){return t[1].blogLink===e})),s=t[0][1],a=t[0][0];g(s),f(a)}else console.log("there are no blogs or blogLink in BlogPage ...")}),[c,e]),d||m?Object(b.jsxs)("div",{className:"blog-edition-section row",children:[Object(b.jsx)("div",{className:"col-lg",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"mb-2",children:[Object(b.jsx)("h4",{className:"text-center",children:"Blog"}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:"Blog title"}),Object(b.jsx)("input",{type:"text",className:"form-control",defaultValue:d.title,onChange:function(e){return g(Object(x.a)(Object(x.a)({},d),{},{title:e.target.value,blogLink:K(e.target.value)}))}})]}),Object(b.jsxs)("div",{className:"mb-2",children:[Object(b.jsx)("p",{children:"Blog description"}),Object(b.jsx)("textarea",{type:"text",className:"form-control",defaultValue:d.description,onChange:function(e){return g(Object(x.a)(Object(x.a)({},d),{},{description:e.target.value}))}})]}),Object(b.jsx)(i.b,{to:"/dashboard/user-blogs",type:"button",className:"btn btn-success mb-3 d-block",style:{width:"100%"},onClick:function(){d.title.replace(/\s/g,"").length&&d.description.replace(/\s/g,"").length?r(m,d):alert("You need to complete all input fields (not only white spaces...) to update your blog data... Try again!")},children:"Save changes"}),Object(b.jsx)(i.b,{to:"/dashboard/user-blogs",type:"button",className:"btn btn-outline-danger mb-3 d-block",onClick:function(){confirm("Are you sure, you want to delete this blog & all articles from this blog forever? There's no turning back... Delete blog?")&&a(m)},children:"Delete blog"})]})}),Object(b.jsxs)("div",{className:"col-lg",children:[Object(b.jsx)("h4",{className:"text-center",children:"Articles"}),Object(b.jsx)("hr",{}),d.articles?Object.entries(d.articles).map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md",children:Object(b.jsx)("h5",{children:e[1].title})}),Object(b.jsxs)("div",{className:"col-md text-end",children:[Object(b.jsx)(i.b,{to:"/edit-article/"+m+"/"+e[0],className:"btn btn-secondary d-inline",children:Object(b.jsx)("i",{className:"bi bi-pencil"})}),Object(b.jsx)(i.b,{to:"/blogs/"+d.blogLink+"/"+e[1].articleLink,className:"btn btn-secondary d-inline",children:Object(b.jsx)("i",{className:"bi bi-eye"})}),Object(b.jsx)("button",{className:"btn btn-danger d-inline",onClick:function(){confirm("Are you sure, you want to delete this article from this blog forever? There's no turning back... Delete article?")&&l(m,e[0])},children:Object(b.jsx)("i",{className:"bi bi-trash"})})]})]}),Object(b.jsx)("hr",{})]},e[0])})):Object(b.jsx)("div",{children:"There are no articles..."})]})]}):Object(b.jsx)("p",{children:"Downloading blog data..."})}function V(){var e=Object(o.g)(),t=e.path,c=e.url,s=w(),a=s.userBlogsList,r=s.deleteBlog;return Object(b.jsx)("div",{className:"user-blogs-section-in-dashboard",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:t,children:Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{to:"/create-blog",style:"info mb-3",text:"create new blog"}),a?Object.entries(a).map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)(i.b,{to:c+"/"+e[1].blogLink,children:Object(b.jsx)("h5",{children:e[1].title})})}),Object(b.jsxs)("div",{className:"col-4 text-end",children:[Object(b.jsx)(i.b,{to:"/create-article/"+e[0]+"/"+e[1].title,className:"text-info",children:Object(b.jsx)("i",{className:"bi bi-plus-square me-2"})}),Object(b.jsx)(i.b,{className:"text-primary",to:"/blogs/".concat(e[1].blogLink),children:Object(b.jsx)("i",{className:"bi bi-eye me-2"})}),Object(b.jsx)(i.b,{className:"text-danger",to:"/dashboard/user-blogs",onClick:function(){confirm("Are you sure, you want to delete this blog & all articles from this blog forever? There's no turning back... Delete blog?")&&r(e[0])},children:Object(b.jsx)("i",{className:"bi bi-trash"})})]})]}),Object(b.jsx)("hr",{})]},e[0])})):Object(b.jsx)("div",{children:Object(b.jsx)("h5",{className:"text-center",children:"There are no blogs yet... Create one!"})})]})}),Object(b.jsx)(o.a,{path:t+"/:blogLink",children:Object(b.jsx)(R,{})})]})})}function q(e){var t=e.userId,c=Object(o.g)().path,s=w().fetchUserBlogsList;return t?Object(b.jsxs)("div",{className:"dashboard-page",children:[Object(b.jsxs)("nav",{className:"dashboard-nav text-center",children:[Object(b.jsx)(i.b,{to:"/dashboard/user-data",className:"me-2",children:"Your profile data"}),Object(b.jsx)("span",{children:" | "}),Object(b.jsx)(i.b,{to:"/dashboard/user-blogs",className:"ms-2",onClick:function(){return s(t)},children:"Your blogs"})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:c,children:Object(b.jsx)(F,{})}),Object(b.jsx)(o.a,{path:"".concat(c,"/user-data"),children:Object(b.jsx)(F,{})}),Object(b.jsx)(o.a,{path:"".concat(c,"/user-blogs"),children:Object(b.jsx)(V,{})})]})]}):Object(b.jsx)("p",{children:"You need to be logged to see your dashboard..."})}function M(e){var t=e.bloggerData;return Object(b.jsxs)("div",{className:"blogger-card",children:[Object(b.jsx)("hr",{}),Object(b.jsxs)(i.b,{to:"bloggers/"+t.userName,className:"d-block my-2",style:{textDecoration:"none"},children:[Object(b.jsx)("i",{className:"bi bi-person-circle me-2"}),t.firstName+" "+t.lastName+" | @"+t.userName]})]})}function G(){var e=w(),t=e.fetchUsersListOrderedByUserName,c=e.usersListOrderedByUserName;return Object(s.useEffect)((function(){c||t()}),[c]),c?Object(b.jsxs)("section",{className:"bloggers-page",children:[Object(b.jsx)("h1",{children:"Bloggers"}),Object(b.jsx)("nav",{className:"bloggers-list",children:Object.entries(c).map((function(e){return Object(b.jsx)(M,{bloggerData:Object(x.a)(Object(x.a)({},e[1]),{},{userName:e[0]})},e[0])}))})]}):Object(b.jsx)("p",{children:"Downloading bloggers list or... there are no bloggers"})}function H(){var e=w().addBlog;return Object(b.jsxs)("div",{className:"create-blog-section container",children:[Object(b.jsx)("h1",{children:"Create new blog!"}),Object(b.jsx)("hr",{}),Object(b.jsx)(A,{structure:E,text:"create blog",to:"/dashboard/user-blogs",formClassname:"create-blog-form",onSubmit:function(t){if(t.title.replace(/\s/g,"").length&&t.description.replace(/\s/g,"").length){var c=K(t.title),s=Object(x.a)(Object(x.a)({},t),{},{blogLink:c});e(s)}else alert("You need to complete all input fields (not only white spaces...) to create new blog... Try again!")}})]})}var W=c(52),_=c(53);function J(e){var t=e.articleData,c=e.setArticleData;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"Editor col-lg mt-2 mx-2",style:{marginBottom:90},children:[Object(b.jsx)("p",{className:"text-center",children:"Write your content here using Markdown Syntax (ommit title)"}),Object(b.jsx)("hr",{}),Object(b.jsx)("textarea",{defaultValue:t.content,onChange:function(e){return c(Object(x.a)(Object(x.a)({},t),{},{content:e.target.value}))},style:{width:"100%",height:"80%"}})]}),Object(b.jsxs)("div",{className:"RenderedView col-lg m-2",children:[Object(b.jsx)("p",{className:"text-center",children:"Here you can see how your article would be looking like"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:t.title}),Object(b.jsx)(W.a,{children:t.content,remarkPlugins:[_.a]})]})]})]})}function z(){var e=Object(o.f)().blogKey,t=Object(o.f)().blogTitle,c=w().addArticle,a=Object(s.useState)({title:"",description:"",content:""}),r=Object(n.a)(a,2),l=r[0],j=r[1];return Object(b.jsxs)("div",{className:"create-article-page container",children:[Object(b.jsxs)("form",{className:"create-article-form",children:[Object(b.jsx)("h1",{children:"Create new article!"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg mb-2",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"title",onChange:function(e){return j(Object(x.a)(Object(x.a)({},l),{},{title:e.target.value}))},required:!0})}),Object(b.jsx)("div",{className:"col-lg mb-2",children:Object(b.jsx)("textarea",{type:"text",className:"form-control",placeholder:"description",onChange:function(e){return j(Object(x.a)(Object(x.a)({},l),{},{description:e.target.value}))},required:!0})})]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)(J,{articleData:l,setArticleData:j}),Object(b.jsx)(i.b,{to:"/dashboard/user-blogs",type:"button",className:"btn btn-primary mb-3",onClick:function(){if(l.title.replace(/\s/g,"").length&&l.description.replace(/\s/g,"").length){var s=K(l.title),a=new Date,r=a.getUTCDate(),n=a.getUTCMonth()+1,o=a.getUTCFullYear()+"."+n+"."+r,i=Object(x.a)(Object(x.a)({},l),{},{articleLink:s,createdAt:o});c(e,t,i)}else alert("You need to complete all input fields (not only white spaces...) to create new article... Try again!")},children:"Create new article"})]})}function Q(e){var t=e.href,c=e.text;return Object(b.jsx)("a",{className:"footer-link d-inline me-2 ms-2",style:{textDecoration:"none"},href:t,target:"_blank",rel:"noreferrer",children:c})}var X=[{href:"https://github.com/vadimgierko/blogging-platform",text:"Blogging Platform"},{href:"https://github.com/vadimgierko/markdown-text-editor",text:"Markdown Editor"},{href:"https://github.com/vadimgierko",text:"Vadim Gierko"}];function Z(){return Object(b.jsxs)("div",{className:"footer text-center text-muted",children:[Object(b.jsx)("hr",{}),Object(b.jsx)(Q,{href:X[0].href,text:X[0].text}),"&",Object(b.jsx)(Q,{href:X[1].href,text:X[1].text}),"\xa9 2021 - 2022",Object(b.jsx)(Q,{href:X[2].href,text:X[2].text})]})}function $(){var e=Object(o.f)().userName,t=w(),c=t.bloggerPublicData,a=t.fetchBloggerPublicData,r=t.bloggerBlogsList,l=t.fetchBloggerBlogsList,n=t.getBloggerIdByUserName,j=t.bloggerId;return Object(s.useEffect)((function(){e&&n(e)}),[e]),Object(s.useEffect)((function(){j&&(a(j),l(j))}),[j]),c?Object(b.jsxs)("div",{className:"blogger-page",children:[Object(b.jsx)("h1",{children:c.firstName+" "+c.lastName}),Object(b.jsx)("hr",{}),Object(b.jsxs)("p",{children:["user name: ","@"+c.userName]}),Object(b.jsx)("nav",{className:"blogger-blogs",children:r?Object.entries(r).map((function(e){return Object(b.jsx)(i.b,{to:"/blogs/"+e[1].blogLink,children:Object(b.jsx)("h3",{children:e[1].title})},e[0])})):Object(b.jsx)("p",{children:"Downloading blogger blogs or there are no blogs..."})})]}):Object(b.jsxs)("p",{children:["Downloading data or ... there is no blogger of user name: ",c&&c.userName]})}function ee(){var e=Object(o.f)().articleLink,t=Object(o.f)().blogLink,c=w().blogs,a=Object(s.useState)(null),r=Object(n.a)(a,2),l=r[0],i=r[1];return Object(s.useEffect)((function(){if(c){var s=Object.entries(c).find((function(e){return e[1].blogLink===t}))[1];if(console.log("currentBlog:",s),e){console.log("article link:",e);var a=Object.entries(s.articles).find((function(t){return t[1].articleLink===e}))[1];console.log("currentArticle found by articleLink",a),i(a)}else{var r=s.articles?Object.entries(s.articles):null;if(r&&r.length){var l=r[r.length-1][1];console.log("newestArticle:",l),i(l)}else console.log("there are no articles")}}}),[c,t,e]),l?Object(b.jsxs)("article",{className:"article",children:[Object(b.jsx)(T,{item:l}),Object(b.jsx)("hr",{}),Object(b.jsx)(W.a,{children:l.content,remarkPlugins:[_.a]})]}):Object(b.jsx)("p",{children:"There are no article or downloading article..."})}function te(){var e=w().signIn;return Object(b.jsxs)("div",{className:"sign-in-page container",children:[Object(b.jsx)("h1",{children:"Sign in!"}),Object(b.jsx)("hr",{}),Object(b.jsx)(A,{formClassname:"sign-in-form",structure:I,onSubmit:function(t){t.email.replace(/\s/g,"").length?t.password.replace(/\s/g,"").length?e(t):alert("You need to input your password (& not only white spaces...) to log in!"):alert("You need to input your email (& not only white spaces...) to log in!")},to:"/dashboard",text:"log in"})]})}function ce(){var e=w().signUp;return Object(b.jsxs)("div",{className:"sign-up-page container",children:[Object(b.jsx)("h1",{children:"Create account!"}),Object(b.jsx)("hr",{}),Object(b.jsx)(A,{formClassname:"sign-up-form",structure:Y,onSubmit:function(t){t.email.replace(/\s/g,"").length&&t.firstName.replace(/\s/g,"").length&&t.lastName.replace(/\s/g,"").length&&t.password.replace(/\s/g,"").length&&t.userName.replace(/\s/g,"").length?e(t):alert("You need to complete all input fields (not only white spaces...) to create an account!")},to:"/dashboard",text:"sign up"})]})}function se(){return Object(b.jsxs)("article",{className:"about-page",children:[Object(b.jsx)("h1",{children:"What you can do with Blogging Platform"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"create & run your blog (or many blogs) after creating a free user account"}),Object(b.jsxs)("li",{children:["write & edit your articles with simple & intuitive ",Object(b.jsx)("a",{href:"https://vadimgierko.github.io/markdown-text-editor/",rel:"noreferrer",target:"_blank",children:"markdown text editor"}),", which was also created by myself"]}),Object(b.jsx)("li",{children:"read published blogs without authentication"})]}),Object(b.jsx)("p",{children:"Blogging Platform is a responsive full-stack single-page application, which supports all kinds of CRUD features, in which I have used all of my previous knowledge and skills in the field of front-end development (React, Bootstrap) and realtime database integration (Firebase)."}),Object(b.jsx)("h3",{children:"Technologies used in Blogging Platform development"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"React 17"}),Object(b.jsx)("li",{children:"React Router 5.2 (HashRouter, dynamic & nested routing)"}),Object(b.jsx)("li",{children:"React Context"}),Object(b.jsx)("li",{children:"React Markdown 7 & remark-gfm"}),Object(b.jsx)("li",{children:"Firebase 9.1 (auth, realtime database, security rules)"}),Object(b.jsx)("li",{children:"Bootstrap 5.1"}),Object(b.jsx)("li",{children:"Bootswatch 5.1"}),Object(b.jsx)("li",{children:"GitHub Pages 3.2"}),Object(b.jsx)("li",{children:"Atomic Web Design"})]})]})}function ae(){var e=Object(o.f)().blogKey,t=Object(o.f)().articleKey,c=w(),a=c.blogs,r=c.updateArticle,l=Object(s.useState)(null),j=Object(n.a)(l,2),u=j[0],d=j[1];return Object(s.useEffect)((function(){if(a){var c=a[e];console.log("currentBlog:",c);var s=c.articles[t];console.log("currentArticle:",s),d(s)}}),[a,e,t]),u?Object(b.jsxs)("div",{className:"update-article-page container",children:[Object(b.jsxs)("form",{className:"update-article-form",children:[Object(b.jsx)("h1",{children:"Update article!"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg mb-2",children:Object(b.jsx)("input",{type:"text",className:"form-control",defaultValue:u.title,onChange:function(e){return d(Object(x.a)(Object(x.a)({},u),{},{title:e.target.value}))},required:!0})}),Object(b.jsx)("div",{className:"col-lg mb-2",children:Object(b.jsx)("textarea",{type:"text",className:"form-control",defaultValue:u.description,onChange:function(e){return d(Object(x.a)(Object(x.a)({},u),{},{description:e.target.value}))},required:!0})})]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)(J,{articleData:u,setArticleData:d}),Object(b.jsx)(i.b,{to:"/dashboard/user-blogs",type:"button",className:"btn btn-primary mb-3",onClick:function(){if(u.title.replace(/\s/g,"").length&&u.description.replace(/\s/g,"").length){var c=K(u.title),s=new Date,a=s.getUTCDate(),l=s.getUTCMonth()+1,n=s.getUTCFullYear()+"."+l+"."+a,o=Object(x.a)(Object(x.a)({},u),{},{articleLink:c,updatedAt:n});r(e,t,o)}else alert("You need to complete all input fields (not only white spaces...) to create new article... Try again!")},children:"Update article"})]}):Object(b.jsx)("p",{children:"Downloading article data..."})}function re(){var e=Object(s.useState)(null),t=Object(n.a)(e,2),c=t[0],a=t[1],r=w(),l=r.user,i=r.userPublicData,j=r.logOut;return Object(s.useEffect)((function(){a(l?l.uid:null)}),[l]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{userFirstName:l&&i?i.firstName:null,userLastName:l&&i?i.lastName:null,logOut:j}),Object(b.jsx)("main",{className:"container",style:{marginTop:120},children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(se,{})}),Object(b.jsx)(o.a,{path:"/login",children:Object(b.jsx)(te,{})}),Object(b.jsx)(o.a,{path:"/signup",children:Object(b.jsx)(ce,{})}),Object(b.jsx)(o.a,{path:"/dashboard",children:Object(b.jsx)(q,{userId:c})}),Object(b.jsx)(o.a,{path:"/blogs/:blogLink/:articleLink",children:Object(b.jsx)(ee,{})}),Object(b.jsx)(o.a,{path:"/blogs/:blogLink",children:Object(b.jsx)(U,{})}),Object(b.jsx)(o.a,{path:"/blogs",children:Object(b.jsx)(D,{})}),Object(b.jsx)(o.a,{path:"/bloggers/:userName",children:Object(b.jsx)($,{})}),Object(b.jsx)(o.a,{path:"/bloggers",children:Object(b.jsx)(G,{})}),Object(b.jsx)(o.a,{path:"/create-blog",children:Object(b.jsx)(H,{})}),Object(b.jsx)(o.a,{path:"/create-article/:blogKey/:blogTitle",children:Object(b.jsx)(z,{})}),Object(b.jsx)(o.a,{path:"/edit-article/:blogKey/:articleKey",children:Object(b.jsx)(ae,{})})]})}),Object(b.jsx)(Z,{})]})}var le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,99)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),r(e),l(e)}))};l.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(B,{children:Object(b.jsx)(re,{})})})}),document.getElementById("root")),le()}},[[90,1,2]]]);
//# sourceMappingURL=main.09e02157.chunk.js.map