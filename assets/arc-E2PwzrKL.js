import{w as cn,c as z}from"./path-CbwjOpE9.js";import{cl as rn,cm as G,cn as q,co as un,cp as y,bH as ln,cq as L,cr as _,cs as an,ct as o,cu as sn,cv as on,cw as tn}from"./index-DKwPDVnt.js";function fn(c){return c.innerRadius}function yn(c){return c.outerRadius}function gn(c){return c.startAngle}function mn(c){return c.endAngle}function pn(c){return c&&c.padAngle}function dn(c,h,H,D,v,A,B,r){var I=H-c,i=D-h,n=B-v,m=r-A,u=m*I-n*i;if(!(u*u<y))return u=(n*(h-A)-m*(c-v))/u,[c+u*I,h+u*i]}function W(c,h,H,D,v,A,B){var r=c-H,I=h-D,i=(B?A:-A)/L(r*r+I*I),n=i*I,m=-i*r,u=c+n,s=h+m,t=H+n,f=D+m,C=(u+t)/2,l=(s+f)/2,p=t-u,g=f-s,R=p*p+g*g,T=v-A,w=u*f-t*s,O=(g<0?-1:1)*L(tn(0,T*T*R-w*w)),S=(w*g-p*O)/R,j=(-w*p-g*O)/R,P=(w*g+p*O)/R,d=(-w*p+g*O)/R,x=S-C,e=j-l,a=P-C,F=d-l;return x*x+e*e>a*a+F*F&&(S=P,j=d),{cx:S,cy:j,x01:-n,y01:-m,x11:S*(v/T-1),y11:j*(v/T-1)}}function vn(){var c=fn,h=yn,H=z(0),D=null,v=gn,A=mn,B=pn,r=null,I=cn(i);function i(){var n,m,u=+c.apply(this,arguments),s=+h.apply(this,arguments),t=v.apply(this,arguments)-un,f=A.apply(this,arguments)-un,C=an(f-t),l=f>t;if(r||(r=n=I()),s<u&&(m=s,s=u,u=m),!(s>y))r.moveTo(0,0);else if(C>ln-y)r.moveTo(s*G(t),s*q(t)),r.arc(0,0,s,t,f,!l),u>y&&(r.moveTo(u*G(f),u*q(f)),r.arc(0,0,u,f,t,l));else{var p=t,g=f,R=t,T=f,w=C,O=C,S=B.apply(this,arguments)/2,j=S>y&&(D?+D.apply(this,arguments):L(u*u+s*s)),P=_(an(s-u)/2,+H.apply(this,arguments)),d=P,x=P,e,a;if(j>y){var F=sn(j/u*q(S)),M=sn(j/s*q(S));(w-=F*2)>y?(F*=l?1:-1,R+=F,T-=F):(w=0,R=T=(t+f)/2),(O-=M*2)>y?(M*=l?1:-1,p+=M,g-=M):(O=0,p=g=(t+f)/2)}var J=s*G(p),K=s*q(p),N=u*G(T),Q=u*q(T);if(P>y){var U=s*G(g),V=s*q(g),X=u*G(R),Y=u*q(R),E;if(C<rn)if(E=dn(J,K,X,Y,U,V,N,Q)){var Z=J-E[0],$=K-E[1],b=U-E[0],k=V-E[1],nn=1/q(on((Z*b+$*k)/(L(Z*Z+$*$)*L(b*b+k*k)))/2),en=L(E[0]*E[0]+E[1]*E[1]);d=_(P,(u-en)/(nn-1)),x=_(P,(s-en)/(nn+1))}else d=x=0}O>y?x>y?(e=W(X,Y,J,K,s,x,l),a=W(U,V,N,Q,s,x,l),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<P?r.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(a.y01,a.x01),!l):(r.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!l),r.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(a.cy+a.y11,a.cx+a.x11),!l),r.arc(a.cx,a.cy,x,o(a.y11,a.x11),o(a.y01,a.x01),!l))):(r.moveTo(J,K),r.arc(0,0,s,p,g,!l)):r.moveTo(J,K),!(u>y)||!(w>y)?r.lineTo(N,Q):d>y?(e=W(N,Q,U,V,u,-d,l),a=W(J,K,X,Y,u,-d,l),r.lineTo(e.cx+e.x01,e.cy+e.y01),d<P?r.arc(e.cx,e.cy,d,o(e.y01,e.x01),o(a.y01,a.x01),!l):(r.arc(e.cx,e.cy,d,o(e.y01,e.x01),o(e.y11,e.x11),!l),r.arc(0,0,u,o(e.cy+e.y11,e.cx+e.x11),o(a.cy+a.y11,a.cx+a.x11),l),r.arc(a.cx,a.cy,d,o(a.y11,a.x11),o(a.y01,a.x01),!l))):r.arc(0,0,u,T,R,l)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+c.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-rn/2;return[G(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(c=typeof n=="function"?n:z(+n),i):c},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:z(+n),i):h},i.cornerRadius=function(n){return arguments.length?(H=typeof n=="function"?n:z(+n),i):H},i.padRadius=function(n){return arguments.length?(D=n==null?null:typeof n=="function"?n:z(+n),i):D},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:z(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:z(+n),i):A},i.padAngle=function(n){return arguments.length?(B=typeof n=="function"?n:z(+n),i):B},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as a};