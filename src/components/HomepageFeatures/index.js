import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const posts = [
    { id: 1, src: 'img/logos/splash-logo.jpg', title: 'Powered by OpenBLD.net', description: 'Get in a better way to work online with OpenBLD.net' },
    { id: 2, src: 'img/logos/splash-logo.jpg', title: 'Powered by OpenBLD.net', description: 'Get in a better way to work online with OpenBLD.net' },
    { id: 3, src: 'img/logos/splash-logo.jpg', title: 'Powered by OpenBLD.net', description: 'Get in a better way to work online with OpenBLD.net' },
];



function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    // <section className="container mx-auto px-6 p-10 mb-10">
      <section className="py-10 px-10 overflow-hidden dark:bg-[#070a11] pb-10">

        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-4">

                <div className="flex flex-col items-center justify-center w-full mb-10">
                    <h2 className="font-heading mb-6 text-4xl md:text-3xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                        More Features
                    </h2>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">~~~</h2>
                </div>

                {posts.map((post, i) => {
                        return (
                            <div className="w-full md:w-1/3 p-4" key={i}>
                                <div className="text-center h-full">
                                    <div className="flex items-center justify-center  mx-auto rounded-xl">
                                        {post.src
                                            ? <img className="object-cover w-1/3" src={post.src} alt="" />
                                            : null}
                                    </div>
                                    <h3 className="font-heading mb-2 text-xl">{post.title}</h3>
                                    <p className="font-bold">{post.description}</p>
                                </div>
                            </div>
                        )
                    }
                )}

            </div>
        </div>
    </section>

  );
}
