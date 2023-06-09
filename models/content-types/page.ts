import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Page
 * Id: 377105e4-d8e6-41f1-9e19-0ab4ad18d09e
 * Codename: page
 */
export type Page = IContentItem<{
  /**
   * Content (modular_content)
   * Required: false
   * Id: 2c5c68b1-9c7d-4f4a-84ce-b1bfadb600dd
   * Codename: content
   */
  content: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Show in navigation (multiple_choice)
   * Required: false
   * Id: 82e34861-7161-4d58-b8a8-635af658c05a
   * Codename: show_in_navigation
   */
  show_in_navigation: Elements.MultipleChoiceElement;

  /**
   * Subpages (subpages)
   * Required: false
   * Id: b99657b5-f287-4fa1-b042-7c48ddd40e94
   * Codename: subpages
   */
  subpages: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Title (text)
   * Required: false
   * Id: 8c8e9e9d-7c8e-4c70-b6c2-6df15fdc46ed
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * URL (url_slug)
   * Required: false
   * Id: 22db54d8-db09-4377-872a-30461d151ee3
   * Codename: url
   */
  url: Elements.UrlSlugElement;
}>;
