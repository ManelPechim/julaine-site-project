interface LogoProps {
    className?: string;
}

const Logo = ({ className }: LogoProps) => {
    return (
        <div className={className}>
            <img src="/logoju-white.png" />
        </div>
    );
}

export default Logo;