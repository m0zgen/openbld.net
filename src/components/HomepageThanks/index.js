import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

const thanks = [
    {
        name: 'Серик Туребек ⚡ 🚜 ☀️ 🚴🔥',
        url: 'https://www.linkedin.com/in/serik-turebek-enterprise-storage',
        style: '',
    },
    {
        name: 'Stanislav (aka clevergod) Istyagin 💪 ⚡ 🚴⭐🔥',
        url: 'https://www.linkedin.com/in/stanislav-istyagin/',
        style: '',
    },
    {
        name: 'Not Saint (testing, hosting) 💪 🚴⭐🚀',
        url: '',
        style: '',
    },
    {
        name: 'Елизавета.К (design) ☀️ 🎨',
        url: 'https://uadd.me/artkirlisa',
        style: '',
    },
    {
        name: 'Aslan-Im (contribute) 🚴',
        url: 'https://forum.sys-adm.in/u/crowley/summary',
        style: '',
    },
    {
        name: 'Ruzmat (contribute) ⚡🚀',
        url: 'https://unihost.kz',
        style: '',
    },
    {
        name: 'Thatskriptkid (contribute)',
        url: 'https://t.me/OrderOfSixAngles',
        style: '',
    },
    {
        name: 'Alexandr Bespoyasko (contribute) ⚡ 🚴☀️',
        url: 'https://alexandr.bespoyasko.kz/',
        style: '',
    },
    {
        name: 'El (testing) 💪⚡',
        url: '',
        style: '',
    },
    {
        name: 'Andrei (werlock) ☀️ 🚴☀️',
        url: '',
        style: '',
    },
    {
        name: 'Bessmertnyi_poni ⚡☀️ 🚴',
        url: '',
        style: '',
    },
    {
        name: 'Timur Shaikhin 🚴‍⚡',
        url: 'https://astlab.kz/',
        style: '',
    },
    {
        name: 'Manas Kumar 🚴‍⭐',
        url: '',
        style: '',
    },
    {
        name: 'Alexander Kolnik ⭐',
        url: '',
        style: '',
    },
    {
        name: 'Almaz Elemanov ☀️ ⭐',
        url: 'https://edk-it.com/',
        style: '',
    },
    {
        name: 'Bakhtiyar Ibrayev ⚡🚀',
        url: 'https://t.me/bibrayev',
        style: '',
    },
    {
        name: 'Alexander Kruglikov ☀️ ⭐',
        url: 'https://kruglikov.info/',
        style: '',
    },
    {
        name: 'Doskhat Abdrassilov 🚀',
        url: 'https://www.linkedin.com/in/doskhat-abdrassilov-616887321',
        style: '',
    },
    {
        name: 'Alex Spin ☀️',
        url: '',
        style: '',
    },
    {
        name: 'SysRoman ⚡☀️ 🚴',
        url: '',
        style: '',
    },
    {
        name: 'Alibek Bekenov ⚡ 🚜 ☀️ 🚴🔥',
        url: '',
        style: '',
    },
    {
        name: 'Matvey ⚡💪 🚴',
        url: '',
        style: '',
    },
    {
        name: 'Binali Rustamov 🔥',
        url: 'https://uz.linkedin.com/in/binalirustamov',
        style: '',
    },
    {
        name: 'Amir Y. ⭐',
        url: '',
        style: '',
    },
    {
        name: 'Arman Saparov ⭐',
        url: '',
        style: '',
    },
    {
        name: 'Dauren Bazarbekov 💪☀️',
        url: 'https://rteam.kz/',
        style: '',
    },
    {
        name: 'vik32 Bit ⭐',
        url: '',
        style: '',
    },
];

const currentYear = new Date().getFullYear();

export default function HomepageThanks() {
    return (
        <section
            id="thanks-section"
            className="overflow-hidden px-6 pb-10 pt-4 dark:bg-[#070a11]"
        >
            <div className="container mx-auto px-4">

                <div className="mb-6 flex w-full flex-col items-center justify-center">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-gray-900 dark:text-gray-200 md:text-2xl">
                        <Translate id="homepage.Thanks.Title">
                            Community contributors
                        </Translate>
                    </h3>
                </div>

                <div className="flex w-full flex-col items-center justify-center">
                    <ul
                        className="cloud"
                        aria-label="OpenBLD community contributors"
                    >
                        {thanks.map((user) => (
                            <li
                                className="px-2 hover:text-green-500"
                                key={user.name}
                            >
                                {user.url ? (
                                    <a
                                        className={`underline ${user.style}`}
                                        href={user.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {user.name}
                                    </a>
                                ) : (
                                    <span className={user.style}>
                                        {user.name}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 flex w-full flex-col items-center justify-center text-center">
                    <p className="m-0 text-sm text-gray-600 dark:text-gray-400">
                        2021–{currentYear} —{' '}
                        <Link
                            to="/docs/donation/#contribute-log"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Contribute Log
                        </Link>

                    </p>

                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                        Test and feedback: ⭐ · Contribution: ☀️ · Hosting: 🚀 ·
                        Design: 🎨 · Boost: 🔥
                    </p>
                </div>

                <div className="mb-8 flex w-full flex-col items-center justify-center">
                    <Link
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        to="/docs/donation"
                    >
                        <Translate id="homepage.Thanks.AssistLink">
                            How can you assist the project?
                        </Translate>
                    </Link>
                </div>

            </div>
        </section>
    );
}
