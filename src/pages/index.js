import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageThanks from '@site/src/components/HomepageThanks';
import HomepageLogosCloud from '@site/src/components/HomepageLogosCloud';
import HomepageChromeExtension from '@site/src/components/HomepageChromeExtension';
import HomepageVideoPresentation from '@site/src/components/HomepageVideoPresentation';
import HomepageCompareAdaAndRic from '@site/src/components/HomepageCompareAdaAndRic';
import HomepageURLhaus from '@site/src/components/HomepageURLhaus';
import Translate, {translate} from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';
import HomepageMap from "../components/HomepageMap";
import Accordion from "../components/ComponentAccordeon";
import LatestBlogPosts from '../components/LatestBlogPosts';
import FinalCTA from '../components/FinalCTA';
import LiveStats from '../components/LiveStats'

// Header Component
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary dark:bg-[#070a11] bg-[#070a11]', styles.heroBanner)}>
        <div className="container mx-auto text-center py-24">

            {/*Header title*/}
            <h1 className="font-heading mb-6 text-4xl md:text-5xl text-gray-200 dark:text-gray-200 font-black tracking-tight">
                <Translate
                    id="homepage.Header.Title">
                {siteConfig.customFields.titleHomeHeader}
                </Translate>
            </h1>

            {/*Header subtitle*/}
            <p className="text-xl py-6 text-white">
                <Translate
                    id="homepage.Header.Subtitle">
                {siteConfig.tagline}
                </Translate>
            </p>

            {/*Header buttons*/}
            <Link
                className="inline-flex px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 hover:text-green-200 focus:ring-blue-200 rounded-full"
                to="/docs/overwiew/how-it-works"
            >
                <Translate
                    id="homepage.Header.Button1">
                    🧩 How it Works
                </Translate>
            </Link>

            <Link
                className="mt-3 md:mt-0 lg:mt-0 inline-flex items-center ml-3 px-8 py-3.5 text-lg text-center text-green-100 font-bold transition-colors duration-150 bg-amber-500 hover:bg-amber-600 focus:shadow-outline hover:text-gray-200 rounded-full"
                to="/docs/category/get-started"
            >
                <span>
                <Translate
                    id="homepage.Header.Button2">
                    Setup - 5min
                </Translate>
                </span>
                <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd" className="text-red-500"></path>
                </svg>
            </Link>

            {/*Subheader*/}
            <div className='flex justify-center max-w-lg flex-col mx-auto mt-8'>
                <h2 className="text-3xl font-semibold tracking-tight text-center dark:text-gray-200">
                    <Translate
                        id="homepage.Header.Slogan">
                    Be yourself, be focused
                    </Translate>
                </h2>
                <p className="mt-1 text-sm text-center text-white dark:text-gray-400">
                    <Translate
                        id="homepage.Header.Brief">
                    OpenBLD.net is a service designed to minimize Internet noise such as advertising 🦠, tracking 🕵️‍♂️, DNS leaks ✅ with
                    allowing you to be yourself and stay focused while online.
                    </Translate>
                    <br/>

                    <Link
                        href="/docs/donation" className="mt-5 font-medium text-blue-200 dark:text-blue-500 hover:underline">
                        <Translate
                            id="homepage.Header.BriefLink1">
                        Donations
                        </Translate>
                    </Link>
                    <Translate
                        id="homepage.Header.BriefOr"> or
                    </Translate>

                    <Link href="/docs/sponsorship" className="mt-5 font-medium text-blue-200 dark:text-blue-500 hover:underline">
                        <Translate
                            id="homepage.Header.BriefLink2"> Sponsorship
                        </Translate>
                    </Link>.

                </p>
                {/*<p>*/}
                {/*    <span className="mt-5 font-semibold tracking-tight text-center text-green-800 dark:text-green-400">*/}
                {/*        <CodeBlock>*/}
                {/*            https://ada.openbld.net/dns-query*/}
                {/*        </CodeBlock>*/}
                {/*    </span>*/}
                {/*</p>*/}
            </div>

        </div>
    </header>
  );
}

// Header Component
function HomepageHeaderNext() {
    return (
        <header
            className={clsx(
                'relative overflow-hidden bg-[#070a11]',
                styles.heroBanner,
            )}
        >
            <div className="container relative z-10 mx-auto px-4 py-16 md:py-20 lg:py-24">
                {/* Main heading */}
                <div className="mx-auto mb-12 max-w-4xl text-center">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
                        <Translate id="homepage.Header.Eyebrow">
                            Protective DNS for everyone
                        </Translate>
                    </p>

                    <h1 className="font-heading text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                        <Translate id="homepage.Header.Title">
                            One OpenBLD DNS. Two ways to protect.
                        </Translate>
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                        <Translate id="homepage.Header.Subtitle">
                            Free public DNS protection for everyone. Advanced DNS
                            security, analytics and deployment options for organizations.
                        </Translate>
                    </p>
                    <small className="mt-3 block text-sm text-gray-400">
                        DNS, DoT, DoH - HTTP/2, TLSv1.2, TLSv1.3, DNSSEC, GeoDNS
                    </small>
                </div>

                {/* Free / Plus */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* OpenBLD Free */}
                    <section className="relative flex min-h-[440px] flex-col items-center px-6 py-10 text-center md:px-10 lg:min-h-[460px] lg:px-14 lg:py-12">
                        <div className="flex h-full w-full max-w-xl flex-col items-center">
                            <div className="mb-6">
                                <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-sm font-bold text-blue-200">
                                    <Translate id="homepage.Header.FreeBadge">
                                        Free Forever
                                    </Translate>
                                </span>
                            </div>

                            <h2 className="font-heading text-3xl font-black tracking-tight text-white md:text-4xl">
                                OpenBLD Free
                            </h2>

                            <p className="mt-3 text-lg font-semibold text-blue-200">
                                <Translate id="homepage.Header.FreeTitle">
                                    Protective DNS for everyone
                                </Translate>
                            </p>

                            <p className="mt-5 max-w-lg leading-relaxed text-gray-300">
                                <Translate id="homepage.Header.FreeDescription">
                                    Block malware, phishing, tracking and unwanted
                                    domains using OpenBLD public DNS-service. No registration
                                    or subscription required.
                                </Translate>
                            </p>

                            <ul className="m-0 mt-7 inline-flex list-none flex-col items-start gap-3 p-0 text-left text-sm text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span
                                        className="mt-[1px] shrink-0 font-bold text-blue-400"
                                        aria-hidden="true"
                                    >
                                        ✓
                                    </span>

                                    <span>
                                        <Translate id="homepage.Header.FreeFeature1">
                                            Malware and phishing protection
                                        </Translate>
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span
                                        className="mt-[1px] shrink-0 font-bold text-blue-400"
                                        aria-hidden="true"
                                    >
                                        ✓
                                    </span>

                                    <span>
                                        <Translate id="homepage.Header.FreeFeature2">
                                            DoH, DoT and classic DNS
                                        </Translate>
                                    </span>
                                </li>

                                {/*<li className="flex items-start gap-3">*/}
                                {/*    <span*/}
                                {/*        className="mt-[1px] shrink-0 font-bold text-blue-400"*/}
                                {/*        aria-hidden="true"*/}
                                {/*    >*/}
                                {/*        ✓*/}
                                {/*    </span>*/}

                                {/*    <span>*/}
                                {/*        <Translate id="homepage.Header.FreeFeature3">*/}
                                {/*            Protect from DNS Leak*/}
                                {/*        </Translate>*/}
                                {/*    </span>*/}
                                {/*</li>*/}

                                <li className="flex items-start gap-3">
                                    <span
                                        className="mt-[1px] shrink-0 font-bold text-blue-400"
                                        aria-hidden="true"
                                    >
                                        ✓
                                    </span>

                                    <span>
                                        <Translate id="homepage.Header.FreeFeature4">
                                            No registration required
                                        </Translate>
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-auto flex w-full flex-col items-center justify-center gap-3 pt-10 sm:flex-row">
                                <Link
                                    className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-blue-500 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-blue-600 hover:text-white"
                                    to="/docs/category/get-started"
                                >
                                    <Translate id="homepage.Header.FreeButton">
                                        Use OpenBLD Free
                                    </Translate>
                                </Link>

                                <Link
                                    className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-base font-bold text-gray-200 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
                                    to="/docs/overwiew/how-it-works"
                                >
                                    <Translate id="homepage.Header.HowItWorks">
                                        How it works
                                    </Translate>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* OpenBLD Plus */}
                    <section className="relative flex min-h-[440px] flex-col items-center border-t border-white/10 px-6 py-10 text-center md:px-10 lg:min-h-[460px] lg:border-t-0 lg:px-14 lg:py-12">
                        {/* Desktop vertical divider */}
                        <div
                            className="absolute left-0 top-[10%] hidden h-[80%] w-px bg-gradient-to-b from-transparent via-white/25 to-transparent lg:block"
                            aria-hidden="true"
                        />

                        <div className="flex h-full w-full max-w-xl flex-col items-center">
                            <div className="mb-6">
                                <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-bold text-amber-200">
                                    <Translate id="homepage.Header.PlusBadge">
                                        For Organizations
                                    </Translate>
                                </span>
                            </div>

                            <h2 className="font-heading text-3xl font-black tracking-tight text-white md:text-4xl">
                                OpenBLD Plus
                            </h2>

                            <p className="mt-3 text-lg font-semibold text-amber-200">
                                <Translate id="homepage.Header.PlusTitle">
                                    DNS security for organizations
                                </Translate>
                            </p>

                            <p className="mt-5 max-w-lg leading-relaxed text-gray-300">
                                <Translate id="homepage.Header.PlusDescription">
                                    Protective DNS in your infrastructure or use
                                    a managed cloud environment with corporate policies,
                                    analytics and professional support.
                                </Translate>
                            </p>

                            <ul className="m-0 mt-7 inline-flex list-none flex-col items-start gap-3 p-0 text-left text-sm text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span
                                        className="mt-[1px] shrink-0 font-bold text-amber-400"
                                        aria-hidden="true"
                                    >
                                        ✓
                                    </span>

                                    <span>
                                        <Translate id="homepage.Header.PlusFeature1">
                                            Managed Cloud or On-Premise
                                        </Translate>
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span
                                        className="mt-[1px] shrink-0 font-bold text-amber-400"
                                        aria-hidden="true"
                                    >
                                        ✓
                                    </span>

                                    <span>
                                        <Translate id="homepage.Header.PlusFeature2">
                                            Corporate policies and analytics
                                        </Translate>
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span
                                        className="mt-[1px] shrink-0 font-bold text-amber-400"
                                        aria-hidden="true"
                                    >
                                        ✓
                                    </span>

                                    <span>
                                        <Translate id="homepage.Header.PlusFeature3">
                                            Active Directory and security integrations
                                        </Translate>
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-auto flex w-full flex-col items-center justify-center gap-3 pt-10 sm:flex-row">
                                <Link
                                    className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-base font-bold text-gray-950 transition-colors hover:bg-amber-400 hover:text-gray-950"
                                    to="/docs/overwiew/openbld-plus"
                                >
                                    <Translate id="homepage.Header.PlusButton">
                                        OpenBLD Plus
                                    </Translate>
                                </Link>

                                <Link
                                    className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-base font-bold text-gray-200 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
                                    to="/docs/overwiew/openbld-plus/#what-openbld-plus-provides"
                                >
                                    <Translate id="homepage.Header.PlusDocsButton">
                                        Documentation
                                    </Translate>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Subheader */}
                <div className="mx-auto mt-12 max-w-3xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                        <Translate id="homepage.Header.Slogan">
                            Be yourself, be focused. Stay protected.
                        </Translate>
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        <Translate id="homepage.Header.Brief">
                            OpenBLD is built and supported by its community,
                            contributors and infrastructure partners.
                        </Translate>{' '}
                        <br/>
                        <Link
                            to="/docs/donation"
                            className="font-medium text-blue-300 hover:text-blue-200 hover:underline"
                        >
                            <Translate id="homepage.Header.BriefLink1">
                                Donations
                            </Translate>
                        </Link>

                        <span className="mx-1">
                            <Translate id="homepage.Header.BriefOr">
                                or
                            </Translate>
                        </span>

                        <Link
                            to="/docs/sponsorship"
                            className="font-medium text-blue-300 hover:text-blue-200 hover:underline"
                        >
                            <Translate id="homepage.Header.BriefLink2">
                                Sponsorship
                            </Translate>
                        </Link>
                        .
                    </p>
                </div>
            </div>

            <div className={styles.heroGlowBlue} />
            <div className={styles.heroGlowAmber} />
        </header>
    );
}

// Get in a better way to work online
function FeaturesListHeading() {
    const [bool, setBool] = useState(true);

    const [isCheckedAda, setIsCheckedAda] = useState(true);
    const [isCheckedRic, setIsCheckedRic] = useState(false);
    const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'Hagezi',
            data: ``,
            setupUrl: '/docs/get-started/third-party-filters/hagezi',
            setupLink: 'DNS over HTTPS (DoH) ⚙️',
            isOpen: false
        },
        {
            key: 2,
            title: 'OISD',
            data: ``,
            setupUrl: '/docs/get-started/third-party-filters/oisd',
            setupLink: 'DNS over HTTPS (DoH) ⚙️',
            isOpen: false
        },
    ]);



    const handleChangeAda = () => {
        setIsCheckedAda(!isCheckedAda);
        if (isCheckedRic) {
            setIsCheckedRic(!isCheckedRic);
            setBool(bool)
        }
    }

    const handleChangeRic = () => {
        setIsCheckedRic(!isCheckedRic);
        if (isCheckedAda) {
            setIsCheckedAda(!isCheckedAda);
            setBool(bool)
        }
    }

    const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
            if (accord.key === accordionkey) {
                return { ...accord, isOpen: !accord.isOpen };
            } else {
                return { ...accord, isOpen: false };
            }
        });

        setAccordion(updatedAccordions);
    };

    // Better way work online
    return (
        <section className="py-10 overflow-hidden dark:bg-[#070a11]">

            <div className="container mx-auto px-4">
                <div className="py-16 px-8 bg-white rounded-3xl dark:bg-[#070a11]">
                    <div className="flex flex-wrap -m-8">
                        <div className="flex flex-wrap -m-8 mb-10">
                            {/*Features list heading*/}
                            <div className="w-full md:w-1/2 p-8">
                                <div className="md:max-w-lg">
                                    <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 dark:text-gray-200 font-black tracking-tight">
                                        <Translate
                                            id="homepage.FeatureList.Title">
                                            Start using OpenBLD Free
                                        </Translate>
                                    </h2>
                                    <p className="mb-8 text-xl font-bold">
                                        <Translate
                                            id="homepage.FeatureList.Subtitle">
                                            Without agents and without software installs
                                        </Translate>
                                    </p>

                                    {/*<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Features:</h2>*/}
                                    <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <Translate
                                                id="homepage.FeatureList.Item1">
                                                For personal use, home, and small business
                                            </Translate>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <Translate
                                                id="homepage.FeatureList.Item2">
                                                Works on phones, browsers, and desktops
                                            </Translate>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <Translate
                                                id="homepage.FeatureList.Item3">
                                                Saves memory, CPU, and battery life
                                            </Translate>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <Translate
                                                id="homepage.FeatureList.Item4">
                                                Blocks ads, tracking scripts, and malicious domains
                                            </Translate>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <Translate
                                                id="homepage.FeatureList.Item5">
                                                Scales up to ~100k queries/day
                                            </Translate>
                                        </li>
                                        <li class="flex items-center">
                                            <svg
                                                className="w-3.5 h-3.5 mr-2 mb-3 text-red-500 dark:text-red-500 flex-shrink-0"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                    clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            <p>
                                                <Link className="text-blue-600 dark:text-blue-500"
                                                   href="/docs/overwiew/openbld-plus">
                                                    <Translate
                                                        id="homepage.FeatureList.Item6">
                                                        Get benefits from Donations / Sponsorship
                                                    </Translate>
                                                </Link>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/*OpenBLD logo*/}
                            <div className="w-full md:w-1/2 p-8">

                                <img
                                    className="responsive-image mx-auto md:mr-0"
                                    src="img/site-cover-openbld-net-dark.webp"
                                    alt="OpenBLD.net DNS Site Logo"
                                    width="635"
                                    height="258"
                                    decoding="async"
                                />

                                {/*Quick setup*/}
                                {/*<div className="mt-3 block max-w-xl pl-6 pr-6 p-2 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">*/}
                                <div
                                    className="mt-3 block max-w-xl pl-6 pr-6 p-2 border border-gray-200 shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">

                                        {bool ? <div>
                                            <Translate
                                                id="homepage.FeatureList.QuickSetup">
                                                Browser quick setup
                                            </Translate>
                                        </div> : null}

                                        {/*<Translate*/}
                                        {/*    id="homepage.FeatureList.QuickSetup">*/}
                                        {/*Browser quick setup*/}
                                        {/*</Translate>*/}
                                    </h5>
                                    {/*<p className="font-normal text-gray-700 dark:text-gray-400 m-0">*/}
                                    {/*    <Translate*/}
                                    {/*        id="homepage.FeatureList.QuickSetupType">*/}
                                    {/*    Adapted (ADA). For most users:*/}
                                    {/*    </Translate>*/}
                                    {/*</p>*/}
                                    {/*<code className="text-green-800 dark:text-green-400">*/}
                                    {/*    https://ada.openbld.net/dns-query*/}
                                    {/*</code>*/}
                                    <span
                                        className="font-semibold tracking-tight text-center text-green-800 dark:text-green-400">
                                        {/*<CodeBlock>*/}
                                        {/*    https://ada.openbld.net/dns-query*/}
                                        {/*</CodeBlock>*/}


                                        {isCheckedAda ? <div>
                                            <span
                                                className="font-semibold tracking-tight text-center text-green-800 dark:text-green-400">
                                            <CodeBlock>
                                                https://ada.openbld.net/dns-query
                                            </CodeBlock>
                                        </span>
                                        </div> : null}

                                        {isCheckedRic ? <div>
                                            <span
                                                className="font-semibold tracking-tight text-center text-green-800 dark:text-green-400">
                                            <CodeBlock>
                                                https://ric.openbld.net/dns-query
                                            </CodeBlock>
                                        </span>
                                        </div> : null}
                                    </span>

                                    <p className="m-0 xl:hidden text-sm text-center text-white dark:text-gray-400">
                                        <Translate
                                            id="homepage.FeatureList.GetStartedFor">
                                            Paste this into Secure DNS settings:
                                        </Translate>
                                        <Link href="/docs/category/setup-browsers"
                                           className="mt-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            <Translate
                                                id="homepage.FeatureList.GetStartedForBrowsers"> Browsers
                                            </Translate>
                                        </Link>,
                                        <Link href="/docs/category/setup-mobile-devices"
                                                 className="mt-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <Translate
                                            id="homepage.FeatureList.GetStartedForMobile"> Mobile
                                        </Translate>
                                        </Link>,
                                        <Link href="/docs/get-started/where-to-start"
                                           className="mt-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            <Translate
                                                id="homepage.FeatureList.GetStartedForMore"> more...
                                            </Translate>
                                        </Link>
                                    </p>

                                </div>

                            </div>
                        </div>

                        {/*Three columns with slogans*/}
                        <div className="p-2 md:p-9 bg-gray-100">
                            <div className="flex flex-wrap -m-8">
                                <div className="w-full md:w-1/3 p-8">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-auto md:w-full lg:w-auto p-3">
                                            <div
                                                className="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                                        fill="#3B82F6"></path>
                                                    <path
                                                        d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                                        fill="#3B82F6"></path>
                                                    <path
                                                        d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                                        fill="#3B82F6"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-3">
                                            <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                                                <Translate
                                                    id="homepage.ThreeColums.Column1Title">
                                                    ADA DNS
                                                </Translate>
                                                <label
                                                    className="inline-flex items-center ps-[0.15rem] hover:cursor-pointer"
                                                    htmlFor="checkerAda">
                                                    <input
                                                        className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-400 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-blue-400 after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-green-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-green-700 checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-gray-400 dark:after:bg-surface-dark dark:checked:bg-green-400 dark:checked:after:bg-primary"
                                                        type="checkbox"
                                                        role="switch"
                                                        id="checkerAda"
                                                        checked={isCheckedAda}
                                                        onChange={handleChangeAda}
                                                        onClick={() => setBool((b) => !b)}
                                                    />
                                                    {/*On*/}
                                                </label>
                                            </h3>
                                            <p className="text-sm text-gray-700 font-bold">
                                                <Translate
                                                    id="homepage.ThreeColums.Column1Body">
                                                    ADA - Fast and flexible adaptive filtering for everyday browsing with Social
                                                    Networks, Google, Microsoft, Yandex, etc.
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-8">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-auto md:w-full lg:w-auto p-3">
                                            <div
                                                className="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                                        fill="#3B82F6"></path>
                                                    <path
                                                        d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                                        fill="#3B82F6"></path>
                                                    <path
                                                        d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                                        fill="#3B82F6"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-3">
                                            <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                                                <Translate
                                                    id="homepage.ThreeColums.Column2Title">
                                                    RIC DNS
                                                </Translate>
                                                <label
                                                    className="inline-flex items-center ps-[0.15rem] hover:cursor-pointer"
                                                    htmlFor="checkerRic">
                                                    <input
                                                        className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-400 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-blue-400 after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-green-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-green-700 checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-gray-400 dark:after:bg-surface-dark dark:checked:bg-green-400 dark:checked:after:bg-primary"
                                                        type="checkbox"
                                                        role="switch"
                                                        id="checkerRic"
                                                        checked={isCheckedRic}
                                                        onChange={handleChangeRic}
                                                        onClick={() => setBool((b) => !b)}
                                                    />
                                                    {/*RIC*/}
                                                </label>
                                            </h3>
                                            <p className="text-sm text-gray-700 font-bold">
                                                <Translate
                                                    id="homepage.ThreeColums.Column2Body">
                                                    RIC - Strict DNS: Blocks many marketing and tracking resources,
                                                    which may affect access to certain internet content!
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-8">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-auto md:w-full lg:w-auto p-3">
                                            <div
                                                className="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                                                        fill="#3B82F6"></path>
                                                    <path
                                                        d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                                                        fill="#3B82F6"></path>
                                                    <path
                                                        d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                                                        fill="#3B82F6"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-3">
                                            <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                                                <Translate
                                                    id="homepage.ThreeColums.Column3Title">
                                                    Mobile Devices
                                                </Translate>
                                            </h3>
                                            <p className="text-sm text-gray-700 font-bold">
                                                <Translate
                                                    id="homepage.ThreeColums.Column3Body">
                                                    Android, iOS, iPad devices.
                                                </Translate>
                                                <Link href="/docs/get-started/setup-mobile-devices/android/">
                                                    <Translate
                                                        id="homepage.ThreeColums.Column3BodyLink1"> Setup
                                                    </Translate>
                                                </Link>
                                                <Translate
                                                    id="homepage.ThreeColums.Column3Body2"> "Private DNS" on Android or
                                                </Translate>
                                                <Link href="/docs/get-started/setup-mobile-devices/apple/">
                                                    <Translate
                                                        id="homepage.ThreeColums.Column3BodyLink2"> download
                                                    </Translate>
                                                </Link>
                                                <Translate
                                                    id="homepage.ThreeColums.Column3Body3"> profile for Apple devices.
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*<div className="flex flex-col items-center justify-center w-full">*/}
                            {/*    <p className="justify-center font-medium text-gray-600">*/}
                            {/*        Centered Text*/}
                            {/*    </p>*/}

                            {/*</div>*/}

                            {/* Accordion */}
                            <div className="p-2 bg-white">
                                <div className="p-2 m-4">
                                    <h3 className='font-heading mb-2 text-xl font-black text-gray-900'>
                                        <Translate
                                            id="homepage.Submodules.Header"> Submodules
                                        </Translate>
                                    </h3>
                                    <div className="space-y-3">
                                        {accordions.map((accordion) => (
                                            <Accordion
                                                key={accordion.key}
                                                title={accordion.title}
                                                data={accordion.data}
                                                setupUrl={accordion.setupUrl}
                                                setupLink={accordion.setupLink}
                                                isOpen={accordion.isOpen}
                                                toggleAccordion={() => toggleAccordion(accordion.key)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </section>


    );

}

function CheckIcon({className = 'text-green-500 dark:text-green-400'}) {
    return (
        <svg
            className={`mt-1 h-4 w-4 shrink-0 ${className}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
    );
}

function FeatureIcon() {
    return (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/15 bg-blue-500/10 text-blue-500 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-400">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                    fill="currentColor"
                    opacity="0.7"
                />

                <path
                    d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                    fill="currentColor"
                />

                <path
                    d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                    fill="currentColor"
                    opacity="0.7"
                />
            </svg>
        </div>
    );
}

function ResolverSwitch({
                            id,
                            label,
                            checked,
                            onChange,
                        }) {
    return (
        <label
            htmlFor={id}
            className="inline-flex cursor-pointer items-center"
        >
            <input
                id={id}
                type="checkbox"
                role="switch"
                checked={checked}
                onChange={onChange}
                className="sr-only"
                aria-label={label}
            />

            <span
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 ${
                    checked
                        ? 'bg-blue-500'
                        : 'bg-gray-300 dark:bg-gray-700'
                }`}
            >
                <span
                    className="h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out"
                    style={{
                        transform: checked
                            ? 'translateX(22px)'
                            : 'translateX(2px)',
                    }}
                />
            </span>
        </label>
    );
}

function FeaturesListHeadingNext() {

    const toggleResolver = () => {
        setSelectedResolver((currentResolver) =>
            currentResolver === 'ada' ? 'ric' : 'ada',
        );
    };

    const [selectedResolver, setSelectedResolver] = useState('ada');

    const [accordions, setAccordions] = useState([
        {
            key: 1,
            title: 'Hagezi',
            data: '',
            setupUrl: '/docs/get-started/third-party-filters/hagezi',
            setupLink: 'DNS over HTTPS (DoH) ⚙️',
            isOpen: false,
        },
        {
            key: 2,
            title: 'OISD',
            data: '',
            setupUrl: '/docs/get-started/third-party-filters/oisd',
            setupLink: 'DNS over HTTPS (DoH) ⚙️',
            isOpen: false,
        },
    ]);

    const resolverUrl =
        selectedResolver === 'ric'
            ? 'https://ric.openbld.net/dns-query'
            : 'https://ada.openbld.net/dns-query';

    const toggleAccordion = (accordionKey) => {
        setAccordions((currentAccordions) =>
            currentAccordions.map((accordion) => ({
                ...accordion,
                isOpen:
                    accordion.key === accordionKey
                        ? !accordion.isOpen
                        : false,
            })),
        );
    };

    return (
        <section className="relative overflow-hidden bg-white py-16 dark:bg-[#070a11] md:py-20">
            {/* Background glow */}
            <div
                className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/15"
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[120px] dark:bg-green-500/10"
                aria-hidden="true"
            />

            <div className="container relative z-10 mx-auto px-4">
                {/* Top block */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Introduction */}
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <span className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-bold text-blue-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                            <Translate id="homepage.FeatureList.Badge">
                                OpenBLD Free
                            </Translate>
                        </span>

                        <h2 className="font-heading mb-5 text-4xl font-black tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
                            <Translate id="homepage.FeatureList.Title">
                                Start using OpenBLD Free
                            </Translate>
                        </h2>

                        <p className="mb-8 text-xl font-bold text-gray-700 dark:text-gray-300">
                            <Translate id="homepage.FeatureList.Subtitle">
                                Without agents and without software installs
                            </Translate>
                        </p>

                        <ul className="m-0 list-none space-y-4 p-0 text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-3">
                                <CheckIcon />

                                <span>
                                    <Translate id="homepage.FeatureList.Item1">
                                        For personal use, home networks, and small offices
                                    </Translate>
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckIcon />

                                <span>
                                    <Translate id="homepage.FeatureList.Item2">
                                        Works on phones, browsers and desktops
                                    </Translate>
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckIcon />

                                <span>
                                    <Translate id="homepage.FeatureList.Item3">
                                        No agents or additional software required
                                    </Translate>
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckIcon />

                                <span>
                                    <Translate id="homepage.FeatureList.Item4">
                                        Blocks malware, phishing, tracking, and unwanted domains
                                    </Translate>
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckIcon />

                                <span>
                                    <Translate id="homepage.FeatureList.Item5">
                                        Supports classic DNS, DoH, and DoT
                                    </Translate>
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckIcon />

                                <span>
                                    <Translate id="homepage.FeatureList.Item6">
                                        ~100k DNS queries/day
                                    </Translate>
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckIcon className="text-blue-500 dark:text-blue-400" />

                                <span className="font-semibold text-gray-800 dark:text-gray-200">
                                    <Translate id="homepage.FeatureList.Item7">
                                        Free forever - no registration required
                                    </Translate>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Logo and quick setup */}
                    <div className="mx-auto w-full max-w-xl">
                        <img
                            className="responsive-image mx-auto h-auto w-full max-w-[635px]"
                            src="img/site-cover-openbld-net-dark.webp"
                            alt="OpenBLD.net DNS"
                            width="635"
                            height="258"
                            loading="lazy"
                            decoding="async"
                        />

                        <div className="relative mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] md:p-8">
                            <div
                                className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl"
                                aria-hidden="true"
                            />

                            <div className="relative z-10">
                                <div className="mb-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
                                    <div>
                                        <p className="mb-1 text-center text-sm font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300 sm:text-left">
                                            <Translate id="homepage.FeatureList.QuickSetupBadge">
                                                Connect
                                            </Translate>
                                        </p>

                                        <h3 className="m-0 text-center text-xl font-black tracking-tight text-gray-900 dark:text-white sm:text-left">
                                            <Translate id="homepage.FeatureList.QuickSetup">
                                                Browser quick setup
                                            </Translate>
                                        </h3>
                                    </div>

                                    <div className="inline-flex rounded-full border border-gray-200 bg-gray-100 p-1 dark:border-white/10 dark:bg-white/[0.04]">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedResolver('ada')}
                                            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                                                selectedResolver === 'ada'
                                                    ? 'bg-blue-500 text-white shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                            }`}
                                            aria-pressed={selectedResolver === 'ada'}
                                        >
                                            ADA
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedResolver('ric')}
                                            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                                                selectedResolver === 'ric'
                                                    ? 'bg-blue-500 text-white shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                            }`}
                                            aria-pressed={selectedResolver === 'ric'}
                                        >
                                            RIC
                                        </button>
                                    </div>
                                </div>

                                <CodeBlock>{resolverUrl}</CodeBlock>

                                <p className="mb-0 mt-5 text-center text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    <Translate id="homepage.FeatureList.GetStartedFor">
                                        Paste this URL into Secure DNS settings for
                                    </Translate>{' '}

                                    <Link
                                        to="/docs/category/setup-browsers"
                                        className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        <Translate id="homepage.FeatureList.GetStartedForBrowsers">
                                            browsers
                                        </Translate>
                                    </Link>
                                    ,{' '}

                                    <Link
                                        to="/docs/category/setup-mobile-devices"
                                        className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        <Translate id="homepage.FeatureList.GetStartedForMobile">
                                            mobile devices
                                        </Translate>
                                    </Link>{' '}

                                    <Translate id="homepage.FeatureList.GetStartedForOr">
                                        or see
                                    </Translate>{' '}

                                    <Link
                                        to="/docs/get-started/where-to-start"
                                        className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        <Translate id="homepage.FeatureList.GetStartedForMore">
                                            all setup options
                                        </Translate>
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resolver and device cards */}
                <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50/80 p-5 dark:border-white/10 dark:bg-white/[0.025] md:p-8">
                    <div className="grid gap-5 md:grid-cols-3">
                        {/* ADA */}
                        <article
                            className={`rounded-2xl border p-6 transition-colors ${
                                selectedResolver === 'ada'
                                    ? 'border-blue-500/40 bg-blue-500/[0.06] dark:border-blue-400/30 dark:bg-blue-400/[0.06]'
                                    : 'border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.02]'
                            }`}
                        >
                            <div className="flex items-start gap-4">
                                <FeatureIcon />

                                <div className="min-w-0 flex-1">
                                    <div className="mb-3 flex items-start justify-between gap-3">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h3 className="font-heading m-0 text-xl font-black text-gray-900 dark:text-white">
                                                <Translate id="homepage.ThreeColums.Column1Title">
                                                    ADA DNS
                                                </Translate>
                                            </h3>

                                            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs font-bold text-blue-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                                                <Translate id="homepage.ThreeColums.Recommended">
                                                    Recommended
                                                </Translate>
                                            </span>
                                        </div>

                                        <ResolverSwitch
                                            id="checkerAda"
                                            label="Use ADA DNS"
                                            checked={selectedResolver === 'ada'}
                                            onChange={toggleResolver}
                                        />
                                    </div>

                                    <p className="m-0 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                        <Translate id="homepage.ThreeColums.Column1Body">
                                            Recommended for most users. Fast and flexible adaptive filtering
                                            for everyday browsing with social networks, Google, Microsoft,
                                            Yandex, and other popular online services.
                                        </Translate>
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* RIC */}
                        <article
                            className={`rounded-2xl border p-6 transition-colors ${
                                selectedResolver === 'ric'
                                    ? 'border-blue-500/40 bg-blue-500/[0.06] dark:border-blue-400/30 dark:bg-blue-400/[0.06]'
                                    : 'border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.02]'
                            }`}
                        >
                            <div className="flex items-start gap-4">
                                <FeatureIcon />

                                <div className="min-w-0 flex-1">
                                    <div className="mb-3 flex items-center justify-between gap-3">
                                        <h3 className="font-heading m-0 text-xl font-black text-gray-900 dark:text-white">
                                            <Translate id="homepage.ThreeColums.Column2Title">
                                                RIC DNS
                                            </Translate>
                                        </h3>

                                        <ResolverSwitch
                                            id="checkerRic"
                                            label="Use RIC DNS"
                                            checked={selectedResolver === 'ric'}
                                            onChange={toggleResolver}
                                        />
                                    </div>

                                    <p className="m-0 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                        <Translate id="homepage.ThreeColums.Column2Body">
                                            Strict DNS filtering for experienced users. Blocks more marketing,
                                            tracking, analytics, and embedded third-party resources, which may
                                            affect websites, applications, redirects, and some internet content.
                                        </Translate>
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Mobile */}
                        <article className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02]">
                            <div className="flex items-start gap-4">
                                <FeatureIcon />

                                <div className="min-w-0 flex-1">
                                    <h3 className="font-heading mb-3 text-xl font-black text-gray-900 dark:text-white">
                                        <Translate id="homepage.ThreeColums.Column3Title">
                                            Mobile Devices
                                        </Translate>
                                    </h3>

                                    <p className="m-0 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                        <Translate id="homepage.ThreeColums.Column3Body">
                                            Configure OpenBLD without installing applications.
                                            Use system-level encrypted DNS settings to protect browsing and supported apps.
                                        </Translate>{' '}

                                        <Link
                                            to="/docs/get-started/setup-mobile-devices/android/"
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                                        >
                                            <Translate id="homepage.ThreeColums.Column3BodyLink1">
                                                Set up Private DNS on Android
                                            </Translate>
                                        </Link>{' '}

                                        <Translate id="homepage.ThreeColums.Column3Body2">
                                            or
                                        </Translate>{' '}

                                        <Link
                                            to="/docs/get-started/setup-mobile-devices/apple/"
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                                        >
                                            <Translate id="homepage.ThreeColums.Column3BodyLink2">
                                                download an Apple profile
                                            </Translate>
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Third-party filters */}
                    <div className="mt-8 border-t border-gray-200 pt-8 dark:border-white/10">
                        <div className="mb-5">
                            <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-300">
                                <Translate id="homepage.Submodules.Badge">
                                    Optional
                                </Translate>
                            </p>

                            <h3 className="font-heading m-0 text-2xl font-black text-gray-900 dark:text-white">
                                <Translate id="homepage.Submodules.Header">
                                    Third-party filter profiles
                                </Translate>
                            </h3>

                            <p className="mb-0 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                <Translate id="homepage.Submodules.Description">
                                    Use an alternative filtering profile based on popular community-maintained DNS blocklists.
                                </Translate>
                            </p>
                        </div>

                        <div className="space-y-3">
                            {accordions.map((accordion) => (
                                <Accordion
                                    key={accordion.key}
                                    title={accordion.title}
                                    data={accordion.data}
                                    setupUrl={accordion.setupUrl}
                                    setupLink={accordion.setupLink}
                                    isOpen={accordion.isOpen}
                                    toggleAccordion={() =>
                                        toggleAccordion(accordion.key)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Components construct for Homepage
export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={translate(
                {
                    id: 'index.layout.title',
                    description: 'The title displayed in the website head.',
                    message: '{title}{subtitle}',
                },
                {
                    title: siteConfig.customFields.serviceName,
                    subtitle: siteConfig.customFields.serviceDescription,
                },
            )}
            description={translate(
                {
                    id: 'index.layout.description',
                    description: 'The description displayed in the website head.',
                    message: '{description}',
                },
                {
                    description: siteConfig.customFields.siteDescription,
                },
            )}
        >
            <HomepageHeaderNext/>

            <main>
                <FeaturesListHeadingNext/>
                <HomepageChromeExtension/>
                <HomepageVideoPresentation/>
                <HomepageCompareAdaAndRic/>

                <section className="content-auto">
                    <HomepageURLhaus/>
                </section>

                <section className="content-auto">
                    <HomepageMap/>
                </section>

                <section className="content-auto">
                    <LiveStats />
                </section>

                <section className="content-auto">
                    <HomepageLogosCloud/>
                </section>

                <section className="content-auto">
                    <HomepageThanks/>
                </section>

                <section className="content-auto">
                    <LatestBlogPosts/>
                </section>

                <section className="content-auto">
                    <FinalCTA/>
                </section>
            </main>
        </Layout>
    );
}
