$('#name').val('')
$('#email').val('')
$('#mensagem_form').val('')

$("#button").click(() => {
    if ($('#name').val() == '' || $('#email').val() == '' || $(('#mensagem_form').val() == '')) {
        $('#name').focus()
        $('#email').focus()
        $('#mensagem_form').focus() 
    }
})

$('form').submit(function () {
    $('#button').text('enviado com sucesso')
    location.reload()
    Swal.fire('tudo certo muito obrigado')
});    


window.onload(
    swal.fire(
        'sejá bem vindo',
        'este é um projeto ainda em desenvolvimento e pode conter falhas, caso tenha alguma sugestão em como podemos melhorar mande um email para nós no final da pagina',
        'error'
    )
)

