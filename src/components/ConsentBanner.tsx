import React, { useState, useEffect } from 'react';
import { setConsent, hasConsent } from '../lib/consent';

const ConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasConsent()) setVisible(true);
  }, []);

  const accept = () => {
    setConsent(true);
    setVisible(false);
    // reload page or init pixel could be done by caller
    window.location.reload();
  };

  const decline = () => {
    setConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-8 z-50 flex justify-center">
      <div className="bg-white border rounded-lg shadow-lg p-4 max-w-3xl w-full flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 text-sm text-gray-700">
          Usamos cookies e pixels para melhorar sua experiência e mensurar conversões. Você concorda com o uso do Meta Pixel e envio de eventos?
        </div>
        <div className="flex gap-2">
          <button onClick={decline} className="px-4 py-2 bg-gray-200 rounded-md">Recusar</button>
          <button onClick={accept} className="px-4 py-2 bg-orange-500 text-white rounded-md">Aceitar</button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
