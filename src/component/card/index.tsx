import './index.css'
export interface CardProps {
  text: string;
  logo: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="card">
        <text className="card-text">{props.text}</text>
        <img src={props.logo} alt="logo" className="card-logo" />
    </div>
  );
};
