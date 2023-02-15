import React from "react";
import "./styles.scss";
import JumbotronComp from "./JumbotronComp/JumbotronComp";
import Controlledtab from "./ControlledTab/controlledtab";
import { Contentdetailscontext } from "../../context/contentdetails.context";

export const SeriesDetails = () => {
  return (
    <Contentdetailscontext.Consumer>
      {({
        movieDetails,
        episodes,
        crew,
        director,
        production,
        writing,
        image_base_url,
        movie_id,
        title,
        description,
        gallery,
        certificate,
        genres,
        languages,
        isSignedIn,
        noContentFound,
        duration,
        yearOfRelease,
        trailerURL,
        contentId,
        likes,
        isFreeContent,
        isSignIn,
        permaLink,
      }) => (
        <>
          {!noContentFound ? (
            <>
              <JumbotronComp
                movieDetails={movieDetails}
                director={director}
                episodes={episodes}
                image_base_url={image_base_url}
                movie_id={movie_id}
                title={title}
                permaLink={permaLink}
                certificate={certificate}
                description={description}
                gallery={gallery}
                genres={genres}
                languages={languages}
                isSignedIn={isSignedIn}
                duration={duration}
                yearOfRelease={yearOfRelease}
                trailerURL={trailerURL}
                contentId={contentId}
                likes={likes}
                isFreeContent={isFreeContent}
                isSignIn={isSignIn}
              />
            </>
          ) : (
            <h3
              style={{
                color: "#ffffff",
                textAlign: "center",
                marginTop: "1rem",
                fontSize: "24px",
              }}
            >
              Sorry, we did not find any content
            </h3>
          )}
        </>
      )}
    </Contentdetailscontext.Consumer>
  );
};
