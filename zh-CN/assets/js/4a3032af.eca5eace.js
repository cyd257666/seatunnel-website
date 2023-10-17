"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[46838],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),h=l,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||r;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85106:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return h}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),o=["components"],i={},u="Deploy",s={unversionedId:"deploy",id:"version-1.0.0/deploy",title:"Deploy",description:"1 Preparing the Apache SeaTunnel environment",source:"@site/seatunnel_web_versioned_docs/version-1.0.0/deploy.md",sourceDirName:".",slug:"/deploy",permalink:"/zh-CN/seatunnel_web/1.0.0/deploy",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/seatunnel_web_versioned_docs/version-1.0.0/deploy.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"docs",previous:{title:"About SeaTunnel Web",permalink:"/zh-CN/seatunnel_web/1.0.0/about"},next:{title:"Define And Run SeaTunnel Job",permalink:"/zh-CN/seatunnel_web/1.0.0/how_to_use"}},p={},c=[{value:"1 Preparing the Apache SeaTunnel environment",id:"1-preparing-the-apache-seatunnel-environment",level:3},{value:"2 Run SeaTunnel Web In Server",id:"2-run-seatunnel-web-in-server",level:3},{value:"2.1 Deploy SeaTunnel Zeta Engine Server In Server Node",id:"21-deploy-seatunnel-zeta-engine-server-in-server-node",level:4},{value:"2.1.1 Build from source code",id:"211-build-from-source-code",level:5},{value:"2.1.2 Download installer package",id:"212-download-installer-package",level:5},{value:"2.1.3 Deploy SeaTunnel Zeta Server",id:"213-deploy-seatunnel-zeta-server",level:5},{value:"2.1.4 Deploy SeaTunnel Zeta Client In SeaTunnel Web Run Node",id:"214-deploy-seatunnel-zeta-client-in-seatunnel-web-run-node",level:5},{value:"2.2 Download and Install SeaTunnel Web",id:"22-download-and-install-seatunnel-web",level:4},{value:"2.3 Init database",id:"23-init-database",level:4},{value:"2.4 Config application and Run SeaTunnel Web Backend Server",id:"24-config-application-and-run-seatunnel-web-backend-server",level:4},{value:"2.5 Start SeaTunnel Web",id:"25-start-seatunnel-web",level:4}],d={toc:c};function h(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy"},"Deploy"),(0,r.kt)("h3",{id:"1-preparing-the-apache-seatunnel-environment"},"1 Preparing the Apache SeaTunnel environment"),(0,r.kt)("p",null,"Because SeaTunnel Web uses the SeaTunnel Java Client to submit jobs, running SeaTunnel Web requires preparing a SeaTunnel Zeta Engine service first."),(0,r.kt)("p",null,"Based on the usage requirements of SeaTunnel Zeta Engine, the SeaTunnel Client node that submits the job must have the same operating system and installation directory structure as the SeaTunnel Server node that runs the job. Therefore, if you want to run SeaTunnel Web in IDEA, you must install and run a SeaTunnel Zeta Engine Server on the same machine as the IDEA."),(0,r.kt)("p",null,"Don't worry, the next steps will tell you how to correctly install SeaTunnel Zeta Engine Server in different situations."),(0,r.kt)("h3",{id:"2-run-seatunnel-web-in-server"},"2 Run SeaTunnel Web In Server"),(0,r.kt)("p",null,"To run SeaTunnel Web on the server, you need to first have a SeaTunnel Zeta Engine Server environment. If you do not already have one, you can refer to the following steps for deployment."),(0,r.kt)("h4",{id:"21-deploy-seatunnel-zeta-engine-server-in-server-node"},"2.1 Deploy SeaTunnel Zeta Engine Server In Server Node"),(0,r.kt)("p",null,"You have two ways to get the SeaTunnel installer package. Build from source code or download from the SeaTunnel website."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The SeaTunnel version used here is only for writing this document to show you the process used, and does not necessarily represent the correct version. SeaTunnel Web and SeaTunnel Engine have strict version dependencies, and you can confirm the specific version mapping through xxx")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Support SeaTunnel Version")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SeaTunnel 2.3.3 Only")),(0,r.kt)("h5",{id:"211-build-from-source-code"},"2.1.1 Build from source code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the source package from ",(0,r.kt)("a",{parentName:"li",href:"https://seatunnel.apache.org/download"},"https://seatunnel.apache.org/download")," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel.git"},"https://github.com/apache/seatunnel.git")),(0,r.kt)("li",{parentName:"ul"},"Build installer package use maven command ",(0,r.kt)("inlineCode",{parentName:"li"},'./mvnw -U -T 1C clean install -DskipTests -D"maven.test.skip"=true -D"maven.javadoc.skip"=true -D"checkstyle.skip"=true -D"license.skipAddThirdParty" ')),(0,r.kt)("li",{parentName:"ul"},"Then you can get the installer package in ",(0,r.kt)("inlineCode",{parentName:"li"},"${Your_code_dir}/seatunnel-dist/target"),", For example:",(0,r.kt)("inlineCode",{parentName:"li"},"apache-seatunnel-2.3.3-SNAPSHOT-bin.tar.gz"))),(0,r.kt)("h5",{id:"212-download-installer-package"},"2.1.2 Download installer package"),(0,r.kt)("p",null,"The other way to get SeaTunnel Zeta Engine Server installer package is download the installer package from ",(0,r.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/download"},"https://seatunnel.apache.org/download")," and install plugins online."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download and install connector plugin(Some third-party dependency packages will also be automatically downloaded and installed during this process, such as hadoop jar). You can get the step from ",(0,r.kt)("a",{parentName:"li",href:"https://seatunnel.apache.org/docs/2.3.3/start-v2/locally/deployment"},"https://seatunnel.apache.org/docs/2.3.3/start-v2/locally/deployment"),"."),(0,r.kt)("li",{parentName:"ul"},"After completing the previous step, you will receive an installation package that can be used to install SeaTunnel Zeta Engine Server on the server. Run ",(0,r.kt)("inlineCode",{parentName:"li"},"tar -zcvf apache-seatunnel-2.3.3-SNAPSHOT-bin.tar.gz apache-seatunnel-2.3.3-SNAPSHOT"))),(0,r.kt)("h5",{id:"213-deploy-seatunnel-zeta-server"},"2.1.3 Deploy SeaTunnel Zeta Server"),(0,r.kt)("p",null,"After 3.1.1 or 3.1.2 you can get an installer package ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-seatunnel-2.3.3-SNAPSHOT-bin.tar.gz"),", Then you can copy it to you server node and deploy reference ",(0,r.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/seatunnel-engine/deployment"},"https://seatunnel.apache.org/docs/seatunnel-engine/deployment"),"."),(0,r.kt)("h5",{id:"214-deploy-seatunnel-zeta-client-in-seatunnel-web-run-node"},"2.1.4 Deploy SeaTunnel Zeta Client In SeaTunnel Web Run Node"),(0,r.kt)("p",null,"If you use SeaTunnel Web, you need deploy a SeaTunnel Zeta Client in the SeaTunnel Web run Node. ",(0,r.kt)("strong",{parentName:"p"},"If you run SeaTunnel Zeta Server and SeaTunnel Web in same node, you can skip this step"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"apache-seatunnel-2.3.3-SNAPSHOT-bin.tar.gz")," to the SeaTunnel Web node and unzip it ",(0,r.kt)("strong",{parentName:"li"},"in the same path of SeaTunnel Zeta Server node"),"."),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"SEATUNNEL_HOME")," to environment variable like SeaTunnel Zeta Server node."),(0,r.kt)("li",{parentName:"ul"},"Config ",(0,r.kt)("inlineCode",{parentName:"li"},"hazelcast-client.yaml")," reference ",(0,r.kt)("a",{parentName:"li",href:"https://seatunnel.apache.org/docs/seatunnel-engine/deployment#6-config-seatunnel-engine-client"},"https://seatunnel.apache.org/docs/seatunnel-engine/deployment#6-config-seatunnel-engine-client")),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"$SEATUNNEL_HOME/bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template"),", If this job run finished, it indicates successful client deployment.")),(0,r.kt)("h4",{id:"22-download-and-install-seatunnel-web"},"2.2 Download and Install SeaTunnel Web"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download seatunnel web from ",(0,r.kt)("a",{parentName:"li",href:"https://seatunnel.apache.org/download"},"https://seatunnel.apache.org/download")),(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"apache-seatunnel-web-bin-${project.version}.tar.gz")," to your server node and unzip it.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tar -zxvf apache-seatunnel-web-bin-${project.version}.tar.gz\n")),(0,r.kt)("h4",{id:"23-init-database"},"2.3 Init database"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-seatunnel-web-bin-${project.version}/script/seatunnel_server_env.sh")," file, Complete the installed database address, port, username, and password. Here is an example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'export HOSTNAME="localhost"\nexport PORT="3306"\nexport USERNAME="root"\nexport PASSWORD="123456"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run init shell ",(0,r.kt)("inlineCode",{parentName:"p"},"sh apache-seatunnel-web-bin-${project.version}/script/init_sql.sh")," If there are no errors during operation, it indicates successful initialization."))),(0,r.kt)("h4",{id:"24-config-application-and-run-seatunnel-web-backend-server"},"2.4 Config application and Run SeaTunnel Web Backend Server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit ",(0,r.kt)("inlineCode",{parentName:"li"},"apache-seatunnel-web-bin-${project.version}/conf/application.yml")," Fill in the database connection information in the file."),(0,r.kt)("li",{parentName:"ul"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"$SEATUNNEL_HOME/config/hazelcast-client.yaml")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"apache-seatunnel-web-bin-${project.version}/conf/")),(0,r.kt)("li",{parentName:"ul"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"apache-seatunnel-2.3.3-SNAPSHOT/connectors/plugin-mapping.properties")," file to ",(0,r.kt)("inlineCode",{parentName:"li"},"apache-seatunnel-web-bin-${project.version}/conf/")," dir.")),(0,r.kt)("h4",{id:"25-start-seatunnel-web"},"2.5 Start SeaTunnel Web"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd apache-seatunnel-web-${project.version}\nsh bin/seatunnel-backend-daemon.sh start\n")),(0,r.kt)("p",null,"Accessing in a browser ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8801/ui/"},"http://127.0.0.1:8801/ui/")," Okay, the default username and password are admin/admin."))}h.isMDXComponent=!0}}]);