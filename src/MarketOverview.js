import React from 'react';
import './MarketOverview.css';

function MarketOverview() {
  const handleMapClick = (location) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${location}`, '_self');
  };

  const handleSiteClick = (url) => {
    window.open(url, '_self');
  };

  const chuncheonMarkets = [
    { name: '춘천 후평 어울야시장', location: '춘천후평일단지시장상인회', image: '/1.jpg', url: '/region/chuncheon/hoopyeong' },
    { name: '춘천 번개야시장', location: '춘천번개야시장', image: '/2.jpg', url: '/region/chuncheon/market3' },
    { name: '춘천 풍물시장 꼬꼬야시장', location: '춘천풍물시장', image: '/coco.png', url: '/region/chuncheon/market4' },
  ];

  const gangneungMarkets = [
    { name: '강릉 월화거리 야시장', location: '강릉월화거리', image: '/gg.jpg', url: '/region/gangneung/gmarket1' },
  ];

  const sokchoMarkets = [
    { name: '속초 중앙시장 야시장', location: '속초수산관광수산시장', image: '/su.jpg', url: '/region/sokcho/smarket1' },
  ];

  return (
    <div className="market-overview">
      <h2>춘천 시장 위치 안내</h2>
      <div className="market-container">
        {chuncheonMarkets.map((market, index) => (
          <div key={index} className="market-card">
            <img src={market.image} alt={market.name} className="market-image" onClick={() => handleMapClick(market.location)} />
            <div className="market-info">
              <h3>{market.name}</h3>
              <button onClick={() => handleSiteClick(market.url)}>자세히 보기</button>
            </div>
          </div>
        ))}
      </div>

      <h2>강릉 시장 위치 안내</h2>
      <div className="market-container">
        {gangneungMarkets.map((market, index) => (
          <div key={index} className="market-card">
            <img src={market.image} alt={market.name} className="market-image" onClick={() => handleMapClick(market.location)} />
            <div className="market-info">
              <h3>{market.name}</h3>
              <button onClick={() => handleSiteClick(market.url)}>자세히 보기</button>
            </div>
          </div>
        ))}
      </div>

      <h2>속초 시장 위치 안내</h2>
      <div className="market-container">
        {sokchoMarkets.map((market, index) => (
          <div key={index} className="market-card">
            <img src={market.image} alt={market.name} className="market-image" onClick={() => handleMapClick(market.location)} />
            <div className="market-info">
              <h3>{market.name}</h3>
              <button onClick={() => handleSiteClick(market.url)}>자세히 보기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketOverview;
