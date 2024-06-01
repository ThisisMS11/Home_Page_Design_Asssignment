$(document).ready(function () {
    $('.custom-form-control').on('focus', function () {
        $(this).siblings('label').addClass('active');
    });

    $('.custom-form-control').on('blur', function () {
        if ($(this).val() === '') {
            $(this).siblings('label').removeClass('active');
        }
    });
});