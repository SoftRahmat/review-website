import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Books!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Inside the Machine: An Illustrated Introduction to Microprocessors and Computer Architecture'
              label='Microprocessor'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Structure and Interpretation of Computer Programs'
              label='Programming systems and procedures'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='The Hidden Language of Computer Hardware and Software'
              label='Programming book'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='A Practical Handbook of Software Construction'
              label='Coding, debugging, design, testing, and more.'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='The Fundamentals of Software'
              label='Beginner programming book'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
