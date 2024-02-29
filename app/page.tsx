import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <h1 className="text-6xl font-bold text-center">
                Buttons
            </h1>

            <div>
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="link">Link</Button>

            </div>

        </main>
    );
}
