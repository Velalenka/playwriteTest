import chai from 'chai';
import {goto, run, stop} from '../lib/driver/browser';
import { app } from '../framework/pages';
const {expect} = chai;

const productName = 'Large 2-Door Cabinet by Guillerme & Chambron';

describe('InCollect test suit for Page Object', () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('https://www.incollect.com/cms_login/sign_in');
    });
    afterEach(async () => {
        await stop();
    });
    it('User logs in successfully', async () => {
        await app().LoginPage().login(page);
        const accountText = await app().HomePage().getLoggedAccountText(page);
        expect(accountText).to.have.string('Alena Belyavskaya');
    });

    it('User can search for product', async () => {
        await app().LoginPage().login(page);
        await app().HomePage().searchForItem(page, productName);
        const productText = await app().HomePage().getSearchedProductTitle(page);
        expect(productText).to.have.string(productName);
    });

    it('User can view product', async () => {
        await app().LoginPage().login(page);
        await app().HomePage().searchForItem(page, productName);
        await app().HomePage().goToProductPage(page);
        const productViewTitle = await app().ProductPage().getProductViewTitle(page);
        expect(productViewTitle).to.equal(productName);
    });

    it('Notification when adding to favourites', async () => {
        await app().LoginPage().login(page);
        await app().HomePage().searchForItem(page, productName);
        await app().HomePage().goToProductPage(page);
        await app().ProductPage().addProductToFavourite(page);
        const notificationText = await app().ProductPage().addProductToFavouriteNotification(page);
        expect(notificationText).to.equal('This item was added to Favorites.');

        await app().FavouritesPage().goToFavouritesPage(page);
        await app().FavouritesPage().removeProductFromFavourites(page);
    });

    it('User can delete product from favourites', async () => {
        await app().LoginPage().login(page);
        await app().HomePage().searchForItem(page, productName);
        await app().HomePage().goToProductPage(page);
        await app().ProductPage().addProductToFavourite(page);
        await app().FavouritesPage().goToFavouritesPage(page);
        await app().FavouritesPage().removeProductFromFavourites(page);
        const deleteMessage = await app().FavouritesPage().removeProductFromFavouritesNotification(page);
        expect(deleteMessage).to.equal('Deleted');
    });

    it('User can view Furniture Dealers', async () => {
        await app().HeaderMenuFragment().goToFurnitureDealers(page);
        const dealersMenuText = await app().FurnitureDealersPage().getFurnitureDealersHeader(page);
        expect(dealersMenuText).to.equal('Dealers');
    });
})
