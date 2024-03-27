import React from 'react';
import Link from '@docusaurus/Link';
import YoutubeEmbed from "../ComponentYoutubeEmbed";

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
                                  Demonstration</span>
                                <h2 className="font-heading mb-4 text-4xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                                    OpenBLD.net <span className="text-blue-500 dark:text-gray-400">Effect</span></h2>
                                <p className="mb-16 font-bold dark:text-gray-900">
                                    Reduce the RAM, CPU and heat consumption of your computer or laptop
                                </p>
                                <div className="flex flex-wrap -m-2">
                                    <p>Subtitles: English, Kazakh, Russian, Spanish, Turkish, Vietnamese</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
