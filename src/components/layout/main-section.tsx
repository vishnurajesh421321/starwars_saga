import type { ReactNode } from 'react';

function MainSection({ children }: { children: ReactNode[] }) {
  const [list, details] = children;
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="w-[50%] h-full border-r border-gray-300">{list}</div>
      <div className="w-[50%]">{details}</div>
    </div>
  );
}

export default MainSection;
