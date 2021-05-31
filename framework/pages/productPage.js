const ProductPage = function ()
{
    const productViewTitleString = ('.listing-details-title');
    const addedToFavNotification = ('.cms_notify');
    const addToFavBtn = ('#SaveToFavorites');

    this.getProductViewTitle = async function(page)
    {
        await page.waitForSelector(productViewTitleString);
        const productViewTitle = await page.textContent(productViewTitleString)
        const convertedTitle = JSON.stringify(productViewTitle)
                .replace(/\\n|"/g, '')
                .trim();
        return convertedTitle;
    };

    this.addProductToFavourite = async function(page)
    {
        await page.waitForSelector(addToFavBtn);
        await page.click(addToFavBtn);
    };

    this.addProductToFavouriteNotification = async function(page)
    {
        await page.waitForSelector(addedToFavNotification);
        const notificationText = await page.textContent(addedToFavNotification);
        return notificationText;
    };
}
export { ProductPage };
