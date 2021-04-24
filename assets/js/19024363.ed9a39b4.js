(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(9),o=(n(0),n(170)),i={id:"type-safety",title:"Type-Safety",sidebar_label:"Type Safety"},s={unversionedId:"essentials/type-safety",id:"essentials/type-safety",isDocsHomePage:!1,title:"Type-Safety",description:"If you are using TypeScript, and you wish to get a better integration for GraphQL and TypeScript while writing your API and resolvers, we have a few tools that might make it simple for you.",source:"@site/docs/essentials/type-safety.md",slug:"/essentials/type-safety",permalink:"/docs/essentials/type-safety",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/docs/essentials/type-safety.md",version:"current",sidebar_label:"Type Safety",sidebar:"docs",previous:{title:"Context",permalink:"/docs/essentials/context"},next:{title:"Testing",permalink:"/docs/essentials/testing"}},p=[{value:"Using Context type",id:"using-context-type",children:[]},{value:"Shaping Context type",id:"shaping-context-type",children:[]},{value:"Strict Resolvers Types",id:"strict-resolvers-types",children:[]}],l={toc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you are using TypeScript, and you wish to get a better integration for GraphQL and TypeScript while writing your API and resolvers, we have a few tools that might make it simple for you."),Object(o.b)("h2",{id:"using-context-type"},"Using Context type"),Object(o.b)("p",null,"While writing you resolvers, if you wish to type your ",Object(o.b)("inlineCode",{parentName:"p"},"context")," argument based on your actual ",Object(o.b)("inlineCode",{parentName:"p"},"context")," shape, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLModules.Context"),". It a global interface expose for you by GraphQL-Modules and allow you to easily type your ",Object(o.b)("inlineCode",{parentName:"p"},"context")," object."),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLModules.Context")," is simple and because it's a globally available type, you just use it, there's no need to import it from ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-modules")," package."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const resolvers = {\n  Query: {\n    myQuery(root, args, context: GraphQLModules.Context, info) {\n      // ...\n    },\n  },\n};\n")),Object(o.b)("h2",{id:"shaping-context-type"},"Shaping Context type"),Object(o.b)("p",null,"GraphQL Modules expose a global namespace called ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLModules"),", so there's no need to pass the same signature over and over again as part of generic types of different APIs."),Object(o.b)("p",null,"Context is global and shared across modules and application which means you can define it once and it applies automatically everywhere."),Object(o.b)("p",null,"Use and extend ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLModules.GlobalContext")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"declare global {\n  namespace GraphQLModules {\n    interface GlobalContext {\n      request: any;\n    }\n  }\n}\n")),Object(o.b)("p",null,"Now every piece of GraphQL Modules understands the context and you gain much stronger type-safety. If you are using ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLModules.Context")," in your resolvers, it will get updated automatically."),Object(o.b)("h2",{id:"strict-resolvers-types"},"Strict Resolvers Types"),Object(o.b)("p",null,"If you wish to have even more control over you implementation, you can use GraphQL-Code-Generator to generate resolvers signature types per each module you write. This is useful because this way you can find issues during development/build time, and get complete type-safety and auto-complete in your IDE."),Object(o.b)("p",null,"We created a special GraphQL-Code-Generator ",Object(o.b)("inlineCode",{parentName:"p"},"preset")," for that purpose. It generates a complete, unified, type signature for your schema, and sub-files per each module, containing only the GraphQL types declared/extended in your specific module."),Object(o.b)("p",null,"To get started, ",Object(o.b)("a",{parentName:"p",href:"https://graphql-code-generator.com/docs/presets/graphql-modules"},"follow the instructions in ",Object(o.b)("inlineCode",{parentName:"a"},"graphql-code-generator.com")," website"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TIP: To get the most out of your GraphQL-Code-Generator integration, please ",Object(o.b)("a",{parentName:"p",href:"https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen"},"refer to this blog post"),". You can use your own model types, automatically type ",Object(o.b)("inlineCode",{parentName:"p"},"parent")," value of your resolvers, have a fine-grain control of the output and much more!")))}c.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,b=u["".concat(i,".").concat(y)]||u[y]||d[y]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);