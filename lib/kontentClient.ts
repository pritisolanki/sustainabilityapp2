// Kontent.ai Delivery API
import { createDeliveryClient, camelCasePropertyNameResolver } from '@kontent-ai/delivery-sdk'
import { IntroductionSection, Page, Habit, WebSpotlightRoot } from '../models';

const sourceTrackingHeaderName = 'X-KC-SOURCE'
const client = createDeliveryClient({
  projectId: (process.env.KONTENT_PROJECT_ID || process.env.NEXT_PUBLIC_KONTENT_PROJECT_ID) || '0000-000',
  previewApiKey: process.env.NEXT_PUBLIC_KONTENT_PREVIEW_API_KEY || '0000-000',
  globalHeaders: (_queryConfig) => [
    {
      header: sourceTrackingHeaderName,
      value: `${process.env.APP_NAME || "n/a"};${process.env.APP_VERSION || "n/a"}`,
    },
  ],
  propertyNameResolver: camelCasePropertyNameResolver,
  defaultQueryConfig: {
    usePreviewMode: true
  }
});


export async function getHeroUnit() : Promise<IntroductionSection> {
  const response = await client
    .item<IntroductionSection>('landing_page')
    .toPromise()
  return (response.data.item);
}

export async function getNavigationData() : Promise<WebSpotlightRoot | undefined> {
  const response = await client
    .item<WebSpotlightRoot>('homepage')
    .toPromise()
  return (response.data.item);
}


export async function getNavData(): Promise<WebSpotlightRoot>{
  const pageList = await client.items<WebSpotlightRoot>().type('web_spotlight_root').toPromise();
  return(pageList.data.items[0]);
}


export async function getPageDetails(params:any): Promise<Page[]>{
  const response = await client.items<Page>().equalsFilter('elements.url', params.slug).toPromise();
  return (response.data.items);
}
