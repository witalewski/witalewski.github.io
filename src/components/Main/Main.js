import React from 'react';
import workspace from '../../assets/images/workspace.jpg';
import dinosaur from '../../assets/images/dinosaur.jpg';
import { MainStyled } from './MainStyled';
import { WritingConnected } from '../Writing/Writing';
import { PhotosConnected } from '../Photos/Photos';
import { CodeConnected } from '../Code/Code';
import { ImageBreak } from '../ImageBreak/ImageBreak';

export const Main = () => (
  <MainStyled>
    <WritingConnected />
    <ImageBreak src={workspace} y={0} />
    <CodeConnected />
    <ImageBreak src={dinosaur} y={20} />
    <PhotosConnected />
  </MainStyled>
);
