import React, { ReactNode, CSSProperties } from 'react';

/**
 * Represents a single element in the content tree.
 */
type Element = {
    /** The type of the element (e.g., 'Section', 'Row', etc.). */
    type: string;
    /** Unique identifier for the element. */
    id: string;
    /** Optional textual content for the element. */
    content?: string;
    /** Array of child element IDs. */
    children?: string[];
    /** Optional CSS class name. */
    className?: string;
    /** Optional inline CSS styles. */
    style?: CSSProperties;
    /** Additional arbitrary properties. */
    [key: string]: any;
};

/**
 * Props passed to helper components.
 */
type ElementProps = {
    /** Unique identifier for the element. */
    id: string;
    /** Optional textual content for the element. */
    content?: string;
    /** Children elements rendered inside the component. */
    children?: ReactNode[];
    /** Optional CSS class name. */
    className?: string;
    /** Optional inline CSS styles. */
    style?: CSSProperties;
    /** Additional arbitrary properties. */
    [key: string]: any;
};

/** Section component: renders a container with a section element. */
const SectionComponent: React.FC<ElementProps> = ({ children, className, style }) => (
    <section className={className} style={style}>
        <div className="container">{children}</div>
    </section>
);

/** Row component: renders a Bootstrap-style row with children. */
const RowComponent: React.FC<ElementProps> = ({ children, className, style }) => (
    <div className={`row ${className || ''}`} style={style}>
        {children}
    </div>
);

/** Card component: renders a card with children inside a card body. */
const CardComponent: React.FC<ElementProps> = ({ children }) => (
    <div className="card">
        <div className="card-body">{children}</div>
    </div>
);

/** Text component: renders a paragraph with optional content. */
const TextComponent: React.FC<ElementProps> = ({ content }) => (
    <p>{content || 'Placeholder text'}</p>
);

/** Embed component: renders HTML content dangerously using innerHTML. */
const EmbedComponent: React.FC<ElementProps> = ({ content }) => (
    <div dangerouslySetInnerHTML={{ __html: content || '<p>Placeholder embed</p>' }} />
);

/** Image component: renders an image with optional source and alt text. */
const ImageComponent: React.FC<ElementProps & { src?: string }> = ({ src }) => (
    <figure className="rounded">
        <img src={src || ''} alt="" />
    </figure>
);

/**
 * A mapping between element types and their corresponding React components.
 */
const elementMap: Record<string, React.FC<ElementProps>> = {
    Section: SectionComponent,
    Row: RowComponent,
    Card: CardComponent,
    Text: TextComponent,
    Embed: EmbedComponent,
    Image: ImageComponent,
};

/**
 * Recursively renders an element and its children.
 *
 * @param element - The current element to render.
 * @param elementsById - A record mapping element IDs to element definitions.
 * @returns A React node representing the rendered element.
 */
function renderElement(element: Element, elementsById: Record<string, Element>): ReactNode {
    const Component = elementMap[element.type];

    if (!Component) return null; // Return null if no matching component is found.

    const children = element.children?.map((childId) =>
        renderElement(elementsById[childId], elementsById)
    );

    return <Component key={element.id} {...element} children={children ?? []} />;
}

export { Element, renderElement };
