import chai from 'chai';
import {goto, run, stop} from './lib/browser';
const {expect} = chai;

describe('Chairish test suit', () => {
    let page;
    beforeEach(async () => {
        await run();
        page = await goto('https://www.chairish.com/account/login');
    });
    afterEach(async () => {
        await stop();
    });
    it('User logs in successfully', async () => {
        await page.fill('#id_email', 'alena.tulatest@gmail.com');
        await page.fill('#id_password', 'Password1');
        await page.click('.form-auth .form-actions .btn-default');
        await page.waitForNavigation({waitUntil: "networkidle"});
        const account = ('.account-display-name');
        const accountText = await page.textContent(account);
        expect(accountText).to.have.string('My Account');
    });

    it('User can search for category', async () => {
        await page.fill('#id_email', 'alena.tulatest@gmail.com');
        await page.fill('#id_password', 'Password1');
        await page.click('.form-auth .form-actions .btn-default');
        await page.waitForNavigation({waitUntil: "networkidle"});

        await page.fill('.search-field .autocomplete-query', 'Lighting');
        await page.press('.search-field .autocomplete-query', 'Enter');
        await page.waitForNavigation({waitUntil: "networkidle"});
        const categoryText = await page.textContent('span.collection-title');
        expect(categoryText).to.have.string('Lighting');
    });

    it('User can view product', async () => {
        await page.fill('#id_email', 'alena.tulatest@gmail.com');
        await page.fill('#id_password', 'Password1');
        await page.click('.form-auth .form-actions .btn-default');
        await page.waitForNavigation({waitUntil: "networkidle"});

        await page.fill('.search-field .autocomplete-query', 'Lighting');
        await page.press('.search-field .autocomplete-query', 'Enter');
        await page.waitForNavigation({waitUntil: "networkidle"});

        const productTitle = await page.textContent('[data-product-url="/product/3145664/pink-murano-glass-flush-mount-by-carlo-nason"] ' +
            '.product-title');
        const convertedTitle = JSON.stringify(productTitle)
            .replace(/\\n|"/g, '')
            .trim();
        await page.click('[data-product-url="/product/3145664/pink-murano-glass-flush-mount-by-carlo-nason"] .product-title');
        await page.waitForNavigation({waitUntil: "networkidle"});
        const productViewTitle = await page.textContent('.product-title');
        expect(productViewTitle).to.equal(convertedTitle);
    });

    it('User can add product to cart', async () => {
        await page.fill('#id_email', 'alena.tulatest@gmail.com');
        await page.fill('#id_password', 'Password1');
        await page.click('.form-auth .form-actions .btn-default');
        await page.waitForNavigation({waitUntil: "networkidle"});

        await page.fill('.search-field .autocomplete-query', 'Lighting');
        await page.press('.search-field .autocomplete-query', 'Enter');
        await page.waitForNavigation({waitUntil: "networkidle"});

        await page.click('[data-product-url="/product/3145664/pink-murano-glass-flush-mount-by-carlo-nason"] .product-title');
        await page.waitForNavigation({waitUntil: "networkidle"});
        const productViewTitle = await page.textContent('.product-title');

        await page.click('.buy-me-now-button');
        await page.waitForNavigation('.cart-title', {waituntil: "visible"});
        const cartProductTitle = await page.textContent('.cart-item-title');

        expect(cartProductTitle).to.equal(productViewTitle);

        await page.click('.js-remove');
    });

    it('User can delete product from cart', async () => {
        await page.fill('#id_email', 'alena.tulatest@gmail.com');
        await page.fill('#id_password', 'Password1');
        await page.click('.form-auth .form-actions .btn-default');
        await page.waitForNavigation({waitUntil: "networkidle"});

        await page.fill('.search-field .autocomplete-query', 'Lighting');
        await page.press('.search-field .autocomplete-query', 'Enter');
        await page.waitForNavigation({waitUntil: "networkidle"});

        await page.click('[data-product-url="/product/3145664/pink-murano-glass-flush-mount-by-carlo-nason"] .product-title');
        await page.waitForNavigation({waitUntil: "networkidle"});
        const productViewTitle = await page.textContent('.product-title');

        await page.click('.buy-me-now-button');
        await page.waitForNavigation('.cart-title', {waituntil: "visible"});
        await page.click('.js-remove');
        const deleteMessage = await page.textContent('.cart-message');

        expect(deleteMessage).to.equal(productViewTitle + ' was removed from your cart.');
    });
})
