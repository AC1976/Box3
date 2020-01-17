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
            Schrijf in voor de nieuwsbrief en ontvang gratis alles wat je nodig hebt om bezwaar te maken tegen de aanslag inkomstenbelasting 2019. En strijd mee tegen de buitensporige Box 3 heffing.  
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Schrijf in!</Button>
          </p>
          <p className="mt-4 text-gray-600">....and join the Tea Party</p>
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
            Het fictieve rendement op spaarrekeningen is sinds lange tijd hoger dan het werkelijke rendement. Volgens de Hoge Raad is sprake van een systematisch probleem dat alleen door de wetgever kan worden opgelost. Die is  druk met het afpakken van kinderopvangtoeslagen en kampt met verouderde ICT systemen; pas over 2 jaar komt er een oplossing. Dit kan zo niet langer.   
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
            Goeie vraag. De regering duwt de hete aardappel door naar 2022, dus naar de volgende regering. Dat is derhalve geen garantie voor een oplossing. Wij hopen door middel van  systeem ontwrichtende massa bezwaren door alle Nederlanders met spaarcenten, de regering te dwingen tot onmiddellijke actie.  
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
            Absoluut. Een regering die steelt van haar burgers loopt vroeg of laat, links- of rechtsom, binnenstebuiten of buitenstebinnen, op de klippen. En daar is niemand mee gebaat.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
