// react libraries
import React, { useState, useEffect } from "react";

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
import { RiInstagramFill, RiHeart2Line, RiChat1Line } from "react-icons/ri";
import { SiGithubsponsors, SiTwitter } from "react-icons/si";
import { FiThumbsUp, FiTwitch } from "react-icons/fi";
import { GrFacebook, GrGithub } from "react-icons/gr";
import { TiUser } from "react-icons/ti";

// components
import MainBtn from "../common/button/MainBtn";
import NavLink from "../common/sidebar_link/NavLink";

// styles
import "./home.scss";

// api
import { getAllTags, getAllArticles, fetchListings } from "../../api/fetchData";

//
const Home = () => {
  const [topTags, setTopTags] = useState([]);
  const [articles, setArticles] = useState([]);
  const [listings, setListings] = useState([]);

  /**
   * Fetches and set top tags
   */
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTags();
      setTopTags(await data.json());
    };
    fetchData();
  }, []);

  /**
   * Fetches and set articles
   */
  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getAllArticles();
      setArticles(await data.json());
    };
    fetchArticles();
  }, []);

  /**
   * Fetch listings
   */
  useEffect(() => {
    const fetchLists = async () => {
      const data = await fetchListings();
      setListings(await data.json());
    };
    fetchLists();
  }, []);

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

  return (
    <main className="main-body">
      {/* Side bar section */}
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
            {topTags &&
              topTags.map((tag: any, index) => (
                <span key={index}>#{tag.name}</span>
              ))}
          </section>
        </div>
      </section>

      {/* main article section */}
      <section className="articles">
        <h4>Relevant</h4>
        {articles &&
          articles.map((article: any, index) => (
            <div key={index} className="article-card">
              <div className="card-header">
                <div className="author-dp">
                  <img src={`${article.user.profile_image}`} />
                </div>
                <div className="author-detail">
                  <div className="name">{article.user.name}</div>
                  <div className="published-date">
                    {article.readable_publish_date}
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="article-title">{article.title}</div>
                {article.tag_list &&
                  article.tag_list.map((tag: any, index: any) => (
                    <span className="article-tags" key={index}>
                      #{tag}
                    </span>
                  ))}
                <div className="card-footer">
                  <div className="comment-container">
                    <div className="count-wrapper">
                      <RiHeart2Line />
                      {article.positive_reactions_count}{" "}
                      {article.positive_reactions_count > 1
                        ? "Reactions"
                        : "Reaction"}
                    </div>
                    <div className="count-wrapper">
                      <RiChat1Line />
                      {article.comments_count > 1
                        ? `${article.comments_count} Comments`
                        : article.comments_count == 1
                        ? `${article.comments_count} Comment`
                        : "Add Comment"}{" "}
                    </div>
                  </div>
                  <div className="save-btn-container">
                    <div className="read-time">
                      {article.reading_time_minutes} min read
                    </div>
                    <button className="save-btn">Save</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* Listing section */}
      <section className="listings">
        <div className="listing-header">
          <h4>Listings</h4>
          <p>See All</p>
        </div>
        {listings &&
          listings.map((item: any, index: any) => (
            <div className="listing-item" key={index}>
              <div className="list-item-title">{item.title}</div>
              <div className="list-item-category">{item.category}</div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Home;
