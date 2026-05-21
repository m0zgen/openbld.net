import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";

export default function FinalCTA() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.box}>
                    <div className={styles.content}>
                        <p className={styles.eyebrow}>
                            <Translate id="homepage.FinalCTA.PreHeader">Ready to try OpenBLD?</Translate>
                        </p>

                        <h2>
                            <Translate id="homepage.FinalCTA.Header">Take control of your DNS layer.</Translate>
                        </h2>

                        <p className={styles.description}>
                            <Translate id="homepage.FinalCTA.PostHeader">
                                Start using OpenBLD in minutes with public DNS, DoH, DoT,
                                and security-focused filtering.
                            </Translate>
                        </p>
                    </div>

                    <div className={styles.actions}>
                        <Link
                            className="button button--primary button--lg"
                            to="/docs/category/get-started"
                        >
                            <Translate
                                id="homepage.FinalCTA.QuickSetup">
                                Quick setup
                            </Translate>
                        </Link>

                        {/*<Link*/}
                        {/*    className="button button--secondary button--lg"*/}
                        {/*    to="/docs/"*/}
                        {/*>*/}
                        {/*    DNS endpoints*/}
                        {/*</Link>*/}

                        <a
                            className={styles.statusLink}
                            href="https://bld-status.sys-adm.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Translate
                                id="homepage.FinalCTA.CheckStatus">
                                Check status →
                            </Translate>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
