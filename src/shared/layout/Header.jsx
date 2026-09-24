import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Dos Anjos Advocacia — início" onClick={close}>
          <span className="brand-mark" aria-hidden="true">DA</span>
          <span className="brand-copy"><b>Dos Anjos</b><small>ADVOCACIA</small></span>
        </a>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="menu-principal" aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X /> : <Menu />}
        </button>
        <nav id="menu-principal" className={open ? "nav open" : "nav"} aria-label="Navegação principal">
          <a href="#para-quem" onClick={close}>Para quem é</a>
          <a href="#caminhos" onClick={close}>Caminhos jurídicos</a>
          <a href="#escritorio" onClick={close}>O escritório</a>
          <a className="header-cta" href="#formulario" onClick={close}>
            Falar com a equipe <MessageCircle />
          </a>
        </nav>
      </div>
    </header>
  );
}
