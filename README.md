# vulnerabilities
Drugi projekt iz WEB2

Potrebno je izraditi web-aplikaciju koja će omogućiti potencijalnom napadaču korištenje dvije različite tehnike sigurnosnih napada, odnosno dvije ranjivosti web-aplikacija, iz dolje navedenih kategorija.

Za svaku je potrebno implementirati:

    funkcionalnost kojom se omogućuje ranjivost
    funkcionalnost kojom se onemogućuje ranjivost

Napraviti "prekidač" (checkbox, tipka ili padajući izbornik) kojim se ranjivost po želji uključuje i isključuje.

Ugrađene ranjivosti (sigurnosne nedostatke), s njima povezane napadačke tehnike i implementirane funkcionalnosti moraju biti dostupne kroz korisničko sučelje web-aplikacije tako da:

    napadi se mogu pokrenuti kroz sučelje web-aplikacije
    učinak napada bude vidljiv u korisničkom sučelju (npr. prikladnim ispisom niza izvršenih akcija, ispisom izmijenjenog sadržaja baze podataka, prikazom javascript:alert standardnog dijaloga s podacima o korisničkoj sjednici document.cookie itd.).

Za eventualno slanje ili primanje e-mail poruka sa malicioznim linkom koristiti neki od servisa s privremenim poštanskim sandučićima (npr. https://mailtrap.io/, https://www.guerrillamail.com/, https://www.mailinator.com/).

Web-aplikaciju je potrebno postaviti u oblak (npr. Render, Vercel, Heroku), a izvorni kod nužan i dovoljan za pokretanje aplikacije pohraniti na GitHub ili GitLab.

Napomena: Ako iz opravdanog razloga nećete moći izvesti ranjivost u cloud instalaciji (npr. ako sustav sam blokira brute-force napad ili niti jedan radni okvir omogućuje SQL umetanje) onda morate napisati kratke i jasne upute kako instalirati i pokrenuti sustav lokalno, po mogućnosti što jednostavnije npr. npm i && npm run server.

Nemogućnost instalacije rješenja projekta u cloud okruženje rezultirati će umanjenjem bodova. 🙁

Implementirajte jednu ranjivost iz prve kategorije i jednu iz druge kategorije:

Prva kategorija (odabirete svoj prvi zadatak kao 1 + JMBAG % 2):

    SQL umetanje (SQL Injection) - implementirati barem tautologiju
    Cross-site scripting (XSS) - jedan tip XSS napada po izboru (bilo koji)

Druga kategorija (odabirete svoj drugi zadatak kao 1 + JMBAG % 4):

    Loša autentifikacija (Broken Authentication)
    Loša kontrola pristupa (Broken Access Control)
    Lažiranje zahtjeva na drugom sjedištu (Cross Site Request Forgery, CSRF)
    Nesigurna pohrana osjetljivih podataka (Sensitive Data Exposure)

Aplikaciju postaviti u oblak (preporuča se besplatna opcija na Renderu), a kao odgovor na ovo pitanje isporučiti redom:

    adresu javno dostupnog git repozitorija s web-aplikacijom
    adresu web-aplikacije
    popis implementiranih ranjivosti (kratka lista od <= 2 zapisa)
    napomene za svaku implementiranu ranjivost (npr. "sve je uspješno implementirano", ili "nisam uspio/-la implementirati", itd.)
    ako je ranjivost implementirana, opisati koje funkcionalnosti su implementirane
    ako neke funkcionalnosti nisu implementirane, objasniti zašto ih nije bilo moguće implementirati
    kratke upute kako pokrenuti i testirati aplikaciju (ako je potrebno, navesti korisnička imena i zaporke potrebne za testiranje)

Primjer izgleda sučelja jednog mogućeg (ne pretjerano dobrog) rješenja:

Image\Screenshot.png-47797

Nemogućnost implementacije projekta barem na način kao u ovom primjeru rezultirati će umanjenjem bodova. 🙁
