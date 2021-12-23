export const fetchDataFromAPI = async (url = DOMAIN_PAGES_URL): Promise<any> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const getDomainAndPageId = (website_url: string): IGetDomainAndPageId => {
  const matchArray: RegExpMatchArray | null = website_url.match(/\d+/g)
  return { domainId: matchArray?.[0], pageId: matchArray?.[1]}
}

interface IGetDomainAndPageId {
  domainId: string | undefined,
  pageId: string | undefined
}

export const DOMAIN_PAGES_URL = "https://www.ipushpull.com/api/1.0/domain_page_access/"

export const getPageContentURL = (domain_id: string | undefined, page_id: string | undefined): string => `https://www.ipushpull.com/api/2.0/domains/id/${domain_id}/page_content/id/${page_id}/`