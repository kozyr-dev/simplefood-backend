import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsArticles extends Struct.ComponentSchema {
  collectionName: 'components_sections_articles';
  info: {
    description: '';
    displayName: 'Articles';
    icon: 'file-alt';
  };
  attributes: {
    article: Schema.Attribute.Component<'ui.article', true>;
    button: Schema.Attribute.Component<'ui.button', false>;
    custom_Class: Schema.Attribute.String;
    custom_ID: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    Benefit: Schema.Attribute.Component<'ui.benefit', true>;
    button: Schema.Attribute.Component<'ui.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    description: '';
    displayName: 'Contact';
    icon: 'map-marker-alt';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    content2: Schema.Attribute.RichText;
    form: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    form_title: Schema.Attribute.String;
    map_embed_code: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_contents';
  info: {
    description: '';
    displayName: 'Content';
    icon: 'align-justify';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false>;
    content: Schema.Attribute.RichText;
    embed_code: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsImageBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_banners';
  info: {
    description: '';
    displayName: 'Image Banner';
    icon: 'image';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
    button: Schema.Attribute.Component<'ui.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SectionsImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_galleries';
  info: {
    description: '';
    displayName: 'Image Gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_sections';
  info: {
    description: '';
    displayName: 'News';
    icon: 'newspaper';
  };
  attributes: {
    blog_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::blog-category.blog-category'
    >;
    layout: Schema.Attribute.Enumeration<['slider', 'list']> &
      Schema.Attribute.DefaultTo<'slider'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProducts extends Struct.ComponentSchema {
  collectionName: 'components_sections_products';
  info: {
    description: '';
    displayName: 'Products';
    icon: 'cheese';
  };
  attributes: {
    custom_Class: Schema.Attribute.String;
    custom_ID: Schema.Attribute.String;
    layout: Schema.Attribute.Enumeration<['Slider', 'Grid']> &
      Schema.Attribute.DefaultTo<'Slider'>;
    product_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::product-category.product-category'
    >;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    source: Schema.Attribute.Enumeration<
      ['Featured', 'Favorite', 'Category', 'Selected']
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPromoBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_promo_blocks';
  info: {
    description: '';
    displayName: 'Promo block';
    icon: 'star';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    invert_layout: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_video_blocks';
  info: {
    displayName: 'Video block';
    icon: 'video';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    embed_video_url: Schema.Attribute.String;
    placeholder_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SeoSeoTitle extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_titles';
  info: {
    description: '';
    displayName: 'Page SEO';
    icon: 'search';
  };
  attributes: {
    seo_description: Schema.Attribute.String;
    seo_title: Schema.Attribute.String;
  };
}

export interface UiArticle extends Struct.ComponentSchema {
  collectionName: 'components_ui_articles';
  info: {
    displayName: 'Article';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface UiBenefit extends Struct.ComponentSchema {
  collectionName: 'components_ui_benefits';
  info: {
    displayName: 'Benefit';
    icon: 'grin-beam';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface UiMenu extends Struct.ComponentSchema {
  collectionName: 'components_ui_menus';
  info: {
    displayName: 'Menu';
    icon: 'align-left';
  };
  attributes: {
    Classname: Schema.Attribute.String;
    Link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    Title: Schema.Attribute.String;
  };
}

export interface UiMenuList extends Struct.ComponentSchema {
  collectionName: 'components_ui_menu_lists';
  info: {
    description: '';
    displayName: 'MenuList';
    icon: 'align-left';
  };
  attributes: {
    Classname: Schema.Attribute.String;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.articles': SectionsArticles;
      'sections.benefits': SectionsBenefits;
      'sections.contact': SectionsContact;
      'sections.content': SectionsContent;
      'sections.image-banner': SectionsImageBanner;
      'sections.image-gallery': SectionsImageGallery;
      'sections.news-section': SectionsNewsSection;
      'sections.products': SectionsProducts;
      'sections.promo-block': SectionsPromoBlock;
      'sections.video-block': SectionsVideoBlock;
      'seo.seo-title': SeoSeoTitle;
      'ui.article': UiArticle;
      'ui.benefit': UiBenefit;
      'ui.button': UiButton;
      'ui.menu': UiMenu;
      'ui.menu-list': UiMenuList;
    }
  }
}
