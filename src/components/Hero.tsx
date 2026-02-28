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
                        最新のゲーム実況からマッドな検証企画まで！<br />
                        はらどぅのハチャメチャなゲームライフへようこそ。
                    </p>

                    <div className="hero-actions">
                        <a
                            href="https://www.youtube.com/@haruto_game"
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
