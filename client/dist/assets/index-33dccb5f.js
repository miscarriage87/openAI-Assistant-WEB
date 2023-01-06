(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const f="/assets/bot-61bdb6bf.svg",m="/assets/user-bcdeb18e.svg",c=document.querySelector("form"),a=document.querySelector("#chat_container");let d;function p(t){t.textContent="",d=setInterval(()=>{t.textContent+=".",t.textContent==="...."&&(t.textContent="")},300)}function g(t,o){let r=0,s=setInterval(()=>{r<o.length?(t.innerHTML+=o.charAt(r),r++):clearInterval(s)},20)}function h(){const t=Date.now(),r=Math.random().toString(16);return`id-${t}-${r}`}function l(t,o,r){return`
            <div class="wrapper ${t&&"ai"}">
                <div class="chat">
                    <div class="profile">
                        <img 
                            src="${t?f:m}"
                            alt="${t?"bot":"user"}"
                        />
                    </div>
                    <div class="message" id=${r}>${o}</div>
                </div>
            </div>      
        `}const u=async t=>{t.preventDefault();const o=new FormData(c);a.innerHTML+=l(!1,o.get("prompt")),c.reset();const r=h();a.innerHTML+=l(!0,"  ",r),a.scrollTop=a.scrollHeight;const s=document.getElementById(r);p(s);const e=await fetch("http://localhost:5001",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:o.get("prompt")})});if(clearInterval(d),s.innerHTML="",e.ok){const i=(await e.json()).bot.trim();console.log({parsedData:i}),g(s,i)}else{const n=await e.text();s.innerHTML="Something went wrong",alert(n)}};c.addEventListener("submit",u);c.addEventListener("keyup",t=>{t.keyCode===13&&u(t)});
