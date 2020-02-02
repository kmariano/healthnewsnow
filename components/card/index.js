import './index.css';

const Card = ({ title, imageUrl, selected, onClick }) => {
  return (
    <div className='card__container' onClick={() => onClick(title, selected)}>
      <p className='card__title'>{title}</p>
      <div className='card__image-container'>
        <img src={imageUrl} />
        {selected && (
          <div className='card__selected'>
            <div className='card__selected-check-container'>
              <img src='/check.png' className='card__selected-check' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
