function createElement(tag, prop, ...children){
    const element = document.createElement(tag);

    Object.keys(prop).forEach(key => element[key] = prop[key]);

    if(children.length>0){
        children.forEach(child =>{ 
            if(typeof child === 'string'){
                child = document.createTextNode(child);
            }        
            element.appendChild(child)
        });
    }
    return  element;
}