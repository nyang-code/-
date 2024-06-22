import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RegionPage.css';

const markets = {
  chuncheon: [
    {
      name: '춘천 후평 어울야시장',
      date: '2024.4.12 ~ 10.26 매주 금, 토',
      time: '18시 ~ 23시',
      location: '강원 춘천시 효평길 104',
      image: '/1.jpg',
      id: 'hoopyeong',
    },
    {
      name: '춘천 번개야시장',
      date: '미운영',
      time: '작년에는 5월부터 개최했으나, 올해는 아직 공지 없음. 오픈 공지사항 올라오면 바로 업데이트 예정.',
      location : '강원 춘천시 번개시장길 30',
      image: '/2.jpg',
      id: 'market3',
    },
    {
      name: '춘천 풍물시장 꼬꼬야시장',
      date: '2024.5.3 ~ 10.27 매주 금,토,일',
      time: '18시 ~ 23시',
      location: '강원 춘천시 영서로 2352-24 풍물시장',
      image: '/coco.png',
      id: 'market4',
    },
  ],

  gangneung : [
    {
      name: '강릉 월화거리 야시장',
      date: '2024.5.3 ~ 10.26 매주 금, 토',
      time: '18시 ~ 23시',
      location: '강원 강릉시 경강로 2111',
      image: '/gg.jpg',
      id: 'gmarket1',
    },
  ],

  sokcho : [
    {
      name: '속초 중앙시장 야시장',
      date: '매일, 매주 수요일은 정기휴무',
      time: '08:00 ~ 20:00, 금-토는 21:00까지',
      location: '강원 속초시 중앙로147번길 12',
      image: '/su.jpg',
      id: 'smarket1',
    },
  ],

};

function RegionPage() {
  const { region } = useParams();
  const navigate = useNavigate();

  const marketData = markets[region] || [];

  useEffect(() => {
    if (marketData.length === 0) {
      alert('해당 지역은 추후 개발 예정입니다. 조금만 기다려주세요!');
      navigate('/');
    }
  }, [marketData, navigate]);

  return (
    <div className="region-page">
      <h2>{region} 야시장</h2>
      <div className="market-list">
        {marketData.map((market) => (
          <div 
            className="market-item" 
            key={market.id} 
            onClick={() => navigate(`/region/${region}/${market.id}`)}
          >
            <img src={market.image} alt={market.name} className="market-image" />
            <div className="market-info">
              <h3>{market.name}</h3>
              <p>{market.date}</p>
              <p>{market.time}</p>
              <p className="market-location"><b>위치:</b> {market.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegionPage;
