import { seachRepo, language } from "./Backend_request.js";


export function refresh(){
    function handleRefresh(){
    seachRepo(language); 
}

const reloadButton = document.querySelector(".js-refresh");
reloadButton.addEventListener("click", handleRefresh);
}
