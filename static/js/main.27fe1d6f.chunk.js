(this["webpackJsonpshopping-app"]=this["webpackJsonpshopping-app"]||[]).push([[0],{104:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(23),c=a.n(r),i=a(11),o=a.n(i),s=a(19),d=a(29),l=a(47),u=new(a.n(l).a)("pk_235552c01daec021a3729b68acf8f7cea17b49c4ec3ed",!0),j=a(8),b=a(20),p=a(120),m=a(121),h=a(122),x=a(123),O=a(124),f=a(125),g=a.p+"static/media/icon.26e7164a.png",v=a(21),y=a(118),w=a(10),C=Object(y.a)((function(t){return{appBar:Object(v.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px",width:"20px"},menuButton:Object(v.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(v.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(w.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),k=a(2);var N=function(t){var e=t.totalItems,a=C(),n=Object(j.f)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(p.a,{position:"fixed",className:a.appBar,color:"inherit",children:Object(k.jsxs)(m.a,{children:[Object(k.jsxs)(h.a,{component:b.b,to:"/home",variant:"h6",className:a.title,color:"inherit",children:[Object(k.jsx)("img",{src:g,atl:"icon",height:"30px",width:"30px",className:a.image}),"The Plant Store"]}),Object(k.jsx)("div",{className:a.grow}),"/cart"!==n.pathname&&Object(k.jsx)("div",{className:a.button,children:Object(k.jsx)(x.a,{component:b.b,to:"/cart","aria-label":"Show cart Item",color:"inherit",children:Object(k.jsx)(O.a,{badgeContent:e,color:"secondary",children:Object(k.jsx)(f.a,{})})})})]})})})},_=a(131),B=a(126),R=a(127),S=a(128),I=a(129),T=a(130),A=Object(y.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),E=function(t){var e=t.product,a=t.onAddToCart,n=A();return Object(k.jsx)("div",{children:Object(k.jsxs)(B.a,{className:n.root,children:[Object(k.jsx)(R.a,{className:n.media,image:e.media.source,title:e.name}),Object(k.jsxs)(S.a,{style:{textDecoration:"none",color:"black"},component:b.b,to:"/products/".concat(e.id),children:[Object(k.jsxs)("div",{className:n.CardContent,children:[Object(k.jsx)(h.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(k.jsx)(h.a,{variant:"h6",children:e.price.formatted_with_symbol})]}),Object(k.jsx)(h.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(k.jsx)(I.a,{disableSpacing:!0,className:n.cardActions,children:Object(k.jsx)(x.a,{"aria-label":"Add to Cart",onClick:function(){return a(e.id,1)},children:Object(k.jsx)(T.a,{})})})]})})},F=Object(y.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),L=function(t){var e=t.products,a=t.onAddToCart,n=F();return Object(k.jsxs)("main",{classes:n.content,children:[Object(k.jsx)("div",{className:n.toolbar}),Object(k.jsx)(_.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(k.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,children:Object(k.jsx)(E,{product:t,onAddToCart:a})},t.id)}))})]})},D=a(132),G=a(133),W=Object(y.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(v.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),q=Object(y.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}}));var z=function(t){var e=t.item,a=t.onUpdateCartQty,n=t.onRemoveFromCart,r=q();return Object(k.jsxs)(B.a,{children:[Object(k.jsx)(R.a,{image:e.media.source,alt:e.name,className:r.media}),Object(k.jsxs)(S.a,{className:r.cardContent,children:[Object(k.jsx)(h.a,{variant:"h5",children:e.name}),Object(k.jsx)(h.a,{variant:"h6",children:e.line_total.formatted_with_symbol})]}),Object(k.jsxs)(I.a,{className:r.cardActions,children:[Object(k.jsxs)("div",{className:r.buttons,children:[Object(k.jsx)(D.a,{type:"button",size:"small",onClick:function(){return a(e.id,e.quantity-1)},children:"-"}),Object(k.jsx)(h.a,{children:e.quantity}),Object(k.jsx)(D.a,{type:"button",size:"small",onClick:function(){return a(e.id,e.quantity+1)},children:"+"})]}),Object(k.jsx)(D.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return n(e.id)},children:"Remove"})]})]})};var Q=function(t){var e=t.cart,a=t.handleUpdateCartQty,n=t.handleRemoveFromCart,r=t.handleEmptyCart;console.log(e);var c=W(),i=e.line_items,o=function(){return Object(k.jsx)(h.a,{variant:"subtitle1",children:"You\xa0have\xa0no\xa0items\xa0in\xa0your\xa0shopping\xa0cart,\xa0start\xa0adding\xa0some!!"})},s=function(){return Object(k.jsxs)(k.Fragment,{children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(k.jsxs)(_.a,{container:!0,spacing:3,children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",e.line_items.map((function(t){return Object(k.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(k.jsx)(z,{item:t,onUpdateCartQty:a,onRemoveFromCart:n})},t.id)})),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(k.jsxs)("div",{className:c.cardDetails,children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(k.jsxs)(h.a,{variant:"h5",children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Subtotal:",e.subtotal.formatted_with_symbol,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(k.jsxs)("div",{children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(k.jsx)(D.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty\xa0Cart"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(k.jsx)(D.a,{className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Check\xa0Out"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})};return e.line_items?Object(k.jsxs)(G.a,{children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(k.jsx)(h.a,{gutterbottom:!0,className:c.title,variant:"h4",children:"My Cart\xa0"}),i.length?Object(k.jsx)(s,{}):Object(k.jsx)(o,{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0    "]}):Object(k.jsx)("h1",{className:c.toolbar,children:"Loading..'"})},U=Object(y.a)((function(t){return{toolbar:t.mixins.toolbar,root:{flexGrow:1},paper:{padding:t.spacing(2),margin:"auto",maxWidth:"auto"},image:{width:"auto",height:"auto"},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}})),H=a(53),M=a(54);var J=function(t){var e=t.match,a=U(),r=Object(n.useState)(null),c=Object(d.a)(r,2),i=c[0],l=c[1],j=function(){var t=Object(s.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.products.retrieve(e.params.id);case 2:a=t.sent,l(a);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[]),console.log(i),Object(k.jsxs)("div",{className:a.root,children:[Object(k.jsx)("div",{className:a.toolbar}),null!==i?Object(k.jsx)(H.a,{className:a.paper,children:Object(k.jsxs)(_.a,{container:!0,spacing:1,children:[Object(k.jsx)(_.a,{item:!0,children:Object(k.jsx)(M.a,{className:a.image,children:Object(k.jsx)("img",{className:a.img,alt:i.name,src:i.media.source})})}),Object(k.jsx)(_.a,{item:!0,xs:12,sm:!0,container:!0,children:Object(k.jsx)(_.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:10,children:Object(k.jsxs)(_.a,{item:!0,xs:!0,children:[Object(k.jsx)(h.a,{gutterBottom:!0,variant:"h3",children:i.name}),Object(k.jsx)(h.a,{variant:"h4",gutterBottom:!0,children:i.price.formatted_with_symbol}),Object(k.jsx)(h.a,{dangerouslySetInnerHTML:{__html:i.description},variant:"body2",color:"textSecondary"})]})})})]})}):Object(k.jsx)("div",{})]})};var P=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)({}),i=Object(d.a)(c,2),l=i[0],p=i[1],m=function(){var t=Object(s.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.products.list();case 2:e=t.sent,a=e.data,r(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(s.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.retrieve();case 2:e=t.sent,p(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(s.a)(o.a.mark((function t(e,a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.add(e,a);case 2:n=t.sent,r=n.cart,p(r);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),O=function(){var t=Object(s.a)(o.a.mark((function t(e,a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.update(e,{quantity:a});case 2:n=t.sent,r=n.cart,p(r);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),f=function(){var t=Object(s.a)(o.a.mark((function t(e){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.remove(e);case 2:a=t.sent,n=a.cart,p(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(s.a)(o.a.mark((function t(){var e,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.empty();case 2:e=t.sent,a=e.cart,p(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){m(),h()}),[]),Object(k.jsx)(b.a,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)(N,{totalItems:l.total_items}),Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{exact:!0,path:"/home",children:Object(k.jsx)(L,{products:a,onAddToCart:x})}),Object(k.jsx)(j.a,{exact:!0,path:"/cart",children:Object(k.jsx)(Q,{cart:l,handleUpdateCartQty:O,handleEmptyCart:g,handleRemoveFromCart:f})}),Object(k.jsx)(j.a,{path:"/products/:id",exact:!0,component:J})]})]})})};c.a.render(Object(k.jsx)(P,{}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.27fe1d6f.chunk.js.map