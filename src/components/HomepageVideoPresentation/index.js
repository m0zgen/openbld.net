import React from 'react';
import Link from '@docusaurus/Link';
import YoutubeEmbed from "../ComponentYoutubeEmbed";
import Translate from '@docusaurus/Translate';


export default function HomepageCompareAdaAndRic() {
    return (
        <section className="py-10 bg-gray-50 overflow-hidden dark:bg-[#070a11]">
            <div className="container mx-auto px-4">
                <div className="py-16 px-8 md:px-16 bg-white dark:bg-[#070a11] rounded-3xl">
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8 bg-gray-100">
                            <YoutubeEmbed embedId="cp01xyEpUm4" />
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <div className="md:max-w-md">
                              <span className="inline-block mb-5 text-sm text-blue-500 dark:text-green-300 font-bold uppercase tracking-widest">
                                  <Translate
                                      id="homepage.VideoPresentation.TypeTile">
                                  Demonstration
                                  </Translate>
                              </span>
                                <h2 className="font-heading mb-4 text-4xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                                    <Translate
                                        id="homepage.VideoPresentation.HeaderTitleMain">
                                    OpenBLD.net
                                    </Translate>
                                    <span className="text-blue-500 dark:text-gray-400">
                                    <Translate
                                        id="homepage.VideoPresentation.HeaderTitleGrayed"> Effect
                                    </Translate>
                                    </span></h2>
                                <p className="mb-16 font-bold dark:text-gray-900">
                                    <Translate
                                        id="homepage.VideoPresentation.HeaderSubTitle">
                                    Reduce the RAM, CPU and heat consumption of your computer or laptop
                                    </Translate>
                                </p>
                                <div className="flex flex-wrap -m-2">
                                    <p>
                                        <Translate
                                            id="homepage.VideoPresentation.Description">
                                        Subtitles: English, Qazaq, Russian, Spanish, Turkish, Vietnamese
                                        </Translate>
                                        </p>

                                </div>
                                <div className="flex flex-col items-center justify-center w-full">


                                    <Link
                                        className="justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        to="/docs/category/setup-browsers"
                                    >
                                      <span>
                                          <Translate
                                              id="homepage.VideoPresentation.LinkToSetup">
                                          Setup any for your favorite browser
                                          </Translate>
                                      </span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
