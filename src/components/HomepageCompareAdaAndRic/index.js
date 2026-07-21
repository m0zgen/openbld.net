import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';


export default function HomepageCompareAdaAndRic() {
  return (
      <section className="py-10 bg-gray-50 overflow-hidden dark:bg-[#070a11]">
          <div className="container mx-auto px-4">
              <div className="py-16 px-8 md:px-16 bg-white dark:bg-[#070a11] rounded-3xl">
                  <div className="flex flex-wrap -m-8">
                      <div className="w-full md:w-1/2 p-8 bg-gray-100">
                          <img
                              src="/img/openbld-ada-ric-adminforge-test.webp"
                              alt="OpenBLD.net DNS comparison test"
                              width="610"
                              height="406"
                              loading="lazy"
                              decoding="async"
                              className="mx-auto"
                          />
                      </div>
                      <div className="w-full md:w-1/2 p-8">
                          <div className="md:max-w-md">
                              <span className="inline-block mb-5 text-sm text-blue-500 dark:text-green-300 font-bold uppercase tracking-widest">
                              <Translate
                                  id="homepage.CompareAdaAndRic.TypeTile"
                                  description="The label of type of the Chrome Extension (Extension)">
                                  Optimization
                              </Translate>
                              </span>
                              <h2 className="font-heading mb-4 text-4xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                                  <Translate
                                      id="homepage.CompareAdaAndRic.HeaderTitleMain">
                                  Reduce your
                                  </Translate>
                                      <span className="text-blue-500 dark:text-gray-400">
                                          <Translate
                                              id="homepage.CompareAdaAndRic.HeaderTitleGrayed"> traffic
                                          </Translate>
                                      </span></h2>
                              <p className="mb-16 font-bold dark:text-gray-900">
                                  <Translate
                                      id="homepage.CompareAdaAndRic.HeaderSubTitle">
                                      Break out of the “filter bubble” — take back control.
                                  </Translate>
                                  </p>
                              <div className="flex flex-wrap -m-2">
                                  <p>
                                      <Translate
                                          id="homepage.CompareAdaAndRic.Description">
                                          Control what reaches your device. With OpenBLD.net DNS, you reduce ad load, tracking scripts, and data profiling — for a cleaner, faster, more private experience.
                                      </Translate>
                                      </p>
                              </div>

                              <div className="flex flex-col items-center justify-center w-full">


                                  <Link
                                      className="justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                      to="/docs/overwiew/how-it-works"
                                  >
                                      <span>
                                          <Translate
                                              id="homepage.CompareAdaAndRic.LinkToSetup">
                                          How it works
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
