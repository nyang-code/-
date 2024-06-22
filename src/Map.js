import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Map.css';

function Map() {
  const navigate = useNavigate();
  const [isHoveredExplore, setIsHoveredExplore] = useState(false);
  const [isHoveredRecommend, setIsHoveredRecommend] = useState(false);

  const disabledRegions = [
    'cheorwon', 'hwacheon', 'yanggu', 'hongcheon', 'pyeongchang', 'hoengseong', 'jeongseon'
  ];

  return (
    <div className="map-page">
      <div className="sidebar">
        <div
          className="map-description"
          onMouseEnter={() => setIsHoveredExplore(true)}
          onMouseLeave={() => setIsHoveredExplore(false)}
        >
          <p><span role="img" aria-label="glasses">🔎</span>강원도 야시장을 탐험해보세요!</p>
          {isHoveredExplore && (
            <ul>
              <li><span>속초: 해산물</span></li>
              <li><span>춘천: 닭갈비</span></li>
              <li><span>강릉: 해변 야시장</span></li>
              <li><span>홍천: 인삼</span></li>
              <li><span>횡성: 소고기</span></li>
            </ul>
          )}
        </div>

        <div
          className="map-recommendation"
          onMouseEnter={() => setIsHoveredRecommend(true)}
          onMouseLeave={() => setIsHoveredRecommend(false)}
        >
          <p><span role="img" aria-label="star">⭐</span>이달의 야시장을 추천합니다!</p>
          {isHoveredRecommend && (
            <ul>
              <li><span>춘천 : 춘천 풍물시장 꼬꼬야시장</span></li>
              <li><span>강릉 : 중앙시장 월화거리</span></li>
            </ul>
          )}
        </div>
      </div>

      <div className="map-container">
        <div className="market-banner">
          <p className="custom-font">
            강맛밤은 <br />
            강원도의 <span className="highlight-yellow">야시장</span>을 소개해주는 웹사이트로, <br />
            원하는 지역을 <span className="highlight-red">클릭</span>해주시면 <br />
            해당 <span className="highlight-yellow">야시장</span> 소개글이 나옵니다.
          </p>
        </div>

        <div className="map-image">
          <img src="/map.png" alt="Map of Gangwon Province" className="background-image" />
          <div className="region-label" data-region="goseong" style={{ top: '15%', left: '52%' }} onClick={() => navigate('/region/goseong')}>
            고성
          </div>
          <div className="region-label" data-region="sokcho" style={{ top: '26%', left: '56%' }} onClick={() => navigate('/region/sokcho')}>
            속초
          </div>
          <div className="region-label" data-region="chuncheon" style={{ top: '44%', left: '32%' }} onClick={() => navigate('/region/chuncheon')}>
            춘천
          </div>
          {disabledRegions.includes('cheorwon') ? (
            <div className="region-label disabled" style={{ top: '23%', left: '18%' }}>
              철원
            </div>
          ) : null}
          {disabledRegions.includes('hwacheon') ? (
            <div className="region-label disabled" style={{ top: '30%', left: '28%' }}>
              화천
            </div>
          ) : null}
          {disabledRegions.includes('yanggu') ? (
            <div className="region-label disabled" style={{ top: '25%', left: '38%' }}>
              양구
            </div>
          ) : null}
          <div className="region-label" data-region="inje" style={{ top: '35%', left: '48%' }} onClick={() => navigate('/region/inje')}>
            인제
          </div>
          <div className="region-label" data-region="yangyang" style={{ top: '38%', left: '60%' }} onClick={() => navigate('/region/yangyang')}>
            양양
          </div>
          <div className="region-label" data-region="gangneung" style={{ top: '55%', left: '68%' }} onClick={() => navigate('/region/gangneung')}>
            강릉
          </div>
          <div className="region-label" data-region="donghae" style={{ top: '67%', left: '75%' }} onClick={() => navigate('/region/donghae')}>
            동해
          </div>
          <div className="region-label" data-region="samcheok" style={{ top: '80%', left: '77%' }} onClick={() => navigate('/region/samcheok')}>
            삼척
          </div>
          <div className="region-label" data-region="taebaek" style={{ top: '88%', left: '72%' }} onClick={() => navigate('/region/taebaek')}>
            태백
          </div>
          <div className="region-label" data-region="yeongwol" style={{ top: '85%', left: '55%' }} onClick={() => navigate('/region/yeongwol')}>
            영월
          </div>
          <div className="region-label" data-region="wonju" style={{ top: '77%', left: '37%' }} onClick={() => navigate('/region/wonju')}>
            원주
          </div>
          {disabledRegions.includes('pyeongchang') ? (
            <div className="region-label disabled" style={{ top: '65%', left: '55%' }}>
              평창
            </div>
          ) : null}
          {disabledRegions.includes('hoengseong') ? (
            <div className="region-label disabled" style={{ top: '65%', left: '40%' }}>
              횡성
            </div>
          ) : null}
          {disabledRegions.includes('jeongseon') ? (
            <div className="region-label disabled" style={{ top: '72%', left: '63%' }}>
              정선
            </div>
          ) : null}
          {disabledRegions.includes('hongcheon') ? (
            <div className="region-label disabled" style={{ top: '52%', left: '40%' }}>
              홍천
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Map;
