interface IProps {
  amount: number;
  title: string;
  list: [];
}

const Card: React.FC<IProps> = ({ amount, title, list }) => {
  return (
    <article className="w-full">
      <header className="flex justify-between w-full ">
        <span className="text-2xl">{title}</span>
        <span className="text-center">{amount}</span>
      </header>
      <div>
        <ul>
          <li></li>
        </ul>
        <footer>Ver todos</footer>
      </div>
    </article>
  );
};

export default Card;
