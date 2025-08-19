import React, { useState } from "react";
import {
  HiMapPin,
  HiPhone,
  HiClock,
  HiClipboardDocument,
  HiBuildingStorefront,
} from "react-icons/hi2";

interface StoreMapProps {
  className?: string;
}

const StoreMap: React.FC<StoreMapProps> = ({ className = "" }) => {
  const [copiedAddress, setCopiedAddress] = useState<number | null>(null);
  const [selectedStore, setSelectedStore] = useState(0);

  const stores = [
    {
      id: 1,
      name: "Loja 1 - Cilon Cunha Brum",
      street: "R. Cilon Cunha Brum, 225",
      city: "Rio de Janeiro",
      state: "RJ",
      zipCode: "23573-400",
      neighborhood: "Paciência",
      coordinates: {
        lat: -22.8649,
        lng: -43.6153,
      },
    },
    {
      id: 2,
      name: "Loja 2 - José Piauhy Dourado",
      street: "Rua José Piauhy Dourado, 253",
      city: "Rio de Janeiro",
      state: "RJ",
      zipCode: "23573-040",
      neighborhood: "Paciência",
      coordinates: {
        lat: -22.8642,
        lng: -43.6148,
      },
    },
  ];

  const businessHours = [{ day: "Segunda a Domingo", hours: " 10:00 - 00:00" }];

  // Lógica para saber se está aberto agora
  function isOpenNow() {
    const now = new Date();
    // Horário de funcionamento: 10:00 até 00:00 (meia-noite)
    const openHour = 10;
    const closeHour = 24; // 00:00 do dia seguinte
    const hour = now.getHours();
    // Aberto das 10:00 até 23:59
    return hour >= openHour && hour < closeHour;
  }

  const currentStore = stores[selectedStore];

  const openGoogleMaps = (storeIndex: number = selectedStore) => {
    const store = stores[storeIndex];
    const address = encodeURIComponent(
      `${store.street}, ${store.neighborhood}, ${store.city} - ${store.state}, ${store.zipCode}`
    );
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(url, "_blank");
  };

  const openWaze = (storeIndex: number = selectedStore) => {
    const store = stores[storeIndex];
    const url = `https://waze.com/ul?q=${store.coordinates.lat},${store.coordinates.lng}&navigate=yes`;
    window.open(url, "_blank");
  };

  const copyAddress = async (storeIndex: number) => {
    const store = stores[storeIndex];
    const address = `${store.street}, ${store.neighborhood}, ${store.city} - ${store.state}, ${store.zipCode}`;
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(storeIndex);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error("Erro ao copiar endereço:", err);
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 ${className}`}
    >
      {/* Seletor de Lojas */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {stores.map((store, index) => (
            <button
              key={store.id}
              onClick={() => setSelectedStore(index)}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                selectedStore === index
                  ? "bg-white text-orange-600 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <HiBuildingStorefront className="w-5 h-5" />
              <span className="text-sm">{store.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mapa Embed */}
      <div className="relative h-80 bg-gradient-to-br from-orange-100 to-red-100">
        <iframe
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${
            currentStore.coordinates.lng - 0.01
          },${currentStore.coordinates.lat - 0.01},${
            currentStore.coordinates.lng + 0.01
          },${currentStore.coordinates.lat + 0.01}&layer=mapnik&marker=${
            currentStore.coordinates.lat
          },${currentStore.coordinates.lng}`}
          className="w-full h-full border-0"
          title={`Localização ${currentStore.name}`}
          loading="lazy"
        />

        {/* Overlay com botões de navegação */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={() => openGoogleMaps()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg shadow-lg transition-all duration-200 text-sm font-medium hover:scale-105"
            title="Abrir no Google Maps"
          >
            Google Maps
          </button>
          <button
            onClick={() => openWaze()}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg shadow-lg transition-all duration-200 text-sm font-medium hover:scale-105"
            title="Abrir no Waze"
          >
            Waze
          </button>
        </div>

        {/* Indicador de Localização */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-800">
              {currentStore.name}
            </span>
          </div>
        </div>
      </div>

      {/* Informações da Loja */}
      <div className="p-8 space-y-6">
        {/* Endereço */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <HiMapPin className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Endereço</h3>
              <p className="text-gray-600 leading-relaxed">
                {currentStore.street}
                <br />
                {currentStore.neighborhood}, {currentStore.city} -{" "}
                {currentStore.state}
                <br />
                CEP: {currentStore.zipCode}
              </p>
              <button
                onClick={() => copyAddress(selectedStore)}
                className="mt-3 flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors duration-200 text-sm font-medium"
              >
                <HiClipboardDocument className="w-4 h-4" />
                <span>
                  {copiedAddress === selectedStore
                    ? "Endereço copiado!"
                    : "Copiar endereço"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid com Telefone e Horário */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Telefone */}
          <div className="flex items-start space-x-4">
            <HiPhone className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Telefone</h3>
              <p className="text-gray-600">
                <a
                  href="tel:+5521976958970"
                  className="hover:text-orange-600 transition-colors duration-200 font-medium"
                >
                  (21) 97695-8970
                </a>
              </p>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="flex items-start space-x-4">
            <HiClock className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Funcionamento</h3>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm items-center"
                  >
                    <div className="flex flex-col">
                      <span className="text-gray-600">{schedule.day}:</span>
                      <div className="flex items-center mt-1">
                        <span className="font-medium text-gray-800 mr-2">
                          {schedule.hours}
                        </span>
                        {isOpenNow() ? (
                          <span className="ml-2 text-green-600 font-semibold">
                            Aberto agora
                          </span>
                        ) : (
                          <span className="ml-2 text-red-500 font-semibold">
                            Fechado agora
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreMap;
