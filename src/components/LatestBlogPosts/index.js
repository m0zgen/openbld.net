import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";

function stripHtml(input) {
    if (!input) {
        return '';
    }

    return input
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function truncate(input, maxLength = 170) {
    if (!input || input.length <= maxLength) {
        return input;
    }

    return `${input.slice(0, maxLength).trim()}…`;
}

function formatDate(date) {
    if (!date) {
        return '';
    }

    return new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(date));
}

export default function LatestBlogPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let cancelled = false;

        fetch('/blog/feed.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to load blog feed: ${res.status}`);
                }

                return res.json();
            })
            .then((feed) => {
                if (!cancelled) {
                    setPosts((feed.items || []).slice(0, 3));
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setPosts([]);
                }
            });

        return () => {
            cancelled = true;
        };
    }, []);

    if (!posts.length) {
        return null;
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <p className={styles.eyebrow}>
                        <Translate id="homepage.LatestBlogPosts.PreHeader">OpenBLD.net Blog</Translate>
                    </p>
                    <h2>
                        <Translate id="homepage.LatestBlogPosts.Header">Latest Blog Notes</Translate>
                    </h2>
                    <p>
                        <Translate id="homepage.LatestBlogPosts.PostHeader">
                        Short notes about DNS security, privacy, infrastructure,
                        and real-world threats.
                        </Translate>
                    </p>
                </div>

                <div className={styles.grid}>
                    {posts.map((post) => {
                        const date = post.date_published || post.date_modified;
                        const description = truncate(
                            stripHtml(post.summary || post.content_html),
                        );

                        return (
                            <Link
                                key={post.id || post.url || post.title}
                                to={post.url || '/blog'}
                                className={styles.card}
                            >
                                {date ? (
                                    <div className={styles.date}>{formatDate(date)}</div>
                                ) : null}

                                <h3>{post.title}</h3>

                                {description ? <p>{description}</p> : null}

                                {post.tags?.length ? (
                                    <div className={styles.tags}>
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                ) : null}
                            </Link>
                        );
                    })}
                </div>

                <div className={styles.more}>
                    <Link to="/blog">
                        <Translate id="homepage.LatestBlogPosts.ReadMore">Read more in the Blog →</Translate>
                    </Link>
                </div>
            </div>
        </section>
    );
}
