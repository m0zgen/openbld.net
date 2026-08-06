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

const donationMethods = [
    {
        name: 'Ko-fi',
        description: '',
        url: 'https://ko-fi.com/D1D85Y7SO',
        icon: '',
        iconClass: 'from-[#ff5e5b] to-[#ff8a80]',
        hoverClass:
            'hover:border-[#ff5e5b]/50 hover:shadow-[#ff5e5b]/10',
    },
    {
        name: 'YooMoney',
        description: '',
        url: 'https://yoomoney.ru/to/41001928837376',
        icon: '',
        iconClass: 'from-[#7b2cff] to-[#ad63ff]',
        hoverClass:
            'hover:border-[#8b3dff]/50 hover:shadow-[#8b3dff]/10',
    },
    {
        name: 'PayPal',
        description: '',
        url: 'https://www.paypal.com/paypalme/m0zgen',
        icon: '',
        iconClass: 'from-[#0070ba] to-[#003087]',
        hoverClass:
            'hover:border-[#0070ba]/50 hover:shadow-[#0070ba]/10',
    },
];

const currentYear = new Date().getFullYear();

export default function HomepageThanks() {
    return (
        <section id="thanks-section"
                 className="py-10 overflow-hidden dark:bg-[#070a11]"
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
                                        rel="noopener noreferrer"
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

                <div className="mx-auto mt-12 max-w-5xl">
                    <div
                        className="
            relative overflow-hidden rounded-3xl
            border border-gray-200/80
            bg-gray-50/80 px-6 py-8
            shadow-xl shadow-gray-200/30
            dark:border-white/10
            dark:bg-[#0d111b]
            dark:shadow-black/30
            md:px-10 md:py-10
        "
                    >
                        <div
                            aria-hidden="true"
                            className="
                pointer-events-none absolute -right-20 -top-24
                h-64 w-64 rounded-full
                bg-blue-500/10 blur-3xl
                dark:bg-blue-500/15
            "
                        />

                        <div
                            aria-hidden="true"
                            className="
                pointer-events-none absolute -bottom-32 -left-24
                h-64 w-64 rounded-full
                bg-green-500/10 blur-3xl
                dark:bg-green-500/10
            "
                        />

                        <div className="relative z-10">
                            <div className="mx-auto max-w-3xl text-center">
                <span
                    className="
                        inline-flex items-center rounded-full
                        border border-blue-200
                        bg-blue-50 px-3 py-1
                        text-xs font-semibold uppercase
                        tracking-[0.14em] text-blue-700
                        dark:border-blue-500/20
                        dark:bg-blue-500/10
                        dark:text-blue-300
                    "
                >
                    <Translate id="homepage.Support.Label">
                        Support the project
                    </Translate>
                </span>

                                <h3
                                    className="
                        mt-4 font-heading text-2xl font-bold
                        tracking-tight text-gray-900
                        dark:text-white md:text-3xl
                    "
                                >
                                    <Translate id="homepage.Support.Title">
                                        Help OpenBLD remain free and independent
                                    </Translate>
                                </h3>

                                <p
                                    className="
                        mx-auto mt-4 max-w-2xl
                        text-base leading-7 text-gray-600
                        dark:text-gray-400
                    "
                                >
                                    <Translate id="homepage.Support.Description">
                                        Your support helps us maintain OpenBLD servers,
                                        expand the network of filtering nodes and develop
                                        new security features.
                                    </Translate>
                                </p>
                            </div>

                            <div className="mb-8 flex flex-wrap justify-center gap-4">
                                {donationMethods.map((method) => (
                                    <a
                                        key={method.name}
                                        href={method.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Support OpenBLD via ${method.name}`}
                                        className={`
                                            group flex min-h-[92px] min-w-0
                                            basis-full flex-col items-center justify-center
                                            gap-2 rounded-2xl border px-5 py-5
                                            text-center no-underline
                                            ${method.hoverClass}
                                        `}>
                                        <span
                                            className={`
                                                flex h-6 w-12 shrink-0
                                                items-center justify-center
                                                rounded-xl bg-gradient-to-br
                                                text-xl font-extrabold
                                                !text-white shadow-md
                                                transition-transform duration-200
                                                group-hover:scale-105
                                                ${method.iconClass}
                                            `}
                                            aria-hidden="true"
                                        >
                                            {method.icon}
                                        </span>

                                                                    <span className="min-w-0 flex-1">
                                            <strong
                                                className="
                                                    block text-base font-semibold
                                                    !text-gray-900
                                                    dark:!text-white
                                                "
                                            >
                                              [  {method.name} ]
                                            </strong>

                                            <span
                                                className="
                                                    mt-1 block text-xs leading-5
                                                    !text-gray-500
                                                    dark:!text-gray-300
                                                "
                                            >
                                                {method.description}
                                            </span>
                                        </span>

                                                                    <span
                                                                        aria-hidden="true"
                                                                        className="
                                                mt-1 shrink-0 text-lg
                                                !text-gray-400
                                                transition-transform duration-200
                                                group-hover:translate-x-1
                                                dark:!text-gray-500

                                                sm:ml-auto
                                                sm:mt-0
                                            "
                                                                    >
                                            →
                                        </span>
                                                                </a>
                                                            ))}
                                                        </div>

                            <div className="mt-7 text-center">
                                <p className="m-0 text-sm text-gray-500 dark:text-gray-400">
                                    <Translate id="homepage.Support.Thanks">
                                        Thank you for supporting a secure and independent
                                        DNS service.
                                    </Translate>
                                </p>

                                <Link
                                    className="
                        mt-4 inline-flex font-medium
                        text-blue-600 hover:underline
                        dark:text-blue-400
                    "
                                    to="/docs/donation"
                                >
                                    <Translate id="homepage.Thanks.AssistLink">
                                        Other ways to assist the project
                                    </Translate>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
