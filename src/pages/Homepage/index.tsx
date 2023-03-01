import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { usePostData } from '../../hooks/usePostData';
import Topbar from '../../components/Topbars/Topbar';


function extractWords(str: string, n: number): string {
  const words = str.split(' ');
  return words.slice(0, n).join(' ');
}

const Homepage = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const { posts, isLoading, myPosts } = usePostData();

  if (isLoading !== true) {
    console.log('object :>> ', posts);
    console.log('myPosts :>> ', myPosts);
  }




  return (
    <div>
      <Topbar />

      {/* card */}

      {/* <div className='row px-4'>
      {
        posts.map((x) => {
          return (
            <div className='col-md-4'>
            <div className='container mt-4'>
              <div className="card" style={{ width: "18rem" }}>
                <img style={{maxHeight:"220px"}} className="card-img-top" src={x.photoUrl} alt=""/>
                <div className="card-body">
                  <h5 className="card-title">{x.title}</h5>
                  <p className="card-text">
                  {extractWords(x.description, 5)}...
                  </p>
                  <button className="btn btn-primary" >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }
      
      </div> */}

      <>
        {/* Navigation*/}
        <>
        
          {/* Page Content */}
          {/* Banner Starts Here */}
          <div className="main-banner header-text">
            <div className="container-fluid">
              <div className="owl-banner owl-carousel">
                <div className="item">
                  <img src="assets/images/banner-item-01.jpg" alt="" />
                  <div className="item-content">
                    <div className="main-content">
                      <div className="meta-category">
                        <span>Fashion</span>
                      </div>
                      <a href="post-details.html">
                        <h4>Morbi dapibus condimentum</h4>
                      </a>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">May 12, 2020</a>
                        </li>
                        <li>
                          <a href="#">12 Comments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/banner-item-02.jpg" alt="" />
                  <div className="item-content">
                    <div className="main-content">
                      <div className="meta-category">
                        <span>Nature</span>
                      </div>
                      <a href="post-details.html">
                        <h4>Donec porttitor augue at velit</h4>
                      </a>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">May 14, 2020</a>
                        </li>
                        <li>
                          <a href="#">24 Comments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/banner-item-03.jpg" alt="" />
                  <div className="item-content">
                    <div className="main-content">
                      <div className="meta-category">
                        <span>Lifestyle</span>
                      </div>
                      <a href="post-details.html">
                        <h4>Best HTML Templates on TemplateMo</h4>
                      </a>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">May 16, 2020</a>
                        </li>
                        <li>
                          <a href="#">36 Comments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/banner-item-04.jpg" alt="" />
                  <div className="item-content">
                    <div className="main-content">
                      <div className="meta-category">
                        <span>Fashion</span>
                      </div>
                      <a href="post-details.html">
                        <h4>Responsive and Mobile Ready Layouts</h4>
                      </a>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">May 18, 2020</a>
                        </li>
                        <li>
                          <a href="#">48 Comments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/banner-item-05.jpg" alt="" />
                  <div className="item-content">
                    <div className="main-content">
                      <div className="meta-category">
                        <span>Nature</span>
                      </div>
                      <a href="post-details.html">
                        <h4>Cras congue sed augue id ullamcorper</h4>
                      </a>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">May 24, 2020</a>
                        </li>
                        <li>
                          <a href="#">64 Comments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/banner-item-06.jpg" alt="" />
                  <div className="item-content">
                    <div className="main-content">
                      <div className="meta-category">
                        <span>Lifestyle</span>
                      </div>
                      <a href="post-details.html">
                        <h4>Suspendisse nec aliquet ligula</h4>
                      </a>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">May 26, 2020</a>
                        </li>
                        <li>
                          <a href="#">72 Comments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Banner Ends Here */}
          <section className="call-to-action">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-content">
                    <div className="row">
                      <div className="col-lg-8">
                        <span>Blog site</span>
                        <h4>For Bloggers!</h4>
                      </div>
                      <div className="col-lg-4">
                        <div className="main-button">
                          <button className='btn btn-primary'>
                            Download Now!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="blog-posts">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="all-blog-posts">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="blog-post">
                          <div className="blog-thumb">
                            <img src="assets/images/blog-post-01.jpg" alt="" />
                          </div>
                          <div className="down-content">
                            <span>Lifestyle</span>
                            <a href="post-details.html">
                              <h4>Best Template Website for HTML CSS</h4>
                            </a>
                            <ul className="post-info">
                              <li>
                                <a href="#">Admin</a>
                              </li>
                              <li>
                                <a href="#">May 31, 2020</a>
                              </li>
                              <li>
                                <a href="#">12 Comments</a>
                              </li>
                            </ul>
                            <p>
                              Stand Blog is a free HTML CSS template for your CMS theme.
                              You can easily adapt or customize it for any kind of CMS
                              or website builder. You are allowed to use it for your
                              business. You are NOT allowed to re-distribute the
                              template ZIP file on any template collection site for the
                              download purpose.{" "}
                              <a
                                rel="nofollow"
                                href="https://templatemo.com/contact"
                                target="_parent"
                              >
                                Contact TemplateMo
                              </a>{" "}
                              for more info. Thank you.
                            </p>
                            <div className="post-options">
                              <div className="row">
                                <div className="col-6">
                                  <ul className="post-tags">
                                    <li>
                                      <i className="fa fa-tags" />
                                    </li>
                                    <li>
                                      <a href="#">Beauty</a>,
                                    </li>
                                    <li>
                                      <a href="#">Nature</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6">
                                  <ul className="post-share">
                                    <li>
                                      <i className="fa fa-share-alt" />
                                    </li>
                                    <li>
                                      <a href="#">Facebook</a>,
                                    </li>
                                    <li>
                                      <a href="#"> Twitter</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sidebar">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="sidebar-item recent-posts">
                          <div className="sidebar-heading">
                            <h2>Recent Posts</h2>
                          </div>
                          <div className="content">
                            <ul>
                              <li>
                                <a href="post-details.html">
                                  <h5>
                                    Vestibulum id turpis porttitor sapien facilisis
                                    scelerisque
                                  </h5>
                                  <span>May 31, 2020</span>
                                </a>
                              </li>
                              <li>
                                <a href="post-details.html">
                                  <h5>
                                    Suspendisse et metus nec libero ultrices varius eget
                                    in risus
                                  </h5>
                                  <span>May 28, 2020</span>
                                </a>
                              </li>
                              <li>
                                <a href="post-details.html">
                                  <h5>
                                    Swag hella echo park leggings, shaman cornhole
                                    ethical coloring
                                  </h5>
                                  <span>May 14, 2020</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="social-icons">
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Behance</a>
                    </li>
                    <li>
                      <a href="#">Linkedin</a>
                    </li>
                  </ul>
                </div>
              
              </div>
            </div>
          </footer>
        </>

        {/* Page Header*/}

      </>


    </div>
  )
}

export default Homepage