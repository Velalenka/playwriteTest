import { LoginPage } from './loginPage';
import { HomePage } from "./homePage";
import { ProductPage } from "./productPage";
import { FavouritesPage } from "./favouritesPage";
import { HeaderMenuFragment } from "../page fragment/headerMenu";
import { FurnitureDealersPage } from "./furnitureDealersPage";

const app = () => ({
    LoginPage: () => new LoginPage(),
    HomePage: () => new HomePage(),
    ProductPage: () => new ProductPage(),
    FavouritesPage: () => new FavouritesPage(),
    HeaderMenuFragment: () => new HeaderMenuFragment(),
    FurnitureDealersPage: () => new FurnitureDealersPage()
})

export { app }
