// react libraries
import React from "react";

// third-party components
import {
  FcHome,
  FcList,
  FcFaq,
  FcShop,
  FcAbout,
  FcBusinessContact,
  FcPrivacy,
} from "react-icons/fc";
import { GiOldMicrophone } from "react-icons/gi";
import { ImVideoCamera } from "react-icons/im";
import { MdTag } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import {
  SiGithubsponsors,
  SiTwitter
} from "react-icons/si";
import { FiThumbsUp, FiTwitch } from "react-icons/fi";
import { GrFacebook, GrGithub } from "react-icons/gr";
import { TiUser } from "react-icons/ti";

// components
import MainBtn from "../common/button/MainBtn";
import NavLink from "../common/sidebar_link/NavLink";

// styles
import "./home.scss";

//
const Home = () => {
  const linkArr = [
    {
      text: "Home",
      component: <FcHome />,
    },
    {
      text: "Listings",
      component: <FcList />,
    },
    {
      text: "Podcasts",
      component: <GiOldMicrophone />,
    },
    {
      text: "Videos",
      component: <ImVideoCamera />,
    },
    {
      text: "Tags",
      component: <MdTag />,
    },
    {
      text: "FAQ",
      component: <FcFaq />,
    },
    {
      text: "DEV Shop",
      component: <FcShop />,
    },
    {
      text: "Sponsors",
      component: <SiGithubsponsors />,
    },
    {
      text: "About",
      component: <FcAbout />,
    },
    {
      text: "Contact",
      component: <FcBusinessContact />,
    },
  ];
  const otherLinks = [
    {
      text: "Code of Conduct",
      component: <FiThumbsUp />,
    },
    {
      text: "Privacy Policy",
      component: <FcPrivacy />,
    },
    {
      text: "Terms of use",
      component: <TiUser />,
    },
  ];

  const allTags = [
    {
      id: 6,
      name: "javascript",
      bg_color_hex: "#f7df1e",
      text_color_hex: "#000000",
    },
    {
      id: 8,
      name: "webdev",
      bg_color_hex: "#562765",
      text_color_hex: "#ffffff",
    },
    {
      id: 555,
      name: "beginners",
      bg_color_hex: "#008335",
      text_color_hex: "#FFFFFF",
    },
    {
      id: 125,
      name: "react",
      bg_color_hex: "#222222",
      text_color_hex: "#61DAF6",
    },
    {
      id: 33,
      name: "programming",
      bg_color_hex: "#890606",
      text_color_hex: "#ffffff",
    },
    {
      id: 297,
      name: "tutorial",
      bg_color_hex: "#FEFFA5",
      text_color_hex: "#b30047",
    },
    {
      id: 3371,
      name: "archlinux",
      bg_color_hex: "#0009BD",
      text_color_hex: "#FFFFFF",
    },
    {
      id: 25,
      name: "python",
      bg_color_hex: "#1E38BB",
      text_color_hex: "#FFDF5B",
    },
    {
      id: 316,
      name: "android",
      bg_color_hex: "#56a036",
      text_color_hex: "#ffffff",
    },
    {
      id: 23,
      name: "css",
      bg_color_hex: "#2965F1",
      text_color_hex: "#ffffff",
    },
    {
      id: 112,
      name: "productivity",
      bg_color_hex: "#2A0798",
      text_color_hex: "#C8F7C5",
    },
    {
      id: 715,
      name: "discuss",
      bg_color_hex: "#000000",
      text_color_hex: "#FFFFFF",
    },
    {
      id: 44,
      name: "news",
      bg_color_hex: "#111111",
      text_color_hex: "#fff9ac",
    },
    {
      id: 630,
      name: "career",
      bg_color_hex: "#2A2566",
      text_color_hex: "#FFFFFF",
    },
    {
      id: 15,
      name: "node",
      bg_color_hex: "#3d8836",
      text_color_hex: "#ffffff",
    },
    {
      id: 168,
      name: "devops",
      bg_color_hex: "#06B500",
      text_color_hex: "#FFFFFF",
    },
    {
      id: 165,
      name: "codenewbie",
      bg_color_hex: "#57d700",
      text_color_hex: "#ffffff",
    },
    {
      id: 57,
      name: "html",
      bg_color_hex: "#F53900",
      text_color_hex: "#FFFFFF",
    },
    {
      id: 65131,
      name: "latestnigerianewslat",
      bg_color_hex: null,
      text_color_hex: null,
    },
    {
      id: 228,
      name: "opensource",
      bg_color_hex: "#26BE00",
      text_color_hex: "#FFFFFF",
    },
  ];
  return (
    <main className="main-body">
      <section className="side-bar">
        <div className="side-bar-banner">
          <div className="banner-text">
            <a href="#">DEV Community</a> is a community of 808,604 amazing
            developers
          </div>
          <div className="sidebar-text">
            <p>
              We're a place where coders share, stay up-to-date and grow their
              careers.
            </p>
          </div>
          <div className="side-bar-btns">
            <MainBtn btnClass="signup-btn" btnText="Create Account" />
            <MainBtn btnClass="login-btn" btnText="Login" />
          </div>
        </div>
        <nav className="side-bar-nav">
          {linkArr.map((item, index) => (
            <NavLink key={index} item={item} />
          ))}
        </nav>
        <nav className="side-bar-nav">
          <h3>Other</h3>
          {otherLinks.map((item, index) => (
            <NavLink key={index} item={item} />
          ))}
        </nav>
        <nav className="social-media-links">
          <span>
            <SiTwitter />
          </span>
          <span>
            <GrFacebook />
          </span>
          <span>
            <GrGithub />
          </span>
          <span>
            <RiInstagramFill />
          </span>
          <span>
            <FiTwitch />
          </span>
        </nav>
        <div>
          <h3>Popular Tags</h3>
          <section className="tag-container">
            {
              allTags.map(tag=>(
                <span>#{tag.name}</span>
              ))
            }
          </section>

        </div>
      </section>


      <section className="articles">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque
        nec nam aliquam sem et tortor consequat. Lorem ipsum dolor sit amet
        consectetur. Elementum nibh tellus molestie nunc non blandit massa enim.
        Potenti nullam ac tortor vitae purus faucibus. Aliquam id diam maecenas
        ultricies mi eget mauris pharetra. Maecenas volutpat blandit aliquam
        etiam erat velit scelerisque in. Sit amet nisl purus in mollis nunc sed.
        Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Vulputate eu
        scelerisque felis imperdiet proin fermentum leo. Lacus suspendisse
        faucibus interdum posuere lorem ipsum dolor sit. Curabitur gravida arcu
        ac tortor dignissim. Duis at consectetur lorem donec. In iaculis nunc
        sed augue lacus viverra. Mauris ultrices eros in cursus turpis. Commodo
        odio aenean sed adipiscing diam donec adipiscing. Morbi leo urna
        molestie at. Amet volutpat consequat mauris nunc congue nisi vitae
        suscipit. Ornare arcu dui vivamus arcu. Id leo in vitae turpis massa sed
        elementum tempus. Facilisis magna etiam tempor orci eu. Enim nec dui
        nunc mattis enim ut. Aliquam sem et tortor consequat id. Nibh sit amet
        commodo nulla. Imperdiet nulla malesuada pellentesque elit eget gravida
        cum sociis natoque. Pretium viverra suspendisse potenti nullam ac.
        Posuere ac ut consequat semper. Lectus proin nibh nisl condimentum id
        venenatis a condimentum. Malesuada fames ac turpis egestas maecenas
        pharetra convallis posuere. Ut tortor pretium viverra suspendisse
        potenti nullam. Quam pellentesque nec nam aliquam sem et tortor
        consequat id. Dolor sit amet consectetur adipiscing elit ut aliquam
        purus. Risus sed vulputate odio ut enim blandit volutpat maecenas. Quis
        risus sed vulputate odio ut. Amet massa vitae tortor condimentum lacinia
        quis vel eros donec. Nec tincidunt praesent semper feugiat nibh sed
        pulvinar. Proin libero nunc consequat interdum varius sit amet mattis
        vulputate. Mauris pellentesque pulvinar pellentesque habitant morbi
        tristique. Nullam eget felis eget nunc lobortis mattis aliquam faucibus
        purus. Iaculis nunc sed augue lacus. Bibendum at varius vel pharetra vel
        turpis. Est lorem ipsum dolor sit amet consectetur. Ac auctor augue
        mauris augue neque. Blandit volutpat maecenas volutpat blandit aliquam
        etiam. Massa id neque aliquam vestibulum morbi blandit cursus risus.
        Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Porttitor
        eget dolor morbi non arcu risus quis varius. Hac habitasse platea
        dictumst quisque sagittis purus sit amet. Lobortis scelerisque fermentum
        dui faucibus. Quis enim lobortis scelerisque fermentum dui faucibus. Cum
        sociis natoque penatibus et magnis. In hac habitasse platea dictumst
        quisque. Morbi tristique senectus et netus et malesuada fames ac turpis.
        Dui ut ornare lectus sit amet est. In pellentesque massa placerat duis
        ultricies lacus sed turpis. Egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut. Enim ut tellus elementum sagittis vitae et leo
        duis ut. Nulla facilisi morbi tempus iaculis urna id volutpat lacus
        laoreet. Ut morbi tincidunt augue interdum velit euismod in. Vel
        facilisis volutpat est velit egestas dui id. Donec pretium vulputate
        sapien nec sagittis aliquam malesuada bibendum. Leo a diam sollicitudin
        tempor id eu. Consectetur libero id faucibus nisl tincidunt eget.
        Tristique senectus et netus et malesuada fames ac. In massa tempor nec
        feugiat nisl pretium fusce id. Erat nam at lectus urna duis convallis
        convallis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt
        ornare. Eget gravida cum sociis natoque. Gravida arcu ac tortor
        dignissim convallis aenean et tortor at. Arcu non sodales neque sodales
        ut etiam sit amet. Tristique sollicitudin nibh sit amet commodo nulla
        facilisi. Nulla malesuada pellentesque elit eget. Magna etiam tempor
        orci eu lobortis elementum. At in tellus integer feugiat scelerisque
        varius morbi enim nunc. Ut eu sem integer vitae justo eget magna. Id
        velit ut tortor pretium viverra suspendisse potenti nullam ac. Hac
        habitasse platea dictumst vestibulum rhoncus est pellentesque elit
        ullamcorper. Pharetra et ultrices neque ornare aenean euismod. Mauris
        augue neque gravida in fermentum et. Tempus urna et pharetra pharetra
        massa. Non arcu risus quis varius quam quisque. Dui vivamus arcu felis
        bibendum. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames. Sit amet mattis vulputate enim nulla aliquet porttitor.
        Natoque penatibus et magnis dis. Bibendum enim facilisis gravida neque
        convallis a cras semper auctor. Purus semper eget duis at tellus at.
        Magna fringilla urna porttitor rhoncus dolor purus non. Eget lorem dolor
        sed viverra. A pellentesque sit amet porttitor. Egestas quis ipsum
        suspendisse ultrices gravida dictum. Tempor commodo ullamcorper a lacus
        vestibulum. Vulputate enim nulla aliquet porttitor lacus luctus. Amet
        purus gravida quis blandit turpis cursus. Ac tortor vitae purus faucibus
        ornare suspendisse sed nisi lacus. Volutpat blandit aliquam etiam erat.
        Condimentum lacinia quis vel eros donec. Dui vivamus arcu felis bibendum
        ut tristique. Volutpat commodo sed egestas egestas fringilla. Metus
        aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae sapien
        pellentesque habitant morbi tristique senectus. Egestas maecenas
        pharetra convallis posuere morbi leo urna molestie at. Urna condimentum
        mattis pellentesque id nibh. Nibh sit amet commodo nulla facilisi
        nullam. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet.
        Venenatis tellus in metus vulputate. Purus sit amet volutpat consequat
        mauris nunc congue. Ultrices mi tempus imperdiet nulla malesuada
        pellentesque elit eget. Elit duis tristique sollicitudin nibh sit amet
        commodo. Nunc sed id semper risus in hendrerit gravida rutrum. Ac tortor
        vitae purus faucibus ornare suspendisse sed nisi. Eget lorem dolor sed
        viverra. Viverra adipiscing at in tellus integer feugiat scelerisque.
        Neque sodales ut etiam sit amet nisl purus in mollis. Id volutpat lacus
        laoreet non curabitur gravida arcu ac tortor. Consectetur adipiscing
        elit ut aliquam. Pellentesque habitant morbi tristique senectus et.
        Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Suscipit
        tellus mauris a diam maecenas sed enim. Tortor id aliquet lectus proin
        nibh nisl condimentum id. Id faucibus nisl tincidunt eget nullam non
        nisi est sit. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.
        Pellentesque sit amet porttitor eget dolor morbi non. Lacus suspendisse
        faucibus interdum posuere lorem ipsum dolor. Nec dui nunc mattis enim.
        Ut porttitor leo a diam sollicitudin. Facilisi etiam dignissim diam quis
        enim lobortis. Nibh tortor id aliquet lectus proin nibh nisl
        condimentum. Nunc lobortis mattis aliquam faucibus purus in massa
        tempor. Lorem sed risus ultricies tristique. Augue neque gravida in
        fermentum et sollicitudin. Aliquet lectus proin nibh nisl condimentum
        id. Nisl condimentum id venenatis a. Pharetra convallis posuere morbi
        leo urna molestie at elementum. Libero volutpat sed cras ornare arcu dui
        vivamus arcu. Facilisi nullam vehicula ipsum a arcu cursus. Dui sapien
        eget mi proin sed. Iaculis at erat pellentesque adipiscing. Curabitur
        gravida arcu ac tortor dignissim convallis aenean et. Porta nibh
        venenatis cras sed felis eget velit. Molestie ac feugiat sed lectus
        vestibulum. Proin libero nunc consequat interdum varius sit amet mattis
        vulputate. Turpis egestas pretium aenean pharetra. Dictumst quisque
        sagittis purus sit. Ut venenatis tellus in metus vulputate eu
        scelerisque felis. Diam ut venenatis tellus in metus vulputate eu
        scelerisque. Viverra aliquet eget sit amet tellus cras adipiscing enim.
        Amet consectetur adipiscing elit pellentesque habitant morbi. Est
        placerat in egestas erat imperdiet sed.
      </section>
      <section className="listings">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque
        nec nam aliquam sem et tortor consequat. Lorem ipsum dolor sit amet
        consectetur. Elementum nibh tellus molestie nunc non blandit massa enim.
        Potenti nullam ac tortor vitae purus faucibus. Aliquam id diam maecenas
        ultricies mi eget mauris pharetra. Maecenas volutpat blandit aliquam
        etiam erat velit scelerisque in. Sit amet nisl purus in mollis nunc sed.
        Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Vulputate eu
        scelerisque felis imperdiet proin fermentum leo. Lacus suspendisse
        faucibus interdum posuere lorem ipsum dolor sit. Curabitur gravida arcu
        ac tortor dignissim. Duis at consectetur lorem donec. In iaculis nunc
        sed augue lacus viverra. Mauris ultrices eros in cursus turpis. Commodo
        odio aenean sed adipiscing diam donec adipiscing. Morbi leo urna
        molestie at. Amet volutpat consequat mauris nunc congue nisi vitae
        suscipit. Ornare arcu dui vivamus arcu. Id leo in vitae turpis massa sed
        elementum tempus. Facilisis magna etiam tempor orci eu. Enim nec dui
        nunc mattis enim ut. Aliquam sem et tortor consequat id. Nibh sit amet
        commodo nulla. Imperdiet nulla malesuada pellentesque elit eget gravida
        cum sociis natoque. Pretium viverra suspendisse potenti nullam ac.
        Posuere ac ut consequat semper. Lectus proin nibh nisl condimentum id
        venenatis a condimentum. Malesuada fames ac turpis egestas maecenas
        pharetra convallis posuere. Ut tortor pretium viverra suspendisse
        potenti nullam. Quam pellentesque nec nam aliquam sem et tortor
        consequat id. Dolor sit amet consectetur adipiscing elit ut aliquam
        purus. Risus sed vulputate odio ut enim blandit volutpat maecenas. Quis
        risus sed vulputate odio ut. Amet massa vitae tortor condimentum lacinia
        quis vel eros donec. Nec tincidunt praesent semper feugiat nibh sed
        pulvinar. Proin libero nunc consequat interdum varius sit amet mattis
        vulputate. Mauris pellentesque pulvinar pellentesque habitant morbi
        tristique. Nullam eget felis eget nunc lobortis mattis aliquam faucibus
        purus. Iaculis nunc sed augue lacus. Bibendum at varius vel pharetra vel
        turpis. Est lorem ipsum dolor sit amet consectetur. Ac auctor augue
        mauris augue neque. Blandit volutpat maecenas volutpat blandit aliquam
        etiam. Massa id neque aliquam vestibulum morbi blandit cursus risus.
        Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Porttitor
        eget dolor morbi non arcu risus quis varius. Hac habitasse platea
        dictumst quisque sagittis purus sit amet. Lobortis scelerisque fermentum
        dui faucibus. Quis enim lobortis scelerisque fermentum dui faucibus. Cum
        sociis natoque penatibus et magnis. In hac habitasse platea dictumst
        quisque. Morbi tristique senectus et netus et malesuada fames ac turpis.
      </section>
    </main>
  );
};

export default Home;
