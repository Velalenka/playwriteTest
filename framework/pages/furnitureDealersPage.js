import {HeaderMenuFragment} from "../page fragment/headerMenu";

const FurnitureDealersPage = function ()
{
    const lblDealersHeader = ('#facetedPageTitle > h2');

    this.getFurnitureDealersHeader = async function(page)
    {
        await page.waitForSelector(lblDealersHeader);
        const dealersHeader = await page.textContent(lblDealersHeader);
        return dealersHeader;
    };
}
export { FurnitureDealersPage };
