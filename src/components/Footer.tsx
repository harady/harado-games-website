import React from 'react';
import { Youtube, Twitter, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer id="links" className="footer section">
            <div className="container footer-container">

                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo text-gradient">Haradu Games</h2>
                        <p className="footer-tagline">
                            モンストのランキング動画やプレイ動画をお届け！<br />
                            チャンネル登録・フォローよろしくお願いします！
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h3>Connect</h3>
                            <div className="social-links">
                                <a href="https://www.youtube.com/@%E3%81%AF%E3%82%89%E3%81%A9%E3%81%85%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%B9" className="social-icon yt" target="_blank" rel="noopener noreferrer">
                                    <Youtube size={24} />
                                    <span>YouTube</span>
                                </a>
                                <a href="#" className="social-icon tw">
                                    <Twitter size={24} />
                                    <span>X (Twitter)</span>
                                </a>
                                <a href="#" className="social-icon ig">
                                    <Instagram size={24} />
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>

                        <div className="link-group">
                            <h3>Business</h3>
                            <a href="mailto:info@example.com" className="business-contact">
                                <Mail size={18} />
                                <span>お仕事のご依頼はこちら</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Haradu Games. All rights reserved.</p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="footer-glow"></div>
        </footer>
    );
};

export default Footer;
