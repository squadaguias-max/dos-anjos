import {
  ArrowRight, Building2, Check, ClipboardCheck, FileKey2, FileSearch,
  House, Landmark, MapPin, MessageCircle, ScrollText, ShieldCheck,
} from "lucide-react";
import { createElement, useState } from "react";
import { templateConfig as site, whatsappUrl } from "../../../config/template.config";

const qualificationItems = [
  "Precisa regularizar a documentação de um imóvel para vender, alugar ou financiar",
  "Tem um imóvel ocupado há anos sem registro em seu nome",
  "Está com um inventário parado por causa de um imóvel",
  "Tem um imóvel em inventário e quer saber se pode vender antes da partilha",
  "Comprou um imóvel por contrato particular e nunca registrou",
];

const legalPaths = [
  { icon: House, title: "Usucapião", text: "Reconhecimento da propriedade de quem ocupa um imóvel há determinado tempo, dentro das condições previstas em lei." },
  { icon: Landmark, title: "Inventário com imóveis", text: "Enquanto o inventário não é concluído, o imóvel permanece formalmente em nome de quem faleceu. Em determinadas condições, pode ser possível pedir autorização judicial ou extrajudicial para a venda antes da partilha." },
  { icon: ScrollText, title: "Contrato de gaveta", text: "Contratos particulares sem registro em cartório deixam a situação do imóvel incompleta perante a lei." },
  { icon: FileKey2, title: "Regularização para negociar", text: "Bancos, cartórios e compradores costumam exigir a documentação regularizada antes de vender, alugar ou financiar." },
  { icon: FileSearch, title: "Diligência em cartórios", text: "Levantamento da situação registral do imóvel para identificar documentos, registros e providências necessários." },
];

function ContactLink({ className = "", children }) {
  return <a className={className} href="#formulario">{children}</a>;
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function HomePage() {
  const [phone, setPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");

  function submitContact(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Olá! Meu nome é ${form.get("name")}. Telefone: ${phone}. Situação do imóvel: ${form.get("situation")}.`;
    const destination = whatsappUrl(message);
    if (destination) {
      window.open(destination, "_blank", "noopener,noreferrer");
      setFormMessage("Conversa preparada no WhatsApp.");
      return;
    }
    setFormMessage("O envio será ativado assim que o número do escritório for confirmado.");
  }

  return (
    <>
      <section className="hero" id="inicio">
        <div className="hero-ambient" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><MapPin /> Regularização imobiliária no Maranhão</span>
            <h1>Documentação do imóvel <em>travando sua vida?</em></h1>
            <p className="hero-lead">Entenda os caminhos jurídicos para regularizar seu imóvel antes de vender, alugar ou financiar.</p>
            <div className="hero-actions">
              <ContactLink className="button primary-button"><MessageCircle />Solicitar atendimento</ContactLink>
              <a className="button secondary-button" href="#formulario">Prefiro que me retornem</a>
            </div>
            <p className="service-note"><ShieldCheck /> Atendimento para todo o Maranhão.</p>
          </div>
          <div className="hero-visual">
            <div className="document-stamp"><span>IMÓVEL</span><strong>com caminho jurídico</strong></div>
            <img src="/images/casa-na-mao.png" width="1325" height="1000" alt="Maquete de uma casa apoiada sobre uma mão" fetchpriority="high" />
            <div className="hero-index" aria-hidden="true"><span>01</span><i /></div>
          </div>
        </div>
      </section>

      <section className="qualification" id="para-quem">
        <div className="container qualification-grid">
          <div className="qualification-copy">
            <span className="section-kicker">Antes de qualquer decisão</span>
            <h2>Este atendimento é indicado para você que:</h2>
            <div className="check-list">
              {qualificationItems.map((item) => <div className="check-item" key={item}><span><Check /></span><p>{item}</p></div>)}
            </div>
            <div className="investment-note">
              <ClipboardCheck />
              <div><strong>Como o atendimento é definido</strong><p>Após conhecer os documentos e o objetivo do imóvel, o escritório apresenta o escopo jurídico aplicável e os próximos passos possíveis.</p></div>
            </div>
          </div>

          <aside className="contact-card" id="formulario" aria-labelledby="form-title">
            <span className="form-number">01</span>
            <p className="section-kicker">Retorno da equipe</p>
            <h2 id="form-title">Conte o que está acontecendo com o imóvel</h2>
            <form onSubmit={submitContact}>
              <label>Como podemos chamar você?<input name="name" type="text" autoComplete="name" required maxLength="80" placeholder="Seu nome" /></label>
              <label>Telefone com DDD<input name="phone" type="tel" inputMode="tel" autoComplete="tel" required minLength="14" maxLength="15" value={phone} onChange={(event) => setPhone(formatPhone(event.target.value))} placeholder="(98) 99999-9999" /></label>
              <label>Qual é a situação do imóvel?
                <select name="situation" required defaultValue="">
                  <option value="" disabled>Selecione uma opção</option>
                  <option>Quero vender, alugar ou financiar</option>
                  <option>Ocupo o imóvel sem registro em meu nome</option>
                  <option>O imóvel está em inventário</option>
                  <option>Tenho apenas um contrato particular</option>
                  <option>Preciso levantar a situação no cartório</option>
                  <option>Outra situação</option>
                </select>
              </label>
              <button className="button form-button" type="submit">Solicitar retorno <ArrowRight /></button>
              {formMessage && <p className="form-status" role="status">{formMessage}</p>}
            </form>
          </aside>
        </div>
      </section>

      <section className="rights" id="caminhos">
        <div className="container">
          <header className="section-heading">
            <div><span className="section-kicker light">Conheça seus direitos</span><h2>O documento certo pode destravar o próximo passo.</h2></div>
            <p>Regularizar um imóvel não é uma solução única. O caminho depende da origem da posse, dos documentos existentes e do objetivo da família.</p>
          </header>
          <div className="rights-grid">
            {legalPaths.map(({ icon, title, text }, index) => (
              <article className="right-card" key={title}><span className="right-number">0{index + 1}</span>{createElement(icon)}<h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="mid-cta">
        <div className="container mid-cta-grid">
          <div><span className="section-kicker light">Cada imóvel tem uma história</span><h2>Toda situação tem um caminho a ser avaliado.</h2></div>
          <div><p>Conte a sua e entenda quais opções existem para o seu caso.</p><ContactLink className="button light-button">Ir para o formulário <ArrowRight /></ContactLink></div>
        </div>
      </section>

      <section className="authority" id="escritorio">
        <div className="container authority-grid">
          <div className="authority-visual">
            <figure className="authority-photo">
              <img src="/images/andre-retrato.jpg" width="1086" height="1448" loading="lazy" alt="Retrato profissional do advogado André Felipe dos Anjos" />
              <figcaption><strong>André dos Anjos</strong><span>{site.brand.oab}</span></figcaption>
            </figure>
          </div>
          <div className="authority-copy">
            <span className="section-kicker">Quem vai cuidar do seu caso</span>
            <h2>André dos Anjos</h2>
            <p className="authority-lead">Advogado responsável pelo Dos Anjos Advocacia, escritório que atua no Direito Civil desde 2018, com foco em demandas imobiliárias.</p>
            <div className="credential"><ClipboardCheck /><p><strong>{site.brand.lawyer}</strong> integra a Comissão de Direito Imobiliário da OAB/MA.</p></div>
            <div className="credential"><Building2 /><p>Atendimento voltado à análise documental e à construção do caminho jurídico adequado para cada imóvel.</p></div>
            <div className="practice-profile" aria-label="Áreas de atuação profissional">
              <p>Atuação profissional em</p>
              <div><span>Direito Civil</span><span>Processual Civil</span><span>Notarial e Registral</span></div>
            </div>
            <p className="oab-number">{site.brand.oab}</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-grid">
          <div className="final-copy">
            <span className="section-kicker light">Seu próximo passo começa com clareza</span>
            <h2>Fale com a equipe e entenda o seu caso.</h2>
            <p>Conte a situação do seu imóvel e receba orientação sobre os próximos passos possíveis.</p>
            <ContactLink className="button light-button">Solicitar atendimento <ArrowRight /></ContactLink>
          </div>
          <aside className="final-assurance" aria-label="Informações do atendimento">
            <span className="final-number" aria-hidden="true">02</span>
            <div><MapPin /><p><strong>Atendimento em todo o Maranhão</strong><span>Orientação jurídica com análise individual de cada caso.</span></p></div>
            <div><ShieldCheck /><p><strong>Contato direto e objetivo</strong><span>Informe apenas seu nome, telefone e a situação do imóvel.</span></p></div>
          </aside>
        </div>
      </section>
    </>
  );
}
