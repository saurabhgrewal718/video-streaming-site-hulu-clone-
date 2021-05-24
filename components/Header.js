import Image from 'next/image'; 
import HeaderItem from '../components/HeaderItem'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

function Header() {
    return (
        <header>
            <HeaderItem title='HOME' Icon={HomeIcon}/>
            <HeaderItem title='Home' Icon={BadgeCheckIcon}/>
            <HeaderItem title='Home' Icon={LightningBoltIcon}/>
            <HeaderItem title='Home' Icon={SearchIcon}/>
            <HeaderItem title='Home' Icon={UserIcon}/>
            <HeaderItem title='Home' Icon={CollectionIcon}/>
            <Image 
                className = "object-contain"
                width={200}
                src='https://links.papareact.com/ua6' height={100}/>
        </header>
    )
}

export default Header
