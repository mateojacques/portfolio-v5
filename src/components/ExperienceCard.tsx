const ExperienceCard = ({
  sinceDate,
  untilDate,
  position,
  company,
  children,
}: any) => {
  return (
    <article className="experience-card">
      <div className="date">
        <p className="f-s-12 text-uppercase f-w-500 text-muted">
          {sinceDate} - {untilDate}
        </p>
      </div>
      <div className="content">
        <h3 className="f-s-16 m-b-5">{position}</h3>
        <p className="f-s-16 m-b-10 text-muted">{company}</p>
        {children}
      </div>
    </article>
  );
};

export default ExperienceCard;
