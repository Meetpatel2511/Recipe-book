import React from 'react'
import './About.css'
import Chef1 from '../assets/chef1.avif'
import Chef2 from '../assets/chef2.avif'
import Chef3 from '../assets/chef3.avif'
import Footer from './Footer'

const About = () => {

      const stats = [
    { value: "1 Million+", label: "Registered Flavoriz Users" },
    { value: "5,000+",    label: "Verified Chefs in Community" },
    { value: "98%",       label: "User Satisfaction Rate" },
    { value: "10,000+",   label: "Officially Published Recipes" }
  ];

  const members = [
  {
    name: "Carlos Rodriguez",
    role: "Founder & CEO",
    img: Chef1
  },
  {
    name: "Emily Johnson",
    role: "Head Chef",
    img: Chef2
  },
  {
    name: "David Young",
    role: "Community Manager",
    img: Chef3
  }
];


  return (
    <>
        <section className="ac-hero">
      <div className="ac-content">
        <h2>
          About Our <span className="accent">Culinary</span> Stories
        </h2>
      </div>
    </section>

    {/* 2nd  */}

     <section className="fs-wrap">
      {stats.map((s, i) => (
        <div key={i} className="fs-item">
          <div className="fs-num">{s.value}</div>
          <div className="fs-sub">{s.label}</div>
        </div>
      ))}
    </section>

    {/* 3rd  */}

    <section className="vh-outer">
      {/* background hero image */}
      <div className="vh-hero">

        <a className="vh-cta" href="#">
          Join Our Chef Community
        </a>
      </div>

      {/* overlap values card */}
      <div className="vh-card">
        <div className="vh-item">
          <div className="vh-ico">👤</div>
          <h3>User‑Centered</h3>
          <p>
            Your feedback shapes our platform, ensuring a seamless and
            satisfying culinary journey.
          </p>
        </div>

        <div className="vh-item">
          <div className="vh-ico">◑</div>
          <h3>Diverse Recipes</h3>
          <p>
            We celebrate diverse culinary traditions from around the world,
            inspiring you today.
          </p>
        </div>

        <div className="vh-item">
          <div className="vh-ico">♡</div>
          <h3>Fun Community</h3>
          <p>
            We foster a vibrant foodie community where joy comes with sharing
            recipes with us.
          </p>
        </div>
      </div>
    </section>

    {/* 4th page  */}

      <section className="tc-wrap">
      <h2 className="tc-title">
        The Flavor <span className="accent">Chefs</span> and Team
      </h2>

      <div className="tc-grid">
        {members.map((m,i)=>(
          <article key={i} className="tc-card">
            <div className="tc-photo">
              <img src={m.img} alt={m.name} loading="lazy" />
            </div>
            <h3 className="tc-name">{m.name}</h3>
            <p className="tc-role">{m.role}</p>
          </article>
        ))}
      </div>
    </section>

    <Footer />

    </>
  )
}

export default About