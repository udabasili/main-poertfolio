import { CiMobile4 } from 'react-icons/ci';
import { MdOutlineDesignServices } from 'react-icons/md';
import { PiDesktopDuotone } from 'react-icons/pi';
import { TbBrandGoogleBigQuery } from 'react-icons/tb';
import { ServiceProps } from './types';

export const servicesData: Array<ServiceProps> = [
    {
        title: 'Web Development',
        Icon: PiDesktopDuotone,
        image: '/home/web-dev.jpg',
        content: 'HTML/CSS,Javascript,React,Wordpress'
    },
    {
        title: 'Mobile Development',
        Icon: CiMobile4,
        image: '/home/mobile.jpg',
        content: 'React Native, Flutter, Android, iOS'

    },
    {
        title: 'UI/UX Design',
        Icon: MdOutlineDesignServices,
        image: '/home/web-design.jpg',
        content: 'Wireframing,Landing Pages,Prototyping,User Flow'

    },
    {
        title: 'SEO Optimization',
        Icon: TbBrandGoogleBigQuery,
        image: '/home/seo.jpg',
        content: 'Google Analytics,Google Search Console,Keyword Research'

    }
]