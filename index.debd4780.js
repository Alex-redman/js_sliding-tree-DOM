document.querySelectorAll(".tree li").forEach(function(e){var t=Array.from(e.childNodes).find(function(e){return e.nodeType===Node.TEXT_NODE});if(t){var n=document.createElement("span");n.textContent=t.textContent.trim(),e.replaceChild(n,t)}}),document.querySelector(".tree").addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.parentElement.querySelector("ul");t&&(t.style.display="none"===t.style.display?"":"none")}});
//# sourceMappingURL=index.debd4780.js.map
