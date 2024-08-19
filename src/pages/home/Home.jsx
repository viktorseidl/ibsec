import React, { useEffect } from 'react'
import Testsvg from '../../images/svgs/Testsvg'
import IBlogo from '../../images/logos/IBlogo'
import BinaryAnimation from '../../images/svgs/BinaryAnimation'
import CountUp from 'react-countup';
import PersonalData from './../../images/generalPage/Home/Personal.jpg'
import PersonalData1 from './../../images/generalPage/Home/Personal1.jpg'
import PersonalData2 from './../../images/generalPage/Home/Personal2.jpg'

const Home = () => {
     
  return (
    <div className='md:mt-28 lgo:mt-28 osm:mt-28 mt-20 md:w-5/6 lgo:w-full osm:w-full w-full '> 
        <section className=' relative ring-1 dark:ring-gray-600 ring-gray-400 w-full '>
          <BinaryAnimation />
          <div className='px-8 w-full absolute inset bottom-0 dark:text-white text-[#1e293b] left-0'>
            <div className='w-full grid grid-cols-3 items-center justify-items-center gap-10 mb-6'>
              <div className='w-5/6 flex flex-col items-center justify-center gap-4'>
                <div className='text-center font-bold Exo text-4xl'>
                  <CountUp end={1476} duration={5} />
                </div>
                <div className='w-full border-t dark:border-white/40 border-[#1e293b] pt-4 uppercase text-center'>User Accounts</div>
              </div>
              <div className='w-5/6 flex flex-col items-center justify-center gap-4'>
              <div className='text-center font-bold Exo text-4xl'>
              <CountUp end={123000000} duration={5} />
              </div>
              <div className='w-full border-t dark:border-white/40 border-[#1e293b] pt-4 uppercase text-center'>Money generated</div>
              </div>
              <div className='w-5/6 flex flex-col items-center justify-center gap-4'>
              <div className='text-center font-bold Exo text-4xl'>
              <CountUp end={417899} duration={5} />
              </div>
              <div className='w-full border-t dark:border-white/40 border-[#1e293b] pt-4 uppercase text-center'>Daily Data-Requests</div>
              </div>
            </div>
          </div>
          </section>
        <section id='mission' className='ring-1 ring-gray-600 w-full mt-6 dark:bg-stone-950 bg-white/90  scroll-ms-4 scroll-mt-24 grid grid-cols-2 gap-x-5 gap-y-24 px-10 py-24'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='w-full p-8 font-[Inter] uppercase dark:text-orange-700 text-[#4a2758] text-4xl font-bold'>Willkommen</h1>
        <p className='py-2 px-8  font-[Inter] dark:text-white text-[#1e293b] text-2xl '>IB-Secure hat es sich zur Aufgabe gemacht, die Eigentumsrechte an persönlichen Daten zu den rechtmäßigen Besitzern zurückzubringen - nämlich Ihnen. </p> 
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center'><img src={PersonalData} className=' w-5/6 dark:saturate-150 dark:contrast-150 dark:brightness-75 rounded opacity-90'  /></div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
        <img src={PersonalData1}  className='w-5/6 dark:saturate-150 dark:contrast-150 dark:brightness-75 opacity-90' />
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='w-full p-8 font-[Inter] uppercase dark:text-orange-700 text-[#4a2758] text-4xl font-bold'>Unsere Mission</h1> 
        <p className='py-2 px-8  font-[Inter] dark:text-white text-[#1e293b] text-2xl'>Unsere Mission ist es, Ihnen vollständigen Datenschutz zu garantieren. Durch ein innovatives Konzept, das auf Blockchain-Technologie und fortschrittlicher Verschlüsselung basiert, bieten wir Ihnen umfassenden Schutz und volle Kontrolle über Ihre persönlichen Daten. Ihre Daten gehören Ihnen – nicht den Plattformen, die sie speichern und für finanzielle Zwecke nutzen. Es ist an der Zeit, den wahren Wert Ihrer Daten zu erkennen. Wir setzen uns für ein gerechteres Internet ein, in dem die Datenhoheit bei Ihnen liegt und Sie von Ihren Daten profitieren. </p>
        <p className='py-2 px-8  font-[Inter] dark:text-white text-[#1e293b] text-2xl'>In der heutigen digitalen Welt sind persönliche Daten von unschätzbarem Wert. Unternehmen wie Google, Amazon und Facebook nutzen die Daten ihrer Nutzer als eine der wichtigsten Einnahmequellen. Diese Daten, die Sie täglich durch Ihre Online-Aktivitäten erzeugen, werden gesammelt, analysiert und oft ohne Ihr Wissen oder Ihre Zustimmung verkauft. Doch wie wird der Preis für diese Daten festgelegt, und warum ist das so problematisch?</p>
        </div>
        <div>
        <h1 className='w-full p-8 font-[Inter] uppercase dark:text-orange-700 text-[#4a2758] text-4xl font-bold'>Der Wert Ihrer Daten</h1> 
        <p className='py-2 px-8  font-[Inter] dark:text-white text-[#1e293b] text-2xl'>Der Preis für persönliche Daten setzt sich aus verschiedenen Faktoren zusammen, darunter Ihre demografischen Merkmale, Ihr Verhalten im Internet und Ihre Kaufgewohnheiten. Je genauer und umfassender die Daten sind, desto wertvoller sind sie für Unternehmen. Sie nutzen diese Informationen, um gezielte Werbung zu schalten, Produkte zu empfehlen oder sogar Ihre Vorlieben und Interessen zu beeinflussen. In dieser Datenökonomie sind es jedoch oft die großen Akteure, die den Löwenanteil der Gewinne einstreichen, während die eigentlichen Eigentümer der Daten - die Nutzer - leer ausgehen.</p>
        <h1 className='w-full p-8 font-[Inter] uppercase dark:text-orange-700 text-[#4a2758] text-4xl font-bold'>Monetärer Wert pro Benutzer</h1> 
        <p className='py-2 px-8  font-[Inter] dark:text-white text-[#1e293b] text-2xl'>Der konkrete Preis, den Unternehmen für persönliche Daten zahlen, kann stark variieren. Hier sind einige ungefähre Werte:
          <ul className='my-4 list-inside list-disc'>
            <li className='mt-2'><u>Basisdemografische Daten:</u> etwa 0,50 bis 2 US-Dollar pro Benutzer.</li>
            <li className='mt-2'><u>Verhaltensdaten:</u> 5 bis 10 US-Dollar pro Benutzer, besonders wertvoll, wenn sie für gezielte Werbung genutzt werden.</li>
            <li className='mt-2'><u>Sensiblen Daten:</u> Bei Gesundheitsdaten oder Finanzdaten kann der Preis bis zu 100 US-Dollar oder mehr pro Benutzer betragen.</li>
          </ul>
          Unternehmen wie Facebook oder Google verdienen pro Benutzer jährlich etwa 20 bis 100 US-Dollar durch Werbung, basierend auf den von ihnen gesammelten Daten.
        </p>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
        <img src={PersonalData2} className='w-5/6 dark:saturate-150 dark:contrast-150 dark:brightness-75 opacity-90'  />
        </div>
        
        </section>
        <section className='hidden ring-1 ring-gray-600 w-full mt-6 dark:bg-stone-800 bg-white/90'>
        <div>
        <h1 className='p-8 Montserrat dark:text-white text-[#1e293b] text-3xl'>Wie IB-Secure funktioniert</h1>
        <p className='p-8 Inter dark:text-white text-[#1e293b] text-xl'>IB-Secure bietet Ihnen einen persönlichen Freigabebereich, über den Sie selbst entscheiden können, wem Sie den Zugriff auf Ihre Daten erlauben. Dieser Bereich ist durch eine Kombination aus Blockchain-Technologie und sieben hochentwickelten Verschlüsselungsalgorithmen gesichert. Das bedeutet, dass niemand ohne Ihre ausdrückliche Zustimmung auf Ihre Daten zugreifen kann. Jeder Zugriff auf Ihre Daten wird transparent und unveränderbar in der Blockchain dokumentiert, sodass Sie immer genau wissen, wer was mit Ihren Daten macht.</p>
        <p className='p-8 Inter dark:text-white text-[#1e293b] text-xl'>Durch die Nutzung von IB-Secure geben Sie die Kontrolle über Ihre Daten nicht an Dritte ab. Stattdessen behalten Sie das Eigentum und entscheiden selbst, wie und wann Ihre Daten verwendet werden dürfen. Damit setzen wir ein starkes Zeichen für den Schutz der Privatsphäre und die Wiederherstellung der Eigentumsrechte in der digitalen Welt.</p>
        <p className='p-8 Inter dark:text-white text-[#1e293b] text-xl'>IB-Secure steht für eine Zukunft, in der Ihre Daten Ihnen gehören und nicht den großen Tech-Konzernen. Sie verdienen es, von den wertvollen Informationen, die Sie jeden Tag generieren, zu profitieren – und nicht nur als Produkt behandelt zu werden. Mit IB-Secure setzen wir diese Vision in die Tat um.</p>
        </div>
        </section> 
    <footer className=' min-h-[250px] grid grid-cols-5 w-full mt-6 ring-1 ring-gray-600  dark:bg-stone-950 bg-white/90'>
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='w-1/3'>
      <IBlogo />
      </div>
    </div>
    <div className='w-full dark:text-white text-[#1e293b]  h-full col-span-4 flex flex-row items-end justify-end p-2'>© {new Date().getFullYear()} <a className='ml-2 font-[Exo]'>IB-SECURE</a>, All rights reserved.</div>
    </footer>
    </div>
  )
}

export default Home