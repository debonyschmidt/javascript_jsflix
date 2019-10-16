//List of routes

const routes = {
    "/"             : Home
    , "/movielist"  : Movies
};

//The route code
const router = async () => {

    const content = null || document.getElementById("page_container");

    let request = Utils.parseRequestURL()
    let parseURL = (request.resource ? "/" + request.resource : "/") + + (request.verb ? '/' + request.verb : '')

    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}


window.addEventListener('hashchange', router);
window.addEventListener('load', router);