import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    getAll()
      .then(setGoods)
      .catch(err => {
        console.error('error getAll', err);
        setError('error getAll');
      });
  };

  const handleLoadFirstFive = () => {
    get5First()
      .then(setGoods)
      .catch(err => {
        console.error('error get5First', err);
        setError('error get5First');
      });
  };

  const handleLoadRed = () => {
    getRed()
      .then(setGoods)
      .catch(err => {
        console.error('error getRed', err);
        setError('error getRed');
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
