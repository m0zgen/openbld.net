import React from 'react';
import Link from '@docusaurus/Link';

export default function HomepageCompareAdaAndRic() {
  return (
      <section className="py-10 bg-gray-50 overflow-hidden dark:bg-[#070a11]">
          <div className="container mx-auto px-4">
              <div className="py-16 px-8 md:px-16 bg-white dark:bg-[#070a11] rounded-3xl">
                  <div className="flex flex-wrap -m-8">
                      <div className="w-full md:w-1/2 p-8 bg-gray-100">
                          <img className="mx-auto md:ml-0 border-solid border-2 border-sky-500" src="img/openbld--blocker-chrome-extension.jpg" alt="OpenBLD.net Chrome Based Broewsers Extension"/></div>
                      <div className="w-full md:w-1/2 p-8">
                          <div className="md:max-w-md">
                              <span className="inline-block mb-5 text-sm text-blue-500 dark:text-green-300 font-bold uppercase tracking-widest">
                                  Extension</span>
                              <h2 className="font-heading mb-4 text-4xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                                  OpenBLD.net in your <span className="text-blue-500 dark:text-gray-400">Browser</span>
                              </h2>
                              <p className="mb-16 font-bold dark:text-gray-900">
                                  Additional extensions for OpenBLD.net service</p>
                              <div className="flex flex-wrap -m-2">
                                  <p>*<Link to="/docs/category/setup-browsers/">Setup</Link> is required before using the Browser extension</p>

                              </div>

                              <div className="flex flex-col items-center justify-center w-full">
                                  <a
                                      className="justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                      href="https://chromewebstore.google.com/detail/openbldnet-blocker/jjpjcmckhkcefefgbgghomdhcbfmklea"
                                      target="_blank">
                                      <span>Chrome web store</span>
                                  </a>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

  );
}
