import React from 'react'
import "./AboutUs.css"
import { Linkedin, Twitter } from 'lucide-react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar'
function AboutUs() {
    const teamMembers = [{
        id: 1,
        name: "Mark Waugh",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
        role: "Founder"
    }, {
        id: 2,
        name: "Angelina Waugh",
        image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVtcGxveWVlfGVufDB8fDB8fHww",
        role: "Director"
    }, {
        id: 3,
        name: "Celina Gomes",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
        role: "Admin Head"
    },
    ]
    return (
        <div>
            {/* -----------------------------------navbar part start------------------------------------------- */}
            <NavBar />
            {/* -----------------------------------navbar part end------------------------------------------- */}
            {/* ---------------------------------------Our Story Start--------------------------------------------- */}

            <div className='aboutus-story-main-container'>
                <div className='aboutus-story-content-container'>
                    <div className='aboutus-story-left-container'>
                        <h1 className='aboutus-story-heading'>Our Story</h1>

                        <p className='aboutus-story-para'>
                            The Corner Store was born from a simple idea — to bring the warmth, trust, and convenience of a neighborhood store into the digital world.
                        </p>

                        <p className='aboutus-story-para'>
                            Growing up, the local corner store was more than just a place to shop. It was familiar, reliable, and always there when you needed it. Inspired by this timeless experience, we set out to create an e-commerce platform that combines the personal touch of local shopping with the ease and accessibility of modern technology.
                        </p >

                        <p className='aboutus-story-para'>
                            Based in India, The Corner Store is built with a deep understanding of everyday needs, evolving lifestyles, and the value of quality at the right price. We carefully curate products that meet our standards of reliability, usefulness, and value, ensuring that every purchase feels simple, secure, and satisfying.
                        </p>

                        <p className='aboutus-story-para'>
                            Our journey is driven by a commitment to trust, transparency, and customer-first thinking. As we grow, our goal remains the same — to be your go-to online store, delivering convenience without compromising on authenticity.
                        </p>

                        <p className='aboutus-story-para'>
                            Welcome to The Corner Store — where tradition meets technology, and every customer feels right at home.
                        </p>


                    </div>

                    <div className='aboutus-story-right-container'>
                        <img className='aboutus-story-right-image' src="https://images.pexels.com/photos/34987639/pexels-photo-34987639.jpeg" alt="The Corner Store story" />
                    </div>
                </div>
            </div>
            {/* ---------------------------------------Our Story End--------------------------------------------- */}
            {/* ---------------------------------------The Team Start--------------------------------------------- */}
            <div className='aboutus-team-main-container'>
                <div className='aboutus-team-heading'>
                    <h3>OUR TEAM</h3>
                </div>
                <div className='aboutus-team-space-container'>
                    {teamMembers.slice(0, 3).map((item) => (
                        <div key={item.id} className="aboutus-team-card">
                            <div className="aboutus-team-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="aboutus-team-image"
                                />
                            </div>
                            <div className="aboutus-team-content">
                                <span className='aboutus-team-name'>{item.name}</span>
                                <span className='aboutus-team-designation'>{item.role}</span>
                                <div className='aboutus-team-social-links'>
                                    <Linkedin className="aboutus-team-social-logos" size={20} />
                                    <Twitter className="aboutus-team-social-logos" size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* ---------------------------------------The Team End--------------------------------------------- */}
            {/* ----------------------------------------Footer Section start------------------------------------------ */}
            <Footer />
            {/* ----------------------------------------Footer Section end------------------------------------------ */}
        </div>
    )
}

export default AboutUs