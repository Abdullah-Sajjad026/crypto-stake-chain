const TitleBox = ({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-section">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-5 max-w-[70%] mx-auto leading-normal">
          {description}
        </p>
      )}
    </div>
  );
};

export default TitleBox;
