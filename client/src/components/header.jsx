import Image from 'next/image'

const Header = () => {
    return (
        <header className='py-5 px-12 flex items-center gap-2 bg-white'>
            <Image src={'/img/Frame1.png'} height={25} width={25} />
            <p className='ml-2 text-2xl font-bold'>TODO</p>
        </header>
    )
}

export default Header