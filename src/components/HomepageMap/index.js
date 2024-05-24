import React from 'react';
import Link from '@docusaurus/Link';
import Translate from "@docusaurus/Translate";

export default function HomepageMap() {
  return (



    <section id="test-map-section" className="overflow-hidden py-10 px-10 dark:bg-[#070a11]">

        <div className="container mx-auto px-4 mb-10">
            <div className="flex flex-wrap -m-4">

                <div className="flex flex-col items-center justify-center w-full mb-10">
                    {/*<h2 className="font-heading mb-6 text-4xl md:text-3xl text-gray-900 dark:text-gray-200 font-black tracking-tight">*/}
                    {/*    <Translate*/}
                    {/*        id="homepage.Map.Title">*/}
                    {/*    Points of Presence*/}
                    {/*        </Translate>*/}
                    {/*</h2>*/}
                </div>


                <div className="flex flex-col items-center justify-center w-full">

                    <div class="map__image">
                        <a href="#" id="japan" class="map__link dot"></a>
                        <a href="#" id="kazakhstan_almaty" class="map__link dot"></a>
                        <a href="#" id="kazakhstan_karagandy_1" class="map__link dot"></a>
                        <a href="#" id="kazakhstan_karagandy_2" class="map__link dot"></a>
                        <a href="#" id="singapore" class="map__link dot"></a>
                        <a href="#" id="bulgaria" class="map__link dot"></a>
                        <a href="#" id="latvia" class="map__link dot"></a>
                        <a href="#" id="germany_1" class="map__link dot"></a>
                        <a href="#" id="germany_2" class="map__link dot"></a>
                        <a href="#" id="germany_3" class="map__link dot"></a>
                        <a href="#" id="germany_4" class="map__link dot"></a>
                        <a href="#" id="germany_5" class="map__link dot"></a>
                        <a href="#" id="netherlands" class="map__link dot"></a>
                    </div>

                </div>

            </div>
        </div>
    </section>

  );
}
