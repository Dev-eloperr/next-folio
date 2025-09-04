import { notFound } from "next/navigation";
// Work page
export default function ProjectDetails({
    params,
}: {
    params: {
        name: string;
    };
}) {
    const { name } = params;
    const validProjects = ["project1", "project2", "project3"];
    if (!validProjects.includes(name)) {
        notFound();
    }
    return (
        <div>
            {name}
        </div>
    );
}
