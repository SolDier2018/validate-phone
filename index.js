var reg = $(this).val().replace(/-/g, '');
var reg1 = reg.split('(').join('');
var reg2 = reg1.split(')').join('');
var reg3 = reg2.split(' ').join('');
var reg4 = reg3.split('+').join('');
var reg5 = reg4.split('').splice(1, 10);

for(var i = 0; i < reg5.length - 1; i++) {
    if(reg5[0] === reg5[i + 1]) {
        if($('#agreement_cash').is(':checked')) {
            $('#send_message_cash').prop('disabled', true)
        }
        var validate = false;
    } else {
        if($('#agreement_cash').is(':checked')) {
            $('#send_message_cash').prop('disabled', false)
        }
        var validate = true;
    }
}

$('#agreement_cash').on('change', function() {
    var check = $(this).is(':checked');
    if(validate === false) {
        $('#send_message_cash').prop('disabled', true)
    } else {
        if (check) {
            $('#send_message_cash').prop('disabled', false)
        } else {
            $('#send_message_cash').prop('disabled', true)
        }
    }
});
