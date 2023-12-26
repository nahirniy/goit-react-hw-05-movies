import css from './Section.module.css';

const Section = ({ children }) => {
  return (
    <section>
      <div className={css.container}>{children}</div>
    </section>
  );
};

export default Section;
