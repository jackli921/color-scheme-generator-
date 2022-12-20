const block1 = document.getElementById('block-1')
const block2 = document.getElementById('block-2')
const block3 = document.getElementById('block-3')
const block4 = document.getElementById('block-4')
const block5 = document.getElementById('block-5')

const hex1 = document.getElementById('hex-1')
const hex2 = document.getElementById('hex-2')
const hex3 = document.getElementById('hex-3')
const hex4 = document.getElementById('hex-4')
const hex5 = document.getElementById('hex-5')

document.getElementById('get-color-btn').addEventListener('click',()=>{
    
    let colorwheelValue = document.getElementById('colorwheel').value.slice(1) 
    let dropdownMenuValue = document.getElementById('dropdown-menu').value  
    
    fetchColorScheme(colorwheelValue, dropdownMenuValue)     
})

function fetchColorScheme(colorwheelValue, dropdownMenuValue){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorwheelValue}&mode=${dropdownMenuValue}`)
        .then(res=>res.json())
        .then(data=>displayFetchedColorScheme(data))
}


function displayFetchedColorScheme(data){
    block1.style.backgroundColor = data.colors[0].hex.value
    block1.innerText = data.colors[0].hex.value
    block1.style.color = data.colors[0].hex.value
    
    block2.style.backgroundColor = data.colors[1].hex.value
    block2.innerText = data.colors[1].hex.value
    block2.style.color = data.colors[1].hex.value
    
    block3.style.backgroundColor = data.colors[2].hex.value
    block3.innerText = data.colors[2].hex.value
    block3.style.color = data.colors[2].hex.value
    
    block4.style.backgroundColor = data.colors[3].hex.value
    block4.innerText = data.colors[3].hex.value
    block4.style.color = data.colors[3].hex.value
    
    block5.style.backgroundColor = data.colors[4].hex.value
    block5.innerText = data.colors[4].hex.value
    block5.style.color = data.colors[4].hex.value
    
    hex1.innerText = data.colors[0].hex.value
    hex2.innerText = data.colors[1].hex.value
    hex3.innerText = data.colors[2].hex.value
    hex4.innerText = data.colors[3].hex.value
    hex5.innerText = data.colors[4].hex.value   
}

document.querySelectorAll('.block').forEach(item=>{
    item.addEventListener('click',e => { 
               
        let colortoCopy = e.target.innerText
        let textArea = document.createElement('input')
        
        textArea.type = "text"
        textArea.value = colortoCopy
        
        document.body.appendChild(textArea);
        textArea.select()
        document.execCommand('copy')
        alert(`${textArea.value} copied to clipboard`)
        
        document.body.removeChild(textArea);        
    })    
})