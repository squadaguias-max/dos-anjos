export const templateConfig = {
  brand: {
    name: "Dos Anjos",
    descriptor: "Advocacia",
    lawyer: "André Felipe dos Anjos",
    oab: "OAB/MA — número pendente",
  },
  contact: { whatsapp: "" },
  office: { areaServed: "Todo o Maranhão" },
};

export function whatsappUrl(message = "Olá! Gostaria de entender os caminhos para regularizar meu imóvel.") {
  const number = templateConfig.contact.whatsapp.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
