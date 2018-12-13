import React, { useState } from 'react';
import { connect } from 'react-redux';
import workspace from '../../assets/images/workspace.jpg';
import dinosaur from '../../assets/images/dinosaur.jpg';
import { MainStyled } from './MainStyled';
import { Writing } from '../Writing/Writing';
import { Photos } from '../Photos/Photos';
import { Code } from '../Code/Code';
import { ImageBreak } from '../ImageBreak/ImageBreak';
import { getCode, getWriting, getPhotos } from '../../api';
import * as actions from '../../actions';

export const Main = ({ receiveCode, code, receiveWriting, writing, receivePhotos, photos }) => {
  const [initialized, IMPURE_setInitialized] = useState(false);

  if (!initialized) {
    getWriting().then(receiveWriting);
    getCode().then(receiveCode);
    getPhotos().then(receivePhotos);
    IMPURE_setInitialized(true);
  }
  return (
    <MainStyled>
      <Writing posts={writing} n={4} m={2} />
      <ImageBreak src={workspace} y={0} />
      <Code repos={code.repos} n={code.reposCount} />
      <ImageBreak src={dinosaur} y={20} />
      <Photos photos={photos} n={15} />
    </MainStyled>
  );
};

const mapStateToProps = state => ({
  code: state.code,
  writing: state.writing,
  photos: state.photos,
});

export default connect(
  mapStateToProps,
  actions
)(Main);
