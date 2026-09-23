import { Header } from "./shared/layout/Header";
import { Footer } from "./shared/layout/Footer";
import { HomePage } from "./modules/home/pages/HomePage";

export function SiteApp() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo"><HomePage /></main>
      <Footer />
    </>
  );
}
