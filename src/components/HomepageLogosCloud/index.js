import React from 'react';
import Translate from '@docusaurus/Translate';

const logos = [
        { name: "JetBrains", url: "https://jb.gg/OpenSourceSupport", src: 'img/logos/jetbrains.png', style: ""},
        { name: "Sys-Admin Lab", url: "https://lab.sys-adm.in", src: 'img/logos/lab.sys-adm.in-logo.png', style: ""},
        { name: "Unihost.kz", url: "https://unihost.kz/account/aff.php?aff=17", src: 'img/logos/unihost_kz.jpg', style: ""},
        { name: "GoHost.kz", url: "https://gohost.kz/", src: 'img/logos/gohost_kz.jpg', style: ""},
        { name: "UptimeRobot", url: "https://uptimerobot.com/?rid=78534763f4713b", src: 'img/logos/uptimerobot.jpg', style: ""},
        { name: "ClouDNS", url: "https://www.cloudns.net/", src: 'img/logos/cloudns-logo.png', style: ""},
        { name: "Gcore", url: "https://gcore.com/", src: 'img/logos/g-core-labs.png', style: ""},
        { name: "PowerDMARC", url: "https://powerdmarc.com/", src: 'img/logos/powerdmarc-logo.png', style: "logo-bg-white"},
        { name: "DigitalOcean", url: "https://m.do.co/c/42011b938fe6", src: 'img/logos/digitalocean-logo.png', style: ""},
        // { name: "Netdata", url: "https://www.netdata.cloud/?utm_campaign=technical&utm_source=content&utm_medium=website&utm_content=openbld-dns", src: 'img/logos/netdata-logo.jpeg', style: ""},
        { name: "Veesp Hosting Service", url: "https://secure.veesp.com/?affid=954", src: 'img/logos/veesp-logo.png', style: "logo-bg-white"},
        { name: "AlphaVPS Hosting Service", url: "https://alphavps.com/clients/aff.php?aff=657", src: 'img/logos/alpha-vps-logo.png', style: "logo-bg-white"},
        { name: "AST Cyber Lab", url: "https://astlab.kz/", src: 'img/logos/ast-cyber-lab-logo.png', style: "logo-bg-white"},
        { name: "AppSecFest Almaty", url: "https://appsecfest.kz/", src: 'img/logos/app-sec-fest-logo.png', style: ""},
        { name: "SmartApps Almaty", url: "https://smartapps.kz/", src: 'img/logos/smartapps-kz-logo.png', style: "logo-bg-white"},
        { name: "Help to growth to OpenBLD.net", url: "#", src: 'img/logos/splash-logo.jpg', style: ""},
    ];

export default function HomepageThanks() {
  return (
      <section id="company-logos" className="py-10 bg-gray-50 overflow-hidden dark:bg-[#070a11]">
          <div class="container mx-auto px-4">

              <div className="flex flex-col items-center justify-center w-full mb-10">
                  <h2 className="font-heading mb-6 text-4xl md:text-3xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                      <Translate
                          id="homepage.LogosCloud.Title">
                      + who helps to the growth 🚀
                      </Translate>
                  </h2>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">~~~</h2>
              </div>

              <div class="bg-white dark:bg-[#070a11]">

                  <div id="clientlogosrow" className="logotypes">
                      {/*For styling see custom.css stylesheet*/}
                      {logos.map((logo, i) => {
                              return (

                                  <div key={i}>
                                      <a href={logo.url} target="_blank" rel="noreferrer">
                                          {/*<img className={`mx-auto bg-gray-50 ${logo.style}`} src={logo.src} alt={logo.name}/>*/}
                                          <img src={logo.src} className={`imagessmaller ${logo.style}`}/>
                                      </a>
                                  </div>

                              )
                          }
                      )}

                  </div>


                  {/*<div className="flex flex-wrap items-center">*/}

                  {/*    {logos.map((logo, i) => {*/}
                  {/*            return (*/}

                  {/*                <div className="w-full sm:w-1/3 lg:w-1/5 p-2" key={i}>*/}
                  {/*                    <a href={logo.url} target="_blank" rel="noreferrer">*/}
                  {/*                        <img className={`mx-auto bg-gray-50 ${logo.style}`} src={logo.src} alt={logo.name}/>*/}
                  {/*                    </a>*/}
                  {/*                </div>*/}

                  {/*            )*/}
                  {/*        }*/}
                  {/*    )}*/}

                  {/*</div>*/}
              </div>
          </div>
      </section>

  );
}
