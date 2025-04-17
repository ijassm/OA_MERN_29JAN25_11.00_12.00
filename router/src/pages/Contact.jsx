import { Navbar } from "../components/navbar";
import { useForm } from "react-hook-form";

export const Contact = () => {
    // console.log(useForm());

    console.log("rendered 😋");


    const { register, handleSubmit } = useForm();

    // console.log(register("name"), 'register("name")');

    const onSubmitHandler = handleSubmit((data) => {
        console.log(data, "data");
    })


    return (
        <>
            <Navbar />

            <main className="flex flex-col items-center justify-center my-24 w-[90%] max-w-sm m-auto">
                <h1 className="text-4xl font-bold mb-4">Contact</h1>
                <p className="text-lg">This is the contact page.</p>
                <p className="text-lg">Have fun coding!</p>
                <form onSubmit={onSubmitHandler} className="w-full">
                    <div className="my-4">
                        <label className="block my-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="border-black border-2 p-2 w-full focus:outline-orange-400"
                            id="name"
                            type="text"
                            {...register("name")}
                            required
                        />
                    </div>
                    <div className="my-4">
                        <label className="block my-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border-black border-2 p-2 w-full focus:outline-orange-400"
                            id="email"
                            type="email"
                            {...register("email")}
                            required
                        />
                    </div>
                    <button className="w-full py-2 hover:bg-amber-400 active:scale-[0.9] bg-amber-300 my-4 cursor-pointer">
                        Submit
                    </button>
                </form>
            </main>
        </>
    );
};
