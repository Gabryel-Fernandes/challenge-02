const camposInput = document.querySelectorAll('.inputs')
const btnSubmit = document.querySelector('.submit')
const error = document.querySelectorAll('.error')

btnSubmit.addEventListener('click', verificarCampos)

/*

// Aqui uma funcionalidade a mais para o codigo, ele verifica em tempo real se os inputs forem modificados

camposInput.forEach(input => {
    input.addEventListener('input', verificarCampos)
})

*/

function verificarCampos() {
    camposInput.forEach((input, index) => {
        if (input.value === '') {
            input.classList.remove('border')
            input.classList.add('border-invalid')
            error[index].style.display = 'block'
        } else {
            input.classList.remove('border-invalid')
            input.classList.add('border-valid')
            error[index].style.display = 'none'
        }
    })
}




