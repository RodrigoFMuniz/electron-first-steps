function getVersion(selector, version){
    const sel = document.getElementById(selector)

    if(sel){
        sel.innerText = version
    }
}
window.addEventListener('DOMContentLoaded',()=>{
    const components = ['node', 'chrome', 'electron']

    for (component of components){
        getVersion(`${component}-version`, process.versions[component])
    }
})