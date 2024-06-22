import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MarketDetail.css';

const marketData = {
  'hoopyeong': {
    name: '춘천 후평 어울야시장',
    description: `춘천 후평 어울야시장은 후평1단지 시장에 위치하는 야시장입니다.
    <br>*지붕이 있어 우천시에도 이용 가능*<br><b><u>쓰레기 버리는 곳은 따로 있으니 꼭 버려주시길 바랍니다.</u></b>`,
    date: '2024.4.12 ~ 10.26 매주 금, 토',
    time: '18시 ~ 23시',
    location: '강원 춘천시 효평길 104',
    image: '/11.jpg',
    sections: {
      section1: [
        { name: '원마트', description: '술, 회 판매' },
        { name: '파리바게트', description: '갓 구운 신선한 빵' },
        { name: '일단지 구멍가게', description: '술 판매' },
        { name: '솔밭정육점', description: '육회, 간, 천엽, 육사시미, 지라' },
        { name: '백조과일', description: '수박, 토마토, 오렌지' },
        { name: '순이네', description: '잔치국수, 떡볶이, 순대, 오뎅, 꼬마김밥' },
        { name: '경진수산', description: '직접구운 고등어, 이연수 구이' },
        { name: '열매상점', image : '/image.png', description: '과일 탕후루, 과일쥬스, 샤베트' },
        { name: '신토불이', image : '/image1.png', description: '컵과일, 수박, 멜론, 각종과일' },
        { name: '수제빵집', image : '/image2.png', description: '직접 구운 각종 빵' },
        { name: '평창기름집', image : '/image 4.png', description: '야채 삼겹말이, 닭꼬치, 슬러시' },
        { name: '김밥과 친구들', image : '/image 6.png', description: '돈까스 김밥과 튀김 친구들(그때그때 달라요)' },
        { name: '김태백 축산', image : '/image 7.png', description: '육회도시락, 샤베트, 만원의 행복' },
        { name: '닭담', image : '/image 9.png', description: '돼지껍데기, 닭발, 시원한 맥주' },

      ],
      section2: [
        { name: '경진 건어물', description: '마른안주의 대가' },
        { name: '정훈이불', description: '장난감' },
        { name: '뚱자네', description: '타코야끼, 오징어순대, 똥집' },
        { name: '옛날반찬', description: '수육, 순대볶음, 육전' },
        { name: '웅이네', description: '폭찹, 삼겹김치볶음, 하이볼' },
        { name: '예원즉석두부', description: '치즈계란말이' },
        { name: '다이야 빈티지', description: '가리비치즈구이, 새우버터구이, 키조개 버터구이' },
        { name: '일단지 부침', description: '메밀전, 김치전, 전병' },
        { name: '일단지 시장 돈까스', description: '닭강정, 닭꼬치, 홍어무침' },
        { name: '현미와 누룽지', description: '호박식혜, 식혜' },
        { name: '아이스크림 앤 스낵', description: '다 있다 아이스크림' },
        { name: '오후 두시', description: '감자빵, 두부김치, 묵무침' },
        { name: '건강백세', description: '토스트, 옥수수, 묵' },
        { name: '일단지 옛날김밥', description: '김밥, 막국수, 오삼불고기' },
      ],
      section3: [
        { name: '후평 튀김 앤 전', description: '모듬전, 장떡, 육전' },
        { name: '시골밥집', description: '오징어초무침, 돼지껍데기, 비빔국수' },
        { name: '꿀꿀이 사육', description: '닭냉채, 순대, 전병' },
        { name: '은희네 웰빙튀김', description: '닭발, 모듬전, 더덕무침, 제육덮밥' },
        { name: '골목집', description: '제육, 떡갈비, 육계장' },
        { name: '기쁨이네', description: '왕새우튀김, 오징어숙회' },
        { name: '대바늘 코바늘', description: '무뼈닭발, 부추해물전, 야채밀쌈' },
        { name: '날마다 봄', description: '닭다리 구이, 감자떡' },
        { name: '맥시칸 치킨', description: '후라이드, 양념치킨' },
        { name: '동대문 곱창', image: '/image 3.jpg', description: '곱창볶음' },
      ],
    },
  },
  'market4': { 
    name: '춘천 풍물시장 꼬꼬야시장',
    description: `춘천 풍물시장 꼬꼬야시장은 춘천 풍물시장에 위치하는 야시장입니다.<br><b><u>주차 공간, 화장실, 유아를 위한 쉼터 등 여러 편의시설도 갖추고 있습니다.</u></b>`,
    date: '2024.5.3 ~ 10.27 매주 금,토,일',
    time: '18시 ~ 23시',
    location: '강원 춘천시 영서로 2352-24 풍물시장',
    image: '/coco1.png',
    items : [
        { name: '오징어천국', description: '오징어 무침, 문어 숙회, 도토리묵 무침' },
        { name: '숯불이와 철판이', description: '부채살 스테이크, 해물 오코노미야키, 한우 육회' },
        { name: '숯불 닭꼬치', description: '파닭파닭꼬치, 순살 닭꼬치, 매콤 닭발 편육, 시원한 맥주, 조각과일' },
        { name: '어구어 숯불구이', description: '고갈비 구이, 새우 구이' },
        { name: '홍합탕', description: '홍합탕, 홍합탕 국물 무한리필' },
        { name: '프로즌스모어', description: '딸기맛, 바닐라맛, 초코맛' },
        { name: '퀘사이다&브리또', description: '브리또, 퀘사이다, 시장버거, 치즈버거' },
        { name: '닭껍질구이', description: '닭껍질구이, 닭다리살구이, 돼지삼겹살구이' },
        { name: '야끼도리 사이타마', description: '야키도리, 츠쿠네, 수플레' },
        { name: '자연과 봄시내', description: '양념닭갈비, 닭발 편육, 불닭발+주먹밥' },
        { name: '분식의 달인',  image: '/dodo.jpg', description: '옛날시장떡볶이, 찰순대, 모듬튀김, 왕오징어튀김, 순대튀김, 달인김밥, 남대문 왕소세지 핫도그, 매콤달콤 소떡소떡, 꼬치소세지' },
        { name: '줄을스시오', image: '/so.jpg',ㅍdescription: '소고기 불초밥, 마른안주' },
        { name: '통닭 참 잘하는집', image: '/dada.jpg', description: '순살강정, 순살통닭, 페스츄리 핫도그, 후라이드 닭꼬치, 소떡소떡, 소세지 꼬치' },
        { name: '배주부전', image: '/333.jpg', description: '김치전, 해물부추전, 돈육전, 계란말이' },
        { name: '참숯닭공장', image: '/4444.jpg', description: '매운어묵, 제육볶음, 누룽지탕' },
        

      ],

  },

  'gmarket1': { 
    name: '강릉 월화거리 야시장',
    description: `강릉 강릉 월화거리 야시장은 다양한 먹거리와 볼거리를 제공하는 시장입니다.<br>*주차장은 강릉 중앙시장 제 1주차장, 남대천 주차장(제 1공영 주차장) 이용*
    <br><b><u>다 드신 후에 리턴존에 그릇들과 쓰레기를 정리해주세요 ! 강릉 월화거리는 다회용기를 사용합니다 ! </u></br>`,
    date: '2024.5.3 ~ 10.26 매주 금,토',
    time: '18시 ~ 23시',
    location: '강원 강릉시 경강로 2111',
    image: '/gg.jpg',
    items : [
        { name: 'Marshmallow Ice Cream', description: '불에 구워먹는 아이스크림' },
        { name: '양양 양꼬치', description: '전통 양꼬치, 닭날개 구이, 중국 음료' },
        { name: '사각피자', description: '미트치즈 스파게티, 페페로니 피자, 고구마피자, 소시지 피자' },
        { name: '모랭이네', description: '망고 에그와플, 아이스크림 에그와플, 초당 옥수수 에그와플' },
        { name: '초당순', description: '치즈구이, 흑임자 자이언트 치즈롤' },
        { name: '평창&강릉을 품은 붕어빵', description: '사과 붕어빵, 슈크림 붕어빵, 팥 붕어빵, 김치전' },
        { name: '소 위에 새우꼬치', description: '감자헤쉬번또띠아, 소새우 꼬치' },
        { name: '부어스트 2N6', description: '소시지 꼬치, 핫도그' },
        { name: '튀김', description: '닭껍질튀김, 캬베츠야끼' },
        { name: 'oh! 수제 크림도넛', description: '커피크림 찹쌀도넛, 순두부크림 찹쌀도넛, 팥 찹쌀도넛' },
        { name: '강릉커피옹심이', description: '커피옹심이당고, 옹심이소떡강정' },
        { name: '솜블리 솜사탕', description: '큰 솜사탕' },
        { name: '옹심히까르보나라', description: '옹심이까르보나라, 치즈불꼬치, 소떡소떡, 음료&커피' },
        { name: '감자튀김', description: '체다치즈 감자튀김, 치즈뿌링 감자튀김, 생선까스, 미니 생선까스' },
        { name: '감바스',  image: '/koch.jpg', description: '새우 감바스, 새우 꼬치' },
        { name: '강릉짬뽕만두', image: '/mando.jpg',ㅍdescription: '짬뽕만두, 찐만두, 구운 만두' },
        { name: '소소한텃밭', image : '/kali.jpg', description: 'ABC주스, CCA주스, 케일사과, 그린 든든 스무디, 오렌지 주스' },
        { name: '삼겹살이 땡겨유', image: '/sam.jpg', description: '삼겹살 치즈' },
        { name: '붕어빵', image: '/kim.jpg', description: '미니붕어빵, 김치전' },
        { name: '베트남', image: '/ssal.jpg', description: '베트남 소고기쌀국수, 사탕 수수, 코코넛, 말린망고, 말린 잭후르츠' },
        { name: 'Twist Potato', image: '/hoho.jpg', description: '번데기, 월화회오리감자' },
        { name: '문어버터구이', image: '/mon.jpg', description: '문어버터구이' },
        { name: '삼겹살꼬치', image: '/cocoo.jpg', description: '삼겹살꼬치' },
        { name: '낙지호롱이', image: '/horo.jpg', description: '낙지호롱이' },
        { name: '핫도그맛집', image: '/meme.jpg', description: '불스핫도그, 미트칠리핫도그, 소세지구이' },
        { name: '보성닭강정', image: '/gaga.jpg', description: '순살닭강정, 새우강정, 오징어강정' },

      ],

  },
  'smarket1': { 
    name: '속초 중앙시장 야시장',
    description: `속초 중앙시장 야시장은 속초관광수산시장에 위치합니다.<br>동해안의 싱싱한 수산물과 특산물 등으로 넘쳐나고, 속초와 고성 여행에 꼭 가봐야하는 필수 관광지, <br>속초의 풍물을 가장 잘 느낄 수 있는 곳. 속초 중앙시장으로 초대합니다.
    <br>*350대가 동시주차 가능한 넓은 주차장은 장보실 때 주차권만 받으시면 무료로 이용 가능*
    <br><b><u>주차 이용시간은 08:00~21:00, 시장에서 1만원 이상 구입시 지급하는 주차권을 이용, 1일 1차량 2개(1시간)까지 사용 가능.</u></br>`,
    date: '매일, 매주 수요일은 정기휴무',
    time: '08:00 ~ 20:00, 금-토는 21:00까지',
    location: '강원 속초시 중앙로147번길 12',
    image: '/su.jpg',
    items : [
        { name: '속초술빵', description: '술빵' },
        { name: '장터네', description: '족발, 미니짱' },
        { name: '잔치집', description: '생선구이 파는 식당, 생선구이를 드시면 된장찌개가 공짜!' },
        { name: '속초의 전설', description: '단호박식혜, 한라봉주스 등' },
        { name: '서민갑부 시장닭집', description: '닭강정, 새우강정' },
        { name: '설악닭강정', description: '닭꼬치, 오징어순대' },
        { name: '강민경의 꼬마김밥', description: '오징어진미, 땡초, 땡초멸치, 볶음김치, 야채, 스팸, 치즈베이컨, 불고기, 돈까스, 햄치즈' },
        { name: '감바스 & 코코넛쉬림프', description: '갈릭새우덮밥, 레몬갈릭감바스, 코코넛쉬림프' },
        { name: '야채말이', description: '낙지씨앗야채말이, 묵은지야채말이, 멸치야채말이, 돈까스야채말이, 묵은지야채말이, 참치마요야채말이' },
        { name: '중앙닭강정', description: '콤보닭강정, 순살닭강정, 뼈닭강정 / 보통맛, 매콤맛, 달콤맛' },
        { name: '강원도 막걸리 술빵', image: '/slu.jpg', description: '술빵' },
        { name: '코끼리 만두 분식', image: '/eheh.jpg', description: '야채고로케, 꽈배기, 팥 도너츠, 찹쌀 도너츠. 팥 찹쌀 도너츠, 오뎅, 떡볶이, 순대' },
        { name: '부먹 찍먹 빠삭타임', image: '/zz.jpg',ㅍdescription: '무제한 젤리와 야채, 과일 건조한 칩' },
        { name: '원조 더덕닭강정', image: '/ejejr.jpg',ㅍdescription: '순살더덕닭강정, 순살영양닭강정, 순살불맛닭강정, 마늘닭강정, 더덕닭강정, 후라이드' },
        { name: '만석 닭강정 중앙시장점', image: '/ekfr.jpg', description: '만석 닭강정' },
        { name: '속초새우아저씨', image: '/xnl.jpg', description: '왕새우튀김, 홍게튀김, 순살왕새우튀김, 속초자연산홍새우, 베이비크랩, 오징어튀김' },
        { name: '팡파미유', image: '/qkdqkd.jpg', description: '육쪽마늘빵, 육쪽양파빵, 육쪽커피빵' },
        { name: '똥가리 속초점', image: '/ehd.jpg', description: '똥집튀김(후라이드/양념/간장), 대구찜닭' },
        { name: '똑이네 튀김', image: '/zmzm.jpg', description: '오징어순대, 아바이순대, 닭강정, 새우강정, 왕새우튀김, 누드새우튀김, 홍게튀김, 꽃새우튀김, 왕오징어튀김, 김말이, 고구마, 대게고로케, 멘보샤' },
        { name: '팔공감자', image: '/gam.jpg', description: '명란감자, 새우감자, 소시지감자, 스테이크감자, 치즈감자, 감자만두, 타코야끼, 식혜(전통식혜/단호박/오미자), 팔공 수제맥주, 하이트 제로맥주, 글라스 와인 4종류, 병와인 ' },
        { name: '티각태각 속초점', image: '/rkr.jpg', description: '황태부각, 김부각, 고추부각, 연근부각, 우엉부각' },
      

      ],

  },
  
};

function MarketDetail() {
  const { marketId } = useParams();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('section1');
  const market = marketData[marketId];

  if (!market) {
    return <div>해당 야시장에 대한 정보가 없습니다.</div>;
  }

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };


  const selectedItems = market.sections ? market.sections[selectedSection] : market.items;

  return (
    <div className="market-detail">
      <img
        src="/002.png"
        alt="뒤로 가기"
        className="back-button"
        onClick={() => navigate(-1)}
      />
      <h2>{market.name}</h2>
      <img src={market.image} alt={market.name} className="market-image" />
      <p className="market-location"><b>위치:</b> {market.location}</p>
      <p dangerouslySetInnerHTML={{ __html: market.description }} className="market-description"></p>
      <p>{market.date}</p>
      <p>{market.time}</p>
      {market.sections && (
        <div className="section-buttons">
          <button onClick={() => handleSectionChange('section1')}>1구역</button>
          <button onClick={() => handleSectionChange('section2')}>2구역</button>
          <button onClick={() => handleSectionChange('section3')}>3구역</button>
        </div>
      )}
      <div className="market-items">
        {selectedItems.map((item, index) => (
          <div key={index} className="market-item">
            {item.image && (
              <img src={item.image} alt={item.name} className="item-image" />
            )}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketDetail;