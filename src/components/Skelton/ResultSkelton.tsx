import { Skeleton } from "@/components/ui/skeleton";

const ResultSkelton = () => {
  return (
    <div className="flex space-x-4">
      <Skeleton className="h-52 w-[300px] 2xxl:w-[400px] rounded-xl" />
      <div className="basis-[calc(100%_-_320px)] 2xxl:basis-[calc(100%_-_420px)] flex w-full flex-col">
        {/* Top Description */}
        <div className="w-full flex-grow">
          <div className="flex justify-between gap-4 items-start">
            <Skeleton className="h-6 w-[300px] rounded-full mb-2.5" />
            <Skeleton className="h-6 w-14 rounded-full mb-2.5" />
          </div>
          <Skeleton className="h-6 w-52 rounded-full mb-2.5" />
          <Skeleton className="h-6 w-52 rounded-full" />
        </div>

        <div className="w-full flex flex-col items-end">
          <Skeleton className="h-6 w-40 rounded-full mb-2.5" />
          <Skeleton className="h-6 w-24 rounded-full mb-2.5" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ResultSkelton;
