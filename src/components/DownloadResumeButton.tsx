'use client'

import { FaDownload } from "react-icons/fa"
import { Button } from "./ui/button"
import { useState } from "react";

function DownloadResumeButton() {
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/Roshaan Siddiqui August 2025 - Contactless.pdf';
    link.download = 'Roshaan Siddiqui August 2025 - Contactless.pdf';
    link.click();
  };

  return (
    <Button
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
      className={`fixed bottom-10 right-3 text-xl p-6 py-8 flex items-center justify-end transition-all shadow-lg shadow-black/30 hover:shadow-black/60
        duration-300 bg-primary dark:bg-primary hover:bg-accent dark:hover:bg-accent dark:text-foreground-light text-foreground-light rounded-full ${
        isHover ? 'w-64' : 'w-16'
      }`}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {isHover && <span
        className={` pr-4 transition-opacity duration-300 ${
          isHover ? 'opacity-100 ml-2' : 'opacity-0'
        }`}
      >
        Download Resume
      </span>}
      <FaDownload className="scale-150" />
    </Button>
  )
}

export default DownloadResumeButton