self.webpackChunk([1],{69:function(t,r,n){"use strict";n.r(r);var e=n(70);n.d(r,"Collider",(function(){return e.a})),n.d(r,"ColliderDesc",(function(){return e.b})),n.d(r,"Joint",(function(){return e.c})),n.d(r,"JointDesc",(function(){return e.d})),n.d(r,"RigidBody",(function(){return e.e})),n.d(r,"RigidBodyDesc",(function(){return e.f})),n.d(r,"Rotation",(function(){return e.g})),n.d(r,"Vector",(function(){return e.h})),n.d(r,"World",(function(){return e.i})),n.d(r,"__wbg_rigidbody_new",(function(){return e.v})),n.d(r,"__wbindgen_object_drop_ref",(function(){return e.D})),n.d(r,"__wbindgen_string_new",(function(){return e.E})),n.d(r,"__wbg_collider_new",(function(){return e.m})),n.d(r,"__wbg_now_0aafc2276b5e8d61",(function(){return e.u})),n.d(r,"__wbg_get_09cf0143b5128db8",(function(){return e.n})),n.d(r,"__wbg_call_652fa4cfce310118",(function(){return e.l})),n.d(r,"__wbindgen_object_clone_ref",(function(){return e.C})),n.d(r,"__wbg_newnoargs_714dec97cfe3da72",(function(){return e.s})),n.d(r,"__wbg_call_0d50cec2d58307ad",(function(){return e.k})),n.d(r,"__wbg_buffer_3b2c485d32021ccc",(function(){return e.j})),n.d(r,"__wbg_self_8a533577b0c752d3",(function(){return e.w})),n.d(r,"__wbg_window_5912543aff64b459",(function(){return e.y})),n.d(r,"__wbg_globalThis_8f997d48cb67f28e",(function(){return e.o})),n.d(r,"__wbg_global_69b29294e4daedff",(function(){return e.p})),n.d(r,"__wbindgen_is_undefined",(function(){return e.A})),n.d(r,"__wbg_newwithbyteoffsetandlength_be36df37b41e18d2",(function(){return e.t})),n.d(r,"__wbg_length_2c2cee4e2d91d76c",(function(){return e.q})),n.d(r,"__wbg_new_c93911a3646a1f7f",(function(){return e.r})),n.d(r,"__wbg_set_a6b6f98ff63cc602",(function(){return e.x})),n.d(r,"__wbindgen_debug_string",(function(){return e.z})),n.d(r,"__wbindgen_throw",(function(){return e.F})),n.d(r,"__wbindgen_memory",(function(){return e.B}))},70:function(t,r,n){"use strict";(function(t,e){n.d(r,"a",(function(){return A})),n.d(r,"b",(function(){return E})),n.d(r,"c",(function(){return T})),n.d(r,"d",(function(){return R})),n.d(r,"e",(function(){return k})),n.d(r,"f",(function(){return C})),n.d(r,"g",(function(){return D})),n.d(r,"h",(function(){return B})),n.d(r,"i",(function(){return S})),n.d(r,"v",(function(){return I})),n.d(r,"D",(function(){return P})),n.d(r,"E",(function(){return F})),n.d(r,"m",(function(){return q})),n.d(r,"u",(function(){return $})),n.d(r,"n",(function(){return z})),n.d(r,"l",(function(){return J})),n.d(r,"C",(function(){return H})),n.d(r,"s",(function(){return U})),n.d(r,"k",(function(){return V})),n.d(r,"j",(function(){return K})),n.d(r,"w",(function(){return M})),n.d(r,"y",(function(){return N})),n.d(r,"o",(function(){return W})),n.d(r,"p",(function(){return G})),n.d(r,"A",(function(){return L})),n.d(r,"t",(function(){return Q})),n.d(r,"q",(function(){return X})),n.d(r,"r",(function(){return Y})),n.d(r,"x",(function(){return Z})),n.d(r,"z",(function(){return tt})),n.d(r,"F",(function(){return rt})),n.d(r,"B",(function(){return nt}));var i=n(71);const u=new Array(32).fill(void 0);function o(t){return u[t]}u.push(void 0,null,!0,!1);let c=u.length;function s(t){const r=o(t);return function(t){t<36||(u[t]=c,c=t)}(t),r}let a=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();let f=null;function p(){return null!==f&&f.buffer===i.R.buffer||(f=new Uint8Array(i.R.buffer)),f}function d(t,r){return a.decode(p().subarray(t,t+r))}function _(t){c===u.length&&u.push(u.length+1);const r=c;return c=u[r],u[r]=t,r}let l=0;let b=new("undefined"==typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder)("utf-8");const h="function"==typeof b.encodeInto?function(t,r){return b.encodeInto(t,r)}:function(t,r){const n=b.encode(t);return r.set(n),{read:t.length,written:n.length}};function w(t,r,n){if(void 0===n){const n=b.encode(t),e=r(n.length);return p().subarray(e,e+n.length).set(n),l=n.length,e}let e=t.length,i=r(e);const u=p();let o=0;for(;o<e;o++){const r=t.charCodeAt(o);if(r>127)break;u[i+o]=r}if(o!==e){0!==o&&(t=t.slice(o)),i=n(i,e,e=o+3*t.length);const r=p().subarray(i+o,i+e);o+=h(t,r).written}return l=o,i}let g=null;function y(){return null!==g&&g.buffer===i.R.buffer||(g=new Int32Array(i.R.buffer)),g}function v(t,r){if(!(t instanceof r))throw new Error("expected instance of "+r.name);return t.ptr}let m=null;let x=32;function j(t){if(1==x)throw new Error("out of js stack");return u[--x]=t,x}function O(t){return function(){try{return t.apply(this,arguments)}catch(t){i.t(_(t))}}}class A{static __wrap(t){const r=Object.create(A.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,i.a(t)}translation(){var t=i.G(this.ptr);return B.__wrap(t)}rotation(){var t=i.E(this.ptr);return D.__wrap(t)}shapeType(){return s(i.F(this.ptr))}halfExtents(){var t=i.z(this.ptr);return 0===t?void 0:B.__wrap(t)}radius(){i.D(8,this.ptr);var t=y()[2],r=(null!==m&&m.buffer===i.R.buffer||(m=new Float32Array(i.R.buffer)),m)[3];return 0===t?void 0:r}parent(){var t=i.B(this.ptr);return k.__wrap(t)}handle(){return i.A(this.ptr)>>>0}parentHandle(){return i.C(this.ptr)>>>0}friction(){return i.y(this.ptr)}density(){return i.x(this.ptr)}}class E{static __wrap(t){const r=Object.create(E.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,i.b(t)}get density(){return i.c(this.ptr)}set density(t){i.m(this.ptr,t)}get friction(){return i.d(this.ptr)}set friction(t){i.n(this.ptr,t)}get restitution(){return i.f(this.ptr)}set restitution(t){i.p(this.ptr,t)}get is_sensor(){return 0!==i.e(this.ptr)}set is_sensor(t){i.o(this.ptr,t)}static ball(t){var r=i.H(t);return E.__wrap(r)}static cuboid(t,r){var n=i.I(t,r);return E.__wrap(n)}}class T{static __wrap(t){const r=Object.create(T.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,i.h(t)}bodyHandle1(){return i.N(this.ptr)>>>0}bodyHandle2(){return i.O(this.ptr)>>>0}jointType(){try{i.P(8,this.ptr);var t=y()[2],r=y()[3];return d(t,r)}finally{i.u(t,r)}}anchor1(){var t=i.J(this.ptr);return B.__wrap(t)}anchor2(){var t=i.K(this.ptr);return B.__wrap(t)}axis1(){var t=i.L(this.ptr);return 0===t?void 0:B.__wrap(t)}axis2(){var t=i.M(this.ptr);return 0===t?void 0:B.__wrap(t)}}class R{static __wrap(t){const r=Object.create(R.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,i.i(t)}static ball(t,r){v(t,B),v(r,B);var n=i.Q(t.ptr,r.ptr);return R.__wrap(n)}}class k{static __wrap(t){const r=Object.create(k.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,i.j(t)}translation(){var t=i.bb(this.ptr);return B.__wrap(t)}linvel(){var t=i.Y(this.ptr);return B.__wrap(t)}mass(){return i.Z(this.ptr)}createCollider(t){v(t,E);var r=i.U(this.ptr,t.ptr);return A.__wrap(r)}handle(){return i.A(this.ptr)>>>0}numColliders(){return i.ab(this.ptr)>>>0}collider(t){var r=i.T(this.ptr,t);return A.__wrap(r)}bodyType(){try{i.S(8,this.ptr);var t=y()[2],r=y()[3];return d(t,r)}finally{i.u(t,r)}}isStatic(){return 0!==i.X(this.ptr)}isKinematic(){return 0!==i.W(this.ptr)}isDynamic(){return 0!==i.V(this.ptr)}}class C{static __wrap(t){const r=Object.create(C.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,i.k(t)}get position(){var t=i.g(this.ptr);return B.__wrap(t)}set position(t){v(t,B);var r=t.ptr;t.ptr=0,i.q(this.ptr,r)}constructor(t){var r=w(t,i.v,i.w),n=l,e=i.cb(r,n);return C.__wrap(e)}setTranslation(t,r){i.db(this.ptr,t,r)}}class D{static __wrap(t){const r=Object.create(D.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,i.l(t)}static identity(){var t=i.fb();return D.__wrap(t)}get im(){return i.gb(this.ptr)}get re(){return i.hb(this.ptr)}get angle(){return i.eb(this.ptr)}}class B{static __wrap(t){const r=Object.create(B.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,i.r(t)}static zero(){var t=i.pb();return B.__wrap(t)}constructor(t,r){var n=i.ib(t,r);return B.__wrap(n)}get x(){return i.lb(this.ptr)}set x(t){i.jb(this.ptr,t)}get y(){return i.nb(this.ptr)}set y(t){i.kb(this.ptr,t)}xy(){var t=i.mb(this.ptr);return B.__wrap(t)}yx(){var t=i.ob(this.ptr);return B.__wrap(t)}}class S{static __wrap(t){const r=Object.create(S.prototype);return r.ptr=t,r}free(){const t=this.ptr;this.ptr=0,i.s(t)}constructor(t,r){var n=i.wb(t,r);return S.__wrap(n)}takeSnapshot(){return s(i.Cb(this.ptr))}static restoreSnapshot(t){var r=i.xb(_(t));return 0===r?void 0:S.__wrap(r)}step(){i.Bb(this.ptr)}get timestep(){return i.Db(this.ptr)}set timestep(t){i.Ab(this.ptr,t)}get maxVelocityIterations(){return i.vb(this.ptr)>>>0}get maxPositionIterations(){return i.ub(this.ptr)>>>0}set maxVelocityIterations(t){i.zb(this.ptr,t)}set maxPositionIterations(t){i.yb(this.ptr,t)}createRigidBody(t){v(t,C);var r=i.rb(this.ptr,t.ptr);return k.__wrap(r)}createJoint(t,r,n){v(t,R),v(r,k),v(n,k);var e=i.qb(this.ptr,t.ptr,r.ptr,n.ptr);return T.__wrap(e)}forEachCollider(t){try{i.sb(this.ptr,j(t))}finally{u[x++]=void 0}}forEachRigidBody(t){try{i.tb(this.ptr,j(t))}finally{u[x++]=void 0}}}const I=function(t){return _(k.__wrap(t))},P=function(t){s(t)},F=function(t,r){return _(d(t,r))},q=function(t){return _(A.__wrap(t))},$=function(t){return o(t).now()},z=O((function(t,r){return _(Reflect.get(o(t),o(r)))})),J=O((function(t,r){return _(o(t).call(o(r)))})),H=function(t){return _(o(t))},U=function(t,r){return _(new Function(d(t,r)))},V=O((function(t,r,n){return _(o(t).call(o(r),o(n)))})),K=function(t){return _(o(t).buffer)},M=O((function(){return _(self.self)})),N=O((function(){return _(window.window)})),W=O((function(){return _(globalThis.globalThis)})),G=O((function(){return _(e.global)})),L=function(t){return void 0===o(t)},Q=function(t,r,n){return _(new Uint8Array(o(t),r>>>0,n>>>0))},X=function(t){return o(t).length},Y=function(t){return _(new Uint8Array(o(t)))},Z=function(t,r,n){o(t).set(o(r),n>>>0)},tt=function(t,r){var n=w(function t(r){const n=typeof r;if("number"==n||"boolean"==n||null==r)return""+r;if("string"==n)return`"${r}"`;if("symbol"==n){const t=r.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==n){const t=r.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(r)){const n=r.length;let e="[";n>0&&(e+=t(r[0]));for(let i=1;i<n;i++)e+=", "+t(r[i]);return e+="]",e}const e=/\[object ([^\]]+)\]/.exec(toString.call(r));let i;if(!(e.length>1))return toString.call(r);if(i=e[1],"Object"==i)try{return"Object("+JSON.stringify(r)+")"}catch(t){return"Object"}return r instanceof Error?`${r.name}: ${r.message}\n${r.stack}`:i}(o(r)),i.v,i.w),e=l;y()[t/4+1]=e,y()[t/4+0]=n},rt=function(t,r){throw new Error(d(t,r))},nt=function(){return _(i.R)}}).call(this,n(72)(t),n(30))},71:function(t,r,n){"use strict";var e=n.w[t.i];t.exports=e;n(70);e.Eb()},72:function(t,r){t.exports=function(t){if(!t.webpackPolyfill){var r=Object.create(t);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}}});