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
import Translate, {translate} from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';
import HomepageMap from "../components/HomepageMap";

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
                to="/docs/category/get-started"
            >
                <Translate
                    id="homepage.Header.Button1">
                How to setup - 5min ⏱️
                </Translate>
            </Link>

            <Link
                className="mt-3 md:mt-0 lg:mt-0 inline-flex items-center ml-3 px-8 py-3.5 text-lg text-center text-green-100 font-bold transition-colors duration-150 bg-amber-600 dark:bg-green-700 focus:shadow-outline hover:bg-green-800 hover:text-gray-200 rounded-full"
                to="/docs/intro"
            >
                <span>
                <Translate
                    id="homepage.Header.Button2">
                    OpenBLD.net Intro
                </Translate>
                </span>
                <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path>
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
                    OpenBLD.net is a service designed to minimize Internet noise such as advertising and tracking,
                    allowing you to be yourself and stay focused while surfing the Internet. And of course you can help us
                    with
                    </Translate>
                    <br/>

                    <a href="/docs/donation" className="mt-5 font-medium text-blue-200 dark:text-blue-500 hover:underline">
                        <Translate
                            id="homepage.Header.BriefLink1">
                        Donations
                        </Translate>
                    </a>
                    <Translate
                        id="homepage.Header.BriefOr"> or
                    </Translate>

                    <a href="/docs/sponsorship" className="mt-5 font-medium text-blue-200 dark:text-blue-500 hover:underline">
                        <Translate
                            id="homepage.Header.BriefLink2"> Sponsorship
                        </Translate>
                    </a>.

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

// Get in a better way to work online
function FeaturesListHeading() {
    const [bool, setBool] = useState(true);

    const [isCheckedAda, setIsCheckedAda] = useState(true);
    const [isCheckedRic, setIsCheckedRic] = useState(false);


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
                                        Get in a better way to work online.
                                        </Translate>
                                    </h2>
                                    <p className="mb-8 text-xl font-bold">
                                        <Translate
                                            id="homepage.FeatureList.Subtitle">
                                        Without agents and without software installs.
                                        </Translate>
                                    </p>

                                    {/*<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Features:</h2>*/}
                                    <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <Translate
                                                id="homepage.FeatureList.Item1">
                                            Works on mobile devices and browsers
                                            </Translate>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <Translate
                                                id="homepage.FeatureList.Item2">
                                            For personal usage, home and small business
                                            </Translate>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <Translate
                                                id="homepage.FeatureList.Item3">
                                            Reduce browsers memory and CPU usage
                                            </Translate>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <Translate
                                                id="homepage.FeatureList.Item4">
                                            Reduce potentially Information Security Risks
                                            </Translate>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <Translate
                                                id="homepage.FeatureList.Item5">
                                            Unlimited access with 100k+ queries per day
                                            </Translate>
                                        </li>
                                        <li class="flex items-center">
                                            <svg class="w-3.5 h-3.5 mr-2 mb-3 text-red-500 dark:text-red-500 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            <p>
                                                <a className="text-blue-600 dark:text-blue-500" href="/docs/overwiew/openbld-plus">
                                                    <Translate
                                                        id="homepage.FeatureList.Item6">
                                                    Get benefits from Donations / Sponsorship
                                                    </Translate>
                                                </a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/*OpenBLD logo*/}
                            <div className="w-full md:w-1/2 p-8">
                                <img className="mx-auto md:mr-0" src="img/site-cover-openbld-net-dark.png" alt="OpenBLD.net DNS Site Logo"/>

                                {/*Quick setup*/}
                                {/*<div className="mt-3 block max-w-xl pl-6 pr-6 p-2 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">*/}
                                <div className="mt-3 block max-w-xl pl-6 pr-6 p-2 border border-gray-200 shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
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
                                    <span className="font-semibold tracking-tight text-center text-green-800 dark:text-green-400">
                                        {/*<CodeBlock>*/}
                                        {/*    https://ada.openbld.net/dns-query*/}
                                        {/*</CodeBlock>*/}


                                        {isCheckedAda ? <div>
                                            <span className="font-semibold tracking-tight text-center text-green-800 dark:text-green-400">
                                            <CodeBlock>
                                                https://ada.openbld.net/dns-query
                                            </CodeBlock>
                                        </span>
                                            </div> : null}

                                            {isCheckedRic ? <div>
                                            <span className="font-semibold tracking-tight text-center text-green-800 dark:text-green-400">
                                            <CodeBlock>
                                                https://ric.openbld.net/dns-query
                                            </CodeBlock>
                                        </span>
                                            </div> : null}
                                    </span>
                                    <p className="m-0 xl:hidden">
                                        <Translate
                                            id="homepage.FeatureList.GetStartedFor">
                                        Get Started for:
                                        </Translate>
                                        <a href="/docs/category/setup-browsers" className="mt-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            <Translate
                                                id="homepage.FeatureList.GetStartedForBrowsers"> Browsers
                                            </Translate>
                                        </a>, <a href="/docs/category/setup-mobile-devices" className="mt-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <Translate
                                            id="homepage.FeatureList.GetStartedForMobile"> Mobile
                                        </Translate>
                                        </a>,
                                        <a href="/docs/get-started/where-to-start" className="mt-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <Translate
                                            id="homepage.FeatureList.GetStartedForMore"> more...
                                        </Translate>
                                        </a>
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
                                            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z" fill="#3B82F6"></path>
                                                    <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#3B82F6"></path>
                                                    <path d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z" fill="#3B82F6"></path>
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
                                                ADA - Adaptive DNS: Fast and Flexible Internet surfing with Social Networks, Google, Microsoft, Yandex and etc.
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-8">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-auto md:w-full lg:w-auto p-3">
                                            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z" fill="#3B82F6"></path>
                                                    <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#3B82F6"></path>
                                                    <path d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z" fill="#3B82F6"></path>
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
                                                RIC - Strict DNS: Blocks many marketing and tracking resources, which may affect access to certain internet content!
                                                </Translate>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-8">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-auto md:w-full lg:w-auto p-3">
                                            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z" fill="#3B82F6"></path>
                                                    <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#3B82F6"></path>
                                                    <path d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z" fill="#3B82F6"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="flex-1 p-3">
                                            <h3 class="font-heading mb-2 text-xl text-gray-900 font-black">
                                                <Translate
                                                    id="homepage.ThreeColums.Column3Title">
                                                Mobile Devices
                                                </Translate>
                                            </h3>
                                            <p class="text-sm text-gray-700 font-bold">
                                                <Translate
                                                    id="homepage.ThreeColums.Column3Body">
                                                Android, iOS, iPad devices.
                                                </Translate>
                                                    <a href="/docs/get-started/setup-mobile-devices/android/">
                                                        <Translate
                                                            id="homepage.ThreeColums.Column3BodyLink1"> Setup
                                                        </Translate>
                                                    </a>
                                                <Translate
                                                    id="homepage.ThreeColums.Column3Body2"> "Private DNS" on Android or
                                                    </Translate>
                                                <a href="/docs/get-started/setup-mobile-devices/apple/">
                                                    <Translate
                                                        id="homepage.ThreeColums.Column3BodyLink2"> download
                                                    </Translate>
                                                </a>
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
      // title={`Hello from ${siteConfig.customFields.titleHeader}`}
      title={translate({id: 'index.layout.title', description: 'The title displayed in the website head.', message: 'Hello from {title}{subtitle}'}, {title: siteConfig.customFields.serviceName, subtitle: siteConfig.customFields.serviceDescription})}
      // description="OpenBLD.net DNS - Focus on information with adblocking and implicit cybersecurity threat prevention."
      description={translate({id: 'index.layout.description', description: 'The description displayed in the website head.', message: '{description}'}, {description: siteConfig.customFields.siteDescription})}
    >
      <HomepageHeader />
      <main>
          <FeaturesListHeading />
          <HomepageChromeExtension />
          <HomepageVideoPresentation />
          <HomepageCompareAdaAndRic />
          {/*<HomepageFeatures />*/}

          <HomepageLogosCloud />
          <HomepageMap/>
          <HomepageThanks />


      </main>
    </Layout>
  );
}
