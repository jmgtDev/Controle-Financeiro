function getDate(){
    const input = document.getElementById('inputDate')
    console.log(input.value)
    const date = input.value
    console.log(date)
    localStorage.setItem('date', date);
}



    //const div = document.getElementById('addExpense')
   // const button = document.createElement('button')
    //button.type = 'button'
   // button.innerText = 'Adicionar Despesa'
   // div.appendChild(button)

