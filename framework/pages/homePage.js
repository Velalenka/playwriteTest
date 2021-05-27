const HomePage = function ()
{
    const account = ('.givenNameAccountSelector');
    const searchField = ('#searchTextbox');
    const searchedProductTitle = ('.listing-name');

    this.getLoggedAccountText = async function(page)
    {
        await page.waitForSelector(account);
        const accountText = await page.textContent(account);
        return accountText;
    };

    this.searchForItem = async function(page, item)
    {
        await page.waitForSelector(searchField, );
        await page.fill(searchField, item);
        await page.press(searchField, 'Enter');
    };

    this.getSearchedProductTitle = async function(page)
    {
        await page.waitForSelector(searchedProductTitle);
        const productText = await page.textContent(searchedProductTitle);
        return productText;
    };

    this.goToProductPage = async function(page)
    {
        await page.waitForSelector(searchedProductTitle);
        await page.click(searchedProductTitle);
    };
}
export { HomePage };
