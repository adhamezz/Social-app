import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function SocialButtons() {
  return (
    <>
    <div className="social-btns flex items-center gap-3 *:grow">
            <button className="btn hover:scale-105 transition-transform duration-200">
              <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
              <span>Google</span>
            </button>
            <button className="btn bg-blue-500 text-white hover:scale-105 transition-transform duration-200">
              <FontAwesomeIcon icon={faFacebookF} />
              <span>Facebook</span>
            </button>
          </div>
    
    
    
    
    </>
  )
}
