/**
 * Created by daniil on 26.10.16.
 */

var user_typing_info_class = 'user_typing_info';
var dialog_container_id = 'dialog_container';
var users_container_id = 'users_container';

$(function () {
    socketChat.message_area_id = 'socketChat';

    $('#' + users_container_id).on('click', 'div', function () {
        $('#' + users_container_id).find('div').removeClass('active');
        $(this).addClass('active');
        socketChat.getMessageHistory($(this).attr('id'));
        socketChat.recipient_id = $(this).attr('id');
    });
    socketChat.onMessageRender = function (message) {
        $('#' + dialog_container_id).prepend(
            message.text + '<br>'
        );
    };
    socketChat.onMessageListRender = function (message_list) {
        var message = {};
        $('#' + dialog_container_id).html('');

        $.each(message_list, function (key, val) {
            message = {
                text: val.text
            };
            socketChat.onMessageRender(message);
        });
    };
    socketChat.onUserRender = function (user) {
        var html = "<div class='"
            + (user.is_online ? "online" : "offline")
            + "' id='" + user.id + "'>" + user.id + " <span class='"
            + user_typing_info_class + "' id='" + user.id + "'></span></div>";

        var userCon = $('#' + users_container_id);
        var userDiv = userCon.find('div[id="' + user.id + '"]');
        if (userDiv.length) {
            userDiv.after(html);
            userDiv.remove();
        } else {
            $(userCon).append(html);
        }
    };
    socketChat.onUserTypingStart = function (user_id) {
        $('.' + user_typing_info_class + '[id="' + user_id + '"]').html('typing...');
    };
    socketChat.onUserTypingEnd = function (user_id) {
        $('.' + user_typing_info_class + '[id="' + user_id + '"]').html('');
    };
});