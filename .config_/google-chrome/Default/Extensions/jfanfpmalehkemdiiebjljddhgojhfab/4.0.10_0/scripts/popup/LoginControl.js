/* global PopupView: false ztreeControl:false*/
'use strict';

var ztreeControl = new ZtreeController();
function LoginControl() {

    var errValidator = $('#div_error_validator');
    var userId = $('#userId');
    var password = $('#password');
    var keep_password = $('#keep_password');
    //add click listener and enter to login button
    $('#login_button').on('click', loginSubmit);
    $('.wiz_login').on('keydown', 'input, button', function(e) {
        if (e.which === 13) {
            loginSubmit();
        }
    });

    function login(loginParam) {
        var port = chrome.extension.connect({
            name : 'login'
        });
        port.onMessage.addListener(function(res) {
            var code = res.code;
            var msg;
            if (code === 200) {
                PopupView.hideLogin();

            } else {
                if (!!code) {
                    if (code === 31001 || code === 31002 || code === 314) {
                        code = 301;
                    }
                    msg = chrome.i18n.getMessage('err_' + code);
                }
                if (!msg) {
                    msg = res.returnMessage;
                }
                PopupView.showLoginError(msg);
            }
        });
        port.postMessage(loginParam);
    }

    function doLogin() {
        var loginingMsg = chrome.i18n.getMessage('logining');
        PopupView.showWaiting(loginingMsg);

        var loginParam = {
            userId: userId.val(),
            password: password.val(),
            autoLogin: keep_password.prop('checked')
        };
        login(loginParam);
    }

    /**
     * 点击登陆按钮触发事件
     */
    function loginSubmit() {
        if (checkEmail() && checkPassword()) {
            doLogin();
        }
    }

    function checkEmail() {
        errValidator.html('');
        var email = userId.val();
        var valid = verifyEmail(email);
        if (!valid) {
            errValidator.html(chrome.i18n.getMessage('userid_error')).show(100);
        }
        return valid;

    }

    function verifyEmail(str_email) {
        return !!(str_email && str_email.trim().length > 1);

    }

    function checkPassword() {
        errValidator.html('');
        var passwordVal = password.val();
        if (passwordVal.trim().length < 1) {
            errValidator.html(chrome.i18n.getMessage('password_error')).show(100);
            return false;
        }
        return true;

    }

    function initCreateAccountLink() {
        var port = chrome.runtime.connect({
            name: 'getRegisterUrl'
        });
        port.onMessage.addListener(function(url) {
            $('#create_acount').html(chrome.i18n.getMessage('create_account_link')).bind('click', function(evt) {
                window.open(url);
            });
        });
    }
    this.initCreateAccountLink = initCreateAccountLink;
}