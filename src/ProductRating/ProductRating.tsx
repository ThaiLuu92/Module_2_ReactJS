import React, { Component } from 'react'
import "./ProductRating.css";

interface ProductRatingProps {
    rating: number;
}

export default class ProductRating extends React.Component<ProductRatingProps> {
  render() {
    const { rating } = this.props;
    return (
      <div id="rating">
        Rating:
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index}>&#9733;</span>
        ))}
      </div>
    );
  }
}
