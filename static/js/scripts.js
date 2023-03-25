$(document).ready(function () {
    function highlightWord() {
        $(".song-result").each(function () {
            const word = $("#id_word").val();
            const regex = new RegExp(`(${word})`, 'gi');
            const resultHTML = $(this).children('span').html().replace(regex, '<span class="highlight">$1</span>');
            $(this).children('span').html(resultHTML);
        });
    }

    function fadeInResults() {
        setTimeout(function () {
            $(".song-result").addClass("visible");
        }, 100);
    }

    highlightWord();
    fadeInResults();

    $(".youtube-search").on("click", function () {
        const searchQuery = $(this).data("search").replace(/<.*?>/g, '');
        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
        window.open(url, "_blank");
    });

        this.submit();
    });

document.querySelector('.search-title').addEventListener('click', function () {
    window.location.reload();
});
