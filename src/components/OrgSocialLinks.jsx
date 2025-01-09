import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

const OrgSocialLinks = () => {
    return (
        <div className='flex mt-2'>
            <div className='pr-2'>
                <Link href="https://www.linkedin.com/company/better-together-wellness">
                    <FaLinkedin size={30} className='hover:text-blue-600'/>
                </Link>
            </div>
            <div className='px-2'>

                <Link href="https://www.instagram.com/thebettertogether.in">
                    <FaInstagram size={30} className='hover:text-pink-500'/>
                </Link>
            </div>
            {/* <div className='px-2'>
                <Link href="https://github.com/ronxldwilson/BetterTogether">
                    <FaGithub size={30} className='hover:text-grey-100'/>
                </Link>
            </div> */}
            <div className='px-2'>
                <Link
                    href='https://chat.whatsapp.com/EucNi5Yunol5g5fycsIvlu'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='WhatsApp'
                >
                    <FaWhatsapp size={30} className='hover:text-green-500' />
                </Link>
            </div>
        </div>
    )
}

export default OrgSocialLinks;