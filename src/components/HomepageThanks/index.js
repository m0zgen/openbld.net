import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Translate from "@docusaurus/Translate";

const thanks = [
    {
        "name": "Серик Туребек ⚡ 🚜 ☀️ 🚴🔥",
        "url": "https://www.linkedin.com/in/serik-turebek-enterprise-storage",
        "style": ""
    },
    {
        "name": "Stanislav (aka clevergod) Istyagin 💪 ⚡ 🚴⭐🔥",
        "url": "https://www.linkedin.com/in/stanislav-istyagin/",
        "style": ""
    },
    {
        "name": "Not Saint (testing, hosting) 💪 🚴⭐🚀",
        "url": "",
        "style": ""
    },
    {
        "name": "Елизавета.К (design) ☀️ 🎨",
        "url": "https://uadd.me/artkirlisa",
        "style": ""
    },
    {
        "name": "Aslan-Im (contribute) 🚴",
        "url": "https://forum.sys-adm.in/u/crowley/summary",
        "style": ""
    },
    {
        "name": "Ruzmat (contribute) ⚡🚀",
        "url": "https://unihost.kz",
        "style": ""
    },
    {
        "name": "Thatskriptkid (contribute)",
        "url": "https://t.me/OrderOfSixAngles",
        "style": ""
    },
    {
        "name": "Alexandr Bespoyasko (contribute) ⚡ 🚴☀️",
        "url": "https://alexandr.bespoyasko.kz/",
        "style": ""
    },
    {
        "name": "El (testing) 💪⚡",
        "url": "",
        "style": ""
    },
    {
        "name": "Andrei (werlock) ☀️ 🚴☀️",
        "url": "",
        "style": ""
    },
    {
        "name": "Bessmertnyi_poni ⚡☀️ 🚴",
        "url": "",
        "style": ""
    },
    {
        "name": "Timur Shaikhin 🚴‍⚡",
        "url": "https://astlab.kz/",
        "style": ""
    },
    {
        "name": "Manas Kumar 🚴‍⭐",
        "url": "",
        "style": ""
    },
    {
        "name": "Alexander Kolnik ⭐‍",
        "url": "",
        "style": ""
    },
    {
        "name": "Almaz Elemanov ☀️ ⭐",
        "url": "https://edk-it.com/",
        "style": ""
    },
    {
        "name": "Bakhtiyar Ibrayev ⚡🚀",
        "url": "https://t.me/bibrayev",
        "style": ""
    },
    {
        "name": "Alexander Kruglikov ☀️ ⭐",
        "url": "https://kruglikov.info/",
        "style": ""
    },
    {
        "name": "Doskhat Abdrassilov 🚀",
        "url": "https://www.linkedin.com/in/doskhat-abdrassilov-616887321",
        "style": ""
    },
    {
        "name": "Alex Spin ☀️",
        "url": "",
        "style": ""
    },
    {
        "name": "SysRoman ⚡☀️ 🚴",
        "url": "",
        "style": ""
    },
    {
        "name": "Alibek Bekenov ⚡ 🚜 ☀️ 🚴🔥",
        "url": "",
        "style": ""
    },
    {
        "name": "Matvey ⚡💪 🚴",
        "url": "",
        "style": ""
    },
    {
        "name": "Binali Rustamov 🔥",
        "url": "https://uz.linkedin.com/in/binalirustamov",
        "style": ""
    },
    {
        "name": "Amir Y. ⭐",
        "url": "",
        "style": ""
    },
    {
        "name": "Arman Saparov ⭐",
        "url": "",
        "style": ""
    },
    {
        "name": "Dauren Bazarbekov 💪☀️",
        "url": "https://rteam.kz/",
        "style": ""
    },
    {
        "name": "vik32 Bit ⭐",
        "url": "",
        "style": ""
    },
];

const buildYear = new Date().getFullYear();

export default function HomepageThanks() {
    // В стейте используем дефолтный 2026 год, который отобразится при серверной сборке
    const [year, setYear] = useState(buildYear);

    useEffect(() => {
        // Как только компонент «оживает» в браузере, берем реальный текущий год
        setYear(new Date().getFullYear());
    }, []);

    return (
        <section id="thanks-section" className="overflow-hidden py-10 px-10 dark:bg-[#070a11]">
            <div className="container mx-auto px-4 mb-10">
                <div className="flex flex-wrap -m-4">

                    <div className="flex flex-col items-center justify-center w-full mb-10">
                        <h2 className="font-heading mb-6 text-4xl md:text-3xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                            <Translate id="homepage.Thanks.Title">
                                + contribution 🎠
                            </Translate> {year} {/* Заменено на year */}
                        </h2>
                        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">~~~</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <ul className="cloud " role="navigation" aria-label="Contribute users cloud">
                            {thanks.map((user, i) => {
                                return (
                                    <li className="px-2 hover:text-green-500s" key={i}>
                                        {user.url ? (
                                            <p>
                                                <a className={`object-cover w-1/3 underline ${user.style}`} href={user.url} target="_blank" rel="noreferrer">
                                                    {user.name}
                                                </a>
                                            </p>
                                        ) : user.url === "" ? (
                                            <p className={user.style}> {user.name} </p>
                                        ) : null}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <p>
                            2021-2024
                            <strong> See <a href="/docs/donation/#contribute-log" className="justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline">Contribute Log</a></strong>
                            <br />
                            2024-{year} {/* Заменено на year */}
                            <strong className="has-text-warning">
                                <br />Test. Feedback. Help: ⭐. <br /> Contribute: ☀️. Hosting: ️🚀. Design: 🎨. Boost: 🔥. <br />
                            </strong>
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <Link
                            className="justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            to="/docs/donation"
                        >
                            <span>
                                <Translate id="homepage.Thanks.AssistLink">
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
