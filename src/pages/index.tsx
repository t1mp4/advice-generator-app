import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-6 w-[min(90%,60rem)] px-6 pt-6 pb-12 mx-auto mt-16 text-center bg-blue-grayish-dark rounded-lg">
      <span className="text-[.75rem] text-green-neon tracking-[.25em] uppercase">
        Advice #117
      </span>
      <blockquote className="text-[1.5rem]">
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action."
      </blockquote>
      <Divider />
    </div>
  );
};

export default Home;

const Divider: React.FC = () => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-[16px]">
      <div className="w-full h-[1px] bg-blue-grayish"></div>
      <div className="flex gap-[6px]">
        <div className="w-[6px] h-[16px] bg-cyan-light rounded-md"></div>
        <div className="w-[6px] h-[16px] bg-cyan-light rounded-md"></div>
      </div>
      <div className="w-full h-[1px] bg-blue-grayish"></div>
    </div>
  );
};
