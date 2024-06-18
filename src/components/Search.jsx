

export default function Search() {
    return <>
        <div className="w-4/5 absolute left-[50%] -bottom-5 translate-x-[-50%]">


            <div className="w-100 border-2 border-[var(--primary-color)] rounded-3xl  bg-white flex justify-between items-center" >
                <div className="flex">
                    <p className="primaryTextColor w-[40%] text-lg flex items-center gap-2 px-3 cursor-pointer"><span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4_26)">
                            <path d="M10.1939 0.642853H0.642883" stroke="#D33F00" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.1939 4.2244H3.62756" stroke="#D33F00" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.1939 7.80594H6.61221" stroke="#D33F00" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.3572 14.1429L14.1429 17.3571L10.9286 14.1429" stroke="#D33F00" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.1429 0.642853V17.3571" stroke="#D33F00" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4_26">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </span>Sort by</p>
                    <input type="text" className="search--bar__filter w-[60%] h-max " />
                </div>
                <button className="bg-[var(--primary-color)] rounded-3xl p-2 text-white flex items-center gap-2 px-4 float-end"><span><svg width="14" height="14" strokeWidth={2} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_19)">
                        <path d="M6 11.5C9.03757 11.5 11.5 9.03757 11.5 6C11.5 2.96243 9.03757 0.5 6 0.5C2.96243 0.5 0.5 2.96243 0.5 6C0.5 9.03757 2.96243 11.5 6 11.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.5 13.5L10 10" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_19">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                </span>Search by filter
                </button>

            </div>
        </div>
    </>
}