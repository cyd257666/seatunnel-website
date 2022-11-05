"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[62301],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return o},assets:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={},c="Elasticsearch",o={unversionedId:"connector-v2/source/Elasticsearch",id:"connector-v2/source/Elasticsearch",title:"Elasticsearch",description:"Elasticsearch source connector",source:"@site/docs/connector-v2/source/Elasticsearch.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Elasticsearch",permalink:"/docs/connector-v2/source/Elasticsearch",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Elasticsearch.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Clickhouse",permalink:"/docs/connector-v2/source/Clickhouse"},next:{title:"FakeSource",permalink:"/docs/connector-v2/source/FakeSource"}},u={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"hosts array",id:"hosts-array",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"index string",id:"index-string",level:3},{value:"source array",id:"source-array",level:3},{value:"scroll_time String",id:"scroll_time-string",level:3},{value:"scroll_size int",id:"scroll_size-int",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Elasticsearch source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to read data from Elasticsearch."),(0,l.kt)("p",null,"support version >= 2.x and < 8.x."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hosts"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scroll_time"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scroll_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"100")))),(0,l.kt)("h3",{id:"hosts-array"},"hosts ","[array]"),(0,l.kt)("p",null,"Elasticsearch cluster http address, the format is ",(0,l.kt)("inlineCode",{parentName:"p"},"host:port"),", allowing multiple hosts to be specified. Such as ",(0,l.kt)("inlineCode",{parentName:"p"},'["host1:9200", "host2:9200"]'),"."),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,"x-pack username."),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"x-pack password."),(0,l.kt)("h3",{id:"index-string"},"index ","[string]"),(0,l.kt)("p",null,"Elasticsearch index name, support * fuzzy matching."),(0,l.kt)("h3",{id:"source-array"},"source ","[array]"),(0,l.kt)("p",null,"The fields of index.\nYou can get the document id by specifying the field ",(0,l.kt)("inlineCode",{parentName:"p"},"_id"),".If sink _id to other index,you need specify an alias for _id due to the Elasticsearch limit."),(0,l.kt)("h3",{id:"scroll_time-string"},"scroll_time ","[String]"),(0,l.kt)("p",null,"Amount of time Elasticsearch will keep the search context alive for scroll requests."),(0,l.kt)("h3",{id:"scroll_size-int"},"scroll_size ","[int]"),(0,l.kt)("p",null,"Maximum number of hits to be returned with each Elasticsearch scroll request."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"simple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'Elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel-*"\n    source = ["_id","name","age"]\n}\n')),(0,l.kt)("p",null,"complex"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'Elasticsearch {\n    hosts = ["elasticsearch:9200"]\n    index = "st_index"\n    schema = {\n        fields {\n            c_map = "map<string, tinyint>"\n            c_array = "array<tinyint>"\n            c_string = string\n            c_boolean = boolean\n            c_tinyint = tinyint\n            c_smallint = smallint\n            c_int = int\n            c_bigint = bigint\n            c_float = float\n            c_double = double\n            c_decimal = "decimal(2, 1)"\n            c_bytes = bytes\n            c_date = date\n            c_timestamp = timestamp\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Elasticsearch Source Connector")))}m.isMDXComponent=!0}}]);