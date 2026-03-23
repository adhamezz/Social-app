import { Link } from "react-router";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/images/avatar1.jpg";
import background from "../../assets/images/depositbackground.jpg";

export default function AuthHero({title, description}) {
  const features = [
    {
      icon: faMessage,
      title: "Real-time Chat",
      description: "Instant Messaging",
      colors: "bg-teal-400/20 text-green-400",
    },
    {
      icon: faImage,
      title: "Share Media",
      description: "Photos & Videos",
      colors: "bg-blue-400/20 text-white/40",
    },
    {
      icon: faBell,
      title: "Smart Alerts",
      description: "Stay Updated",
      colors: "bg-pink-400/20 text-pink-100",
    },
    {
      icon: faUsers,
      title: "Communities",
      description: "Find ",
      colors: "bg-teal-400/20 text-green-400",
    },
  ];

  const stats = [
    {
      icon: faUsers,
      value: "2M+",
      label: "Active Users",
    },
    {
      icon: faHeart,
      value: "10M+",
      label: "Posts Shared",
    },
    {
      icon: faUsers,
      value: "50M+",
      label: "Message Sent",
    },
  ];

  return (
    <>
      <div
        className={`signup-hero text-white min-h-screen bg-center bg-cover flex flex-col justify-between p-10`}
        style={{
          backgroundImage: `linear-gradient(#1447e6cc, #1447e6cc), url(${background})`,
        }}
      >
        <header>
          <h1>
            <Link className="mb-20 flex items-center gap-3" to={`/`}>
              <span
                className="size-10 text-lg font-bold flex justify-center items-center bg-white/40
               rounded-xl border border-white/30"
              >
                S
              </span>
              <span className="text-2xl font-bold">SocialHub</span>
            </Link>
          </h1>
        </header>

        <div className="content space-y-6">
          <div className="title">
            <h2 className="text-5xl font-bold max-w-96">
             {title.normal}
              <span className="pb-4  bg-linear-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
                {title.highlight}
              </span>
            </h2>
            <p className="max-w-md">
              {description}
            </p>
          </div>
          <section className="feature-section ">
            <h3 className="sr-only">Platform Features</h3>
            <ul className="feature-cards grid lg:grid-cols-2 gap-4 ">
              {features.map((feature,index) => (
                <li key={index} className="flex items-center gap-3 bg-white/20    backdrop-blur-sm  border border-white/30    rounded-xl px-4 py-2 hover:scale-105 transition-transform duration-200">
                  <div
                    className={`icon size-10 flex justify-center items-center rounded-xl ${feature.colors}`}
                  >
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <div className="card-body">
                    <h4>{feature.title}</h4>
                    <span>{feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <ul className="flex items-center gap-5 mb-5">
              {stats.map((stats,index) => (
                <li key={index}>
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={stats.icon} />
                    <span className="text-2xl font-bold">{stats.value}</span>
                  </div>
                  <p>{stats.label}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <figure className=" bg-white/20 border border-white/30 backdrop-blur-sm rounded-xl p-4 space-y-4 hover:bg-white/25 transition-colors duration-200">
          <div className="rating-average text-yellow-300">
            {[...Array(5)].map((_,i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="hover:scale-110 transition-transform duration-200"
              />
            ))}
          </div>

          <blockquote className="text-lg italic">
            <p>
              "SocialHub has completely changed how i connect with friends and
              discover new communities. The experience is seamless!"
            </p>
          </blockquote>
          <figcaption className="author flex items-center gap-3">
            <img src={avatar} alt="" className=" size-12 rounded-circle" />
            <div className="imfo  flex flex-col ">
              <cite>Alex Johnson</cite>
              <span className="text-sm text-gray-300">Product Designer</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
