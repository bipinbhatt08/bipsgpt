import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <ModeToggle/>
      <UserButton/>
    </div>
  );
}
