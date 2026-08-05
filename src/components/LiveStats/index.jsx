import React, {useCallback, useEffect, useRef, useState} from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const STATS_URL =
    'https://morning-lake-1de8.g-yevgeniy-p.workers.dev/api/stats';

const REFRESH_INTERVAL = 30_000;
const ANIMATION_DURATION = 900;

const emptyStats = {
    total: {
        queries: 0,
        successful: 0,
        blocked: 0,
    },
    last_hour: {
        queries: 0,
        successful: 0,
        blocked: 0,
    },
    rates: {
        queries_per_second: 0,
        successful_per_second: 0,
        blocked_per_second: 0,
    },
    active_servers: 0,
    configured_servers: 0,
    updated_at: null,
};

const integerFormatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
});

const rateFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
});

function formatInteger(value) {
    return integerFormatter.format(Math.round(Number(value) || 0));
}

function formatRate(value) {
    return rateFormatter.format(Number(value) || 0);
}

function useAnimatedNumber(value, duration = ANIMATION_DURATION) {
    const [displayValue, setDisplayValue] = useState(value);
    const currentValueRef = useRef(value);
    const frameRef = useRef(null);

    useEffect(() => {
        const targetValue = Number(value) || 0;
        const startValue = currentValueRef.current;
        const difference = targetValue - startValue;

        if (
            typeof window === 'undefined' ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
            difference === 0
        ) {
            currentValueRef.current = targetValue;
            setDisplayValue(targetValue);
            return undefined;
        }

        const startedAt = performance.now();

        const animate = (timestamp) => {
            const elapsed = timestamp - startedAt;
            const progress = Math.min(elapsed / duration, 1);

            // easeOutCubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const nextValue = startValue + difference * easedProgress;

            currentValueRef.current = nextValue;
            setDisplayValue(nextValue);

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            } else {
                currentValueRef.current = targetValue;
                setDisplayValue(targetValue);
            }
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [value, duration]);

    return displayValue;
}

function AnimatedValue({value, type = 'integer', suffix = ''}) {
    const animatedValue = useAnimatedNumber(value);

    const formattedValue =
        type === 'rate'
            ? formatRate(animatedValue)
            : formatInteger(animatedValue);

    return (
        <span className={styles.animatedValue}>
            {formattedValue}
            {suffix && <span className={styles.valueSuffix}>{suffix}</span>}
        </span>
    );
}

function MetricCard({
                        label,
                        value,
                        description,
                        type = 'integer',
                        suffix = '',
                        accent = false,
                    }) {
    return (
        <article
            className={`${styles.metricCard} ${
                accent ? styles.metricCardAccent : ''
            }`}
        >
            <div className={styles.metricLabel}>{label}</div>

            <div className={styles.metricValue}>
                <AnimatedValue
                    value={value}
                    type={type}
                    suffix={suffix}
                />
            </div>

            {description && (
                <div className={styles.metricDescription}>{description}</div>
            )}
        </article>
    );
}

function formatUpdatedAt(value) {
    if (!value) {
        return null;
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return null;
    }

    return date.toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'medium',
    });
}

export default function LiveStats() {
    const [stats, setStats] = useState(emptyStats);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadStats = useCallback(async () => {
        try {
            const response = await fetch(STATS_URL, {
                headers: {
                    Accept: 'application/json',
                },
                cache: 'no-store',
            });

            if (!response.ok) {
                throw new Error(`Stats request failed: ${response.status}`);
            }

            const data = await response.json();

            setStats({
                total: {
                    queries: Number(data?.total?.queries) || 0,
                    successful: Number(data?.total?.successful) || 0,
                    blocked: Number(data?.total?.blocked) || 0,
                },
                last_hour: {
                    queries: Number(data?.last_hour?.queries) || 0,
                    successful: Number(data?.last_hour?.successful) || 0,
                    blocked: Number(data?.last_hour?.blocked) || 0,
                },
                rates: {
                    queries_per_second:
                        Number(data?.rates?.queries_per_second) || 0,
                    successful_per_second:
                        Number(data?.rates?.successful_per_second) || 0,
                    blocked_per_second:
                        Number(data?.rates?.blocked_per_second) || 0,
                },
                active_servers: Number(data?.active_servers) || 0,
                configured_servers: Number(data?.configured_servers) || 0,
                updated_at: data?.updated_at || null,
            });

            setError(false);
        } catch (requestError) {
            console.error('Unable to load OpenBLD statistics:', requestError);
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadStats();

        const intervalId = window.setInterval(() => {
            if (!document.hidden) {
                loadStats();
            }
        }, REFRESH_INTERVAL);

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                loadStats();
            }
        };

        document.addEventListener(
            'visibilitychange',
            handleVisibilityChange,
        );

        return () => {
            window.clearInterval(intervalId);
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange,
            );
        };
    }, [loadStats]);

    const serverPercent =
        stats.configured_servers > 0
            ? Math.min(
                (stats.active_servers / stats.configured_servers) * 100,
                100,
            )
            : 0;

    const updatedAt = formatUpdatedAt(stats.updated_at);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>
                            <span className={styles.liveDot} aria-hidden="true" />

                            <Translate id="homepage.LiveStats.PreHeader">
                                Live OpenBLD network
                            </Translate>
                        </p>

                        <h2 className={styles.title}>
                            <Translate id="homepage.LiveStats.Header">
                                DNS protection at scale
                            </Translate>
                        </h2>

                        <p className={styles.description}>
                            <Translate id="homepage.LiveStats.Description">
                                Real-time statistics from the OpenBLD global DNS
                                infrastructure.
                            </Translate>
                        </p>
                    </div>

                    <div className={styles.serverStatus}>
                        <div className={styles.serverStatusHeader}>
                            <span>
                                <Translate id="homepage.LiveStats.ActiveServers">
                                    Active servers
                                </Translate>
                            </span>

                            <strong>
                                <AnimatedValue value={stats.active_servers} />
                                <span className={styles.serverSeparator}>/</span>
                                <AnimatedValue
                                    value={stats.configured_servers}
                                />
                            </strong>
                        </div>

                        <div
                            className={styles.progressTrack}
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax={stats.configured_servers}
                            aria-valuenow={stats.active_servers}
                        >
                            <div
                                className={styles.progressBar}
                                style={{width: `${serverPercent}%`}}
                            />
                        </div>
                    </div>
                </div>

                <div
                    className={`${styles.primaryGrid} ${
                        loading ? styles.loading : ''
                    }`}
                >
                    <MetricCard
                        label={
                            <Translate id="homepage.LiveStats.TotalQueries">
                                Total DNS queries
                            </Translate>
                        }
                        value={stats.total.queries}
                        description={
                            <Translate id="homepage.LiveStats.TotalQueriesDescription">
                                Processed by OpenBLD
                            </Translate>
                        }
                        accent
                    />

                    <MetricCard
                        label={
                            <Translate id="homepage.LiveStats.TotalBlocked">
                                Threats blocked
                            </Translate>
                        }
                        value={stats.total.blocked}
                        description={
                            <Translate id="homepage.LiveStats.TotalBlockedDescription">
                                Malicious and unwanted requests
                            </Translate>
                        }
                    />

                    <MetricCard
                        label={
                            <Translate id="homepage.LiveStats.CurrentRate">
                                Current query rate
                            </Translate>
                        }
                        value={stats.rates.queries_per_second}
                        type="rate"
                        suffix=" QPS"
                        description={
                            <Translate id="homepage.LiveStats.CurrentRateDescription">
                                Queries processed per second
                            </Translate>
                        }
                    />
                </div>

                <div className={styles.hourPanel}>
                    <div className={styles.hourHeader}>
                        <div>
                            <span className={styles.hourEyebrow}>
                                <Translate id="homepage.LiveStats.LastHour">
                                    Last hour
                                </Translate>
                            </span>

                            <h3>
                                <Translate id="homepage.LiveStats.RecentActivity">
                                    Recent DNS activity
                                </Translate>
                            </h3>
                        </div>

                        <div className={styles.updateStatus}>
                            {error ? (
                                <span className={styles.errorStatus}>
                                    <Translate id="homepage.LiveStats.UpdateError">
                                        Live update temporarily unavailable
                                    </Translate>
                                </span>
                            ) : updatedAt ? (
                                <span>
                                    <Translate id="homepage.LiveStats.Updated">
                                        Updated
                                    </Translate>
                                    : {updatedAt}
                                </span>
                            ) : null}
                        </div>
                    </div>

                    <div className={styles.hourGrid}>
                        <div className={styles.hourMetric}>
                            <span>
                                <Translate id="homepage.LiveStats.HourQueries">
                                    Queries
                                </Translate>
                            </span>
                            <strong>
                                <AnimatedValue
                                    value={stats.last_hour.queries}
                                />
                            </strong>
                        </div>

                        <div className={styles.hourMetric}>
                            <span>
                                <Translate id="homepage.LiveStats.HourSuccessful">
                                    Successful
                                </Translate>
                            </span>
                            <strong>
                                <AnimatedValue
                                    value={stats.last_hour.successful}
                                />
                            </strong>

                            <small>
                                <AnimatedValue
                                    value={
                                        stats.rates.successful_per_second
                                    }
                                    type="rate"
                                    suffix=" QPS"
                                />
                            </small>
                        </div>

                        <div className={styles.hourMetric}>
                            <span>
                                <Translate id="homepage.LiveStats.HourBlocked">
                                    Blocked
                                </Translate>
                            </span>
                            <strong>
                                <AnimatedValue
                                    value={stats.last_hour.blocked}
                                />
                            </strong>

                            <small>
                                <AnimatedValue
                                    value={stats.rates.blocked_per_second}
                                    type="rate"
                                    suffix=" QPS"
                                />
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
