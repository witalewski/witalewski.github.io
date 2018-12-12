import React, { useState } from 'react';
import styled from '@emotion/styled';
import * as R from 'ramda';
import { Writing } from './Writing';
import { Photos } from './Photos';
import { Code } from './Code';
import { ImageBreak } from './ImageBreak';
import workspace from '../assets/images/workspace.jpg';
import dinosaur from '../assets/images/dinosaur.jpg';
import {
  IMPURE_getRepos,
  processReposResult,
  IMPURE_displayedReposCount,
} from '../api/codeApi';
import { IMPURE_getMediumPosts, processMediumResults } from '../api/writingApi';
import { IMPURE_getPhotos, processPhotosResults } from '../api/photosApi';

const MainStyled = styled.main`
  h2 {
    text-align: center;
  }

  section {
    padding: 48px 0;

    max-width: 960px;
    margin: auto;
  }
`;

export const Main = () => {
  const [initialized, IMPURE_setInitialized] = useState(false);
  const [mediumPosts, IMPURE_setMediumPosts] = useState([]);
  const [repos, IMPURE_setRepos] = useState([]);
  const [instagramPhotos, IMPURE_setInstagramPhotos] = useState([]);

  if (!initialized) {
    IMPURE_getMediumPosts().then(
      R.compose(
        IMPURE_setMediumPosts,
        processMediumResults
      )
    );

    IMPURE_getRepos().then(
      R.compose(
        IMPURE_setRepos,
        processReposResult
      )
    );

    IMPURE_getPhotos().then(
      R.compose(
        IMPURE_setInstagramPhotos,
        processPhotosResults
      )
    );
    IMPURE_setInitialized(true);
  }
  return (
    <MainStyled>
      <Writing mediumPosts={mediumPosts} n={4} m={2} />
      <ImageBreak src={workspace} y={0} />
      <Code repos={repos} n={IMPURE_displayedReposCount()} />
      <ImageBreak src={dinosaur} y={20} />
      <Photos instagramPhotos={instagramPhotos} n={15} />
    </MainStyled>
  );
};
