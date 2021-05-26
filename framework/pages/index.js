import { LoginPage } from './loginPage';
import { HomePage } from "./homePage";
import { ProductPage } from "./productPage";
import { CartPage } from "./cartPage";

const app = () => ({
    LoginPage: () => new LoginPage(),
    HomePage: () => new HomePage(),
    ProductPage: () => new ProductPage(),
    CartPage: () => new CartPage()
})

export { app }
