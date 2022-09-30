// react/next imports
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
}

const Meta = ({ title, description }: Props) => {
  const titleText = `Mithra | ${title}`;
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="warranty,NFT,mithra,brands,crypto,blockchain,ownership"
      />

      <title>{titleText}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
