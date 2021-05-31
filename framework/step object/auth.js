import {app} from '../pages';

const AuthStepObject = function ()
{
    this.login = async function(page)
    {
        await app().LoginPage().login(page);
    };
}
export { AuthStepObject };
