import React, { useEffect, useState } from 'react';
import './DomainsAndPages.css';
import { fetchDataFromAPI } from '../../utils';

const DomainsAndPages: React.FC<any> = ({ handlePageItemClick }) => {
  const [domainsAndPages, setDomainsAndPages] = useState<any>(null);
  useEffect(() => {
    fetchDataFromAPI().then((response) => setTimeout(() => setDomainsAndPages(response), 1500));
  }, []);
  
  return (
    <div className="Main">
      <h1 className='viewOneHeader'>View 1</h1>
      {domainsAndPages ? domainsAndPages.domains.map((domain: any, idx: number) => {
        const domainName = domain.display_name;
        const pages = domain.current_user_domain_page_access.pages;
        return (
          <ul key={idx} className="domainName">
            <div>{domainName}</div>
            {pages.map((page: any, idx: number) => {
            return (
              <li onClick={() => handlePageItemClick(page)} key={idx}>{page.name}</li>
            )
          })}
          </ul>
        );
      }) : ( <div>Loading IPushPull Data...</div> )}
    </div>
  );
}

export default DomainsAndPages;
