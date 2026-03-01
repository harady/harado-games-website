import React from 'react';
import { PlayCircle } from 'lucide-react';
import './Videos.css';

const videos = [
    {
        id: 1,
        title: "【モンスト】2024年3月版最強キャラランキングTOP100改訂版、激獣神祭新限定ゲキリン...",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
        views: "2898回",
        date: "1年前"
    },
    {
        id: 2,
        title: "【モンスト】2024年2月版最強キャラランキングTOP100改訂版、天魔の孤城 空中庭園の追加...",
        thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
        views: "1847回",
        date: "1年前"
    },
    {
        id: 3,
        title: "【モンスト】2024年1月版最強キャラランキングTOP100改訂版、2024年の新春限定キャラ...",
        thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
        views: "266回",
        date: "1年前"
    }
];

const popularVideos = [
    {
        id: 4,
        title: "【モンスト】黎絶ロヴァー攻略！自分は一体でもマサムネを減らしたら勝てない😱...",
        thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "【モンスト】2023年12月版最強キャラランキングTOP100、2023年終了時点！...",
        thumbnail: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "【モンスト】新春超獣神祭マサムネ狙いXXX連！！アルセーヌ、ハレルヤも引きたいけど...",
        thumbnail: "https://images.unsplash.com/photo-1561654791-00316c79efa8?q=80&w=2054&auto=format&fit=crop",
    }
];

export const LatestVideos: React.FC = () => {
    return (
        <section id="latest" className="section video-section">
            <div className="container">
                <h2 className="section-title text-gradient">LATEST VIDEOS</h2>

                <div className="video-grid">
                    {videos.map(video => (
                        <a href="https://www.youtube.com/@%E3%81%AF%E3%82%89%E3%81%A9%E3%81%85%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%B9" target="_blank" rel="noopener noreferrer" key={video.id} className="video-card glass-panel">
                            <div className="thumbnail-wrapper">
                                <img src={video.thumbnail} alt={video.title} className="thumbnail" />
                                <div className="play-overlay">
                                    <PlayCircle size={48} className="play-icon" />
                                </div>
                            </div>
                            <div className="video-info">
                                <h3 className="video-title">{video.title}</h3>
                                <div className="video-meta">
                                    <span>{video.views}</span>
                                    <span className="dot">•</span>
                                    <span>{video.date}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const PopularVideos: React.FC = () => {
    return (
        <section id="popular" className="section video-section dark-bg">
            <div className="container">
                <h2 className="section-title text-gradient">POPULAR VIDEOS</h2>

                <div className="popular-grid">
                    {popularVideos.map(video => (
                        <a href="https://www.youtube.com/@%E3%81%AF%E3%82%89%E3%81%A9%E3%81%85%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%B9" target="_blank" rel="noopener noreferrer" key={video.id} className="popular-card">
                            <img src={video.thumbnail} alt={video.title} className="popular-thumbnail" />
                            <div className="popular-overlay">
                                <h3 className="popular-title">{video.title}</h3>
                                <PlayCircle size={32} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
