import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Page } from './page';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Web spotlight root
 * Id: b219ba63-5194-456f-a95b-548c6d156a32
 * Codename: web_spotlight_root
 */
export type WebSpotlightRoot = IContentItem<{
  /**
   * Content (modular_content)
   * Required: false
   * Id: d693ad66-8e57-4378-9909-5cb2df1aabdf
   * Codename: content
   */
  content: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Subpages (subpages)
   * Required: false
   * Id: ade3178a-8505-45d5-9636-11e8b67b22c7
   * Codename: subpages
   */
  subpages: Elements.LinkedItemsElement<Page>;

  /**
   * Title (text)
   * Required: false
   * Id: 944f08d0-5121-48c2-9758-e6c8dc6a1320
   * Codename: title
   */
  title: Elements.TextElement;
}>;