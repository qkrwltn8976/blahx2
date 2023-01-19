import Head from 'next/head';
import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const ServiceLayout = function ({ title = 'blahx2', children }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};
