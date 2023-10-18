import { renderGtagConversionScript } from '@/utils/script-renderers';
import { Helmet } from 'react-helmet-async';

function ScriptComponent() {
  return (
    <>
      <Helmet>{renderGtagConversionScript()}</Helmet>
      <div>Hello, script is active</div>
    </>
  );
}

export { ScriptComponent };
