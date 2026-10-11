const projectUrl = "https://italian-restaurant-cyan.vercel.app/";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function RestaurantPreview() {
  return (
    <div className="restaurant-preview" aria-label="Illustrative Gestaltung für das Demo-Projekt Bella Italia">
      <div className="browser-bar"><span /><span /><span /><p>bella italia · restaurant</p></div>
      <div className="restaurant-nav"><span className="restaurant-logo">Bella Italia<span>RISTORANTE</span></span><span>La dolce vita, online.</span></div>
      <div className="restaurant-content">
        <div><span className="restaurant-eyebrow">MIT LIEBE. AUF ITALIENISCH.</span><p>Ein Stück Italien.<br /><em>Ein guter Abend.</em></p><span className="restaurant-button">Bella Italia entdecken ↗</span></div>
        <div className="plate" aria-hidden="true"><div className="pizza"><i /><i /><i /><i /><i /><i /><b /><b /><b /></div></div>
      </div>
      <div className="restaurant-bottom"><span>Buon cibo. Buona compagnia.</span><span>ITALIENISCHER GENUSS</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
      <header className="site-header container">
        <a href="#" className="wordmark" aria-label="NovaWeb Studio – zur Startseite"><span className="brand-icon" aria-hidden="true">n.</span>NovaWeb Studio<span className="brand-dot">*</span></a>
        <nav aria-label="Hauptnavigation"><a href="#leistungen">Leistungen</a><a href="#projekte">Projekte</a><a href="#ueber-mich">Über mich</a><a className="nav-contact" href="#kontakt">Kontakt <Arrow /></a></nav>
      </header>
      <main id="inhalt">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="eyebrow"><span className="status-dot" /> FREELANCE WEBDESIGN · DEUTSCHLAND</div>
          <div className="hero-grid">
            <div><h1 id="hero-title">Gute Geschäfte<br />beginnen mit einer<br /><span>guten Website.</span></h1><p className="hero-copy">Individuelle Websites für Restaurants, Cafés und kleine Unternehmen. Klar im Design. Stark auf jedem Bildschirm. Mit Liebe zum Detail.</p><div className="hero-actions"><a className="button button-dark" href="#kontakt">Lass uns dein Projekt besprechen <Arrow /></a><a className="text-link" href="#projekte">Projekt ansehen <span aria-hidden="true">↓</span></a></div><p className="hero-note">Persönlicher Austausch. Moderne Umsetzung.</p></div>
            <div className="hero-art"><div className="art-label"><span aria-hidden="true">✳</span> DIGITAL. ABER PERSÖNLICH.</div><div className="art-type">Dein<br />Business.<br /><em>Dein Auftritt.</em></div><div className="art-bottom"><span>Von der ersten Idee<br />bis zur fertigen Website.</span><span className="art-arrow" aria-hidden="true">↗</span></div><span className="art-orbit" aria-hidden="true" /></div>
          </div>
          <div className="hero-footer"><span>Für Menschen, die etwas Eigenes aufbauen.</span><div><span>Restaurants</span><span>Cafés</span><span>Kleine Unternehmen</span></div></div>
        </section>
        <section id="leistungen" className="services section container" aria-labelledby="services-title">
          <div className="section-heading"><div><p className="eyebrow">01 / LEISTUNGEN</p><h2 id="services-title">Alles, was dein<br />Webauftritt braucht.</h2></div><p>Dein Unternehmen hat Charakter.<br />Deine Website sollte ihn zeigen.</p></div>
          <div className="service-grid">
            <article><div className="service-top"><span className="service-symbol" aria-hidden="true">▧</span><span>01</span></div><h3>Individuelles Webdesign</h3><p>Ein klarer, stimmiger Auftritt, der zu deinem Unternehmen passt. Mit durchdachten Inhalten und einer Gestaltung, die Besucher einfach ans Ziel führt.</p><span className="service-tag">Deine Marke im Mittelpunkt</span></article>
            <article><div className="service-top"><span className="service-symbol phone-symbol" aria-hidden="true">▯</span><span>02</span></div><h3>Für jeden Bildschirm</h3><p>Vom Smartphone bis zum Desktop: Deine Website passt sich flexibel an. Mit gut lesbaren Texten, übersichtlicher Navigation und einfach bedienbaren Elementen.</p><span className="service-tag">Mobil von Anfang an</span></article>
            <article><div className="service-top"><span className="service-symbol code-symbol" aria-hidden="true">〈/〉</span><span>03</span></div><h3>Moderne Entwicklung</h3><p>Moderne Webtechnologien und KI-gestützte Entwicklung treffen auf bewusste Designentscheidungen. Für eine schlanke Umsetzung mit Blick auf Ladezeit und Zugänglichkeit.</p><span className="service-tag">Technik mit Sinn</span></article>
          </div>
        </section>
        <section id="projekte" className="projects section" aria-labelledby="projects-title"><div className="container">
          <div className="section-heading"><div><p className="eyebrow">02 / PROJEKTE</p><h2 id="projects-title">Von der Idee<br />zum digitalen Auftritt.</h2></div><p>Ein erster Einblick in meine Arbeit.<br />Zum Ansehen und Ausprobieren.</p></div>
          <a className="project-visual" href={projectUrl} target="_blank" rel="noopener noreferrer" aria-label="Bella Italia Demo-Website öffnen (neuer Tab)"><span className="preview-caption">GESTALTUNGSILLUSTRATION · DEMO-PROJEKT</span><RestaurantPreview /><span className="project-open" aria-hidden="true">↗</span></a>
          <div className="project-info"><div><div className="project-title"><h3>Bella Italia</h3><span className="badge">Demo-Projekt</span></div><p>Demo-Website für ein fiktives italienisches Restaurant.</p><p className="project-disclaimer">Ein eigenes Konzeptprojekt – kein Kundenauftrag.</p></div><a className="text-link" href={projectUrl} target="_blank" rel="noopener noreferrer">Demo live ansehen <Arrow /><span className="sr-only"> (öffnet in einem neuen Tab)</span></a></div>
        </div></section>
        <section id="ueber-mich" className="about section container" aria-labelledby="about-title"><div><p className="eyebrow">03 / ÜBER MICH</p><h2 id="about-title">Gutes Design.<br /><span className="serif-accent">Direkter Draht.</span></h2><div className="about-signature"><span aria-hidden="true">✳</span> Kreativ gedacht. Klar umgesetzt.</div></div><div className="about-copy"><p className="intro">Ich gestalte und entwickle als freiberuflicher Webdesigner in Deutschland moderne Websites für Restaurants, Cafés und kleine Unternehmen.</p><p>Mein Fokus liegt auf einem Auftritt, der zu dir passt: verständlich, ansprechend und auf jedem Gerät gut nutzbar. Dabei setze ich auf moderne Webtechnologien und KI als Unterstützung im Entwicklungsprozess.</p><p>Designentscheidungen, sorgfältige Umsetzung und der persönliche Austausch bleiben dabei in meiner Hand. So wird aus deiner Idee eine Website mit eigenem Charakter.</p><a className="text-link" href="#kontakt">Lernen wir uns kennen <Arrow /></a></div></section>
        <section id="kontakt" className="contact section" aria-labelledby="contact-title"><div className="container contact-grid"><div><p className="eyebrow">04 / KONTAKT</p><h2 id="contact-title">Deine nächste Idee?<br /><span>Fängt hier an.</span></h2><p>Ob neue Website oder frischer Auftritt: Erzähle mir,<br className="desktop-break" /> was du vorhast. Wir finden gemeinsam einen Anfang.</p></div><div className="contact-card"><span className="contact-icon" aria-hidden="true">↗</span><h3>Platz für deine Nachricht.</h3><p className="contact-email"><a href="mailto:novawebstudio.kontakt@gmail.com">novawebstudio.kontakt@gmail.com</a></p><p className="contact-note">Schreib mir eine E-Mail zu deiner Projektidee.</p><span className="contact-small">Persönlich. Unkompliziert. Auf Augenhöhe.</span></div></div></section>
      </main>
      <footer className="site-footer container"><a href="#" className="wordmark" aria-label="NovaWeb Studio – zur Startseite">NovaWeb Studio<span className="brand-dot">*</span></a><p>Webdesign &amp; Digitale Lösungen</p><a href="#inhalt">Zurück nach oben <span aria-hidden="true">↑</span></a></footer>
    </>
  );
}
