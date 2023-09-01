 function customRendor(reactElement, Box){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTMl=reactElement.children
    domElement.setAttribute("href",reactElement.props.href)
    domElement.setAttribute("target",reactElement.props.target)

    Box.appendChild(domElement)grt
 }

const reactElement={
    type:'a',
    props:{
        href:"https//google.com",
        target:"_blank"
    },

    children:"Visit Google"
}

const mainBox = document.querySelector('#root')

customRendor(reactElement , mainBox)
