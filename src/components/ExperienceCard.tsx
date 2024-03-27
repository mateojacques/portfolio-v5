import { ReactNode } from "react";

const ExperienceCard = ({
  sinceDate,
  untilDate,
  position,
  company,
  companyUrl,
  children,
}: {
  sinceDate: string;
  untilDate: string;
  position: string;
  company: string;
  companyUrl: string;
  children: ReactNode;
}) => {
  return (
    <article className="experience-card">
      <div className="date">
        <p className="f-s-12 text-uppercase f-w-500 bg-muted">
          {sinceDate} - {untilDate}
        </p>
      </div>
      <div className="content">
        <h3 className="f-s-16 m-b-5">{position}</h3>
        <a
          href={companyUrl}
          target="_blank"
          rel="noreferrer"
          className="f-s-14 m-b-10 text-accent"
        >
          {company}
        </a>
        {children}
      </div>
    </article>
  );
};

export default ExperienceCard;
