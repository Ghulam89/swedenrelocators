import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Language.module.css";

import eng from "../../assets/images/uk.webp";
import ge from "../../assets/images/ge.webp";
import da from "../../assets/images/da.png";
import sw from "../../assets/images/sw.png";
import pe from "../../assets/images/pe.png";
import sp from "../../assets/images/sp.png";
import po from "../../assets/images/po.png";
import ab from "../../assets/images/ab.png";
// import { cdnBaseUrl, environment, projectToken } from "../../i18n";

// interface FlagIconProps {
//   countryCode: string;
// }

// function FlagIcon({ countryCode = "" }: FlagIconProps) {
//   if (countryCode === "en") {
//     countryCode = "gb";
//   }

//   return (
//     <span
//       className={`fi fis ${styles.fiCircle} inline-block mr-2 fi-${countryCode}`}
//     />
//   );
// }

// interface Language {
//   key: string;
//   name: string;
// }

// const LANGUAGE_SELECTOR_ID = "language-selector";

import { FaAngleUp, FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
const LanguageSelector = () => {
  //   const { i18n } = useTranslation();
  //   const [languages, setLanguages] = useState<Language[]>([]);
  //   const [isOpen, setIsOpen] = useState(true);
  //   const selectedLanguage = languages.find(
  //     (language) => language.key === i18n.language
  //   );

  const [isOpen, setIsOpen] = useState(null);

  const handleLanguageChange = () => {
    setIsOpen(!isOpen);
  };

  //   useEffect(() => {
  //     const setupLanguages = async () => {
  //       const appLanguages = await fetch(
  //         `${cdnBaseUrl}/${projectToken}/${environment}/_languages`
  //       ).then((response) => response.json());
  //       setLanguages(appLanguages);
  //     };
  //     setupLanguages();
  //   }, []);

  //   useEffect(() => {
  //     const handleWindowClick = (event: any) => {
  //       const target = event.target.closest("button");
  //       if (target && target.id === LANGUAGE_SELECTOR_ID) {
  //         return;
  //       }
  //       setIsOpen(false);
  //     };
  //     window.addEventListener("click", handleWindowClick);
  //     return () => {
  //       window.removeEventListener("click", handleWindowClick);
  //     };
  //   }, []);

  //   if (!selectedLanguage) {
  //     return null;
  //   }

  return (
    <>
      {/* <div className="tw-flex tw-bg-red-700 tw-items-center tw-z-40">
        <div className="tw-relative tw-inline-block tw-text-left">
          <div className=" ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-sm tw-font-medium tw-text-gray-700 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
              id={LANGUAGE_SELECTOR_ID}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <FlagIcon countryCode={selectedLanguage.key} />
              {selectedLanguage.name}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className="tw-origin-top-right tw-absolute tw-right-0 tw-mt-2 tw-w-96 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-selector"
            >
              <div className="tw-py-1 tw-grid tw-grid-cols-2 tw-gap-2" role="none">
                {languages.map((language, index) => {
                  return (
                    <button
                      key={language.key}
                      onClick={() => handleLanguageChange(language)}
                      className={`${
                        selectedLanguage.key === language.key
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700"
                      } block px-4 py-2 text-sm text-left items-center inline-flex hover:bg-gray-100 ${
                        index % 2 === 0 ? "rounded-r" : "rounded-l"
                      }`}
                      role="menuitem"
                    >
                      <FlagIcon countryCode={language.key} />
                      <span className="truncate">{language.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div> */}

      <div className="tw-flex  tw-items-center tw-z-40">
        <button
          onClick={handleLanguageChange}
          type="button"
          className="tw-inline-flex tw-gap-2 tw-items-center border  tw-justify-between tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-3 tw-py-1 tw-white tw-text-sm tw-font-medium tw-text-gray-700 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
          aria-haspopup="true"
        >
          <img
            src={eng}
            className=" tw-w-5 tw-h-5 tw-rounded-full tw-object-cover"
            alt=""
          />
          <p className=" m-0 tw-text-sm tw-text-white">English</p>

          <svg
            className="-tw-mr-2  tw-mb-1 tw-h-5 tw-w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className=" tw-absolute  tw-z-[99999]    tw-right-12  sm:tw-top-20 md:tw-top-12  lg:tw-top-12 tw-top-32  tw-mt-2 tw-w-80 tw-rounded-md tw-shadow-lg tw-bg-white tw-pb-3 tw-ring-1 tw-ring-black tw-ring-opacity-5">
            <div
              className="tw-py-1 tw-grid tw-grid-cols-2  tw-gap-3 p-2"
              role="none"
            >
              <div className=" ">
                <div className=" tw-flex  tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
                  <img
                    src={eng}
                    className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
                    alt=""
                  />
                  <p className=" m-0 tw-text-black">English</p>
                </div>
              </div>
              <div className="  ">
                <div className=" tw-flex  tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
                  <img
                    src={ge}
                    className=" tw-w-7 tw-h-7 tw-object-cover tw-rounded-full"
                    alt=""
                  />
                  <p className=" m-0 tw-text-black">German</p>
                </div>
              </div>

              <div className="  ">
                <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
                  <img
                    src={sw}
                    className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
                    alt=""
                  />
                  <p className=" m-0 tw-text-black">Swedish</p>
                </div>
              </div>
              <div className="  ">
                <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
                  <img
                    src={da}
                    className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
                    alt=""
                  />
                  <p className=" m-0 tw-text-black">Danish</p>
                </div>
              </div>

              <div className="  ">
                <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
                  <img
                    src={po}
                    className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
                    alt=""
                  />
                  <p className=" m-0 tw-text-black">Portugesse</p>
                </div>
              </div>
              <div className="  ">
                <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
                  <img
                    src={sw}
                    className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
                    alt=""
                  />
                  <p className=" m-0 tw-text-black">Spainish</p>
                </div>
              </div>
              <div className="  ">
                <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
                  <img
                    src={ab}
                    className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
                    alt=""
                  />
                  <p className=" m-0 tw-text-black">Arabic</p>
                </div>
              </div>
              <div className="  ">
                <div className=" tw-flex   tw-gap-4 hover:tw-bg-gray-light  p-2 tw-rounded-md">
                  <img
                    src={pe}
                    className=" tw-w-7 tw-h-7 tw-rounded-full tw-object-cover"
                    alt=""
                  />
                  <p className=" m-0 tw-text-black">Persian</p>
                </div>
              </div>


              
            </div>
            
            <div className=" ">


<Link to={"#"} className="">Other Languages</Link>

</div>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSelector;
