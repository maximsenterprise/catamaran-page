"use client";
import { NavBar, DocsBar } from "../navbar";

export default function Documentation() {
    return (
        <main>
            {DocsBar()}
            <div className="flex flex-wrap items-start flex-col justify-center pt-32 bg-clip-text bg-gradient-to-br from-teal-600 to-teal-300 text-transparent ml-16 mr-16 mb-10">
                <h1 className={`font-extrabold text-5xl mb-5 italic`}>Documentation</h1>
                <hr className="w-full mb-5"></hr>
                <h3 className={`font-extrabold text-xl mb-12`}>These are the Catamaran Official Docs</h3>
                <p className="text-accent-foreground">
                    Welcome to the official Catamaran documentation. Here you will find all the information you need to get started with the Catamaran framework.
                    If you haven&apos;t already, make sure to check out the <a href="started" className="text-teal-600 italic">Getting Started</a> page. Make sure to find the elements that you need.
                </p>
                <hr className="w-full mb-5 mt-5"></hr>
                <h3 className={`font-extrabold text-xl mb-12`}>Guide to Documentation</h3>
                <p className="text-accent-foreground">
                    The documentation is divided into several sections, each of which covers a different aspect of the Catamaran framework. You can search for a specific component or feature using the search bar at the top of the page.
                    Pages will contain examples of creating the Object.
                </p>

            </div>
        </main>
    );
}