import { notFound } from "next/navigation";

export const generateMetadata = ({
    params,
}: {
    params: {
        name: string;
    };
}) => {
    const { name } = params;
    const validProjects = ["project1", "project2", "project3"];
    if (!validProjects.includes(name)) {
        notFound();
    }
    return {
        title: `${name} - Project Details`,
        description: `Details for project ${name}`,
    };
};
    
// Work page
export default function ProjectDetails({
    params,
}: {
    params: {
        name: string;
    };
}) {
    const { name } = params;
    return (
        <div>
            {name}
        </div>
    );
}
