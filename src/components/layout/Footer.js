import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="mt-5">Interesse? Stuur ons een <a href="mailto:boxdriemooinie@gmail.com">berichtje>.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Achtergrond info</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://uitspraken.rechtspraak.nl/inziendocument?id=ECLI:NL:HR:2019:816">Hoge Raad 14 juni 2019</a>
          </li>
          <li>
            <a href="https://uitspraken.rechtspraak.nl/inziendocument?id=ECLI:NL:GHDHA:2019:3425">Hof Den Haag 18 december 2019</a>
          </li>
          <li>
            <a href="https://zoek.officielebekendmakingen.nl/kst-35026-74.html">Ministerie van Financien</a>
          </li>
        </ul>
      </div>
      </footer>
);

export default Footer;
