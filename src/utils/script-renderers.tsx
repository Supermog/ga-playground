export const renderGtagScript = () => {
  const scripts = [];

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

  return scripts;
};
