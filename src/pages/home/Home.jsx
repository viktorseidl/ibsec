import React, { useEffect } from 'react'
import Testsvg from '../../images/svgs/Testsvg'
import IBlogo from '../../images/logos/IBlogo'
import BinaryAnimation from '../../images/svgs/BinaryAnimation'
import CountUp from 'react-countup';

const Home = () => {
     
  return (
    <div className='md:mt-28 lgo:mt-28 osm:mt-28 mt-20 w-5/6 '> 
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
        <section className='ring-1 ring-gray-600 w-full mt-6 dark:bg-stone-800 bg-white/90'>
        <h1 className='p-8 Montserrat dark:text-white text-[#1e293b] text-3xl'>The Mission</h1>
        <p className='p-8 Inter dark:text-white text-[#1e293b] text-xl'>IB-Secure hat es sich zur Aufgabe gemacht, die Eigentumsrechte an persönlichen Daten zu den rechtmäßigen Besitzern zurückzubringen - nämlich Ihnen. Mit unserer Plattform haben Sie die volle Kontrolle darüber, wer Zugriff auf Ihre Daten hat und wofür diese genutzt werden dürfen.</p>
        <p className='p-8 Inter dark:text-white text-[#1e293b] text-xl'>In der heutigen digitalen Welt sind persönliche Daten von unschätzbarem Wert. Unternehmen wie Google, Amazon und Facebook nutzen die Daten ihrer Nutzer als eine der wichtigsten Einnahmequellen. Diese Daten, die Sie täglich durch Ihre Online-Aktivitäten erzeugen, werden gesammelt, analysiert und oft ohne Ihr Wissen oder Ihre Zustimmung verkauft. Doch wie wird der Preis für diese Daten festgelegt, und warum ist das so problematisch?</p>
        <h1 className='p-8 Montserrat dark:text-white text-[#1e293b] text-3xl'>Der Wert Ihrer Daten</h1>
        <p className='p-8 Inter dark:text-white text-[#1e293b] text-xl'>Der Preis für persönliche Daten setzt sich aus verschiedenen Faktoren zusammen, darunter Ihre demografischen Merkmale, Ihr Verhalten im Internet und Ihre Kaufgewohnheiten. Je genauer und umfassender die Daten sind, desto wertvoller sind sie für Unternehmen. Sie nutzen diese Informationen, um gezielte Werbung zu schalten, Produkte zu empfehlen oder sogar Ihre Vorlieben und Interessen zu beeinflussen. In dieser Datenökonomie sind es jedoch oft die großen Akteure, die den Löwenanteil der Gewinne einstreichen, während die eigentlichen Eigentümer der Daten - die Nutzer - leer ausgehen.</p>
        <h1 className='p-8 Montserrat dark:text-white text-[#1e293b] text-3xl'>Wie IB-Secure funktioniert</h1>
        <p className='p-8 Inter dark:text-white text-[#1e293b] text-xl'>IB-Secure bietet Ihnen einen persönlichen Freigabebereich, über den Sie selbst entscheiden können, wem Sie den Zugriff auf Ihre Daten erlauben. Dieser Bereich ist durch eine Kombination aus Blockchain-Technologie und sieben hochentwickelten Verschlüsselungsalgorithmen gesichert. Das bedeutet, dass niemand ohne Ihre ausdrückliche Zustimmung auf Ihre Daten zugreifen kann. Jeder Zugriff auf Ihre Daten wird transparent und unveränderbar in der Blockchain dokumentiert, sodass Sie immer genau wissen, wer was mit Ihren Daten macht.</p>
        <p className='p-8 Inter dark:text-white text-[#1e293b] text-xl'>Durch die Nutzung von IB-Secure geben Sie die Kontrolle über Ihre Daten nicht an Dritte ab. Stattdessen behalten Sie das Eigentum und entscheiden selbst, wie und wann Ihre Daten verwendet werden dürfen. Damit setzen wir ein starkes Zeichen für den Schutz der Privatsphäre und die Wiederherstellung der Eigentumsrechte in der digitalen Welt.</p>
        <p className='p-8 Inter dark:text-white text-[#1e293b] text-xl'>IB-Secure steht für eine Zukunft, in der Ihre Daten Ihnen gehören und nicht den großen Tech-Konzernen. Sie verdienen es, von den wertvollen Informationen, die Sie jeden Tag generieren, zu profitieren – und nicht nur als Produkt behandelt zu werden. Mit IB-Secure setzen wir diese Vision in die Tat um.</p>
        </section>
        <section className='ring-1 ring-gray-600 w-full mt-6 dark:bg-stone-800 bg-white/90'>
        <svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" fill="none"> 
  <rect width="800" height="400" fill="#0A0A23"/>
 
  <path d="M100 250 Q50 200 100 150 T200 200 T300 160 Q350 100 400 160 T500 180 Q600 200 650 140 T700 200 Q750 250 700 300 T650 250 Q600 300 550 280 T450 300 T400 240 Q300 220 200 240 T100 250 Z" 
        stroke="#3B82F6" fill="none" stroke-width="2"/> 
  <circle cx="200" cy="160" r="8" fill="lime">
    <animate attributeName="fill" values="lime;blue;lime" dur="2s" repeatCount="indefinite" />
  </circle>
  
  <circle cx="350" cy="180" r="8" fill="lime">
    <animate attributeName="fill" values="lime;blue;lime" dur="2s" repeatCount="indefinite" begin="0.5s" />
  </circle>

  <circle cx="500" cy="140" r="8" fill="lime">
    <animate attributeName="fill" values="lime;blue;lime" dur="2s" repeatCount="indefinite" begin="1s" />
  </circle>

  <circle cx="650" cy="200" r="8" fill="lime">
    <animate attributeName="fill" values="lime;blue;lime" dur="2s" repeatCount="indefinite" begin="1.5s" />
  </circle>
 
  <text x="120" y="50" fill="lime" font-family="monospace" font-size="20">
    101010
    <animate attributeName="text" values="101010;110011;101010" dur="3s" repeatCount="indefinite" />
  </text>

  <text x="620" y="70" fill="lime" font-family="monospace" font-size="20">
    110011
    <animate attributeName="text" values="110011;101010;110011" dur="3s" repeatCount="indefinite" />
  </text>

  <text x="320" y="320" fill="lime" font-family="monospace" font-size="20">
    011011
    <animate attributeName="text" values="011011;100110;011011" dur="3s" repeatCount="indefinite" />
  </text>
  
  <text x="720" y="350" fill="lime" font-family="monospace" font-size="20">
    100101
    <animate attributeName="text" values="100101;011010;100101" dur="3s" repeatCount="indefinite" />
  </text>
</svg>
        </section>
        <section className='ring-1 ring-gray-600 w-full mt-6 dark:bg-stone-800 bg-white/90'>Team</section>
    <footer className=' min-h-[300px] w-full mt-6 dark:bg-stone-800 bg-white/90'>
    jhjk
    </footer>
    </div>
  )
}

export default Home