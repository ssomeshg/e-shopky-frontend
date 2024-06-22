import { Link } from "react-router-dom";

export default function MobileNav() {

    return <>
        <div className="flex sticky z-40 bottom-0 md:hidden w-full bg-[var(--primary-color)]">
            <ul className="flex justify-between container px-5 py-3">
                <li><Link to={"/"}><svg width="20" height="20" stroke-width={1} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1222_37249)">
                        <path d="M13.5 6.94C13.501 6.8012 13.473 6.66372 13.4179 6.53632C13.3628 6.40892 13.2818 6.29438 13.18 6.2L7.00002 0.5L0.820023 6.2C0.718248 6.29438 0.637236 6.40892 0.582143 6.53632C0.52705 6.66372 0.499084 6.8012 0.500023 6.94V12.5C0.500023 12.7652 0.60538 13.0196 0.792916 13.2071C0.980452 13.3946 1.23481 13.5 1.50002 13.5H12.5C12.7652 13.5 13.0196 13.3946 13.2071 13.2071C13.3947 13.0196 13.5 12.7652 13.5 12.5V6.94Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 13.5V9.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1222_37249">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                </Link></li>
                <li className="relative">
                    <div className="bg-[var(--primary-color)] border-[5px] border-white p-3 absolute -top-8 rounded-full left-[50%] -translate-x-[50%]">
                    <Link  to={"/collection"}><svg width="20" height="20" stroke-width={1} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1222_36917)">
                            <path d="M13 6.5H9C8.72386 6.5 8.5 6.72386 8.5 7V13C8.5 13.2761 8.72386 13.5 9 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V7C13.5 6.72386 13.2761 6.5 13 6.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13 0.5H9C8.72386 0.5 8.5 0.723858 8.5 1V3.01C8.5 3.28614 8.72386 3.51 9 3.51H13C13.2761 3.51 13.5 3.28614 13.5 3.01V1C13.5 0.723858 13.2761 0.5 13 0.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 0.5H1C0.723858 0.5 0.5 0.723858 0.5 1V7C0.5 7.27614 0.723858 7.5 1 7.5H5C5.27614 7.5 5.5 7.27614 5.5 7V1C5.5 0.723858 5.27614 0.5 5 0.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 10.49H1C0.723858 10.49 0.5 10.7138 0.5 10.99V13C0.5 13.2761 0.723858 13.5 1 13.5H5C5.27614 13.5 5.5 13.2761 5.5 13V10.99C5.5 10.7138 5.27614 10.49 5 10.49Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1222_36917">
                                <rect width="25" height="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </Link>
                    </div>
                </li>
                <li>
                    <Link to={"/"}><svg width="20" height="20" stroke-width={1} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1222_38055)">
                            <path d="M7 8C8.38071 8 9.5 6.88071 9.5 5.5C9.5 4.11929 8.38071 3 7 3C5.61929 3 4.5 4.11929 4.5 5.5C4.5 6.88071 5.61929 8 7 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.72998 11.8999C3.17622 11.1674 3.80339 10.562 4.55119 10.142C5.29899 9.72186 6.14227 9.50122 6.99998 9.50122C7.85769 9.50122 8.70097 9.72186 9.44877 10.142C10.1966 10.562 10.8237 11.1674 11.27 11.8999" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1222_38055">
                                <rect width="14" height="14" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </Link>
                </li>
            </ul>
        </div>
    </>
}