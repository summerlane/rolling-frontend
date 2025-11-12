import {
    CardContainer,
    Card,
    CardEditButton,
    CardContentContainer,
    CardContentStatus,
    CardContentStatusContainer,
    CardContentStatusProfileImage,
    CardContentStatusProfileName,
    CardContentStatusRelationship,
    CardContentText,
    CardContentDate,
    CardContentStatusProfileContainer,
    CardContentDeleteButton,
} from "@/styles/rolling-page-styles";
import { useState } from "react";
import useCards from "@/hooks/use-cards";


export default function CardContents({ maxVisible = 6 }) {
    const [cards] = useState([
        { id: 1, name: '김철수', profileImageURL: 'https://via.placeholder.com/28', relationship: 'friend' },
        { id: 2, name: '이영희', profileImageURL: 'https://via.placeholder.com/28', relationship: 'family' },
        { id: 3, name: '박민수', profileImageURL: 'https://via.placeholder.com/28', relationship: 'colleague' },
        { id: 4, name: '최영희', profileImageURL: 'https://via.placeholder.com/28', relationship: 'acquaintance' },
        { id: 5, name: 'dsadsa', profileImageURL: 'https://via.placeholder.com/28', relationship: 'friend' },
        { id: 6, name: 'qweqwe', profileImageURL: 'https://via.placeholder.com/28', relationship: 'family' },
        { id: 7, name: 'zxczxc', profileImageURL: 'https://via.placeholder.com/28', relationship: 'colleague' },
        { id: 8, name: 'm,nmnb', profileImageURL: 'https://via.placeholder.com/28', relationship: 'acquaintance' }
    ]);
    const { visibleCards } = useCards(cards, maxVisible);

    return (
        <>
            <CardContainer>
                <Card><CardEditButton></CardEditButton></Card>
                {visibleCards.map((card) => (
                    <Card key={card.id}>
                        <CardContentContainer>
                            <CardContentStatus>
                                <CardContentStatusContainer>
                                    <CardContentStatusProfileImage src={card.profileImageURL} />
                                    <CardContentStatusProfileContainer>
                                        <CardContentStatusProfileName>From. <strong>{card.name}</strong></CardContentStatusProfileName>
                                        <CardContentStatusRelationship $relationship={card.relationship}>{card.relationship}</CardContentStatusRelationship>
                                    </CardContentStatusProfileContainer>
                                </CardContentStatusContainer>
                                <CardContentDeleteButton></CardContentDeleteButton>
                            </CardContentStatus>
                            <CardContentText>sdasdsa</CardContentText>
                            <CardContentDate>2025.11.12</CardContentDate>
                        </CardContentContainer>

                    </Card>
                ))}
            </CardContainer>
        </>
    );
}