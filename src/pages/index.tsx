import { useFetcher } from 'hooks/useFetcher';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import type { NextPage } from 'next';

interface Advice {
  slip: {
    id: number;
    advice: string;
  };
}

const Home: NextPage = () => {
  const { data, setData, error, setError, fetchData } = useFetcher<Advice>(
    'https://api.adviceslip.com/advice'
  );

  if (error) return <p>{error}</p>;

  const getNewAdvice = async (): Promise<Advice> => {
    try {
      const newData = await fetchData();
      if (newData.slip.id === data?.slip.id) return getNewAdvice();
      return newData;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const handleClick = () => {
    getNewAdvice()
      .then(advice => setData(advice))
      .catch(error => setError('An error occured while fetching the data'));
  };

  return (
    <>
      <div
        className="w-[90%] desktop:w-[35rem] px-6 desktop:px-12 pt-10 pb-16 mx-auto mt-28 desktop:mt-0 text-center bg-blue-grayish-dark rounded-xl relative"
        id="advice"
        aria-live="polite"
      >
        <span
          className="text-[.75rem] text-green-neon tracking-[.25em] uppercase focus-visible:outline focus-visible:outline-cyan-light"
          tabIndex={0}
        >
          Advice #
          {data?.slip.id || <Skeleton className="inline-block" width={20} />}
        </span>
        <blockquote
          className="my-6 desktop:my-7 text-[1.5rem] desktop:text-[1.75rem] animate-fade-in focus-visible:outline focus-visible:outline-cyan-light"
          key={data?.slip.id}
          tabIndex={0}
        >
          &quot;{data?.slip.advice || <Skeleton count={3} />}&quot;
        </blockquote>
        <Divider />
        <button
          onClick={handleClick}
          className="mt-6 desktop:mt-7 grid place-items-center absolute left-1/2 -translate-x-1/2 bottom-[-2rem] w-16 h-16 bg-green-neon rounded-[50%] hover:shadow-[0_0_20px_3px_hsl(150,100%,66%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-light"
          aria-controls="advice"
        >
          <DiceIcon />
        </button>
      </div>

      <a
        href="https://www.github.com"
        className="absolute left-2 bottom-2 hover:text-green-neon focus-visible:outline focus-visible:outline-cyan-light"
      >
        GitHub
      </a>
    </>
  );
};

export default Home;

const Divider: React.FC = () => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
      <div className="w-full h-[.05rem] bg-blue-grayish"></div>
      <div className="flex gap-2">
        <div className="w-[.375rem] h-4 bg-cyan-light rounded-md"></div>
        <div className="w-[.375rem] h-4 bg-cyan-light rounded-md"></div>
      </div>
      <div className="w-full h-[.05rem] bg-blue-grayish"></div>
    </div>
  );
};

const DiceIcon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 w-6 h-6 bg-blue-dark rounded">
      <div className="flex gap-2">
        <div className="w-1 h-1 bg-green-neon rounded-[50%]"></div>
        <div className="w-1 h-1 bg-green-neon rounded-[50%]"></div>
      </div>
      <div className="w-1 h-1 bg-green-neon rounded-[50%]"></div>
      <div className="flex gap-2">
        <div className="w-1 h-1 bg-green-neon rounded-[50%]"></div>
        <div className="w-1 h-1 bg-green-neon rounded-[50%]"></div>
      </div>
    </div>
  );
};
