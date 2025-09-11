import AnimatedSection from './AnimatedSection';

export default function FancyList({ data }: { data: { title: string; description: string }[] }) {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 row-gap-4">
            {data.map((item, index) => (
                <AnimatedSection
                    key={index}
                    animationType="slideUp"
                    delay={index * 200}
                    duration={600}
                    distance={60}
                >
                    <li className="space-y-8 mb-8">
                        <p className="font-secondary text-5xl text-accent">{index + 1}</p>
                        <hr className="opacity-50"/>
                        <h3 className="font-medium text-3xl">{item.title}</h3>
                        <p className="font-secondary font-medium text-xl">{item.description}</p>
                    </li>
                </AnimatedSection>
            ))}
        </ul>
    );
}