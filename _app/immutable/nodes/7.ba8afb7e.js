import{s as de,e as J,c as le}from"../chunks/scheduler.81e61739.js";import{S as me,i as ge,g as v,m as U,s as D,H as ve,h as _,j as $,n as B,f as b,c as z,B as _e,k as a,a as x,x as c,o as ke,r as Q,u as L,v as X,d as Y,t as ee,w as te,A as K,z as Z,y as N}from"../chunks/index.a16ca3cc.js";import{e as F}from"../chunks/each.e59479a4.js";import{W as oe}from"../chunks/Window.971b780f.js";function be(i){let e,s,t,u=i[0].title+"",n,d,m,p,f,g,I,y=i[0].description+"",h,o,k,S,j,R;return{c(){e=v("div"),s=v("a"),t=v("h1"),n=U(u),m=D(),p=v("div"),f=v("div"),g=v("div"),I=new ve(!1),h=D(),o=v("div"),k=v("a"),S=v("img"),this.h()},l(E){e=_(E,"DIV",{id:!0,class:!0});var q=$(e);s=_(q,"A",{target:!0,href:!0,class:!0});var T=$(s);t=_(T,"H1",{class:!0});var C=$(t);n=B(C,u),C.forEach(b),T.forEach(b),m=z(q),p=_(q,"DIV",{id:!0,class:!0});var M=$(p);f=_(M,"DIV",{class:!0});var H=$(f);g=_(H,"DIV",{});var O=$(g);I=_e(O,!1),O.forEach(b),H.forEach(b),h=z(M),o=_(M,"DIV",{class:!0});var A=$(o);k=_(A,"A",{target:!0,href:!0,class:!0});var W=$(k);S=_(W,"IMG",{src:!0,alt:!0,class:!0}),W.forEach(b),A.forEach(b),M.forEach(b),q.forEach(b),this.h()},h(){a(t,"class","svelte-1bn4mpl"),a(s,"target","_blank"),a(s,"href",d=i[0].link),a(s,"class","svelte-1bn4mpl"),I.a=null,a(f,"class","left svelte-1bn4mpl"),J(S.src,j=i[0].icon)||a(S,"src",j),a(S,"alt",""),a(S,"class","svelte-1bn4mpl"),a(k,"target","_blank"),a(k,"href",R=i[0].link),a(k,"class","svelte-1bn4mpl"),a(o,"class","right svelte-1bn4mpl"),a(p,"id","previewWrap"),a(p,"class","svelte-1bn4mpl"),a(e,"id","preview"),a(e,"class","svelte-1bn4mpl")},m(E,q){x(E,e,q),c(e,s),c(s,t),c(t,n),c(e,m),c(e,p),c(p,f),c(f,g),I.m(y,g),c(p,h),c(p,o),c(o,k),c(k,S)},p(E,[q]){q&1&&u!==(u=E[0].title+"")&&ke(n,u),q&1&&d!==(d=E[0].link)&&a(s,"href",d),q&1&&y!==(y=E[0].description+"")&&I.p(y),q&1&&!J(S.src,j=E[0].icon)&&a(S,"src",j),q&1&&R!==(R=E[0].link)&&a(k,"href",R)},i:le,o:le,d(E){E&&b(e)}}}function we(i,e,s){let{project:t={title:"Welcome to my projects!",description:"Click a project from the file explorer to view it's details!",link:"",icon:"webIcons/uhc.png"}}=e;return i.$$set=u=>{"project"in u&&s(0,t=u.project)},[t]}class Ie extends me{constructor(e){super(),ge(this,e,we,be,de,{project:0})}}function ne(i,e,s){const t=i.slice();return t[11]=e[s].title,t[12]=e[s].link,t[13]=e[s].description,t[14]=e[s].icon,t[16]=s,t}function re(i,e,s){const t=i.slice();return t[11]=e[s].title,t[12]=e[s].link,t[13]=e[s].description,t[14]=e[s].icon,t[16]=s,t}function ae(i,e,s){const t=i.slice();return t[11]=e[s].title,t[12]=e[s].link,t[13]=e[s].description,t[14]=e[s].icon,t[16]=s,t}function ce(i,e,s){const t=i.slice();return t[11]=e[s].title,t[12]=e[s].link,t[13]=e[s].description,t[14]=e[s].icon,t[16]=s,t}function ye(i){let e,s;return e=new Ie({props:{project:i[0]}}),{c(){Q(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,u){X(e,t,u),s=!0},p(t,u){const n={};u&1&&(n.project=t[0]),e.$set(n)},i(t){s||(Y(e.$$.fragment,t),s=!0)},o(t){ee(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function he(i){let e,s,t,u,n,d=i[11]+"",m,p,f,g,I;function y(){return i[7](i[16])}return{c(){e=v("div"),s=v("div"),t=v("img"),n=D(),m=U(d),p=D(),this.h()},l(h){e=_(h,"DIV",{class:!0});var o=$(e);s=_(o,"DIV",{class:!0});var k=$(s);t=_(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(b),n=z(o),m=B(o,d),p=z(o),o.forEach(b),this.h()},h(){J(t.src,u=i[14])||a(t,"src",u),a(t,"alt",i[14]),a(t,"class","svelte-fp1oqz"),a(s,"class","fileicon svelte-fp1oqz"),a(e,"class",f="file "+(i[1]==i[16]?"active":"")+" svelte-fp1oqz")},m(h,o){x(h,e,o),c(e,s),c(s,t),c(e,n),c(e,m),c(e,p),g||(I=N(e,"click",y),g=!0)},p(h,o){i=h,o&2&&f!==(f="file "+(i[1]==i[16]?"active":"")+" svelte-fp1oqz")&&a(e,"class",f)},d(h){h&&b(e),g=!1,I()}}}function fe(i){let e,s,t,u,n,d=i[11]+"",m,p,f,g,I;function y(){return i[8](i[16])}return{c(){e=v("div"),s=v("div"),t=v("img"),n=D(),m=U(d),p=D(),this.h()},l(h){e=_(h,"DIV",{class:!0});var o=$(e);s=_(o,"DIV",{class:!0});var k=$(s);t=_(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(b),n=z(o),m=B(o,d),p=z(o),o.forEach(b),this.h()},h(){J(t.src,u=i[14])||a(t,"src",u),a(t,"alt",i[14]),a(t,"class","svelte-fp1oqz"),a(s,"class","fileicon svelte-fp1oqz"),a(e,"class",f="file "+(i[1]==i[16]?"active":"")+" svelte-fp1oqz")},m(h,o){x(h,e,o),c(e,s),c(s,t),c(e,n),c(e,m),c(e,p),g||(I=N(e,"click",y),g=!0)},p(h,o){i=h,o&2&&f!==(f="file "+(i[1]==i[16]?"active":"")+" svelte-fp1oqz")&&a(e,"class",f)},d(h){h&&b(e),g=!1,I()}}}function ue(i){let e,s,t,u,n,d=i[11]+"",m,p,f,g,I;function y(){return i[9](i[16])}return{c(){e=v("div"),s=v("div"),t=v("img"),n=D(),m=U(d),p=D(),this.h()},l(h){e=_(h,"DIV",{class:!0});var o=$(e);s=_(o,"DIV",{class:!0});var k=$(s);t=_(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(b),n=z(o),m=B(o,d),p=z(o),o.forEach(b),this.h()},h(){J(t.src,u=i[14])||a(t,"src",u),a(t,"alt",i[14]),a(t,"class","svelte-fp1oqz"),a(s,"class","fileicon svelte-fp1oqz"),a(e,"class",f="file "+(i[1]==i[16]?"active":"")+" svelte-fp1oqz")},m(h,o){x(h,e,o),c(e,s),c(s,t),c(e,n),c(e,m),c(e,p),g||(I=N(e,"click",y),g=!0)},p(h,o){i=h,o&2&&f!==(f="file "+(i[1]==i[16]?"active":"")+" svelte-fp1oqz")&&a(e,"class",f)},d(h){h&&b(e),g=!1,I()}}}function pe(i){let e,s,t,u,n,d=i[11]+"",m,p,f,g,I;function y(){return i[10](i[16])}return{c(){e=v("div"),s=v("div"),t=v("img"),n=D(),m=U(d),p=D(),this.h()},l(h){e=_(h,"DIV",{class:!0});var o=$(e);s=_(o,"DIV",{class:!0});var k=$(s);t=_(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(b),n=z(o),m=B(o,d),p=z(o),o.forEach(b),this.h()},h(){J(t.src,u=i[14])||a(t,"src",u),a(t,"alt",i[14]),a(t,"class","svelte-fp1oqz"),a(s,"class","fileicon svelte-fp1oqz"),a(e,"class",f="file "+(i[1]==i[16]?"active":"")+" svelte-fp1oqz")},m(h,o){x(h,e,o),c(e,s),c(s,t),c(e,n),c(e,m),c(e,p),g||(I=N(e,"click",y),g=!0)},p(h,o){i=h,o&2&&f!==(f="file "+(i[1]==i[16]?"active":"")+" svelte-fp1oqz")&&a(e,"class",f)},d(h){h&&b(e),g=!1,I()}}}function $e(i){let e,s,t="Websites",u,n,d,m,p="Games, Game Mods and Applications",f,g,I,y,h="Webtools",o,k,S,j,R="Miscellaneous",E,q,T=F(i[2]),C=[];for(let r=0;r<T.length;r+=1)C[r]=he(ce(i,T,r));let M=F(i[3]),H=[];for(let r=0;r<M.length;r+=1)H[r]=fe(ae(i,M,r));let O=F(i[4]),A=[];for(let r=0;r<O.length;r+=1)A[r]=ue(re(i,O,r));let W=F(i[5]),G=[];for(let r=0;r<W.length;r+=1)G[r]=pe(ne(i,W,r));return{c(){e=v("div"),s=v("h2"),s.textContent=t,u=D(),n=v("div");for(let r=0;r<C.length;r+=1)C[r].c();d=D(),m=v("h2"),m.textContent=p,f=D(),g=v("div");for(let r=0;r<H.length;r+=1)H[r].c();I=D(),y=v("h2"),y.textContent=h,o=D(),k=v("div");for(let r=0;r<A.length;r+=1)A[r].c();S=D(),j=v("h2"),j.textContent=R,E=D(),q=v("div");for(let r=0;r<G.length;r+=1)G[r].c();this.h()},l(r){e=_(r,"DIV",{class:!0});var w=$(e);s=_(w,"H2",{class:!0,"data-svelte-h":!0}),K(s)!=="svelte-ar1ww9"&&(s.textContent=t),u=z(w),n=_(w,"DIV",{class:!0});var l=$(n);for(let V=0;V<C.length;V+=1)C[V].l(l);l.forEach(b),d=z(w),m=_(w,"H2",{class:!0,"data-svelte-h":!0}),K(m)!=="svelte-ox2trt"&&(m.textContent=p),f=z(w),g=_(w,"DIV",{class:!0});var P=$(g);for(let V=0;V<H.length;V+=1)H[V].l(P);P.forEach(b),I=z(w),y=_(w,"H2",{class:!0,"data-svelte-h":!0}),K(y)!=="svelte-rmqq3u"&&(y.textContent=h),o=z(w),k=_(w,"DIV",{class:!0});var se=$(k);for(let V=0;V<A.length;V+=1)A[V].l(se);se.forEach(b),S=z(w),j=_(w,"H2",{class:!0,"data-svelte-h":!0}),K(j)!=="svelte-vg8xf7"&&(j.textContent=R),E=z(w),q=_(w,"DIV",{class:!0});var ie=$(q);for(let V=0;V<G.length;V+=1)G[V].l(ie);ie.forEach(b),w.forEach(b),this.h()},h(){a(s,"class","sectionHeader svelte-fp1oqz"),a(n,"class","filesection svelte-fp1oqz"),a(m,"class","sectionHeader svelte-fp1oqz"),a(g,"class","filesection svelte-fp1oqz"),a(y,"class","sectionHeader svelte-fp1oqz"),a(k,"class","filesection svelte-fp1oqz"),a(j,"class","sectionHeader svelte-fp1oqz"),a(q,"class","filesection svelte-fp1oqz"),a(e,"class","filewrap svelte-fp1oqz")},m(r,w){x(r,e,w),c(e,s),c(e,u),c(e,n);for(let l=0;l<C.length;l+=1)C[l]&&C[l].m(n,null);c(e,d),c(e,m),c(e,f),c(e,g);for(let l=0;l<H.length;l+=1)H[l]&&H[l].m(g,null);c(e,I),c(e,y),c(e,o),c(e,k);for(let l=0;l<A.length;l+=1)A[l]&&A[l].m(k,null);c(e,S),c(e,j),c(e,E),c(e,q);for(let l=0;l<G.length;l+=1)G[l]&&G[l].m(q,null)},p(r,w){if(w&70){T=F(r[2]);let l;for(l=0;l<T.length;l+=1){const P=ce(r,T,l);C[l]?C[l].p(P,w):(C[l]=he(P),C[l].c(),C[l].m(n,null))}for(;l<C.length;l+=1)C[l].d(1);C.length=T.length}if(w&74){M=F(r[3]);let l;for(l=0;l<M.length;l+=1){const P=ae(r,M,l);H[l]?H[l].p(P,w):(H[l]=fe(P),H[l].c(),H[l].m(g,null))}for(;l<H.length;l+=1)H[l].d(1);H.length=M.length}if(w&82){O=F(r[4]);let l;for(l=0;l<O.length;l+=1){const P=re(r,O,l);A[l]?A[l].p(P,w):(A[l]=ue(P),A[l].c(),A[l].m(k,null))}for(;l<A.length;l+=1)A[l].d(1);A.length=O.length}if(w&98){W=F(r[5]);let l;for(l=0;l<W.length;l+=1){const P=ne(r,W,l);G[l]?G[l].p(P,w):(G[l]=pe(P),G[l].c(),G[l].m(q,null))}for(;l<G.length;l+=1)G[l].d(1);G.length=W.length}},d(r){r&&b(e),Z(C,r),Z(H,r),Z(A,r),Z(G,r)}}}function qe(i){let e,s,t,u;return e=new oe({props:{title:"file_preview.exe",$$slots:{default:[ye]},$$scope:{ctx:i}}}),t=new oe({props:{title:"file_explorer.exe",$$slots:{default:[$e]},$$scope:{ctx:i}}}),{c(){Q(e.$$.fragment),s=D(),Q(t.$$.fragment)},l(n){L(e.$$.fragment,n),s=z(n),L(t.$$.fragment,n)},m(n,d){X(e,n,d),x(n,s,d),X(t,n,d),u=!0},p(n,[d]){const m={};d&1048577&&(m.$$scope={dirty:d,ctx:n}),e.$set(m);const p={};d&1048578&&(p.$$scope={dirty:d,ctx:n}),t.$set(p)},i(n){u||(Y(e.$$.fragment,n),Y(t.$$.fragment,n),u=!0)},o(n){ee(e.$$.fragment,n),ee(t.$$.fragment,n),u=!1},d(n){n&&b(s),te(e,n),te(t,n)}}}function Ce(i,e,s){let t=[{title:"SAHCon.com",description:"The landing page for the Stuck At Home Convention, a virtual homestuck convention held in VR and across the internet.",link:"https://sahcon.com/",icon:"webIcons/sahcon.png"},{title:"CHORDIOID",description:"A rhythm RPG where you battle to the beat. CHORDIOID is a unique musical JRPG that seamlessly blends turn-based combat with rhythm game mechanics.",link:"https://chordioid.com/",icon:"webIcons/cd.png"},{title:"...Perform My Own Tracheotomy.",description:"<b>Watch As I Perform My Own Tracheotomy.</b> <br> A girl dissociates in her apartment and has a generally normal time. <br> <a href='https://twitter.com/Bungyg0rl'>A comic by Juney-Blues</a>",link:"https://junebugjamboree.neocities.org/tracheotomy/",icon:"webIcons/watchasiperformmyowntracheotomy.png"},{title:"JARI: Grimdorks",description:"Homestuck fan continuation about a girl way out of her depth <br> <a href='https://twitter.com/Nerd_Zara'>A comic by Zara Nerd</a>",link:"https://grimdorks.net/",icon:"webIcons/jari.png"}],u=[{title:"Pesterquest Rewritten",description:"A fanmade rewrite of Homestuck - Pesterquest! <a href='https://etchjetty.github.io/'>Written by Etch Jetty</a>",link:"https://hjtfir.itch.io/pesterquest-rewritten",icon:"webIcons/pqr.png"},{title:"Grist Torrent+",description:"A Homestuck Suika Game",link:"https://flaringk.itch.io/grist-torrent",icon:"webIcons/BUILD.png"},{title:"Hades: MEGIDO",description:"A crossover mod for SGG's Hades, featuring characters from Homestuck.",link:"https://www.nexusmods.com/hades/mods/152",icon:"webIcons/megido.png"},{title:"Mintendo DS Homescreen",description:"A recreation of the Mintendo DS home screen. Made to just explore CSS and JS.",link:"https://flaringk.github.io/Mintendo-DS/",icon:"webIcons/mds.png"}],n=[{title:"Homestuck 5 plus",description:"Homestuck 5+ is a tool to format Homestuck style dialogue. Entering homestuck style dialogue in the left text area will generate formatted homestuck dialogue in the right area.",link:"https://flaringk.github.io/homestuck5plus/",icon:"webIcons/hs5plus.png"},{title:"Flare's CSS textboxes",description:"Importable CSS module that creates multiple menus, text-styles and textboxes for use in MSPFA adventures.",link:"https://mspfa.com/?s=41577&p=1",icon:"webIcons/csst.png"},{title:"Homestuck Hex Codes",description:"Easy to copy accurate Homestuck hex colours. ",link:"https://flaringk.github.io/hs-hexes/",icon:"webIcons/hexcodes.png"},{title:"Quirk Builder",description:"A tool to help generate homestuck quirks. ",link:"https://flaringk.github.io/quirkbuilder/",icon:"webIcons/quirkb.png"},{title:"Better Find and Replace",description:"A tool to make it easy to create and save the text transfroms you do every day",link:"https://flaringk.github.io/betterfindreplace/",icon:"webIcons/bfr.ico"},{title:"Gif analyser",description:"Analyse all your favourite GIFS with this built in viewer made for viewing an inspecting timings and positions.",link:"https://flaringk.github.io/gifinfo/",icon:"webIcons/uhc.png"},{title:"Quadrant Maker",description:"A Gif generator for all your shipping needs.",link:"https://flaringk.github.io/quadrantmaker/",icon:"https://flaringk.github.io/quadrantmaker/assets/favicon.png"},{title:"Gifstuck",description:"A Gif generator for your homestuck adventure!",link:"https://flaringk.github.io/gifstuck/",icon:"https://pipe.miroware.io/5f586dbe02740c4a7fb69f99/Ididart/Icon.png"},{title:"Spriter's Exporter",description:"Turn spritesheets from spriter's resource into useable transparent sprite sheets!",link:"https://flaringk.github.io/spriters-sheet/",icon:"webIcons/spriters.png"},{title:"Classpect Card Generator",description:"Generate your own playing cards based off of homestuck classes and aspects.",link:"https://flaringk.github.io/classpectcards/",icon:"webIcons/classcard.png"},{title:"Homestuck Textbox Generator",description:"Generate your own homestuck textboxes. There isn't much else to it.",link:"https://flaringk.github.io/textboxy/",icon:"webIcons/htg.png"},{title:"Gdocs to fiction",description:"Format your google docs for fanfiction websites, with homstuck pesterchum auto formatting.",link:"https://flaringk.github.io/gdocs-to-fiction/",icon:"webIcons/gdoc2f.png"},{title:"Wizards 101 Name Generator",description:"Generate your own wizard 101 name.",link:"https://flaringk.github.io/w101-names-gen/",icon:"webIcons/w101.png"},{title:"Pictochum Canvas",description:"A web canvas that simulates some Japanese handheld that was pretty cool back in the day.",link:"https://flaringk.github.io/PictoChum-Canvas/",icon:"webIcons/pictochum.png"},{title:"Text 2 Textbox",description:"An AutoHotKey script that converts discord messages into undertale textboxes using Demirramon's textbox API. ",link:"https://flaringk.github.io/text2textbox/",icon:"webIcons/t2t.gif"},{title:"Classpect Central",description:"A website about Classpects from Homestuck! Made using React JS.",link:"https://flaringk.github.io/classpectcentral/",icon:"webIcons/classpect.png"}],d=[{title:"mspfaViewer",description:"This script was made to let you host your mspfa or original comic on it's own site.",link:"https://github.com/FlaringK/mspfaViewer",icon:"webIcons/mspa.png"},{title:"UHC: POV Timelines",description:"A port of madman-bob's Homestuck POV Cam Chrome extension to the Unoffical Homstuck Collection.",link:"https://github.com/FlaringK/UHC-POV-Cam",icon:"webIcons/uhc.png"},{title:"UHC: Dequirker",description:"A mod for the unoffical homestuck collection, removes quirks on a troll by troll basis.",link:"https://github.com/FlaringK/dequirk-UHC",icon:"webIcons/uhc.png"},{title:"UHC: Zoosmell Pooplord",description:"A mod for the unoffical homestuck collection, replaces every text instance of the beta kids names with their inital, sillier ones!",link:"https://github.com/FlaringK/Zoosmell-Pooplord",icon:"webIcons/uhc.png"}],m={title:"Welcome to my projects!",description:"Click a project from the file explorer to view it's details!",link:"",icon:"webIcons/uhc.png"},p=-1,f=o=>{s(0,m=d[o]),p==o&&window.open(d[o].link,"_blank"),s(1,p=o)};return[m,p,t,u,n,d,f,o=>{f(o)},o=>{f(o)},o=>{f(o)},o=>{f(o)}]}class Ge extends me{constructor(e){super(),ge(this,e,Ce,qe,de,{})}}export{Ge as component};
