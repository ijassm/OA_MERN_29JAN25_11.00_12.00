import { Navbar } from "../components/navbar";

export const Contact = () => {
    return (
        <>
            <Navbar />

            <main className="flex flex-col items-center justify-center h-screen w-[90%] max-w-lg m-auto">
                <h1 className="text-4xl font-bold mb-4">Contact</h1>
                <p className="text-lg">This is the contact page.</p>
                <p className="text-lg">Have fun coding!</p>
                <section className="w-full">
                    <div>
                        <label className="block my-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="border-black border-2 p-2 w-full"
                            id="name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="block my-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border-black border-2 p-2 w-full"
                            id="name"
                            type="email"
                        />
                    </div>
                </section>
                <button className="w-full py-2 bg-amber-300 my-4 cursor-pointer">
                    Submit
                </button>
            </main>
        </>
    );
};
