export function FixModalOpen(flag : boolean){
    const nav = document.getElementById("header");
    const bg = document.getElementById("document-bg");
    if (flag){
        document.body.style.overflow = 'hidden';
        if (window.innerWidth < 800) return;
        if (nav != null) nav.style.paddingRight = "15px";
        if (bg != null) bg.style.paddingRight = "15px";
        document.documentElement.style.marginRight = "15px"
    } else {
        document.body.style.overflow = 'auto';
        if (window.innerWidth < 800) return;
        if (nav != null) nav.style.paddingRight = "0px";
        if (bg != null) bg.style.paddingRight = "0px";
        document.documentElement.style.marginRight = "0px"
    }
}