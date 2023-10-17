export const renderGtagScript = () => {
  const scripts: JSX.Element[] = [];

  scripts.push(
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-11379055501"
    ></script>
  );
  scripts.push(
    <script>
      {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-11379055501');`}
    </script>
  );

  scripts.push(
    <script>
      {`gtag('event', 'conversion', {'send_to': 'AW-11379055501/X758COz4x-0YEI23-rEq'});`}
    </script>
  );

  return scripts;
};

export const renderGtagConversionScript = () => {
  const scripts: JSX.Element[] = [];

  scripts.push(
    <script>
      {`gtag('event', 'conversion', {'send_to': 'AW-11379055501/X758COz4x-0YEI23-rEq'});`}
    </script>
  );

  return scripts;
};
