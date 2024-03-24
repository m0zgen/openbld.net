import React from 'react';

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
            "name": "Bessmertnyi_poni \u26a1\u2600\ufe0f",
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
            "name": "TeaqariaWTF 🚴‍",
            "url": "",
            "style": ""
        },
        {
            "name": "Green Duck 🚴‍",
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
                        Thanks for Support and Donations! 🌟
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
                    <a href="/docs/donation" className="justify-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        How you can assist to project?
                    </a>
                </div>



                {/*        <div className=" flex items-center justify-center">*/}

                {/*            /!*Horizontal list*!/*/}
                {/*            <ul className="justify-center flex flex-row flex-wrap divide-x divide-border gap-4 cursor-pointer">*/}
                {/*                /!*<li className="px-2 hover:text-green-500">Mastercard</li>*!/*/}

                {/*                {thanks.map((user, i) => {*/}
                {/*                        return (*/}
                {/*                            <li className="px-2 hover:text-green-500s" key={i}>*/}
                {/*                                    {user.url*/}
                {/*                                        ?*/}
                {/*                                            <a className={`object-cover w-1/3 underline ${user.style}`} href={user.url} target="_blank">{user.name}</a>*/}
                {/*                                        : user.url === "" ?*/}
                {/*                                            <p className={user.style}> {user.name} </p>*/}
                {/*                                        : null}*/}
                {/*                            </li>*/}
                {/*                        )*/}
                {/*                    }*/}
                {/*                )}*/}

                {/*            </ul>*/}
                {/*</div>*/}

            {/*<div className="flex flex-col items-center justify-center w-full mt-5">*/}
            {/*    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">*/}
            {/*        Legend:*/}
            {/*    </h5>*/}
            {/*    <ul className="flex flex-col justify-center items-center">*/}
            {/*        <li>*/}
            {/*            <p>2021: <strong class="has-text-success">*/}
            {/*                Contributor Name*/}
            {/*            </strong></p>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <p>2022: <strong class="has-text-info">*/}
            {/*                Testing: 💪 Contribute: ⚡*/}
            {/*            </strong></p>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <p>2023: <strong class="has-text-warning">*/}
            {/*                Feedback: 🚜 Contribute: ☀️*/}
            {/*            </strong></p>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*    /!*Bottom list link*!/*/}
            {/*    <div className="flex flex-wrap">*/}
            {/*        <div className="w-full md:w-auto p-2">*/}

            {/*            <div className="ml-3">*/}
            {/*                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">*/}
            {/*                    How you can assist to project?*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            </div>
        </div>
    </section>

  );
}
