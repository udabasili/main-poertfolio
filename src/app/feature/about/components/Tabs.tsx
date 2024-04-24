import React from 'react';


type TabProps = 'experience' | 'education';

type TabComponentProps = {
    setActiveTab: (tab: TabProps) => void;
    activeTab: TabProps;
}

export const TabComponent = ({ setActiveTab, activeTab }: TabComponentProps) => {

    const handleTabClick = (tab: TabProps) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex justify-center col-[full-start/full-end] my-5">
            <div className="grid grid-cols-2 gap-4">
                <button
                    className={`py-2 px-40 font-title border ${activeTab === 'education' ? 'bg-primary text-black' : 'bg-gray-200'
                        }`}
                    onClick={() => handleTabClick('education')}
                >
                    Education
                </button>
                <button
                    className={`py-2 px-4 font-title border ${activeTab === 'experience' ? 'bg-primary text-black' : 'bg-gray-200'
                        }`}
                    onClick={() => handleTabClick('experience')}
                >
                    Experience
                </button>
            </div>
        </div>
    );
};

export default TabComponent;
