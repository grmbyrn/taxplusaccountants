
interface PageHeaderProps {
  title: string;
  backgroundImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
