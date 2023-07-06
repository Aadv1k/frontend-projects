import NavButton from "./NavButton";

import { ReactComponent as HomeIcon } from  "../assets/icon-nav-home.svg";
import { ReactComponent as FilmIcon } from  "../assets/icon-nav-movies.svg";
import { ReactComponent as TvIcon } from  "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from  "../assets/icon-nav-bookmark.svg";

import { ReactComponent as LogoIcon } from  "../assets/logo.svg";

import AvatarImage from  "../assets/image-avatar.png";

interface NavbarProps {}


export default function (props: NavbarProps) {
    return <nav className="
                           bg-indigo-1 p-4 flex justify-between items-center
                           md:fixed md:h-[95vh] md:flex-col md:px-4 md:py-8 md:top-1/2 md:-translate-y-1/2 md:left-4 md:rounded-xl
        ">

        <div>
            <LogoIcon />
        </div>

        <div className="flex items-center gap-6
                        md:flex-col md:mb-auto md:mt-12 md:gap-8">
            <NavButton icon={<HomeIcon />} />
            <NavButton icon={<FilmIcon />} />
            <NavButton icon={<TvIcon />} />
            <NavButton icon={<BookmarkIcon />} />
        </div>

        <div className="w-10 h-10 rounded-full border-2 border-white">
            <img alt="some guy" src={AvatarImage}/>
        </div>
    </nav>
}
