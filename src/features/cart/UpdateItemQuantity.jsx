import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from './cartSlice';

function UpdateItemQuantity({ pizzaId }) {
  const itemQuntity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div>
      <Button type="round">-</Button>
      <span>{itemQuntity}</span>
      <Button type="round">+</Button>
    </div>
  );
}

export default UpdateItemQuantity;
