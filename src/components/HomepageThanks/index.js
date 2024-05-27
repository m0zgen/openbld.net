import React from 'react';
import Link from '@docusaurus/Link';
import Translate from "@docusaurus/Translate";

const thanks = [
        {
            "name": "Greg (testing) 🚴",
            "url": "",
            "style": ""
        },
        {
            "name": "Slava.V (testing)",
            "url": "",
            "style": ""
        },
        {
            "name": "Simon.W (testing) \ud83d\udcaa",
            "url": "",
            "style": ""
        },
        {
            "name": "Sergey.M (testing)",
            "url": "",
            "style": ""
        },
        {
            "name": "Anatoly (testing) \ud83d\udcaa\u26a1",
            "url": "",
            "style": ""
        },
        {
            "name": "V B (testing)",
            "url": "",
            "style": ""
        },
        {
            "name": "Alibek.B (testing)",
            "url": "",
            "style": ""
        },
        {
            "name": "Dmitry (testing)",
            "url": "",
            "style": ""
        },
        {
            "name": "Egor.Y (testing) 🚴",
            "url": "",
            "style": ""
        },
        {
            "name": "Stanislav (aka clevergod) Istyagin \ud83d\udcaa \u26a1 🚴",
            "url": "https://www.linkedin.com/in/stanislav-istyagin/",
            "style": ""
        },
        {
            "name": "Not Saint (testing, hosting) \ud83d\udcaa 🚴",
            "url": "",
            "style": ""
        },
        {
            "name": "\u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430.\u041a (design) \u2600\ufe0f",
            "url": "https://uadd.me/artkirlisa",
            "style": ""
        },
        {
            "name": "Aslan-Im (contribute) 🚴",
            "url": "https://forum.sys-adm.in/u/crowley/summary",
            "style": ""
        },
        {
            "name": "Elizaveta M (contribute)",
            "url": "",
            "style": ""
        },
        {
            "name": "Gregory Z (contribute) \ud83d\udcaa\u26a1",
            "url": "",
            "style": ""
        },
        {
            "name": "Ruzmat (contribute) \u26a1",
            "url": "https://unihost.kz",
            "style": ""
        },
        {
            "name": "Thatskriptkid (contribute)",
            "url": "https://t.me/OrderOfSixAngles",
            "style": ""
        },
        {
            "name": "Alexandr Bespoyasko (contribute) \u26a1 🚴",
            "url": "https://alexandr.bespoyasko.kz/",
            "style": ""
        },
        {
            "name": "VadimML24 (contribute) \u26a1",
            "url": "",
            "style": ""
        },
        {
            "name": "El (testing) \ud83d\udcaa\u26a1",
            "url": "",
            "style": ""
        },
        {
            "name": "SysRoman \u2600\ufe0f",
            "url": "",
            "style": ""
        },
        {
            "name": "Andrei (werlock) \u2600\ufe0f 🚴",
            "url": "",
            "style": ""
        },
        {
            "name": "Seke t.me/asbisKZ \u26a1 \uD83D\uDE9C ☀\uFE0F 🚴",
            "url": "",
            "style": ""
        },
        {
            "name": "Alexander G ☀\uFE0F",
            "url": "",
            "style": ""
        },
        {
            "name": "Dmitry Tolkachev 🚴‍",
            "url": "https://www.linkedin.com/in/dmitry-tolkachev",
            "style": ""
        },
        {
            "name": "TeaqariaWTF 🚴‍",
            "url": "",
            "style": ""
        },
        {
            "name": "Green Duck 🚴‍",
            "url": "",
            "style": ""
        },
        {
            "name": "Bessmertnyi_poni \u26a1\u2600\ufe0f 🚴",
            "url": "",
            "style": ""
        },
        {
            "name": "LexterS999 🚴‍",
            "url": "",
            "style": ""
        }
    ];

export default function HomepageThanks() {
  return (
    <section id="thanks-section"  className="overflow-hidden py-10 px-10 dark:bg-[#070a11]">

        <div className="container mx-auto px-4 mb-10">
            <div className="flex flex-wrap -m-4">

                <div className="flex flex-col items-center justify-center w-full mb-10">
                    <h2 className="font-heading mb-6 text-4xl md:text-3xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                        <Translate
                            id="homepage.Thanks.Title">
                        + who contributed 🌟
                            </Translate>
                    </h2>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">~~~</h2>
                </div>

                        {/*Centered content*/}

                <div className="flex flex-col items-center justify-center w-full">

                    <ul className="cloud " role="navigation" aria-label="Contribute users cloud">
                        {thanks.map((user, i) => {
                                return (
                                    <li className="px-2 hover:text-green-500s" key={i}>
                                        {user.url
                                            ?
                                            <p><a className={`object-cover w-1/3 underline  ${user.style}`} href={user.url} target="_blank">{user.name}</a></p>
                                            : user.url === "" ?
                                                <p className={user.style}> {user.name} </p>
                                                : null}
                                    </li>
                                )
                            }
                        )}
                    </ul>

                </div>

                <div className="flex flex-col items-center justify-center w-full">
                    <p>2021-2022>
                        <strong> See <a href="/docs/donation/#contribute-log" className="justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline">Contribute Log</a>
                    </strong><br/>
                        2023-2024> <strong className="has-text-warning">
                        Test. Feedback. Help: 🚴
                            {/*Rank: ⭐️🚀*/}
                    </strong>.
                    </p>

                </div>

                <div className="flex flex-col items-center justify-center w-full">


                    <Link
                        className="justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        to="/docs/donation"
                    >
                      <span>
                          <Translate
                              id="homepage.Thanks.AssistLink">
                          How you can assist to project?
                          </Translate>
                      </span>
                    </Link>

                </div>

            </div>
        </div>
    </section>

  );
}
