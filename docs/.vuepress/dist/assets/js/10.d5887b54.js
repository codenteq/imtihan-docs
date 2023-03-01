(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{282:function(a,t,e){"use strict";e.r(t);var s=e(14),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[a._v("#")]),a._v(" Database")]),a._v(" "),t("h2",{attrs:{id:"factories-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#factories-introduction"}},[a._v("#")]),a._v(" Factories Introduction")]),a._v(" "),t("p",[a._v("When testing your application or seeding your database, you may need to insert a few records into your database. Instead of manually specifying the value of each column, Laravel allows you to define a set of default attributes for each of your "),t("a",{attrs:{href:"https://laravel.com/docs/9.x/eloquent",target:"_blank",rel:"noopener noreferrer"}},[a._v("Eloquent models"),t("OutboundLink")],1),a._v(" using model factories.")]),a._v(" "),t("p",[a._v("To see an example of how to write a factory, take a look at the database/factories/UserFactory.php file in your application. This factory is included with all new Laravel applications and contains the following factory definition:")]),a._v(" "),t("p",[a._v("namespace Database\\Factories;")]),a._v(" "),t("p",[a._v("use Illuminate\\Database\\Eloquent\\Factories\\Factory;\nuse Illuminate\\Support\\Str;")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("class UserFactory extends Factory\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    /**\n     * Define the model"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s default state.\n     *\n     * @return array\n     */\n    public function definition()\n    {\n        return [\n            '")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("' => fake()->name(),\n            '")]),a._v("email"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("' => fake()->unique()->safeEmail(),\n            '")]),a._v("email_verified_at"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("' => now(),\n            '")]),a._v("password"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("' => '")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$2y")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$10")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$92IXUNpkjO0rOQ5byMi")]),a._v(".Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("', // password\n            '")]),a._v("remember_token' "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Str::random"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(",\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"migrations-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrations-introduction"}},[a._v("#")]),a._v(" Migrations Introduction")]),a._v(" "),t("p",[a._v("Migrations are like version control for your database, allowing your team to define and share the application's database schema definition. If you have ever had to tell a teammate to manually add a column to their local database schema after pulling in your changes from source control, you've faced the problem that database migrations solve.")]),a._v(" "),t("p",[a._v("The Laravel "),t("code",[a._v("Schema")]),a._v(" "),t("a",{attrs:{href:"https://laravel.com/docs/9.x/facades",target:"_blank",rel:"noopener noreferrer"}},[a._v("facade"),t("OutboundLink")],1),a._v(" provides database agnostic support for creating and manipulating tables across all of Laravel's supported database systems. Typically, migrations will use this facade to create and modify database tables and columns.")]),a._v(" "),t("ul",[t("li",[a._v("The "),t("code",[a._v("total_questions")]),a._v(" Shows how many questions there are.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("correct")]),a._v(" Shows how many correct questions there are.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("in_correct")]),a._v(" Shows how many wrong questions there are.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("blank")]),a._v(" Shows how many empty questions there are.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("point")]),a._v(" Shows how many points you got.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("paid_at")]),a._v(" Indicates whether the invoice has been paid.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("parent_id")]),a._v(" Shows infinite category IDs.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("is_option")]),a._v(" When adding a question, it indicates that the question will be a picture or text area.")]),a._v(" "),t("li",[a._v("The "),t("code",[a._v("is_default")]),a._v(" waiting...")])]),a._v(" "),t("h2",{attrs:{id:"schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[a._v("#")]),a._v(" Schema")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://dbdiagram.io/d/632f5e447b3d2034ffa94a7d",target:"_blank",rel:"noopener noreferrer"}},[a._v("Database Schema"),t("OutboundLink")],1),a._v(" by DBdiagram")])])}),[],!1,null,null,null);t.default=n.exports}}]);