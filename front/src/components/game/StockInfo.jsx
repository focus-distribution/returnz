import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import NewsTab from './tabs/NewsTab';
import StockInfoTab from './tabs/StockInfoTab';

export default function StockInfo() {
  const [view, setView] = useState('뉴스');
  const data = [
    {
      label: '뉴스',
      value: 'html',
      desc: `news`,
    },
    {
      label: '주가정보',
      value: 'react',
      desc: `info`,
    },

    {
      label: '그 외 데이터',
      value: 'vue',
      desc: `datas`,
    },
  ];

  return (
    <StockInfoContanier>
      <TabContainer id="custom-animation" value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} onClick={() => setView(label)}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBodys
          className={view === '주가정보' ? 'overflow-y-scroll' : null}
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanels key={value} value={value}>
              {desc === 'news' && <NewsTab />}
              {desc === 'info' && <StockInfoTab />}
              {desc === 'datas' && <div />}
            </TabPanels>
          ))}
        </TabsBodys>
      </TabContainer>
    </StockInfoContanier>
  );
}

const StockInfoContanier = styled.div`
  margin-top: 1.25rem;
  max-height: 285px;
  ${tw`border row-span-3 bg-white rounded-xl h-[28%] pt-2 flex justify-center`}
`;

const TabContainer = styled(Tabs)`
  ${tw`w-[95%] text-center`}
`;

const TabsBodys = styled(TabsBody)`
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const TabPanels = styled(TabPanel)``;
