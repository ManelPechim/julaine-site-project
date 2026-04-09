interface InstagramLinkProps {
    className?: string;
    children: React.ReactNode;
}

const InstagramLink = ({className, children}: InstagramLinkProps) => {
    return (
        <a
            href="https://www.instagram.com/julainegui/"
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {children}
        </a>
    );
}

export default InstagramLink;