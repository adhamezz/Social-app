export default function Divider({text,className}) {
  return (
    <>

         <div
            className={`seperator  text-gray-400 text-sm   relative  text-center before:w-1/3
          before:h-px before:bg-linear-to-r before:from-transparent before:via-gray-400/90
          before:to-transparent before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
          after:w-1/3 after:h-px after:bg-linear-to-r after:from-transparent after:via-gray-400/90
          after:to-transparent after:absolute after:right-0 after:top-1/2
          after:-translate-y-1/2 ${className}`}
          >
            {text}
          </div>

    </>
  )
}
