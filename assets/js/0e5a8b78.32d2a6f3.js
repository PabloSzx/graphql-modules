(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return p})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return d}));var a=n(3),t=n(9),o=(n(0),n(170)),l={id:"file-uploads",title:"File Uploads",sidebar_label:"File Uploads using GraphQL Upload"},p={unversionedId:"recipes/file-uploads",id:"version-legacy/recipes/file-uploads",isDocsHomePage:!1,title:"File Uploads",description:"You can transfer files between the client and the server using GraphQL. It is really simple as in REST.",source:"@site/versioned_docs/version-legacy/recipes/file-uploads.md",slug:"/recipes/file-uploads",permalink:"/docs/legacy/recipes/file-uploads",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/file-uploads.md",version:"legacy",sidebar_label:"File Uploads using GraphQL Upload",sidebar:"version-legacy/docs",previous:{title:"Solve N+1 Using DataLoader",permalink:"/docs/legacy/recipes/data-loader"},next:{title:"Database Connection Pooling",permalink:"/docs/legacy/recipes/db-connection-pooling"}},i=[{value:"Adding the upload feature to our GraphQL server",id:"adding-the-upload-feature-to-our-graphql-server",children:[{value:"Adding the GraphQL upload middleware to GraphQL Express",id:"adding-the-graphql-upload-middleware-to-graphql-express",children:[]},{value:"Enabling uploads in Apollo-Server",id:"enabling-uploads-in-apollo-server",children:[]}]},{value:"Adding <code>Upload</code> scalar into the schema",id:"adding-upload-scalar-into-the-schema",children:[]},{value:"Using it on other modules",id:"using-it-on-other-modules",children:[]}],s={toc:i};function d(e){var r=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can transfer files between the client and the server using GraphQL. It is really simple as in REST.\nIf you're using ",Object(o.b)("inlineCode",{parentName:"p"},"express-graphql")," as your GraphQL Server, you should install the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/jaydenseric/graphql-upload"},"graphql-upload"))," package and add some code."),Object(o.b)("h2",{id:"adding-the-upload-feature-to-our-graphql-server"},"Adding the upload feature to our GraphQL server"),Object(o.b)("p",null,"You should extend your existing server to handle file uploads.\nCheck the following recipes for GraphQL Express and Apollo Server."),Object(o.b)("h3",{id:"adding-the-graphql-upload-middleware-to-graphql-express"},"Adding the GraphQL upload middleware to GraphQL Express"),Object(o.b)("p",null,"Let's assume we have something like the following at the beginning.\nAs you can seem we add the ",Object(o.b)("inlineCode",{parentName:"p"},"graphqlUploadExpress")," middleware into ",Object(o.b)("inlineCode",{parentName:"p"},"/graphql")," route to handle file uploads and pass data through the resolvers."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\nimport * as express from 'express';\nimport * as graphqlHTTP from 'express-graphql';\n\nconst { schema } = new GraphQLModule({\n  /*...*/\n});\n\nconst app = express();\n\napp.use(\n  '/graphql',\n  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),\n  graphqlHTTP({ schema, graphiql: true })\n);\n\napp.listen(4000);\n")),Object(o.b)("h3",{id:"enabling-uploads-in-apollo-server"},"Enabling uploads in Apollo-Server"),Object(o.b)("p",null,"If you are using apollo-server, you don't have to add the express middleware.\nYou just need to add the ",Object(o.b)("inlineCode",{parentName:"p"},"uploads")," field to your Apollo Server configuration:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\nimport { ApolloServer } from 'apollo-server';\n\nconst AppModule = new GraphQLModule({\n  /*...*/\n});\n\nconst server = new ApolloServer({\n  modules: [AppModule],\n  context: (session) => session,\n  uploads: {\n    maxFileSize: 10000000, // 10 MB\n    maxFiles: 20,\n  },\n});\n\nserver.listen().then(({ url }) => {\n  console.log(`\ud83d\ude80  Server ready at ${url}`);\n});\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can read more about upload options in ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/jaydenseric/graphql-upload#type-uploadoptions"},"graphql-upload"))," docs.")),Object(o.b)("h2",{id:"adding-upload-scalar-into-the-schema"},"Adding ",Object(o.b)("inlineCode",{parentName:"h2"},"Upload")," scalar into the schema"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/jaydenseric/graphql-upload"},"graphql-upload"))," provides you the necessary scalar implementation, so you should simply put it inside your resolvers."),Object(o.b)("p",null,"In the example, we create a new module called ",Object(o.b)("inlineCode",{parentName:"p"},"UploadModule")," and put everything related to file uploads in it."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"upload.module.ts")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\nimport gql from 'graphql-tag';\nimport { GraphQLUpload } from 'graphql-upload';\n\nexport const UploadModule = new GraphQLModule({\n  typeDefs: gql`\n    scalar Upload\n  `,\n  resolvers: {\n    Upload: GraphQLUpload,\n  },\n});\n")),Object(o.b)("h2",{id:"using-it-on-other-modules"},"Using it on other modules"),Object(o.b)("p",null,"Let's assume we have ",Object(o.b)("inlineCode",{parentName:"p"},"ImageModule")," and we want to add a mutation to it for uploading an image to our server:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\nimport gql from 'graphql-tag';\nimport { UploadModule } from '../upload.module';\n\nexport const ImageModule = new GraphQLModule({\n  imports: [\n    // We should import UploadModule for file-upload-related schema elements\n    UploadModule,\n    // some other imports\n  ],\n  typeDefs: gql`\n    type Image {\n      id: ID\n      name: String\n      url: String\n    }\n    type Mutation {\n      uploadImage(name: String!, file: Upload!): Boolean\n    }\n  `,\n  resolvers: {\n    Mutation: {\n      uploadImage: async (root, { name, file }) => {\n        const { filename, mimetype, createReadStream } = await file;\n        const stream = createReadStream();\n        // Promisify the stream and store the file, then ...\n        return true;\n      },\n    },\n  },\n});\n")))}d.isMDXComponent=!0},170:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return h}));var a=n(0),t=n.n(a);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=t.a.createContext({}),d=function(e){var r=t.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},u=function(e){var r=d(e.components);return t.a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},m=t.a.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?t.a.createElement(h,p(p({ref:r},s),{},{components:n})):t.a.createElement(h,p({ref:r},s))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return t.a.createElement.apply(null,l)}return t.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);