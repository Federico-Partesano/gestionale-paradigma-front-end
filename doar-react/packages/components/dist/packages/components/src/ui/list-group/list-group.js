import{__rest as r,__assign as t}from"../../../../../node_modules/tslib/tslib.es6.js";import{jsx as o}from"react/jsx-runtime";import{Children as s,isValidElement as a}from"react";import e from"clsx";import{StyledListGroup as i}from"./style.js";var l=function(l){var m=l.as,n=l.className,u=l.children,f=l.flush,p=l.horizontal,c=r(l,["as","className","children","flush","horizontal"]),h=s.map(u,(function(r){if(!a(r))return r;var s=r;if(null!==s){var e=s.type;if("ListGroupItem"===(e.displayName||e.name))return o(s.type,t({},s.props,{flush:f,horizontal:p}))}return s}));return o(i,t({as:m,className:e(n,"list-group"),$horizontal:p},c,{children:h}))};export{l as default};