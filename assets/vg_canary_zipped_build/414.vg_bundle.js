"use strict";(self.webpackChunkcustom_vf_nextjs=self.webpackChunkcustom_vf_nextjs||[]).push([[414],{31414:(e,n,o)=>{o.r(n),o.d(n,{default:()=>b});var s=o(15861),t=o(64687),a=o.n(t),c=o(67294),u=o(97693),r=o(73850),v=o(86893),i=o(48676),d=o(39332),g=o(73711),l=o(44925),m=c.createElement;const b=function(e){var n,t,c,b,f,p=(0,l.B)().config,k=(0,d.useParams)(),I=(0,i.useRuntime)(),h=I.runtime,x=I.formattedTurnsValue,w=I.setFormattedTurnsValue,_="eu"===(null==p?void 0:p.region)||"eu"===(null==k?void 0:k.region)?"voiceglow-eu":(null==h||null===(n=h.variables)||void 0===n?void 0:n.region)||"(default)",y=x,N="voiceglow/".concat(null===(t=h.variables)||void 0===t?void 0:t.ID,"/convos/").concat(h.userID,"/convo/JSON_STRING"),O=null!==(c=y[null==e?void 0:e.turnIndex])&&void 0!==c&&c.messages?!0===(null===(b=y[null==e?void 0:e.turnIndex])||void 0===b||null===(b=b.messages[null==e?void 0:e.messageIndex])||void 0===b?void 0:b.feedback)||!1!==(null===(f=y[null==e?void 0:e.turnIndex])||void 0===f||null===(f=f.messages[null==e?void 0:e.messageIndex])||void 0===f?void 0:f.feedback)&&void 0:void 0;function S(e){return T.apply(this,arguments)}function T(){return(T=(0,s.Z)(a().mark((function n(s){var t,c,u,r,v,i,d;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(o.bind(o,68650));case 2:return t=n.sent,c=t.getFirestore,u=t.doc,r=t.setDoc,v=c(g.l2,_),(i=y)[e.turnIndex].messages[e.messageIndex].feedback=s,d=JSON.stringify(i),n.next=12,r(u(v,N),{convoTurns_JSON_STRING:d},{merge:!0});case 12:w(i);case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return m(u.Z,{className:" vg-opacity-0 vg-group-hover:opacity-100 vg-absolute vg-bottom-0 vg-right-0 vg-z-20 vg-bg-background/50 vg-backdrop-blur-sm vg-rounded-medium vg-feedback-btns-container",key:"thumbs_upordown_".concat(e.turnIndex,"_message_").concat(e.messageIndex)},m(r.Z,{onPress:function(){return S(!0)},size:"sm",className:" vg-opacity-50 ".concat(!0===O?" vg-bg-content4 ":" vg-bg-background/50 "," vg-w-5 vg-h-5 vg-feedback-tup-container"),isIconOnly:!0},m(v.fmn,{className:" vg-w-3 vg-h-3 vg-feedback-tup--icon"})),m(r.Z,{onPress:function(){return S(!1)},size:"sm",className:" vg-opacity-50 ".concat(!1===O?" vg-bg-content4 ":" vg-bg-background/50 "," vg-w-5 vg-h-5 vg-feedback-tdown-container"),isIconOnly:!0},m(v.oLd,{className:" vg-w-3 vg-h-3 vg-feedback-tdown--icon"})))}}}]);