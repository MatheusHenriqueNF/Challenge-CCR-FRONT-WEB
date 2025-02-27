$(document).ready(function(){
    $('#btn-menu').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#btn-menu').find('i').toggleClass('fa-x');
    });
});