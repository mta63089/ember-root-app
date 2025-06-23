import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-cover bg-center px-8 py-20 text-center md:p-20"
      )}
    >
      <div className="mx-auto max-w-screen-md">
        <h1 className="mb-6 text-balance text-3xl font-bold md:text-5xl">
          Where Fire Meets Flavor
        </h1>
        <p className="mb-4 text-lg font-medium text-primary">
          Crafted over open flame, sourced from Oregon soil - experience
          wood-fired cuisine reimagined.
        </p>
        <p className="font-semibold text-muted-foreground md:text-lg">
          At Ember & Root, every dish tells a story of earth, flame, and
          artistry. Our seasonal menus are built on locally-sourced ingredients,
          smoked, seared, and charred to perfection. Whether it's your first
          time or your fiftieth, every visit is a return to something elemental.
        </p>
        <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
          <Link href="/menu">
            <Button size="lg">Our Menu</Button>
          </Link>
          <Link href="/reserve">
            <Button size="lg" variant="outline">
              Reserve a Table
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
