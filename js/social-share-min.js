function shareOnFacebook(){const e="https://www.facebook.com/sharer/sharer.php?u="+window.location.href;window.open(e,"","width=500, height=600")}function shareOnTwitter(){const e="https://twitter.com/intent/tweet?text="+window.location.href;window.open(e,"","width=500, height=600")}function shareOnLinkedIn(){const e="https://www.linkedin.com/shareArticle?mini=true&url="+window.location.href+"&source=LinkedIn";window.open(e,"","width=500, height=600")}const fb=document.getElementById("fb-share");fb.addEventListener("click",shareOnFacebook);const tw=document.getElementById("tw-share");tw.addEventListener("click",shareOnTwitter);const lkn=document.getElementById("lkn-share");lkn.addEventListener("click",shareOnLinkedIn);