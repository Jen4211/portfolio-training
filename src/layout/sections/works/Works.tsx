import React, {useState} from 'react';
import {S} from "./Works_Styles";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import socialImage from "../../../assets/images/socialNetworks.jpg"
import todolistImage from "../../../assets/images/todolist.jpg"
import {Container} from "../../../components/Container";

export type TabStatusType = "all" | "landing" | "react" | "spa";

export type TabItemType = {
    title: string
    status: TabStatusType
}

const tabItems: Array<TabItemType> = [
    {title: "All", status: "all"},
    {title: "landing page", status: "landing"},
    {title: "React", status: "react"},
    {title: "SPA", status: "spa"},
]

const worksData = [
    {
        src: socialImage,
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur consequuntur culpa earum eius error eveniet, excepturi explicabo fuga fugiat hic incidunt laborum nisi odit optio porro ratione reiciendis sit.",
        type: "spa"
    },
    {
        src: todolistImage,
        title: "todolist",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur consequuntur culpa earum eius error eveniet, excepturi explicabo fuga fugiat hic incidunt laborum nisi odit optio porro ratione reiciendis sit.",
        type: "spa"
    }
]
export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabStatusType>("all");

    let filterWorks = worksData;

    if (currentFilterStatus === "landing") {
        filterWorks = worksData.filter(work => work.type === "landing");
    }
    if (currentFilterStatus === "spa") {
        filterWorks = worksData.filter(work => work.type === "spa");
    }
    if (currentFilterStatus === "react") {
        filterWorks = worksData.filter(work => work.type === "react");
    }

    const changeFilterStatus = (value:TabStatusType) => {
        setCurrentFilterStatus(value);
    }
    return (
        <S.Works>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabItems={tabItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexContainer justify={"space-between"} wrap={"wrap"} align={"flex-start"}>
                    {filterWorks.map((w, index) => {
                        return <Work src={w.src}
                                     title={w.title}
                                     text={w.text}
                                     key={index}/>
                    })}
                </FlexContainer>
            </Container>
        </S.Works>
    );
};

