"use client";

import styles from "~/app/index.module.css";
import docStyles from "./documentation.module.css";
import { DocsBar } from "~/app/navbar";
import { CodeBlock } from "~/components/codeblock";

export default function Page({ params }: { params: { component: string } }) {
    const component = params.component;
    var myComponent: () => JSX.Element;
    switch (component) {
        case "window":
            myComponent = Window;
            break;
        case "text":
            myComponent = TextComponent;
            break;
        case "button":
            myComponent = ButtonComponent;
            break;
        case "image":
            myComponent = ImageComponent;
            break;
        case "icon":
            myComponent = IconComponent;
            break;
        case "instant":
            myComponent = Instant;
            break;
        case "column":
            myComponent = Column;
            break;
        case "row":
            myComponent = Row;
            break;
        case "scaffold":
            myComponent = Scaffold;
            break;
        case "compactspace":
            myComponent = CompactSpacer;
            break;
        case "navigationinstant":
            myComponent = NavigationInstant;
            break;
        case "verticalscroll":
            myComponent = VerticalScrollFrame;
            break;
        case "horizontalscroll":
            myComponent = HorizontalScrollFrame;
            break;
        case "iterator":
            myComponent = IteratorComponent;
            break;
        case "application":
            myComponent = Application;
            break;
        case "frame":
            myComponent = FrameComponent;
            break;
        case "dynamic":
            myComponent = Dynamic;
            break;
        case "component":
            myComponent = Component;
            break;
        case "transient":
            myComponent = TransientComponent;
            break;
        case "predicate":
            myComponent = PredicateComponent;
            break;
        case "distant":
            myComponent = DistantComponent;
            break;
        case "static":
            myComponent = StaticComponent;
            break;
        case "mac":
            myComponent = MacComponent;
            break;
        case "windows":
            myComponent = WindowsComponent;
            break;
        case "linux":
            myComponent = LinuxComponent;
            break;
        case "predicateresult":
            myComponent = PredicateResult;
            break;
        default:
            myComponent = () => <div>Component not found</div>;

    }
    return (
    <>
        {DocsBar()}
        {myComponent()}  
    </>
    );
}

function Window() {
    const constructor = `public class Window {}`;
    const initializer = `Window(name: String)`;
    const methods = `public func show() -> Void`;
    const example = `let window = Window(name: "MyApplication")
Application.attach_window(window)
Application.render_at(stage: .window, component: TextComponent("Hello, World!"))
window.show()
`;
    return (
        <>
            <div className={docStyles.mainDiv}>
                <h1 className={docStyles.title}>Window</h1>
                <h3 className={docStyles.subtitle}>Representation of a Window in Screen</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    The Window class represents a window in the application. The window can be attached to the application and can contain various components like Text, Button, Image, etc.
                </p>
                <h3 className={docStyles.contentDivider}>Initializer</h3>
                <div className="w-full">
                    <CodeBlock code={initializer}></CodeBlock>
                </div>

                <h3 className={docStyles.contentDivider}>Methods</h3>
                <div className="w-full">
                    <CodeBlock code={methods}></CodeBlock>
                    <h4 className={docStyles.methodDescription}>Shows all the content recorded in a window.</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a simple Text in a Window called &apos;MyApplication&apos;</p>
            </div>
        </>
    );
}

function TextComponent() {
    const constructor = `@Component
public class TextComponent {}`
    const initializer = `TextComponent(_ text: String)`
    const bold = `public func bold() -> TextComponent`
    const italic = `public func italic() -> TextComponent`
    const setWeight = `public func size(_ size: CGFloat) -> TextComponent`
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    TextComponent("Hello, World!")
        .bold()
        .italic()
        .size(20)
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>TextComponent</h1>
                <h3 className={docStyles.subtitle}>Component that shows a text to the screen</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    The TextComponent Component displays a simple Text to the screen, it can be used as its own or inside of any Instant, like a Column or Row.
                </p>
                <h3 className={docStyles.contentDivider}>Initializer</h3>
                <div className="w-full">
                    <CodeBlock code={initializer}></CodeBlock>
                </div>

                <h3 className={docStyles.contentDivider}>Methods</h3>
                <div className="w-full">
                    <CodeBlock code={bold}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Returns the text in bold</h4>
                    <CodeBlock code={italic}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Returns the text in italic</h4>
                    <CodeBlock code={setWeight}></CodeBlock>
                    <h4 className={docStyles.methodDescription}>Sets the size of the text</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a simple Text, bold, italic and with size 20 that displays &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function ButtonComponent() {
    const constructor = `@PredicateComponent
public class ButtonComponent {}`
    const initializer = `ButtonComponent(content: @escaping () -> [any Component], perform: @escaping () -> ())`
    const simpleInitializer = `ButtonComponent {
    // content: @escaping () -> [any Component]
} perform: {
    // perform: @escaping () -> ()
}`
    const isOn = `public func isOn() -> Boolean`
    const isOff = `public func isOff() -> Boolean`
    const perform = `public var perform: () -> ()`
    const result = `public var result: PredicateResult = .off // By default`
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    ButtonComponent {
        TextComponent("Hello, World!")
    } perform: {
        print("Clicked!")
    }
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    const content = `@ComponentBuilder public var content: () -> [any Component]`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>ButtonComponent</h1>
                <h3 className={docStyles.subtitle}>PredicateComponent that shows a text to the screen</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    The ButtonComponent PredicateComponent displays a button with inside any Component such as an Instant, or a TextComponent. It can be used with the <span className={styles.monospace}>var perform: () -&gt; ()</span>
                </p>
                <h3 className={docStyles.contentDivider}>Initializer</h3>
                <div className="w-full">
                    <CodeBlock code={initializer}></CodeBlock>
                    <p className="text-accent-foreground mt-4 mb-4">Or simply...</p>
                    <CodeBlock code={simpleInitializer}></CodeBlock>
                </div>

                <h3 className={docStyles.contentDivider}>Methods</h3>
                <div className="w-full">
                    <CodeBlock code={isOn}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Returns true when the button is clicked</h4>
                    <CodeBlock code={isOff}></CodeBlock>
                    <h4 className={docStyles.methodDescription}>Returns true when the button is not clicked</h4>
                </div>

                <h3 className={docStyles.contentDivider}>Public Variables</h3>
                <div className="w-full">
                    <CodeBlock code={content}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The content which is displayed inside the button</h4>
                    <CodeBlock code={perform}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The action that is runned when the button is clicked</h4>
                    <CodeBlock code={result}></CodeBlock>
                    <h4 className={docStyles.methodDescription}>Is <span className={styles.monospace}>.on</span> when the button is clicked</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a simple Button which says &quot;Hello, World!&quot; and it will print &quot;Clicked!&quot; when the button is clicked.</p>
            </div>
        </>
    );
}

function ImageComponent() {
    const constructor = `@Component
public class ImageComponent {}`;
    const initializer = `ImageComponent(source: String)`;
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    ImageComponent(source: "test.jpg")
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
window.show()
`;
    return (
        <>
            <div className={docStyles.mainDiv}>
                <h1 className={docStyles.title}>ImageComponent</h1>
                <h3 className={docStyles.subtitle}>Representation of an Image in the Screen</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    The ImageComponent class represents an image in the application. The image can be attached to the application and will show the image in the screen. It is imporant that the image is in the Resources folder, beacuse if not, the image will not be shown.
                </p>
                <h3 className={docStyles.contentDivider}>Initializer</h3>
                <div className="w-full">
                    <CodeBlock code={initializer}></CodeBlock>
                </div>

                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a simple Image with path &apos;test.jpg&apos;</p>
            </div>
        </>
    );
}

function IconComponent() {
    const constructor = `@MacComponent
public class IconComponent {}`;
    const initializer = `IconComponent(iconName: String)`;
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    IconComponent(iconName: "arrow.up")
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
window.show()
`;
    return (
        <>
            <div className={docStyles.mainDiv}>
                <h1 className={docStyles.title}>IconComponent</h1>
                <h3 className={docStyles.subtitle}>Representation of a macOS &apos;systemImage&apos; in the Screen</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.warning}>
                    This component should only be used in macOS applications.<br></br>
                    It will not be rendered when compiling or running in Windows or Linux.
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    The IconComponent represents a macOS &apos;systemImage&apos; in the application. The icon can be attached to the application and will show the icon in the screen.
                </p>
                <h3 className={docStyles.contentDivider}>Initializer</h3>
                <div className="w-full">
                    <CodeBlock code={initializer}></CodeBlock>
                </div>

                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a simple Image with systemName: &quot;arrow.up&quot;</p>
            </div>
        </>
    );
}

function Instant() {
    return (
        <>
        </>
    );
}


function Column() {
    return (
        <>
        </>
    );
}

function Row() {
    return (
        <>
        </>
    );
}

function Scaffold() {
    return (
        <>
        </>
    );
}

function CompactSpacer() {
    return (
        <>
        </>
    );
}

function NavigationInstant() {
    return (
        <>
        </>
    );
}

function VerticalScrollFrame() {
    return (
        <>
        </>
    );
}

function HorizontalScrollFrame() {
    return (
        <>
        </>
    );
}

function IteratorComponent() {
    return (
        <>
        </>
    );
}

function Application() {
    return (
        <>
        </>
    );
}

function FrameComponent() {
    return (
        <>
        </>
    );
}

function Dynamic() {
    return (
        <>
        </>
    );
}

function Component() {
    return (
        <>
        </>
    );
}

function TransientComponent() {
    return (
        <>
        </>
    );
}

function PredicateComponent() {
    return (
        <>
        </>
    );
}

function DistantComponent() {
    return (
        <>
        </>
    );
}

function StaticComponent() {
    return (
        <>
        </>
    );
}

function MacComponent() {
    return (
        <>
        </>
    );
}

function WindowsComponent() {
    return (
        <>
        </>
    );
}

function LinuxComponent() {
    return (
        <>
        </>
    );
}

function PredicateResult() {
    return (
        <>
        </>
    );
}