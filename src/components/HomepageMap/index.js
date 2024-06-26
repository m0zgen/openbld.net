import React, {useState} from 'react';
import Modal from "../ComponentModal";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

const servers = [
    {
        "name": "Gcore.com (Japan)",
        "url": "https://gcore.com/",
        "id": "japan",
        "top": "202",
        "left": "810"
    },
    {
        "name": "Unihost.kz (Kazakhstan)",
        "url": "https://unihost.kz/",
        "id": "kazakhstan_almaty_1",
        "top": "190",
        "left": "670"
    },
    {
        "name": "Unihost.kz (Kazakhstan)",
        "url": "https://unihost.kz/",
        "id": "kazakhstan_almaty_2",
        "top": "191",
        "left": "673"
    },
    {
        "name": "GoHost.kz (Kazakhstan)",
        "url": "https://gohost.kz/",
        "id": "kazakhstan_karagandy_1",
        "top": "160",
        "left": "650"
    },
    {
        "name": "SmartApps.kz (Kazakhstan)",
        "url": "https://smartapps.kz",
        "id": "kazakhstan_karagandy_2",
        "top": "150",
        "left": "640"
    },
    {
        "name": "Veesp.com (Latvia)",
        "url": "https://veesp.com/",
        "id": "latvia",
        "top": "130",
        "left": "500"
    },
    {
        "name": "Aalphavps.com (Bulgaria)",
        "url": "https://aalphavps.com/",
        "id": "bulgaria",
        "top": "180",
        "left": "500"
    },
    {
        "name": "Aalphavps.com (Germany)",
        "url": "https://aalphavps.com/",
        "id": "germany_1",
        "top": "140",
        "left": "476"
    },
    {
        "name": "Sys-Adm.in Lab (Germany)",
        "url": "https://lab.sys-adm.in/",
        "id": "germany_2",
        "top": "140",
        "left": "470"
    },
    {
        "name": "Sys-Adm.in Lab (Germany)",
        "url": "https://lab.sys-adm.in/",
        "id": "germany_3",
        "top": "144",
        "left": "471"
    },
    {
        "name": "Sys-Adm.in Lab",
        "url": "https://lab.sys-adm.in/",
        "id": "germany_4",
        "top": "148",
        "left": "472"
    },
    {
        "name": "Sys-Adm.in Lab (Germany)",
        "url": "https://lab.sys-adm.in/",
        "id": "germany_5",
        "top": "152",
        "left": "473"
    },
    {
        "name": "Sys-Adm.in Lab (Netherlands)",
        "url": "https://lab.sys-adm.in/",
        "id": "netherlands_1",
        "top": "160",
        "left": "448"
    },
    {
        "name": "Sys-Adm.in Lab (Netherlands)",
        "url": "https://lab.sys-adm.in/",
        "id": "netherlands_2",
        "top": "161",
        "left": "451"
    },
    {
        "name": "Sys-Adm.in Lab (Netherlands)",
        "url": "https://lab.sys-adm.in/",
        "id": "netherlands_3",
        "top": "162",
        "left": "455"
    },
    {
        "name": "Sys-Adm.in Lab (Singapore)",
        "url": "https://lab.sys-adm.in/",
        "id": "singapore",
        "top": "293",
        "left": "720"
    }
];

export default function HomepageMap() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [contentModal, setContentModal] = useState("");
    const [urlModal, setUrlModal] = useState("");


  return (

    <section id="map-section" className="overflow-hidden py-10 px-10 dark:bg-[#070a11]">

        <div className="container mx-auto px-4 mb-10">
            <div className="flex flex-wrap -m-4">

                <div className="flex flex-col items-center justify-center w-full mb-10">
                    <h2 className="font-heading mb-6 text-4xl md:text-3xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                        <Translate
                            id="homepage.Map.Title">
                            OpenBLD.net PoP Map
                            </Translate>
                    </h2>
                </div>

                <div className="flex flex-col items-center justify-center w-full">

                    <div class="map__image">

                        {servers.map((server, i) => {
                                return (

                                    <div key={i}>

                                        <style>
                                            {`
                                            #${server.id}:hover:before {
                                                  content: "${server.name}";
                                               }
                                            #${server.id} {
                                                top: ${server.top}px;
                                                left: ${server.left}px;
                                                }
                                            `}
                                        </style>

                                        <button id={server.id} class="map__link dot text-white" style={{cursor: "pointer"}}
                                            onClick={() => {setModalOpen(true);
                                                setContentModal(server.name);
                                                setUrlModal(server.url)
                                            }}
                                        ></button>
                                    </div>
                                )
                            }
                        )}

                    </div>

                    <div className="flex flex-wrap -m-2">

                        <Link to="https://bld-status.sys-adm.in/">

                             <Translate
                                id="homepage.Map.DashboardHeader">
                                 Statistics for 90 days on
                            </Translate> UptimeRobot

                        </Link>

                    </div>

                </div>

                <div className="flex flex-col items-center justify-center w-full">

                    {isModalOpen && (

                        <Modal onClose={() => setModalOpen(false)} content={contentModal} url={urlModal}>
                            <p>
                                <Translate
                                    id="homepage.Map.ModalHeader">
                                    Platform Info
                                </Translate>
                            </p>
                            {/*<p>This is modal content.</p>*/}

                        </Modal>
                    )}
                </div>

            </div>
        </div>
    </section>

  );
}
