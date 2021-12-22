import { DOMAIN_PAGES_URL } from "./constants";

export const fetchDomainsAndPages = async (): Promise<any> => {
  const response = await fetch(DOMAIN_PAGES_URL);
  const data = await response.json();
  return data;
}