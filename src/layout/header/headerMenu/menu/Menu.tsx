import React from 'react';
import {S} from "../HeaderMenu_Styles"

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.ListMenu>
            {props.menuItems.map(
                (item, index) => {
                    return <S.ListItem key={index}>
                        <S.Link href="">{item}
                            <S.Mask>
                                <span>{item}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item}</span>
                            </S.Mask>
                        </S.Link>
                    </S.ListItem>
                }
            )}
        </S.ListMenu>
    );
};



