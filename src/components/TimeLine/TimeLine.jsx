import AnimatedCard from './AnimatedCard'; 
// eslint-disable-next-line react/prop-types
const Timeline = ({ data = [], CardComponent }) => {
  return (
    <div className="w-full py-20 flex flex-col items-center">
      <div className="relative lg:w-4/5 max-w-5xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-900 to-cyan-500" />
        <ul className="space-y-16">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <li key={index} className={`relative lg:w-1/2 ${ isLeft ? 'float-left clear-right lg:text-right lg:-translate-x-8' : 'float-right clear-left lg:text-left lg:translate-x-8' }`} >
                <AnimatedCard direction={isLeft ? 'left' : 'right'}>
                  <CardComponent {...item} />
                </AnimatedCard>

                <span
                  className={`absolute lg:p-2 p-1 dark:bg-[#008DDA] bg-cyan-900 text-white text-xs flex items-center justify-center rounded-lg top-[-45px] shadow-md 
                    ${ isLeft ? 'lg:right-5' : 'lg:left-5' }`}>
                      {item.date}
                </span>

                {window.innerWidth >= 800 && (
                  <span className={`absolute w-5 h-5 rounded-full grid place-items-center top-0 ${isLeft ? 'right-[-30px]' : 'left-[-30px]'}`} >
                    <span className="w-3 h-3 drop-shadow-[0_0_8px_rgba(96,165,250,0.7)] bg-cyan-500 rounded-full" />
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;

