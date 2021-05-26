const HomePage = function ()
{
    const account = ('.account-display-name');
    const searchField = ('.search-field .autocomplete-query');
    const categoryTitle = ('span.collection-title');
    const productTitle = ('[data-product-url="/product/3145664/pink-murano-glass-flush-mount-by-carlo-nason"] ' +
        '.product-title');
    const productViewButton = ('[data-product-url="/product/3145664/pink-murano-glass-flush-mount-by-carlo-nason"] .product-title');

    this.getLoggedAccountText = async function(page)
    {
        await page.waitForNavigation({waitUntil: "networkidle"});
        const accountText = await page.textContent(account);
        return accountText;
    };

    this.searchForItem = async function(page)
    {
        await page.waitForNavigation({waitUntil: "networkidle"});
        await page.fill(searchField, 'Lighting');
        await page.press(searchField, 'Enter');
    };

    this.getCollectionTitle = async function(page)
    {
        await page.waitForNavigation({waitUntil: "networkidle"});
        const categoryText = await page.textContent(categoryTitle);
        return categoryText;
    };

    this.goToProductPage = async function(page)
    {
        await page.waitForNavigation({waitUntil: "networkidle"});
        await page.click(productViewButton);
    };

    this.getProductTitle = async function(page)
    {
        await page.waitForNavigation({waitUntil: "networkidle"});
        const productTitle = await page.textContent(productTitle);
        const convertedTitle = JSON.stringify(productTitle)
            .replace(/\\n|"/g, '')
            .trim();
        return convertedTitle;
    };
}
export { HomePage };
