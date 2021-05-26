const CartPage = function ()
{
    const cartText = ('.cart-title');
    const productInCartTitle = ('.cart-item-title');
    const removeProductBtn = ('.js-remove');
    const deleteMessageText = ('.cart-message');

    this.getProductInCartTitle = async function(page)
    {
        await page.waitForNavigation(cartText, {waituntil: "visible"});
        const cartProductTitle = await page.textContent(productInCartTitle);
        return cartProductTitle;
    };

    this.removeProductFromCart = async function(page)
    {
        await page.waitForNavigation(cartText, {waituntil: "visible"});
        await page.click(removeProductBtn);
    };

    this.getRemoveMessageText = async function(page)
    {
        const deleteMessageText = await page.textContent(deleteMessageText);
    };
}
export { CartPage };
