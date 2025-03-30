

import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; 

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string; 
    title: string; 
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  

  React.useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(`https://67a7dc25203008941f68ad45.mockapi.io/react-pizza/${id}`);
        setPizza(data);
      } catch (error) {

        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    };

    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <>Загрузка пиццы...</>;
  }

  return (
    <div className="container" style={{ textAlign: 'center', padding: '20px' }}>
      <img src={pizza.imageUrl} alt={pizza.title} style={{ maxWidth: '400px', borderRadius: '20px' }} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};


export default FullPizza;
