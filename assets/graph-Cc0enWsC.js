import{c0 as de,cA as Ie,cB as Fe,cC as j,b_ as Y,cD as ge,cE as Me,c2 as E,cF as ce,cG as R,cH as Re,cI as D,cJ as w,cK as N,c8 as he,bX as le,cL as De,cM as K,cN as Ne,cO as je,cP as P,cb as Ge,cQ as xe,cR as Ue,b$ as Be,cS as Z,cT as Ke,cU as He,cV as _e,cW as pe,cX as Ye,cY as Xe,c7 as qe,c6 as be,c4 as Je,cZ as Qe,c3 as Ze,cd as I,bo as W,c_ as We,c$ as z}from"./index-Bayknysu.js";function ye(r,e){for(var n=-1,t=r==null?0:r.length;++n<t&&e(r[n],n,r)!==!1;);return r}function A(r){return de(r)?Ie(r):Fe(r)}function ze(r,e,n,t){var s=-1,i=r==null?0:r.length;for(t&&i&&(n=r[++s]);++s<i;)n=e(n,r[s],s,r);return n}function Ve(r,e){return r&&j(e,A(e),r)}function ke(r,e){return r&&j(e,Y(e),r)}function Ae(r,e){for(var n=-1,t=r==null?0:r.length,s=0,i=[];++n<t;){var a=r[n];e(a,n,r)&&(i[s++]=a)}return i}function Te(){return[]}var er=Object.prototype,rr=er.propertyIsEnumerable,V=Object.getOwnPropertySymbols,X=V?function(r){return r==null?[]:(r=Object(r),Ae(V(r),function(e){return rr.call(r,e)}))}:Te;function nr(r,e){return j(r,X(r),e)}var tr=Object.getOwnPropertySymbols,Ee=tr?function(r){for(var e=[];r;)ge(e,X(r)),r=Me(r);return e}:Te;function ir(r,e){return j(r,Ee(r),e)}function Oe(r,e,n){var t=e(r);return E(r)?t:ge(t,n(r))}function H(r){return Oe(r,A,X)}function sr(r){return Oe(r,Y,Ee)}var ar=Object.prototype,ur=ar.hasOwnProperty;function fr(r){var e=r.length,n=new r.constructor(e);return e&&typeof r[0]=="string"&&ur.call(r,"index")&&(n.index=r.index,n.input=r.input),n}function or(r,e){var n=e?ce(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.byteLength)}var dr=/\w*$/;function gr(r){var e=new r.constructor(r.source,dr.exec(r));return e.lastIndex=r.lastIndex,e}var k=R?R.prototype:void 0,ee=k?k.valueOf:void 0;function cr(r){return ee?Object(ee.call(r)):{}}var hr="[object Boolean]",lr="[object Date]",_r="[object Map]",pr="[object Number]",br="[object RegExp]",yr="[object Set]",Ar="[object String]",Tr="[object Symbol]",Er="[object ArrayBuffer]",Or="[object DataView]",vr="[object Float32Array]",mr="[object Float64Array]",Lr="[object Int8Array]",$r="[object Int16Array]",Pr="[object Int32Array]",wr="[object Uint8Array]",Cr="[object Uint8ClampedArray]",Sr="[object Uint16Array]",Ir="[object Uint32Array]";function Fr(r,e,n){var t=r.constructor;switch(e){case Er:return ce(r);case hr:case lr:return new t(+r);case Or:return or(r,n);case vr:case mr:case Lr:case $r:case Pr:case wr:case Cr:case Sr:case Ir:return Re(r,n);case _r:return new t;case pr:case Ar:return new t(r);case br:return gr(r);case yr:return new t;case Tr:return cr(r)}}var Mr="[object Map]";function Rr(r){return D(r)&&w(r)==Mr}var re=N&&N.isMap,Dr=re?he(re):Rr,Nr="[object Set]";function jr(r){return D(r)&&w(r)==Nr}var ne=N&&N.isSet,Gr=ne?he(ne):jr,xr=1,Ur=2,Br=4,ve="[object Arguments]",Kr="[object Array]",Hr="[object Boolean]",Yr="[object Date]",Xr="[object Error]",me="[object Function]",qr="[object GeneratorFunction]",Jr="[object Map]",Qr="[object Number]",Le="[object Object]",Zr="[object RegExp]",Wr="[object Set]",zr="[object String]",Vr="[object Symbol]",kr="[object WeakMap]",en="[object ArrayBuffer]",rn="[object DataView]",nn="[object Float32Array]",tn="[object Float64Array]",sn="[object Int8Array]",an="[object Int16Array]",un="[object Int32Array]",fn="[object Uint8Array]",on="[object Uint8ClampedArray]",dn="[object Uint16Array]",gn="[object Uint32Array]",o={};o[ve]=o[Kr]=o[en]=o[rn]=o[Hr]=o[Yr]=o[nn]=o[tn]=o[sn]=o[an]=o[un]=o[Jr]=o[Qr]=o[Le]=o[Zr]=o[Wr]=o[zr]=o[Vr]=o[fn]=o[on]=o[dn]=o[gn]=!0;o[Xr]=o[me]=o[kr]=!1;function G(r,e,n,t,s,i){var a,u=e&xr,f=e&Ur,c=e&Br;if(a!==void 0)return a;if(!le(r))return r;var l=E(r);if(l){if(a=fr(r),!u)return De(r,a)}else{var d=w(r),g=d==me||d==qr;if(K(r))return Ne(r,u);if(d==Le||d==ve||g&&!s){if(a=f||g?{}:je(r),!u)return f?ir(r,ke(a,r)):nr(r,Ve(a,r))}else{if(!o[d])return s?r:{};a=Fr(r,d,u)}}i||(i=new P);var y=i.get(r);if(y)return y;i.set(r,a),Gr(r)?r.forEach(function(h){a.add(G(h,e,n,h,r,i))}):Dr(r)&&r.forEach(function(h,_){a.set(_,G(h,e,n,_,r,i))});var p=c?f?sr:H:f?Y:A,b=l?void 0:p(r);return ye(b||r,function(h,_){b&&(_=h,h=r[_]),Ge(a,_,G(h,e,n,_,r,i))}),a}function cn(r,e){for(var n=-1,t=r==null?0:r.length;++n<t;)if(e(r[n],n,r))return!0;return!1}var hn=1,ln=2;function $e(r,e,n,t,s,i){var a=n&hn,u=r.length,f=e.length;if(u!=f&&!(a&&f>u))return!1;var c=i.get(r),l=i.get(e);if(c&&l)return c==e&&l==r;var d=-1,g=!0,y=n&ln?new xe:void 0;for(i.set(r,e),i.set(e,r);++d<u;){var p=r[d],b=e[d];if(t)var h=a?t(b,p,d,e,r,i):t(p,b,d,r,e,i);if(h!==void 0){if(h)continue;g=!1;break}if(y){if(!cn(e,function(_,O){if(!Ue(y,O)&&(p===_||s(p,_,n,t,i)))return y.push(O)})){g=!1;break}}else if(!(p===b||s(p,b,n,t,i))){g=!1;break}}return i.delete(r),i.delete(e),g}function _n(r){var e=-1,n=Array(r.size);return r.forEach(function(t,s){n[++e]=[s,t]}),n}var pn=1,bn=2,yn="[object Boolean]",An="[object Date]",Tn="[object Error]",En="[object Map]",On="[object Number]",vn="[object RegExp]",mn="[object Set]",Ln="[object String]",$n="[object Symbol]",Pn="[object ArrayBuffer]",wn="[object DataView]",te=R?R.prototype:void 0,x=te?te.valueOf:void 0;function Cn(r,e,n,t,s,i,a){switch(n){case wn:if(r.byteLength!=e.byteLength||r.byteOffset!=e.byteOffset)return!1;r=r.buffer,e=e.buffer;case Pn:return!(r.byteLength!=e.byteLength||!i(new Z(r),new Z(e)));case yn:case An:case On:return Be(+r,+e);case Tn:return r.name==e.name&&r.message==e.message;case vn:case Ln:return r==e+"";case En:var u=_n;case mn:var f=t&pn;if(u||(u=Ke),r.size!=e.size&&!f)return!1;var c=a.get(r);if(c)return c==e;t|=bn,a.set(r,e);var l=$e(u(r),u(e),t,s,i,a);return a.delete(r),l;case $n:if(x)return x.call(r)==x.call(e)}return!1}var Sn=1,In=Object.prototype,Fn=In.hasOwnProperty;function Mn(r,e,n,t,s,i){var a=n&Sn,u=H(r),f=u.length,c=H(e),l=c.length;if(f!=l&&!a)return!1;for(var d=f;d--;){var g=u[d];if(!(a?g in e:Fn.call(e,g)))return!1}var y=i.get(r),p=i.get(e);if(y&&p)return y==e&&p==r;var b=!0;i.set(r,e),i.set(e,r);for(var h=a;++d<f;){g=u[d];var _=r[g],O=e[g];if(t)var Q=a?t(O,_,g,e,r,i):t(_,O,g,r,e,i);if(!(Q===void 0?_===O||s(_,O,n,t,i):Q)){b=!1;break}h||(h=g=="constructor")}if(b&&!h){var C=r.constructor,S=e.constructor;C!=S&&"constructor"in r&&"constructor"in e&&!(typeof C=="function"&&C instanceof C&&typeof S=="function"&&S instanceof S)&&(b=!1)}return i.delete(r),i.delete(e),b}var Rn=1,ie="[object Arguments]",se="[object Array]",F="[object Object]",Dn=Object.prototype,ae=Dn.hasOwnProperty;function Nn(r,e,n,t,s,i){var a=E(r),u=E(e),f=a?se:w(r),c=u?se:w(e);f=f==ie?F:f,c=c==ie?F:c;var l=f==F,d=c==F,g=f==c;if(g&&K(r)){if(!K(e))return!1;a=!0,l=!1}if(g&&!l)return i||(i=new P),a||He(r)?$e(r,e,n,t,s,i):Cn(r,e,f,n,t,s,i);if(!(n&Rn)){var y=l&&ae.call(r,"__wrapped__"),p=d&&ae.call(e,"__wrapped__");if(y||p){var b=y?r.value():r,h=p?e.value():e;return i||(i=new P),s(b,h,n,t,i)}}return g?(i||(i=new P),Mn(r,e,n,t,s,i)):!1}function q(r,e,n,t,s){return r===e?!0:r==null||e==null||!D(r)&&!D(e)?r!==r&&e!==e:Nn(r,e,n,t,q,s)}var jn=1,Gn=2;function xn(r,e,n,t){var s=n.length,i=s;if(r==null)return!i;for(r=Object(r);s--;){var a=n[s];if(a[2]?a[1]!==r[a[0]]:!(a[0]in r))return!1}for(;++s<i;){a=n[s];var u=a[0],f=r[u],c=a[1];if(a[2]){if(f===void 0&&!(u in r))return!1}else{var l=new P,d;if(!(d===void 0?q(c,f,jn|Gn,t,l):d))return!1}}return!0}function Pe(r){return r===r&&!le(r)}function Un(r){for(var e=A(r),n=e.length;n--;){var t=e[n],s=r[t];e[n]=[t,s,Pe(s)]}return e}function we(r,e){return function(n){return n==null?!1:n[r]===e&&(e!==void 0||r in Object(n))}}function Bn(r){var e=Un(r);return e.length==1&&e[0][2]?we(e[0][0],e[0][1]):function(n){return n===r||xn(n,r,e)}}var Kn=1,Hn=2;function Yn(r,e){return _e(r)&&Pe(e)?we(pe(r),e):function(n){var t=Ye(n,r);return t===void 0&&t===e?Xe(n,r):q(e,t,Kn|Hn)}}function Xn(r){return function(e){return e?.[r]}}function qn(r){return function(e){return qe(e,r)}}function Jn(r){return _e(r)?Xn(pe(r)):qn(r)}function Ce(r){return typeof r=="function"?r:r==null?be:typeof r=="object"?E(r)?Yn(r[0],r[1]):Bn(r):Jn(r)}function Qn(r,e){return r&&Je(r,e,A)}function Zn(r,e){return function(n,t){if(n==null)return n;if(!de(n))return r(n,t);for(var s=n.length,i=-1,a=Object(n);++i<s&&t(a[i],i,a)!==!1;);return n}}var J=Zn(Qn);function Wn(r){return typeof r=="function"?r:be}function v(r,e){var n=E(r)?ye:J;return n(r,Wn(e))}function zn(r,e){var n=[];return J(r,function(t,s,i){e(t,s,i)&&n.push(t)}),n}function M(r,e){var n=E(r)?Ae:zn;return n(r,Ce(e))}var Vn=Object.prototype,kn=Vn.hasOwnProperty;function et(r,e){return r!=null&&kn.call(r,e)}function T(r,e){return r!=null&&Qe(r,e,et)}function rt(r,e){return Ze(e,function(n){return r[n]})}function U(r){return r==null?[]:rt(r,A(r))}function L(r){return r===void 0}function nt(r,e,n,t,s){return s(r,function(i,a,u){n=t?(t=!1,i):e(n,i,a,u)}),n}function tt(r,e,n){var t=E(r)?ze:nt,s=arguments.length<3;return t(r,Ce(e),n,s,J)}var it="\0",m="\0",ue="";class Se{constructor(e={}){this._isDirected=T(e,"directed")?e.directed:!0,this._isMultigraph=T(e,"multigraph")?e.multigraph:!1,this._isCompound=T(e,"compound")?e.compound:!1,this._label=void 0,this._defaultNodeLabelFn=I(void 0),this._defaultEdgeLabelFn=I(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[m]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return W(e)||(e=I(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return A(this._nodes)}sources(){var e=this;return M(this.nodes(),function(n){return z(e._in[n])})}sinks(){var e=this;return M(this.nodes(),function(n){return z(e._out[n])})}setNodes(e,n){var t=arguments,s=this;return v(e,function(i){t.length>1?s.setNode(i,n):s.setNode(i)}),this}setNode(e,n){return T(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=n),this):(this._nodes[e]=arguments.length>1?n:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=m,this._children[e]={},this._children[m][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return T(this._nodes,e)}removeNode(e){var n=this;if(T(this._nodes,e)){var t=function(s){n.removeEdge(n._edgeObjs[s])};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],v(this.children(e),function(s){n.setParent(s)}),delete this._children[e]),v(A(this._in[e]),t),delete this._in[e],delete this._preds[e],v(A(this._out[e]),t),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,n){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(L(n))n=m;else{n+="";for(var t=n;!L(t);t=this.parent(t))if(t===e)throw new Error("Setting "+n+" as parent of "+e+" would create a cycle");this.setNode(n)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=n,this._children[n][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var n=this._parent[e];if(n!==m)return n}}children(e){if(L(e)&&(e=m),this._isCompound){var n=this._children[e];if(n)return A(n)}else{if(e===m)return this.nodes();if(this.hasNode(e))return[]}}predecessors(e){var n=this._preds[e];if(n)return A(n)}successors(e){var n=this._sucs[e];if(n)return A(n)}neighbors(e){var n=this.predecessors(e);if(n)return We(n,this.successors(e))}isLeaf(e){var n;return this.isDirected()?n=this.successors(e):n=this.neighbors(e),n.length===0}filterNodes(e){var n=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});n.setGraph(this.graph());var t=this;v(this._nodes,function(a,u){e(u)&&n.setNode(u,a)}),v(this._edgeObjs,function(a){n.hasNode(a.v)&&n.hasNode(a.w)&&n.setEdge(a,t.edge(a))});var s={};function i(a){var u=t.parent(a);return u===void 0||n.hasNode(u)?(s[a]=u,u):u in s?s[u]:i(u)}return this._isCompound&&v(n.nodes(),function(a){n.setParent(a,i(a))}),n}setDefaultEdgeLabel(e){return W(e)||(e=I(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return U(this._edgeObjs)}setPath(e,n){var t=this,s=arguments;return tt(e,function(i,a){return s.length>1?t.setEdge(i,a,n):t.setEdge(i,a),a}),this}setEdge(){var e,n,t,s,i=!1,a=arguments[0];typeof a=="object"&&a!==null&&"v"in a?(e=a.v,n=a.w,t=a.name,arguments.length===2&&(s=arguments[1],i=!0)):(e=a,n=arguments[1],t=arguments[3],arguments.length>2&&(s=arguments[2],i=!0)),e=""+e,n=""+n,L(t)||(t=""+t);var u=$(this._isDirected,e,n,t);if(T(this._edgeLabels,u))return i&&(this._edgeLabels[u]=s),this;if(!L(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(n),this._edgeLabels[u]=i?s:this._defaultEdgeLabelFn(e,n,t);var f=st(this._isDirected,e,n,t);return e=f.v,n=f.w,Object.freeze(f),this._edgeObjs[u]=f,fe(this._preds[n],e),fe(this._sucs[e],n),this._in[n][u]=f,this._out[e][u]=f,this._edgeCount++,this}edge(e,n,t){var s=arguments.length===1?B(this._isDirected,arguments[0]):$(this._isDirected,e,n,t);return this._edgeLabels[s]}hasEdge(e,n,t){var s=arguments.length===1?B(this._isDirected,arguments[0]):$(this._isDirected,e,n,t);return T(this._edgeLabels,s)}removeEdge(e,n,t){var s=arguments.length===1?B(this._isDirected,arguments[0]):$(this._isDirected,e,n,t),i=this._edgeObjs[s];return i&&(e=i.v,n=i.w,delete this._edgeLabels[s],delete this._edgeObjs[s],oe(this._preds[n],e),oe(this._sucs[e],n),delete this._in[n][s],delete this._out[e][s],this._edgeCount--),this}inEdges(e,n){var t=this._in[e];if(t){var s=U(t);return n?M(s,function(i){return i.v===n}):s}}outEdges(e,n){var t=this._out[e];if(t){var s=U(t);return n?M(s,function(i){return i.w===n}):s}}nodeEdges(e,n){var t=this.inEdges(e,n);if(t)return t.concat(this.outEdges(e,n))}}Se.prototype._nodeCount=0;Se.prototype._edgeCount=0;function fe(r,e){r[e]?r[e]++:r[e]=1}function oe(r,e){--r[e]||delete r[e]}function $(r,e,n,t){var s=""+e,i=""+n;if(!r&&s>i){var a=s;s=i,i=a}return s+ue+i+ue+(L(t)?it:t)}function st(r,e,n,t){var s=""+e,i=""+n;if(!r&&s>i){var a=s;s=i,i=a}var u={v:s,w:i};return t&&(u.name=t),u}function B(r,e){return $(r,e.v,e.w,e.name)}export{Se as G,Ce as a,G as b,J as c,Wn as d,Qn as e,v as f,M as g,T as h,L as i,A as k,tt as r,U as v};