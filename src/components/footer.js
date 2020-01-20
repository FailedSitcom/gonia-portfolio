import React from "react"

const Footer = props => {
  const stopPropagation = event => {
    event.stopPropagation()
  }
  return (
    <footer
      className="bottom-0 fixed flex justify-center z-10 w-full"
      onClick={() => props.setInputValue(!props.inputValue)}
    >
      <div
        className={`bottom-0 bg-white rounded-t-lg p-5 max-w-4xl mx-6 overflow-hidden w-full cursor-pointer ${
          props.inputValue ? "h-auto" : "h-16"
        } ${
          props.inputValue ? "sm:h-40" : "sm:h-16"
        } shadow-2xl text-center transition-height`}
      >
        <span className="uppercase">Connect</span>
        <div className="sm:px-4 flex flex-col">
          <div className="flex-1 sm:flex">
            <div className="mt-4 sm:w-1/4">
              <a href="mailto:goniacho@gmail.com" className="underline">
                Email
              </a>
            </div>
            <div className="mt-4 sm:w-1/4">
              <a
                href="https://www.linkedin.com/in/goniacholewa/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={stopPropagation}
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-4 sm:w-1/4">
              <a
                href="https://www.instagram.com/coconuthooves"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={stopPropagation}
              >
                Instagram
              </a>
            </div>
            <div className="mt-4 sm:w-1/4">
              <a
                href="https://www.twitter.com/_gonia_"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={stopPropagation}
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="flex-1 sm:flex mt-8">
            <div className="sm:w-1/2 sm:text-left">
              © Gonia Cholewa {new Date().getFullYear()}
            </div>
            <div className="sm:w-1/2 sm:text-right">
              Website built by{" "}
              <a
                href="https://www.samueldurkin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={stopPropagation}
              >
                Sam
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
