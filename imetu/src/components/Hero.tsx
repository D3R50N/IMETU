// import banner from "../assets/banner.jpg"

import { useState } from "react";



export default function Hero() {
   
    const minWords = 20;
    const [error, setError] = useState<string | null>(null);
    const [wordCount, setWordCount] = useState<number>(0);
   
    function showAddStoryModal() {
        (document.getElementById('my_modal') as HTMLDialogElement).showModal()
    }

    function submitStoryTime(): void {
        const title = (document.getElementById('storytitle') as HTMLInputElement).value;
        const story = (document.getElementById('storytime') as HTMLInputElement).value;
        setError(null);
        fetch(import.meta.env.VITE_API_URL + '/api/stories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, story })
        }).then(async response => {
            if (response.ok) {
                (document.getElementById('my_modal') as HTMLDialogElement).close();
            } else {
                setError((await response.json()).error || 'Something went wrong');
            }
        })
    }

    function checkWords(): void {
        const story = (document.getElementById('storytime') as HTMLInputElement).value.trim();
        if (story == "") setWordCount(0);
        else
        setWordCount(story.split(/\s/).length);

    }

    return <div className=" flex items-center flex-col  py-[5%] pt-[15%]">

        <h1 className="text-6xl font-extrabold text-center">Can I tell people how I <span className="text-secondary">met</span> you ?</h1>
        <p className="py-6 text-center max-w-xl">
            <q>
                I met you at a very strange time in my life.
            </q> - Dany Dawson

        </p>
        <div className="w-[40%]">
            <div className="chat chat-start">
                <div className="chat-bubble">
                    Do you remember the
                    <br />
                    first time we met ?
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">Sorry, but I forgot..</div>
            </div>
        </div>
        <button onClick={showAddStoryModal} className="my-[5%] btn btn-primary text-[15px] uppercase min-w-[15%]">Share a new storytime</button>

        <dialog id="my_modal" className="modal">
            <div className="modal-box">
                <h3 className=" gap-2 flex">
                    <span className="underline font-bold  uppercase text-lg">New storytime</span>
                    <span className={wordCount<minWords?"text-red-500":"text-green-600"}>({wordCount} on at least {minWords } words)</span>
                </h3>
                <form action="/" method="post" id="newStoryForm">
                    <input type="text" name="title" id="storytitle" placeholder="Give a title to your storytime ❤️" className="input input-bordered w-full max-w mt-7" />
                    <textarea name="story" id="storytime" rows={5} className="textarea textarea-bordered w-full resize-none mt-3" placeholder="Describe us how you met your loved one." onInput={checkWords}/>
                </form>
                <p className="text-red-500 min-h-6">{error}</p>
                <div className="mt-5 flex justify-end gap-5">
                    <form method="dialog" className="">
                        <button className="btn btn-ghost">Cancel</button>
                    </form>
                    <button className="btn btn-primary" onClick={submitStoryTime}>Share with people</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </div>
} 