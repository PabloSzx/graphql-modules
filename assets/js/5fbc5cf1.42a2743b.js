(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(9),i=(n(0),n(170)),o={id:"api",title:"API Reference"},l={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"API Reference",description:"CONTEXT",source:"@site/docs/api.md",slug:"/api",permalink:"/docs/api",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/docs/api.md",version:"current",sidebar:"docs",previous:{title:"Migration from v0.X",permalink:"/docs/recipes/migration"}},c=[{value:"CONTEXT",id:"context",children:[]},{value:"MODULE_ID",id:"module_id",children:[]},{value:"Application",id:"application",children:[]},{value:"ApplicationConfig",id:"applicationconfig",children:[]},{value:"createApplication",id:"createapplication",children:[]},{value:"createModule",id:"createmodule",children:[]},{value:"ModuleConfig",id:"moduleconfig",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"context"},"CONTEXT"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-modules/blob/master/packages/graphql-modules/src/application/tokens.ts"},Object(i.b)("em",{parentName:"a"},"source file"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"CONTEXT")," is an InjectionToken representing the provided ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLModules.GlobalContext")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { CONTEXT, Inject, Injectable } from 'graphql-modules';\n\n@Injectable()\nexport class Data {\n  constructor(@Inject(CONTEXT) private context: GraphQLModules.GlobalContext) {}\n}\n")),Object(i.b)("h2",{id:"module_id"},"MODULE_ID"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-modules/blob/master/packages/graphql-modules/src/module/tokens.ts"},Object(i.b)("em",{parentName:"a"},"source file"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MODULE_ID")," is an InjectionToken representing module's ID"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { MODULE_ID, Inject, Injectable } from 'graphql-modules';\n\n@Injectable()\nexport class Data {\n  constructor(@Inject(MODULE_ID) moduleId: string) {\n    console.log(`Data used in ${moduleId} module`)\n  }\n}\n")),Object(i.b)("h2",{id:"application"},"Application"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-modules/blob/master/packages/graphql-modules/src/application/types.ts"},Object(i.b)("em",{parentName:"a"},"source file"))),Object(i.b)("p",null,"A return type of ",Object(i.b)("inlineCode",{parentName:"p"},"createApplication")," function."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"typeDefs")," - A list of type definitions defined by modules."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resolvers")," - An object with resolve functions defined by modules."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"schema")," - Ready to use GraphQLSchema object combined from modules."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"injector")," - The application (Singleton) injector."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createOperationController")," - Take over control of GraphQL Operation"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createSubscription")," - Creates a ",Object(i.b)("inlineCode",{parentName:"li"},"subscribe")," function that runs the subscription phase of GraphQL.\nImportant when using GraphQL Subscriptions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createExecution")," - Creates a ",Object(i.b)("inlineCode",{parentName:"li"},"execute")," function that runs the execution phase of GraphQL.\nImportant when using GraphQL Queries and Mutations."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createSchemaForApollo")," - Experimental"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createApolloExecutor")," - Experimental")),Object(i.b)("h2",{id:"applicationconfig"},"ApplicationConfig"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-modules/blob/master/packages/graphql-modules/src/application/types.ts"},Object(i.b)("em",{parentName:"a"},"source file"))),Object(i.b)("p",null,"Application's configuration object. Represents the first argument of ",Object(i.b)("inlineCode",{parentName:"p"},"createApplication")," function."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"modules")," - A list of GraphQL Modules"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"providers")," - A list of Providers - read the ",Object(i.b)("a",{parentName:"li",href:"./di/providers"},'"Providers and Tokens"')," chapter."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"middlewares")," - A map of middlewares - read the ",Object(i.b)("a",{parentName:"li",href:"./advanced/middlewares"},'"Middlewares"')," chapter."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"schemaBuilder")," - Creates a GraphQLSchema object out of typeDefs and resolvers")),Object(i.b)("h2",{id:"createapplication"},"createApplication"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-modules/blob/master/packages/graphql-modules/src/application/application.ts"},Object(i.b)("em",{parentName:"a"},"source file"))),Object(i.b)("p",null,"Creates Application out of Modules. Accepts ",Object(i.b)("inlineCode",{parentName:"p"},"ApplicationConfig"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { createApplication } from 'graphql-modules';\nimport { usersModule } from './users';\nimport { postsModule } from './posts';\nimport { commentsModule } from './comments';\n\nconst app = createApplication({\n  modules: [\n    usersModule,\n    postsModule,\n    commentsModule\n  ]\n})\n")),Object(i.b)("h2",{id:"createmodule"},"createModule"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-modules/blob/master/packages/graphql-modules/src/module/module.ts"},Object(i.b)("em",{parentName:"a"},"source file"))),Object(i.b)("p",null,"Creates a Module, an element used by Application. Accepts ",Object(i.b)("inlineCode",{parentName:"p"},"ModuleConfig"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { createModule, gql } from 'graphql-modules';\n\nexport const usersModule = createModule({\n  id: 'users',\n  typeDefs: gql`\n    // GraphQL SDL\n  `,\n  resolvers: {\n    // ...\n  }\n});\n")),Object(i.b)("h2",{id:"moduleconfig"},"ModuleConfig"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-modules/blob/master/packages/graphql-modules/src/module/types.ts"},Object(i.b)("em",{parentName:"a"},"source file"))),Object(i.b)("p",null,"Module's configuration object. Represents the first argument of ",Object(i.b)("inlineCode",{parentName:"p"},"createModule")," function."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"id")," - Unique identifier of a module"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dirname")," - Pass ",Object(i.b)("inlineCode",{parentName:"li"},"__dirname")," variable as a value to get better error messages."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"typeDefs")," - An object or a list of GraphQL type definitions (SDL)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resolvers")," - An object or a list of GraphQL resolve functions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"middlewares")," - A map of middlewares - read the ",Object(i.b)("a",{parentName:"li",href:"./advanced/middlewares"},'"Middlewares"')," chapter."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"providers")," - A list of Providers - read the ",Object(i.b)("a",{parentName:"li",href:"./di/providers"},'"Providers and Tokens"')," chapter.")))}b.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,l(l({ref:t},p),{},{components:n})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);