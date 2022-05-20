"use strict";(self.webpackChunkvmaclient=self.webpackChunkvmaclient||[]).push([[596],{9596:function(e,s,a){a.r(s),a.d(s,{default:function(){return f}});var l=a(1413),t=a(7876),i=a(1134),r=a(2711),n=a(9120),d=a(2791),o=a(937),c=a(6140),m=a(158),u=a(184);function f(){var e=(0,n.Z)(),s=e.user,a=e.initialize,f=(0,d.useMemo)((function(){return{avatar:null===s||void 0===s?void 0:s.avatar,firstName:null===s||void 0===s?void 0:s.firstName,lastName:null===s||void 0===s?void 0:s.lastName,mobile:null===s||void 0===s?void 0:s.mobile,email:null===s||void 0===s?void 0:s.email,address:null===s||void 0===s?void 0:s.address}}),[s]),p=(0,i.cI)(f),h=p.register,x=p.reset,b=p.handleSubmit,N=p.setValue,g=p.watch,v=p.formState.isSubmitting,j=g("avatar");return(0,d.useEffect)((function(){s&&x(f)}),[s,f,x]),(0,u.jsx)(m.Z,{title:"Profile",children:(0,u.jsxs)("div",{className:"container px-5 py-8 text-gray-700 ",children:[(0,u.jsxs)("p",{className:" font-bold text-2xl mb-5",children:[" ","User Profile"]}),(0,u.jsxs)("form",{onSubmit:b((function(e){var s=new FormData,l=e.firstName,t=e.lastName,i=e.address,r=e.email,n=e.avatar;s.append("firstName",l),s.append("lastName",t),s.append("address",i),s.append("email",r),s.append("avatar",n),"string"===typeof n&&(0,o.DS)(o.yX.setProfileWithoutImage,e).then((function(e){200===e.status?(c.ZP.success("Your profile was changed"),a()):c.ZP.error(e.message)})),"object"===typeof n&&(0,o.Y6)(o.yX.setProfileWithImage,s).then((function(e){200===e.status?(c.ZP.success("Your profile was changed"),a()):c.ZP.error(e.message)}))})),className:"grid lg:grid-cols-3 gap-5 rounded-2xl shadow-lg bg-white",children:[(0,u.jsxs)("div",{className:"card p-6  gap-5  h-full ",children:[(0,u.jsxs)("div",{className:"mx-auto relative ",children:[j&&(0,u.jsx)(t.Z,{className:"w-32 h-32 rounded-full outline-dashed outline-stone-300 outline-offset-4 outline-1",src:"string"===typeof j?"".concat(o.S$.root).concat(j):URL.createObjectURL(j)}),(0,u.jsx)("input",{hidden:!0,id:"avatar",type:"file",accept:"image/*",onChange:function(e){e.target.files&&e.target.files.length>0&&N("avatar",e.target.files[0])}}),(0,u.jsx)("label",{htmlFor:"avatar",className:"rounded-lg border bg-gray-50 w-9 h-9 cursor-pointer flex absolute bottom-0 right-0",children:(0,u.jsx)(r.JO,{icon:"fa:pencil",width:20,className:"m-auto text-stone-500"})})]}),(0,u.jsxs)("p",{className:"text-gray-500 text-center text-sm",children:["Allowed *.jpeg, *.jpg, *.png, *.gif ",(0,u.jsx)("br",{}),"max size of 3.1 MB"]})]}),(0,u.jsxs)("div",{className:" md:col-span-2   p-6 gap-3",children:[(0,u.jsxs)("div",{className:"grid md:grid-cols-2 gap-5 mb-5",children:[(0,u.jsxs)("div",{className:"w-full",children:[(0,u.jsxs)("p",{className:"font-bold text-sm pl-2",children:[" ","First Name"]}),(0,u.jsx)("input",(0,l.Z)({className:"input h-10 border border-stone-300 w-full",required:!0},h("firstName")))]}),(0,u.jsxs)("div",{className:"w-full",children:[(0,u.jsxs)("p",{className:"font-bold text-sm pl-2",children:[" ","Last Name"]}),(0,u.jsx)("input",(0,l.Z)({className:"input h-10 border border-stone-300 w-full",required:!0},h("lastName")))]}),(0,u.jsxs)("div",{className:"w-full",children:[(0,u.jsxs)("p",{className:"font-bold text-sm pl-2",children:[" ","Mobile"]}),(0,u.jsx)("input",(0,l.Z)({className:"input h-10 border border-stone-300 w-full ",readOnly:!0,disabled:!0},h("mobile")))]}),(0,u.jsxs)("div",{className:"w-full",children:[(0,u.jsxs)("p",{className:"font-bold text-sm pl-2",children:[" ","Email"]}),(0,u.jsx)("input",(0,l.Z)({className:"input h-10 border border-stone-300 w-full",required:!0},h("email")))]}),(0,u.jsxs)("div",{className:"w-full  md:col-span-2",children:[(0,u.jsx)("p",{className:"font-bold text-sm pl-2",children:"Address"}),(0,u.jsx)("input",(0,l.Z)({className:"input h-10 border border-stone-300 w-full",required:!0},h("address")))]})]}),(0,u.jsx)("div",{className:"flex ",children:(0,u.jsx)("button",{type:"submit",className:"btn btn-info px-5 ml-auto ".concat(v&&"loading"),children:"Save"})})]})]})]})})}}}]);
//# sourceMappingURL=596.fc34055d.chunk.js.map