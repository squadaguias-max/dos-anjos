import { Mail, MapPin, MessageCircle, Phone, Scale } from "lucide-react";
import { templateConfig as site } from "../../config/template.config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-identity">
          <span className="footer-mark" aria-hidden="true">DA</span>
          <div><h2>{site.brand.name}</h2><p>{site.brand.descriptor}</p></div>
        </div>
        <div className="footer-details">
          <span><Scale />{site.brand.lawyer}</span>
          <span><Scale />{site.brand.oab}</span>
          <span><MapPin />Atuação em todo o Maranhão</span>
          <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp {site.contact.phoneLabel}</a>
          <a href={`tel:${site.contact.phone}`}><Phone />{site.contact.phoneLabel}</a>
          <a href={`mailto:${site.contact.email}`}><Mail />{site.contact.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Este material tem caráter meramente informativo e não constitui publicidade profissional nos termos do Provimento nº 205/2021 do CFOAB. As informações aqui veiculadas não garantem resultados específicos. Cada caso depende de análise individual.</p>
        <a href="#inicio">Voltar ao início</a>
      </div>
    </footer>
  );
}
