// react/next imports
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
}

const Meta = ({ title, description }: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="warranty,NFT,mithra,brands,crypto,blockchain,ownership"
      />

      <title> Mithra | {title} </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
