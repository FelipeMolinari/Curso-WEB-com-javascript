const colors = {
    p: '#388e3c',
    div: "#a7698e",
    span: "#29e6c1",
    section: "#d62963",
    ul:"#0ac241",
    ol:"#1ac6e8",
    header:"#de9b02",
    nav:"#012341",
    main:"#1f9952",
    footer:"#19bcf7",
    form:"#99ad7c",
    body:"#54183f",
    padrao:"#7c8b7f",
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(element => {
    
    const tagName = element.tagName.toLowerCase()    
    element.style.borderColor = colors.get(tagName)

    if (!element.classList.contains('nolabel')) {
        
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        element.insertBefore(label,element.childNodes[0])

    }
});