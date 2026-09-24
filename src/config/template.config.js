export const templateConfig = {
  brand: {
    name: "Dos Anjos",
    descriptor: "Advocacia",
    lawyer: "André Felipe dos Anjos",
    oab: "OAB/MA 19.341",
  },
  contact: {
    whatsapp: "5598991360102",
    phone: "+5598991360102",
    phoneLabel: "(98) 99136-0102",
    email: "andrefelipesilva.jus@gmail.com",
  },
  office: { areaServed: "Todo o Maranhão" },
};

export function whatsappUrl(message = "Olá! Gostaria de entender os caminhos para regularizar meu imóvel.") {
  const number = templateConfig.contact.whatsapp.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
