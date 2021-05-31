const HeaderMenuFragment = function ()
{
    const lnkFurnitureMenu = ('#listing_menu_3');
    const lnkFurnitureDealers = ('a[href*="dealers/furniture?site_type=1"]');
    const lblDealersHeader = ('#facetedPageTitle > h2');

    this.goToFurnitureDealers = async function(page)
    {
        await page.waitForSelector(lnkFurnitureMenu);
        await page.hover(lnkFurnitureMenu);
        await page.waitForSelector(lnkFurnitureDealers);
        await page.click(lnkFurnitureDealers);
    };
}
export { HeaderMenuFragment };
