import { Skeleton } from "@/components/ui/skeleton";

const ResultSkelton = () => {
  return (
    <div className="flex md:space-x-4 max-md:flex-wrap">
      <Skeleton className="h-52 basis-[300px] md:basis-[250px] xlg:basis-[320px] 2xxl:w-[400px] rounded-xl max-md:mb-6" />
      <div className="basis-full md:basis-[calc(100%_-_250px)] xlg:basis-[calc(100%_-_320px)] 2xxl:basis-[calc(100%_-_420px)] flex w-full flex-col">
        {/* Top Description */}
        <div className="w-full flex-grow">
          <div className="flex justify-between gap-4 items-start">
            <Skeleton className="h-6 w-[300px] rounded-full mb-2.5" />
            <Skeleton className="h-6 w-14 rounded-full mb-2.5 max-md:hidden" />
          </div>
          <Skeleton className="h-6 w-52 rounded-full mb-2.5" />
          <Skeleton className="h-6 w-52 rounded-full" />
        </div>

        <div className="w-full flex flex-col md:items-end max-md:mt-4">
          <Skeleton className="h-6 w-40 rounded-full mb-2.5" />
          <Skeleton className="h-6 w-24 rounded-full mb-2.5" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ResultSkelton;
