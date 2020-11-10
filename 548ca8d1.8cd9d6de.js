(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return p}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=b(a),u=i,p=h["".concat(r,".").concat(u)]||h[u]||m[u]||o;return a?n.a.createElement(p,l(l({ref:t},s),{},{components:a})):n.a.createElement(p,l({ref:t},s))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},406:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a(2),n=a(7),o=(a(0),a(1006)),r={title:"React Native Monthly #1",author:"Tomislav Tenodi",authorTitle:"Product Manager at Shoutem",authorURL:"https://github.com/tenodi",authorImageURL:"https://pbs.twimg.com/profile_images/877237660225609729/bKFDwfAq.jpg",authorTwitter:"TomislavTenodi",tags:["engineering"]},l={permalink:"/blog/2017/06/21/react-native-monthly-1",source:"@site/blog/2017-06-21-react-native-monthly-1.md",description:"At Shoutem, we've been fortunate enough to work with React Native from its very beginnings. We decided we wanted to be part of the amazing community from day one. Soon enough, we realized it's almost impossible to keep up with the pace the community was growing and improving. That's why we decided to organize a monthly meeting where all major React Native contributors can briefly present what their efforts and plans are.",date:"2017-06-21T00:00:00.000Z",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"React Native Monthly #1",readingTime:5.215,truncated:!1,prevItem:{title:"React Native Monthly #2",permalink:"/blog/2017/07/28/react-native-monthly-2"},nextItem:{title:"Better List Views in React Native",permalink:"/blog/2017/03/13/better-list-views"}},c=[{value:"Monthly meetings",id:"monthly-meetings",children:[]},{value:"Teams",id:"teams",children:[]},{value:"Notes",id:"notes",children:[{value:"Airbnb",id:"airbnb",children:[]},{value:"Callstack",id:"callstack",children:[]},{value:"Expo",id:"expo",children:[]},{value:"Facebook",id:"facebook",children:[]},{value:"GeekyAnts",id:"geekyants",children:[]},{value:"Microsoft",id:"microsoft",children:[]},{value:"Shoutem",id:"shoutem",children:[]},{value:"Wix",id:"wix",children:[]}]},{value:"Next session",id:"next-session",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://shoutem.github.io/"}),"Shoutem"),", we've been fortunate enough to work with React Native from its very beginnings. We decided we wanted to be part of the amazing community from day one. Soon enough, we realized it's almost impossible to keep up with the pace the community was growing and improving. That's why we decided to organize a monthly meeting where all major React Native contributors can briefly present what their efforts and plans are."),Object(o.b)("h2",{id:"monthly-meetings"},"Monthly meetings"),Object(o.b)("p",null,"We had our first session of the monthly meeting on June 14, 2017. The mission for React Native Monthly is simple and straightforward: ",Object(o.b)("strong",{parentName:"p"},"improve the React Native community"),". Presenting teams' efforts eases collaboration between teams done offline."),Object(o.b)("h2",{id:"teams"},"Teams"),Object(o.b)("p",null,"On the first meeting, we had 8 teams join us:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/airbnb"}),"Airbnb")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/callstack-io"}),"Callstack")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/expo"}),"Expo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/facebook"}),"Facebook")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/GeekyAnts"}),"GeekyAnts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/microsoft"}),"Microsoft")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/shoutem"}),"Shoutem")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/wix"}),"Wix"))),Object(o.b)("p",null,"We hope to have more core contributors join the upcoming sessions!"),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"As teams' plans might be of interest to a broader audience, we'll be sharing them here, on the React Native blog. So, here they are:"),Object(o.b)("h3",{id:"airbnb"},"Airbnb"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Plans to add some A11y (accessibility) APIs to ",Object(o.b)("inlineCode",{parentName:"li"},"View")," and the ",Object(o.b)("inlineCode",{parentName:"li"},"AccessibilityInfo")," native module."),Object(o.b)("li",{parentName:"ul"},"Will be investigating adding some APIs to native modules on Android to allow for specifying threads for them to run on."),Object(o.b)("li",{parentName:"ul"},"Have been investigating potential initialization performance improvements."),Object(o.b)("li",{parentName:"ul"},'Have been investigating some more sophisticated bundling strategies to use on top of "unbundle".')),Object(o.b)("h3",{id:"callstack"},"Callstack"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Looking into improving the release process by using ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/wix/detox"}),"Detox")," for E2E testing. Pull request should land soon."),Object(o.b)("li",{parentName:"ul"},"Blob pull request they have been working on has been merged, subsequent pull requests coming up."),Object(o.b)("li",{parentName:"ul"},"Increasing ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/callstack-io/haul"}),"Haul")," adoption across internal projects to see how it performs compared to ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"http://github.com/facebook/metro-bundler"}),"Metro Bundler"),". Working on better multi-threaded performance with the Webpack team."),Object(o.b)("li",{parentName:"ul"},"Internally, they have implemented a better infrastructure to manage open source projects. Plans to be getting more stuff out in upcoming weeks."),Object(o.b)("li",{parentName:"ul"},"The React Native Europe conference is coming along, nothing interesting yet, but y'all invited!"),Object(o.b)("li",{parentName:"ul"},"Stepped back from ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-community/react-navigation"}),"react-navigation")," for a while to investigate alternatives (especially native navigations).")),Object(o.b)("h3",{id:"expo"},"Expo"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Working on making it possible to install npm modules in ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://snack.expo.io/"}),"Snack"),", will be useful for libraries to add examples to documentation."),Object(o.b)("li",{parentName:"ul"},"Working with ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/kmagiera"}),"Krzysztof")," and other people at ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/software-mansion"}),"Software Mansion")," on a JSC update on Android and a gesture handling library."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/skevy"}),"Adam Miskiewicz")," is transitioning his focus towards ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-community/react-navigation"}),"react-navigation"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-community/create-react-native-app"}),"Create React Native App")," is in the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/getting-started"}),"Getting Started guide")," in the docs. Expo wants to encourage library authors to explain clearly whether their lib works with CRNA or not, and if so, explain how to set it up.")),Object(o.b)("h3",{id:"facebook"},"Facebook"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"React Native's packager is now ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/facebook/metro"}),"Metro Bundler"),", in an independent repo. The Metro Bundler team in London is excited to address the needs of the community, improve modularity for additional use-cases beyond React Native, and increase responsiveness on issues and PRs."),Object(o.b)("li",{parentName:"ul"},"In the coming months, the React Native team will work on refining the APIs of primitive components. Expect improvements in layout quirks, accessibility, and flow typing."),Object(o.b)("li",{parentName:"ul"},"The React Native team also plans on improving core modularity this year, by refactoring to fully support 3rd party platforms such as Windows and macOS.")),Object(o.b)("h3",{id:"geekyants"},"GeekyAnts"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The team is working on a UI/UX design app (codename: Builder) which directly works with ",Object(o.b)("inlineCode",{parentName:"li"},".js")," files. Right now, it supports only React Native. It\u2019s similar to Adobe XD and Sketch."),Object(o.b)("li",{parentName:"ul"},"The team is working hard so that you can load up an existing React Native app in the editor, make changes (visually, as a designer) and save the changes directly to the JS file."),Object(o.b)("li",{parentName:"ul"},"Folks are trying to bridge the gap between Designers and Developers and bring them on the same repo."),Object(o.b)("li",{parentName:"ul"},"Also, ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/GeekyAnts/NativeBase"}),"NativeBase")," recently reached 5,000 GitHub stars.")),Object(o.b)("h3",{id:"microsoft"},"Microsoft"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/Microsoft/code-push"}),"CodePush")," has now been integrated into ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://mobile.azure.com/"}),"Mobile Center"),". This is the first step in providing a much more integrated experience with distribution, analytics and other services. See their announcement ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://microsoft.github.io/code-push/articles/CodePushOnMobileCenter.html"}),"here"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/Microsoft/vscode"}),"VSCode")," has a bug with debugging, they are working on fixing that right now and will have a new build."),Object(o.b)("li",{parentName:"ul"},"Investigating ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/wix/detox"}),"Detox")," for Integration testing, looking at JSC Context to get variables alongside crash reports.")),Object(o.b)("h3",{id:"shoutem"},"Shoutem"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Making it easier to work on Shoutem apps with tools from the React Native community. You will be able to use all the React Native commands to run the apps created on ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://shoutem.github.io/"}),"Shoutem"),"."),Object(o.b)("li",{parentName:"ul"},"Investigating profiling tools for React Native. They had a lot of problems setting it up and they will write some of the insights they discovered along the way."),Object(o.b)("li",{parentName:"ul"},"Shoutem is working on making it easier to integrate React Native with existing native apps. They will document the concept that they developed internally in the company, in order to get the feedback from the community.")),Object(o.b)("h3",{id:"wix"},"Wix"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Working internally to adopt ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/wix/detox"}),"Detox"),' to move significant parts of the Wix app to "zero manual QA". As a result, Detox is being used heavily in a production setting by dozens of developers and maturing rapidly.'),Object(o.b)("li",{parentName:"ul"},"Working to add support to the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/facebook/metro"}),"Metro Bundler"),' for overriding any file extension during the build. Instead of just "ios" and "android", it would support any custom extension like "e2e" or "detox". Plans to use this for E2E mocking. There\'s already a library out called ',Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/wix/react-native-repackager"}),"react-native-repackager"),", now working on a PR."),Object(o.b)("li",{parentName:"ul"},"Investigating automation of performance tests. This is a new repo called ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/wix/DetoxInstruments"}),"DetoxInstruments"),". You can take a look, it's being developed open source."),Object(o.b)("li",{parentName:"ul"},"Working with a contributor from KPN on Detox for Android and supporting real devices."),Object(o.b)("li",{parentName:"ul"},'Thinking about "Detox as a platform" to allow building other tools that need to automate the simulator/device. An example is ',Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/storybooks/react-native-storybook"}),"Storybook")," for React Native or Ram's idea for integration testing.")),Object(o.b)("h2",{id:"next-session"},"Next session"),Object(o.b)("p",null,"Meetings will be held every four weeks. The next session is scheduled for July 12, 2017. As we just started with this meeting, we'd like to know how do these notes benefit the React Native community. Feel free to ping me ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://twitter.com/TomislavTenodi"}),"on Twitter")," if you have any suggestion on what we should cover in the following sessions, or how we should improve the output of the meeting."))}b.isMDXComponent=!0}}]);