const SectionWrapper = (props) => {
  const { children, header, title } = props;

  return (
    <section className="min-h-screen flex flex-col gap-10">
      <div className="bg-[#cad9ea] flex flex-col gap-2 py-10 justify-center items-center">
        <p className="uppercase font-medium">{header}</p>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>

      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
