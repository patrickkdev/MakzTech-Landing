import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Criamos sistemas e sites profissionais sob medida para atender às suas necessidades. Combinamos design moderno e tecnologia de ponta para garantir funcionalidade, eficiência e uma experiência de usuário excepcional. Se o seu negócio precisa de algo objetivo, bem feito e com entrega responsável, a MakzTech pode ajudar." />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="MakzTech - Conectamos seu negócio ao futuro" />
        <meta property="og:description" content="Criamos sistemas e sites profissionais sob medida para atender às suas necessidades. Combinamos design moderno e tecnologia de ponta para garantir funcionalidade, eficiência e uma experiência de usuário excepcional. Se o seu negócio precisa de algo objetivo, bem feito e com entrega responsável, a MakzTech pode ajudar." />
        <meta property="og:image" content="/makztech-og.jpg" />
        <meta property="og:image:width" content="684" />
        <meta property="og:image:height" content="684" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
