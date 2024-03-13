import { Skeleton } from "./ui/skeleton";


export default function Loading() {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Skeleton className="w-[350px] sm:w-[500px] h-[300px] rounded-xl" />
      </div>
    );
  }
