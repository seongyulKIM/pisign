
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">PiSign</h1>
      <p className="mt-2">파이 기반 책임 서명 플랫폼</p>
      <Link to="/campaign/1" className="mt-4 inline-block text-blue-600">캠페인 보기 →</Link>
    </div>
  );
}

function Campaign() {
  const [signed, setSigned] = useState(false);

  const handleSign = () => {
    alert('서명 완료! (결제 연동 예정)');
    setSigned(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">🔥 캠페인: 파이 생태계 소각 촉구</h2>
      <p className="mt-2">코어팀에게 실질적 유통량 감소를 요청합니다. 서명 시 0.1 Pi 지불됩니다.</p>
      <button onClick={handleSign} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded">
        {signed ? '✔️ 서명 완료' : '서명하기'}
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:id" element={<Campaign />} />
      </Routes>
    </Router>
  );
}

export default App;
