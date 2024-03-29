import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Language.module.css";

import eng from '../../assets/images/eng.svg'
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

import { FaAngleUp } from "react-icons/fa6";
 const LanguageSelector = () => {
//   const { i18n } = useTranslation();
//   const [languages, setLanguages] = useState<Language[]>([]);
//   const [isOpen, setIsOpen] = useState(true);
//   const selectedLanguage = languages.find(
//     (language) => language.key === i18n.language
//   );


const [isOpen, setIsOpen] = useState(null);
 
  const handleLanguageChange =() => {
  
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
        <div className="tw-relative tw-inline-block ">
        <button
          onClick={handleLanguageChange}
              type="button"
              className="tw-inline-flex tw-gap-2 tw-items-center tw-justify-center tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-4 tw-py-2  tw-bg-blue tw-text-sm tw-font-medium tw-text-gray-700 tw-hover:bg-gray-50 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
      
              aria-haspopup="true"
         
            >
                
            
              <img src={eng} className=" tw-w-6" alt="" />
              <p className=" m-0 tw-text-white">
              English
              </p>
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="orange"
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
            <div
              className="tw-origin-top-right tw-absolute tw-z-50 tw-right-0 tw-mt-2 tw-w-96 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5"
            
            
            >
              <div className="tw-py-1 tw-grid tw-grid-cols-2 tw-gap-2" role="none">
                 <div>d</div>
                 <div>d</div>
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
              </div>
            </div>
          )}

          </div>
          </div>


    </>
  );
};

export default LanguageSelector
