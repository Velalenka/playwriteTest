const ProductPage = function ()
{
    const productViewTitleString = ('.product-title');
    const addToCartBtn = ('.buy-me-now-button');

    this.getProductViewTitle = async function(page)
    {
        await page.waitForNavigation({waitUntil: "networkidle"});
        const productViewTitle = await page.textContent(productViewTitleString);
        return productViewTitle;
    };

    this.addProductToCart = async function(page)
    {
        await page.click(addToCartBtn);
    };
}
export { ProductPage };
