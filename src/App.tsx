import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Draft } from '@reduxjs/toolkit';
import Home from 'components/Home';
import paths from 'paths';
import { Switch, Route, Redirect } from 'react-router-dom';
import Categories from 'components/Categories';
import Tags from 'components/Tags';
import Post from 'components/Post';
import Form from 'components/Form';
import MizHeader from 'components/common/Header/MizHeader';

function App() {
  return (
    <>
      <MizHeader />
      <Switch>
        <Route path={paths.home} component={Home} exact />
        <Route path={paths.categories} component={Categories} />
        <Route path={paths.categoryPosts} component={Categories} />
        <Route path={paths.tags} component={Tags} />
        <Route path={paths.tagPosts} component={Tags} />
        <Route path={paths.post} component={Post} />
        <Route path={paths.form} component={Form} />
        <Redirect to={paths.home} />
      </Switch>
    </>
  );
}

export default App;
