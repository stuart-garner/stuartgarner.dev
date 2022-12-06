// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for homePage documents */
interface HomepageDocumentData {
    /**
     * Heading field in *homePage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.heading
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.RichTextField;
    /**
     * Sub Heading field in *homePage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.sub_heading
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    sub_heading: prismicT.TitleField;
    /**
     * Profile Picture field in *homePage*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.profile_picture
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    profile_picture: prismicT.ImageField<never>;
    /**
     * About Me Heading field in *homePage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.about_me_heading
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    about_me_heading: prismicT.TitleField;
    /**
     * About Me Body field in *homePage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.about_me_body
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    about_me_body: prismicT.RichTextField;
    /**
     * Portfolio field in *homePage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.portfolio[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    portfolio: prismicT.GroupField<Simplify<HomepageDocumentDataPortfolioItem>>;
    /**
     * Testimonials field in *homePage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    testimonials: prismicT.GroupField<Simplify<HomepageDocumentDataTestimonialsItem>>;
    /**
     * Clients field in *homePage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.clients[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    clients: prismicT.GroupField<Simplify<HomepageDocumentDataClientsItem>>;
    /**
     * Slice Zone field in *homePage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Item in homePage → Portfolio
 *
 */
export interface HomepageDocumentDataPortfolioItem {
    /**
     * Title field in *homePage → Portfolio*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.portfolio[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *homePage → Portfolio*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.portfolio[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * GitHub Link field in *homePage → Portfolio*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.portfolio[].githublink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    githublink: prismicT.LinkField;
    /**
     * Live Link field in *homePage → Portfolio*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.portfolio[].live_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    live_link: prismicT.LinkField;
    /**
     * Screenshot field in *homePage → Portfolio*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.portfolio[].screenshot
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    screenshot: prismicT.ImageField<never>;
}
/**
 * Item in homePage → Testimonials
 *
 */
export interface HomepageDocumentDataTestimonialsItem {
    /**
     * Quote field in *homePage → Testimonials*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials[].quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    quote: prismicT.RichTextField;
    /**
     * Name field in *homePage → Testimonials*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Affiliation field in *homePage → Testimonials*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials[].affiliation
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    affiliation: prismicT.RichTextField;
    /**
     * Profile Picture field in *homePage → Testimonials*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.testimonials[].profile_picture
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    profile_picture: prismicT.ImageField<never>;
}
/**
 * Item in homePage → Clients
 *
 */
export interface HomepageDocumentDataClientsItem {
    /**
     * Client Logo field in *homePage → Clients*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.clients[].client_logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    client_logo: prismicT.ImageField<never>;
}
/**
 * Slice for *homePage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = never;
/**
 * homePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
export type AllDocumentTypes = HomepageDocument;
/**
 * Primary content in Portfolio → Primary
 *
 */
interface HomeIntroductionSliceDefaultPrimary {
    /**
     * Title field in *Portfolio → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: home_introduction.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Item in Portfolio → Items
 *
 */
export interface HomeIntroductionSliceDefaultItem {
    /**
     * Project Title field in *Portfolio → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_introduction.items[].project_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    project_title: prismicT.RichTextField;
    /**
     * Project Description field in *Portfolio → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_introduction.items[].project_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    project_description: prismicT.RichTextField;
    /**
     * Project Screenshot field in *Portfolio → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home_introduction.items[].project_screenshot
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    project_screenshot: prismicT.ImageField<never>;
    /**
     * GitHub Link field in *Portfolio → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home_introduction.items[].github_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    github_link: prismicT.LinkField;
    /**
     * Live Link field in *Portfolio → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home_introduction.items[].live_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    live_link: prismicT.LinkField;
}
/**
 * Default variation for Portfolio Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HomeIntroduction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomeIntroductionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HomeIntroductionSliceDefaultPrimary>, Simplify<HomeIntroductionSliceDefaultItem>>;
/**
 * Slice variation for *Portfolio*
 *
 */
type HomeIntroductionSliceVariation = HomeIntroductionSliceDefault;
/**
 * Portfolio Shared Slice
 *
 * - **API ID**: `home_introduction`
 * - **Description**: `HomeIntroduction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomeIntroductionSlice = prismicT.SharedSlice<"home_introduction", HomeIntroductionSliceVariation>;
/**
 * Primary content in Project → Primary
 *
 */
interface ProjectSliceDefaultPrimary {
    /**
     * Title field in *Project → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: project.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Project → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: project.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Screen Shot field in *Project → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.primary.screen_shot
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    screen_shot: prismicT.ImageField<never>;
    /**
     * Git hub Link field in *Project → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: project.primary.git_hub_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    git_hub_link: prismicT.LinkField;
    /**
     * Live Link field in *Project → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: project.primary.live_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    live_link: prismicT.LinkField;
}
/**
 * Default variation for Project Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Project`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProjectSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ProjectSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Project*
 *
 */
type ProjectSliceVariation = ProjectSliceDefault;
/**
 * Project Shared Slice
 *
 * - **API ID**: `project`
 * - **Description**: `Project`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProjectSlice = prismicT.SharedSlice<"project", ProjectSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataPortfolioItem, HomepageDocumentDataTestimonialsItem, HomepageDocumentDataClientsItem, HomepageDocumentDataSlicesSlice, HomepageDocument, AllDocumentTypes, HomeIntroductionSliceDefaultPrimary, HomeIntroductionSliceDefaultItem, HomeIntroductionSliceDefault, HomeIntroductionSliceVariation, HomeIntroductionSlice, ProjectSliceDefaultPrimary, ProjectSliceDefault, ProjectSliceVariation, ProjectSlice };
    }
}