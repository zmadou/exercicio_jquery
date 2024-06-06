$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = $(`<li><a>${novaTarefa}</a></li>`)
        $(novoItem).appendTo('ol');
        $('#tarefa').val('');
    });

    $('ol').on('click', 'li', function() {
        $(this).css("text-decoration", "line-through")
    });
});
