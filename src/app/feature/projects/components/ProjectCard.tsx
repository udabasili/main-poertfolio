import { CldImage } from 'next-cloudinary';
import { CardContainer } from './index.styled';
import { Header3 } from '@/components/Elements';
import Link from 'next/link';



interface ProjectCardProps {
    name: string;
    imageUrl: string;
    index: number;
    summary: string;
    link: string;
    open: () => void;
    github?: string;
    videoDemo?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { name, imageUrl, index, summary, github, videoDemo } = props;

    const url = encodeURIComponent(name.toLowerCase());

    return (
        <CardContainer className="w-full h-max relative py-10">
            <div className="preview__background">
                <div className="w-[22rem] h-[22rem] tabPort:w-full tabPort:h-full relative">
                    <CldImage
                        src={imageUrl}
                        alt={`${name} Image`}
                        width={500}
                        height={500}
                        format="auto"
                        quality={80}
                        className="w-[15rem] h-[15rem] object-cover"
                        sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
                    />
                </div>
            </div>
            <div className="preview__content">
                <span className="index">{index + 1}</span>
                <Header3 className="self-center">{name}</Header3>
                <p className="text-white text-lg lg:text-xl">{summary}</p>
                <div className="flex space-x-4 col-start-2 text-sm lg:text-md links">
                    {/* Project Detail Link */}
                    <Link href={`/projects/${url}`} title="View project details" className="detail font-title font-normal text-white text-center hover:underline">
                        View Details
                    </Link>

                    {videoDemo && (
                        <a
                            href={videoDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Watch video demo"
                            className="detail font-title font-normal text-white text-center hover:underline bg-primary"
                        >
                            Video Demo
                        </a>
                    )}

                </div>
            </div>
        </CardContainer>
    );
};
