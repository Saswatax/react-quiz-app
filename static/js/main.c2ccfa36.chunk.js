(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){},10:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(1),n(4)),l=n(2),u=n(3);var m=function(e){var t=e.startQuiz,n=e.selectOption;return o.a.createElement("div",{className:"welcome"},o.a.createElement("h3",null,"React Quiz App"),o.a.createElement("p",null,"Setect options and start the quiz"),o.a.createElement("label",null,"Category"),o.a.createElement("select",{name:"category",onChange:n},o.a.createElement("option",{value:"volvo"},"Any Category"),o.a.createElement("option",{value:"9"},"General Knowledge"),o.a.createElement("option",{value:"10"},"Entertainment: Books"),o.a.createElement("option",{value:"11"},"Entertainment: Film"),o.a.createElement("option",{value:"12"},"Entertainment: Music"),o.a.createElement("option",{value:"13"},"Entertainment: Musicals & Theatres"),o.a.createElement("option",{value:"14"},"Entertainment: Television"),o.a.createElement("option",{value:"15"},"Entertainment: Video Games"),o.a.createElement("option",{value:"16"},"Entertainment: Board Games"),o.a.createElement("option",{value:"17"},"Science & Nature"),o.a.createElement("option",{value:"18"},"Science: Computers"),o.a.createElement("option",{value:"19"},"Science: Mathematics"),o.a.createElement("option",{value:"20"},"Mythology"),o.a.createElement("option",{value:"21"},"Sports"),o.a.createElement("option",{value:"22"},"Geography"),o.a.createElement("option",{value:"23"},"History"),o.a.createElement("option",{value:"24"},"Politics"),o.a.createElement("option",{value:"25"},"Art"),o.a.createElement("option",{value:"26"},"Celebrities"),o.a.createElement("option",{value:"27"},"Animals"),o.a.createElement("option",{value:"28"},"Vehicles"),o.a.createElement("option",{value:"29"},"Entertainment: Comics"),o.a.createElement("option",{value:"30"},"Science: Gadgets"),o.a.createElement("option",{value:"31"},"Entertainment: Japanese Anime & Manga"),o.a.createElement("option",{value:"32"},"Entertainment: Cartoon & Animations")),o.a.createElement("label",null,"Difficulty"),o.a.createElement("select",{name:"difficulty",onChange:n},o.a.createElement("option",{value:""},"Any Difficulty"),o.a.createElement("option",{value:"easy"},"Easy"),o.a.createElement("option",{value:"medium"},"Medium"),o.a.createElement("option",{value:"hard"},"Hard")),o.a.createElement("label",null,"Type"),o.a.createElement("select",{name:"type",onChange:n},o.a.createElement("option",{value:""},"Any Type"),o.a.createElement("option",{value:"multiple"},"Multiple Choice"),o.a.createElement("option",{value:"boolean"},"True / False")),o.a.createElement("input",{type:"button",value:"Start quiz",onClick:t}))},s=n(9);var A=function(e){var t=e.question,n=e.options,a=e.selected_answer,r=e.correct_answer,c=e.optionClick,i=e.submitPage,l=n.map(function(e){var t="option-btn ";return i?(t+="no-effect-btn ",r===e?t+="correct-btn":a===e&&(t+="worng-btn")):t+=a===e?"seletected-btn":"hover-btn",o.a.createElement("input",{key:e,className:t,type:"button",value:e,onClick:function(){return!i&&c(e)}})});return o.a.createElement("div",{className:"quiz"},o.a.createElement("p",{className:"question"},t),o.a.createElement("div",{className:"option-group"},l))};var E=function(e){var t=e.category,n=e.difficulty,r=e.type,c=e.startQuiz;function i(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}function m(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}function E(){var e=!0;return f.forEach(function(t){return!t.selected_answer&&(e=!1)}),e}var p=Object(a.useState)([]),v=Object(u.a)(p,2),f=v[0],g=v[1],C=Object(a.useState)(!1),h=Object(u.a)(C,2),w=h[0],B=h[1],F=Object(a.useRef)(!1);Object(a.useEffect)(function(){!F.current&&fetch("https://opentdb.com/api.php?amount=5&category=".concat(t,"&difficulty=").concat(n,"&type=").concat(r)).then(function(e){return e.json()}).then(function(e){return g(function(){return e.results.map(function(e){var t=e.question,n=e.correct_answer,a=e.incorrect_answers;return{question:m(t),options:i([].concat(Object(s.a)(a),[n])).map(function(e){return m(e)}),correct_answer:m(n),selected_answer:null}})})}),F.current=!0},[]);var b=f.map(function(e,t){return o.a.createElement(A,Object.assign({key:e.question},e,{submitPage:w,optionClick:function(e){return function(e,t){g(function(n){return n.map(function(n,a){return a===e?Object(l.a)({},n,{selected_answer:t}):n})})}(t,e)}}))});if(f.length)return o.a.createElement("div",{className:"main"},b,w&&o.a.createElement("h3",{className:"total-txt"},"You scored ",function(){var e=0;return f.forEach(function(t){return t.correct_answer===t.selected_answer&&e++}),e}(),"/5 correct answers"),o.a.createElement("input",{className:"submit-btn "+(E()?"":"disable-btn no-effect-btn"),type:"button",value:w?"Play again":"Check answers",onClick:w?function(){c()}:E()?function(){B(!0)}:function(){}}))},p=n(7),v=n.n(p),f=n(8),g=n.n(f);var C=function(){var e=Object(a.useState)({welcomePage:!0,category:"",difficulty:"",type:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],c=function(){r(function(e){return Object(l.a)({},e,{welcomePage:!e.welcomePage})})};return o.a.createElement("div",{className:"app"},o.a.createElement("img",{className:"top-img",src:v.a,alt:"top"}),o.a.createElement("img",{className:"bottom-img",src:g.a,alt:"bottom"}),n.welcomePage?o.a.createElement(m,{startQuiz:c,selectOption:function(e){r(function(t){return Object(l.a)({},t,Object(i.a)({},e.target.name,e.target.value))})}}):o.a.createElement(E,Object.assign({},n,{startQuiz:c})))};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)))},7:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACNCAYAAABGx8NOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVLSURBVHgB7d3tcdxEGMDxR/LECTP5kA44KoivAkwHUAGhApwKgAoSKsCpgFBB3MHZFeAO4ANMksucNvsokn3ne5e0q335/2YSnDgf+PCfZ7W6tVRIw3yYXUhZvhLAg3LpqysBPCmW/2DmN//Y/zwTwLFy5U+m+ksAD1bDq1hu4cdqeE/krf39XwEcWwmvKKY2OnMtgGPl2t8szBsBHFsPj+UWHqyF92W5rZh6cKrc+LeLeuoBzhTbvmHm1+/st88FcKDc+p3KcDMZzmwP77FcCpsMOLI1vHqTYarfBXCg2PVNY2bP5FP5t3BwAAMrd32TqQdXin3/gKkHF8p9/4CpBxf2TjzF1MPQ9k48VU+9qvpNgIEcNPFaZn6jU28iQE8HTbw7i+onAQZwVHjFV9Mre8HHAQL0dtzEU5V5KXyUhp6ODs9OvVs2GujrqM3FMo5NoY/jl9rWwuhGgyUXnXQOjyUXfXRealssueii+1LbYslFB73Dq5dcw41lHKf/xLOKx1N7U5kTLDhc72u8VnOCZSZ8losDDDLxVH2CZVF9J1zv4QCDhafq671F9VKAPQYNT9n4Lrnewz6DXeM9xP097DL4xLvzyPxgf78VYANn4dWbjXml8bHZwBp3E88qnk6v2WxgE6fhqXqzYThMgFXONhcPmfnste38ZwHEY3iKnS5azpfaFex00fAa3tLHareCrHldalvm/WwiJ/WBAh6JkSm/S22j/kx3zoGCnI0SnuIeX95GC0/V9/gq4svRqOGp4sn0NTeY8zPK5mIT83H2qxTlL4IsBBOeIr58BBWeMh9vLu3/1Y+CpAUXniK+9AUZniK+tI2+q93qtLqwv/O28EQFO/FU87O67+yXZ4KkBB2eIr40BR+eIr70RBGe4hEZaQl3c/EAZ/nSEs3EazVn+XTZnQiiFV14ivjiF2V4ivjiFm14ivjiFXV4ivjiFH14ivjik0R4ivjikkx4ivjikVR4ivjikFx4ivjCl2R4ivjClmx4ivjCFc0hgS6aR2XwONwAJT3xWua/2Zmc1pOPhwQFIovwFPGFJZvwlL3mO2+u+TCypK/xHrLXfFey4BWnIchq4rXs5HthJ98fgtFkNfFavAJhfFlOvBYPCRpP1uEp4htH9uEpntPiH+E1iM+vLDcXG/GQIK+YeEt4VIY/TLwlzdMKeO2VB0y8DThO5R7hbUF8bhHeDrxzzR2u8XbgnWvuMPEOwHGq4THxDsBxquEx8Y7AcarhMPGOwNsmh0N4R+Jtk8Ngqe2I41T9EF4PxNcd4fVEfN0Q3gCI73iENxDiOw7hDYj4Dkd4AyO+wxCeA4b49iI8R4hvN8JzyHyYXUhZvhKsITzHOFiwGeF5wLP51nFIwIPi6fS6Ocl8K6gx8TziB4juEZ5nxPcFS61n9Q8QPaqmYsxbyRgTb0Q53+sjvJHlGh/hBcDG972NT280TyQThBeI3DYdbC4Ccb/pqN5IBph4Acrhuo/wAtV8zPanJLr0stQGqv6YbWE/Zkv0fh8TLwIpLr2EF4nUdr0stZHQXW9x+vybVB6fwcSLUArTj4kXoRSmHxMvcvX0K0U3H1G9lYjwEtH8bIfufCcSAcJLTCwBEl6CmuX3Rcj3/ggvYSFf/xFeBpYmoAY4kQAQXmZCuQYkvEzVL425n4LeEV7m6mVY5FxOChtgcS6eEB7u+IyQ8LBR/bbyuY1QRH8Q6VsZ+JqQ8HCQZmd8Zos5t9k8t7/OpMdDiAgPndXH809sfIUNstSJqEFqjMVE9kRJeHCiXqr/tzFqmKX9ZezXRR2p/br4WoAxfAYjywQ7a5In3wAAAABJRU5ErkJggg=="},8:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAB2CAYAAAAusLpdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAScSURBVHgB7dxdbhtVGIDh7zvjqIlSyHBTqVcZJEDiirAC0hXADugO2h0UVgCsoHQFhRU0XUFyh1QUkgtEEKnUIDXEbuL5OGPjkh/XHs8c2/PzPlIbe+r+qHl1zvE5k6hUyMHRWXIe9WPtR7FGkmTX1CRxLtrwD+LBi8wG1000fnttKPYX44l/gcqJ//lk+OfoiYoNH6seZs/TtP+3qRxa3/+I+ienp+uHn3+oJ4LcVOZsFImzlUQ0ja8E4uPwn8BE8sSwLD5C/2/e849OUkmfpxe697q7ukdo45UKKovlQiTJRhP1gTjpbGahmMnWMJjhKNNI/4WWpvY8TWXn47trO4LxQe0eWLy+fppcGVUit+lHlNhPNUnjYynI/2fu+FHs576lO5/cub0nLaQHL3uPCWUOsrWY6E56nj5p0+ilvx13TTBfPi4191P3ov/Dp3fXDqXBCGrBsmmxb/bkoztrP0oDEdSy+FHLL+i/bVpYBLVsDQuLoKqiIWERVNX4sHrndq+ui3cnqBa/bXOrowf7x93vdl9ZNU8PJiCoivLvBh9u9Hu7vx6dbUuNEFSV+dEq6uizg+PeI6kJ1lB1UZO1FSNUXWRrqxV9VvUpkKDqpAZTIEHVkIl9U9WoCKqmsqj2sztFKoagakzN7lctKoKquapFRVANUKWoCKohqhIVQTXIICp/BihLRFANk50BLnNLgaAaaJn7VATVUIOoXr75WhaMoBrMzL5/8dfrLVkggmo0izuu8/SXo7NEFoSgms4fKK92dGHbCQTVAiayvajtBIJqicF2wgIW6QTVItkifd7rKYJqFYtvddxTmSOCah3bmud6iqBaKFtPzevedIJqqWhFH8/jC0kJqq38/tT7F+HP+wiqxeYx9RFUy4We+giq7bKp7033oQRCUBB17kGoDU+CgmQbnqEOkAkKA9kBcogFOkHhrWyBLiURFP7nF+j7f5ZboBMUrtBIH5XZRiAoXGNxmW0EgsIN2TZC0VGKoDBG8VGKoDBW0VGKoPAOxUYpgsI7FRmlCAoT+FGq17s/y+8gKEykHXkwy+sJCpP53fNZzvgIClN1Opr7VmGCwlTZnQgvfs/3XVwICrlEK9FXeV5HUMgl7xYCQSEni293u1OnPYJCbnkW5wSF3LLF+bRpj6Awk2k75wSFmbhIvpz46wLMYNq0R1CY2aRpj6Aws0nTHkFhZpOmPYJCIe+dd8cexRAUCnFmBIWAXPTF2MsCFGLxuBvvCAqFOSfbN64JUJBzemPaIygUZqJb17cPCAol3LxHiqBQilMlKIRz/RiGoFBKto66/JygUJLFf7yyzdEzgkJp/5x3740eExRK00vTHkGhNLU0GT0mKJR36aCYoBCAxaMdc4JCEKMdc4JCEBpJkn0kKAQxeqdHUAhi9E6PoBBG5D7LPhAUwjDlXR5CGm4dEBSCiU9PE4JCMP1VJSgElDqmPISjJoxQCEiVEQrhONENgkIwZv0PCArBqHOMUAjHlEU5AiMoBEVQCMfYNkBQHA4jMIJCUASFoAgKQREUgiIoBEVQCIqgEI7KIUEhKIJCUASFYNSY8hDYv8YLzEeVWA6NAAAAAElFTkSuQmCC"}},[[10,2,1]]]);
//# sourceMappingURL=main.c2ccfa36.chunk.js.map