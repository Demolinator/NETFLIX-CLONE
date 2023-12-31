import Image from 'next/image'
import { Inter } from 'next/font/google'
import Faq from '@/components/faq/Faq';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className="showcase">
        <div className="showcase-top">
          <img src="/logo.png" alt="Netflix Logo" />
          <a href="/auth/login" className="btn btn-rounded">
            Sign In
          </a>
        </div>
        <div className="showcase-content">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="input-container">
            <input type="email" name="email" id="mail" placeholder="Email address" class="email-input" />
            <a href="#" className="btn btn-lg">GET STARTED &gt;</a>
          </div>
        </div>
      </header>

    <section className="style-cards">
        <div className="card-1">
          <div className="desc-1">
            <h1>Enjoy on your TV.</h1>
            <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
          </div>
          <img src="/tv.png" alt="Netflix TV" />
          <video className="video-1" autoPlay playsInline muted loop>
            <source src="/1.m4v" type="video/mp4" />
          </video>
        </div>
        <div className="card-2">
          <img src="/3.jpg" alt="Netflix Mobile" />
          <div className="desc-2">
            <h1>Download your shows to watch offline.</h1>
            <h3>Save your favorites easily and always have something to watch.</h3>
          </div>
        </div>
        <div className="card-3">
          <div className="desc-3">
            <h1>Watch everywhere.</h1>
            <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
          </div>
          <img src="/4.png" alt="Device-Pile-In" />
          <video className="video-2" autoPlay playsInline muted loop>
            <source src="/2.m4v" type="video/mp4" />
          </video>
        </div>
        <div className="card-0">
          <img src="/2.png" alt="Netflix Mobile" />
          <div className="desc-0">
            <h1>Create profiles for kids.</h1>
            <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
          </div>
        </div>
      </section>

      <section className="lastsec">
        <div className="faq">
          <h1>Frequently Asked Questions</h1>
          <Faq /> {/* Include the Faq component here */}
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="input">
            <input type="email" name="email" id="mail" placeholder="Email Address" />
            <a href="#" className="btn-rounded">
              <button>GET STARTED &gt;</button>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Questions? contact us</p>
        <div className="footer-cols">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Speed Test</a></li>
          </ul>
          <ul>
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Watch for Free</a></li>
          </ul>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Ways to Watch</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Legal Notices</a></li>
          </ul>
          <ul>
            <li><a href="#">Media Centre</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Only on Netflix</a></li>
          </ul>
          <ul>
            <li>
              <a href="#">Netflix Pakistan</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
