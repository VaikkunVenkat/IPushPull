export const DOMAIN_PAGES_URL = "https://www.ipushpull.com/api/1.0/domain_page_access/"

export const DOMAIN_PAGE_CONTENT_URL = (domain_id: string, page_id: string) => `https://www.ipushpull.com/api/2.0/domains/id/${domain_id}/page_content/id/${page_id}/`