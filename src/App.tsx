import React, { useState } from 'react';
import DomainsAndPages from './components/DomainsAndPages';
import PageInformationGrid from './components/PageInformationGrid';
import { getDomainAndPageId } from './utils';

const App = () => {

  const [isPageClicked, setIsPageClicked] = useState<boolean>(false);
  const [pageId, setPageId] = useState<string | undefined>('');
  const [domainId, setDomainId] = useState<string | undefined>(''); 

  const handlePageItemClick = (page: any): void => {
    setIsPageClicked(true);
    const { domainId, pageId } = getDomainAndPageId(page.website_url);
    setDomainId(domainId);
    setPageId(pageId);
  }


  return (
    <>
      <DomainsAndPages handlePageItemClick={handlePageItemClick} />
      {isPageClicked && <PageInformationGrid domainId={domainId} pageId={pageId} />}
    </>

  );
}

export default App;
