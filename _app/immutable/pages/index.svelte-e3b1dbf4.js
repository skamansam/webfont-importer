import{S as Et,i as It,s as kt,a as w,l as c,c as E,m as u,q as l,b as S,n as yt,h as n,x as St,u as o,K as Lt,y as Ft,p as b,v as r,L as Pt,z as At,G as e,M as gt,N as _e,O as te,w as ve,f as Dt,t as Tt,C as Bt,P as Nt,Q as Vt}from"../chunks/index-063910ec.js";function wt(i){let f,d,s;return{c(){f=c("link"),d=w(),s=c("link"),this.h()},l(a){f=u(a,"LINK",{rel:!0,href:!0}),d=E(a),s=u(a,"LINK",{rel:!0,href:!0,crossorigin:!0}),this.h()},h(){l(f,"rel","preconnect"),l(f,"href","https://fonts.googleapis.com"),l(s,"rel","preconnect"),l(s,"href","https://fonts.gstatic.com"),l(s,"crossorigin","anonymous")},m(a,y){S(a,f,y),S(a,d,y),S(a,s,y)},d(a){a&&n(f),a&&n(d),a&&n(s)}}}function Rt(i){let f,d,s=i[0]=="google"&&wt();return{c(){s&&s.c(),f=w(),d=c("link"),this.h()},l(a){s&&s.l(a),f=E(a),d=u(a,"LINK",{href:!0,rel:!0}),this.h()},h(){l(d,"href",i[1]),l(d,"rel","stylesheet")},m(a,y){s&&s.m(a,y),S(a,f,y),S(a,d,y)},p(a,[y]){a[0]=="google"?s||(s=wt(),s.c(),s.m(f.parentNode,f)):s&&(s.d(1),s=null)},i:yt,o:yt,d(a){s&&s.d(a),a&&n(f),a&&n(d)}}}function Ut(i,f,d){const s={Thin:100,Light:300,Regular:400,Medium:500,Bold:700,Black:900,Thini:100,Lighti:300,Regulari:400,Mediumi:500,Boldi:700,Blacki:900,100:100,300:300,400:400,500:500,700:700,900:900,"100i":100,"300i":300,"400i":400,"500i":500,"700i":700,"900i":900},a=_=>typeof _=="string"?_.endsWith("i"):_==null?void 0:_.italics;let{source:y="google"}=f,{fonts:L=[]}=f;const g=_=>{var N,I;let h=`family=${_.family}`;if((_.variants||[]).length<1)return h;h+=":";const k=(N=_.variants)==null?void 0:N.find(D=>a(D));return k&&(h+="ital,"),h+="wght@",h+=(I=_.variants)==null?void 0:I.map(D=>{let M="";return k&&(M="0,",a(D)&&(M="1,")),typeof D=="string"?`${M}${s[D]}`:`${M}${s[D.variant]}`}).join(";"),h},W=y==="bunny"?(()=>`https://fonts.bunny.net/css?family=${L.map(h=>{var N;const k=(N=h.variants)==null?void 0:N.map(I=>typeof I=="string"?I:s[I.variant]+(a(I)?"i":"")).join(",");return`${h.family}:${k}`}).join("|")}`)():(()=>`https://fonts.googleapis.com/css2?${L.map(g).join("&")}&display=swap`)();return i.$$set=_=>{"source"in _&&d(0,y=_.source),"fonts"in _&&d(2,L=_.fonts)},[y,W,L]}class Ct extends Et{constructor(f){super(),It(this,f,Ut,Rt,kt,{source:0,fonts:2})}}function $t(i){let f,d,s,a,y,L,g,F,A,W,_,h,k,N,I,D,M,O,z,ye,ge,T,we,G,Y,Ee,Ie,B,ke,K,V,Se,H,Le,le,R,J,Fe,Pe,X,Z,p,Ae,se,De,xe="{",Te,Be,et="{",Ne,Ve,ae,Re,tt="{",Ue,Ce,ne,$e,ie,Me,lt="}",Oe,Ge,st="}",Ke,qe,at="}",je,We,oe,U,C,ze,Q,Ye,re,P,x,He,Qe,ee,Je,ce,$,Xe,nt;return f=new Ct({props:{source:i[4],fonts:[{family:i[0],variants:[{variant:i[1],italics:i[2]}]}]}}),{c(){St(f.$$.fragment),d=w(),s=c("details"),a=c("summary"),y=o("Options"),L=w(),g=c("div"),F=c("div"),A=c("label"),W=o("Source:"),_=w(),h=c("select"),k=c("option"),N=o("Bunny"),I=c("option"),D=o("Google"),M=w(),O=c("div"),z=c("label"),ye=o("Font Family:"),ge=w(),T=c("input"),we=w(),G=c("div"),Y=c("label"),Ee=o("Variant:"),Ie=w(),B=c("input"),ke=w(),K=c("div"),V=c("input"),Se=w(),H=c("label"),Le=o("Italics"),le=w(),R=c("details"),J=c("summary"),Fe=o("Code"),Pe=w(),X=c("div"),Z=c("pre"),p=c("code"),Ae=o(`
      <WebFontImporter
        source="`),se=o(i[4]),De=o(`" 
        fonts="`),Te=o(xe),Be=o(`
        [
          `),Ne=o(et),Ve=o(`
            family: "`),ae=o(i[0]),Re=o(`", 
            variants: [
              `),Ue=o(tt),Ce=o(`
                variant: "`),ne=o(i[1]),$e=o(`", 
                italics: `),ie=o(i[2]),Me=o(`
              `),Oe=o(lt),Ge=o(`
            ]
          `),Ke=o(st),qe=o(`
        ]
      `),je=o(at),We=o(`"/>
    `),oe=w(),U=c("h2"),C=c("input"),ze=w(),Q=c("label"),Ye=o("Styled Text:"),re=w(),P=c("div"),x=c("p"),He=o(`I'm baby hella listicle mustache cold-pressed DSA quinoa. Farm-to-table letterpress organic
		cronut, gentrify asymmetrical chia. Kickstarter schlitz air plant disrupt vice 90's. Live-edge
		celiac kale chips twee authentic synth. Cloud bread stumptown tacos disrupt sartorial 3 wolf
		moon DSA pabst fingerstache subway tile brooklyn listicle succulents scenester 8-bit.`),Qe=w(),ee=c("p"),Je=o(`Cornhole polaroid butcher, selvage succulents chambray sriracha tbh narwhal sartorial
		letterpress. Af lo-fi irony, single-origin coffee tousled yuccie stumptown four dollar toast
		bicycle rights post-ironic sriracha disrupt portland vaporware enamel pin. Single-origin coffee
		fixie selfies, activated charcoal readymade cornhole chia man bun.`),this.h()},l(t){const m=Lt('[data-svelte="svelte-dtken7"]',document.head);Ft(f.$$.fragment,m),m.forEach(n),d=E(t),s=u(t,"DETAILS",{class:!0});var q=b(s);a=u(q,"SUMMARY",{class:!0});var it=b(a);y=r(it,"Options"),it.forEach(n),L=E(q),g=u(q,"DIV",{class:!0});var j=b(g);F=u(j,"DIV",{class:!0});var ue=b(F);A=u(ue,"LABEL",{for:!0,class:!0});var ot=b(A);W=r(ot,"Source:"),ot.forEach(n),_=E(ue),h=u(ue,"SELECT",{id:!0,type:!0,class:!0});var Ze=b(h);k=u(Ze,"OPTION",{});var rt=b(k);N=r(rt,"Bunny"),rt.forEach(n),I=u(Ze,"OPTION",{});var ct=b(I);D=r(ct,"Google"),ct.forEach(n),Ze.forEach(n),ue.forEach(n),M=E(j),O=u(j,"DIV",{class:!0});var fe=b(O);z=u(fe,"LABEL",{for:!0,class:!0});var ut=b(z);ye=r(ut,"Font Family:"),ut.forEach(n),ge=E(fe),T=u(fe,"INPUT",{id:!0,type:!0,class:!0}),fe.forEach(n),we=E(j),G=u(j,"DIV",{class:!0});var de=b(G);Y=u(de,"LABEL",{for:!0,class:!0});var ft=b(Y);Ee=r(ft,"Variant:"),ft.forEach(n),Ie=E(de),B=u(de,"INPUT",{id:!0,type:!0,class:!0}),de.forEach(n),ke=E(j),K=u(j,"DIV",{class:!0});var he=b(K);V=u(he,"INPUT",{id:!0,type:!0,class:!0}),Se=E(he),H=u(he,"LABEL",{for:!0,class:!0});var dt=b(H);Le=r(dt,"Italics"),dt.forEach(n),he.forEach(n),j.forEach(n),q.forEach(n),le=E(t),R=u(t,"DETAILS",{class:!0});var pe=b(R);J=u(pe,"SUMMARY",{class:!0});var ht=b(J);Fe=r(ht,"Code"),ht.forEach(n),Pe=E(pe),X=u(pe,"DIV",{class:!0});var pt=b(X);Z=u(pt,"PRE",{});var mt=b(Z);p=u(mt,"CODE",{});var v=b(p);Ae=r(v,`
      <WebFontImporter
        source="`),se=r(v,i[4]),De=r(v,`" 
        fonts="`),Te=r(v,xe),Be=r(v,`
        [
          `),Ne=r(v,et),Ve=r(v,`
            family: "`),ae=r(v,i[0]),Re=r(v,`", 
            variants: [
              `),Ue=r(v,tt),Ce=r(v,`
                variant: "`),ne=r(v,i[1]),$e=r(v,`", 
                italics: `),ie=r(v,i[2]),Me=r(v,`
              `),Oe=r(v,lt),Ge=r(v,`
            ]
          `),Ke=r(v,st),qe=r(v,`
        ]
      `),je=r(v,at),We=r(v,`"/>
    `),v.forEach(n),mt.forEach(n),pt.forEach(n),pe.forEach(n),oe=E(t),U=u(t,"H2",{class:!0});var me=b(U);C=u(me,"INPUT",{id:!0,type:!0,class:!0}),ze=E(me),Q=u(me,"LABEL",{for:!0,class:!0});var bt=b(Q);Ye=r(bt,"Styled Text:"),bt.forEach(n),me.forEach(n),re=E(t),P=u(t,"DIV",{class:!0,style:!0});var be=b(P);x=u(be,"P",{});var _t=b(x);He=r(_t,`I'm baby hella listicle mustache cold-pressed DSA quinoa. Farm-to-table letterpress organic
		cronut, gentrify asymmetrical chia. Kickstarter schlitz air plant disrupt vice 90's. Live-edge
		celiac kale chips twee authentic synth. Cloud bread stumptown tacos disrupt sartorial 3 wolf
		moon DSA pabst fingerstache subway tile brooklyn listicle succulents scenester 8-bit.`),_t.forEach(n),Qe=E(be),ee=u(be,"P",{});var vt=b(ee);Je=r(vt,`Cornhole polaroid butcher, selvage succulents chambray sriracha tbh narwhal sartorial
		letterpress. Af lo-fi irony, single-origin coffee tousled yuccie stumptown four dollar toast
		bicycle rights post-ironic sriracha disrupt portland vaporware enamel pin. Single-origin coffee
		fixie selfies, activated charcoal readymade cornhole chia man bun.`),vt.forEach(n),be.forEach(n),this.h()},h(){l(a,"class","ml-3 font-bold"),l(A,"for","fontSource"),l(A,"class","font-bold w-1/3 inline-block"),k.__value="bunny",k.value=k.__value,I.__value="google",I.value=I.__value,l(h,"id","fontSource"),l(h,"type","text"),l(h,"class","inset border-2 w-3/5 inline-block"),i[4]===void 0&&Pt(()=>i[5].call(h)),l(F,"class","w-100 mt-2 mb-2"),l(z,"for","fontFamily"),l(z,"class","font-bold w-1/3 inline-block"),l(T,"id","fontFamily"),l(T,"type","text"),l(T,"class","inset border-2 w-3/5 inline-block"),l(O,"class","w-100"),l(Y,"for","fontVariant"),l(Y,"class","font-bold w-1/3 inline-block"),l(B,"id","fontVariant"),l(B,"type","text"),l(B,"class","inset border-2 w-3/5 inline-block"),l(G,"class","w-100 mt-2 mb-2"),l(V,"id","fontItalics"),l(V,"type","checkbox"),l(V,"class","inset border-2"),l(H,"for","fontItalics"),l(H,"class","font-bold"),l(K,"class","w-100"),l(g,"class","border p-3 shadow-lg mb-3"),l(s,"class","ml-3"),l(J,"class","ml-3 font-bold"),l(X,"class","border shadow-lg mb-3"),l(R,"class","ml-3"),l(C,"id","showStyled"),l(C,"type","checkbox"),l(C,"class","inset border-2"),l(Q,"for","showStyled"),l(Q,"class","font-bold"),l(U,"class","mt-3 font-bold"),l(P,"class","border p-3 shadow-lg mb-3"),l(P,"style",ce=i[3]?`font-family:${i[0]}`:"")},m(t,m){At(f,document.head,null),S(t,d,m),S(t,s,m),e(s,a),e(a,y),e(s,L),e(s,g),e(g,F),e(F,A),e(A,W),e(F,_),e(F,h),e(h,k),e(k,N),e(h,I),e(I,D),gt(h,i[4]),e(g,M),e(g,O),e(O,z),e(z,ye),e(O,ge),e(O,T),_e(T,i[0]),e(g,we),e(g,G),e(G,Y),e(Y,Ee),e(G,Ie),e(G,B),_e(B,i[1]),e(g,ke),e(g,K),e(K,V),V.checked=i[2],e(K,Se),e(K,H),e(H,Le),S(t,le,m),S(t,R,m),e(R,J),e(J,Fe),e(R,Pe),e(R,X),e(X,Z),e(Z,p),e(p,Ae),e(p,se),e(p,De),e(p,Te),e(p,Be),e(p,Ne),e(p,Ve),e(p,ae),e(p,Re),e(p,Ue),e(p,Ce),e(p,ne),e(p,$e),e(p,ie),e(p,Me),e(p,Oe),e(p,Ge),e(p,Ke),e(p,qe),e(p,je),e(p,We),S(t,oe,m),S(t,U,m),e(U,C),C.checked=i[3],e(U,ze),e(U,Q),e(Q,Ye),S(t,re,m),S(t,P,m),e(P,x),e(x,He),e(P,Qe),e(P,ee),e(ee,Je),$=!0,Xe||(nt=[te(h,"change",i[5]),te(T,"input",i[6]),te(B,"input",i[7]),te(V,"change",i[8]),te(C,"change",i[9])],Xe=!0)},p(t,[m]){const q={};m&16&&(q.source=t[4]),m&7&&(q.fonts=[{family:t[0],variants:[{variant:t[1],italics:t[2]}]}]),f.$set(q),m&16&&gt(h,t[4]),m&1&&T.value!==t[0]&&_e(T,t[0]),m&2&&B.value!==t[1]&&_e(B,t[1]),m&4&&(V.checked=t[2]),(!$||m&16)&&ve(se,t[4]),(!$||m&1)&&ve(ae,t[0]),(!$||m&2)&&ve(ne,t[1]),(!$||m&4)&&ve(ie,t[2]),m&8&&(C.checked=t[3]),(!$||m&9&&ce!==(ce=t[3]?`font-family:${t[0]}`:""))&&l(P,"style",ce)},i(t){$||(Dt(f.$$.fragment,t),$=!0)},o(t){Tt(f.$$.fragment,t),$=!1},d(t){Bt(f),t&&n(d),t&&n(s),t&&n(le),t&&n(R),t&&n(oe),t&&n(U),t&&n(re),t&&n(P),Xe=!1,Nt(nt)}}}function Mt(i,f,d){let s="Playball",a="400",y=!1,L=!0,g="bunny";function F(){g=Vt(this),d(4,g)}function A(){s=this.value,d(0,s)}function W(){a=this.value,d(1,a)}function _(){y=this.checked,d(2,y)}function h(){L=this.checked,d(3,L)}return[s,a,y,L,g,F,A,W,_,h]}class Gt extends Et{constructor(f){super(),It(this,f,Mt,$t,kt,{})}}export{Gt as default};
