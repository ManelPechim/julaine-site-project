interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className}>
      <img src="/logoju-white.png" alt="Logo Julaine Guimaraes" />
    </div>
  );
}

export default Logo;