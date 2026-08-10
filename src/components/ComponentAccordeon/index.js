// Accordion.js

import Link from '@docusaurus/Link';

export default function Accordion({
                                      title,
                                      data,
                                      setupUrl,
                                      setupLink,
                                      isOpen,
                                      toggleAccordion,
                                  }) {
    return (
        <div
            className={`
                overflow-hidden rounded-xl border transition-colors
                ${
                isOpen
                    ? 'border-blue-500/30 bg-blue-500/[0.05] dark:border-blue-400/30 dark:bg-blue-400/[0.05]'
                    : 'border-gray-200 bg-white hover:bg-gray-50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]'
            }
            `}
        >
            <button
                type="button"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                className="
                    flex w-full items-center justify-between gap-4
                    px-5 py-4 text-left
                    text-sm font-black text-gray-900
                    transition-colors
                    hover:text-blue-600
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-inset focus-visible:ring-blue-500
                    dark:text-gray-200 dark:hover:text-blue-300
                "
            >
                <span>{title}</span>

                <span
                    className={`
                        relative flex h-7 w-7 shrink-0 items-center justify-center
                        rounded-full border
                        transition-all duration-200
                        ${
                        isOpen
                            ? 'rotate-45 border-blue-500/30 bg-blue-500/10 text-blue-600 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-300'
                            : 'rotate-0 border-gray-300 bg-gray-100 text-gray-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-400'
                    }
                    `}
                    aria-hidden="true"
                >
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 4V16M4 10H16"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
            </button>

            {isOpen && (
                <div className="border-t border-gray-200 px-5 py-4 dark:border-white/10">
                    {data && (
                        <div className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            {data}
                        </div>
                    )}

                    <Link
                        to={setupUrl}
                        className="
                            inline-flex items-center gap-2
                            text-sm font-bold text-blue-600
                            hover:text-blue-700 hover:underline
                            dark:text-blue-400 dark:hover:text-blue-300
                        "
                    >
                        <span>{setupLink}</span>

                        <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M7 4L13 10L7 16"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            )}
        </div>
    );
}
