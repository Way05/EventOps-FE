//LANDING PAGE AKA HOMESCREEN
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EFEFEF] font-sans text-black">
      <div className="grid h-screen w-screen grid-cols-3 grid-rows-10 gap-3">
        <div className="flex w-screen items-center justify-between">
          <div className="group mt-5 ml-5 flex items-center">
            <svg
              width="45"
              height="45"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="svgGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#4FBBC9" />
                  <stop offset="100%" stopColor="#8869D1" />
                </linearGradient>
              </defs>
              <path
                className="group-hover:fill-[url(#svgGrad)]"
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V13.5C3 13.6818 3.09864 13.8492 3.25762 13.9373C3.41659 14.0254 3.61087 14.0203 3.765 13.924L7.5 11.5896L11.235 13.924C11.3891 14.0203 11.5834 14.0254 11.7424 13.9373C11.9014 13.8492 12 13.6818 12 13.5V2.5C12 2.22386 11.7761 2 11.5 2H3.5Z"
                fill="black"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <h1 className="ml-5 text-6xl font-bold">
              <span className="group-hover:bg-linear-[25deg,#4FBBC9,#8869D1] group-hover:bg-clip-text group-hover:text-transparent">
                Hourglass
              </span>
            </h1>
          </div>
          <div className="group mt-5 mr-5 rounded-4xl bg-linear-[25deg,#4FBBC9,#8869D1] p-3 transition-transform duration-500 hover:rotate-180">
            <svg
              className="duration-500 group-hover:-rotate-180"
              width="30"
              height="30"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-white"
                d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                fill="black"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="group row-start-4 row-end-10 mr-auto ml-auto w-3/4 rounded-sm bg-[#4FBBC9] p-5 text-center shadow-[-10px_10px_0px_0px_#8869D1]">
          <svg
            className="absolute float-left transition-transform duration-500 group-hover:translate-x-10"
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="mr-auto ml-auto text-2xl font-bold">FAQ</h1>
          <p>
            Is it free<br></br>yes
          </p>
        </div>
        <div className="group row-start-4 row-end-10 mr-auto ml-auto w-3/4 rounded-sm bg-[#4FBBC9] p-5 text-center shadow-[-10px_10px_0px_0px_#8869D1]">
          <svg
            className="absolute float-left transition-transform duration-500 group-hover:translate-x-10"
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="ml-auto text-2xl font-bold">Features</h1>
          <p>
            Plan events<br></br>calendar integration<br></br>Easy RSVP<br></br>
            Easy guest management<br></br>Easy venue management
          </p>
        </div>
        <div className="group row-start-4 row-end-10 mr-auto ml-auto w-3/4 rounded-sm bg-[#4FBBC9] p-5 text-center shadow-[-10px_10px_0px_0px_#8869D1]">
          <svg
            className="absolute float-left transition-transform duration-500 group-hover:translate-x-10"
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="ml-auto text-2xl font-bold">Why Us?</h1>
          <p>Because we said so</p>
        </div>
      </div>
    </div>
  );
}
