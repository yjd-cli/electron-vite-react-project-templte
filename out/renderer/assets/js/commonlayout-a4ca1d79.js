import{b as y,j as h,r as d,R as r,_ as f,O as p}from"./vendor-7ade5383.js";const k="common-layout-module__common-layout--ULi6A",g="common-layout-module__content-area--9P4Fn",s={"common-layout":"common-layout-module__common-layout--ULi6A",commonLayout:k,"content-area":"common-layout-module__content-area--9P4Fn",contentArea:g},l=[{label:"Home",key:"home"},{label:"Navigation Two",key:"navigation-two",children:[{label:"Option 2-1",key:"option-one"},{label:"Option 2-2",key:"option-two"},{label:"Option 2-3",key:"option-three"}]},{label:"User",key:"user"}];function i(t=[]){if(!t.length)return;let e=[];return t.forEach(a=>{const{key:o,children:c=[]}=a;if(location.pathname.indexOf(`/${o}`)===-1)return;e.push(a.key);const n=i(c);n&&n.length&&(e=e.concat(n))}),e}function m(t){if(!t||!t.key)return;const{key:e,children:a=[]}=t;let o=[e];const c=m(a[0]);return c&&(o=o.concat(c)),o}const v=()=>{const t=y(),e=h(),a=l.map(n=>n.key),o=d.useMemo(()=>e.pathname?e.pathname==="/"?m(l[0]):i(l).reverse():[],[e,l]),c=({keyPath:n})=>{const u=n.reverse().join("/");t(u)};return r.createElement("div",{className:`${s.commonLayout}`},r.createElement(f,{defaultOpenKeys:a,defaultSelectedKeys:o,items:l,style:{width:200,height:"100%"},mode:"inline",onClick:c}),r.createElement("div",{className:s.contentArea},r.createElement(p,null)))};export{v as default};