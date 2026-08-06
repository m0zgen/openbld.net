import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';


export default function HomepageCompareAdaAndRic() {
  return (
      <section className="py-10 bg-gray-50 overflow-hidden dark:bg-[#070a11]">
          {/*URLhaus*/}
          <div className="container mx-auto px-4">
              <div className="py-16 px-8 bg-white rounded-3xl dark:bg-[#070a11]">
                  <div className="flex flex-wrap -m-8">
                      <div className="w-full md:w-1/2 p-8">
                          <div className="md:max-w-lg">
                              <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                                  <Translate
                                      id="homepage.FeatureList.URLhaus.Title">
                                      URLhaus Statistics
                                  </Translate>
                              </h2>
                              <p className="mb-8 text-xl">
                                  <a href="https://urlhaus.abuse.ch/" target="_blank">URLhaus </a>
                                  <Translate
                                      id="homepage.FeatureList.URLhaus.Subtitle">
                                      is a platform from
                                  </Translate>
                                  <a href="https://abuse.ch" target="_blank"> abuse.ch </a> &
                                  <a href="https://spamhaus.org" target="_blank"> Spamhaus </a>
                                  <Translate
                                      id="homepage.FeatureList.URLhaus.Subtitle2">
                                      dedicated to sharing malicious
                                      URLs that are being used for malware distribution.
                                  </Translate>
                              </p>
                              <p className="mb-8 text-xl">
                                  <Translate
                                      id="homepage.FeatureList.URLhaus.Subtitle3">
                                      With this intelligence, gain insights into malware behavior, to help identify,
                                      track, and mitigate against malware and botnet-related cyber threats.
                                  </Translate>
                              </p>
                              <p className="mb-8 text-xl">
                                  <Translate
                                      id="homepage.FeatureList.URLhaus.Subtitle4">
                                      Security shouldn't be a checkbox — it should be measurable.
                                      OpenBLD.net is focused on real threat prevention, not just ad filtering.
                                  </Translate>
                              </p>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 p-8">
                          <div className="w-full p-8 bg-gray-100">
                              <img
                                  src="/img/openbld-site-cover-urlhaus.webp"
                                  alt="OpenBLD.net URLhaus integration"
                                  width="610"
                                  height="680"
                                  loading="lazy"
                                  decoding="async"
                                  className="responsive-image mx-auto"
                              />
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
      </section>

  );
}
