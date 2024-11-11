
// Accordion.js

export default function Accordion(props) {
    return (

        <div>
            <button className={`accordion mb-2 text-sm text-gray-900 font-black ${props.isOpen ? 'active' : 'rotate-0'} `} onClick={props.toggleAccordion}>
                {props.title}
            </button>

            {props.isOpen && (
                <div className="p-4 m-4">
                    {props.data}
                    <a href={props.setupUrl}>{props.setupLink}</a>
                </div>
            )}
        </div>
    );
};
