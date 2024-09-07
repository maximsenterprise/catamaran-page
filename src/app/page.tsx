"use client";
import React, { useState, useEffect } from "react";
import { navBar } from "./navbar";
import styles from "./index.module.css";
import { Footer } from "./footer";
import { CodeBlock, CodeBlockCPP } from "~/components/codeblock";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const initialCode = `import Catamaran

@Scaffold
struct HelloWorld {
    var content: some Instant {
        TextComponent("Hello, World!")
    }
}

@main
class MyApplication {
    static func main() {
        let window = Window(name: "Welcome to Catamaran")
        Application.attach_window(window)
        HelloWorld.render_at(stage: .window)
        Application.begin()
    }
}`;

  const sampleCode = `import Catamaran

@Scaffold
struct MyView {
    var content: some Instant {
        Column {
            TextComponent("Hello, World!")
            ButtonComponent {
                TextComponent("Click me!")
            } perform: {
                print("Button was clicked")
            }
        }
    }
}`;

  const sampleCCode = `#include <windows.h>

LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, 
        WPARAM wParam, LPARAM lParam) {
    switch (uMsg) {
        case WM_DESTROY:
            PostQuitMessage(0);
            break;
        default:
            return DefWindowProc(hwnd, uMsg, wParam, lParam);
    }
}`;

  const swiftCode = `import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Hello, World!")
            Button("Click me!") {
                print("Button was clicked")
            }
        }
    }
}`;

    const sampleLinuxCode = `import Gtk

let status = Application.run {
    let window = ApplicationWindowRef(application: $0)
    window.title = "Hello, World!"
    window.setDefaultSize(width: 400, height: 400)
    let label = LabelRef(str: "Hello, World!")
    window.add(widget: label)
    let button = ButtonRef(str: "Click me!")
    button.clicked = {
        print("Button was clicked")
    }
    window.add(widget: button)
    window.showAll()
}`;
    
    const sampleComponentCode = `import Catamaran
import AppKit

@MacComponent
struct MyMacComponent {
    func render_macOS() -> NSView {
        let view = NSView()
        let label = NSTextField(labelWithString: "Hello, World!")
        view.addSubview(label)
    }
}    

@Scaffold
struct MyView {
    var content: some Instant {
        Column {
            TextComponent("Hello, World!")
            MyMacComponent()
        }
    }
}`;

  return (
    <main className={`min-h-screen bg-background`}>
      {navBar()}
      <div className="flex items-center flex-col justify-center pt-32 bg-clip-text bg-gradient-to-br from-teal-600 to-teal-300 text-transparent">
        <h1 className={`font-extrabold text-7xl mb-7`}>Catamaran</h1>
        <h3 className={`font-extrabold text-2xl mb-12`}>Create powerful native <i>Desktop Applications</i></h3>
        <CodeBlock code={initialCode}></CodeBlock>

        <div className="flex itams-center flex-col justify-center max-w-xl m-5">
          <h2 className="font-bold mt-5 text-2xl text-foreground">Create Applications that are truly native</h2>
          <div className="flex justify-start flex-row mt-7 flex-wrap">
            <div className="bg-accent p-5 rounded-lg">
              <h2 className="font-bold text-lg italic text-foreground flex-auto">A different render for each platform</h2>
              <p className="text-foreground">Thanks to the power of Catamaran&apos;s rendering System, Catamaran can render a component in a variety of platforms, using their native technologies. Catamaran is based on three powerful APIs corresponding into the different platforms: <span className={styles.monospace}>SwiftUI</span>, <span className={styles.monospace}>windows.h</span> (in C++) and <span className={styles.monospace}>SwiftGTK</span></p>
            </div>
            <CodeBlock code={sampleCode}></CodeBlock>

            <div className="bg-accent p-5 rounded-lg mt-12">
              <h2 className="font-bold text-lg italic text-foreground flex-auto">Native macOS Implementations</h2>
              <p className="text-foreground">Catamaran for macOS uses <span className={styles.monospace}>AppKit</span> and <span className={styles.monospace}>SwiftUI</span> for great integration with macOS. With both libraries, we can create the most amazing experience for the end user, following Apple&apos;s design rules.</p>
            </div>
            <CodeBlock code={swiftCode}></CodeBlock>

            <div className="bg-accent p-5 rounded-lg mt-12">
              <h2 className="font-bold text-lg italic text-foreground flex-auto">Truly Windows Intergration</h2>
              <p className="text-foreground">Thanks to the powerful interoperability that Swift has with C++, applications for Windows are rendered though a custom framework called <span className={styles.monospace}>CoreWindows</span> which can compile the code for the application to run with native Windows components.</p>
            </div>
            <CodeBlockCPP code={sampleCCode}></CodeBlockCPP>

            <div className="bg-accent p-5 rounded-lg mt-12">
              <h2 className="font-bold text-lg italic text-foreground flex-auto">Linux with GTK</h2>
              <p className="text-foreground">Thanks to GTK, Catamaran can render Applications on Linux that look made specificly for your Operative System.</p>
            </div>
            <CodeBlock code={sampleLinuxCode}></CodeBlock>

            <div className="bg-accent p-5 rounded-lg mt-12">
              <h2 className="font-bold text-lg italic text-foreground flex-auto">A wide range of Components</h2>
              <p className="text-foreground">Catamaran offers a wide range of components from all of the different libraries, but you can create your own palletes with all the different ComponentTypes. Platform dependent, or independent, that&apos;s your decision.</p>
            </div>
            <CodeBlock code={sampleComponentCode}></CodeBlock>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}