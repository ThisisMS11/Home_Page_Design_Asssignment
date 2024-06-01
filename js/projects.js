$(document).ready(function () {
    const $blocks = $('.image-block');
    const $mainImage = $('#mainImage');

    $blocks.on('click', function () {
        // remove
        $blocks.removeClass('selected-block');

        // add
        $(this).addClass('selected-block');

        /* Change the main image with fade-out and fade-in effect */
        const newImageSrc = $(this).data('image');
        $mainImage.addClass('hidden');
        setTimeout(() => {
            $mainImage.attr('src', newImageSrc);
            $mainImage.removeClass('hidden');
        }, 300);
    });
});
