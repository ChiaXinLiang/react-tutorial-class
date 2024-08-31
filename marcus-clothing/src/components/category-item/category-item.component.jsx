import './category-item.style.scss';

const CategoryItem = ({ id, title, imageUrl }) => {
  return (
    <div className="category-container" key={id}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
