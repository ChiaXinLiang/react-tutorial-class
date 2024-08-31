import CategoryItem from '../category-item/category-item.component';
import './directory.style.scss';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(category => (
        <CategoryItem key={category.id} id={category.id} title={category.title} imageUrl={category.imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
