window.addEventListener("DOMContentLoaded", function(){
    const date = localStorage.getItem('date')
    console.log(date)
    const dateArray = Array.from(date)
    console.log(dateArray)
    let month = ''
    if(dateArray[dateArray.length -1] === '0'){
        month = 'Outubro'
    }
    if(dateArray[dateArray.length - 1] === '1'){
        if(dateArray[dateArray.length - 2] === '1'){
            month = 'Novembro'
        } else{
            month = 'Janeiro'
        }
    }
    if(dateArray[dateArray.length - 1] === '2'){
        if(dateArray[dateArray.length - 2] === '1'){
            month = 'Dezembro'
        } else{
            month = 'Fevereiro'
        }
    }
    if(dateArray[dateArray.length -1] === '3'){
        month = 'Março'
    }
    if(dateArray[dateArray.length -1] === '4'){
        month = 'Abril'
    }
    if(dateArray[dateArray.length -1] === '5'){
        month = 'Maio'
    }
    if(dateArray[dateArray.length -1] === '6'){
        month = 'Junho'
    }
    if(dateArray[dateArray.length -1] === '7'){
        month = 'Julho'
    }
    if(dateArray[dateArray.length -1] === '8'){
        month = 'Agosto'
    }
    if(dateArray[dateArray.length -1] === '9'){
        month = 'Setembro'
    }

    
    const yearWithComs = dateArray.splice(0, 4)
    const year = yearWithComs[0] + yearWithComs[1] + yearWithComs[2] + yearWithComs[3]

    const h1 = document.createElement('h1')
    h1.innerText = `${month} de ${year}`
    const body = document.getElementById('body')
    body.appendChild(h1)
})