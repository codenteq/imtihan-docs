(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{285:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("h2",{attrs:{id:"back-end-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#back-end-install"}},[a._v("#")]),a._v(" Back-End Install")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" create-project codenteq/imtihan\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" backend "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" .env.example .env\n")])])]),s("blockquote",[s("p",[s("strong",[a._v("WARNING")])]),a._v(" "),s("p",[a._v("It will check existence of the .env file, if it exists then please update the file manually with the below details.")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_CONNECTION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mysql\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_DATABASE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("imtihan\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_USERNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n")])])]),s("blockquote",[s("p",[s("strong",[a._v("WARNING")])]),a._v(" "),s("p",[a._v("If the .env file does not exists then it will ask to provide the details on command prompts.")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan migrate "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--seed")]),a._v("\n")])])]),s("h3",{attrs:{id:"start-using-imtihan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-using-imtihan"}},[a._v("#")]),a._v(" Start Using Imtihan")]),a._v(" "),s("h3",{attrs:{id:"on-a-production-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-a-production-server"}},[a._v("#")]),a._v(" On a production server")]),a._v(" "),s("ul",[s("li",[a._v("Open your domain on the browser. "),s("br"),a._v(" For example:")]),a._v(" "),s("li",[s("code",[a._v("http://example.com")])])]),a._v(" "),s("h3",{attrs:{id:"on-your-local-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-your-local-device"}},[a._v("#")]),a._v(" On your local device")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan serve or sail up\n")])])]),s("h3",{attrs:{id:"how-to-log-in-to-your-domain-as-an-portal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-log-in-to-your-domain-as-an-portal"}},[a._v("#")]),a._v(" How to log in to your domain as an portal")]),a._v(" "),s("p",[a._v("Go to "),s("code",[a._v("https://localhost:8000")])]),a._v(" "),s("h2",{attrs:{id:"front-end-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#front-end-install"}},[a._v("#")]),a._v(" Front-End Install")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" create-project codenteq/imtihan\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" frontend "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" dev\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" .env.example .env\n")])])]),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("WARNING")])]),a._v(" "),s("p",[a._v("If the .env file does not exists then it will ask to provide the details on command prompts.")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NEXT_PUBLIC_BACKEND_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://localhost:8000\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NEXT_PUBLIC_IMAGE_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://localhost:9000\n")])])]),s("h3",{attrs:{id:"start-using-imtihan-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-using-imtihan-2"}},[a._v("#")]),a._v(" Start Using Imtihan")]),a._v(" "),s("h3",{attrs:{id:"on-a-production-server-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-a-production-server-2"}},[a._v("#")]),a._v(" On a production server")]),a._v(" "),s("ul",[s("li",[a._v("Open your domain on the browser. "),s("br"),a._v(" For example:")]),a._v(" "),s("li",[s("code",[a._v("http://example.com")])]),a._v(" "),s("li",[s("code",[a._v("http://example.com/login")])])]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("WARNING")])]),a._v(" "),s("p",[a._v("If you used the "),s("code",[a._v("--seed")]),a._v(" command in the back-end, you've created an automatic user! The user's password is set to "),s("code",[a._v("password")]),a._v("!")])])])}),[],!1,null,null,null);s.default=r.exports}}]);