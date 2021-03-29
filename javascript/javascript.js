$('#name').val('')
$('#email').val('')
$('#mensagem_form').val('')

$('form').submit(function () {
    $('#button').text('enviado com sucesso')
});


$("#button").click(() => {
    if ($('#name').val() == '' || $('#email').val() == '' || $(('#mensagem_form').val() == '')) {
        $('#name').focus()
        $('#email').focus()
        $('#mensagem_form').focus()
    }
})



