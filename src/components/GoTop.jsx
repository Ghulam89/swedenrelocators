import React from 'react';
import { LiaAngleUpSolid } from "react-icons/lia";

const GoTop = ({ scrollStepInPx = 50, delayInMs = 15 }) => {
  const [thePosition, setThePosition] = React.useState(false);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    const listenToScroll = () => {
      let position = window.pageYOffset > 170;
      setThePosition(position);
    };

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0){
      clearInterval(timeoutRef.current);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  }

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  }

  return (
    <>
      {thePosition && (
        <div id='scroll_up' className="tw-fixed top-visible tw-bottom-5 tw-right-5  tw-rounded-md tw-z-50 tw-cursor-pointer tw-p-3  tw-shadow-2xl    tw-bg-lightPink tw-text-white hover:bg-primary hover:shadow-lg transition duration-500 ease-in-out tw-bg-blue transform hover:-translate-y-1" onClick={scrollToTop}>
          <LiaAngleUpSolid  className=' tw-text-white ' size={20} />
        </div>
      )}
    </>
  )
}

export default GoTop;
