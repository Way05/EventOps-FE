import { Button } from "@radix-ui/themes";
import Link from "next/link";

//LANDING PAGE AKA HOMESCREEN
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EFEFEF] font-sans text-black">
      <Link href="/gettingstarted">
        <Button>HELLO I AM REALEST BOY FOR TESTING</Button>
      </Link>
    </div>
  );
}
