$('#play-video').on('click', function(e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $('#video-overlay').append('<iframe width="853" height="480" src="https://www.youtube.com/embed/0dFOSrrEgP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});
$('video-overlay, .video-overlay-close').on('click', function(e) {
    e.preventDefault();
    close_video();
});
$(document).keyup(function(e) {
    if (e.kayCode === 27) {
        close_video();
    }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

// ===============mixitap================
var containerEl = document.querySelector('.mix-con');

var mixer = mixitup(containerEl);

// ============mobile menu toggle
$("#menu-toggle").click(function() {
    $(".mobile-menu").toggleClass("active");
});