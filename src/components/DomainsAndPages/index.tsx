import React, { useEffect, useState } from 'react';
import './DomainsAndPages.css';
import { fetchDomainsAndPages } from '../../utils';

const DomainsAndPages: React.FC<any> = () => {
  const [domainsAndPages, setDomainsAndPages] = useState<any>(null);
  useEffect(() => {
    fetchDomainsAndPages().then((response) => setDomainsAndPages(response));
  }, []);
  
  return (
    <div className="Main">
      <h1 className='viewOneHeader'>View wrgmewio1</h1>
      {domainsAndPages.domains.map((domain: any, idx: number) => {
        const domainName = domain.display_name;
        const pages = domain.current_user_domain_page_access.pages;
        return (
          <ul key={idx} className="domainName">
            <div>{domainName}</div>
            {pages.map((page: any) => {
            return (
              <li>{page.name}</li>
            )
          })}
          </ul>
        );
      })}
    </div>
  );
}

export default DomainsAndPages;
