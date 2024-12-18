import React, { Component } from "react";
import ReactDOM from "react-dom";

interface ContentViewportProps {
    /** The children elements to render inside the iframe. */
    children: React.ReactNode;
}

interface ContentViewportState {
    /** The width of the iframe viewport. */
    width: number;
    /** The height of the iframe viewport. */
    height: number;
}

/**
 * ContentViewport Component
 *
 * Renders an iframe that acts as a viewport for dynamic content, 
 * with support for hover effects and dynamic resizing.
 */
class ContentViewport extends Component<ContentViewportProps, ContentViewportState> {
    iframeRef: React.RefObject<HTMLIFrameElement | null>; // Reference to the iframe
    mountNodeRef: HTMLElement | null; // Reference to the mount node inside the iframe

    constructor(props: ContentViewportProps) {
        super(props);
        this.iframeRef = React.createRef<HTMLIFrameElement>();
        this.mountNodeRef = null;

        this.state = {
            width: 800, // Default width of the iframe
            height: 600, // Default height of the iframe
        };
    }

    /**
     * Sets up the iframe content after the component is mounted.
     */
    componentDidMount() {
        this.setupIframeContent();
    
        const iframe = this.iframeRef.current;
        if (iframe) {
            iframe.addEventListener('load', () => {
                this.setupIframeContent();
                this.forceUpdate(); // Ensure React renders the children
            });
        }
    }

    /**
     * Updates hover effects when the children prop changes.
     */
    componentDidUpdate(prevProps: ContentViewportProps) {
        if (prevProps.children !== this.props.children) {
            this.addHoverEffects();
        }
    }

    /**
     * Initializes the iframe's HTML content and prepares the mount node.
     */
    setupIframeContent() {
        const iframe = this.iframeRef.current;
        if (iframe) {
            const iframeDoc = iframe.contentDocument;
            if (iframeDoc) {
                iframeDoc.open();
                iframeDoc.write(`
                    <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <style>
                                body { margin: 0; font-family: Arial, sans-serif; }
                                .hover-effect:hover {
                                    background-color: lightblue;
                                    cursor: pointer;
                                }
                            </style>
                        </head>
                        <body>
                            <div id="mount"></div>
                        </body>
                    </html>
                `);
                iframeDoc.close();
                this.mountNodeRef = iframeDoc.getElementById("mount");
                this.addHoverEffects();
            }
        }
    }

    /**
     * Adds hover effects to all elements inside the iframe.
     */
    addHoverEffects() {
        const iframeDoc = this.iframeRef.current?.contentDocument;
        if (iframeDoc) {
            const styleTag = iframeDoc.createElement("style");
            styleTag.textContent = `
                .hover-effect:hover {
                    background-color: lightblue;
                    cursor: pointer;
                }
            `;
            iframeDoc.head.appendChild(styleTag);

            // Apply hover effect to all child elements
            iframeDoc.body.querySelectorAll("*").forEach((el) => {
                el.classList.add("hover-effect");
            });
        }
    }

    /**
     * Updates the width of the iframe.
     * @param width - The new width for the iframe.
     */
    setWidth = (width: number) => {
        this.setState({ width });
    };

    /**
     * Updates the height of the iframe.
     * @param height - The new height for the iframe.
     */
    setHeight = (height: number) => {
        this.setState({ height });
    };

    render() {
        const { width, height } = this.state;
        const { children } = this.props;

        return (
            <iframe
                ref={this.iframeRef}
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    border: "1px solid #ddd",
                    margin: "auto",
                    display: "block",
                }}
                title="Content Viewport"
            >
                {this.mountNodeRef &&
                    ReactDOM.createPortal(children, this.mountNodeRef)}
            </iframe>
        );
    }
}

export default ContentViewport;
