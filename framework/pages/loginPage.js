const LoginPage = function ()
{
    const loginButton = ('.form-auth .form-actions .btn-default');
    const passwordField = ('#id_password');
    const usernameField = ('#id_email');

    this.login = async function(page)
    {
        await page.fill(usernameField, 'alena.tulatest@gmail.com');
        await page.fill(passwordField, 'Password1');
        await page.click(loginButton);
    };
}
export { LoginPage };
