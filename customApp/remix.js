 function customRendor(reactElement, Box){
  // Traditonal Way
// const domElement=document.createElement(reactElement.type)
//     domElement.innerHTMl=reactElement.children
//     domElement.setAttribute("href",reactElement.props.href)
//     domElement.setAttribute("target",reactElement.props.target)

//     Box.appendChild(domElement)  

  //Problem is that we repeat setAttribute we makes our code heavier
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop , reactElement.props[prop])
}
Box.appendChild(domElement)
 }

const reactElement={
    type:'a',
    props:{
        href:"https://Youtube.com",
        target:"_blank"
    },

    children:"Visit Youtube"
}

const mainBox = document.querySelector('#root')

customRendor(reactElement , mainBox)
