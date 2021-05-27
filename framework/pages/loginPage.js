const LoginPage = function ()
{
    const loginButton = ('#edit-submit');
    const passwordField = ('#edit-pass');
    const usernameField = ('#edit-name');

    this.login = async function(page)
    {
        await page.fill(usernameField, 'alena.tulatest@gmail.com');
        await page.fill(passwordField, 'Password1');
        await page.click(loginButton);
    };
}
export { LoginPage };
