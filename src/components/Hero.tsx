import React from 'react';
import { Play } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <h2 className="hero-subtitle text-gradient">WELCOME TO</h2>
                    <h1 className="hero-title">
                        <span className="title-word main">HARADU</span>
                        <span className="title-word accent">GAMES</span>
                    </h1>
                    <p className="hero-description">
                        モンストのランキング動画やプレイ動画をアップロードしています。<br />
                        是非、気軽にコメントしていただけると嬉しいです😆
                    </p>

                    <div className="hero-actions">
                        <a
                            href="https://www.youtube.com/@%E3%81%AF%E3%82%89%E3%81%A9%E3%81%85%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%B9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <Play size={20} fill="currentColor" />
                            チャンネル登録
                        </a>
                        <a href="#latest" className="btn btn-secondary">
                            最新動画を見る
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
