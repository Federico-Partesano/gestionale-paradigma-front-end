import{__rest as i,__assign as e}from"../../../../../node_modules/tslib/tslib.es6.js";import{jsx as o}from"react/jsx-runtime";import a from"clsx";import{StyledLink as t,StyledAnchor as n,StyledButton as c}from"./style.js";var l=function(l){var s=l.children,r=l.type,$=l.variant,p=l.color,d=l.size,u=l.shape,h=l.fullwidth,m=l.active,b=l.disabled,f=l.iconButton,v=l.hasIcon,z=l.label,S=l.onClick,y=l.className,B=l.path,P=l.iconPosition,w=l.iconSize,N=l.iconSpace,k=l.uppercase,C=i(l,["children","type","variant","color","size","shape","fullwidth","active","disabled","iconButton","hasIcon","label","onClick","className","path","iconPosition","iconSize","iconSpace","uppercase"]);if(B){var I=/^\/(?!\/)/.test(B);null==B||B.startsWith("#");return I?o(t,e({$color:p,$variant:$,$size:d,$shape:u,$fullwidth:h,$active:m,disabled:b,$iconButton:f,$hasIcon:v,$iconPosition:P,$iconSize:w,$iconSpace:N,$uppercase:k,"aria-label":z,onClick:S,className:a(y,"btn"),to:B},C,{children:s})):o(n,e({$color:p,$variant:$,$size:d,$shape:u,$fullwidth:h,$active:m,disabled:b,$iconButton:f,$hasIcon:v,$iconPosition:P,$iconSize:w,$iconSpace:N,$uppercase:k,"aria-label":z,onClick:S,className:a(y,"btn"),href:B},C,{children:s}))}return o(c,e({$color:p,$variant:$,$size:d,$shape:u,$fullwidth:h,type:r,$active:m,disabled:b,$iconButton:f,$hasIcon:v,$iconPosition:P,$iconSize:w,$iconSpace:N,$uppercase:k,"aria-label":z,onClick:S,className:a(y,"btn")},C,{children:s}))};l.defaultProps={type:"button",variant:"contained",color:"primary",size:"md",shape:"rounded",fullwidth:!1,active:!1,disabled:!1,iconButton:!1,iconPosition:"left",iconSize:"sm"},l.displayName="Button";export{l as default};