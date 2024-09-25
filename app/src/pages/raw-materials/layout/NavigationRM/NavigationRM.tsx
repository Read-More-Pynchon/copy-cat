import { useRawMaterialsContext } from '../../contexts/RawMaterialsContext';

interface NavigationPillProps {
    title: string,
    color: string,
    index: string;
}

function NavigationPill(props: NavigationPillProps) {

    switch (props.color) {
        case 'orange':
            return (
                <>
                    <div
                        className="p-3 mb-2 w-full min-h-36 h-fit min-w-fit rounded-3xl border-0 bg-rm-orange hover:bg-white hover:text-black"  >
                        <h2 className="font-rm-noto font-light text-white hover:text-black">{props.index}</h2>
                        <h3 className="font-rm-noto font-medium text-white hover:text-black">{props.title}</h3>
                    </div>
                </>
            );
        case 'blue':
            return (
                <>
                    <div
                        className="p-3 mb-2 w-full min-h-36 h-fit min-w-fit rounded-3xl border-0 bg-rm-blue hover:bg-white hover:text-black"  >
                        <h2 className="font-rm-noto font-light text-white hover:text-black">{props.index}</h2>
                        <h3 className="font-rm-noto font-medium text-white hover:text-black">{props.title}</h3>
                    </div>
                </>
            );
        case 'purple':
            return (
                <>
                    <div
                        className="p-3 mb-2 w-full min-h-36 h-fit min-w-fit rounded-3xl border-0 bg-rm-purple hover:bg-white hover:text-black"  >
                        <h2 className="font-rm-noto font-light text-white hover:text-black">{props.index}</h2>
                        <h3 className="font-rm-noto font-medium text-white hover:text-black">{props.title}</h3>
                    </div>
                </>
            );
        case 'green':
            return (
                <>
                    <div
                        className="p-3 mb-2 w-full min-h-36 h-fit min-w-fit rounded-3xl border-0 bg-rm-green hover:bg-white "  >
                        <h2 className="font-rm-noto font-light text-black  ">{props.index}</h2>
                        <h3 className="font-rm-noto font-medium text-black ">{props.title}</h3>
                    </div>
                </>
            );
        case 'yellow':
            return (
                <>
                    <div
                        className="p-3 mb-2 w-full min-h-36 h-fit min-w-fit rounded-3xl border-0 bg-rm-yellow hover:bg-white"  >
                        <h2 className="font-rm-noto font-light text-black ">{props.index}</h2>
                        <h3 className="font-rm-noto font-medium text-black ">{props.title}</h3>
                    </div>
                </>
            );
        case 'black':
            return (
                <>
                    <div
                        className="p-3 mb-2 w-full min-h-36 h-fit min-w-fit rounded-3xl border-0 bg-black hover:bg-white"  >
                        <h2 className="font-rm-noto font-light  text-white hover:text-black">{props.index}</h2>
                        <h3 className="font-rm-noto font-medium text-white hover:text-black">{props.title}</h3>
                    </div>
                </>
            );
        case 'white':
            return (
                <>
                    <div
                        className="p-3 w-full mb-2 min-h-36 h-fit min-w-fit bg-white rounded-3xl hover:bg-white"  >
                        <h2 className="font-rm-noto font-light text-black">{props.index}</h2>
                        <h3 className="font-rm-noto font-medium text-black">{props.title}</h3>
                    </div>
                </>
            );
        case 'red':
            return (
                <>
                    <div
                        className="p-3 w-full mb-2 min-h-36 h-fit min-w-fit rounded-3xl border-0 bg-rm-red hover:bg-white hover:text-black"  >
                        <h2 className="font-rm-noto font-light  text-white hover:text-black">{props.index}</h2>
                        <h3 className="font-rm-noto font-medium text-white hover:text-black">{props.title}</h3>
                    </div>
                </>
            );
        default:
            return (
                <>
                    <div
                        className="pt-2 w-full mb-2 min-h-36 h-fit min-w-fit border border-black rounded hover:bg-white hover:text-black"  >
                        <h2 className="font-rm-noto font-light text-black">{props.index}</h2>
                        <h3 className="font-rm-noto font-medium text-black">{props.title}</h3>
                    </div>
                </>
            );
    }
}

export default function NavigationRM() {

    const sections = useRawMaterialsContext().sections;

    const navigationPills = sections.map((section, index) => {
        return (
            <NavigationPill
                title={section.title}
                color={section.backgroundColor}
                index={section.sectionIndex}
            />
        );
    })



    return (
        <div className="bg-rm-linen w-full h-full min-h-full box p-6">
            {navigationPills}
        </div>

    )
}