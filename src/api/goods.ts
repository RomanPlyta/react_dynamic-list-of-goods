import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`error: ${response.status} ${response.statusText}`);
    }

    const data: Good[] = await response.json();

    return data;
  } catch (error) {
    console.error('error getAll', error);
    throw error;
  }
}

export const get5First = async (): Promise<Good[]> => {
  try {
    const goods = await getAll();

    return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  } catch (err) {
    console.error('error get5First', err);

    return [];
  }
};

export const getRed = async (): Promise<Good[]> => {
  try {
    const goods = await getAll();

    return goods.filter(good => good.color === 'red');
  } catch (err) {
    console.error('error getRed', err);

    return [];
  }
};
