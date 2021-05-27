const FavouritesPage = function ()
{
    const removeProductBtn = ('.ui-icon-trash');
    const confirmRemoveBtn = ('.ui-dialog-buttonset > button:nth-child(1)');
    const menuIcon = ('.arrow-icon');
    const favouritesMenu = ('#accountsMenu > li:nth-child(3) > a');
    const removeFromFavNotification = ('.cms_notify');
    const hoverElement = ('.cursor-pointer');

    this.goToFavouritesPage = async function(page)
    {
        await page.waitForSelector(menuIcon);
        await page.click(menuIcon);
        await page.waitForSelector(favouritesMenu);
        await page.click(favouritesMenu);
    };

    this.removeProductFromFavourites = async function(page)
    {
        await page.waitForSelector(hoverElement);
        await page.hover(hoverElement);
        await page.click(removeProductBtn);
        await page.waitForSelector(confirmRemoveBtn);
        await page.click(confirmRemoveBtn);
    };

    this.removeProductFromFavouritesNotification = async function(page)
    {
        await page.waitForSelector(removeFromFavNotification);
        const notificationText = await page.textContent(removeFromFavNotification);
        const convertedNotificationText = JSON.stringify(notificationText)
            .replace(/\\n|"/g, '')
            .trim();
        return convertedNotificationText;
    };
}
export { FavouritesPage };
