import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Box 3? Mooi Nie'!
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Schrijf je in voor de nieuwsbrief en ontvang alles wat je nodig hebt om bezwaar te maken tegen de aanslag inkomstenbelasting 2019. Strijd mee tegen de buitensporige Box 3 heffing.  
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Schrijf in!</Button>
          </p>
         </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Voordelen</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Meet the A-Team</p>
              <p className="mt-4">
                Maak gebruik van de kennis en kunde van ervaren Nederlandse fiscalisten.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Gain Without Pain</p>
              <p className="mt-4">
                 Met onze adviezen in klare taal & voorbeeldbrief maak je in no time bezwaar.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Nada Nakkes Noppes</p>
              <p className="mt-4">
                Principes zijn niet in geld uit te drukken. Wij doen dit voor noppes. 
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Wat vooraf ging</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Het fictieve rendement op spaarrekeningen is sinds lange tijd hoger dan het werkelijke rendement. Volgens de Hoge Raad is sprake van een systematisch probleem dat alleen door de wetgever kan worden opgelost. Die is echter te druk met het afpakken van kinderopvangtoeslagen en kampt met verouderde ICT systemen.  
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Hoe nu verder?
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Goeie vraag. De regering duwt de hete aardappel door naar 2022, dus naar de volgende regering. Nog 2 jaar belasting betalen over spookrendementen is onacceptabel. Alleen door middel van systeem ontwrichtende massa bezwaren kunnen we deze regering dwingen tot onmiddellijke actie.  
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Gaat dat lukken?
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Absoluut. Politieke partijen die stelen van burgers zakken vroeg of laat, links- of rechtsom, binnenstebuiten of buitenstebinnen, door de stoelen van het parlement. And they know it.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
  </Layout>
);
