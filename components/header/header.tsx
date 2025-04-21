

export function Header() {
    return (
        <header className="w-full">
            <div className="w-full flex space-between items-center justify-between">
                <a href=""><h1>Bobby Palazzi</h1></a>
                <nav className="flex space-between">
                    <a href="">About</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>
                </nav>
            </div>
        </header>

    );
}