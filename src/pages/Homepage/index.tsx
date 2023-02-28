import React, { useState } from 'react'
import Image from 'react-bootstrap/esm/Image'

const Homepage = () => {
  const [user , setUser] = useState("oooo")
  return (
    <div>
        <div className="container">
          <header className="blog-header lh-1 py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-4">
                <Image style={{
                  height:"30px",
                  width:"100px"
                }} src='data:image/jpeg;base64,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'/>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <a className="link-secondary" href="#" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
                </a>
                {
                  user? <p>{user}</p>:                 <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>

                }
              </div>
            </div>
          </header>
        </div>
        <main className="container">
          <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
              <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">World</strong>
                  <h3 className="mb-0">Featured post</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="stretched-link">Continue reading</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg className="bd-placeholder-img" width={200} height={250} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">Design</strong>
                  <h3 className="mb-0">Post title</h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="stretched-link">Continue reading</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                <div className="col-4">
                <Image  src='data:image/jpeg;base64,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'/>
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-8">
              <h3 className="pb-4 mb-4 fst-italic border-bottom">
                From the Database
              </h3>
              
              
              <article className="blog-post">
                <h2 className="blog-post-title mb-1">New feature</h2>
                <p className="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>
                <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                <ul>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ul>
                <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
              </article>
             
            </div>
            <div className="col-md-4">
              <div className="position-sticky" style={{top: '2rem'}}>
                <div className="p-4 mb-3 bg-light rounded">
                  <h4 className="fst-italic">About</h4>
                  <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                </div>
               
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Homepage