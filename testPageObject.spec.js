import chai from 'chai';
import {goto, run, stop} from './lib/browser';
import { app } from './framework/pages/index';
const {expect} = chai;

describe('Chairish test suit for Page Object', () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('https://www.chairish.com/account/login');
    });
    afterEach(async () => {
        await stop();
    });
    it('User logs in successfully', async () => {
        await app().LoginPage().login(page);
        const accountText = await app().HomePage().getLoggedAccountText(page);
        expect(accountText).to.have.string('My Account');
    });

    it('User can search for category', async () => {
        await app().LoginPage().login(page);
        await app().HomePage().searchForItem();
        const categoryText = await app().HomePage().getCollectionTitle();
        expect(categoryText).to.have.string('Lighting');
    });

    it('User can view product', async () => {
        await app().LoginPage().login(page);
        await app().HomePage().searchForItem();
        const productTitle = await app().HomePage().getProductTitle();
        await app().HomePage().goToProductPage();
        const productViewTitle = await app().ProductPage().getProductViewTitle();
        expect(productViewTitle).to.equal(productTitle);
    });

    it('User can add product to cart', async () => {
        await app().LoginPage().login(page);
        await app().HomePage().searchForItem();
        await app().HomePage().goToProductPage();
        const productViewTitle = await app().ProductPage().getProductViewTitle();
        await app().ProductPage().addProductToCart();
        const cartProductTitle = await app().CartPage().getProductInCartTitle();
        expect(cartProductTitle).to.equal(productViewTitle);

        await app().CartPage().removeProductFromCart();
    });

    it('User can delete product from cart', async () => {
        await app().LoginPage().login(page);
        await app().HomePage().searchForItem();
        await app().HomePage().goToProductPage();
        const productViewTitle = await app().ProductPage().getProductViewTitle();

        await app().ProductPage().addProductToCart();
        await app().CartPage().removeProductFromCart();
        const deleteMessage = await app().CartPage().getRemoveMessageText();

        expect(deleteMessage).to.equal(productViewTitle + ' was removed from your cart.');
    });
})
