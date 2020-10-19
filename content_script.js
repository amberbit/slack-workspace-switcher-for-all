const tag = document.createElement("script");

tag.innerHTML = "(function() { Object.defineProperty(navigator, 'userAgent', { value: navigator.userAgent + ' CrOS' }); })()";

document.documentElement.appendChild(tag);
