/** 04 한도 섹션 스톱워치 일러스트. IllReveal 이 .go 를 붙이면 CSS 애니메이션이 재생된다. */
export function StopwatchIll() {
  return (
    <div className="ill reveal d2">
      <svg viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="계정을 연동하면 30초 안에 선정산 한도가 계산됩니다">
      <defs>
      <radialGradient id="aHalo" cx="50%" cy="45%" r="55%"><stop offset="0" stopColor="#E9E7FF" /><stop offset="1" stopColor="#E9E7FF" stopOpacity="0" /></radialGradient>
      <linearGradient id="aBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#DDDBFF" /></linearGradient>
      <linearGradient id="aRim" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#C9C6FF" /><stop offset="1" stopColor="#8F8AFF" /></linearGradient>
      <linearGradient id="aBtn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8F8AFF" /><stop offset="1" stopColor="#5652E0" /></linearGradient>
      <radialGradient id="aGold" cx="35%" cy="30%" r="75%"><stop offset="0" stopColor="#FFF3C4" /><stop offset=".45" stopColor="#F7C948" /><stop offset="1" stopColor="#D99A1E" /></radialGradient>
      <filter id="aSh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="14" stdDeviation="10" floodColor="#2E2A8F" floodOpacity=".22" /></filter>
      <filter id="aSh2" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#2E2A8F" floodOpacity=".25" /></filter>
      </defs>
      <ellipse cx="170" cy="120" rx="120" ry="100" fill="url(#aHalo)" />
      <g filter="url(#aSh2)"><rect x="158" y="18" width="24" height="16" rx="7" fill="url(#aBtn)" /><rect x="164" y="30" width="12" height="12" fill="#5652E0" />
      <g transform="rotate(38 226 52)"><rect x="214" y="46" width="24" height="14" rx="6" fill="url(#aBtn)" /><rect x="218" y="56" width="16" height="10" fill="#5652E0" /></g></g>
      <g filter="url(#aSh)">
      <circle cx="170" cy="120" r="74" fill="url(#aRim)" />
      <circle cx="170" cy="120" r="64" fill="url(#aBody)" />
      </g>
      <circle cx="170" cy="120" r="54" fill="none" stroke="#EDECFF" strokeWidth="8" />
      <circle className="sw-ring" style={{ "--full": "339", "--half": "170" } as React.CSSProperties} cx="170" cy="120" r="54" fill="none" stroke="url(#aBtn)" strokeWidth="8" strokeLinecap="round" strokeDasharray="339" transform="rotate(-90 170 120)" />
      <g stroke="#C9C6FF" strokeWidth="3" strokeLinecap="round"><path d="M170 74v6" /><path d="M170 160v6" /><path d="M124 120h6" /><path d="M210 120h6" /></g>
      <g filter="url(#aSh2)"><path className="sw-hand" d="M170 120V86" stroke="url(#aGold)" strokeWidth="6" strokeLinecap="round" /><circle cx="170" cy="120" r="7" fill="url(#aGold)" /></g>
      <text className="sw-lbl" x="170" y="168" textAnchor="middle" fontFamily="Pretendard,sans-serif" fontSize="14" fontWeight="800" fill="#4F4CD6" letterSpacing="-.5">30초</text>
      <g fill="#fff" filter="url(#aSh2)"><path className="sw-tw" transform="translate(92 70) scale(9)" d="M0,-1 C.12,-.36 .36,-.12 1,0 C.36,.12 .12,.36 0,1 C-.12,.36 -.36,.12 -1,0 C-.36,-.12 -.12,-.36 0,-1Z" /><path className="sw-tw" style={{ animationDelay: "1.7s" }} transform="translate(262 170) scale(6)" d="M0,-1 C.12,-.36 .36,-.12 1,0 C.36,.12 .12,.36 0,1 C-.12,.36 -.36,.12 -1,0 C-.36,-.12 -.12,-.36 0,-1Z" /></g>
      <g><rect className="sw-cf" style={{ "--tx": "6px", "--ty": "-50px", "--r": "-90deg" } as React.CSSProperties} x="174" y="41" width="11" height="11" rx="2" fill="#F04E23" /><rect className="sw-cf" style={{ "--tx": "35px", "--ty": "-54px", "--r": "-53deg" } as React.CSSProperties} x="202" y="55" width="16" height="6" rx="2" fill="#FF8A5B" /><rect className="sw-cf" style={{ "--tx": "66px", "--ty": "-41px", "--r": "-16deg" } as React.CSSProperties} x="228" y="76" width="11" height="11" rx="2" fill="#FFC857" /><rect className="sw-cf" style={{ "--tx": "50px", "--ty": "-5px", "--r": "21deg" } as React.CSSProperties} x="236" y="109" width="16" height="6" rx="2" fill="#FFDDA8" /><rect className="sw-cf" style={{ "--tx": "60px", "--ty": "22px", "--r": "58deg" } as React.CSSProperties} x="234" y="140" width="11" height="11" rx="2" fill="#6D6AFF" /><rect className="sw-cf" style={{ "--tx": "55px", "--ty": "56px", "--r": "-85deg" } as React.CSSProperties} x="214" y="170" width="16" height="6" rx="2" fill="#8F8AFF" /><rect className="sw-cf" style={{ "--tx": "16px", "--ty": "47px", "--r": "-48deg" } as React.CSSProperties} x="188" y="185" width="11" height="11" rx="2" fill="#F04E23" /><rect className="sw-cf" style={{ "--tx": "-8px", "--ty": "64px", "--r": "-11deg" } as React.CSSProperties} x="153" y="190" width="16" height="6" rx="2" fill="#FF8A5B" /><rect className="sw-cf" style={{ "--tx": "-42px", "--ty": "66px", "--r": "26deg" } as React.CSSProperties} x="125" y="177" width="11" height="11" rx="2" fill="#FFC857" /><rect className="sw-cf" style={{ "--tx": "-43px", "--ty": "26px", "--r": "63deg" } as React.CSSProperties} x="99" y="156" width="16" height="6" rx="2" fill="#FFDDA8" /><rect className="sw-cf" style={{ "--tx": "-64px", "--ty": "7px", "--r": "-80deg" } as React.CSSProperties} x="91" y="122" width="11" height="11" rx="2" fill="#6D6AFF" /><rect className="sw-cf" style={{ "--tx": "-73px", "--ty": "-26px", "--r": "-43deg" } as React.CSSProperties} x="92" y="92" width="16" height="6" rx="2" fill="#8F8AFF" /><rect className="sw-cf" style={{ "--tx": "-35px", "--ty": "-36px", "--r": "-6deg" } as React.CSSProperties} x="113" y="62" width="11" height="11" rx="2" fill="#F04E23" /><rect className="sw-cf" style={{ "--tx": "-21px", "--ty": "-61px", "--r": "31deg" } as React.CSSProperties} x="138" y="47" width="16" height="6" rx="2" fill="#FF8A5B" /></g></svg>
    </div>
  );
}
