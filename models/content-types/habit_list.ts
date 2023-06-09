import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type SustainabilityCategories } from '../taxonomies/sustainability_categories';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Habit list
 * Id: 568058c8-1a86-4175-8a7d-162142b62d9b
 * Codename: habit_list
 */
export type HabitList = IContentItem<{
  /**
   * Sustainability Categories (taxonomy)
   * Required: false
   * Id: ba31b553-e5ef-4294-afc8-9fee63b8e694
   * Codename: category
   */
  category: Elements.TaxonomyElement<SustainabilityCategories>;

  /**
   * icons (asset)
   * Required: false
   * Id: c2fed236-b6d2-4338-a012-b56941ebb5e3
   * Codename: icons
   */
  icons: Elements.AssetsElement;

  /**
   * short description (text)
   * Required: false
   * Id: cb32b3fe-138b-424e-bb86-b693678c46a0
   * Codename: short_description
   */
  short_description: Elements.TextElement;
}>;
