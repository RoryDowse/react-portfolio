import Name from './Name';
import Nav from './Nav';

export default function Header() {
    return (
        <header>
            <Name /> {/* Displays the developer's name */}
            <Nav /> {/* Displays the navigation menu */}
        </header>
    );
}
