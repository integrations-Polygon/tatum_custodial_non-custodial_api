$('#btn-send').click(() => {
    handleSendTransaction();
});
$('#btn-login').click(() => {
    handleLogin();
});
$('#btn-logout').click(() => {
    handleLogout();
});
$('#section-account').hide();

// Check if user has logged in
let handleDisplay = async () => {
    let isLoggedIn = await fm.user.isLoggedIn();
    if (isLoggedIn) {
        $('#section-login').hide();
        $('#section-account').show();
        setUserInfo();
    } else {
        $('#section-login').show();
        $('#section-account').hide();
    }
};

handleDisplay();