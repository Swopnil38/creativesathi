/* <![CDATA[ */

// Jquery validate form contact
$('#helpform').on('submit', function() {

    var action = $(this).attr('action');

    $("#message-help").fadeIn(750, function() {

        $('#submit-help')
            .after('<i class="bi bi-arrow-repeat animate-spin loader"></i>')
            .attr('disabled', 'disabled');

        $.post(action, {
                fullname: $('#fullname').val(),
                email_help: $('#email_help').val(),
                message_help: $('#message_help').val(),
                verify_help: $('#verify_help').val()
            },
            function(data) {
                document.getElementById('message-help').innerHTML = data;
                $('#message-help').slideDown('slow');
                $('#helpform .loader').fadeOut('slow', function() { $(this).remove() });
                $('#submit-help').removeAttr('disabled');
                if (data.match('success') != null) $('#helpform').slideUp('slow');

            }
        );

    });
    return false;
});

/* ]]> */