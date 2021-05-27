import { LoginPage } from './loginPage';
import { HomePage } from "./homePage";
import { ProductPage } from "./productPage";
import { FavouritesPage } from "./favouritesPage";

const app = () => ({
    LoginPage: () => new LoginPage(),
    HomePage: () => new HomePage(),
    ProductPage: () => new ProductPage(),
    FavouritesPage: () => new FavouritesPage()
})

export { app }
