
import { Footer } from "../footer";
import styles from "../index.module.css";
import { navBar } from "../navbar";
import { CodeBlock, CodeBlockBash } from "~/components/codeblock";

export default function Home() {
    const mainSwiftExample = `import Catamaran

// Create a view which contains a TextComponent
@Scaffold
struct MainView {
    var contents: some Instant {
        // Display "Hello, World!" on the screen
        TextComponent("Hello, World!")
    }
}    
    
@main
class MyApplication {
    static func main() {
        // Create a new window with the title "MyApplication"
        let window = Window(name: "MyApplication")

        // Attach the window to the application
        Application.attach_window(window)

        // Render the MainView in the window
        MainView.render_at(stage: .window)

        // Start the application
        Application.begin()
    }
}`;
    return (
        <main>
            {navBar()}
            <div className="flex flex-wrap items-start flex-col justify-center pt-32 bg-clip-text bg-gradient-to-br from-teal-600 to-teal-300 text-transparent ml-16 mr-16 mb-10">
                <h1 className={`font-extrabold text-5xl mb-5 italic`}>Getting Started</h1>
                <hr className="w-full mb-5"></hr>
                <h3 className={`font-extrabold text-xl mb-12`}>Welcome to Catamaran!</h3>
                <p className="text-accent-foreground">
                    Catamaran is a powerful Swift framework for creating cross-platform desktop applications. To begin the installation, you have to first download the Catamaran CLI tool from the Releases Page on <a href="https://github.com/maximsenterprise/catamaran" className="text-teal-600 italic" target="_blank">Github</a>.
                    Once downloaded, use the following command to create a new project:
                </p>
                <div className="w-full mt-4 mb-4">
                    <CodeBlockBash code={`catamaran init MyApplication`} />
                </div>
                <p className="text-accent-foreground">
                    This will create a new directory called <span className={styles.monospace}>MyApplication</span> with the following structure:
                </p>
                <div className="w-full mt-4 mb-4">
                    <CodeBlockBash code={`MyApplication/
    Sources/
        MyApplication/
            Main.swift
    Package.swift`}/>
                </div>
                <p className="text-accent-foreground">
                    Now let&apos;s create a simple Application with a window and a label. Open the <span className={styles.monospace}>Main.swift</span> file and add the following code:
                </p>
                <div className="w-full mt-4 mb-4">
                    <CodeBlock code={mainSwiftExample}/>
                </div>
                <p className="text-accent-foreground">
                    Great! Now you can run your application in two ways. You can either run the application from the terminal using:
                </p>
                <div className="w-full mt-4 mb-4">
                    <CodeBlockBash code={`swift build`}/>
                </div>
                <p className="text-accent-foreground">
                    Or you can pack the Application to run it:
                </p>
                <div className="w-full mt-4 mb-4">
                    <CodeBlockBash code={`catamaran bundle`}/>
                </div>
                <p className="text-accent-foreground">
                    With that, you&apos;ve created your first Catamaran Application! For more information, check out the <a href="/documentation" className="text-teal-600 italic">Documentation</a>.
                    Remember that when bundling the application, it will generate the executable according to the platform you are running the command on.
                    In macOS will generate a &apos;MyApplication.app&apos; file, in Windows a &apos;MyApplication.exe&apos; file and in Linux a &apos;MyApplication&apos; file.
                </p>
            </div>
            <Footer></Footer>
        </main>
    );
}