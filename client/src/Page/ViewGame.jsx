import { useParams } from 'react-router-dom';

const ViewSingleGame = () => {
  const { game_id } = useParams();

  return (
    <div>
      <h1>Game Details</h1>
      <p>Game ID: {game_id}</p>
      {/* Add more details and fetch data based on game_id */}
    </div>
  );
};

export default ViewSingleGame;
