import { Card, type CardProps } from '../card';
import { useMediaQuery } from 'usehooks-ts';

interface CardListProps {
  data: CardProps[];
}

export const CardList = (props: CardListProps) => {
  const smallWindow = useMediaQuery('(max-width: 768px)');
  const list = smallWindow ? [props.data[0]] : props.data;
  return (
    <div>
      {list.map((item) => {
        return <Card text={item.text} logo={item.logo} />;
      })}
    </div>
  );
};
