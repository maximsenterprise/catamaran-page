"use client";

import styles from "~/app/index.module.css";
import docStyles from "./documentation.module.css";
import { DocsBar } from "~/app/navbar";
import { CodeBlock } from "~/components/codeblock";
import { Code } from "lucide-react";
import macro from "styled-jsx/macro";

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
                    <h3 className={docStyles.warningTitle}>Warning:</h3>
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
    const constructor = `@Component
public struct Instant {}`
    const initializer = `Instant(@ComponentBuilder content: @escaping () -> [any Component])`
    const simpleInitializer = `Instant {
    // content: @escaping () -> [any Component]
}`
    const isOn = `public func fixedSize(width: Int, height: Int) -> Instant`
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    TextComponent("Hello, World!")
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    const content = `@ComponentBuilder public var content: () -> [any Component]`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>Instant</h1>
                <h3 className={docStyles.subtitle}>Component that encapsulates other Components inside a view</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A Instant&apos;s main purpose is to put components inside other components forming groups. It can be used to put all types of Components inside a layout. An Instant has Vertical alignment, but we recommend using the Column typealias for better understanding of your code.
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
                    <h4 className={docStyles.methodDescriptionInside}>Allows you to fix the size of the Instant</h4>
                </div>

                <h3 className={docStyles.contentDivider}>Public Variables</h3>
                <div className="w-full">
                    <CodeBlock code={content}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The content which is displayed inside the Instant</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a simple Text which says &quot;Hello, World!&quot;. All of this in an Instant</p>
            </div>
        </>
    );
}


function Column() {
    const column = `public typealias Column = Instant`;
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    Column {
        TextComponent("Hello, World!")
        TextComponent("Hello, World!")
    }
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>Column</h1>
                <h3 className={docStyles.subtitle}>Typealias to clarify Instants in different cases</h3>
                <div className="w-full">
                    <CodeBlock code={column}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    Columns are used for better understanding of your code. To learn more see <a href="/documentation/instant" className="text-teal-600 italic">Instant</a>
                </p>
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render two TextComponents stacked one on top of another. Both say &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function Row() {
    const constructor = `@Component
public struct Row {}`
    const initializer = `Row(@ComponentBuilder content: @escaping () -> [any Component])`
    const simpleInitializer = `Row {
    // content: @escaping () -> [any Component]
}`
    const isOn = `public func fixedSize(width: Int, height: Int) -> Row`
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    Row {
        TextComponent("Hello, World!")
        TextComponent("Hello, World!")
    }
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    const content = `@ComponentBuilder public var content: () -> [any Component]`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>Row</h1>
                <h3 className={docStyles.subtitle}>Instant that renders Components horizontally</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A Row is mainly a Instant, but instead of rendering the components vertically, it renders them horizontally.
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
                    <h4 className={docStyles.methodDescriptionInside}>Allows you to fix the size of the Row Component</h4>
                </div>

                <h3 className={docStyles.contentDivider}>Public Variables</h3>
                <div className="w-full">
                    <CodeBlock code={content}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The content which is displayed inside the Row</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render two TextComponents putted in a row. Both say &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function Scaffold() {
    const constructor = `public struct Scaffold {}`
    const isOn = `public func render_at(stage: Stage) -> Void`
    const example = `@Scaffold
public struct MyView {
    var content: some Instant {
        Column {
            TextComponent("Hello, World!")
        }
    }
}
    
@main
class MyApplication {
    func main() -> Void {
        let window = Window(name: "MyApplication")
        Application.attach_window(window)
        MyView.render_at(stage: .window)
        Application.begin()
    }
}`;
    const content = `var content: some Instant`
    const macroTest = `@Scaffold`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>Scaffold</h1>
                <h3 className={docStyles.subtitle}>Structure that makes easier UI creation</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This Structure provides a Macro to make the creation of UI easier.
                    <CodeBlock code={macroTest}></CodeBlock>
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    To make Instant creation and management easier, the Scaffold structure was created. It allows you to create a structure that will be rendered in the screen.
                </p>

                <h3 className={docStyles.contentDivider}>Methods</h3>
                <div className="w-full">
                    <CodeBlock code={isOn}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Allows you to render to the screen</h4>
                </div>

                <h3 className={docStyles.contentDivider}>Public Variables</h3>
                <div className="w-full">
                    <CodeBlock code={content}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The Instant to display in the Scaffold</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a TextComponent that says &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function CompactSpacer() {
    const constructor = `@Component
public struct CompactSpace {}`
    const initializer = `CompactSpace(@ComponentBuilder content: @escaping () -> [any Component])`
    const simpleInitializer = `CompactSpace {
    // content: @escaping () -> [any Component]
}`
    const isOn = `public func fixedSize(width: Int, height: Int) -> CompactSpace`
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    CompactSpace {
        TextComponent("Hello, World!")
    }
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    const content = `@ComponentBuilder public var content: () -> [any Component]`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>CompactSpace</h1>
                <h3 className={docStyles.subtitle}>Instant that renders Components on top of each other</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A CompactSpace is mainly a Instant, but instead of rendering the components horizontally or vertically, it renders them on top of each other.
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
                    <h4 className={docStyles.methodDescriptionInside}>Allows you to fix the size of the CompactSpace Component</h4>
                </div>

                <h3 className={docStyles.contentDivider}>Public Variables</h3>
                <div className="w-full">
                    <CodeBlock code={content}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The content which is displayed inside the CompactSpace</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a CompactSpace with one text that says &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function NavigationInstant() {
    const constructor = `@Component
public struct NavigationInstant {}`
    const initializer = `NavigationInstant(name: String, @ComponentBuilder content: @escaping () -> [any Component])`
    const simpleInitializer = `NavigationInstant(name: String) {
    // content: @escaping () -> [any Component]
}`
    const isOn = `public func fixedSize(width: Int, height: Int) -> NavigationInstant`
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    NavigationInstant(name: "Home") {
        TextComponent("Hello, World!")
    }
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    const content = `@ComponentBuilder public var content: () -> [any Component]`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>NavigationInstant</h1>
                <h3 className={docStyles.subtitle}>Instant that represents components in a NavigationView</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A NavigationInstant is mainly an Instant, but it&apos;s purpose is to render components in a NavigationView. It is used to create a NavigationView with a title and a content.
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
                    <h4 className={docStyles.methodDescriptionInside}>Allows you to fix the size of the NavigationInstant Component</h4>
                </div>

                <h3 className={docStyles.contentDivider}>Public Variables</h3>
                <div className="w-full">
                    <CodeBlock code={content}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The content which is displayed inside the NavigationInstant</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a Navigation with one text that says &quot;Hello, World!&quot; and name &quot;Home&quot;</p>
            </div>
        </>
    );
}

function VerticalScrollFrame() {
    const constructor = `@Component
public struct VerticalScrollFrame {}`
    const initializer = `VerticalScrollFrame(@ComponentBuilder content: @escaping () -> [any Component])`
    const simpleInitializer = `VerticalScrollFrame {
    // content: @escaping () -> [any Component]
}`
    const isOn = `public func fixedSize(width: Int, height: Int) -> VerticalScrollFrame`
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    VerticalScrollFrame {
        TextComponent("Hello, World!")
        TextComponent("Hello, World!")
        TextComponent("Hello, World!")
        TextComponent("Hello, World!")
        TextComponent("Hello, World!")
    }
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    const content = `@ComponentBuilder public var content: () -> [any Component]`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>VerticalScrollFrame</h1>
                <h3 className={docStyles.subtitle}>Instant that renders Components in a Vertical ScrollView</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A VerticalScrollFrame is mainly a Instant, but instead of rendering the components in a lineal view, it puts them in a vertical ScrollView.
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
                    <h4 className={docStyles.methodDescriptionInside}>Allows you to fix the size of the VerticalScrollFrame Component</h4>
                </div>

                <h3 className={docStyles.contentDivider}>Public Variables</h3>
                <div className="w-full">
                    <CodeBlock code={content}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The content which is displayed inside the VerticalScrollFrame</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a VerticalScrollFrame with five texts that say &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function HorizontalScrollFrame() {
    const constructor = `@Component
public struct HorizontalScrollFrame {}`
    const initializer = `HorizontalScrollFrame(@ComponentBuilder content: @escaping () -> [any Component])`
    const simpleInitializer = `HorizontalScrollFrame {
    // content: @escaping () -> [any Component]
}`
    const isOn = `public func fixedSize(width: Int, height: Int) -> HorizontalScrollFrame`
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    HorizontalScrollView {
        TextComponent("Hello, World!")
        TextComponent("Hello, World!")
        TextComponent("Hello, World!")
        TextComponent("Hello, World!")
        TextComponent("Hello, World!")
    }
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    const content = `@ComponentBuilder public var content: () -> [any Component]`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>HorizontalScrollFrame</h1>
                <h3 className={docStyles.subtitle}>Instant that renders Components in a Horizontal ScrollView</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A HorizontalScrollFrame is mainly a Instant, but instead of rendering the components in a lineal view, it puts them in a horizontal ScrollView.
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
                    <h4 className={docStyles.methodDescriptionInside}>Allows you to fix the size of the HorizontalScrollFrame Component</h4>
                </div>

                <h3 className={docStyles.contentDivider}>Public Variables</h3>
                <div className="w-full">
                    <CodeBlock code={content}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The content which is displayed inside the HorizontalScrollFrame</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a HorizontalScrollFrame with five texts that say &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function IteratorComponent() {
    const constructor = `@Component
public struct IteratorComponent<T> {}`
    const initializer = `IteratorComponent(_ iterating: [T], @ComponentBuilder content: @escaping (T) -> [any Component])`
    const simpleInitializer = `IteratorComponent<T>([T]) { _ in
    // content: @escaping (T) -> [any Component]
}`
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    IteratorComponent<Int>(1...5) { number in
        TextComponent("Hello, World! (x\\(number))")
    } 
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    const content = `@ComponentBuilder public var content: () -> [any Component]`
    const list = `var list: [T]`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>IteratorComponent</h1>
                <h3 className={docStyles.subtitle}>Component that renders a Instant repeatedly</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    An IteratorComponent is mainly a Instant, but it renders the contents of it many times, one for each of the elements of the target list.
                </p>
                <h3 className={docStyles.contentDivider}>Initializer</h3>
                <div className="w-full">
                    <CodeBlock code={initializer}></CodeBlock>
                    <p className="text-accent-foreground mt-4 mb-4">Or simply...</p>
                    <CodeBlock code={simpleInitializer}></CodeBlock>
                </div>

                <h3 className={docStyles.contentDivider}>Public Variables</h3>
                <div className="w-full">
                    <CodeBlock code={content}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The content which is displayed inside the InteratorView on each iteration</h4>
                    <CodeBlock code={list}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>The list where the IteratorComponent iterates</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render five times &quot;Hello, World (x[numberOfIteration])&quot;</p>
            </div>
        </>
    );
}

function Application() {
    const constructor = `public class Application {}`;
    const window = `public static func attach_window(_ window: Window) -> Void`;
    const render_at = `public static func render_at(stage: ApplicationStage, component: any Component) -> Void`;
    const current = `public static func render_current() -> Void`;
    const begin = `public static func begin() -> Void`;
    const example = `let window = Window(name: "MyApplication")
let instant = Instant {
    TextComponent("Hello, World!")
}
Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    const content = `@ComponentBuilder public var content: () -> [any Component]`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>Application</h1>
                <h3 className={docStyles.subtitle}>Class that represents the Mainframe of the Program</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    <p className="text-accent-foreground">This class is meant to use staticly and it should not be initialized.</p>
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    An Application is the main frame of the application. It is used to attach windows and start the application.
                </p>

                <h3 className={docStyles.contentDivider}>Methods</h3>
                <div className="w-full">
                    <CodeBlock code={window}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>This attaches a Window variable to the Application</h4>
                    <CodeBlock code={render_at}></CodeBlock>
                    <h4 className={docStyles.methodDescription}>This renders a Component in a Window</h4>
                    <blockquote className={docStyles.instruction}>
                        <h3 className={docStyles.instructionTitle}>Note:</h3>
                        <p className="text-accent-foreground">The ApplicationStage is an enum that can be either: .window or .content.<br></br> When rendered in .window, the window gets that value, but when render in .content it will destroy all the content of the window and replace with the new.</p>
                    </blockquote>
                    <CodeBlock code={current}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>This renders the last component rendered again</h4>
                    <CodeBlock code={begin}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>This starts the application</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a simple &quot;Hello, World!&quot; text.</p>
            </div>
        </>
    );
}

function Dynamic() {
    const constructor = `@propertyWrapper
public struct Dynamic<Value> {}`
    const macroTest = `@Dynamic var varName: Type = value`;
    const expansion = `var myVar: String {
    didSet {
        Application.render_current()
    }
}
`
    const example = `let window = Window(name: "MyApplication")

@Dynamic var text: String = "Hello!"
let instant = Instant {
    TextComponent(text)
    ButtonComponent {
        TextComponent("Change Text")
    } perform: {
        text = "Clicked!"
    }
}

Application.attach_window(window)
Application.render_at(stage: .window, component: instant)
Application.begin()`;
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>Dynamic</h1>
                <h3 className={docStyles.subtitle}>Property Wrapper that allows variables to change</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This PropertyWrapper should be used like so:
                    <CodeBlock code={macroTest}></CodeBlock>
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    The Dynamic Property Wrapper allows you to create variables that can change and update the screen when changed.
                </p>

                <h3 className={docStyles.contentDivider}>Expansion</h3>
                <div className="w-full">
                    <CodeBlock code={expansion}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Allows you to render to the screen</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a TextComponent that says &quot;Hello!&quot; and when clicked will change to &quot;Clicked!&quot; without affecting the rest of the view.</p>
            </div>
        </>
    );
}

function Component() {
    const constructor = `public protocol Component {}`
    const macOS = `public func render_macOS(_ window: Window) -> NSView`;
    const linux = `public func render_linux(_ window: Window) -> Void`;
    const windows = `public func render_windows(_ window: Window) -> Void`;
    const example = `@Component
public struct CustomComponent {
    public func render_macOS(_ window: Window) -> NSView {
        return TextComponent("Hello, World!").render_macOS(window)
    }

    public func render_linux(_ window: Window) -> Void {
        TextComponent("Hello, World!").render_linux(window)
    }

    public func render_windows(_ window: Window) -> Void {
        TextComponent("Hello, World!").render_windows(window)
    }
}
    
@main
class MyApplication {
    func main() -> Void {
        let window = Window(name: "MyApplication")
        let instant = Instant {
            CustomComponent()
        }
        Application.attach_window(window)
        Application.render_at(stage: .window, component: instant)
        Application.begin()
    }
}`;
    const macroTest = `@Component`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>Component</h1>
                <h3 className={docStyles.subtitle}>Protocol that represents a UI element</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This Protocol provides a Macro to make the creation of UI easier.
                    <CodeBlock code={macroTest}></CodeBlock>
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A Component is a protocol that represents a UI element. It is used to create the UI of the application. It has platform dependent methods.
                    
                </p>

                <h3 className={docStyles.contentDivider}>Methods to Implement</h3>
                <div className="w-full">
                    <CodeBlock code={macOS}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render in macOS</h4>
                    <CodeBlock code={linux}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render in Linux</h4>
                    <CodeBlock code={windows}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render in Windows</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a CustomComponent that says &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function TransientComponent() {
    const constructor = `public protocol TransientComponent: Component {}`
    const macOS = `public func render_macOS(_ window: Window) -> NSView`;
    const linux = `public func render_linux(_ window: Window) -> Void`;
    const windows = `public func render_windows(_ window: Window) -> Void`;
    const example = `@TransientComponent
public struct CustomComponent {
    public func render_macOS(_ window: Window) -> NSView {
        return TextComponent("Hello, World!").render_macOS(window)
    }

    public func render_linux(_ window: Window) -> Void {
        TextComponent("Hello, World!").render_linux(window)
    }

    public func render_windows(_ window: Window) -> Void {
        TextComponent("Hello, World!").render_windows(window)
    }
}
    
@main
class MyApplication {
    func main() -> Void {
        let window = Window(name: "MyApplication")
        let instant = Instant {
            CustomComponent()
        }
        Application.attach_window(window)
        Application.render_at(stage: .window, component: instant)
        Application.begin()
    }
}`;
    const macroTest = `@TransientComponent`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>TransientComponent</h1>
                <h3 className={docStyles.subtitle}>Protocol that represents a Component that changes actively</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This Protocol provides a Macro to make the creation of UI easier.
                    <CodeBlock code={macroTest}></CodeBlock>
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A TransientComponent is a protocol that represents a Component that changes actively. It is used to create the UI of the application. It has platform dependent methods.
                </p>

                <h3 className={docStyles.contentDivider}>Methods to Implement</h3>
                <div className="w-full">
                    <CodeBlock code={macOS}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render in macOS</h4>
                    <CodeBlock code={linux}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render in Linux</h4>
                    <CodeBlock code={windows}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render in Windows</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a CustomComponent that says &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function PredicateComponent() {
    const constructor = `public protocol PredicateComponent: Component {}`
    const macOS = `public func render_macOS(_ window: Window) -> NSView`;
    const linux = `public func render_linux(_ window: Window) -> Void`;
    const windows = `public func render_windows(_ window: Window) -> Void`;
    const example = `@PredicateComponent
public struct CustomComponent {
    let button: ButtonComponent = ButtonComponent {
        TextComponent("Hello, World!")
    } perform: {
        print("Hello!")
    }

    public func render_macOS(_ window: Window) -> NSView {
        return button.render_macOS(window)
    }

    public func render_linux(_ window: Window) -> Void {
        button.render_linux(window)
    }

    public func render_windows(_ window: Window) -> Void {
        button.render_windows(window)
    }

    var result: PredicateResult {
        get {
            return button.result
        }
    }
}
    
@main
class MyApplication {
    func main() -> Void {
        let window = Window(name: "MyApplication")
        let instant = Instant {
            CustomComponent()
        }
        Application.attach_window(window)
        Application.render_at(stage: .window, component: instant)
        Application.begin()
    }
}`;
    const macroTest = `@PredicateComponent`
    const extension = `extension PredicateComponent {
    public func isOn() -> Bool {
        return result == .on
    }

    public func isOff() -> Bool {
        return result == .off
    }
}`
    const result = `var result: PredicateResult { get }`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>PredicateComponent</h1>
                <h3 className={docStyles.subtitle}>Protocol that represents a UI element which returns a boolean value</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This Protocol provides a Macro to make the creation of UI easier.
                    <CodeBlock code={macroTest}></CodeBlock>
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A PredicateComponent is a protocol that represents a UI element which returns a boolean value. It is used to create the UI of the application. It has platform dependent methods.
                    
                </p>

                <h3 className={docStyles.contentDivider}>Methods to Implement</h3>
                <div className="w-full">
                    <CodeBlock code={macOS}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render in macOS</h4>
                    <CodeBlock code={linux}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render in Linux</h4>
                    <CodeBlock code={windows}></CodeBlock>
                    <h4 className={docStyles.methodDescription}>Method to render in Windows</h4>
                    <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This Protocol has two more functions, but these are implemented in a extension to PredicateComponent
                    <CodeBlock code={extension}></CodeBlock>
                </blockquote>
                </div>

                <h3 className={docStyles.contentDivider}>Variables to create</h3>
                <div className="w-full">
                    <CodeBlock code={result}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Variable that stores the current result of the component</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a CustomComponent that is a ButtonComponent</p>
            </div>
        </>
    );
}

function DistantComponent() {
    const constructor = `public protocol DistantComponent {}`
    const start = `public func start() -> Void`;
    const end = `extension DistantComponent {
    public func end() -> Void {
        
    }
}`;
    const example = `@DistantComponent
public struct CustomComponent {
    public func start() {
        print("Hello, World!")
    }

    public func end() {
        print("Goodbye, World!")
    }
}
    
@main
class MyApplication {
    func main() -> Void {
        let window = Window(name: "MyApplication")
        let instant = Instant {}
        execute(CustomComponent())
        Application.attach_window(window)
        Application.render_at(stage: .window, component: instant)
        Application.begin()
    }
}`;
    const execute = `public func execute(distant: any DistantComponent) -> Void {
    component.start()
    component.end()
}`;
    const macroTest = `@DistantComponent`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>DistantComponent</h1>
                <h3 className={docStyles.subtitle}>Protocol that represents a Class that is executed in Background</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This Protocol provides a Macro to make the creation of UI easier.
                    <CodeBlock code={macroTest}></CodeBlock>
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A DistantComponent is a protocol that represents a class that is executed in the background. All of their methods are platform independent
                </p>

                <h3 className={docStyles.contentDivider}>Methods to Implement</h3>
                <div className="w-full">
                    <CodeBlock code={start}></CodeBlock>
                    <h4 className={docStyles.methodDescription}>The start of the process</h4>
                    <blockquote className={docStyles.instruction}>
                        <h3 className={docStyles.instructionTitle}>Note:</h3>
                        There is an extension to DistantComponent that implements the end method
                        <CodeBlock code={end}></CodeBlock>
                    </blockquote>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <blockquote className={docStyles.instruction}>
                        <h3 className={docStyles.instructionTitle}>Note:</h3>
                        The Catamaran Library gives a function to execute a DistantComponent
                        <CodeBlock code={execute}></CodeBlock>
                    </blockquote>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will print &quot;Hello, World!&quot; and &quot;Goodbye, World!&quot;</p>
            </div>
        </>
    );
}

function StaticComponent() {
    const constructor = `public protocol StaticComponent {}`
    const render = `public func render(_ window: Window) -> Void`;
    const example = `@StaticComponent
public struct CustomComponent {
    public func render(_ window: Window) {
        Application.render_at(stage: .window, component: TextComponent("Hello, World!"))
    }
}
    
@main
class MyApplication {
    func main() -> Void {
        let window = Window(name: "MyApplication")
        Application.attach_window(window)
        Component.render()
        Application.begin()
    }
}`;
    const macroTest = `@StaticComponent`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>StaticComponent</h1>
                <h3 className={docStyles.subtitle}>Protocol that represents a Component that is the same on every platform</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This Protocol provides a Macro to make the creation of UI easier.
                    <CodeBlock code={macroTest}></CodeBlock>
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A StaticComponent is a protocol that represents a class that is render the same on every platform. All of their methods are platform independent.
                </p>

                <h3 className={docStyles.contentDivider}>Methods to Implement</h3>
                <div className="w-full">
                    <CodeBlock code={render}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render the Component</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a CustomComponent that says &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function MacComponent() {
    const constructor = `public protocol MacComponent: Component {}`
    const render = `public func render(_ window: Window) -> Void`;
    const example = `@MacComponent
public struct CustomComponent {
    public func render(_ window: Window) {
        TextComponent("Hello, World!").render_macOS(window)
    }
}
    
@main
class MyApplication {
    func main() -> Void {
        let window = Window(name: "MyApplication")
        Application.attach_window(window)
        Application.render_at(stage: .window, component: CustomComponent())
        Application.begin()
    }
}`;
    const macroTest = `@MacComponent`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>MacComponent</h1>
                <h3 className={docStyles.subtitle}>Protocol that represents a Component that is only displayed in macOS</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This Protocol provides a Macro to make the creation of UI easier.
                    <CodeBlock code={macroTest}></CodeBlock>
                </blockquote>
                <blockquote className={docStyles.warning}>
                    <h3 className={docStyles.warningTitle}>Warning:</h3>
                    This component should only be used in macOS applications.<br></br>
                    It will not be rendered when compiling or running in Windows or Linux.
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A MacComponent is a protocol that represents a class that is render only on macOS. All of their methods are platform independent.
                </p>

                <h3 className={docStyles.contentDivider}>Methods to Implement</h3>
                <div className="w-full">
                    <CodeBlock code={render}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render the Component</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a CustomComponent that says &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function WindowsComponent() {
    const constructor = `public protocol WindowsComponent: Component {}`
    const render = `public func render(_ window: Window) -> Void`;
    const example = `@WindowsComponent
public struct CustomComponent {
    public func render(_ window: Window) {
        TextComponent("Hello, World!").render_windows(window)
    }
}
    
@main
class MyApplication {
    func main() -> Void {
        let window = Window(name: "MyApplication")
        Application.attach_window(window)
        Application.render_at(stage: .window, component: CustomComponent())
        Application.begin()
    }
}`;
    const macroTest = `@WindowsComponent`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>WindowsComponent</h1>
                <h3 className={docStyles.subtitle}>Protocol that represents a Component that is only displayed in Windows</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This Protocol provides a Macro to make the creation of UI easier.
                    <CodeBlock code={macroTest}></CodeBlock>
                </blockquote>
                <blockquote className={docStyles.warning}>
                    <h3 className={docStyles.warningTitle}>Warning:</h3>
                    This component should only be used in Windows applications.<br></br>
                    It will not be rendered when compiling or running in macOS or Linux.
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A WindowsComponent is a protocol that represents a class that is render only on Windows. All of their methods are platform independent.
                </p>

                <h3 className={docStyles.contentDivider}>Methods to Implement</h3>
                <div className="w-full">
                    <CodeBlock code={render}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render the Component</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a CustomComponent that says &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}

function LinuxComponent() {
    const constructor = `public protocol LinuxComponent: Component {}`
    const render = `public func render(_ window: Window) -> Void`;
    const example = `@LinuxComponent
public struct CustomComponent {
    public func render(_ window: Window) {
        TextComponent("Hello, World!").render_linux(window)
    }
}
    
@main
class MyApplication {
    func main() -> Void {
        let window = Window(name: "MyApplication")
        Application.attach_window(window)
        Application.render_at(stage: .window, component: CustomComponent())
        Application.begin()
    }
}`;
    const macroTest = `@LinuxComponent`
    return (
        <>
            <div className={docStyles.mainDiv}>
            <h1 className={docStyles.title}>LinuxComponent</h1>
                <h3 className={docStyles.subtitle}>Protocol that represents a Component that is only displayed in Linux</h3>
                <div className="w-full">
                    <CodeBlock code={constructor}></CodeBlock>
                </div>
                <blockquote className={docStyles.instruction}>
                    <h3 className={docStyles.instructionTitle}>Note:</h3>
                    This Protocol provides a Macro to make the creation of UI easier.
                    <CodeBlock code={macroTest}></CodeBlock>
                </blockquote>
                <blockquote className={docStyles.warning}>
                    <h3 className={docStyles.warningTitle}>Warning:</h3>
                    This component should only be used in Linux applications.<br></br>
                    It will not be rendered when compiling or running in Windows or macOS.
                </blockquote>
                <hr className={docStyles.divider}></hr> 
                <p className="text-accent-foreground">
                    A LinuxComponent is a protocol that represents a class that is render only on Linux. All of their methods are platform independent.
                </p>

                <h3 className={docStyles.contentDivider}>Methods to Implement</h3>
                <div className="w-full">
                    <CodeBlock code={render}></CodeBlock>
                    <h4 className={docStyles.methodDescriptionInside}>Method to render the Component</h4>
                </div>
                
                <h3 className={docStyles.contentDivider}>Usage Example</h3>
                <div className="w-full">
                    <CodeBlock code={example}></CodeBlock>
                </div>
                <p className="text-accent-foreground mt-4">This will render a CustomComponent that says &quot;Hello, World!&quot;</p>
            </div>
        </>
    );
}