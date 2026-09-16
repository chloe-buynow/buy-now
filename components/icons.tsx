import type { ReactNode } from "react";


/** script2.js 의 ICON() 래퍼 — 원본과 동일한 140x140 원형 배경 위에 아이콘 그룹을 얹는다. */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="70" r="68" fill="#EEEEFF" />
      {children}
    </svg>
  );
}

export function IconFabric() {
  return (
    <Icon>
      <rect x="40" y="38" width="60" height="64" rx="10" fill="#6D6AFF" /><path d="M52 50h36M52 62h36M52 74h24" stroke="#fff" strokeWidth="5" strokeLinecap="round" /><circle cx="94" cy="96" r="14" fill="#4F4CD6" /><path d="M88 96h12M94 90v12" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </Icon>
  );
}

export function IconCal() {
  return (
    <Icon>
      <rect x="34" y="42" width="72" height="62" rx="10" fill="#6D6AFF" /><rect x="34" y="42" width="72" height="18" rx="10" fill="#4F4CD6" /><path d="M50 34v14M90 34v14" stroke="#4F4CD6" strokeWidth="7" strokeLinecap="round" /><circle cx="54" cy="76" r="5" fill="#fff" /><circle cx="70" cy="76" r="5" fill="#fff" /><circle cx="86" cy="76" r="5" fill="#fff" opacity=".5" />
    </Icon>
  );
}

export function IconGap() {
  return (
    <Icon>
      <circle cx="64" cy="64" r="26" fill="none" stroke="#6D6AFF" strokeWidth="10" /><path d="M84 84l20 20" stroke="#4F4CD6" strokeWidth="11" strokeLinecap="round" /><path d="M54 64h20M64 54v20" stroke="#6D6AFF" strokeWidth="6" strokeLinecap="round" opacity=".55" />
    </Icon>
  );
}

export function IconChart() {
  return (
    <Icon>
      <path d="M42 100V70M62 100V44M82 100V60M102 100V52" stroke="#6D6AFF" strokeWidth="11" strokeLinecap="round" /><path d="M34 112h72" stroke="#4F4CD6" strokeWidth="8" strokeLinecap="round" />
    </Icon>
  );
}

export function IconShield() {
  return (
    <Icon>
      <path d="M70 30l30 12v24c0 18-12.6 33-30 38-17.4-5-30-20-30-38V42z" fill="#6D6AFF" /><path d="M56 70l10 10 20-22" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Icon>
  );
}

export function IconUp() {
  return (
    <Icon>
      <path d="M36 92l20-20 16 16 30-32" stroke="#6D6AFF" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" /><path d="M84 54h20v20" stroke="#4F4CD6" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Icon>
  );
}

export function IconLink() {
  return (
    <Icon>
      <path d="M58 82L44 68a16 16 0 0 1 0-23l6-6a16 16 0 0 1 23 0l8 8" fill="none" stroke="#6D6AFF" strokeWidth="10" strokeLinecap="round" /><path d="M82 58l14 14a16 16 0 0 1 0 23l-6 6a16 16 0 0 1-23 0l-8-8" fill="none" stroke="#4F4CD6" strokeWidth="10" strokeLinecap="round" />
    </Icon>
  );
}

export function IconPick() {
  return (
    <Icon>
      <rect x="34" y="42" width="72" height="24" rx="9" fill="#C9C7FF" /><rect x="34" y="74" width="72" height="24" rx="9" fill="#6D6AFF" /><path d="M52 86l6 6 13-14" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Icon>
  );
}

export function IconSign() {
  return (
    <Icon>
      <rect x="36" y="30" width="58" height="74" rx="9" fill="#6D6AFF" /><path d="M50 50h30M50 63h30M50 76h16" stroke="#fff" strokeWidth="5" strokeLinecap="round" /><path d="M72 96c6-7 12-7 18 0" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity=".85" /><path d="M110 58L80 88l-12 4 4-12 30-30z" fill="#4F4CD6" /><path d="M99 47l9 9" stroke="#EEEEFF" strokeWidth="5" strokeLinecap="round" />
    </Icon>
  );
}

export function IconApply() {
  return (
    <Icon>
      <rect x="42" y="32" width="56" height="72" rx="9" fill="#6D6AFF" /><path d="M56 52h28M56 66h28M56 80h16" stroke="#fff" strokeWidth="5" strokeLinecap="round" /><circle cx="94" cy="90" r="18" fill="#4F4CD6" /><path d="M86 90l6 6 11-12" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Icon>
  );
}

export function IconSend() {
  return (
    <Icon>
      <rect x="30" y="56" width="80" height="48" rx="9" fill="#6D6AFF" /><path d="M30 72h80" stroke="#fff" strokeWidth="6" /><circle cx="44" cy="90" r="5" fill="#fff" opacity=".8" /><path d="M70 46V22M70 22l-11 11M70 22l11 11" stroke="#4F4CD6" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Icon>
  );
}

export const I = {
  fabric: <IconFabric />,
  cal: <IconCal />,
  gap: <IconGap />,
  chart: <IconChart />,
  shield: <IconShield />,
  up: <IconUp />,
  link: <IconLink />,
  pick: <IconPick />,
  sign: <IconSign />,
  apply: <IconApply />,
  send: <IconSend />,
};
