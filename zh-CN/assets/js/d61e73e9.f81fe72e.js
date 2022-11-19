"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1051],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20444:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},c="JDBC",p={unversionedId:"connector-v2/source/Jdbc",id:"connector-v2/source/Jdbc",title:"JDBC",description:"JDBC source connector",source:"@site/docs/connector-v2/source/Jdbc.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Jdbc",permalink:"/zh-CN/docs/connector-v2/source/Jdbc",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Jdbc.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IoTDB",permalink:"/zh-CN/docs/connector-v2/source/IoTDB"},next:{title:"Klaviyo",permalink:"/zh-CN/docs/connector-v2/source/Klaviyo"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"query string",id:"query-string",level:3},{value:"connection_check_timeout_sec int",id:"connection_check_timeout_sec-int",level:3},{value:"partition_column string",id:"partition_column-string",level:3},{value:"partition_upper_bound long",id:"partition_upper_bound-long",level:3},{value:"partition_lower_bound long",id:"partition_lower_bound-long",level:3},{value:"partition_num int",id:"partition_num-int",level:3},{value:"common options",id:"common-options",level:3},{value:"tips",id:"tips",level:2},{value:"appendix",id:"appendix",level:2},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"next version",id:"next-version",level:3}],m={toc:s};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jdbc"},"JDBC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JDBC source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read external data source data through JDBC."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection"))),(0,l.kt)("p",null,"supports query SQL and can achieve projection effect."),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_column"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_num"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"job parallelism")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"driver-string"},"driver ","[string]"),(0,l.kt)("p",null,"The jdbc class name used to connect to the remote data source, if you use MySQL the value is com.mysql.cj.jdbc.Driver.\nWarn: for license compliance, you have to provide MySQL JDBC driver yourself, e.g. copy mysql-connector-java-xxx.jar to\n$SEATNUNNEL_HOME/lib for Standalone."),(0,l.kt)("h3",{id:"user-string"},"user ","[string]"),(0,l.kt)("p",null,"userName"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"password"),(0,l.kt)("h3",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"The URL of the JDBC connection. Refer to a case: jdbc:postgresql://localhost/test"),(0,l.kt)("h3",{id:"query-string"},"query ","[string]"),(0,l.kt)("p",null,"Query statement"),(0,l.kt)("h3",{id:"connection_check_timeout_sec-int"},"connection_check_timeout_sec ","[int]"),(0,l.kt)("p",null,"The time in seconds to wait for the database operation used to validate the connection to complete."),(0,l.kt)("h3",{id:"partition_column-string"},"partition_column ","[string]"),(0,l.kt)("p",null,"The column name for parallelism's partition, only support numeric type."),(0,l.kt)("h3",{id:"partition_upper_bound-long"},"partition_upper_bound ","[long]"),(0,l.kt)("p",null,"The partition_column max value for scan, if not set SeaTunnel will query database get max value."),(0,l.kt)("h3",{id:"partition_lower_bound-long"},"partition_lower_bound ","[long]"),(0,l.kt)("p",null,"The partition_column min value for scan, if not set SeaTunnel will query database get min value."),(0,l.kt)("h3",{id:"partition_num-int"},"partition_num ","[int]"),(0,l.kt)("p",null,"The number of partition count, only support positive integer. default value is job parallelism"),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,l.kt)("h2",{id:"tips"},"tips"),(0,l.kt)("p",null,"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed\nin parallel according to the concurrency of tasks."),(0,l.kt)("h2",{id:"appendix"},"appendix"),(0,l.kt)("p",null,"there are some reference value for params above."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"driver"),(0,l.kt)("th",{parentName:"tr",align:null},"url"),(0,l.kt)("th",{parentName:"tr",align:null},"maven"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"postgresql"),(0,l.kt)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/postgres"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"https://mvnrepository.com/artifact/org.postgresql/postgresql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dm"),(0,l.kt)("td",{parentName:"tr",align:null},"dm.jdbc.driver.DmDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:dm://localhost:5236"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"},"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phoenix"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.phoenix.queryserver.client.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:phoenix:thin:url=http://localhost:8765;serialization=PROTOBUF"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"},"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sqlserver"),(0,l.kt)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver.jdbc.SQLServerDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:sqlserver://localhost:1433"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oracle"),(0,l.kt)("td",{parentName:"tr",align:null},"oracle.jdbc.OracleDriver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:oracle:thin:@localhost:1521/xepdb1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"},"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gbase8a"),(0,l.kt)("td",{parentName:"tr",align:null},"com.gbase.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:gbase://e2e_gbase8aDb:5258/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.gbase8.cn/wp-content/uploads/2020/10/gbase-connector-java-8.3.81.53-build55.5.7-bin_min_mix.jar"},"https://www.gbase8.cn/wp-content/uploads/2020/10/gbase-connector-java-8.3.81.53-build55.5.7-bin_min_mix.jar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"starrocks"),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db2"),(0,l.kt)("td",{parentName:"tr",align:null},"com.ibm.db2.jcc.DB2Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:db2://localhost:50000/testdb"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc/db2jcc4"},"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc/db2jcc4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tablestore"),(0,l.kt)("td",{parentName:"tr",align:null},"com.alicloud.openservices.tablestore.jdbc.OTSDriver"),(0,l.kt)("td",{parentName:"tr",align:null},'"jdbc:ots:http s://myinstance.cn-hangzhou.ots.aliyuncs.com/myinstance"'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.aliyun.openservices/tablestore-jdbc"},"https://mvnrepository.com/artifact/com.aliyun.openservices/tablestore-jdbc"))))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"simple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'    Jdbc {\n        url = "jdbc:mysql://localhost/test?serverTimezone=GMT%2b8"\n        driver = "com.mysql.cj.jdbc.Driver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        query = "select * from type_bin"\n    }\n')),(0,l.kt)("p",null,"parallel:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'    Jdbc {\n        url = "jdbc:mysql://localhost/test?serverTimezone=GMT%2b8"\n        driver = "com.mysql.cj.jdbc.Driver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        query = "select * from type_bin"\n        partition_column = "id"\n        partition_num = 10\n    }\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add ClickHouse Source Connector")),(0,l.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Phoenix JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2499"},"2499"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support SQL Server JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2646"},"2646"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Oracle JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2550"},"2550"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support StarRocks JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3060"},"3060"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support GBase8a JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3026"},"3026"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support DB2 JDBC Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2410"},"2410"),")")),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[BugFix]"," Fix jdbc split bug (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3220"},"3220"),")"),(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support Tablestore Source (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3309"},"3309"),")")))}d.isMDXComponent=!0}}]);