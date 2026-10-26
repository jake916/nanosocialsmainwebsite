import { postType } from "./post";
import { authorType } from "./author";
import { categoryType } from "./category";
import { homePageType } from "./homePage";
import { aboutPageType } from "./aboutPage";
import { brandsPageType } from "./brandsPage";
import { creatorsPageType } from "./creatorsPage";
import { contactPageType } from "./contactPage";
import { siteSettingsType } from "./siteSettings";

export const schema = {
  types: [
    homePageType,
    aboutPageType,
    brandsPageType,
    creatorsPageType,
    contactPageType,
    postType,
    authorType,
    categoryType,
    siteSettingsType,
  ],
};
