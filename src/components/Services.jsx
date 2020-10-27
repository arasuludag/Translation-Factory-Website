import React from "react";

import Grid from "@material-ui/core/Grid";

import BigCard from "./BigCard";
import BigCard2 from "./BigCard2";

function Services() {

  const timeout = 500;

  return (
    <div className="Services">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >

        <BigCard
          timeout={timeout}
          image="https://www.flaticon.com/svg/static/icons/svg/2223/2223933.svg"
          alt="sub-icon"
          title="Subtitling and Dubbing Translation"
          text="As Translation Factory, we specialise in subtitling and dubbing translation. We provide subtitling services with the latest industry standards. We offer subtitling services with and without time-cue.
            We ensure natural translation while we stay true to the source material.
            Our services include dub script and voice over translations, full assistance and one on one contact between the translator and the dubbing studio to ensure the best result possible.
            We also provide quality control services over subtitling and dubbing translations and audio quality control after the dubbing studio delivers the end result, in order to make sure the product is top quality.
            We offer these services for documentaries, movies, TV series, trailers, teasers, marketing assets and corporate and individual videos including YouTube videos."
        />

      <BigCard2
          timeout={timeout}
          image="https://www.flaticon.com/svg/static/icons/svg/1973/1973923.svg"
          alt="technical-icon"
          title="Translation (Technical & non-technical)"
          text="The translation services we offer include any text document translation as well as graphs, diagrams and technical drawings.
            We provide translation services for non-technical content such as websites, blogs, posters, pamphlets, letters and memos, as well as technical documents in the areas of engineering, finance, medicine and law."
        />

        <BigCard
          timeout={timeout}
          image="https://www.flaticon.com/svg/static/icons/svg/2751/2751742.svg"
          alt="interpret-icon"
          title="Interpreting"
          text="At Translation Factory, we offer Turkish-English and English-Turkish interpreting services for our clients’ various needs.
            Our interpreting service rates are affordable and we offer this service in London and its surrounding area.
            We offer the following interpretation services: consecutive interpreting, telephone interpreting and liaison interpreting.
            We value confidentiality, accurate and objective interpreting. We guarantee a professional approach, cost effective rates and true interpreting."
        />

      <BigCard2
          timeout={timeout}
          image="https://www.flaticon.com/svg/static/icons/svg/2620/2620506.svg"
          alt="proofreading-icon"
          title="Proofreading"
          text="Proofreading and quality assurance are important elements of the translation process. In order to make sure the translated text is produced without any mistakes, syntactical and grammatical errors.
            At Translation Factory, we strive to provide top quality translation service and proofreading is an essential part of it.
            Our proofreading service is not only limited to translated texts. We offer proofreading and editing services for any Turkish texts."
        />

        <BigCard
          timeout={timeout}
          image="https://www.flaticon.com/svg/static/icons/svg/2680/2680841.svg"
          alt="transcript-icon"
          title="Transcription"
          text="At Translation Factory, we offer fast, efficient and accurate audio to text services in both English and Turkish.
            We also subsequently translate the transcript should the customer require it."
        />

      <BigCard2
          timeout={timeout}
          image="https://www.flaticon.com/svg/static/icons/svg/1527/1527531.svg"
          alt="localisation-icon"
          title="Localisation"
          text="Some projects such as software, video games, websites and other multimedia content need not only translation, but also cultural adaptation and localisation. At Translation Factory we offer localisation services. We offer
            full
            localisation, recognising local sensitivities, avoiding conflict with local culture and customs, and make sure you enter the local market by merging into its needs."
        />
      </Grid>
    </div>
  );
}

export default Services;
