import React from 'react';
import {S} from "../Works_Styles";
import {Link} from "../../../../components/Link";
import {TabItemType, TabStatusType} from "../Works";


type TabMenuPropsType = {
    tabItems: Array<TabItemType>
    changeFilterStatus: (value:TabStatusType) => void
    currentFilterStatus: TabStatusType
}
export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabItems.map(
                    (item, index) => {
                        return  <S.ListItem key={index}>
                                    <Link active={props.currentFilterStatus === item.status}
                                          as={"button"}
                                          onClick={()=>{props.changeFilterStatus(item.status)}}>
                                        {item.title}
                                    </Link>
                                </S.ListItem>
                    }
                )}
            </ul>
        </S.TabMenu>
    );
};




