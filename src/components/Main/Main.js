import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import workspace from '../../assets/images/workspace.jpg';
import dinosaur from '../../assets/images/dinosaur.jpg';
import { MainStyled } from './MainStyled';
import { Writing } from '../Writing/Writing';
import { Photos } from '../Photos/Photos';
import { Code } from '../Code/Code';
import { ImageBreak } from '../ImageBreak/ImageBreak';

export const Main = ({
  posts,
  repos,
  reposCount,
  photos,
  fetchWriting,
  fetchCode,
  fetchPhotos,
}) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      fetchWriting();
      fetchCode();
      fetchPhotos();
      setInitialized(true);
    }
  });

  return (
    <MainStyled>
      <Writing posts={posts} />
      <ImageBreak src={workspace} />
      <Code repos={repos} reposCount={reposCount} />
      <ImageBreak src={dinosaur} maxOffset={25} />
      <Photos photos={photos} />
    </MainStyled>
  );
};

const mapStateToProps = state => ({
  posts: state.writing,
  repos: state.code.repos,
  reposCount: state.code.reposCount,
  photos: state.photos,
});

const MainConnected = connect(
  mapStateToProps,
  actions
)(Main);
export default MainConnected;
