import React, { useState, useEffect } from 'react';
import { fetchDataFromAPI, getPageContentURL } from '../../utils';
import './PageInformationGrid.css';

interface IPageInformationGridProps {
  domainId: string | undefined;
  pageId: string | undefined
}

const PageInformationGrid: React.FC<IPageInformationGridProps> = ({ domainId, pageId }) => {
  const [pageInformation, setPageInformation] = useState<any>(null);
  const [refreshToggled, setRefreshToggled] = useState<boolean>(false);

  useEffect(() => {
    fetchDataFromAPI(getPageContentURL(domainId, pageId)).then((response) => setPageInformation(response.content));
  }, [refreshToggled, domainId, pageId])

  const values = pageInformation && pageInformation.values;
  return (
    <>
      <h1>View 2</h1>
      {values && (<div className='tableBackground'>
      <table>
        <thead>
          <tr>
            {values[2].map((header: string, index: number) => {
              return <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.slice(0, values.length).map((row: any, rowIndex: number) => {
            return (
              <tr key={rowIndex}>
                {row.map((rowItem: any, rowItemindex: number) => (
                    <td key={rowItemindex}>{rowItem}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>)}
    <button onClick={() => setRefreshToggled(prev => !prev)}>
      Refresh
    </button> 
    </>

    
  );
}

export default PageInformationGrid;
