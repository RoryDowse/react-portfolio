import Name from './Name.jsx';
import Nav from './Nav.jsx';

export default function Header() {
    return (
        <header>
            <Name /> {/* Displays the developer's name */}
            <Nav /> {/* Displays the navigation menu */}
        </header>
    );
}
