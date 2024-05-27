import { Link } from "react-router-dom";
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';

export default function Nav() {
  return (
    <nav id="nav">
      <div id="icon">
        <PetsRoundedIcon />
      </div>
      <Link to="/" className="links">
        Home
      </Link>
      <Link to="/add-player" className="links">
        Add Puppy Player
      </Link>
    </nav>
  );
}