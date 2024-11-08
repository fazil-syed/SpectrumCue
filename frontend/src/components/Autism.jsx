import React from "react";
import { Link } from "react-router-dom";

const Autism = () => {
  return (
    <div>
      <header>
        <div className="hcontainer">
          <h1>What Is Autism?</h1>
          <h2>There is no one type of autism, but many</h2>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <img src="assets/icon.png" alt="" width="25%" />
          <p className="findout-container">
            Autism, or autism spectrum disorder (ASD), refers to a broad range
            of conditions characterized by challenges with social skills,
            repetitive behaviors, speech, and nonverbal communication. According
            to the Centers for Disease Control,{" "}
            <Link to="/statistics">
              autism affects an estimated 1 in 44 children
            </Link>{" "}
            in the United States today. We know that there is not one autism but
            many subtypes, most influenced by a combination of genetic and
            environmental factors. Because autism is a spectrum disorder, each
            person with autism has a distinct set of strengths and challenges.
            The ways in which people with autism learn, think, and problem-solve
            can range from highly skilled to severely challenged. Some people
            with ASD may require significant support in their daily lives, while
            others may need less support and, in some cases, live entirely
            independently. Several factors may influence the development of
            autism, and it is often accompanied by sensory sensitivities and
            medical issues such as gastrointestinal (GI) disorders, seizures, or
            sleep disorders, as well as mental health challenges such as
            anxiety, depression, and attention issues.
            <Link to="/signs">Signs of autism</Link> usually appear by age 2 or
            3. Some associated developmental delays can appear even earlier, and
            often, it can be diagnosed as early as 18 months. Research shows
            that early intervention leads to positive outcomes later in life for
            people with autism.
          </p>
        </div>
      </section>

      <section className="quote">
        <cite>
          * In 2013, the American Psychiatric Association merged four distinct
          autism diagnoses into one umbrella diagnosis of autism spectrum
          disorder (ASD). They included autistic disorder, childhood
          disintegrative disorder, pervasive developmental disorder-not
          otherwise specified (PDD-NOS), and Asperger syndrome.
        </cite>
      </section>
    </div>
  );
};

export default Autism;
