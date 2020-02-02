import './index.css';

const Card = ({ title, image }) => {
  return (
    <div className='card__container'>
      <p className='card__title'>{title}</p>
      <img src={image} />
    </div>
  );
};

export default Card;
