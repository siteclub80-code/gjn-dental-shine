export const CLINIC = {
  name: "GJN Odontologia",
  phoneDisplay: "(11) 9503-0884",
  whatsapp: "551195030884",
  address: "Av. Sapopemba, 1118 — Vila Regente Feijó, São Paulo — SP",
  instagram: "https://www.instagram.com/gjn.odontologia/",
  cnpj: "61.621.618/0001-63",
  hours: "Segunda a sexta, 9h às 19h · Sábado, 9h às 13h",
};

export function whatsappLink(
  message = "Olá! Gostaria de agendar uma avaliação na GJN Odontologia.",
) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}
